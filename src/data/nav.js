// 站点结构的唯一来源：左侧导航、首页路线图、上一步 / 下一步、How-to 目录、搜索都从这里读。
// ready: false 的页面还没写，导航里显示「编写中」，不给链接。
// 中文在根路径，英文在 /en/ 下（同样的 slug）。英文文字放在各条目的 en: {} 里，用 t(x, key, lang) 取。

const BASE = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
/** 当前页面的语言：/en/ 下是英文，其余是中文 */
export const langOf = (pathname = "") => (pathname.slice(BASE.length).startsWith("/en/") || pathname.slice(BASE.length) === "/en" ? "en" : "zh");
/** 站内链接：部署在子路径时自动加前缀；英文页加 /en */
export const link = (path, lang = "zh") => `${BASE}${lang === "en" ? "/en" : ""}${path}`;
/** 同一页的另一种语言 */
export const counterpart = (pathname) => {
  const p = pathname.slice(BASE.length) || "/";
  return BASE + (p.startsWith("/en/") || p === "/en" ? p.replace(/^\/en/, "") || "/" : "/en" + p);
};
/** 取某个对象在当前语言下的字段：en 时优先 x.en[key] */
export const t = (x, key, lang) => (lang === "en" && x.en && x.en[key] !== undefined ? x.en[key] : x[key]);

/** 这个教程站自己的仓库（反馈、源码）。还没建仓库前先放这里，建好后只改这一行。 */
export const REPO = "https://github.com/nevertoday/xxd-pstack";
/** pstack 本身 */
export const PSTACK = "https://github.com/backnotprop/pstack";
export const PSTACK_UPSTREAM = "https://github.com/cursor/plugins/tree/main/pstack";

// 新手入门：给没写过代码、只和 AI 聊过天的人。三课，一条路走到底；做完这三课就够用了。
export const LESSONS = [
  { n: 1, slug: "1-why", title: "它能帮你什么", minutes: "3 分钟", sum: "AI 说「好了」却没好？pstack 让它做完拿出证据", en: { title: "What it does for you", minutes: "3 minutes", sum: "AI says “done” but it isn't? pstack makes it show proof" } },
  { n: 2, slug: "2-install", title: "装上它", minutes: "5 分钟", sum: "在 Claude Code 里输入两行，选一个选项", en: { title: "Install it", minutes: "5 minutes", sum: "Type two lines in Claude Code and pick one option" } },
  { n: 3, slug: "3-first-use", title: "第一次用", minutes: "10 分钟", sum: "用一段三句话，做出一个小网页", en: { title: "Use it for the first time", minutes: "10 minutes", sum: "Make a small web page with one three-part message" } },
];
export const lessonHref = (s, lang = "zh") => link(`/start/${s.slug}/`, lang);

export const STEPS = [
  { n: 0, slug: "0-what", title: "先搞懂 pstack 是什么", minutes: "读 10 分钟", ready: true, sum: "它是什么、解决什么问题、好处在哪、要准备什么", en: { title: "Understand what pstack is", minutes: "10-minute read", sum: "What it is, what it fixes, why it helps, what you need" } },
  { n: 1, slug: "1-install", title: "安装 pstack", minutes: "5 分钟", ready: true, sum: "一条命令装进 Claude Code、Cursor 或 Codex", en: { title: "Install pstack", minutes: "5 minutes", sum: "One command for Claude Code, Cursor or Codex" } },
  { n: 2, slug: "2-setup", title: "选模型和预算", minutes: "10 分钟", ready: true, sum: "跑一次 /setup-pstack：用哪些模型、花多少 token、要不要验证技能", en: { title: "Pick models and budget", minutes: "10 minutes", sum: "Run /setup-pstack once: which models, how many tokens, a verification skill or not" } },
  { n: 3, slug: "3-first-task", title: "第一个任务：/poteto-mode", minutes: "15 分钟", ready: true, sum: "怎么写一句好提示词，怎么看它的待办清单", en: { title: "Your first task: /poteto-mode", minutes: "15 minutes", sum: "How to write a good prompt and read its todo list" } },
  { n: 4, slug: "4-understand", title: "改代码前先看懂", minutes: "15 分钟", ready: true, sum: "/how、/why、/teach、/recall：让 AI 先讲清楚再动手", en: { title: "Understand before you change", minutes: "15 minutes", sum: "/how, /why, /teach, /recall: have the AI explain first" } },
  { n: 5, slug: "5-design-build", title: "设计、动手、清理", minutes: "20 分钟", ready: true, sum: "/architect、/arena、/interrogate、/tdd、/unslop、/no-comments", en: { title: "Design, build, clean up", minutes: "20 minutes", sum: "/architect, /arena, /interrogate, /tdd, /unslop, /no-comments" } },
  { n: 6, slug: "6-verify-ship", title: "验证和交付", minutes: "20 分钟", ready: true, sum: "要证据不要口头保证；验证技能、开 PR、盯到能合并", en: { title: "Verify and ship", minutes: "20 minutes", sum: "Ask for evidence, not promises; verification skills, PRs, getting to mergeable" } },
  { n: 7, slug: "7-overnight", title: "放手让它跑", minutes: "15 分钟", ready: true, sum: "睡前交代清楚，第二天早上看决策日志", en: { title: "Let it run on its own", minutes: "15 minutes", sum: "Hand it a clear brief at night, read the decision log in the morning" } },
  { n: 8, slug: "8-make-it-yours", title: "变成你自己的", minutes: "随用随看", ready: true, sum: "用原则名纠偏、/correct 根治老毛病、/automate-me 做你自己的模式", en: { title: "Make it your own", minutes: "As needed", sum: "Steer with principle names, fix repeat mistakes with /correct, build your own mode with /automate-me" } },
];
export const stepHref = (s, lang = "zh") => link(`/guide/${s.slug}/`, lang);

