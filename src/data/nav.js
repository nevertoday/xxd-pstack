import { existsSync } from "node:fs";
import { join } from "node:path";
import { load, overlay, L10N_LANGS } from "../l10n/load.js";
// 站点结构的唯一来源：左侧导航、首页路线图、上一步 / 下一步、How-to 目录、搜索都从这里读。
// ready: false 的页面还没写，导航里显示「编写中」，不给链接。
// 中文在根路径，英文在 /en/ 下（同样的 slug）。英文文字放在各条目的 en: {} 里，用 t(x, key, lang) 取。
// 另外 8 种语言的文字在 src/l10n/<语言>/nav.json，加载时叠到各条目的 <语言>: {} 上（见文件末尾）。

const BASE = (import.meta.env?.BASE_URL || "/").replace(/\/$/, "");
/**
 * 网站的语言。zh、en 是全站。另外 8 种语言 full: true 才是全站（导航、搜索、链接都指向 /<语言>/…）；
 * 没有 full 的只有首页和新手入门三课，别的页面链到英文版，构建后 scripts/l10n-dist.mjs 把它们已有的其他页面删掉。
 * 预览一种还没打开的语言：L10N_FULL=ja npm run build（逗号分隔几种），不用改这里。
 */
export const LANGS = [
  { code: "en", name: "English", html: "en", full: true },
  { code: "zh", name: "中文", html: "zh-CN", full: true },
  { code: "ja", name: "日本語", html: "ja", full: true },
  { code: "ko", name: "한국어", html: "ko", full: true },
  { code: "es", name: "Español", html: "es", full: true },
  { code: "pt", name: "Português", html: "pt-BR", full: true },
  { code: "fr", name: "Français", html: "fr", full: true },
  { code: "de", name: "Deutsch", html: "de", full: true },
  { code: "ru", name: "Русский", html: "ru", full: true },
  { code: "ar", name: "العربية", html: "ar", dir: "rtl", full: true },
];
const PREVIEW = (globalThis.process?.env?.L10N_FULL || "").split(",").map((x) => x.trim()).filter(Boolean);
const FULL = new Set([...LANGS.filter((l) => l.full).map((l) => l.code), ...PREVIEW]);
export const langInfo = (lang) => LANGS.find((l) => l.code === lang) ?? LANGS[0];
const PREFIXED = LANGS.filter((l) => l.code !== "zh").map((l) => l.code);
const PREFIX_RE = new RegExp(`^/(${PREFIXED.join("|")})(?=/|$)`);
/** 当前页面的语言：看路径前缀（/en/、/ja/……），没有前缀是中文 */
export const langOf = (pathname = "") => pathname.slice(BASE.length).match(PREFIX_RE)?.[1] ?? "zh";
/** 去掉子路径和语言前缀以后的站内路径：/ja/guide/1-install/ → /guide/1-install/ */
export const stripLang = (pathname = "") => (pathname.slice(BASE.length) || "/").replace(PREFIX_RE, "") || "/";
/** 这种语言是不是全站（zh、en 是；另外 8 种看 LANGS 里的 full 和 L10N_FULL） */
export const isFull = (lang) => FULL.has(lang);
/** 只在全站语言里存在的页面（完整教程、How-to、技能、Wiki、常见问题）：非全站语言链到英文版 */
export const fullLang = (lang) => (isFull(lang) ? lang : "en");
/** 站内链接：部署在子路径时自动加前缀；非中文加 /<语言> */
export const link = (path, lang = "zh") => `${BASE}${lang === "zh" ? "" : "/" + lang}${path}`;
/**
 * 这种语言有没有这一页（path 不带语言前缀，如 /guide/1-install/）。中文、英文全都有；首页和新手入门每种语言都有；
 * 全站语言里，完整教程和 How-to 要 src/pages/<语言>/ 下有那篇 MDX（还没翻的那篇链到英文版），其余页面由数据生成，都有。
 */
