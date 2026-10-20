# Architecture and design notes

This is the longer design note for [Ultracode](https://github.com/Big-Smarty/dsh-ultracode). See the [README](../README.md) for installation and day-to-day usage.

Ultracode is a session-scoped operating mode that turns every **substantive** task into a deliberate multi-agent workflow. It is a mode, not a bigger model and not a reasoning-effort level.

The premise is simple. DeepSeek Harness already ships the `workflow` tool: a model-written JavaScript script that fans work out across subagents with phases, structured results, `pipeline`, and `parallel`. That tool's default guidance says to use it *only* when the user explicitly asks for large orchestration. Ultracode is that explicit request, made once for the whole session.

## What it changes

### Model behaviour

While armed, one prompt section (`ultracode:policy`, order `2650` — after the `workflow` tool guidance at `2600`) is added to every request in the session. It requires the model to:

- classify the request as substantive or trivial, and act directly only for trivial work;
- scope the work as testable success criteria before touching files;
- run a `workflow` script with `meta.phases` (scope → investigate → act → verify → synthesize);
- use `pipeline` for independent items and `parallel` only at real barriers;
- give every `agent()` a self-contained brief, a structured `schema`, and explicit non-goals;
- partition write ownership so no two agents touch the same file;
- include an independent, adversarial verifier for each material claim or change;
- report the workflow name, `agentsStarted`, and the evidence behind each claim.

Ultracode does not bypass approvals, sandbox policy, plan mode, or tool restrictions. It changes orchestration, not authority.

### Composer UI

- **Ultracode switch** in the composer tool row (left of the model selector). Off is a quiet, bordered pill; on becomes a flat accent tint with a status dot. The switch is optimistic, then reconciled with the host projection; failures show inline.
- **Session-header badge** (`ULTRA`) at the top right of the conversation; it opens the workflow sidebar and doubles as the armed indicator.
- **Armed-composer seam**: a thin, flat 1px accent line along the top edge of the composer card.
- **Command-menu entry** for `/ultracode`, contributed automatically by the harness command registry.

When a workflow actually runs, the transcript's native `workflow-run` card shows phases, agents, and progress — the visible payoff of the mode.

### The workflow sidebar

The `ULTRA` badge in the session header opens a dedicated **Ultracode** tab in the right sidebar:

- **Live run ledger** — active and finished workflow runs, newest first, with status, elapsed time, agent count, and total tokens.
- **Phase lanes** — every phase with a progress rail, dots, and a `settled/total` count. Phases named Review, Verify, Check, Audit, or Adversarial carry a small `verify` tag and a flat tint.
- **Agent rows** — status, label, model, token total, and wall time. Each row is live: running agents tick, and tokens/models update from the child Session's own projections.
- **Drill-down** — click an agent to open its child conversation in the right sidebar: a new pane when the layout allows, otherwise a sibling tab. The workflow ledger stays open.
- **One overview block** — the panel opens with a single card that merges state, totals, a one-line explanation, and the only arm/stand-down control. When Ultracode is off, history remains readable below it.
- **Cost context** — the panel keeps total workflows, agents, and tokens visible, and marks runs above twelve agents as high fan-out.

The badge is always present once the Host projection is available, so the ledger is reachable even while the mode is off. The right sidebar's guide also lists the panel as an entry.

## Usage

```text
/ultracode            # toggle the mode for this session
/ultracode on         # arm it explicitly
/ultracode off        # stand down
/ultracode status     # read the committed stance
```

The composer switch performs the same operation through the command plane. The stance is per session.

## Architecture

- **One durable source.** Ultracode adds no new session-event type. The `ultracode` projection folds the existing `command/run` and `command/done` events for the `/ultracode` command. Resume, fork, and replay recover the stance from the log; the projection is the only state.
- **Wire view.** The projection publishes `{ active, pending }` to the client. The composer reads it through `useProjection('ultracode')`; no client-side scanning of session events.
- **Conditional prompt.** The section resolves the session's projected stance at each assembly, so a toggle takes effect on the next model step and costs zero tokens while off.
- **Optional commands.** The command half activates through `ctx.inject(['commands'], …)`; a composition without commands still gets the projection and section, and simply has no way to arm the mode.
- **Theme-token styling.** The client half uses only host tokens and plain React; it imports no Harness Client package and writes no DOM outside its own slot entries.

## Cost

Ultracode is deliberately expensive: it asks for several child agents per substantive task. Subscription limits, token budgets, and wall-clock time all move faster. `/ultracode off` returns the session to normal execution immediately. Trivial requests are explicitly exempted so the mode does not spend a workflow on a one-line answer.

## Package layout

| File | Role |
|---|---|
| `index.js` | Host half: stance projection, workflow ledger projection, policy section, `/ultracode` command |
| `client.js` | Client half: switch, badge, seam, workflow sidebar, locale registration, styles |
| `cordis.patch.yml` | Inserts the `ultracode` row |
| `locale/en.json`, `locale/zh.json` | Plugin-inventory title and description |
| `icon.svg` | Original plugin artwork |

## Verification

The `ultracode` stance projection folds command lifecycles; the `ultracodeRuns` ledger folds the tool's four `tool-workflow/*` records with their event timestamps. The sidebar joins each member's `childId` to the sessions catalog for model, token, and timing projections. The ledger (`stateVersion` 2) preserves cancelled outcomes, keys phases by raw identity rather than display text, and closes runs left open by an interrupted or forked turn; child drill-down resolves the durable subagent address instead of guessing `one-shot`, so inherited runs in a fork stay navigable.

The ledger and client were exercised with a four-agent review workflow (`ultracode-sidebar-review`) covering run-start, four agent lifecycles, run-end, and the child model/token/timing joins. The unit tests in [`test/projection.test.mjs`](../test/projection.test.mjs) cover the stance, the ledger, abandoned-run closure, phase identity, cancellation, and checkpoint sanitization.
