/**
 * Ultracode — a session-scoped "maximum orchestration" mode for DeepSeek
 * Harness.
 *
 * The mode is a pure fold over the session log: every `/ultracode` command run
 * is already recorded as a `command/run` / `command/done` pair, so the
 * projection below derives the current stance without inventing a session
 * event type. That keeps resume, fork, and replay correct by construction.
 *
 * While the mode is active, one prompt section is contributed after the
 * workflow tool's own guidance (order 2600) so that this section can resolve
 * the "only when the user explicitly asks" restriction in favour of the mode.
 *
 * @module @local/dsh-ultracode
 */

const PACKAGE = '@local/dsh-ultracode'
const COMMAND = 'ultracode'
const PROJECTION_KEY = 'ultracode'
const WORKFLOWS_KEY = 'ultracodeRuns'
const SECTION_NAME = 'ultracode:policy'
/** After TOOL_WORKFLOW (2600), before TOOL_RALPH (2700). */
const SECTION_ORDER = 2650
/** Bound the folded history; the panel reads the newest slice only. */
const WORKFLOW_RUN_LIMIT = 50
const WORKFLOW_VIEW_LIMIT = 20

/**
 * Deployment-owned guidance. It is deliberately concrete: the value of the
 * mode comes from phase discipline, partitioned ownership, and adversarial
 * verification, not from "think harder" language.
 */
const POLICY = `# Ultracode mode

Ultracode is active for this session. The user explicitly opted into large multi-agent orchestration on every substantive task; that is the explicit request the workflow guidance otherwise waits for. While this section is present, prefer a \`workflow\` run over serial solo work.

## Choose the execution shape first
Substantive work means any request that needs exploration across multiple files or sources, more than one independent unit of work, a change plus verification, multi-angle research, or an audit, migration, or sweep. For substantive work, scope first and then run a \`workflow\` script; do not start editing files solo. Trivial work — a single lookup, one command, a one-line edit, a direct question — stays direct; say why in one short sentence.

## Orchestration contract
1. Scope: restate the goal as testable success criteria, list constraints, and identify the independent units (files, modules, endpoints, sources, hypotheses).
2. Plan phases: put them in \`meta.phases\` and advance with \`phase()\`, for example scope → investigate → act → verify → synthesize.
3. Fan out: use \`pipeline()\` for items that can move independently and \`parallel()\` only where a real barrier needs every earlier result. Pass shared inputs through \`args\` instead of duplicating them in every prompt.
4. Brief every \`agent()\`: inputs, exact deliverable, evidence required, and what it must not touch. Use a \`schema\` for structured findings, and account for \`null\` results instead of ignoring them.
5. Isolate writers: never let two agents write the same file or resource. Partition ownership explicitly; keep final integration and every user-facing decision in the parent.
6. Verify adversarially: include at least one independent checker per material claim or change, instructed to find counterexamples, edge cases, and regressions rather than to confirm. Prefer executable evidence — tests, builds, reproductions — over assertions.
7. Synthesize: reconcile disagreements, rerun what failed, and separate what was verified from what was inferred. A workflow result is evidence, not a conclusion.

## Boundaries
- Never delegate authority the user reserved: approvals, questions, secret access, destructive or irreversible operations.
- Scale to the work: typically 3–8 agents for a focused task, more only for genuinely broad sweeps. Do not run a workflow to restate the request or for trivial work.
- If the \`workflow\` tool is unavailable, fall back to \`subagent\` delegation and say that Ultracode degraded.
- \`/ultracode off\` ends the mode; resume normal execution immediately.

## Reporting
Lead with the outcome. Name the workflow and phases, report \`agentsStarted\`, and cite the verification evidence behind each material claim. State residual risk and anything the workflow could not verify.`

/** Strict, dependency-free validator for the projected state. */
const stateSchema = {
  parse(value) {
    if (value === null || typeof value !== 'object' || Array.isArray(value)) {
      throw new TypeError('ultracode: state must be an object')
    }
    if (typeof value.active !== 'boolean') {
      throw new TypeError('ultracode: state.active must be a boolean')
    }
    const running = value.running
    if (running !== null) {
      if (running === undefined || typeof running !== 'object' || Array.isArray(running)) {
        throw new TypeError('ultracode: state.running must be null or an object')
      }
      if (typeof running.commandId !== 'string') {
        throw new TypeError('ultracode: state.running.commandId must be a string')
      }
      if (typeof running.wanted !== 'boolean') {
        throw new TypeError('ultracode: state.running.wanted must be a boolean')
      }
    }
    return value
  },
}