export const hasPage = (lang, path) => {
  if (lang === "zh" || lang === "en") return true;
  if (path === "/" || path.startsWith("/start/")) return true;
  if (!isFull(lang) || /^\/404\/?$/.test(path)) return false;
  const m = path.match(/^\/(guide|howto)\/([^/]+)\/$/);
  return m ? existsSync(join(process.cwd(), "src/pages", lang, m[1], `${m[2]}.mdx`)) : true;
};
/** 链到一页：这种语言有这一页就用它，没有就用英文版 */
export const pageLang = (path, lang) => (hasPage(lang, path) ? lang : "en");
export const href = (path, lang = "zh") => link(path, pageLang(path, lang));
/** 同一页在另一种语言里的地址：那种语言没有这一页，就去它的首页 */
export const langHref = (pathname, target) => {
  const rel = stripLang(pathname);
  if (/\/404\/?$/.test(rel)) return link("/", target);
  return hasPage(target, rel) ? link(rel, target) : link("/", target);
};
/** 取某个对象在当前语言下的字段：先找 x[lang][key]，再找 x.en[key]（非中文的兜底），最后是中文 */
export const t = (x, key, lang) => {
  if (lang === "zh") return x[key];
  return x[lang]?.[key] ?? x.en?.[key] ?? x[key];
};

/** 这个教程站自己的仓库（反馈、源码）。还没建仓库前先放这里，建好后只改这一行。 */
export const REPO = "https://github.com/nevertoday/xxd-pstack";
/** pstack 本身 */
export const PSTACK = "https://github.com/backnotprop/pstack";
export const PSTACK_UPSTREAM = "https://github.com/cursor/plugins/tree/main/pstack";

// 新手入门：给没写过代码、只和 AI 聊过天的人。三课，一条路走到底；做完这三课就够用了。
export const LESSONS = [
  { n: 1, slug: "1-why", title: "它能帮你什么", minutes: "3 分钟", sum: "pstack 是什么，要准备什么，代价是什么", en: { title: "What it does for you", minutes: "3 minutes", sum: "What pstack is, what you need, what it costs" } },
  { n: 2, slug: "2-install", title: "装上它", minutes: "5 分钟", sum: "在 Claude Code 里输入两行，选一个选项", en: { title: "Install it", minutes: "5 minutes", sum: "Type two lines in Claude Code and pick one option" } },
  { n: 3, slug: "3-first-use", title: "第一次用", minutes: "10 分钟", sum: "发一段三部分的话，做出一个小网页", en: { title: "Use it for the first time", minutes: "10 minutes", sum: "Make a small web page with one three-part message" } },
];
export const lessonHref = (s, lang = "zh") => link(`/start/${s.slug}/`, lang);

export const STEPS = [
  { n: 0, slug: "0-what", title: "pstack 是什么", minutes: "读 5 分钟", ready: true, sum: "它管什么用、代价是什么、要准备什么", en: { title: "What pstack is", minutes: "5-minute read", sum: "What it's for, what it costs, what you need" } },
  { n: 1, slug: "1-install", title: "安装 pstack", minutes: "5 分钟", ready: true, sum: "Claude Code、Cursor、Codex 各一种装法", en: { title: "Install pstack", minutes: "5 minutes", sum: "One way each for Claude Code, Cursor and Codex" } },
  { n: 2, slug: "2-setup", title: "选模型和预算（可跳过）", minutes: "10 分钟", ready: true, sum: "不设置也能用；想省钱或换模型再看", en: { title: "Pick models and budget (optional)", minutes: "10 minutes", sum: "Works without it; read this to save money or switch models" } },
  { n: 3, slug: "3-first-task", title: "第一个任务", minutes: "15 分钟", ready: true, sum: "一句话交代清楚，再看它的复述和结果", en: { title: "Your first task", minutes: "15 minutes", sum: "Say it in one message, then check its restatement and results" } },
  { n: 4, slug: "4-understand", title: "改之前先看懂", minutes: "15 分钟", ready: true, sum: "让 AI 先讲清楚代码怎么工作，再决定改不改", en: { title: "Understand before you change", minutes: "15 minutes", sum: "Have the AI explain how the code works before deciding to change it" } },
  { n: 5, slug: "5-design-build", title: "设计、动手、收拾干净", minutes: "20 分钟", ready: true, sum: "大改动先定方案，写完让别的模型挑毛病，再删掉多余的", en: { title: "Design, build, clean up", minutes: "20 minutes", sum: "Settle the plan for big changes, have other models pick holes, cut what isn't needed" } },
  { n: 6, slug: "6-verify-ship", title: "验证和交付", minutes: "20 分钟", ready: true, sum: "先确认真的能用，再交上去合并", en: { title: "Verify and ship", minutes: "20 minutes", sum: "Make sure it really works, then hand it in for merging" } },
  { n: 7, slug: "7-overnight", title: "放手让它跑", minutes: "15 分钟", ready: true, sum: "睡前交代清楚，早上看它的记录", en: { title: "Let it run on its own", minutes: "15 minutes", sum: "Brief it before bed, read its log in the morning" } },
  { n: 8, slug: "8-make-it-yours", title: "用熟以后", minutes: "随用随看", ready: true, sum: "一句话拉回跑偏，同样的错不犯第二次", en: { title: "Once you're comfortable", minutes: "As needed", sum: "Pull it back in one line; stop the same mistake from happening twice" } },
];
export const stepHref = (s, lang = "zh") => href(`/guide/${s.slug}/`, lang);

