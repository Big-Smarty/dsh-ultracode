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
      'panel.subtitle': 'Dynamic workflows',
      'panel.guide': 'Live workflow runs: phases, agents, models, tokens, and time.',
      'panel.arm': 'Arm Ultracode',
      'panel.disarm': 'Stand down',
      'panel.arming': 'Arming…',
      'panel.disarming': 'Standing down…',
      'panel.armed': 'Armed',
      'panel.off': 'Off',
      'panel.loading': 'Loading…',
      'panel.totals': '{workflows} workflows · {agents} agents · {tokens} tokens',
      'panel.agentsCount': '{count} agents',
      'panel.tokensCount': '{tokens} tokens',
      'panel.waitingTitle': 'Armed and waiting',
      'panel.waiting': 'The next substantive task will fan out here. Trivial requests stay direct.',
      'panel.offText': 'Arm Ultracode to turn every substantive request into a multi-agent workflow.',
      'panel.activeText': 'Phases and agents update live. Verification phases carry a shield; open an agent to read its transcript.',
      'panel.historyBanner': 'Ultracode is off — running and finished workflows stay inspectable.',
      'panel.emptyTitle': 'Turn tasks into workflows',
      'panel.emptyText': 'Ultracode is off. Arm it and every substantive request is scoped, fanned out, verified, and synthesized.',
      'panel.feature1': 'Scope → fan out → verify → synthesize',
      'panel.feature2': 'Per-agent model, tokens, and wall time',
      'panel.feature3': 'Verification phases marked; finished runs retained',
      'panel.agent': 'Agent',
      'panel.tokens': 'Tokens',
      'panel.time': 'Time',
      'panel.openChild': 'Open {name} transcript',
      'panel.verification': 'Verification phase',
      'panel.unphased': 'Agents',
      'panel.noAgents': 'No agents started',
      'panel.highFanout': 'high fan-out',
      'panel.finished': 'Finished',
      'panel.starting': 'Starting…',
      'panel.cost': 'Dynamic workflows spend more tokens and time than serial work.',
      'panel.error': 'Ultracode toggle failed',
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
      'panel.subtitle': '动态工作流',
      'panel.guide': '实时工作流：阶段、智能体、模型、Token 与耗时。',
      'panel.arm': '武装 Ultracode',
      'panel.disarm': '解除',
      'panel.arming': '正在武装…',
      'panel.disarming': '正在解除…',
      'panel.armed': '已武装',
      'panel.off': '已关闭',
      'panel.loading': '加载中…',
      'panel.totals': '{workflows} 个工作流 · {agents} 个智能体 · {tokens} Token',
      'panel.agentsCount': '{count} 个智能体',
      'panel.tokensCount': '{tokens} Token',
      'panel.waitingTitle': '已武装，等待任务',
      'panel.waiting': '下一个实质性任务将在这里展开；琐碎请求仍直接处理。',
      'panel.offText': '武装 Ultracode，把每个实质性请求变成多智能体工作流。',
      'panel.activeText': '阶段与智能体实时更新。验证阶段带有盾牌标记；点击智能体可查看其对话。',
      'panel.historyBanner': 'Ultracode 已关闭 — 运行中和已完成的工作流仍可查看。',
      'panel.emptyTitle': '把任务变成工作流',
      'panel.emptyText': 'Ultracode 已关闭。武装后，每个实质性请求都会经过定界、扇出、验证与综合。',
      'panel.feature1': '定界 → 扇出 → 验证 → 综合',
      'panel.feature2': '逐个智能体的模型、Token 与耗时',
      'panel.feature3': '标记验证阶段，保留已完成的工作流',
      'panel.agent': '智能体',
      'panel.tokens': 'Token',
      'panel.time': '耗时',
      'panel.openChild': '打开 {name} 的对话',
      'panel.verification': '验证阶段',
      'panel.unphased': '智能体',
      'panel.noAgents': '未启动智能体',
      'panel.highFanout': '高扇出',
      'panel.finished': '已完成',
      'panel.starting': '正在启动…',
      'panel.cost': '动态工作流比串行工作消耗更多 Token 与时间。',
      'panel.error': 'Ultracode 切换失败',
      'panel.status.running': '运行中',
      'panel.status.completed': '已完成',
      'panel.status.failed': '失败',
      'panel.status.cancelled': '已取消',
      'panel.status.interrupted': '已中断',
    }

    const BOLT_PATH = 'M9.7 1.1 3.2 9h3.9l-.8 5.9L13 6.9H9.1l.6-5.8Z'

    function Bolt({ size, className }) {
      return h(
        'svg',
        {
          className,
          width: size,
          height: size,
          viewBox: '0 0 16 16',
          fill: 'none',
          'aria-hidden': true,
          focusable: false,
        },
        h('path', { d: BOLT_PATH, fill: 'currentColor' }),
      )
    }

    function ChevronIcon({ size, open, className }) {
      return h(
        'svg',
        {
          className,
          width: size,
          height: size,
          viewBox: '0 0 16 16',
          fill: 'none',
          'aria-hidden': true,
          style: { transform: open ? 'rotate(90deg)' : 'none', transition: 'transform .15s ease' },
        },
        h('path', {
          d: 'M6 4.5 9.5 8 6 11.5',
          stroke: 'currentColor',
          strokeWidth: 1.5,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
      )
    }

    function CheckIcon({ size }) {
      return h(
        'svg',
        { width: size, height: size, viewBox: '0 0 16 16', fill: 'none', 'aria-hidden': true },
        h('path', {
          d: 'M3.2 8.4 6.1 11.2 12.8 4.6',
          stroke: 'currentColor',
          strokeWidth: 1.8,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
      )
    }

    function CrossIcon({ size }) {
      return h(
        'svg',
        { width: size, height: size, viewBox: '0 0 16 16', fill: 'none', 'aria-hidden': true },
        h('path', {
          d: 'M4 4 12 12M12 4 4 12',
          stroke: 'currentColor',
          strokeWidth: 1.7,
          strokeLinecap: 'round',
        }),
      )
    }

    function ShieldIcon({ size }) {
      return h(
        'svg',
        { width: size, height: size, viewBox: '0 0 16 16', fill: 'none', 'aria-hidden': true },
        h('path', {
          d: 'M8 1.7 13 3.6v4.3c0 3-2 5-5 6.1-3-1.1-5-3.1-5-6.1V3.6Z',
          stroke: 'currentColor',
          strokeWidth: 1.3,
          strokeLinejoin: 'round',
        }),
        h('path', {
          d: 'M5.7 7.8 7.3 9.3 10.4 6.2',
          stroke: 'currentColor',
          strokeWidth: 1.3,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
      )
    }

    function PowerIcon({ size }) {
      return h(
        'svg',
        { width: size, height: size, viewBox: '0 0 16 16', fill: 'none', 'aria-hidden': true },
        h('path', {
          d: 'M8 2v6',
          stroke: 'currentColor',
          strokeWidth: 1.5,
          strokeLinecap: 'round',
        }),
        h('path', {
          d: 'M4.6 4.3a5 5 0 1 0 6.8 0',
          stroke: 'currentColor',
          strokeWidth: 1.4,
          strokeLinecap: 'round',
        }),
      )
    }

    const CSS = `
.uc-pill, .uc-badge { --uc-accent: var(--dsw-alias-brand-primary); --uc-hot: var(--dsw-alias-state-warn-primary); }
.uc-pillWrap { display: inline-flex; align-items: center; gap: 6px; min-width: 0; }
.uc-pill {
  box-sizing: border-box; display: inline-flex; align-items: center; gap: 5px;
  height: 28px; padding: 0 9px; border: 1px solid var(--dsw-alias-border-l2);
  border-radius: var(--dsw-radius-sm); background: transparent;
  color: var(--dsw-alias-label-secondary); font-family: inherit; font-size: 13px;
  font-weight: 500; line-height: 20px; cursor: pointer;
  transition: color .15s ease, background-color .15s ease, border-color .15s ease, box-shadow .2s ease;
}
.uc-pill:hover { color: var(--dsw-alias-label-primary); background: color-mix(in srgb, var(--dsw-alias-label-primary) 6%, transparent); }
.uc-pill[data-active="true"] {
  color: var(--uc-accent); border-color: color-mix(in srgb, var(--uc-accent) 38%, transparent);
  background: linear-gradient(112deg, color-mix(in srgb, var(--uc-accent) 16%, transparent), color-mix(in srgb, var(--uc-hot) 12%, transparent));
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--uc-accent) 12%, transparent), 0 0 16px color-mix(in srgb, var(--uc-accent) 16%, transparent);
}
.uc-pill:focus-visible, .uc-badge:focus-visible, .ucp-power:focus-visible, .ucp-arm:focus-visible, .ucp-agent:focus-visible, .ucp-phaseHead:focus-visible, .ucp-runToggle:focus-visible, .ucp-bannerAction:focus-visible {
  outline: var(--dsw-focus-ring-width, 2px) solid var(--dsw-focus-ring-color, var(--dsw-alias-brand-primary));
  outline-offset: 2px;
}
.uc-pill[data-active="true"] .uc-bolt { animation: uc-breathe 2.6s ease-in-out infinite; }
.uc-bolt { flex: none; }
.uc-pillLabel { white-space: nowrap; }
.uc-dot {
  width: 5px; height: 5px; flex: none; border-radius: 999px; background: currentColor;
  box-shadow: 0 0 6px currentColor; animation: uc-pulse 2s ease-in-out infinite;
}
.uc-spinner {
  width: 10px; height: 10px; flex: none; border-radius: 999px;
  border: 1.5px solid color-mix(in srgb, currentColor 28%, transparent);
  border-top-color: currentColor; animation: uc-spin .7s linear infinite;
}
.uc-pillError {
  max-width: 132px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  color: var(--dsw-alias-state-error-primary); font-size: 11px; line-height: 16px;
}
.uc-badge {
  box-sizing: border-box; display: inline-flex; align-items: center; gap: 5px;
  height: 20px; padding: 0 8px; border: 0; border-radius: 999px;
  background: linear-gradient(110deg, color-mix(in srgb, var(--uc-accent) 14%, transparent), color-mix(in srgb, var(--uc-hot) 10%, transparent));
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--uc-accent) 30%, transparent);
  color: var(--uc-accent); font-family: inherit; font-size: 9.5px; font-weight: 700;
  letter-spacing: .11em; text-transform: uppercase; cursor: pointer;
}
.uc-badge:hover { box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--uc-accent) 50%, transparent), 0 0 12px color-mix(in srgb, var(--uc-accent) 18%, transparent); }
.uc-badge[data-active="false"] {
  color: var(--dsw-alias-label-tertiary); background: transparent;
  box-shadow: inset 0 0 0 1px var(--dsw-alias-border-l2);
}
.uc-badge[data-active="false"] .uc-bolt { animation: none; }
.uc-badgeText { line-height: 1; }
.uc-badgeCount { font-size: 9px; line-height: 14px; padding: 0 4px; border-radius: 999px; background: color-mix(in srgb, currentColor 10%, transparent); }
.uc-badge .uc-bolt { animation: uc-breathe 2.6s ease-in-out infinite; }
.uc-seam { position: absolute; inset: 0 0 auto; height: 0; pointer-events: none; z-index: 3; }
.uc-seamGlow {
  position: absolute; top: -5px; left: 8%; right: 8%; height: 18px;
  background: radial-gradient(50% 100% at 50% 100%, color-mix(in srgb, var(--uc-accent) 24%, transparent), transparent 72%);
  filter: blur(4px);
}
.uc-seamLine {
  position: absolute; top: 0; left: 24px; right: 24px; height: 1.5px; border-radius: 999px;
  background: linear-gradient(90deg, transparent, var(--uc-accent) 22%, var(--uc-hot) 50%, var(--uc-accent) 78%, transparent);
  background-size: 200% 100%;
  box-shadow: 0 0 10px color-mix(in srgb, var(--uc-accent) 45%, transparent);
  animation: uc-flow 6s linear infinite;
}
.ucp-root {
  --ucp-accent: var(--dsw-alias-brand-primary);
  --ucp-hot: var(--dsw-alias-state-warn-primary);
  --ucp-good: var(--dsw-alias-state-success-primary);
  --ucp-bad: var(--dsw-alias-state-error-primary);
  display: flex; flex-direction: column; min-width: 0; height: 100%; min-height: 0;
  color: var(--dsw-alias-label-primary); font-size: 13px; line-height: 20px;
  background: transparent;
}
.ucp-root *, .ucp-root *::before, .ucp-root *::after { box-sizing: border-box; }
.ucp-head {
  flex: none; display: flex; align-items: center; gap: 10px;
  padding: 11px 13px; border-bottom: 1px solid var(--dsw-alias-border-l1);
}
.ucp-headMain { display: flex; align-items: center; gap: 8px; min-width: 0; flex: 1; }
.ucp-mark {
  width: 27px; height: 27px; flex: none; border-radius: 9px; display: grid; place-items: center;
  color: var(--ucp-accent);
  background: linear-gradient(130deg, color-mix(in srgb, var(--ucp-accent) 18%, transparent), color-mix(in srgb, var(--ucp-hot) 13%, transparent));
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--ucp-accent) 30%, transparent);
}
.ucp-titleWrap { display: flex; flex-direction: column; min-width: 0; }
.ucp-title { font-size: 14px; font-weight: 600; line-height: 18px; white-space: nowrap; }
.ucp-sub { font-size: 9.5px; line-height: 13px; color: var(--dsw-alias-label-tertiary); text-transform: uppercase; letter-spacing: .08em; white-space: nowrap; }
.ucp-power {
  flex: none; display: inline-flex; align-items: center; gap: 4px; height: 26px; padding: 0 8px;
  border: 1px solid var(--dsw-alias-border-l2); border-radius: var(--dsw-radius-sm);
  background: transparent; color: var(--dsw-alias-label-secondary); font: inherit;
  font-size: 11px; font-weight: 500; line-height: 16px; cursor: pointer;
}
.ucp-power:hover { color: var(--dsw-alias-label-primary); background: color-mix(in srgb, var(--dsw-alias-label-primary) 6%, transparent); }
.ucp-power[data-active="true"] {
  color: var(--ucp-accent); border-color: color-mix(in srgb, var(--ucp-accent) 36%, transparent);
  background: color-mix(in srgb, var(--ucp-accent) 9%, transparent);
}
.ucp-power:disabled { opacity: .55; cursor: default; }
.ucp-error {
  flex: none; padding: 7px 13px; border-bottom: 1px solid var(--dsw-alias-border-l1);
  color: var(--ucp-bad); font-size: 11px; line-height: 16px;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.ucp-scroll { flex: 1; min-height: 0; overflow-y: auto; padding: 11px 11px 18px; display: flex; flex-direction: column; gap: 10px; }
.ucp-summary {
  flex: none; padding: 11px 12px; border: 1px solid var(--dsw-alias-border-l1);
  border-radius: var(--dsw-radius-lg);
  background: linear-gradient(135deg, color-mix(in srgb, var(--ucp-accent) 7%, transparent), transparent 58%), var(--dsw-alias-bg-layer-1);
}
.ucp-summary[data-active="true"] { border-color: color-mix(in srgb, var(--ucp-accent) 26%, var(--dsw-alias-border-l1)); }
.ucp-summaryTop { display: flex; align-items: center; gap: 7px; min-width: 0; flex-wrap: wrap; }
.ucp-liveDot { width: 7px; height: 7px; flex: none; border-radius: 999px; background: var(--dsw-alias-state-idle-primary); }
.ucp-liveDot[data-on="true"] { background: var(--ucp-accent); box-shadow: 0 0 8px color-mix(in srgb, var(--ucp-accent) 70%, transparent); animation: ucp-pulse 2s ease-in-out infinite; }
.ucp-summaryLabel { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .07em; }
.ucp-summaryCounts { margin-left: auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 10.5px; color: var(--dsw-alias-label-tertiary); font-variant-numeric: tabular-nums; }
.ucp-summaryText { margin: 6px 0 0; color: var(--dsw-alias-label-secondary); font-size: 11.5px; line-height: 17px; }
.ucp-banner {
  flex: none; display: flex; align-items: center; gap: 8px; padding: 7px 10px;
  border: 1px solid var(--dsw-alias-border-l1); border-radius: var(--dsw-radius-md);
  background: var(--dsw-alias-bg-layer-1);
}
.ucp-bannerText { flex: 1; min-width: 0; font-size: 11px; line-height: 16px; color: var(--dsw-alias-label-secondary); }
.ucp-bannerAction {
  flex: none; height: 24px; padding: 0 8px; border: 1px solid color-mix(in srgb, var(--ucp-accent) 30%, transparent);
  border-radius: var(--dsw-radius-sm); background: color-mix(in srgb, var(--ucp-accent) 10%, transparent);
  color: var(--ucp-accent); font: inherit; font-size: 11px; font-weight: 600; cursor: pointer;
}
.ucp-run {
  flex: none; display: flex; flex-direction: column; gap: 7px; padding: 10px;
  border: 1px solid var(--dsw-alias-border-l1); border-radius: var(--dsw-radius-lg);
  background: var(--dsw-alias-bg-layer-1);
}
.ucp-run[data-status="running"] {
  border-color: color-mix(in srgb, var(--ucp-accent) 34%, var(--dsw-alias-border-l1));
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--ucp-accent) 7%, transparent);
}
.ucp-run[data-finished="true"] { background: color-mix(in srgb, var(--dsw-alias-bg-layer-1) 82%, transparent); }
.ucp-runHead { display: flex; align-items: center; gap: 6px; min-width: 0; flex-wrap: wrap; }
.ucp-runToggle {
  width: 100%; padding: 0; border: 0; background: none; color: inherit; font: inherit;
  text-align: left; cursor: pointer; border-radius: var(--dsw-radius-sm);
}
.ucp-runToggle:hover .ucp-runName { color: var(--ucp-accent); }
.ucp-chevron { flex: none; color: var(--dsw-alias-label-tertiary); }
.ucp-runName { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12.5px; font-weight: 600; line-height: 18px; }
.ucp-runStatus {
  flex: none; padding: 1px 6px; border-radius: 999px; font-size: 9px; font-weight: 700;
  line-height: 13px; text-transform: uppercase; letter-spacing: .06em;
  color: var(--dsw-alias-label-tertiary); background: color-mix(in srgb, var(--dsw-alias-label-tertiary) 10%, transparent);
}
.ucp-runStatus[data-status="running"] { color: var(--ucp-accent); background: color-mix(in srgb, var(--ucp-accent) 12%, transparent); }
.ucp-runStatus[data-status="completed"] { color: var(--ucp-good); background: color-mix(in srgb, var(--ucp-good) 12%, transparent); }
.ucp-runStatus[data-status="failed"], .ucp-runStatus[data-status="interrupted"] { color: var(--ucp-bad); background: color-mix(in srgb, var(--ucp-bad) 11%, transparent); }
.ucp-runStatus[data-status="cancelled"] { color: var(--ucp-hot); background: color-mix(in srgb, var(--ucp-hot) 12%, transparent); }
.ucp-warn { font-size: 9px; line-height: 13px; color: var(--ucp-hot); text-transform: uppercase; letter-spacing: .05em; }
.ucp-runMeta { display: flex; flex-wrap: wrap; gap: 4px 9px; font-size: 10.5px; line-height: 15px; color: var(--dsw-alias-label-tertiary); font-variant-numeric: tabular-nums; }
.ucp-rail { display: flex; gap: 2px; height: 4px; width: 100%; border-radius: 999px; overflow: hidden; background: var(--dsw-alias-border-l1); }
.ucp-railSeg { flex: 1; min-width: 2px; height: 100%; background: color-mix(in srgb, var(--dsw-alias-label-tertiary) 14%, transparent); overflow: hidden; }
.ucp-railSeg[data-empty="true"] { flex: 1; }
.ucp-railSeg[data-verification="true"] { background: color-mix(in srgb, var(--ucp-good) 16%, transparent); }
.ucp-railFill { display: block; height: 100%; border-radius: 0; background: var(--ucp-accent); transition: width .3s ease; }
.ucp-railFill[data-status="completed"] { background: var(--ucp-good); }
.ucp-railFill[data-status="running"] { background: linear-gradient(90deg, var(--ucp-accent), var(--ucp-hot)); }
.ucp-railFill[data-status="failed"] { background: var(--ucp-bad); }
.ucp-railFill[data-status="cancelled"] { background: var(--dsw-alias-state-idle-primary); }
.ucp-phases { display: flex; flex-direction: column; gap: 1px; }
.ucp-phase {
  margin-top: 4px; padding: 2px 4px 4px; border-radius: var(--dsw-radius-md);
  border: 1px solid color-mix(in srgb, var(--dsw-alias-border-l1) 70%, transparent);
  background: color-mix(in srgb, var(--dsw-alias-bg-layer-2) 42%, transparent);
}
.ucp-phase:first-child { margin-top: 2px; }
.ucp-phase[data-verification="true"] {
  background: linear-gradient(90deg, color-mix(in srgb, var(--ucp-good) 7%, transparent), transparent 72%), color-mix(in srgb, var(--dsw-alias-bg-layer-2) 38%, transparent);
  border-color: color-mix(in srgb, var(--ucp-good) 20%, var(--dsw-alias-border-l1));
}
.ucp-phaseHead {
  width: 100%; display: flex; align-items: center; gap: 5px; padding: 4px;
  border: 0; border-radius: var(--dsw-radius-sm); background: none; color: inherit;
  font: inherit; text-align: left; cursor: pointer;
}
.ucp-phaseHead:hover { background: color-mix(in srgb, var(--dsw-alias-label-primary) 5%, transparent); }
.ucp-phaseTitle { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 11.5px; font-weight: 600; line-height: 16px; }
.ucp-verify { flex: none; display: inline-flex; align-items: center; color: var(--ucp-good); }
.ucp-phaseCount { flex: none; margin-left: auto; font-size: 10px; line-height: 14px; color: var(--dsw-alias-label-tertiary); font-variant-numeric: tabular-nums; }
.ucp-phaseDots { display: inline-flex; align-items: center; gap: 3px; flex: none; }
.ucp-dot { width: 5px; height: 5px; border-radius: 999px; background: var(--dsw-alias-border-l2); }
.ucp-dot[data-status="completed"] { background: var(--ucp-good); }
.ucp-dot[data-status="running"] { background: var(--ucp-hot); animation: ucp-pulse 1.6s ease-in-out infinite; }
.ucp-dot[data-status="failed"] { background: var(--ucp-bad); }
.ucp-dot[data-status="interrupted"] { background: var(--ucp-hot); }
.ucp-dot[data-status="cancelled"] { background: var(--dsw-alias-state-idle-primary); }
.ucp-dotMore { font-size: 8.5px; line-height: 10px; color: var(--dsw-alias-label-tertiary); }
.ucp-agents { display: flex; flex-direction: column; padding: 1px 0 4px; }
.ucp-agentHead, .ucp-agent {
  display: grid; grid-template-columns: 14px minmax(0, 1fr) minmax(38px, auto) minmax(44px, auto);
  align-items: center; gap: 6px; min-width: 0;
}
.ucp-agentHead { padding: 3px 4px 2px; font-size: 8.5px; line-height: 11px; text-transform: uppercase; letter-spacing: .07em; color: var(--dsw-alias-label-tertiary); }
.ucp-agentHead .ucp-num { text-align: right; }
.ucp-agent {
  width: 100%; padding: 4px; border: 0; border-radius: var(--dsw-radius-sm);
  background: none; color: inherit; font: inherit; text-align: left; cursor: pointer;
}
.ucp-agent:hover { background: color-mix(in srgb, var(--dsw-alias-label-primary) 5%, transparent); }
.ucp-agent:disabled { cursor: default; }
.ucp-agent[data-status="running"] { background: color-mix(in srgb, var(--ucp-accent) 4%, transparent); }
.ucp-glyph { display: grid; place-items: center; width: 14px; height: 14px; flex: none; color: var(--dsw-alias-label-tertiary); }
.ucp-glyph[data-status="completed"] { color: var(--ucp-good); }
.ucp-glyph[data-status="failed"] { color: var(--ucp-bad); }
.ucp-glyph[data-status="interrupted"] { color: var(--ucp-hot); }
.ucp-glyph[data-status="running"] { color: var(--ucp-hot); }
.ucp-glyph[data-status="cancelled"] { color: var(--dsw-alias-state-idle-primary); }
.ucp-spinner { width: 9px; height: 9px; border-radius: 999px; border: 1.4px solid color-mix(in srgb, currentColor 25%, transparent); border-top-color: currentColor; animation: uc-spin .7s linear infinite; }
.ucp-dash { width: 7px; height: 1.4px; border-radius: 999px; background: currentColor; opacity: .7; }
.ucp-agentMain { display: flex; flex-direction: column; min-width: 0; gap: 0; }
.ucp-agentName { font-size: 11.5px; line-height: 15px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.ucp-agentModel { font-size: 9.5px; line-height: 12px; color: var(--dsw-alias-label-tertiary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.ucp-agentTokens, .ucp-agentTime { font-size: 10px; line-height: 14px; text-align: right; color: var(--dsw-alias-label-secondary); white-space: nowrap; font-variant-numeric: tabular-nums; }
.ucp-agentTime { color: var(--dsw-alias-label-tertiary); }
.ucp-runEmpty { margin: 0; padding: 2px 4px 4px; font-size: 10.5px; color: var(--dsw-alias-label-tertiary); }
.ucp-sectionHead { display: flex; align-items: center; gap: 6px; margin: 2px 1px -3px; font-size: 9.5px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: var(--dsw-alias-label-tertiary); }
.ucp-sectionDot { width: 6px; height: 6px; border-radius: 999px; background: var(--ucp-accent); box-shadow: 0 0 7px color-mix(in srgb, var(--ucp-accent) 60%, transparent); animation: ucp-pulse 2s ease-in-out infinite; }
.ucp-sectionCount { padding: 0 5px; border-radius: 999px; background: color-mix(in srgb, var(--dsw-alias-label-tertiary) 10%, transparent); font-size: 9px; line-height: 14px; }
.ucp-finishedHead { display: flex; align-items: center; gap: 7px; margin-top: 3px; font-size: 9.5px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: var(--dsw-alias-label-tertiary); }
.ucp-finishedHead::after { content: ''; flex: 1; height: 1px; background: var(--dsw-alias-border-l1); }
.ucp-finishedCount { order: -1; padding: 0 5px; border-radius: 999px; background: color-mix(in srgb, var(--dsw-alias-label-tertiary) 10%, transparent); font-size: 9px; line-height: 14px; }
.ucp-empty {
  flex: none; display: flex; flex-direction: column; align-items: flex-start; gap: 8px;
  padding: 15px 13px; border: 1px dashed var(--dsw-alias-border-l2);
  border-radius: var(--dsw-radius-lg); background: color-mix(in srgb, var(--dsw-alias-bg-layer-1) 55%, transparent);
}
.ucp-emptyMark {
  width: 36px; height: 36px; display: grid; place-items: center; border-radius: 12px;
  color: var(--ucp-accent);
  background: linear-gradient(135deg, color-mix(in srgb, var(--ucp-accent) 17%, transparent), color-mix(in srgb, var(--ucp-hot) 12%, transparent));
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--ucp-accent) 28%, transparent);
}
.ucp-emptyTitle { margin: 2px 0 0; font-size: 14px; font-weight: 600; line-height: 20px; }
.ucp-emptyText { margin: 0; font-size: 11.5px; line-height: 17px; color: var(--dsw-alias-label-secondary); }
.ucp-features { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 4px; font-size: 11px; line-height: 16px; color: var(--dsw-alias-label-secondary); }
.ucp-features li::before { content: '▸'; color: var(--ucp-accent); margin-right: 6px; }
.ucp-arm {
  margin-top: 2px; height: 29px; padding: 0 12px; border: 0; border-radius: var(--dsw-radius-sm);
  background: linear-gradient(112deg, var(--ucp-accent), color-mix(in srgb, var(--ucp-accent) 62%, var(--ucp-hot)));
  color: var(--dsw-static-neutral-00, #fff); font: inherit; font-size: 11.5px; font-weight: 600; cursor: pointer;
}
.ucp-arm:hover { filter: brightness(1.08); }
.ucp-arm:disabled { opacity: .6; cursor: default; }
.ucp-waiting {
  position: relative; flex: none; overflow: hidden; padding: 13px;
  border: 1px solid color-mix(in srgb, var(--ucp-accent) 26%, var(--dsw-alias-border-l1));
  border-radius: var(--dsw-radius-lg);
  background: linear-gradient(135deg, color-mix(in srgb, var(--ucp-accent) 6%, transparent), transparent 65%), var(--dsw-alias-bg-layer-1);
}
.ucp-waitingRail {
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, transparent, var(--ucp-accent), var(--ucp-hot), transparent);
  background-size: 200% 100%; animation: ucp-flow 3.6s linear infinite;
}
.ucp-waitingTitle { font-size: 13px; font-weight: 600; line-height: 18px; }
.ucp-waitingText { margin: 5px 0 0; font-size: 11.5px; line-height: 17px; color: var(--dsw-alias-label-secondary); }
.ucp-loading { padding: 18px 4px; color: var(--dsw-alias-label-tertiary); font-size: 12px; line-height: 18px; }
.ucp-cost { margin: 2px 2px 0; font-size: 10px; line-height: 15px; color: var(--dsw-alias-label-tertiary); }
@keyframes uc-pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: .45; transform: scale(.78); } }
@keyframes uc-breathe { 0%, 100% { opacity: 1; filter: drop-shadow(0 0 0 transparent); } 50% { opacity: .78; filter: drop-shadow(0 0 4px color-mix(in srgb, currentColor 70%, transparent)); } }
@keyframes uc-spin { to { transform: rotate(360deg); } }
@keyframes uc-flow { from { background-position: 160% 0; } to { background-position: -160% 0; } }
@keyframes ucp-pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: .4; transform: scale(.78); } }
@keyframes ucp-flow { from { background-position: 160% 0; } to { background-position: -160% 0; } }
@media (prefers-reduced-motion: reduce) {
  .uc-pill[data-active="true"] .uc-bolt, .uc-badge .uc-bolt, .uc-dot, .uc-spinner, .uc-seamLine,
  .ucp-liveDot, .ucp-sectionDot, .ucp-dot, .ucp-spinner, .ucp-waitingRail, .ucp-railFill { animation: none; }
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
      if (status === 'completed') {
        return h('span', { className: 'ucp-glyph', 'data-status': 'completed' }, h(CheckIcon, { size: 11 }))
      }
      if (status === 'running') {
        return h('span', { className: 'ucp-glyph', 'data-status': 'running' }, h('span', { className: 'ucp-spinner' }))
      }
      if (status === 'failed') {
        return h('span', { className: 'ucp-glyph', 'data-status': 'failed' }, h(CrossIcon, { size: 9 }))
      }
      if (status === 'interrupted') {
        return h('span', { className: 'ucp-glyph', 'data-status': 'interrupted' }, h('span', { className: 'ucp-dash' }))
      }
      if (status === 'cancelled') {
        return h('span', { className: 'ucp-glyph', 'data-status': 'cancelled' }, h('span', { className: 'ucp-dash' }))
      }
      return h('span', { className: 'ucp-glyph', 'data-status': 'pending' }, h('span', { className: 'ucp-dash' }))
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
          h(ChevronIcon, { size: 10, open: !collapsed, className: 'ucp-chevron' }),
          h('span', { className: 'ucp-phaseTitle', title }, title),
          verification
            ? h('span', { className: 'ucp-verify', role: 'img', 'aria-label': t('panel.verification'), title: t('panel.verification') }, h(ShieldIcon, { size: 10 }))
            : null,
          h(
            'span',
            { className: 'ucp-phaseDots', 'aria-hidden': true },
            phase.members.slice(0, 10).map((member) =>
              h('span', { key: member.seq, className: 'ucp-dot', 'data-status': member.status }),
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
        finished ? h(ChevronIcon, { key: 'chevron', size: 10, open, className: 'ucp-chevron' }) : null,
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

    function EmptyPanel({ pending, request, t }) {
      return h(
        'div',
        { className: 'ucp-empty' },
        h('span', { className: 'ucp-emptyMark' }, h(Bolt, { size: 23 })),
        h('h2', { className: 'ucp-emptyTitle' }, t('panel.emptyTitle')),
        h('p', { className: 'ucp-emptyText' }, t('panel.emptyText')),
        h(
          'ul',
          { className: 'ucp-features' },
          h('li', { key: 'one' }, t('panel.feature1')),
          h('li', { key: 'two' }, t('panel.feature2')),
          h('li', { key: 'three' }, t('panel.feature3')),
        ),
        h(
          'button',
          {
            type: 'button',
            className: 'ucp-arm',
            disabled: pending !== null,
            onClick: () => request(true),
          },
          pending === true ? t('panel.arming') : t('panel.arm'),
        ),
      )
    }

    function WaitingCard({ t }) {
      return h(
        'div',
        { className: 'ucp-waiting' },
        h('div', { className: 'ucp-waitingRail' }),
        h('div', { className: 'ucp-waitingTitle' }, t('panel.waitingTitle')),
        h('p', { className: 'ucp-waitingText' }, t('panel.waiting')),
      )
    }

    function PanelHeader({ active, pending, loaded, powerLabel, t, onToggle }) {
      return h(
        'header',
        { className: 'ucp-head' },
        h(
          'div',
          { className: 'ucp-headMain' },
          h('span', { className: 'ucp-mark' }, h(Bolt, { size: 15 })),
          h(
            'span',
            { className: 'ucp-titleWrap' },
            h('span', { className: 'ucp-title' }, t('panel.title')),
            h('span', { className: 'ucp-sub' }, t('panel.subtitle')),
          ),
        ),
        h(
          'button',
          {
            type: 'button',
            className: 'ucp-power',
            'data-active': active ? 'true' : 'false',
            'aria-pressed': active,
            disabled: pending !== null || !loaded,
            title: powerLabel,
            onClick: onToggle,
          },
          h(PowerIcon, { size: 11 }),
          h('span', {}, powerLabel),
        ),
      )
    }

    function UltracodePanel({ useProjection, useSessions, useTabInfo, t, toggle, resolveChild }) {
      const stance = useProjection('ultracode')
      const ledger = useProjection('ultracodeRuns')
      const summaries = useSessions((state) => state.byId) ?? {}
      const tab = useTabInfo().tab
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
          : active
            ? t('panel.disarm')
            : t('panel.arm')
      const summaryText = active
        ? runs.length > 0
          ? t('panel.activeText')
          : t('panel.waiting')
        : t('panel.offText')

      if (!loaded) {
        return h(
          'div',
          { className: 'ucp-root', 'data-ultracode-panel': true },
          h(PanelHeader, {
            active,
            pending,
            loaded,
            powerLabel: t('panel.arm'),
            t,
            onToggle: () => request(!active),
          }),
          h('div', { className: 'ucp-scroll' }, h('div', { className: 'ucp-loading' }, t('panel.loading'))),
        )
      }

      const children = []
      children.push(
        h(
          'div',
          { className: 'ucp-summary', key: 'summary', 'data-active': active ? 'true' : 'false' },
          h(
            'div',
            { className: 'ucp-summaryTop' },
            h('span', { className: 'ucp-liveDot', 'data-on': active ? 'true' : 'false' }),
            h('span', { className: 'ucp-summaryLabel' }, active ? t('panel.armed') : t('panel.off')),
            h(
              'span',
              { className: 'ucp-summaryCounts' },
              t('panel.totals', {
                workflows: runs.length,
                agents: totalAgents,
                tokens: anyTokens ? formatTokens(totalTokens) : '—',
              }),
            ),
          ),
          h('p', { className: 'ucp-summaryText' }, summaryText),
        ),
      )

      if (!active && runs.length > 0) {
        children.push(
          h(
            'div',
            { className: 'ucp-banner', key: 'history-banner' },
            h('span', { className: 'ucp-bannerText' }, t('panel.historyBanner')),
            h(
              'button',
              {
                type: 'button',
                className: 'ucp-bannerAction',
                disabled: pending !== null,
                onClick: () => request(true),
              },
              t('panel.arm'),
            ),
          ),
        )
      }

      if (runs.length === 0) {
        children.push(active ? h(WaitingCard, { key: 'waiting', t }) : h(EmptyPanel, { key: 'empty', pending, request, t }))
      }

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

      children.push(h('p', { className: 'ucp-cost', key: 'cost' }, t('panel.cost')))

      return h(
        'div',
        { className: 'ucp-root', 'data-ultracode-panel': true },
        h(PanelHeader, {
          active,
          pending,
          loaded,
          powerLabel,
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
          h(Bolt, { size: 14, className: 'uc-bolt' }),
          h('span', { className: 'uc-pillLabel' }, t('pill.label')),
          active && pending === null ? h('span', { className: 'uc-dot', 'aria-hidden': true }) : null,
          pending !== null ? h('span', { className: 'uc-spinner', 'aria-hidden': true }) : null,
        ),
        error !== null
          ? h('span', { className: 'uc-pillError', role: 'status', title: error }, t('pill.error'))
          : null,
      )
    }

    function UltracodeBadge({ useProjection, openPanel, t }) {
      const stance = useProjection('ultracode')
      const ledger = useProjection('ultracodeRuns')
      if (stance === undefined && ledger === undefined) return null
      const active = stance !== undefined && stance.active === true
      const historyCount = ledger?.runs?.length ?? 0
      return h(
        'button',
        {
          type: 'button',
          className: 'uc-badge',
          'data-active': active ? 'true' : 'false',
          title: active ? t('badge.title') : t('badge.historyTitle'),
          'aria-label': active ? t('badge.aria') : t('badge.historyAria'),
          onClick: openPanel,
        },
        h(Bolt, { size: 11, className: 'uc-bolt' }),
        h('span', { className: 'uc-badgeText' }, t('badge.text')),
        historyCount > 0 ? h('span', { className: 'uc-badgeCount' }, String(historyCount)) : null,
        active ? h('span', { className: 'uc-dot', 'aria-hidden': true }) : null,
      )
    }

    function UltracodeSeam({ useProjection, toggle, t }) {
      const { stance } = useStance(useProjection, toggle, t)
      if (stance === undefined) return null
      if (stance.active !== true && stance.pending !== true) return null
      return h(
        'div',
        { className: 'uc-seam', 'aria-hidden': true },
        h('div', { className: 'uc-seamGlow' }),
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
      const graph = { openPanel: () => false }

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

      ctx.inject(['sidebarRight', 'sidebarRightTabs'], (side) => {
        side.effect(
          () =>
            side.sidebarRightTabs.register({
              id: TAB_ID,
              kind: TAB_KIND,
              title: () => t('panel.title'),
              guide: [
                {
                  id: 'ultracode-workflows',
                  title: () => t('panel.title'),
                  description: () => t('panel.guide'),
                  icon: Bolt,
                  order: 50,
                },
              ],
            }),
          'ultracode: sidebar tab type',
        )

        side.slots.inject('sidebar.right.pane.tab', () =>
          side.slots.register(
            {
              name: 'sidebar.right.pane.tab',
              key: TAB_ID,
              locale: NS,
              inject: (sessionId) => ({
                toggle: (next) => toggle(sessionId, next),
                resolveChild: (childId) => ctx.sessions.subagentAddress(childId),
              }),
            },
            UltracodePanel,
          ),
        )

        side.slots.inject('sidebar.right.pane.tab.title', () =>
          side.slots.register(
            {
              name: 'sidebar.right.pane.tab.title',
              key: TAB_ID,
              locale: NS,
            },
            UltracodeTabTitle,
          ),
        )

        graph.openPanel = () => {
          try {
            side.sidebarRight.openTab(TAB_KIND, { revealIfOpened: true })
            return true
          } catch {
            return false
          }
        }
      })
    }

    return { inject, apply }
  },
})