/** Strict validator for the client-visible view. */
const viewSchema = {
  parse(value) {
    if (value === null || typeof value !== 'object' || Array.isArray(value)) {
      throw new TypeError('ultracode: view must be an object')
    }
    if (typeof value.active !== 'boolean') {
      throw new TypeError('ultracode: view.active must be a boolean')
    }
    if (typeof value.pending !== 'boolean') {
      throw new TypeError('ultracode: view.pending must be a boolean')
    }
    return value
  },
}

/** Interpret a command's raw argument as a desired stance. */
function wantedFromArgument(argument, active) {
  const value = typeof argument === 'string' ? argument.trim().toLowerCase() : ''
  if (value === '') return !active
  if (value === 'on') return true
  if (value === 'off') return false
  return null
}

export const projection = {
  key: PROJECTION_KEY,
  stateVersion: 1,
  stateSchema,
  init: () => ({ active: false, running: null }),
  apply(state, event) {
    if (event.type === 'command/run' && event.data.name === COMMAND) {
      const wanted = wantedFromArgument(event.data.args, state.active)
      // `status` and malformed arguments are reported by the handler; they do
      // not disturb the committed stance.
      if (wanted === null) return state
      return {
        ...state,
        running: { commandId: event.data.commandId, wanted },
      }
    }
    if (event.type === 'command/done' && state.running !== null) {
      if (event.data.commandId !== state.running.commandId) return state
      return {
        active: event.data.kind === 'success' ? state.running.wanted : state.active,
        running: null,
      }
    }
    return state
  },
  wire: {
    viewSchema,
    view(state) {
      return {
        active: state.active,
        pending: state.running !== null && state.running.wanted !== state.active,
      }
    },
  },
}

export const inject = ['systemPrompt', 'sessionProjections']