export const HOWTO = [
  { group: "在真实项目里", en: { group: "In real projects" }, items: [
    { slug: "fix-bug", title: "修一个 bug：先复现，再修，再证明", en: { title: "Fix a bug: reproduce, fix, prove it" } },
    { slug: "add-feature", title: "加一个新功能，不碰坏旧的", en: { title: "Add a feature without breaking old ones" } },
    { slug: "refactor", title: "重构：结构变，行为一点不变", en: { title: "Refactor: new structure, same behavior" } },
    { slug: "perf", title: "查慢：拿数字说话的性能优化", en: { title: "Make it faster, with numbers" } },
    { slug: "new-codebase", title: "接手一个陌生项目", en: { title: "Take over an unfamiliar project" } },
    { slug: "review-branch", title: "提交前，让几个模型挑刺", en: { title: "Let several models pick holes before you ship" } },
    { slug: "write-docs", title: "写 README、文档、PR 说明", en: { title: "Write READMEs, docs and PR descriptions" } },
    { slug: "big-migration", title: "睡前交给它一次大迁移", en: { title: "Hand it a big migration before bed" } },
  ]},
  { group: "工具和环境", en: { group: "Tools and setup" }, items: [
    { slug: "claude-code", title: "在 Claude Code 里用", en: { title: "Using it in Claude Code" } },
    { slug: "cursor", title: "在 Cursor 里用", en: { title: "Using it in Cursor" } },
    { slug: "codex", title: "在 Codex 和其他工具里用", en: { title: "Using it in Codex and other tools" } },
    { slug: "pick-skills", title: "只装几个技能：哪些要一起装", en: { title: "Install only a few skills: what goes together" } },
    { slug: "cost", title: "控制花费", en: { title: "Keep costs down" } },
    { slug: "update-remove", title: "更新、查看、卸载", en: { title: "Update, inspect, uninstall" } },
  ]},
  { group: "提示词", en: { group: "Prompts" }, items: [
    { slug: "recipes", title: "照抄就能用的提示词", en: { title: "Copy-paste prompts" } },
    { slug: "steer", title: "跑偏了，一句话拉回来", en: { title: "Pull it back on track in one sentence" } },
    { slug: "which-skill", title: "不知道该用哪个技能", en: { title: "Not sure which skill to use" } },
  ]},
];
export const howtoHref = (slug, lang = "zh") => link(`/howto/${slug}/`, lang);
export const HOWTO_FLAT = HOWTO.flatMap((g) => g.items.map((i) => ({ ...i, group: g.group, groupEn: g.en.group })));

export const wikiHref = (slug, lang = "zh") => link(`/wiki/${slug}/`, lang);

