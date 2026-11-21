// 界面文字：外壳、首页、各页面框架和组件里的固定文字，按语言一份。
// zh、en 写在这里（英文是另外 8 种语言的模板，`node scripts/l10n.mjs export` 把它写成 src/l10n/en/ui.json）；
// 另外 8 种语言在 src/l10n/<语言>/ui.json，结构和 en 一样，缺的键显示英文。
// {名字} 是占位，由 fmt() 换成值，翻译时原样保留。链接、网址、命令不放这里。
// 改了中文，同一次提交里把英文也改了，再跑一次 export。
import { isFull } from "./nav.js";
import { load, overlay, L10N_LANGS } from "../l10n/load.js";

const zh = {
  site: {
    brand: "pstack 新手教程", desc: "不会写代码也能学会 pstack：三课、20 分钟，说人话。", skip: "跳到正文", menu: "打开目录", search: "搜索教程",
    searchPh: "搜步骤、How-to、技能、名词、问题……", searchEmpty: "没找到，换个词试试", look: "外观和命令写法", lang: "语言",
    repo: "本教程的 GitHub 仓库", repoMore: "其他仓库：pstack 镜像、官方原版", repoDefault: "默认",
    repos: [["本教程", "教程的源码，有问题在这里提"], ["pstack 镜像", "本站依据的版本，任何工具都能装"], ["pstack 官方原版", "poteto 维护，给 Cursor 用"]],
    navLabel: "网站目录", start: "开始", home: "首页", lessons: "新手入门：先看这三课", main: "完整教程：会写代码的人看", pending: "编写中", ref: "查资料",
    howto: "How-to：具体怎么做", skills: "技能速查：34 个技能", wiki: "Wiki：这是什么", faq: "常见问题", toc: "本页", tocLabel: "本页目录",
    hintMain: "完整教程", hintLesson: "新手入门", hintFaq: "常见问题", hintSkill: "技能", section: "小节",
    foot: "本站是 {pstack} 的非官方入门教程，不是官方文档；pstack 由 poteto 开发（MIT），命令和行为以官方仓库为准。教程源码和问题反馈在 {github}。",
    appearance: { cornersDesc: "关掉就是直角" },
  },
  tool: { group: "命令", label: "我用的工具", desc: "网站上的命令按这个工具的写法显示，复制就能用", bare: "npx 装的", now: "现在这样写：" },
  home: {
    h1: "AI 说「做好了」之前，先让它自己试一遍",
    lead: ["pstack 是一份装进 AI 里的做事规矩，免费开源。装上以后，AI 会先弄清你要什么，只改该改的地方。", "不会写代码也能用", "。"],
    cta: "新手从这里开始", ctaFull: "我会写代码，看完整教程",
    ctaNote: "新手入门一共三课，20 分钟。",
    painH: "你是不是遇到过这些",
    PAIN: [
      "AI 说「做好了」，你一打开，按钮点了没反应。",
      "你说「还是不行」，它说「抱歉，已修复」，结果还是一样，来回好几次。",
      "你只想改一个地方，它顺手改了一堆你没让它动的东西。",
    ],
    diffH: "装上以后，有什么不一样",
    diffW: "什么时候", diffA: "平常的 AI", diffB: "装了 pstack",
    DIFF: [
      ["动手之前", "没弄清你要什么，直接就做", "先用自己的话复述一遍，你能马上纠正"],
      ["改的时候", "在看起来差不多的地方乱改", "先把问题弄清楚再动手，改得越少越好"],
      ["说做完的时候", "一句「应该没问题了」", "列出实际检查过什么、看到了什么；查不了的直说"],
    ],
    lessonsH: "新手只要三课", lessonsP: "按顺序看，一共 20 分钟。学完这三课就会用了，网站上其他内容都是以后遇到了再查。",
    lessonsLabel: "新手入门：共 3 课",
    fitH: "适不适合你", yesH: "适合", noH: "先不用",
    YES: ["用 AI 做过小网页、小插件、小工具，被「已完成但其实没好」坑过", "已经装了 Claude Code（或 Cursor、Codex），能在里面和 AI 聊天", "想要做对，不在乎慢一点"],
    NO: ["还没用过 Claude Code 这类工具：先照官方指南装好，能聊天了再来", "改个错别字、换个颜色这种小事：直接跟 AI 说就行", "只要最快、最省额度：pstack 会多检查，更慢，也更费额度"],
    devH: "会写代码的人看这里",
    devP: "pstack 是 poteto（React 核心团队出身，在 Cursor 写下 pstack，现在做 Grok Bot）每天自己写代码用的一包技能：34 个技能、22 套剧本、24 条工程原则。下面是它每接一件事走的四步，和 9 步的完整教程。",
    FLOW: [
      ["你说一句话", "目标，加上怎么算做完。比如「先复现，再修，再验证」。"],
      ["/poteto-mode 挑剧本", "从 22 套剧本里选一套，把它的步骤原样抄进待办清单。"],
      ["按步骤调用技能", "读代码用 /how，定设计用 /architect，挑刺用 /interrogate；活多就派子代理。"],
      ["检查完再交回来", "真实的命令输出、截图、前后对比。验证不了的，直说「没法确定」。"],
    ],
    CONN: ["匹配", "执行", "验证"],
    stepsLabel: "完整教程：共 {n} 步",
  },
  lesson: { eyebrow: "新手入门 · 第 {n} 课，共 {total} 课", prog: "进度：第 {n} 课，共 {total} 课", nav: "上一课和下一课", prev: "上一课", next: "下一课", title: "第 {n} 课：{title}", tldr: "一句话" },
  guide: { head: "第 {n} 步：{title}", eyebrow: "完整教程 · 第 {n} 步，共 {last} 步", prog: "进度：第 {n} 步，共 {last} 步", need: "要准备：", nav: "上一步和下一步", prev: "上一步", next: "下一步", pending: "下一步（编写中）", tldr: "一句话" },
  howto: { tldr: "一句话", for: "适用：", step: "完整教程第 {n} 步：", related: "同类文章", more: "「{group}」的其他文章" },
  howtoIndex: { h: "How-to：具体怎么做", p: "一篇只讲一件事。找到和你手上的活一样的那篇，复制里面的话，改成你的情况就能用。" },
  faq: { h: "常见问题", p: ["第一次接触 pstack 时最常冒出来的问题。没找到你的？到 ", " 提一个，或者按 ", " 搜索全站。"] },
  notFound: { h: "找不到这个页面", p: ["链接可能写错了，或者页面换了地址。可以按 ", " 搜索，或者从这里重新开始："], home: "首页", step0: "新手入门：第 1 课", skills: "技能速查", faq: "常见问题" },
  wikiIndex: { h: "Wiki：这是什么", p1: "教程里出现的每个词，用大白话讲清楚。每篇第一句就是答案，想多了解再往下看。", p2: ["不想看完整文章的话：教程正文里带虚线的词，鼠标停在上面就能看到一句话解释，点一下进到这里。想按名字查某个技能，去", "技能速查", "。"] },
  wikiEntry: { like: "打个比方", here: "在 pstack 里", list: "清单", head: ["名字", "说人话"], myths: "常见误区", try: "动手操作：", step: "完整教程第 {n} 步：", see: "相关条目：", sep: "、" },
  skills: {
    h: "技能速查", desc: "pstack 的 {n} 个技能，每个一句人话：干什么、什么时候用。",
    intro: ["{n} 个技能，外加 ", "24 条原则", "。", "新手不用全记住", "：平时只打 ", "，标着「自动调用」的它会自己叫上。想点名用某一个，或者 AI 提到一个名字想查查，就来这里。点开一张卡，能看到它和直接跟 AI 说有什么不同、文档每一节写了什么，还有全文。"],
    all: "全部", auto: "自动调用", manual: "要你亲手打", named: "按需点名", use: "什么时候用",
    search: "按名字或想做的事筛选，比如：审、性能、为什么", filterLabel: "谁来调用", empty: "没有对得上的技能。少打几个字，或者选「全部」。",
    legend: { auto: "/poteto-mode 需要时自己用，不用你点名", manual: "只有你亲手打出来才会运行", named: "想用的时候自己打" },
    shown: "显示 {n} 个",
  },
  skillDoc: {
    ex: "这样说", needs: "要一起装", guide: "详细教程", sep: "、", oneLine: "一句话",
    tabs: ["概览", "写法亮点", "全文"], tabsLabel: "这一页的几部分",
    vsH: "用它和不用它", vsP: "同一件事，直接跟 AI 说，和点名用 /{name}，AI 的做法不一样：", without: "直接说", with: "用 /{name}",
    outH: "文档写了什么",
    outP: "原文分 {secs} 节，约 {words} 个英文单词，中文译文约 {zh} 字，读完约 {min} 分钟。点一节直接跳到全文。",
    outPNoSec: "约 {words} 个英文单词，中文译文约 {zh} 字，读完约 {min} 分钟。",
    intro: "开头", toLearn: "看写法亮点", toFull: "读全文",
    learnH: "写法亮点", learnP: "挑了几句原文：每句让 AI 做什么、为什么这样写管用、你写提示词时怎么借来用。",
    does: "让 AI", why: "为什么管用", try: "借来用",
    fullH: "全文", fullP: "AI 读到的就是这份 SKILL.md。可以看中文、看原文，或者一段一段对照着看。",
    modes: { tr: "中文", en: "原文", both: "对照" }, jump: "跳到", jumpTop: "开头",
    credit: ["原文作者 Lauren Tan（poteto），MIT 许可。译文由本站翻译，核对到 pstack 镜像", "。"], open: "在 GitHub 上看",
    moreH: "「{group}」里的其他技能", prev: "上一个", next: "下一个",
  },
  callout: { ok: "你应该看到", warn: "注意", no: "别这样做", tip: "小提示" },
  checkpoint: { title: "做到这里，检查一下", done: "都勾上了，可以去下一步。" },
  copy: { title: "复制下面这段", copy: "复制" },
  cmd: { done: "已复制命令", label: "复制命令：{c}" },
  reply: { title: "示意：它的回复大概长这样" },
  tabs: { label: "选择" },
  shot: { stamp: "截图于 {date}，界面以实际为准。" },
  feedback: { lead: "这一页有没看懂、或者照做不成的地方？", gh: "到 GitHub 提出来", faq: ["，也可以先翻翻", "常见问题", "。"] },
  contact: {
    h: "提问和讨论",
    p: "卡在哪一步、哪里没写清楚，或者想分享你用 pstack 做出来的东西，都欢迎到 GitHub 上提出来。问得多的，我会补进教程。",
    faq: ["问之前可以先看看", "常见问题", "，很多答案已经在那里了。"],
    btn: "到 GitHub 提问或讨论",
    x: "作者在 X 上",
    privacy: "发截图前，先把 API Key、公司代码和账号信息打码。",
  },
};