function isRecord(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

const RUN_STATUSES = new Set(['running', 'completed', 'failed', 'cancelled', 'interrupted'])
const MEMBER_STATUSES = new Set(['running', 'completed', 'failed', 'cancelled', 'interrupted'])

function sanitizeMember(value) {
  if (!isRecord(value)) return null
  if (typeof value.seq !== 'number' || typeof value.label !== 'string' || typeof value.childId !== 'string') return null
  const status = MEMBER_STATUSES.has(value.status) ? value.status : 'failed'
  return {
    seq: value.seq,
    label: value.label,
    childId: value.childId,
    phase: typeof value.phase === 'string' ? value.phase : null,
    status,
    startedAt: typeof value.startedAt === 'number' ? value.startedAt : 0,
    endedAt: typeof value.endedAt === 'number' ? value.endedAt : null,
  }
}

function sanitizeRun(value) {
  if (!isRecord(value)) return null
  if (typeof value.runId !== 'string' || typeof value.name !== 'string') return null
  return {
    runId: value.runId,
    name: value.name,
    status: RUN_STATUSES.has(value.status) ? value.status : 'failed',
    startedAt: typeof value.startedAt === 'number' ? value.startedAt : 0,
    endedAt: typeof value.endedAt === 'number' ? value.endedAt : null,
    members: Array.isArray(value.members) ? value.members.map(sanitizeMember).filter(Boolean) : [],
  }
}

/**
 * Validate and sanitize the workflow fold's persisted state. A stale or
 * malformed checkpoint row must not throw during a cold read: the registry's
 * restore path does not catch, so dropping invalid entries is the safe total
 * behaviour.
 */
const workflowStateSchema = {
  parse(value) {
    const runs = isRecord(value) && Array.isArray(value.runs) ? value.runs.map(sanitizeRun).filter(Boolean) : []
    return { runs }
  },
}

/** The view is produced by this module; only its outer shape needs guarding. */
const workflowViewSchema = {
  parse(value) {
    if (!isRecord(value) || !Array.isArray(value.runs)) return { runs: [] }
    return value
  },
}

function findRun(state, runId) {
  for (let index = 0; index < state.runs.length; index += 1) {
    if (state.runs[index].runId === runId) return index
  }
  return -1
}

function replaceRun(state, index, run) {
  const runs = state.runs.slice()
  runs[index] = run
  return { runs }
}

/**
 * Durable workflow-run ledger. The tool's four `tool-workflow/*` records carry
 * identities, phases, outcomes, and event times — exactly what a live
 * orchestration panel needs. Usage and model stay on each child Session and
 * are joined in the browser from the sessions catalog; this projection never
 * invents data the parent log does not contain.
 */
export const workflowProjection = {
  key: WORKFLOWS_KEY,
  // v2: cancelled member status, raw phase identity, turn/end abandonment.
  stateVersion: 2,
  stateSchema: workflowStateSchema,
  init: () => ({ runs: [] }),
  apply(state, event) {
    if (!isRecord(event.data)) return state
    const data = event.data
    const time = typeof event.time === 'number' ? event.time : 0
    switch (event.type) {
      case 'tool-workflow/run-start': {
        if (typeof data.runId !== 'string' || typeof data.name !== 'string') return state
        if (findRun(state, data.runId) !== -1) return state
        const run = {
          runId: data.runId,
          name: data.name,
          status: 'running',
          startedAt: time,
          endedAt: null,
          members: [],
        }
        const runs = [...state.runs, run]
        return { runs: runs.length > WORKFLOW_RUN_LIMIT ? runs.slice(-WORKFLOW_RUN_LIMIT) : runs }
      }
      case 'tool-workflow/agent-start': {
        if (typeof data.runId !== 'string' || typeof data.seq !== 'number') return state
        if (typeof data.label !== 'string' || typeof data.childId !== 'string') return state
        const index = findRun(state, data.runId)
        if (index === -1) return state
        const run = state.runs[index]
        if (run.members.some((member) => member.seq === data.seq)) return state
        const member = {
          seq: data.seq,
          label: data.label,
          childId: data.childId,
          phase: typeof data.phase === 'string' ? data.phase : null,
          status: 'running',
          startedAt: time,
          endedAt: null,
        }
        return replaceRun(state, index, { ...run, members: [...run.members, member] })
      }
      case 'tool-workflow/agent-end': {
        if (typeof data.runId !== 'string' || typeof data.seq !== 'number') return state
        const index = findRun(state, data.runId)
        if (index === -1) return state
        const run = state.runs[index]
        const memberIndex = run.members.findIndex((member) => member.seq === data.seq)
        if (memberIndex === -1) return state
        if (run.members[memberIndex].endedAt !== null) return state
        const members = run.members.slice()
        members[memberIndex] = {
          ...members[memberIndex],
          status:
            data.outcome === 'completed'
              ? 'completed'
              : data.outcome === 'cancelled'
                ? 'cancelled'
                : 'failed',
          endedAt: time,
        }
        return replaceRun(state, index, { ...run, members })
      }
      case 'tool-workflow/run-end': {
        if (typeof data.runId !== 'string') return state
        const index = findRun(state, data.runId)
        if (index === -1) return state
        const run = state.runs[index]
        if (run.endedAt !== null) return state
        const status =
          data.stopReason === 'completed'
            ? 'completed'
            : data.stopReason === 'cancelled'
              ? 'cancelled'
              : 'failed'
        // A run closes only after its children settle; a member still marked
        // running here lost its terminal record, so report it as interrupted
        // rather than leaving a permanent spinner.
        const members = run.members.map((member) =>
          member.endedAt === null
            ? { ...member, status: 'interrupted', endedAt: time }
            : member,
        )
        return replaceRun(state, index, { ...run, status, endedAt: time, members })
      }
      case 'turn/end': {
        // A crash resume or a fork seed closes the open turn with an
        // interrupted/forked reason instead of appending run-end. Without this
        // arm, such a run would stay live forever and keep the client's clock
        // and spinner running. Ordinary turn ends (completed/aborted/error)
        // leave background runs alone.
        const reason = data.reason
        if (!isRecord(reason) || (reason.kind !== 'interrupted' && reason.kind !== 'forked')) return state
        let changed = false
        const runs = state.runs.map((run) => {
          if (run.endedAt !== null) return run
          changed = true
          return {
            ...run,
            status: 'interrupted',
            endedAt: time,
            members: run.members.map((member) =>
              member.endedAt === null ? { ...member, status: 'interrupted', endedAt: time } : member,
            ),
          }
        })
        return changed ? { runs } : state
      }
      default:
        return state
    }
  },
  wire: {
    viewSchema: workflowViewSchema,
    view(state) {
      const runs = state.runs
        .slice(-WORKFLOW_VIEW_LIMIT)
        .reverse()
        .map((run) => {
          const phases = []
          const byKey = new Map()
          let completed = 0
          let failed = 0
          let cancelled = 0
          let interrupted = 0
          let running = 0
          for (const member of [...run.members].sort((left, right) => left.seq - right.seq)) {
            if (member.status === 'completed') completed += 1
            else if (member.status === 'failed') failed += 1
            else if (member.status === 'cancelled') cancelled += 1
            else if (member.status === 'interrupted') interrupted += 1
            else if (member.status === 'running') running += 1
            // Identity must not be the display label: an explicit phase named
            // "Agents" or a whitespace-only phase must stay distinct from the
            // unphased bucket, and trimming would merge distinct titles.
            const phaseKey =
              member.phase === null
                ? '~unphased'
                : member.phase === ''
                  ? '~empty'
                  : 'p:' + String(member.phase.length) + ':' + member.phase
            const phaseTitle = member.phase === null || member.phase === '' ? '' : member.phase
            let phase = byKey.get(phaseKey)
            if (phase === undefined) {
              phase = { key: phaseKey, title: phaseTitle, members: [] }
              byKey.set(phaseKey, phase)
              phases.push(phase)
            }
            phase.members.push({
              seq: member.seq,
              label: member.label,
              childId: member.childId,
              status: member.status,
              startedAt: member.startedAt,
              endedAt: member.endedAt,
            })
          }
          return {
            runId: run.runId,
            name: run.name,
            status: run.status,
            startedAt: run.startedAt,
            endedAt: run.endedAt,
            agents: run.members.length,
            completed,
            failed,
            cancelled,
            interrupted,
            running,
            phases,
          }
        })
      return { runs }
    },
  },
}

/**
 * Register the projections, the conditional policy section, and the
 * `/ultracode` command.
 * @param ctx - plugin context owned by the bundle row.
 */
export function apply(ctx) {
  ctx.effect(() => ctx.sessionProjections.register(projection), 'ultracode: session projection')
  ctx.effect(
    () => ctx.sessionProjections.register(workflowProjection),
    'ultracode: workflow projection',
  )

  ctx.effect(
    () =>
      ctx.systemPrompt.section({
        name: SECTION_NAME,
        order: SECTION_ORDER,
        text: (context) => {
          if (context.agent === undefined) return ''
          const state = ctx.sessionProjections.stateOf(context.agent.session, PROJECTION_KEY)
          if (state === undefined) return ''
          const active = state.running === null ? state.active : state.running.wanted
          return active ? POLICY : ''
        },
      }),
    'ultracode: policy section',
  )

  ctx.inject(['commands'], (commandCtx) => {
    commandCtx.commands.register({
      definitionId: PACKAGE,
      name: COMMAND,
      description: 'Arm or disarm Ultracode — dynamic workflows on every substantive task',
      input: { hint: '[on|off|status]' },
      handler: ({ agent, rawInput }) => {
        const state = ctx.sessionProjections.stateOf(agent.session, PROJECTION_KEY)
        if (state === undefined) {
          throw new Error('Ultracode is unavailable: its session projection is not registered')
        }
        // Read the committed stance, not the in-flight `running` selection:
        // `command/run` is appended before this handler, so `running` already
        // carries this command's target and would invert a bare toggle.
        const current = state.active
        const argument = rawInput.trim().toLowerCase()
        if (argument === 'status') {
          return {
            kind: 'success',
            text: current
              ? 'Ultracode is on for this session: substantive tasks run as dynamic workflows.'
              : 'Ultracode is off for this session: normal execution is in effect.',
          }
        }
        if (argument !== '' && argument !== 'on' && argument !== 'off') {
          return { kind: 'error', text: 'Usage: /ultracode [on|off|status]' }
        }
        const target = argument === '' ? !current : argument === 'on'
        if (target === current) {
          return {
            kind: 'success',
            text: target
              ? 'Ultracode is already on for this session.'
              : 'Ultracode is already off for this session.',
          }
        }
        return {
          kind: 'success',
          text: target
            ? 'Ultracode on for this session: every substantive task runs as a dynamic workflow. Expect more time and usage; /ultracode off disables it.'
            : 'Ultracode off: normal execution resumes.',
        }
      },
    })
  })
}
