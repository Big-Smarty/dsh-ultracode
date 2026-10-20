<img src="icon.svg" width="64" alt="Ultracode logo">

# Ultracode

**Dynamic workflows for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness).**

Ultracode is a session mode that turns every substantive task into a multi-agent workflow. Arm it once; the agent scopes the work, writes a `workflow` script, fans out subagents in phases, verifies adversarially, and synthesizes the result.

[![test](https://github.com/Big-Smarty/dsh-ultracode/actions/workflows/test.yml/badge.svg)](https://github.com/Big-Smarty/dsh-ultracode/actions/workflows/test.yml)
[![license: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Features

- **Session mode, not a model setting.** `/ultracode [on|off|status]` arms one session. The stance is folded from the command log, so resume, fork, and replay restore it.
- **Workflow-first policy.** While armed, a prompt section after the `workflow` tool's own guidance classifies work as substantive or trivial, requires phases and `pipeline`/`parallel` fan-out, isolates writers, adds adversarial verification, and asks for evidence in the report.
- **Composer switch.** A quiet pill when off, an electric gradient with a pulsing bolt when armed, plus a travelling seam along the composer edge.
- **Workflow sidebar.** The `ULTRA` badge opens a right-sidebar ledger: running and finished runs, phase cards with progress rails and dots, per-agent status, model, tokens, and wall time, verification shields, a high-fan-out marker, and child-transcript drill-down.
- **Answers from the log.** No new session-event types. One projection folds `/ultracode` command lifecycles; another folds `tool-workflow/*` records and closes runs abandoned by interrupted or forked turns. Phases keep their raw identity; cancelled outcomes stay distinct from failures.
- **No build step, no dependencies.** Plain ESM and browser JavaScript, host theme tokens, English and Chinese copy.

## Install

Requires DeepSeek Harness with the `workflow` tool and the Web/Desktop right sidebar. Tested with **0.2.1-rc.2**; nearby versions with the same services should work.

### From GitHub

1. Open **Plugins** in the DSH sidebar.
2. Choose **Add plugin** → **Install third-party plugin**.
3. Enter the repository URL:

   ```text
   https://github.com/Big-Smarty/dsh-ultracode.git
   ```

   A local clone path works too, and keeps the checkout linked for edits.
4. Install and enable the bundle, then **refresh the page once** so the client half loads.

Or ask your DSH agent to install the bundle from the same URL.

### Local clone

```bash
git clone https://github.com/Big-Smarty/dsh-ultracode.git
cd dsh-ultracode
npm test
```

Install the cloned directory through **Plugins → Add plugin** as above. The plugin is linked rather than copied, so later edits are picked up after a refresh.

## Usage

| Action | How |
| --- | --- |
| Arm the session | `/ultracode`, or click the Ultracode pill in the composer |
| Disarm | `/ultracode off`, the composer pill, or the panel's power button |
| Check the stance | `/ultracode status` |
| Open the ledger | Click the `ULTRA` badge in the session header, or right sidebar → **Ultracode** |
| Inspect a run | Expand **Finished**, open a phase, click an agent to read its child transcript |

Ultracode is per session. Trivial requests — a lookup, a one-line edit, a single command — stay direct and say why. Substantive requests become workflows.

The panel is workflow-focused. Shell and other background jobs remain in DSH's existing jobs control.

### Troubleshooting

- **The `ULTRA` badge shows a red `!`** — hover it for the failure. The opener falls back to expanding the right sidebar guide.
- **The Ultracode tab is missing or unavailable after an update** — hard-refresh the page (`Ctrl+Shift+R`). Client plugins are loaded from the page's module graph at boot, so a stale graph can survive a hot reload.
- **The badge does nothing at all** — check **Settings → Plugins** for a page-local client sync error, then refresh and retry.

## How it works

- `ultracode` projection — `{ active, pending }` folded from `command/run` / `command/done`.
- `ultracodeRuns` projection — run, phase, member, status, and timing data folded from `tool-workflow/run-start|agent-start|agent-end|run-end`, with `turn/end` handling for interrupted and forked turns.
- `ultracode:policy` — a prompt section at order `2650`, after the workflow tool's guidance at `2600`; empty while disarmed.
- Client half — a composer pill, an `ULTRA` badge, an armed seam, and a right-sidebar tab type. Agent model/token/time values join each member's `childId` to the sessions catalog.

More detail: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

## Development

```bash
npm test
```

The tests use Node's built-in test runner and cover the stance, the workflow ledger, abandoned-run closure, phase identity, cancellation, and checkpoint sanitization. CI runs on every push and pull request.

```text
index.js            Host half: projections, policy section, /ultracode command
client.js           Client half: switch, badge, seam, workflow sidebar, styles
cordis.patch.yml    Loads the bundle row
locale/             Plugin-inventory metadata (en, zh)
test/               Projection tests
docs/               Architecture and design notes
```

## Cost and safety

Ultracode deliberately spends more tokens and time: it asks for several child agents per substantive task. `/ultracode off` returns to normal execution immediately.

The plugin runs Host code in-process with your permissions. Install it only if you trust the source. It does not bypass approvals, sandbox policy, plan mode, or tool restrictions.

## License

MIT. See [LICENSE](LICENSE).
