window.__ModuleLoader__.load({
  id: '@local/dsh-ultracode',
  factory(require) {
    const React = require('react')
    const h = React.createElement

    const NS = 'ultracode'
    const STYLE_ID = '@local/dsh-ultracode/ultracode.css'
    const TAB_ID = '@local/dsh-ultracode/workflows'
    const TAB_KIND = 'ultracode'

    const en = {
      'pill.label': 'Ultracode',
      'pill.on.title': 'Ultracode is on — every substantive task runs as a dynamic workflow. Click to turn off (/ultracode off).',
      'pill.off.title': 'Ultracode is off — click to arm dynamic workflows for every substantive task (/ultracode on).',
      'pill.on.aria': 'Ultracode on, press to turn off',
      'pill.off.aria': 'Ultracode off, press to turn on',
      'pill.pending.title': 'Switching Ultracode…',
      'pill.error': 'Toggle failed',
      'pill.timeout': 'Ultracode did not confirm the change; check that the Host plugin is active.',
      'badge.text': 'ULTRA',
      'badge.title': 'Open the Ultracode workflow panel — dynamic workflows are armed.',
      'badge.historyTitle': 'Open the Ultracode workflow panel.',
      'badge.aria': 'Open Ultracode workflows, armed',
      'badge.historyAria': 'Open Ultracode workflows',
      'panel.title': 'Ultracode',
      'panel.guide': 'Live workflow runs: phases, agents, models, tokens, and time.',
      'panel.arm': 'Arm Ultracode',
      'panel.disarm': 'Stand down',
      'panel.arming': 'Arming…',
      'panel.disarming': 'Standing down…',
      'panel.armed': 'Armed',
      'panel.off': 'Off',
      'panel.state.loading': 'Loading workflows…',
      'panel.state.armed': 'Phases and agents update live.',
      'panel.state.armedIdle': 'Waiting for the first substantive task. Trivial requests stay direct.',
      'panel.state.offHistory': 'History stays inspectable.',
      'panel.state.offIdle': 'No workflows yet. The next substantive request runs as a workflow once armed.',
      'panel.state.noWorkflow': 'Workflow unavailable in this preset.',
      'panel.unavailable': 'Unavailable',
      'panel.workflowCount': '{count} workflow',
      'panel.workflowsCount': '{count} workflows',
      'panel.agentCount': '{count} agent',
      'panel.agentsCount': '{count} agents',
      'panel.tokensCount': '{tokens} tokens',
      'panel.agent': 'Agent',
      'panel.tokens': 'Tokens',
      'panel.time': 'Time',
      'panel.openChild': 'Open {name} transcript',
      'panel.verification': 'Verification phase',
      'panel.verifyTag': 'verify',
      'panel.unphased': 'Agents',
      'panel.noAgents': 'No agents started',
      'panel.highFanout': 'high fan-out',
      'panel.finished': 'Finished',
      'panel.starting': 'Starting…',
      'panel.cost': 'Dynamic workflows spend more tokens and time than serial work.',
      'panel.status.running': 'Running',
      'panel.status.completed': 'Completed',
      'panel.status.failed': 'Failed',
      'panel.status.cancelled': 'Cancelled',
      'panel.status.interrupted': 'Interrupted',
    }

    const zh = {
      'pill.label': 'Ultracode',
      'pill.on.title': 'Ultracode 已开启 — 每个实质性任务都会作为动态工作流执行。点击关闭（/ultracode off）。',
      'pill.off.title': 'Ultracode 已关闭 — 点击为每个实质性任务启用动态工作流（/ultracode on）。',
      'pill.on.aria': 'Ultracode 已开启，按下关闭',
      'pill.off.aria': 'Ultracode 已关闭，按下开启',
      'pill.pending.title': '正在切换 Ultracode…',
      'pill.error': '切换失败',
      'pill.timeout': 'Ultracode 未确认状态变更，请检查宿主插件是否已激活。',
      'badge.text': 'ULTRA',
      'badge.title': '打开 Ultracode 工作流面板 — 动态工作流已武装。',
      'badge.historyTitle': '打开 Ultracode 工作流面板。',
      'badge.aria': '打开 Ultracode 工作流（已武装）',
      'badge.historyAria': '打开 Ultracode 工作流',
      'panel.title': 'Ultracode',
      'panel.guide': '实时工作流：阶段、智能体、模型、Token 与耗时。',
      'panel.arm': '武装 Ultracode',
      'panel.disarm': '解除',
      'panel.arming': '正在武装…',
      'panel.disarming': '正在解除…',
      'panel.armed': '已武装',
      'panel.off': '已关闭',
      'panel.state.loading': '正在加载工作流…',
      'panel.state.armed': '阶段与智能体实时更新。',
      'panel.state.armedIdle': '等待第一个实质性任务；琐碎请求仍直接处理。',
      'panel.state.offHistory': '历史仍可查看。',
      'panel.state.offIdle': '暂无工作流。武装后，下一个实质性请求将作为工作流运行。',
      'panel.state.noWorkflow': '当前预设不提供 workflow 工具。',
      'panel.unavailable': '不可用',
      'panel.workflowCount': '{count} 个工作流',
      'panel.workflowsCount': '{count} 个工作流',
      'panel.agentCount': '{count} 个智能体',
      'panel.agentsCount': '{count} 个智能体',
      'panel.tokensCount': '{tokens} Token',
      'panel.agent': '智能体',
      'panel.tokens': 'Token',
      'panel.time': '耗时',
      'panel.openChild': '打开 {name} 的对话',
      'panel.verification': '验证阶段',
      'panel.verifyTag': '验证',
      'panel.unphased': '智能体',
      'panel.noAgents': '未启动智能体',
      'panel.highFanout': '高扇出',
      'panel.finished': '已完成',
      'panel.starting': '正在启动…',
      'panel.cost': '动态工作流比串行工作消耗更多 Token 与时间。',
      'panel.status.running': '运行中',
      'panel.status.completed': '已完成',
      'panel.status.failed': '失败',
      'panel.status.cancelled': '已取消',
      'panel.status.interrupted': '已中断',
    }

    function DotGlyph() {
      return h('span', { className: 'ucp-guideDot', 'aria-hidden': true })
    }

    const CSS = `
.uc-pill, .uc-badge { --uc-accent: var(--dsw-alias-brand-primary); }
.uc-pillWrap { display: inline-flex; align-items: center; gap: 6px; min-width: 0; }
.uc-pill {
  box-sizing: border-box; display: inline-flex; align-items: center; gap: 6px;
  height: 28px; padding: 0 9px; border: 1px solid var(--dsw-alias-border-l2);
  border-radius: var(--dsw-radius-sm); background: transparent;
  color: var(--dsw-alias-label-secondary); font-family: inherit; font-size: 13px;
  font-weight: 500; line-height: 20px; cursor: pointer;
  transition: color .12s ease, background-color .12s ease, border-color .12s ease;
}
.uc-pill:hover { color: var(--dsw-alias-label-primary); background: color-mix(in srgb, var(--dsw-alias-label-primary) 5%, transparent); }
.uc-pill[data-active="true"] {
  color: var(--dsw-alias-label-primary);
  border-color: color-mix(in srgb, var(--uc-accent) 32%, var(--dsw-alias-border-l2));
  background: color-mix(in srgb, var(--uc-accent) 7%, transparent);
}
.uc-pill:focus-visible, .uc-badge:focus-visible, .ucp-power:focus-visible, .ucp-agent:focus-visible, .ucp-phaseHead:focus-visible, .ucp-runToggle:focus-visible {
  outline: var(--dsw-focus-ring-width, 2px) solid var(--dsw-focus-ring-color, var(--dsw-alias-brand-primary));
  outline-offset: 2px;
}
.uc-dot { width: 5px; height: 5px; flex: none; border-radius: 999px; background: var(--dsw-alias-label-tertiary); }
.uc-pill[data-active="true"] .uc-dot, .uc-badge[data-active="true"] .uc-dot { background: var(--uc-accent); }
.uc-dot[data-pending="true"] { animation: uc-fade 1.2s ease-in-out infinite; }
.uc-pillError {
  max-width: 132px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  color: var(--dsw-alias-state-error-primary); font-size: 11px; line-height: 16px;
}
.uc-badgeWrap { display: inline-flex; align-items: center; gap: 4px; }
.uc-badge {
  box-sizing: border-box; display: inline-flex; align-items: center; gap: 5px;
  height: 20px; padding: 0 7px; border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 999px; background: transparent;
  color: var(--dsw-alias-label-tertiary); font-family: inherit; font-size: 9px;
  font-weight: 600; letter-spacing: .08em; text-transform: uppercase; cursor: pointer;
}
.uc-badge:hover { color: var(--dsw-alias-label-secondary); background: color-mix(in srgb, var(--dsw-alias-label-primary) 4%, transparent); }
.uc-badge[data-active="true"] { color: var(--dsw-alias-label-secondary); border-color: color-mix(in srgb, var(--uc-accent) 28%, var(--dsw-alias-border-l1)); }
.uc-badgeText { line-height: 1; }
.uc-badgeCount { font-size: 9px; line-height: 14px; padding: 0 3px; border-radius: 999px; background: color-mix(in srgb, var(--dsw-alias-label-tertiary) 10%, transparent); }
.uc-badgeError { color: var(--dsw-alias-state-error-primary); font-size: 11px; font-weight: 700; line-height: 1; cursor: help; }
.uc-seam { position: absolute; inset: 0 0 auto; height: 0; pointer-events: none; z-index: 3; }
.uc-seamLine { position: absolute; top: 0; left: 24px; right: 24px; height: 1px; background: color-mix(in srgb, var(--dsw-alias-brand-primary) 50%, transparent); }
.ucp-root {
  --ucp-accent: var(--dsw-alias-brand-primary);
  --ucp-good: var(--dsw-alias-state-success-primary);
  --ucp-bad: var(--dsw-alias-state-error-primary);
  --ucp-warn: var(--dsw-alias-state-warn-primary);
  display: flex; flex-direction: column; min-width: 0; height: 100%; min-height: 0;
  color: var(--dsw-alias-label-primary); font-size: 13px; line-height: 20px;
  background: transparent;
}
.ucp-root *, .ucp-root *::before, .ucp-root *::after { box-sizing: border-box; }
.ucp-overview {
  flex: none; margin: 11px 11px 0; padding: 10px 11px;
  border: 1px solid var(--dsw-alias-border-l1); border-radius: var(--dsw-radius-lg);
  background: var(--dsw-alias-bg-layer-1);
}
.ucp-overview[data-active="true"] { border-color: color-mix(in srgb, var(--ucp-accent) 22%, var(--dsw-alias-border-l1)); }
.ucp-overviewTop { display: flex; align-items: center; gap: 7px; min-width: 0; flex-wrap: wrap; }
.ucp-overviewDot { width: 6px; height: 6px; flex: none; border-radius: 999px; background: var(--dsw-alias-border-l2); }
.ucp-overviewDot[data-active="true"] { background: var(--ucp-accent); }
.ucp-overviewTitle { font-size: 13px; font-weight: 600; line-height: 17px; white-space: nowrap; }
.ucp-overviewState { font-size: 9px; font-weight: 600; line-height: 14px; letter-spacing: .07em; text-transform: uppercase; color: var(--dsw-alias-label-tertiary); }
.ucp-overview[data-active="true"] .ucp-overviewState { color: var(--ucp-accent); }
.ucp-overviewActions { margin-left: auto; display: flex; align-items: center; gap: 8px; min-width: 0; }
.ucp-overviewCounts {
  min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  font-size: 10.5px; color: var(--dsw-alias-label-tertiary); font-variant-numeric: tabular-nums;
}
.ucp-overviewText { margin: 6px 0 0; color: var(--dsw-alias-label-secondary); font-size: 11.5px; line-height: 17px; }
.ucp-overviewText[data-unavailable="true"] { color: var(--ucp-warn); }
.ucp-power {
  flex: none; height: 24px; padding: 0 8px; border: 1px solid var(--dsw-alias-border-l2);
  border-radius: var(--dsw-radius-sm); background: transparent; color: var(--dsw-alias-label-secondary);
  font: inherit; font-size: 11px; font-weight: 500; line-height: 16px; cursor: pointer; white-space: nowrap;
}
.ucp-power:hover { color: var(--dsw-alias-label-primary); background: color-mix(in srgb, var(--dsw-alias-label-primary) 5%, transparent); }
.ucp-power[data-active="true"] {
  color: var(--dsw-alias-label-primary);
  border-color: color-mix(in srgb, var(--ucp-accent) 28%, var(--dsw-alias-border-l2));
  background: color-mix(in srgb, var(--ucp-accent) 6%, transparent);
}
.ucp-power:disabled { opacity: .5; cursor: default; }
.ucp-error {
  flex: none; margin: 8px 11px 0; color: var(--ucp-bad); font-size: 11px; line-height: 16px;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.ucp-scroll { flex: 1; min-height: 0; overflow-y: auto; padding: 10px 11px 18px; display: flex; flex-direction: column; gap: 10px; }
.ucp-sectionHead { display: flex; align-items: center; gap: 6px; margin: 2px 1px -3px; font-size: 9.5px; font-weight: 600; text-transform: uppercase; letter-spacing: .07em; color: var(--dsw-alias-label-tertiary); }
.ucp-sectionDot { width: 5px; height: 5px; border-radius: 999px; background: var(--ucp-accent); }
.ucp-sectionCount { padding: 0 4px; border-radius: 999px; background: color-mix(in srgb, var(--dsw-alias-label-tertiary) 10%, transparent); font-size: 9px; line-height: 14px; }
.ucp-run {
  flex: none; display: flex; flex-direction: column; gap: 7px; padding: 9px 10px;
  border: 1px solid var(--dsw-alias-border-l1); border-radius: var(--dsw-radius-lg);
  background: var(--dsw-alias-bg-layer-1);
}
.ucp-run[data-status="running"] { border-color: color-mix(in srgb, var(--ucp-accent) 24%, var(--dsw-alias-border-l1)); }
.ucp-runHead { display: flex; align-items: center; gap: 6px; min-width: 0; flex-wrap: wrap; }
.ucp-runToggle { width: 100%; padding: 0; border: 0; background: none; color: inherit; font: inherit; text-align: left; cursor: pointer; border-radius: var(--dsw-radius-sm); }
.ucp-runToggle:hover .ucp-runName { color: var(--ucp-accent); }
.ucp-runName { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12px; font-weight: 600; line-height: 18px; }
.ucp-runStatus { flex: none; font-size: 9px; font-weight: 600; line-height: 13px; text-transform: uppercase; letter-spacing: .05em; color: var(--dsw-alias-label-tertiary); }
.ucp-runStatus[data-status="running"] { color: var(--ucp-accent); }
.ucp-runStatus[data-status="completed"] { color: var(--ucp-good); }
.ucp-runStatus[data-status="failed"], .ucp-runStatus[data-status="interrupted"] { color: var(--ucp-bad); }
.ucp-runStatus[data-status="cancelled"] { color: var(--ucp-warn); }
.ucp-warn { font-size: 9px; line-height: 13px; color: var(--ucp-warn); text-transform: uppercase; letter-spacing: .04em; }
.ucp-runMeta { display: flex; flex-wrap: wrap; gap: 3px 9px; font-size: 10.5px; line-height: 15px; color: var(--dsw-alias-label-tertiary); font-variant-numeric: tabular-nums; }
.ucp-rail { display: flex; gap: 2px; height: 3px; width: 100%; border-radius: 999px; overflow: hidden; background: var(--dsw-alias-border-l1); }
.ucp-railSeg { flex: 1; min-width: 2px; height: 100%; background: color-mix(in srgb, var(--dsw-alias-label-tertiary) 10%, transparent); overflow: hidden; }
.ucp-railSeg[data-verification="true"] { background: color-mix(in srgb, var(--ucp-good) 12%, transparent); }
.ucp-railFill { display: block; height: 100%; background: var(--ucp-accent); transition: width .25s ease; }
.ucp-railFill[data-status="completed"] { background: var(--ucp-good); opacity: .65; }
.ucp-railFill[data-status="running"] { background: var(--ucp-accent); }
.ucp-railFill[data-status="failed"] { background: var(--ucp-bad); }
.ucp-railFill[data-status="cancelled"] { background: var(--ucp-warn); opacity: .55; }
.ucp-phases { display: flex; flex-direction: column; }
.ucp-phase {
  margin-top: 4px; padding: 2px 4px 4px; border-radius: var(--dsw-radius-md);
  border: 1px solid color-mix(in srgb, var(--dsw-alias-border-l1) 60%, transparent);
  background: transparent;
}
.ucp-phase:first-child { margin-top: 2px; }
.ucp-phase[data-verification="true"] {
  background: color-mix(in srgb, var(--ucp-good) 4%, transparent);
  border-color: color-mix(in srgb, var(--ucp-good) 18%, var(--dsw-alias-border-l1));
}
.ucp-phaseHead {
  width: 100%; display: flex; align-items: center; gap: 5px; padding: 4px;
  border: 0; border-radius: var(--dsw-radius-sm); background: none; color: inherit;
  font: inherit; text-align: left; cursor: pointer;
}
.ucp-phaseHead:hover { background: color-mix(in srgb, var(--dsw-alias-label-primary) 4%, transparent); }
.ucp-disclosure { width: 12px; flex: none; text-align: center; color: var(--dsw-alias-label-tertiary); font-size: 12px; line-height: 16px; }
.ucp-phaseTitle { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 11px; font-weight: 600; line-height: 16px; }
.ucp-verify { flex: none; font-size: 8.5px; font-weight: 600; line-height: 14px; letter-spacing: .05em; text-transform: uppercase; color: var(--ucp-good); }
.ucp-phaseCount { flex: none; margin-left: auto; font-size: 10px; line-height: 14px; color: var(--dsw-alias-label-tertiary); font-variant-numeric: tabular-nums; }
.ucp-phaseDots { display: inline-flex; align-items: center; gap: 3px; flex: none; }
.ucp-phaseDots .uc-dot { width: 4px; height: 4px; }
.ucp-phaseDots .uc-dot[data-status="completed"] { background: var(--ucp-good); opacity: .6; }
.ucp-phaseDots .uc-dot[data-status="running"] { background: var(--ucp-accent); }
.ucp-phaseDots .uc-dot[data-status="failed"] { background: var(--ucp-bad); }
.ucp-phaseDots .uc-dot[data-status="interrupted"], .ucp-phaseDots .uc-dot[data-status="cancelled"] { background: var(--ucp-warn); opacity: .6; }
.ucp-dotMore { font-size: 8px; line-height: 10px; color: var(--dsw-alias-label-tertiary); }
.ucp-agents { display: flex; flex-direction: column; padding: 1px 0 3px; }
.ucp-agentHead, .ucp-agent {
  display: grid; grid-template-columns: 14px minmax(0, 1fr) minmax(38px, auto) minmax(44px, auto);
  align-items: center; gap: 6px; min-width: 0;
}
.ucp-agentHead { padding: 3px 4px 2px; font-size: 8.5px; line-height: 11px; text-transform: uppercase; letter-spacing: .06em; color: var(--dsw-alias-label-tertiary); }
.ucp-agentHead .ucp-num { text-align: right; }
.ucp-agent { width: 100%; padding: 4px; border: 0; border-radius: var(--dsw-radius-sm); background: none; color: inherit; font: inherit; text-align: left; cursor: pointer; }
.ucp-agent:hover { background: color-mix(in srgb, var(--dsw-alias-label-primary) 4%, transparent); }
.ucp-agent:disabled { cursor: default; }
.ucp-state { width: 14px; height: 14px; display: grid; place-items: center; }
.ucp-state::before { content: ''; width: 6px; height: 6px; border-radius: 999px; background: var(--dsw-alias-border-l2); }
.ucp-state[data-status="completed"]::before { background: var(--ucp-good); opacity: .6; }
.ucp-state[data-status="running"]::before { background: var(--ucp-accent); animation: ucp-fade 1.4s ease-in-out infinite; }
.ucp-state[data-status="failed"]::before { background: var(--ucp-bad); }
.ucp-state[data-status="interrupted"]::before { background: var(--ucp-warn); opacity: .7; }
.ucp-state[data-status="cancelled"]::before { background: var(--dsw-alias-label-tertiary); opacity: .45; }
.ucp-agentMain { display: flex; flex-direction: column; min-width: 0; }
.ucp-agentName { font-size: 11px; line-height: 15px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.ucp-agentModel { font-size: 9.5px; line-height: 12px; color: var(--dsw-alias-label-tertiary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.ucp-agentTokens, .ucp-agentTime { font-size: 10px; line-height: 14px; text-align: right; color: var(--dsw-alias-label-tertiary); white-space: nowrap; font-variant-numeric: tabular-nums; }
.ucp-runEmpty { margin: 0; padding: 2px 4px 4px; font-size: 10.5px; color: var(--dsw-alias-label-tertiary); }
.ucp-finishedHead { display: flex; align-items: center; gap: 7px; margin-top: 3px; font-size: 9.5px; font-weight: 600; text-transform: uppercase; letter-spacing: .07em; color: var(--dsw-alias-label-tertiary); }
.ucp-finishedHead::after { content: ''; flex: 1; height: 1px; background: var(--dsw-alias-border-l1); }
.ucp-finishedCount { order: -1; padding: 0 4px; border-radius: 999px; background: color-mix(in srgb, var(--dsw-alias-label-tertiary) 10%, transparent); font-size: 9px; line-height: 14px; }
.ucp-cost { margin: 2px 2px 0; font-size: 10px; line-height: 15px; color: var(--dsw-alias-label-tertiary); }
.ucp-guideDot { width: 6px; height: 6px; border-radius: 999px; background: var(--dsw-alias-label-tertiary); display: block; }
@keyframes uc-fade { 0%, 100% { opacity: 1; } 50% { opacity: .35; } }
@keyframes ucp-fade { 0%, 100% { opacity: 1; } 50% { opacity: .35; } }
@media (prefers-reduced-motion: reduce) {
  .uc-dot, .ucp-state::before { animation: none; }
}
@media (width <= 767px) {
  .uc-pillLabel { display: none; }
  .uc-pill { padding: 0 7px; }
  .uc-badge { display: none; }
}
`

    function formatTokens(value) {
      if (typeof value !== 'number' || !Number.isFinite(value)) return '—'
      if (value >= 1000000) return (value / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
      if (value >= 1000) return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
      return String(Math.round(value))
    }

    function formatDuration(ms) {
      if (typeof ms !== 'number' || !Number.isFinite(ms) || ms < 0) return '—'
      const total = Math.floor(ms / 1000)
      if (total < 60) return total + 's'
      const minutes = Math.floor(total / 60)
      const seconds = total % 60
      if (minutes < 60) return minutes + 'm ' + String(seconds).padStart(2, '0') + 's'
      const hours = Math.floor(minutes / 60)
      const rest = minutes % 60
      return hours + 'h ' + String(rest).padStart(2, '0') + 'm'
    }

    function tokenTotal(usage) {
      if (usage === undefined || usage === null) return undefined
      const values = [
        usage.uncachedInputTokens,
        usage.outputTokens,
        usage.cacheReadTokens,
        usage.cacheWriteTokens,
      ]
      let total = 0
      let known = false
      for (const value of values) {
        if (typeof value === 'number' && Number.isFinite(value)) {
          total += value
          known = true
        }
      }
      return known ? total : undefined
    }

    function timingDuration(timing) {
      if (timing === undefined || timing === null) return undefined
      const settled = typeof timing.settledMs === 'number' ? timing.settledMs : 0
      const active = timing.active
      const live =
        active !== undefined &&
        typeof active.since === 'number' &&
        typeof active.through === 'number' &&
        active.through > active.since
          ? active.through - active.since
          : 0
      return settled + live
    }

    function memberDuration(member, summary, now) {
      if (typeof member.startedAt === 'number') {
        const end = typeof member.endedAt === 'number' ? member.endedAt : now
        return Math.max(0, end - member.startedAt)
      }
      return timingDuration(summary?.projectionValues?.subagentTiming)
    }

    function runDuration(run, now) {
      if (typeof run.startedAt !== 'number') return undefined
      const end = typeof run.endedAt === 'number' ? run.endedAt : now
      return Math.max(0, end - run.startedAt)
    }

    function isVerificationPhase(title) {
      return /(?:^|[^a-z])(?:verify|verification|review|reviews|check|checks|audit|audits|adversarial)(?:[^a-z]|$)/i.test(title)
    }

    function phaseCounts(phase) {
      let settled = 0
      let failed = 0
      let cancelled = 0
      let running = 0
      for (const member of phase.members) {
        if (member.status === 'completed' || member.status === 'failed' || member.status === 'cancelled' || member.status === 'interrupted') settled += 1
        if (member.status === 'failed' || member.status === 'interrupted') failed += 1
        if (member.status === 'cancelled') cancelled += 1
        if (member.status === 'running') running += 1
      }
      return { settled, failed, cancelled, running, total: phase.members.length }
    }

    function runTokens(run, summaries) {
      let total = 0
      let known = false
      for (const phase of run.phases) {
        for (const member of phase.members) {
          const value = tokenTotal(summaries[member.childId]?.projectionValues?.tokenUsage)
          if (typeof value === 'number') {
            total += value
            known = true
          }
        }
      }
      return known ? total : undefined
    }

    /** Optimistic toggle state reconciled with a host-computed stance. */
    function useToggle(toggle, active, t) {
      const [pending, setPending] = React.useState(null)
      const [error, setError] = React.useState(null)
      // Survives the timeout: a late command confirmation may still arrive and
      // must clear the timeout notice, not leave a permanent red chip.
      const target = React.useRef(null)
      const alive = React.useRef(true)

      React.useEffect(() => {
        alive.current = true
        return () => {
          alive.current = false
        }
      }, [])

      React.useEffect(() => {
        if (target.current !== null && active === target.current) {
          target.current = null
          setPending(null)
          setError(null)
        }
      }, [active, pending])

      React.useEffect(() => {
        if (pending === null) return undefined
        const timer = setTimeout(() => {
          setPending(null)
          setError(t('pill.timeout'))
        }, 6000)
        return () => clearTimeout(timer)
      }, [pending, t])

      const request = React.useCallback(
        (next) => {
          if (pending !== null) return
          target.current = next
          setPending(next)
          setError(null)
          Promise.resolve()
            .then(() => toggle(next))
            .then(
              (failure) => {
                if (!alive.current) return
                if (failure === null || failure === undefined) return
                target.current = null
                setPending(null)
                setError(String(failure))
              },
              (reason) => {
                if (!alive.current) return
                target.current = null
                setPending(null)
                setError(reason instanceof Error ? reason.message : String(reason))
              },
            )
        },
        [pending, toggle],
      )

      return { pending, error, request }
    }

    function useStance(useProjection, toggle, t) {
      const stance = useProjection('ultracode')
      const active = stance !== undefined && stance.active === true
      const { pending, error, request } = useToggle(toggle, active, t)
      return { stance, pending, error, request }
    }

    function StatusGlyph({ status }) {
      return h('span', { className: 'ucp-state', 'data-status': status, 'aria-hidden': true })
    }

    function statusLabel(t, status) {
      const key = 'panel.status.' + status
      return t(key) === key ? status : t(key)
    }

    function AgentRow({ member, summary, canOpen, now, t, openChild }) {
      const tokens = tokenTotal(summary?.projectionValues?.tokenUsage)
      const selection = summary?.projectionValues?.modelSelection
      const model = selection?.lastUsed?.model ?? selection?.next?.model
      const duration = memberDuration(member, summary, now)
      const label = member.label !== '' ? member.label : member.childId
      const openable = canOpen === true && typeof openChild === 'function'
      const description =
        label + ', ' + statusLabel(t, member.status) + ', ' + formatTokens(tokens) + ' tokens, ' + formatDuration(duration)
      return h(
        'button',
        {
          type: 'button',
          className: 'ucp-agent',
          'data-status': member.status,
          disabled: !openable,
          'aria-label': description,
          title: openable ? t('panel.openChild', { name: label }) : description,
          onClick: openable ? () => openChild(member.childId) : undefined,
        },
        h(StatusGlyph, { status: member.status }),
        h(
          'span',
          { className: 'ucp-agentMain' },
          h('span', { className: 'ucp-agentName', title: label }, label),
          h('span', { className: 'ucp-agentModel', title: typeof model === 'string' ? model : '' }, typeof model === 'string' && model !== '' ? model : '—'),
        ),
        h('span', { className: 'ucp-agentTokens' }, formatTokens(tokens)),
        h('span', { className: 'ucp-agentTime' }, formatDuration(duration)),
      )
    }

    function PhaseBlock({ runId, phase, collapsed, onToggle, summaries, openable, now, t, openChild }) {
      const counts = phaseCounts(phase)
      const title = phase.title !== '' ? phase.title : t('panel.unphased')
      const verification = isVerificationPhase(title)
      const key = runId + ':' + phase.key
      return h(
        'div',
        { className: 'ucp-phase', 'data-verification': verification ? 'true' : 'false' },
        h(
          'button',
          {
            type: 'button',
            className: 'ucp-phaseHead',
            'aria-expanded': !collapsed,
            'aria-label': title + ', ' + String(counts.settled) + ' of ' + String(counts.total) + ' agents settled',
            onClick: () => onToggle(key),
          },
          h('span', { className: 'ucp-disclosure', 'aria-hidden': true }, collapsed ? '+' : '−'),
          h('span', { className: 'ucp-phaseTitle', title }, title),
          verification ? h('span', { className: 'ucp-verify', title: t('panel.verification') }, t('panel.verifyTag')) : null,
          h(
            'span',
            { className: 'ucp-phaseDots', 'aria-hidden': true },
            phase.members.slice(0, 10).map((member) =>
              h('span', { key: member.seq, className: 'uc-dot', 'data-status': member.status }),
            ),
            phase.members.length > 10
              ? h('span', { className: 'ucp-dotMore' }, '+' + String(phase.members.length - 10))
              : null,
          ),
          h(
            'span',
            { className: 'ucp-phaseCount', title: String(counts.settled) + ' of ' + String(counts.total) + ' settled' },
            String(counts.settled) + '/' + String(counts.total),
          ),
        ),
        collapsed
          ? null
          : h(
              'div',
              { className: 'ucp-agents' },
              h(
                'div',
                { className: 'ucp-agentHead', 'aria-hidden': true },
                h('span', {}),
                h('span', {}, t('panel.agent')),
                h('span', { className: 'ucp-num' }, t('panel.tokens')),
                h('span', { className: 'ucp-num' }, t('panel.time')),
              ),
              phase.members.map((member) =>
                h(AgentRow, {
                  key: member.seq,
                  member,
                  summary: summaries[member.childId],
                  canOpen: openable.has(member.childId),
                  now,
                  t,
                  openChild,
                }),
              ),
            ),
      )
    }

    function RunCard({ run, open, onToggle, collapsedPhases, onTogglePhase, summaries, openable, now, t, openChild, finished }) {
      const elapsed = runDuration(run, now)
      const tokens = runTokens(run, summaries)
      const statusKey = 'panel.status.' + run.status
      const statusText = t(statusKey) === statusKey ? run.status : t(statusKey)
      const body = [
        finished ? h('span', { key: 'disclosure', className: 'ucp-disclosure', 'aria-hidden': true }, open ? '−' : '+') : null,
        h('span', { key: 'name', className: 'ucp-runName', title: run.name }, run.name),
        h('span', { key: 'status', className: 'ucp-runStatus', 'data-status': run.status }, statusText),
        run.agents > 12 ? h('span', { key: 'fanout', className: 'ucp-warn' }, t('panel.highFanout')) : null,
      ]
      return h(
        'div',
        { className: 'ucp-run', 'data-status': run.status, 'data-finished': finished ? 'true' : 'false' },
        finished
          ? h(
              'button',
              {
                type: 'button',
                className: 'ucp-runHead ucp-runToggle',
                'aria-expanded': open,
                onClick: onToggle,
              },
              body,
            )
          : h('div', { className: 'ucp-runHead' }, body),
        h(
          'div',
          { className: 'ucp-runMeta' },
          h('span', {}, formatDuration(elapsed)),
          h('span', {}, t('panel.agentsCount', { count: run.agents })),
          h('span', {}, t('panel.tokensCount', { tokens: formatTokens(tokens) })),
        ),
        h(
          'div',
          { className: 'ucp-rail' },
          run.phases.length === 0
            ? h('span', { className: 'ucp-railSeg', 'data-empty': 'true' })
            : run.phases.map((phase, index) => {
                const counts = phaseCounts(phase)
                const percent = counts.total === 0 ? 0 : (counts.settled / counts.total) * 100
                return h(
                  'span',
                  {
                    key: phase.key + ':' + String(index),
                    className: 'ucp-railSeg',
                    'data-verification': isVerificationPhase(phase.title) ? 'true' : 'false',
                  },
                  h('span', {
                    className: 'ucp-railFill',
                    style: { width: percent + '%' },
                    'data-status':
                      counts.failed > 0
                        ? 'failed'
                        : counts.running > 0
                          ? 'running'
                          : counts.cancelled > 0
                            ? 'cancelled'
                            : 'completed',
                  }),
                )
              }),
        ),
        run.agents === 0
          ? h('p', { className: 'ucp-runEmpty' }, finished ? t('panel.noAgents') : t('panel.starting'))
          : null,
        open
          ? h(
              'div',
              { className: 'ucp-phases' },
              run.phases.map((phase) => {
                const key = run.runId + ':' + phase.key
                return h(PhaseBlock, {
                  key,
                  runId: run.runId,
                  phase,
                  collapsed: collapsedPhases.has(key),
                  onToggle: onTogglePhase,
                  summaries,
                  openable,
                  now,
                  t,
                  openChild,
                })
              }),
            )
          : null,
      )
    }

    function PanelOverview({ active, pending, loaded, counts, stateText, powerLabel, unavailable, disabled, t, onToggle }) {
      return h(
        'header',
        { className: 'ucp-overview', 'data-active': active ? 'true' : 'false' },
        h(
          'div',
          { className: 'ucp-overviewTop' },
          h('span', { className: 'ucp-overviewDot', 'data-active': active ? 'true' : 'false' }),
          h('span', { className: 'ucp-overviewTitle' }, t('panel.title')),
          loaded ? h('span', { className: 'ucp-overviewState' }, active ? t('panel.armed') : t('panel.off')) : null,
          h(
            'div',
            { className: 'ucp-overviewActions' },
            counts !== null ? h('span', { className: 'ucp-overviewCounts', title: counts }, counts) : null,
            h(
              'button',
              {
                type: 'button',
                className: 'ucp-power',
                'data-active': active ? 'true' : 'false',
                'aria-pressed': active,
                disabled: disabled === true || pending !== null || !loaded,
                title: powerLabel,
                onClick: onToggle,
              },
              h('span', {}, powerLabel),
            ),
          ),
        ),
        h('p', { className: 'ucp-overviewText', 'data-unavailable': unavailable === true ? 'true' : 'false' }, stateText),
      )
    }

    function UltracodePanel({ sessionId, useProjection, useSessions, useTabInfo, t, toggle, resolveChild }) {
      const stance = useProjection('ultracode')
      const ledger = useProjection('ultracodeRuns')
      const summaries = useSessions((state) => state.byId) ?? {}
      const tab = useTabInfo().tab
      const preset = summaries[sessionId]?.projectionValues?.agentPreset
      const noWorkflow = preset === 'minimal' || preset === 'ptc'
      const [now, setNow] = React.useState(() => Date.now())
      const [collapsedPhases, setCollapsedPhases] = React.useState(() => new Set())
      const [openRuns, setOpenRuns] = React.useState(() => new Set())
      const active = stance !== undefined && stance.active === true
      const loaded = stance !== undefined && ledger !== undefined
      const { pending, error, request } = useToggle(toggle, active, t)
      const runs = ledger?.runs ?? []
      const activeRuns = runs.filter((run) => run.status === 'running')
      const finishedRuns = runs.filter((run) => run.status !== 'running')
      const live = activeRuns.length > 0
      const resolve = typeof resolveChild === 'function' ? resolveChild : NO_CHILD_ADDRESS

      React.useEffect(() => {
        if (!live) return undefined
        const timer = setInterval(() => setNow(Date.now()), 1000)
        return () => clearInterval(timer)
      }, [live])

      // With no live run, open the most recent finished run once so the panel
      // lands on phases and agents instead of a single collapsed row.
      const autoOpened = React.useRef(false)
      React.useEffect(() => {
        if (autoOpened.current || activeRuns.length > 0 || finishedRuns.length === 0) return
        autoOpened.current = true
        setOpenRuns((current) => (current.size > 0 ? current : new Set([finishedRuns[0].runId])))
      }, [activeRuns.length, finishedRuns])

      const openable = React.useMemo(() => {
        const set = new Set()
        for (const run of runs) {
          for (const phase of run.phases) {
            for (const member of phase.members) {
              if (typeof member.childId === 'string' && resolve(member.childId) !== undefined) set.add(member.childId)
            }
          }
        }
        return set
      }, [runs, resolve])

      const openChild = React.useCallback(
        (childId) => {
          const address = resolve(childId)
          if (address === undefined) return false
          const mode = address.mode === 'one-shot' || address.mode === 'continuable' ? address.mode : 'unknown'
          try {
            const query = new URLSearchParams({ parent: address.parentSessionId, mode })
            tab.actions.openResource(
              'dsh-resource://subagentchat/session/' + encodeURIComponent(childId) + '?' + query.toString(),
              { preferNewPane: true },
            )
            return true
          } catch {
            return false
          }
        },
        [resolve, tab],
      )

      const togglePhase = React.useCallback((key) => {
        setCollapsedPhases((current) => {
          const next = new Set(current)
          if (next.has(key)) next.delete(key)
          else next.add(key)
          return next
        })
      }, [])

      const toggleRun = React.useCallback((runId) => {
        setOpenRuns((current) => {
          const next = new Set(current)
          if (next.has(runId)) next.delete(runId)
          else next.add(runId)
          return next
        })
      }, [])

      let totalAgents = 0
      let totalTokens = 0
      let anyTokens = false
      for (const run of runs) {
        for (const phase of run.phases) {
          for (const member of phase.members) {
            totalAgents += 1
            const value = tokenTotal(summaries[member.childId]?.projectionValues?.tokenUsage)
            if (typeof value === 'number') {
              totalTokens += value
              anyTokens = true
            }
          }
        }
      }

      const powerLabel =
        pending !== null
          ? pending
            ? t('panel.arming')
            : t('panel.disarming')
          : noWorkflow && !active
            ? t('panel.unavailable')
            : active
              ? t('panel.disarm')
              : t('panel.arm')

      let counts = null
      if (runs.length > 0) {
        const parts = [
          runs.length === 1
            ? t('panel.workflowCount', { count: 1 })
            : t('panel.workflowsCount', { count: runs.length }),
          totalAgents === 1
            ? t('panel.agentCount', { count: 1 })
            : t('panel.agentsCount', { count: totalAgents }),
        ]
        if (anyTokens) parts.push(t('panel.tokensCount', { tokens: formatTokens(totalTokens) }))
        counts = parts.join(' · ')
      }

      const stateText = noWorkflow
        ? t('panel.state.noWorkflow')
        : !loaded
          ? t('panel.state.loading')
          : active
            ? runs.length > 0
              ? t('panel.state.armed')
              : t('panel.state.armedIdle')
            : runs.length > 0
              ? t('panel.state.offHistory')
              : t('panel.state.offIdle')

      const children = []

      if (activeRuns.length > 0) {
        children.push(
          h(
            'div',
            { className: 'ucp-sectionHead', key: 'running-head' },
            h('span', { className: 'ucp-sectionDot' }),
            h('span', {}, t('panel.running')),
            h('span', { className: 'ucp-sectionCount' }, String(activeRuns.length)),
          ),
        )
      }

      for (const run of activeRuns) {
        children.push(
          h(RunCard, {
            key: run.runId,
            run,
            open: true,
            onToggle: () => {},
            collapsedPhases,
            onTogglePhase: togglePhase,
            summaries,
            openable,
            now,
            t,
            openChild,
            finished: false,
          }),
        )
      }

      if (finishedRuns.length > 0) {
        children.push(
          h(
            'div',
            { className: 'ucp-finishedHead', key: 'finished-head' },
            h('span', { className: 'ucp-finishedCount' }, String(finishedRuns.length)),
            h('span', {}, t('panel.finished')),
          ),
        )
      }

      for (const run of finishedRuns) {
        children.push(
          h(RunCard, {
            key: run.runId,
            run,
            open: openRuns.has(run.runId),
            onToggle: () => toggleRun(run.runId),
            collapsedPhases,
            onTogglePhase: togglePhase,
            summaries,
            openable,
            now,
            t,
            openChild,
            finished: true,
          }),
        )
      }

      if (loaded) children.push(h('p', { className: 'ucp-cost', key: 'cost' }, t('panel.cost')))

      return h(
        'div',
        { className: 'ucp-root', 'data-ultracode-panel': true },
        h(PanelOverview, {
          active,
          pending,
          loaded,
          counts,
          stateText,
          powerLabel,
          unavailable: noWorkflow,
          disabled: noWorkflow && !active,
          t,
          onToggle: () => request(!active),
        }),
        error !== null
          ? h('div', { className: 'ucp-error', role: 'status', title: error }, error)
          : null,
        h('div', { className: 'ucp-scroll' }, children),
      )
    }

    function UltracodePill({ useProjection, toggle, t }) {
      const { stance, pending, error, request } = useStance(useProjection, toggle, t)
      if (stance === undefined) return null
      const active = pending === null ? stance.active === true : pending
      const title = error ?? (pending !== null ? t('pill.pending.title') : active ? t('pill.on.title') : t('pill.off.title'))
      return h(
        'span',
        { className: 'uc-pillWrap' },
        h(
          'button',
          {
            type: 'button',
            role: 'switch',
            'aria-checked': active,
            'aria-label': active ? t('pill.on.aria') : t('pill.off.aria'),
            'data-active': active ? 'true' : 'false',
            className: 'uc-pill',
            title,
            onClick: () => request(!active),
          },
          h('span', {
            className: 'uc-dot',
            'data-pending': pending !== null ? 'true' : 'false',
            'aria-hidden': true,
          }),
          h('span', { className: 'uc-pillLabel' }, t('pill.label')),
        ),
        error !== null
          ? h('span', { className: 'uc-pillError', role: 'status', title: error }, t('pill.error'))
          : null,
      )
    }

    function UltracodeBadge({ useProjection, openPanel, t }) {
      const stance = useProjection('ultracode')
      const ledger = useProjection('ultracodeRuns')
      const [failure, setFailure] = React.useState(null)
      if (stance === undefined && ledger === undefined) return null
      const active = stance !== undefined && stance.active === true
      const historyCount = ledger?.runs?.length ?? 0
      const baseTitle = active ? t('badge.title') : t('badge.historyTitle')
      return h(
        'span',
        { className: 'uc-badgeWrap' },
        h(
          'button',
          {
            type: 'button',
            className: 'uc-badge',
            'data-active': active ? 'true' : 'false',
            title: failure ?? baseTitle,
            'aria-label': active ? t('badge.aria') : t('badge.historyAria'),
            onClick: () => {
              const outcome = typeof openPanel === 'function' ? openPanel() : 'Ultracode opener is unavailable'
              if (typeof outcome === 'string' && outcome !== '') setFailure(outcome)
              else setFailure(null)
            },
          },
          h('span', { className: 'uc-badgeText' }, t('badge.text')),
          historyCount > 0 ? h('span', { className: 'uc-badgeCount' }, String(historyCount)) : null,
          h('span', { className: 'uc-dot', 'aria-hidden': true }),
        ),
        failure !== null
          ? h('span', { className: 'uc-badgeError', role: 'status', title: failure }, '!')
          : null,
      )
    }

    function UltracodeSeam({ useProjection, toggle, t }) {
      const { stance } = useStance(useProjection, toggle, t)
      if (stance === undefined) return null
      if (stance.active !== true && stance.pending !== true) return null
      return h(
        'div',
        { className: 'uc-seam', 'aria-hidden': true },
        h('div', { className: 'uc-seamLine' }),
      )
    }

    const NO_CHILD_ADDRESS = () => undefined

    function UltracodeTabTitle({ t }) {
      return h('span', null, t('panel.title'))
    }

    const inject = ['slots', 'locale', 'remote', 'remote.commands', 'sessions']

    function apply(ctx) {
      ctx.effect(() => {
        if (typeof document === 'undefined') return () => {}
        const existing = document.querySelector('style[data-plugin-css="' + STYLE_ID + '"]')
        if (existing !== null) return () => {}
        const tag = document.createElement('style')
        tag.dataset.plugin = '@local/dsh-ultracode'
        tag.dataset.pluginCss = STYLE_ID
        tag.textContent = CSS
        document.head.appendChild(tag)
        return () => {
          tag.remove()
        }
      }, 'ultracode: styles')

      ctx.effect(() => ctx.locale.register(NS, { en, zh }), 'ultracode: dictionaries')

      const t = ctx.locale.bind(NS)
      const openWorkflowPanel = () => {
        const sidebar = ctx.get('sidebarRight')
        if (sidebar === undefined) return 'Ultracode sidebar services are not available yet'
        try {
          sidebar.openTab(TAB_KIND, { revealIfOpened: true })
          return null
        } catch (cause) {
          const message = cause instanceof Error ? cause.message : String(cause)
          console.error('[ultracode] could not open the workflow sidebar:', message)
          try {
            sidebar.openTab('guide', { revealIfOpened: true })
          } catch {
            // The guide is a convenience fallback; the error is the real result.
          }
          return message
        }
      }
      const graph = { openPanel: openWorkflowPanel }

      const toggle = async (sessionId, next) => {
        const result = await ctx.remote.commands.execute(sessionId, `/ultracode ${next ? 'on' : 'off'}`, [])
        if (result === undefined || result.ok !== true) {
          return result !== undefined && result.error !== undefined
            ? `${result.error.message} (${result.error.code})`
            : 'Ultracode toggle failed'
        }
        if (result.value === undefined) return 'Unknown command: /ultracode'
        const outcome = result.value.result
        if (outcome !== undefined && outcome.kind !== 'success') {
          return typeof outcome.text === 'string' && outcome.text !== ''
            ? outcome.text
            : 'Ultracode command failed'
        }
        return null
      }

      const face = (sessionId) => ({
        toggle: (next) => toggle(sessionId, next),
        openPanel: () => graph.openPanel(),
      })

      ctx.slots.inject('conversation.input.right', () =>
        ctx.slots.register(
          {
            name: 'conversation.input.right',
            id: 'ultracode-pill',
            order: 30,
            locale: NS,
            inject: face,
          },
          UltracodePill,
        ),
      )

      ctx.slots.inject('conversation.session.header.utilities', () =>
        ctx.slots.register(
          {
            name: 'conversation.session.header.utilities',
            id: 'ultracode-badge',
            order: 30,
            locale: NS,
            inject: face,
          },
          UltracodeBadge,
        ),
      )

      ctx.slots.inject('conversation.input.overlay', () =>
        ctx.slots.register(
          {
            name: 'conversation.input.overlay',
            id: 'ultracode-seam',
            order: 10,
            locale: NS,
            inject: face,
          },
          UltracodeSeam,
        ),
      )

      let wired = false
      const wireSidebar = (tabs) => {
        if (wired) return
        wired = true

        // A client reload can briefly leave the previous generation's type in
        // the registry. Reuse it rather than failing setup on a duplicate id.
        if (tabs.get(TAB_KIND) === undefined) {
          try {
            ctx.effect(
              () =>
                tabs.register({
                  id: TAB_ID,
                  kind: TAB_KIND,
                  title: () => t('panel.title'),
                  guide: [
                    {
                      id: 'ultracode-workflows',
                      title: () => t('panel.title'),
                      description: () => t('panel.guide'),
                      icon: DotGlyph,
                      order: 50,
                    },
                  ],
                }),
              'ultracode: sidebar tab type',
            )
          } catch (cause) {
            console.error('[ultracode] sidebar tab type registration failed:', cause)
          }
        }

        const register = (slot, options, component) => {
          try {
            ctx.slots.inject(slot, () => {
              try {
                return ctx.slots.register(options(), component)
              } catch (cause) {
                console.error('[ultracode] sidebar slot registration failed:', slot, cause)
                return () => {}
              }
            })
          } catch (cause) {
            console.error('[ultracode] sidebar slot injection failed:', slot, cause)
          }
        }

        register(
          'sidebar.right.pane.tab',
          () => ({
            name: 'sidebar.right.pane.tab',
            key: TAB_ID,
            locale: NS,
            inject: (sessionId) => ({
              toggle: (next) => toggle(sessionId, next),
              resolveChild: (childId) => ctx.sessions.subagentAddress(childId),
            }),
          }),
          UltracodePanel,
        )

        register(
          'sidebar.right.pane.tab.title',
          () => ({
            name: 'sidebar.right.pane.tab.title',
            key: TAB_ID,
            locale: NS,
          }),
          UltracodeTabTitle,
        )
      }

      // Register immediately when the services are already present; otherwise
      // wait for them. The badge's opener above is lazy either way.
      const tabsNow = ctx.get('sidebarRightTabs')
      if (tabsNow !== undefined) wireSidebar(tabsNow)
      ctx.inject(['sidebarRight', 'sidebarRightTabs'], (side) => wireSidebar(side.sidebarRightTabs))
    }

    return { inject, apply }
  },
})