// 每组的 id 只用来对上另外 8 种语言的翻译（src/l10n/<语言>/nav.json 的 howtoGroups），不出现在页面上
export const HOWTO = [
  { id: "real", group: "在真实项目里", en: { group: "In real projects" }, items: [
    { slug: "fix-bug", title: "修一个 bug：先复现，再修，再证明", en: { title: "Fix a bug: reproduce, fix, prove it" } },
    { slug: "add-feature", title: "加一个新功能，不碰坏旧的", en: { title: "Add a feature without breaking old ones" } },
    { slug: "refactor", title: "重构：换个写法，功能不变", en: { title: "Refactor: new code, same behavior" } },
    { slug: "perf", title: "嫌它慢：用数字证明变快了", en: { title: "Too slow? Prove it got faster, with numbers" } },
    { slug: "new-codebase", title: "接手一个陌生项目", en: { title: "Take over an unfamiliar project" } },
    { slug: "review-branch", title: "交之前，让几个 AI 挑毛病", en: { title: "Before you hand it in, let a few AIs pick holes" } },
    { slug: "write-docs", title: "写 README、文档、PR 说明", en: { title: "Write READMEs, docs and PR descriptions" } },
    { slug: "big-migration", title: "大改动：睡前交给它，早上看结果", en: { title: "Big changes: hand it over at night, check in the morning" } },
  ]},
  { id: "prove", group: "让 AI 自己证明", en: { group: "Let the AI prove it" }, items: [
    { slug: "verify-app", title: "给项目配一个验证技能，让 AI 自己去点", en: { title: "Give your project a verification skill, so the AI checks its own work" } },
    { slug: "formal-verify", title: "测试碰不到的 bug：形式化验证", en: { title: "Bugs tests can't reach: formal verification" } },
  ] },
  { id: "tools", group: "工具和环境", en: { group: "Tools and setup" }, items: [
    { slug: "claude-code", title: "在 Claude Code 里用", en: { title: "Using it in Claude Code" } },
    { slug: "cursor", title: "在 Cursor 里用", en: { title: "Using it in Cursor" } },
    { slug: "codex", title: "在 Codex 和其他工具里用", en: { title: "Using it in Codex and other tools" } },
    { slug: "pick-skills", title: "只装几个技能", en: { title: "Install only a few skills" } },
    { slug: "cost", title: "控制花费", en: { title: "Keep costs down" } },
    { slug: "update-remove", title: "更新、查看、卸载", en: { title: "Update, inspect, uninstall" } },
  ]},
  { id: "prompts", group: "提示词", en: { group: "Prompts" }, items: [
    { slug: "recipes", title: "照抄就能用的提示词", en: { title: "Copy-paste prompts" } },
    { slug: "steer", title: "它跑偏了，一句话拉回来", en: { title: "Pull it back on track in one sentence" } },
    { slug: "which-skill", title: "不知道该用哪个技能", en: { title: "Not sure which skill to use" } },
  ]},
  { id: "others", group: "别人的经验", en: { group: "From other users" }, items: [
    { slug: "field-notes", title: "用过的人怎么说：值得抄的用法和坑", en: { title: "What other users learned: tricks to copy, traps to skip" } },
  ]},
];
export const howtoHref = (slug, lang = "zh") => href(`/howto/${slug}/`, lang);
export const wikiHref = (slug, lang = "zh") => href(`/wiki/${slug}/`, lang);

