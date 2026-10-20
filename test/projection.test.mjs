import test from 'node:test'
import assert from 'node:assert/strict'

import { projection, workflowProjection } from '../index.js'

const run = (state, type, data, time = 0) => workflowProjection.apply(state, { type, time, data })

test('stance projection follows the command lifecycle', () => {
  let state = projection.init()
  assert.deepEqual(projection.wire.view(state), { active: false, pending: false })

  state = projection.apply(state, {
    type: 'command/run',
    data: { commandId: 'c1', name: 'ultracode', args: '' },
  })
  assert.deepEqual(projection.wire.view(state), { active: false, pending: true })

  state = projection.apply(state, { type: 'command/done', data: { commandId: 'c1', kind: 'success' } })
  assert.deepEqual(projection.wire.view(state), { active: true, pending: false })

  // `status` does not disturb the committed stance.
  const status = projection.apply(state, {
    type: 'command/run',
    data: { commandId: 'c2', name: 'ultracode', args: 'status' },
  })
  assert.equal(status, state)

  state = projection.apply(state, {
    type: 'command/run',
    data: { commandId: 'c3', name: 'ultracode', args: 'off' },
  })
  state = projection.apply(state, { type: 'command/done', data: { commandId: 'c3', kind: 'success' } })
  assert.equal(state.active, false)
})

test('a failed command leaves the stance unchanged', () => {
  let state = projection.init()
  state = projection.apply(state, {
    type: 'command/run',
    data: { commandId: 'c1', name: 'ultracode', args: 'on' },
  })
  state = projection.apply(state, { type: 'command/done', data: { commandId: 'c1', kind: 'error' } })
  assert.equal(state.active, false)
  assert.equal(state.running, null)
})

test('workflow ledger records phases, agents, and cancellation', () => {
  let state = workflowProjection.init()
  state = run(state, 'tool-workflow/run-start', { runId: 'r1', name: 'lanes' }, 1000)
  state = run(
    state,
    'tool-workflow/agent-start',
    { runId: 'r1', seq: 1, label: 'author:time', phase: 'Author', childId: 'c1' },
    2000,
  )
  state = run(
    state,
    'tool-workflow/agent-start',
    { runId: 'r1', seq: 2, label: 'review:linux', phase: 'Review', childId: 'c2' },
    2100,
  )
  state = run(
    state,
    'tool-workflow/agent-start',
    { runId: 'r1', seq: 3, label: 'unphased', childId: 'c3' },
    2200,
  )
  state = run(
    state,
    'tool-workflow/agent-start',
    { runId: 'r1', seq: 4, label: 'empty-phase', phase: '', childId: 'c4' },
    2300,
  )
  state = run(state, 'tool-workflow/agent-end', { runId: 'r1', seq: 1, outcome: 'completed' }, 3000)
  state = run(state, 'tool-workflow/agent-end', { runId: 'r1', seq: 2, outcome: 'cancelled' }, 3100)
  state = run(state, 'tool-workflow/run-end', { runId: 'r1', stopReason: 'completed' }, 4000)

  const view = workflowProjection.wire.view(state)
  assert.equal(view.runs.length, 1)
  const [ledger] = view.runs
  assert.equal(ledger.status, 'completed')
  assert.equal(ledger.agents, 4)
  assert.equal(ledger.completed, 1)
  assert.equal(ledger.cancelled, 1)
  assert.equal(ledger.running, 0)
  assert.equal(ledger.phases.length, 4)

  const phases = Object.fromEntries(ledger.phases.map((phase) => [phase.key, phase]))
  assert.equal(phases['p:6:Author'].members[0].status, 'completed')
  assert.equal(phases['p:6:Review'].members[0].status, 'cancelled')
  assert.equal(phases['~unphased'].members[0].label, 'unphased')
  assert.equal(phases['~empty'].members[0].label, 'empty-phase')
  assert.equal(phases['~unphased'].title, '')
  assert.equal(phases['p:6:Author'].members[0].startedAt, 2000)
  assert.equal(phases['p:6:Author'].members[0].endedAt, 3000)
})

test('turn/end closes runs abandoned by an interrupted or forked turn', () => {
  let state = workflowProjection.init()
  state = run(state, 'tool-workflow/run-start', { runId: 'r1', name: 'one' }, 1000)
  state = run(
    state,
    'tool-workflow/agent-start',
    { runId: 'r1', seq: 1, label: 'a', phase: 'Review', childId: 'c1' },
    1100,
  )

  // An ordinary turn end leaves a background run alone.
  const running = run(state, 'turn/end', { turn: 1, reason: { kind: 'completed' } }, 2000)
  assert.equal(running, state)
  assert.equal(workflowProjection.wire.view(running).runs[0].status, 'running')

  // A crash or fork boundary closes it.
  const closed = run(running, 'turn/end', { turn: 1, reason: { kind: 'forked' } }, 3000)
  const [ledger] = workflowProjection.wire.view(closed).runs
  assert.equal(ledger.status, 'interrupted')
  assert.equal(ledger.endedAt, 3000)
  assert.equal(ledger.phases[0].members[0].status, 'interrupted')
  assert.equal(ledger.phases[0].members[0].endedAt, 3000)
})

test('malformed checkpoints are sanitized instead of throwing', () => {
  const valid = {
    runId: 'ok',
    name: 'kept',
    status: 'running',
    startedAt: 1,
    endedAt: null,
    members: [
      null,
      { seq: 1, label: 'a', childId: 'c', phase: null, status: 'running', startedAt: 2, endedAt: null },
    ],
  }
  const state = workflowProjection.stateSchema.parse({ runs: [null, {}, valid] })
  assert.equal(state.runs.length, 1)
  assert.equal(state.runs[0].members.length, 1)
  assert.deepEqual(workflowProjection.stateSchema.parse(null), { runs: [] })
  assert.deepEqual(workflowProjection.wire.viewSchema.parse({ runs: [] }), { runs: [] })
})
