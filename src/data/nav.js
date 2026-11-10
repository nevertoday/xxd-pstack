// 站点结构的唯一来源：左侧导航、首页路线图、上一步 / 下一步、How-to 目录、搜索都从这里读。
// ready: false 的页面还没写，导航里显示「编写中」，不给链接。
// 目前只有中文。langOf / t 保留着，以后加英文版时照小小东 VPS 教程站的做法在 /en/ 下补一套即可。

const BASE = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
/** 当前页面的语言（目前只有中文） */
export const langOf = () => "zh";
/** 站内链接：部署在子路径时自动加前缀 */
export const link = (path) => `${BASE}${path}`;
/** 取某个对象的字段（预留多语言） */
export const t = (x, key) => x[key];

/** 这个教程站自己的仓库（反馈、源码）。还没建仓库前先放这里，建好后只改这一行。 */
export const REPO = "https://github.com/nevertoday/xxd-pstack";
/** pstack 本身 */
export const PSTACK = "https://github.com/backnotprop/pstack";
export const PSTACK_UPSTREAM = "https://github.com/cursor/plugins/tree/main/pstack";

export const STEPS = [
  { n: 0, slug: "0-what", title: "先搞懂 pstack 是什么", minutes: "读 10 分钟", ready: true, sum: "它是什么、解决什么问题、好处在哪、要准备什么" },
  { n: 1, slug: "1-install", title: "安装 pstack", minutes: "5 分钟", ready: true, sum: "一条命令装进 Claude Code、Cursor 或 Codex" },
  { n: 2, slug: "2-setup", title: "选模型和预算", minutes: "10 分钟", ready: true, sum: "跑一次 /setup-pstack：用哪些模型、花多少 token、要不要验证技能" },
  { n: 3, slug: "3-first-task", title: "第一个任务：/poteto-mode", minutes: "15 分钟", ready: true, sum: "怎么写一句好提示词，怎么看它的待办清单" },
  { n: 4, slug: "4-understand", title: "改代码前先看懂", minutes: "15 分钟", ready: true, sum: "/how、/why、/teach、/recall：让 AI 先讲清楚再动手" },
  { n: 5, slug: "5-design-build", title: "设计、动手、清理", minutes: "20 分钟", ready: true, sum: "/architect、/arena、/interrogate、/tdd、/unslop、/no-comments" },
  { n: 6, slug: "6-verify-ship", title: "验证和交付", minutes: "20 分钟", ready: true, sum: "要证据不要口头保证；验证技能、开 PR、盯到能合并" },
  { n: 7, slug: "7-overnight", title: "放手让它跑", minutes: "15 分钟", ready: true, sum: "睡前交代清楚，第二天早上看决策日志" },
  { n: 8, slug: "8-make-it-yours", title: "变成你自己的", minutes: "随用随看", ready: true, sum: "用原则名纠偏、/correct 根治老毛病、/automate-me 做你自己的模式" },
];
export const stepHref = (s) => link(`/guide/${s.slug}/`);

export const HOWTO = [
  { group: "在真实项目里", items: [
    { slug: "fix-bug", title: "修一个 bug：先复现，再修，再证明" },
    { slug: "add-feature", title: "加一个新功能，不碰坏旧的" },
    { slug: "refactor", title: "重构：结构变，行为一点不变" },
    { slug: "perf", title: "查慢：拿数字说话的性能优化" },
    { slug: "new-codebase", title: "接手一个陌生项目" },
    { slug: "review-branch", title: "提交前，让几个模型挑刺" },
    { slug: "write-docs", title: "写 README、文档、PR 说明" },
    { slug: "big-migration", title: "睡前交给它一次大迁移" },
  ]},
  { group: "工具和环境", items: [
    { slug: "claude-code", title: "在 Claude Code 里用" },
    { slug: "cursor", title: "在 Cursor 里用" },
    { slug: "codex", title: "在 Codex 和其他工具里用" },
    { slug: "pick-skills", title: "只装几个技能：哪些要一起装" },
    { slug: "cost", title: "控制花费" },
    { slug: "update-remove", title: "更新、查看、卸载" },
  ]},
  { group: "提示词", items: [
    { slug: "recipes", title: "照抄就能用的提示词" },
    { slug: "steer", title: "跑偏了，一句话拉回来" },
    { slug: "which-skill", title: "不知道该用哪个技能" },
  ]},
];
export const howtoHref = (slug) => link(`/howto/${slug}/`);
export const HOWTO_FLAT = HOWTO.flatMap((g) => g.items.map((i) => ({ ...i, group: g.group })));

export const wikiHref = (slug) => link(`/wiki/${slug}/`);

// 正文里虚线标出的术语：悬停看一句话解释（Term 组件）。wiki: 对应的 Wiki 条目
export const GLOSSARY = {
  "Agent Skill": { tip: "一个文件夹里放一份 SKILL.md：教 AI 在某类任务上「按这个做法来」的说明书。", wiki: "agent-skill" },
  技能: { tip: "Agent Skill 的中文叫法。pstack 就是一包技能。", wiki: "agent-skill" },
  "SKILL.md": { tip: "技能的正文：开头几行写名字和什么时候用，后面写具体步骤和规矩。", wiki: "skill-md" },
  宿主: { tip: "真正跑 AI 的那个工具：Claude Code、Cursor、Codex 等。pstack 装在它里面。", wiki: "harness" },
  剧本: { tip: "Playbook：一类任务的标准做法，比如「修 bug」就是先复现、找根因、修、再验证。", wiki: "playbook" },
  "poteto-mode": { tip: "pstack 的总入口。你说目标，它挑剧本、调技能、拿证据。", wiki: "poteto-mode" },
  子代理: { tip: "主对话派出去干一小块活的 AI 助手，干完只把结论交回来。", wiki: "subagent" },
  worktree: { tip: "同一个 Git 仓库的第二份工作目录，几个 AI 同时改代码时互不打架。", wiki: "worktree" },
  待办清单: { tip: "/poteto-mode 一开始就列出的步骤清单，跳过的步骤会写明理由。", wiki: "todo" },
  验证技能: { tip: "教 AI 怎么启动、操作你的应用，并拿出「真的能用」的证据。", wiki: "verify-skill" },
  形式化验证: { tip: "不靠举例子测试，而是把某条规则在所有情况下都检查一遍。", wiki: "formal-verification" },
  决策日志: { tip: "AI 每做一个决定就记一行：时间、决定、理由、证据。第二天早上你看这个。", wiki: "decision-log" },
  原则: { tip: "pstack 的 24 条工程原则，每条都有名字，说出名字就能纠正 AI。", wiki: "principles" },
  token: { tip: "AI 计费和计算的单位。pstack 会多派子代理、多做检查，所以更费 token。", wiki: "token-budget" },
  推理预算: { tip: "让模型「想多久」的档位，越高越仔细也越贵。pstack 默认 xhigh。", wiki: "token-budget" },
  PR: { tip: "Pull Request：把一组改动提交给别人审核、再合并进主分支的请求。", wiki: "pr" },
  斜杠命令: { tip: "在对话框里打 / 开头的命令，比如 /poteto-mode，就是点名用某个技能。", wiki: "slash" },
  模型角色: { tip: "pstack 把活分成写代码、做判断、评审等角色，每个角色可以配不同的模型。", wiki: "model-roles" },
  "Custom Mode": { tip: "Cursor 的「常驻模式」：技能每一轮都在，不用每句话都打 /poteto-mode。", wiki: "custom-mode" },
};