// 正文里虚线标出的术语：悬停看一句话解释（Term 组件）。wiki: 对应的 Wiki 条目
export const GLOSSARY = {
  "Agent Skill": { tip: "一个文件夹里放一份 SKILL.md：教 AI 在某类任务上「按这个做法来」的说明书。", wiki: "agent-skill", en: { label: "Agent Skill", tip: "A folder holding a SKILL.md: instructions that teach the AI how to handle one kind of task." } },
  技能: { tip: "Agent Skill 的中文叫法。pstack 就是一包技能。", wiki: "agent-skill", en: { label: "skill", tip: "Short for Agent Skill. pstack is a pack of skills." } },
  "SKILL.md": { tip: "技能的正文：开头几行写名字和什么时候用，后面写具体步骤和规矩。", wiki: "skill-md", en: { label: "SKILL.md", tip: "The body of a skill: a few header lines with its name and when to use it, then the steps and rules." } },
  宿主: { tip: "真正跑 AI 的那个工具：Claude Code、Cursor、Codex 等。pstack 装在它里面。", wiki: "harness", en: { label: "harness", tip: "The tool that actually runs the AI: Claude Code, Cursor, Codex and so on. pstack is installed inside it." } },
  剧本: { tip: "一类事情的固定做法。比如修 bug：先让问题再出现一次，找到真正的原因，修，再检查一遍。", wiki: "playbook", en: { label: "playbook", tip: "The standard way to handle one kind of task. “Fix a bug” means reproduce, find the root cause, fix, verify." } },
  "poteto-mode": { tip: "pstack 的总开关。你说要什么，它自己安排步骤。", wiki: "poteto-mode", en: { label: "poteto-mode", tip: "pstack's main switch. You say what you want; it plans the steps itself." } },
  子代理: { tip: "主对话派出去干一小块活的帮手 AI，干完只把结果交回来。", wiki: "subagent", en: { label: "subagent", tip: "An AI helper the main conversation sends off to do one piece of work; it reports back only the conclusion." } },
  worktree: { tip: "同一个项目的第二份副本。几个 AI 同时改代码，各改各的，互不打架。", wiki: "worktree", en: { label: "worktree", tip: "A second working folder for the same Git repo, so several AIs can change code at once without colliding." } },
  待办清单: { tip: "它开工时列出的步骤。不做的那步会写明为什么。", wiki: "todo", en: { label: "todo list", tip: "The list of steps /poteto-mode writes out at the start. Skipped steps say why." } },
  验证技能: { tip: "一份说明书，教 AI 怎么打开你的应用，像用户一样点一遍。", wiki: "verify-skill", en: { label: "verification skill", tip: "A guide that teaches the AI to open your app and click through it like a user." } },
  形式化验证: { tip: "把一条规则在所有可能的情况下都检查一遍，比挑几个例子测试更彻底。", wiki: "formal-verification", en: { label: "formal verification", tip: "Instead of testing examples, checks that a rule holds in every possible case." } },
  决策日志: { tip: "AI 每做一个决定就记一行：时间、决定、理由、证据。第二天早上你看这个。", wiki: "decision-log", en: { label: "decision log", tip: "One line per decision the AI makes: time, decision, reason, evidence. You read it in the morning." } },
  原则: { tip: "pstack 的 24 条做事规矩。每条有个英文名字，打出名字它就知道你要什么。", wiki: "principles", en: { label: "principles", tip: "pstack's 24 engineering principles. Each has a name; say the name to correct the AI." } },
  token: { tip: "AI 用量的计算单位，相当于「额度」。pstack 检查得多，用得也多。", wiki: "token-budget", en: { label: "tokens", tip: "The unit AI usage is measured and billed in. pstack sends more subagents and runs more checks, so it uses more." } },
  推理预算: { tip: "让模型想多久。越高越仔细，也越贵。pstack 默认用 xhigh 这一档。", wiki: "token-budget", en: { label: "reasoning budget", tip: "How long the model is allowed to think. Higher is more careful and more expensive. pstack defaults to xhigh." } },
  PR: { tip: "Pull Request：把一组改动交上去，请人看过以后再并进正式版本。", wiki: "pr", en: { label: "PR", tip: "Pull Request: a request to have a set of changes reviewed and merged into the main branch." } },
  斜杠命令: { tip: "在对话框里打 / 开头的命令，比如 /poteto-mode，就是点名用某个技能。", wiki: "slash", en: { label: "slash command", tip: "A command typed in the chat starting with /, like /poteto-mode. It calls a skill by name." } },
  模型角色: { tip: "pstack 把活分成写代码、做判断、挑毛病几种，每种可以用不同的模型。", wiki: "model-roles", en: { label: "model roles", tip: "pstack splits work into roles (writing code, judging, reviewing…); each role can use a different model." } },
  "Custom Mode": { tip: "Cursor 的「常开模式」：打开一次，之后每句话都生效，不用每句都打 /poteto-mode。", wiki: "custom-mode", en: { label: "Custom Mode", tip: "Cursor's persistent mode: the skill stays on every turn, so you don't type /poteto-mode each time." } },
};