// 正文里虚线标出的术语：悬停看一句话解释（Term 组件）。wiki: 对应的 Wiki 条目
export const GLOSSARY = {
  "Agent Skill": { tip: "一个文件夹里放一份 SKILL.md：教 AI 在某类任务上「按这个做法来」的说明书。", wiki: "agent-skill", en: { label: "Agent Skill", tip: "A folder holding a SKILL.md: instructions that teach the AI how to handle one kind of task." } },
  技能: { tip: "Agent Skill 的中文叫法。pstack 就是一包技能。", wiki: "agent-skill", en: { label: "skill", tip: "Short for Agent Skill. pstack is a pack of skills." } },
  "SKILL.md": { tip: "技能的正文：开头几行写名字和什么时候用，后面写具体步骤和规矩。", wiki: "skill-md", en: { label: "SKILL.md", tip: "The body of a skill: a few header lines with its name and when to use it, then the steps and rules." } },
  宿主: { tip: "真正跑 AI 的那个工具：Claude Code、Cursor、Codex 等。pstack 装在它里面。", wiki: "harness", en: { label: "harness", tip: "The tool that actually runs the AI: Claude Code, Cursor, Codex and so on. pstack is installed inside it." } },
  剧本: { tip: "Playbook：一类任务的标准做法，比如「修 bug」就是先复现、找根因、修、再验证。", wiki: "playbook", en: { label: "playbook", tip: "The standard way to handle one kind of task. “Fix a bug” means reproduce, find the root cause, fix, verify." } },
  "poteto-mode": { tip: "pstack 的总入口。你说目标，它挑剧本、调技能、拿证据。", wiki: "poteto-mode", en: { label: "poteto-mode", tip: "pstack's main entry. You say the goal; it picks a playbook, calls skills and brings back evidence." } },
  子代理: { tip: "主对话派出去干一小块活的 AI 助手，干完只把结论交回来。", wiki: "subagent", en: { label: "subagent", tip: "An AI helper the main conversation sends off to do one piece of work; it reports back only the conclusion." } },
  worktree: { tip: "同一个 Git 仓库的第二份工作目录，几个 AI 同时改代码时互不打架。", wiki: "worktree", en: { label: "worktree", tip: "A second working folder for the same Git repo, so several AIs can change code at once without colliding." } },
  待办清单: { tip: "/poteto-mode 一开始就列出的步骤清单，跳过的步骤会写明理由。", wiki: "todo", en: { label: "todo list", tip: "The list of steps /poteto-mode writes out at the start. Skipped steps say why." } },
  验证技能: { tip: "教 AI 怎么启动、操作你的应用，并拿出「真的能用」的证据。", wiki: "verify-skill", en: { label: "verification skill", tip: "Teaches the AI how to start and drive your app, and how to bring back proof that it really works." } },
  形式化验证: { tip: "不靠举例子测试，而是把某条规则在所有情况下都检查一遍。", wiki: "formal-verification", en: { label: "formal verification", tip: "Instead of testing examples, checks that a rule holds in every possible case." } },
  决策日志: { tip: "AI 每做一个决定就记一行：时间、决定、理由、证据。第二天早上你看这个。", wiki: "decision-log", en: { label: "decision log", tip: "One line per decision the AI makes: time, decision, reason, evidence. You read it in the morning." } },
  原则: { tip: "pstack 的 24 条工程原则，每条都有名字，说出名字就能纠正 AI。", wiki: "principles", en: { label: "principles", tip: "pstack's 24 engineering principles. Each has a name; say the name to correct the AI." } },
  token: { tip: "AI 计费和计算的单位。pstack 会多派子代理、多做检查，所以更费 token。", wiki: "token-budget", en: { label: "tokens", tip: "The unit AI usage is measured and billed in. pstack sends more subagents and runs more checks, so it uses more." } },
  推理预算: { tip: "让模型「想多久」的档位，越高越仔细也越贵。pstack 默认 xhigh。", wiki: "token-budget", en: { label: "reasoning budget", tip: "How long the model is allowed to think. Higher is more careful and more expensive. pstack defaults to xhigh." } },
  PR: { tip: "Pull Request：把一组改动提交给别人审核、再合并进主分支的请求。", wiki: "pr", en: { label: "PR", tip: "Pull Request: a request to have a set of changes reviewed and merged into the main branch." } },
  斜杠命令: { tip: "在对话框里打 / 开头的命令，比如 /poteto-mode，就是点名用某个技能。", wiki: "slash", en: { label: "slash command", tip: "A command typed in the chat starting with /, like /poteto-mode. It calls a skill by name." } },
  模型角色: { tip: "pstack 把活分成写代码、做判断、评审等角色，每个角色可以配不同的模型。", wiki: "model-roles", en: { label: "model roles", tip: "pstack splits work into roles (writing code, judging, reviewing…); each role can use a different model." } },
  "Custom Mode": { tip: "Cursor 的「常驻模式」：技能每一轮都在，不用每句话都打 /poteto-mode。", wiki: "custom-mode", en: { label: "Custom Mode", tip: "Cursor's persistent mode: the skill stays on every turn, so you don't type /poteto-mode each time." } },
};