const en = {
  site: {
    brand: "pstack for beginners", desc: "Learn pstack even if you don't code: three lessons, 20 minutes, plain words.", skip: "Skip to content", menu: "Open menu", search: "Search the guide",
    searchPh: "Search steps, how-tos, skills, terms, questions…", searchEmpty: "Nothing found. Try another word", look: "Appearance and commands", lang: "Language",
    repo: "This guide on GitHub", repoMore: "Other repos: the pstack mirror, the official original", repoDefault: "Default",
    repos: [["This guide", "Source for this guide; file issues here"], ["pstack mirror", "The version this site follows"], ["Official pstack", "Maintained by poteto, for Cursor"]],
    navLabel: "Site navigation", start: "Start", home: "Home", lessons: "Beginner track: start here", main: "Full guide: for people who code", pending: "In progress", ref: "Reference",
    howto: "How-to: how exactly", skills: "Skills at a glance: all 34", wiki: "Wiki: what is it", faq: "FAQ", toc: "On this page", tocLabel: "On this page",
    hintMain: "Full guide", hintLesson: "Beginner track", hintFaq: "FAQ", hintSkill: "Skill", section: "Section",
    // {pstack} 和 {github} 会换成链接
    foot: "An unofficial beginner's guide to {pstack}, not its official docs. pstack is made by poteto (MIT); the official repo is the source of truth for commands and behavior. Source and feedback for this guide are on {github}.",
    // 顶栏「外观」面板（UI Kit 的外观设置组）；中文、英文用 UI Kit 自带的文字，只换 cornersDesc
    appearance: {
      group: "Appearance", theme: "Theme", light: "Light", dark: "Dark", system: "System",
      corners: "Rounded corners", cornersDesc: "Off keeps every corner square",
      accent: "Accent", accentDesc: "Used for buttons, selection and focus",
    },
  },
  // 「我用的工具」：外观面板里的一组和正文里的选择器（ToolPick.astro）
  tool: { group: "Commands", label: "I use", desc: "Commands on this site are shown for this tool, so copying just works", bare: "Installed with npx", now: "Shown as: " },
  home: {
    h1: "Before the AI says “done,” make it try the thing itself",
    // lead：前半句、荧光笔那一句、后半句
    lead: ["pstack is a free, open-source set of work rules you install into your AI. With it, the AI first makes sure it knows what you want, then changes only what needs changing. ", "You don't need to know how to code", "."],
    cta: "Start here if you're new", ctaFull: "I code: the full guide",
    ctaNote: "The beginner track is three lessons, 20 minutes.",
    painH: "Has this happened to you?",
    PAIN: [
      "The AI says “done!” You open it, and the button does nothing.",
      "You say “still broken.” It says “sorry, fixed now.” Same result, again and again.",
      "You wanted one small change, and it changed a pile of things you never asked about.",
    ],
    diffH: "What changes once it's installed",
    diffW: "When", diffA: "AI as usual", diffB: "With pstack",
    DIFF: [
      ["Before it starts", "Starts without checking what you want", "Repeats your goal in its own words first, so you can correct it right away"],
      ["While it changes things", "Changes things somewhere that looks about right", "Figures out the problem first, then changes as little as it can"],
      ["When it says it's done", "“Should be fine now”", "Lists what it actually checked and what it saw, and says plainly what it couldn't check"],
    ],
    lessonsH: "Beginners need just three lessons", lessonsP: "Read them in order, 20 minutes in all. After these three you can use it. Everything else on the site is for looking up later.",
    lessonsLabel: "Beginner track: 3 lessons",
    fitH: "Is it for you?", yesH: "Yes, if", noH: "Not yet, if",
    YES: ["You've made small pages, plug-ins or tools with AI and been burned by “done” that wasn't", "You already have Claude Code (or Cursor or Codex) and can chat with the AI in it", "You'd rather get it right than get it fast"],
    NO: ["You haven't used a tool like Claude Code yet: install it with the official guide first, and come back once you can chat", "It's a tiny change like a typo or a color: just ask the AI directly", "You only want fastest and cheapest: pstack checks more, so it's slower and uses more of your plan"],
    devH: "If you write code",
    devP: "pstack is the pack of skills poteto (formerly on the React core team; wrote pstack at Cursor, now builds Grok Bot) uses for their own code every day: 34 skills, 22 playbooks and 24 engineering principles. Below are the four steps it takes for every task, and the 9-step full guide.",
    // FLOW：每个是 [标题, 说明]，图标和顺序固定（Home.astro）
    FLOW: [
      ["You say one sentence", "The goal, plus how you'll know it's done. For example: “reproduce it first, then fix, then verify.”"],
      ["/poteto-mode picks a playbook", "It chooses one of 22 playbooks and copies its steps into the todo list as they are."],
      ["Skills run step by step", "/how to read code, /architect to settle a design, /interrogate to pick holes; subagents when there's a lot to do."],
      ["It checks before handing back", "Real command output, screenshots, before-and-after. If something can't be verified, it says so."],
    ],
    CONN: ["match", "do", "verify"],
    stepsLabel: "Full guide: {n} steps",
  },
  // 新手入门一课的页面框架
  lesson: { eyebrow: "Beginner track · lesson {n} of {total}", prog: "Progress: lesson {n} of {total}", nav: "Previous and next lesson", prev: "Previous", next: "Next", title: "Lesson {n}: {title}", tldr: "In one line" },
  // 完整教程一步的页面框架
  guide: { head: "Step {n}: {title}", eyebrow: "Full guide · step {n} of {last}", prog: "Progress: step {n} of {last}", need: "You need: ", nav: "Previous and next step", prev: "Previous", next: "Next", pending: "Next (in progress)", tldr: "In one line" },
  // How-to 一篇的页面框架
  howto: { tldr: "In one line", for: "For: ", step: "Full guide step {n}: ", related: "Related articles", more: "More in “{group}”" },
  howtoIndex: { h: "How-to: how exactly", p: "One job per article: find the one that matches what you're doing, copy the prompt, change it to fit." },
  // p：链接「GitHub」前、⌘K 前、⌘K 后
  faq: { h: "FAQ", p: ["The questions that come up most when people first meet pstack. Didn't find yours? Open one on ", ", or press ", " to search the whole site."] },
  notFound: { h: "Page not found", p: ["The link may be wrong, or the page has moved. Press ", " to search, or start again from here:"], home: "Home", step0: "Beginner track: lesson 1", skills: "Skills at a glance", faq: "FAQ" },
  wikiIndex: { h: "Wiki: what is it", p1: "Every term in the guide, explained in plain words. Each one starts with a single sentence; read on only if you want more.", p2: ["Don't want the full article? Hover over any word with a dotted underline in the guide for a one-line explanation; click it to come here. To look up a skill by name, see ", "Skills at a glance", "."] },
  wikiEntry: { like: "An analogy", here: "In pstack", list: "List", head: ["Name", "In plain words"], myths: "Common misconceptions", try: "Try it: ", step: "Full guide step {n}: ", see: "Related: ", sep: ", " },
  skills: {
    h: "Skills at a glance", desc: "All {n} pstack skills, each in one plain sentence: what it does and when to use it.",
    // intro：数字和链接前、链接「24 principles」、链接后、加粗的一句、`/poteto-mode` 前、`/poteto-mode` 后
    intro: ["{n} skills, plus ", "24 principles", ". ", "You don't need to memorize them.", " Day to day, type ", " and it calls the “Auto” ones itself. Come here to call one by name, or to look up a name the AI mentioned. Click a card to see how it differs from just asking, what its document says, and the full text."],
    all: "All", auto: "Auto", manual: "Type it yourself", named: "Call when needed", use: "When to use",
    search: "Filter by name or task, e.g. review, slow, why", filterLabel: "Who calls it", empty: "No skill matches. Try fewer words, or pick “All”.",
    legend: { auto: "/poteto-mode uses it when a step needs it", manual: "Runs only when you type it yourself", named: "Type it when you want it" },
    shown: "{n} shown",
  },
  // 技能详情页
  skillDoc: {
    ex: "Say it like this", needs: "Install with", guide: "Full how-to", sep: ", ", oneLine: "In one line",
    tabs: ["Overview", "Wording worth borrowing", "Full text"], tabsLabel: "Parts of this page",
    vsH: "Just asking vs. using it", vsP: "The same request, typed plainly or with /{name}. Here's what changes.", without: "Just asking", with: "With /{name}",
    outH: "What the document says",
    outP: "{secs} sections, about {words} words, {min} min to read. Click a section to read it.",
    outPNoSec: "About {words} words, {min} min to read.",
    intro: "Opening", toLearn: "See the wording worth borrowing", toFull: "Read the full text",
    learnH: "Wording worth borrowing", learnP: "A few sentences from the original: what each one makes the AI do, why it works, and how you can borrow it.",
    does: "Makes the AI", why: "Why it works", try: "Borrow it",
    fullH: "Full text", fullP: "The SKILL.md the AI reads, as written.",
    // 全文的三种看法：译文、原文、对照（英文页只有原文，不显示这一组）
    modes: { tr: "Translation", en: "Original", both: "Side by side" }, jump: "Jump to", jumpTop: "Top",
    credit: ["Original by Lauren Tan (poteto), MIT license. Checked against the pstack mirror at", "."], open: "View on GitHub",
    moreH: "More in “{group}”", prev: "Previous", next: "Next",
    // 有译文的语言用这几句替换上面的 fullP、credit（英文页不用）
    tr: {
      fullP: "The SKILL.md the AI reads. Read the translation, the original, or both side by side.",
      credit: ["Original by Lauren Tan (poteto), MIT license. Translated by this site; checked against the pstack mirror at", "."],
    },
  },
  // 正文里用到的组件
  callout: { ok: "You should see", warn: "Heads up", no: "Don't do this", tip: "Tip" },
  checkpoint: { title: "Before moving on, check", done: "All ticked — on to the next step." },
  copy: { title: "Copy this", copy: "Copy" },
  cmd: { done: "Command copied", label: "Copy command: {c}" },
  reply: { title: "Illustration: roughly what its reply looks like" },
  tabs: { label: "Choose" },
  shot: { stamp: "Screenshot {date}; the interface may have changed since." },
  // 每页末尾一行：{lead} {gh 链接}{faq[0]}{faq[1] 链接}{faq[2]}
  feedback: { lead: "Something on this page unclear, or didn't work as written?", gh: "Bring it up on GitHub", faq: [". Or check the ", "FAQ", " first."] },
  // 首页、常见问题末尾的「提问和讨论」卡片
  contact: {
    h: "Questions and discussion",
    p: "Stuck on a step, found something unclear, or built something with pstack you'd like to show? Bring it to GitHub. The questions that come up most get worked into the guide. Writing in your own language is fine.",
    faq: ["Before asking, check the ", "FAQ", ": many answers are already there."],
    btn: "Ask or discuss on GitHub",
    x: "The author is on X",
    privacy: "Before sending screenshots, blur out API keys, company code and account details.",
  },
  // 这种语言还不是全站时（只有首页和新手入门，其他页面链到英文版）替换上面对应的几句
  partial: {
    more: "More (in English)",
    main: "Full guide: 9 steps",
    hintMain: "Full guide (English)",
    hintFaq: "FAQ (English)",
    hintSkill: "Skill (English)",
    ctaFull: "I code: the full guide (English)",
    devNote: "The full guide is in English (and Chinese) for now.",
    feedbackFaq: [". Or check the ", "FAQ (in English)", " first."],
    contactFaq: ["Before asking, check the ", "FAQ (in English)", ": many answers are already there."],
  },
};

export const UI = { zh, en };

const cache = {};
/** 某种语言的界面文字：zh、en 直接用；另外 8 种按 en 的结构叠上 src/l10n/<语言>/ui.json，还不是全站的换上 partial 那几句 */
export function ui(lang) {
  if (UI[lang]) return UI[lang];
  if (!L10N_LANGS.includes(lang)) return UI.en;
  if (cache[lang]) return cache[lang];
  const u = overlay(UI.en, load(lang, "ui"));
  if (!isFull(lang)) {
    const p = u.partial;
    u.site = { ...u.site, main: p.main, hintMain: p.hintMain, hintFaq: p.hintFaq, hintSkill: p.hintSkill, more: p.more };
    u.home = { ...u.home, ctaFull: p.ctaFull };
    u.feedback = { ...u.feedback, faq: p.feedbackFaq };
    u.contact = { ...u.contact, faq: p.contactFaq };
  }
  return (cache[lang] = u);
}