// 另外 8 种语言：src/l10n/<语言>/nav.json 的文字叠到各条目的 <语言>: {} 上（缺的键用英文），t(x, key, lang) 就能取到。
// 结构见 src/l10n/en/nav.json（scripts/l10n.mjs export 从上面的 en: {} 生成）。
for (const code of L10N_LANGS) {
  const n = load(code, "nav");
  if (!n) continue;
  for (const s of LESSONS) s[code] = overlay(s.en, n.lessons?.[s.slug]);
  for (const s of STEPS) s[code] = overlay(s.en, n.steps?.[s.slug]);
  HOWTO.forEach((g) => {
    g[code] = overlay(g.en, { group: n.howtoGroups?.[g.id] });
    for (const it of g.items) it[code] = overlay(it.en, { title: n.howto?.[it.slug] });
  });
  for (const [k, g] of Object.entries(GLOSSARY)) g[code] = overlay(g.en, n.glossary?.[k]);
}
/** How-to 拉平成一列；grp 是所在的组（组名用 t(h.grp, "group", lang) 取） */
export const HOWTO_FLAT = HOWTO.flatMap((g) => g.items.map((i) => ({ ...i, group: g.group, groupEn: g.en.group, grp: g })));
/** 翻译模板（src/l10n/en/nav.json）：新手三课、完整教程每一步、How-to 的组名和标题、术语的名字和一句话解释 */
export const navTemplate = () => ({
  lessons: Object.fromEntries(LESSONS.map((s) => [s.slug, s.en])),
  steps: Object.fromEntries(STEPS.map((s) => [s.slug, s.en])),
  howtoGroups: Object.fromEntries(HOWTO.map((g) => [g.id, g.en.group])),
  howto: Object.fromEntries(HOWTO_FLAT.map((h) => [h.slug, h.en.title])),
  glossary: Object.fromEntries(Object.entries(GLOSSARY).map(([k, g]) => [k, g.en])),
});
/** 术语在某种语言里的名字和一句话解释（中文的名字就是键） */
export const termOf = (k, lang) => {
  const g = GLOSSARY[k];
  return lang === "zh" ? { label: k, tip: g.tip } : { label: t(g, "label", lang), tip: t(g, "tip", lang) };
};
