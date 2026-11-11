// 英文底稿：非全站语言的全部文字都照这个结构写（src/i18n/<语言>.js），缺的键显示这里的英文。
// {名字} 是占位，由 fmt() 换成值，翻译时原样保留。
// 这些语言只有首页和新手入门三课；完整教程、技能、How-to、Wiki、常见问题链到英文版，所以导航里写明「英文」。
export default {
  // 浏览器里打开 Claude Code 官方上手指南用哪种语言（code.claude.com/docs/<这里>/quickstart）
  claudeDocs: "en",

  ui: {
    brand: "pstack for beginners",
    desc: "Learn pstack even if you don't code: three lessons, 20 minutes, plain words.",
    skip: "Skip to content",
    menu: "Open menu",
    search: "Search the guide",
    searchPh: "Search lessons, steps, skills, terms…",
    searchEmpty: "Nothing found. Try another word",
    look: "Appearance: theme, corners, accent",
    lang: "Language",
    repo: "This guide on GitHub",
    repoMore: "Other repos: the pstack mirror, the official original",
    repoDefault: "Default",
    // 三个仓库：[名字, 一句说明]，顺序固定（本教程、pstack 镜像、官方原版）
    repos: [
      ["This guide", "Source for this guide; file issues here"],
      ["pstack mirror", "The version this site follows"],
      ["Official pstack", "Maintained by poteto, for Cursor"],
    ],
    navLabel: "Site navigation",
    start: "Start",
    home: "Home",
    lessons: "Beginner track: start here",
    more: "More (in English)",
    main: "Full guide: 9 steps",
    skills: "Skills at a glance: all 34",
    howto: "How-to: how exactly",
    wiki: "Wiki: what is it",
    faq: "FAQ",
    toc: "On this page",
    tocLabel: "On this page",
    hintMain: "Full guide (English)",
    hintLesson: "Beginner track",
    hintFaq: "FAQ (English)",
    hintSkill: "Skill (English)",
    hintOther: "English",
    section: "Section",
    // {pstack} 和 {github} 会换成链接
    foot: "An unofficial beginner's guide to {pstack}, not its official docs. pstack is made by poteto (MIT); the official repo is the source of truth for commands and behavior. Source and feedback for this guide are on {github}.",
    // 顶栏「外观」面板（UI Kit 的外观设置组）
    appearance: {
      group: "Appearance", theme: "Theme", light: "Light", dark: "Dark", system: "System",
      corners: "Rounded corners", cornersDesc: "Off keeps every corner square",
      accent: "Accent", accentDesc: "Used for buttons, selection and focus",
    },
  },

  home: {
    h1: "Before the AI says “done,” make it try the thing itself",
    // lead：前半句、荧光笔那一句、后半句
    lead: ["pstack is a free, open-source set of work rules you install into your AI. With it, the AI first makes sure it knows what you want, then changes only what needs changing. ", "You don't need to know how to code", "."],
    cta: ["Start here if you're new", "I code: the full guide (English)"],
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
    lessonsH: "Beginners need just three lessons",
    lessonsP: "Read them in order, 20 minutes in all. After these three you can use it. Everything else on the site is for looking up later.",
    lessonsLabel: "Beginner track: 3 lessons",
    fitH: "Is it for you?", yesH: "Yes, if", noH: "Not yet, if",
    YES: [
      "You've made small pages, plug-ins or tools with AI and been burned by “done” that wasn't",
      "You already have Claude Code (or Cursor or Codex) and can chat with the AI in it",
      "You'd rather get it right than get it fast",
    ],
    NO: [
      "You haven't used a tool like Claude Code yet: install it with the official guide first, and come back once you can chat",
      "It's a tiny change like a typo or a color: just ask the AI directly",
      "You only want fastest and cheapest: pstack checks more, so it's slower and uses more of your plan",
    ],
    devH: "If you write code",
    devP: "pstack is the pack of skills poteto (on the React core team, working at Cursor) uses for their own code every day: 34 skills, 23 playbooks and 24 engineering principles. Below are the four steps it takes for every task, and the 9-step full guide.",
    // 完整教程目前只有英文和中文
    devNote: "The full guide is in English (and Chinese) for now.",
    // FLOW：每个是 [标题, 说明]，图标和顺序固定
    FLOW: [
      ["You say one sentence", "The goal, plus how you'll know it's done. For example: “reproduce it first, then fix, then verify.”"],
      ["/poteto-mode picks a playbook", "It chooses one of 23 playbooks and copies its steps into the todo list as they are."],
      ["Skills run step by step", "/how to read code, /architect to settle a design, /interrogate to pick holes; helper AIs when there's a lot to do."],
      ["It checks before handing back", "Real command output, screenshots, before-and-after. If something can't be verified, it says so."],
    ],
    CONN: ["match", "do", "verify"],
    stepsLabel: "Full guide: {n} steps",
  },

  // 新手入门三课在导航、首页路线图里的标题、时间、简介（顺序：1 它能帮你什么、2 装上它、3 第一次用）
  lessons: [
    { title: "What it does for you", minutes: "3 minutes", sum: "What pstack is, what you need, what it costs" },
    { title: "Install it", minutes: "5 minutes", sum: "Type two lines in Claude Code and pick one option" },
    { title: "Use it for the first time", minutes: "10 minutes", sum: "Make a small web page with one three-part message" },
  ],

  // 一课的页面框架
  lesson: {
    eyebrow: "Beginner track · lesson {n} of {total}",
    prog: "Progress: lesson {n} of {total}",
    nav: "Previous and next lesson",
    prev: "Previous",
    next: "Next",
    title: "Lesson {n}: {title}",
    tldr: "In one line",
  },

  // 正文里用到的组件
  comp: {
    callout: { ok: "You should see", warn: "Heads up", no: "Don't do this", tip: "Tip" },
    copyTitle: "Copy this",
    copy: "Copy",
    cmdDone: "Command copied",
    cmdLabel: "Copy command: {c}",
    reply: "Illustration: roughly what its reply looks like",
    feedback: {
      lead: "Anything on this page unclear, or didn't work as written?",
      gh: "Tell me on GitHub", sep: ", ", x: "message me on X", or: ", or ", wx: "add me on WeChat",
      faq: ["Before asking, check the ", "FAQ", ": the questions people have asked are all there."],
      alt: "Xiaoxiaodong's WeChat QR code",
      mobile: "On a phone: long-press to save, then scan it from your photos in WeChat.",
    },
    contact: {
      h: "Feedback and suggestions",
      p: "Have a suggestion, or found a step that's unclear or doesn't work as written? Let me know and I'll add it to the guide. Writing in your own language is fine.",
      faq: ["Before asking, check the ", "FAQ", ": the questions people have asked are all there."],
      ask: "If you have questions, please gather them into one message rather than asking one by one. Thanks!",
      btn: "Give feedback on GitHub",
      x: "Message me on X",
      cap: "Or add me on WeChat",
      mobile: "On a phone: long-press to save, then scan it from your photos in WeChat.",
      alt: "Xiaoxiaodong's WeChat QR code",
      privacy: "Before sending screenshots, blur out API keys, company code and account details.",
    },
  },
};
