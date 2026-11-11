// 正文里的图示（components/Fig.astro 画）。每张图一个 id，MDX 里写 <Fig id="…" />。
//   type：画法（compare 两条路对比、term 终端、folder 文件夹、anatomy 一句话拆成几块、stack 分层、
//         flow 几步流程、night 一夜、ladder 由强到弱、fan 几个模型挑刺、tree 一个带几个）
//   base：和语言无关的部分（图标、命令、哪一步要你开口……）
//   zh / en：文字。新手三课的图另有 8 种语言，写在 src/i18n/<语言>.js 的 figs 里，结构和这里的 en 一样（check-i18n 会查）。
// 写图里的字：短，一格一件事；不重复正文的整句，也不重复「卖点」（见 docs/MAINTAINING.md）。
export const FIG_UI = {
  zh: { label: "图示", replay: "再看一遍" },
  en: { label: "Diagram", replay: "Replay" },
};

// 新手三课的图（10 种语言都要有）
export const LESSON_FIGS = ["l1-habits", "l2-install", "l3-folder", "l3-prompt"];

export const FIGS = {
  // 第 1 课：平常的 AI 和装了 pstack 的 AI，同一件事走的步骤
  "l1-habits": {
    type: "compare",
    base: { a: { icons: ["MessageCircle", "Pencil"] }, b: { icons: ["MessageSquareText", "Search", "Pencil", "MousePointerClick"] } },
    zh: {
      a: { who: "平常的 AI", steps: ["听个大概", "直接改"], end: "「做好了！」你一打开，按钮没反应" },
      b: { who: "装了 pstack 的 AI", steps: ["先复述你要什么", "弄清问题在哪", "再动手改", "改完自己试一遍"], end: "把试的结果拿给你看" },
      cap: "多出来的这几步，就是 pstack 装进去的习惯。慢一点，但省得你一遍遍返工。",
    },
    en: {
      a: { who: "AI as usual", steps: ["Gets the gist", "Changes things"], end: "“Done!” You open it, and the button does nothing" },
      b: { who: "AI with pstack", steps: ["Repeats what you want", "Finds where the problem is", "Then makes the change", "Tries it out itself"], end: "Shows you what it saw" },
      cap: "The extra steps are the habits pstack adds. A little slower, but you stop redoing the same thing.",
    },
  },

  // 第 2 课：三步装好，在 Claude Code 里大概是什么样子（命令和输出是真的英文界面，不翻译）
  "l2-install": {
    type: "term",
    base: {
      scenes: [
        { cmd: "/plugin marketplace add cursor/plugins", out: [{ t: "✓ Successfully added marketplace: cursor-plugins", tone: "ok" }] },
        { cmd: "/plugin install pstack@cursor-plugins", out: [{ t: "❯ Install for you", tone: "sel" }, { t: "  ···", tone: "dim" }, { t: "✓ Plugin is now active.", tone: "ok" }] },
        { cmd: "/pstack:", enter: false, out: [{ t: "/pstack:poteto-mode", tone: "sel" }, { t: "/pstack:how", tone: "dim" }, { t: "/pstack:bro", tone: "dim" }, { t: "···", tone: "dim" }] },
      ],
    },
    zh: {
      notes: ["第一步：加上插件商店", "第二步：装 pstack，选 Install for you", "第三步：打 /pstack: 先别回车，列表里有 poteto-mode 就装好了"],
      cap: "示意：三步在 Claude Code 里大概是这个样子，真实画面会多几行字。",
    },
    en: {
      notes: ["Step 1: add the plugin store", "Step 2: install pstack, pick Install for you", "Step 3: type /pstack: without pressing Enter; poteto-mode in the list means it's installed"],
      cap: "Illustration: roughly what the three steps look like in Claude Code. The real screen shows a few more lines.",
    },
  },

  // 第 3 课：AI 只在你打开 Claude Code 的那个文件夹里干活
  "l3-folder": {
    type: "folder",
    base: {},
    zh: { place: "桌面", items: ["工作资料", "照片", "water"], ai: "AI 在这里干活", note: "别的文件夹它碰不到", cap: "在哪个文件夹里打开 Claude Code，AI 就在哪里干活。所以先新建一个空的。" },
    en: { place: "Desktop", items: ["Work files", "Photos", "water"], ai: "The AI works here", note: "Your other folders stay out of reach", cap: "The AI works in whichever folder you open Claude Code in. So start with a new, empty one." },
  },

  // 第 3 课：发出去的那段话拆成开关加三部分
  "l3-prompt": {
    type: "anatomy",
    base: {},
    zh: {
      parts: [
        { text: "/pstack:poteto-mode", label: "开关" },
        { text: "帮我做一个记录每天喝水的小网页。", label: "我想要什么" },
        { text: "点「喝了一杯」杯数加一；关掉再打开还在；能看到最近 7 天。", label: "做好是什么样子" },
        { text: "你是怎么检查的、看到了什么，能截图就截一张。", label: "做完给我看什么" },
      ],
      cap: "开头是开关，后面三部分各管一件事。",
    },
    en: {
      parts: [
        { text: "/pstack:poteto-mode", label: "The switch" },
        { text: "Make me a small web page that tracks how much water I drink each day.", label: "What I want" },
        { text: "Click “I drank a glass” and today's count goes up by one; it's still there after I reopen it; it shows the last 7 days.", label: "What done looks like" },
        { text: "How you checked it and what you saw, with a screenshot if you can.", label: "What to show me" },
      ],
      cap: "The switch comes first; each of the three parts does one job.",
    },
  },

  // 完整教程第 0 步：pstack 在哪一层
  "g0-layers": {
    type: "stack",
    base: { icons: ["User", "Layers", "SquareTerminal", "Cpu"], hi: 1 },
    zh: {
      layers: [
        { t: "你", d: "说目标，比如「修好这个 bug，修完给我看证据」" },
        { t: "pstack", d: "装进去的做事规矩：23 套剧本、34 个技能、24 条原则" },
        { t: "你的 AI 编程工具", d: "Claude Code、Cursor、Codex……" },
        { t: "模型", d: "还是原来那个，pstack 不换模型" },
      ],
      cap: "pstack 装在工具里，夹在你和模型中间：模型不变，变的是做事的顺序和标准。",
    },
    en: {
      layers: [
        { t: "You", d: "Say the goal, e.g. “fix this bug and show me evidence”" },
        { t: "pstack", d: "The work rules you install: 23 playbooks, 34 skills, 24 principles" },
        { t: "Your AI coding tool", d: "Claude Code, Cursor, Codex…" },
        { t: "The model", d: "Same as before; pstack doesn't swap it" },
      ],
      cap: "pstack lives inside your tool, between you and the model. The model stays the same; the order and standard of the work change.",
    },
  },

  // 完整教程第 5 步：从定设计到清理
  "g5-arc": {
    type: "flow",
    base: { icons: ["Ruler", "Hammer", "ScanEye", "Eraser"], optional: [0] },
    zh: {
      steps: [
        { t: "定设计", d: "/architect、/arena、做原型" },
        { t: "动手", d: "说你看到了什么；好写测试就 /tdd" },
        { t: "挑刺", d: "/interrogate 只留真跑出来的问题" },
        { t: "清理", d: "/unslop、/no-comments" },
      ],
      cap: "虚线那一步可以跳过：改动不大时 /poteto-mode 自己会设计，拿不准才点名这些技能。",
    },
    en: {
      steps: [
        { t: "Settle the design", d: "/architect, /arena, prototypes" },
        { t: "Build", d: "Say what you see; /tdd if a test is easy" },
        { t: "Pick holes", d: "/interrogate keeps only problems it can run" },
        { t: "Clean up", d: "/unslop, /no-comments" },
      ],
      cap: "The dashed step is optional: for most changes /poteto-mode designs on its own; name these skills only when you're unsure.",
    },
  },

  // 完整教程第 6 步：从验证到合并，最后一步要你开口
  "g6-ship": {
    type: "flow",
    base: { icons: ["Target", "ShieldCheck", "GitPullRequest", "RefreshCw", "GitMerge"], gateAt: 4 },
    zh: {
      steps: [
        { t: "写明怎么算做完", d: "第一句就写" },
        { t: "它自己验证", d: "真命令、真界面，拿出证据" },
        { t: "开 PR", d: "小而有序的提交" },
        { t: "盯到变绿", d: "冲突、评审意见、CI" },
        { t: "合并", d: "你说 land the stack" },
      ],
      gate: "要你开口",
      cap: "它一路做到「可以合并」就停下，合不合并由你说了算。",
    },
    en: {
      steps: [
        { t: "Say what done means", d: "In the first sentence" },
        { t: "It verifies itself", d: "Real commands, real UI, evidence" },
        { t: "Open a PR", d: "Small, ordered commits" },
        { t: "Babysit to green", d: "Conflicts, review comments, CI" },
        { t: "Merge", d: "You say land the stack" },
      ],
      gate: "Needs you",
      cap: "It goes as far as “ready to merge” and stops there. Merging is your call.",
    },
  },

  // 完整教程第 7 步：一晚上
  "g7-night": {
    type: "night",
    base: { icons: ["MoonStar", "Repeat", "Sunrise"] },
    zh: {
      eve: { t: "睡前", items: ["写清完成标准", "从 main 新开一个 worktree", "记决策日志", "卡住就停下写原因"] },
      night: { t: "夜里，每一轮", loop: ["检查做完没有", "做一个最小的改动", "验证", "有用就提交，没用就丢掉"], log: "每轮在决策日志里记一行" },
      morn: { t: "早上", items: ["/show-me-your-work", "先读「需要注意」", "再看它指的那几行"] },
      cap: "早上不用重读一整夜的对话，看日志和「需要注意」就够了。",
    },
    en: {
      eve: { t: "Before bed", items: ["Write a done condition", "A new worktree off main", "Keep a decision log", "If stuck, stop and say why"] },
      night: { t: "Overnight, each round", loop: ["Check whether it's done", "Make one small change", "Verify it", "Commit if it helped, drop it if not"], log: "One line in the decision log per round" },
      morn: { t: "In the morning", items: ["/show-me-your-work", "Read “needs attention” first", "Then the lines it points to"] },
      cap: "You don't reread the whole night's conversation. The log and “needs attention” are enough.",
    },
  },

  // 完整教程第 8 步：/correct 堵住错误的办法，由牢到不牢
  "g8-guard": {
    type: "ladder",
    base: { icons: ["Ban", "OctagonAlert", "FlaskConical", "FileText"] },
    zh: {
      rungs: [
        { t: "让错根本没法发生", d: "换结构或数据结构" },
        { t: "一犯就报错", d: "类型、lint、CI 检查" },
        { t: "用测试抓住", d: "跑测试时现形" },
        { t: "写成给 AI 的规则", d: "AI 跳过规则不会报错，所以排最后" },
      ],
      high: "最牢", low: "最后一招",
      cap: "/correct 从最上面一级找起，上面的用得上，就不用下面的。",
    },
    en: {
      rungs: [
        { t: "Make the mistake impossible", d: "Change the structure or data shape" },
        { t: "Make it fail loudly", d: "Types, lint, CI checks" },
        { t: "Catch it with tests", d: "It shows up when tests run" },
        { t: "Write a rule for the AI", d: "Skipping a rule raises no error, so it comes last" },
      ],
      high: "Strongest", low: "Last resort",
      cap: "/correct starts from the top. If a higher rung works, it doesn't use a lower one.",
    },
  },

  // How-to 修 bug：同一个复现步骤用两次
  "h-bug": {
    type: "flow",
    base: { icons: ["Bug", "Crosshair", "Wrench", "RotateCcw"], marks: ["bad", null, null, "good"] },
    zh: {
      steps: [
        { t: "先复现", d: "让问题再出现一次" },
        { t: "找真正的原因", d: "第一个出错的地方" },
        { t: "修在那里", d: "不在后面补判断" },
        { t: "同一个步骤再跑", d: "问题不再出现" },
      ],
      cap: "头尾用的是同一个复现步骤，前后才对得上。问题跑不出来，它就不改代码。",
    },
    en: {
      steps: [
        { t: "Reproduce it", d: "Make the problem happen again" },
        { t: "Find the real cause", d: "The first place it goes wrong" },
        { t: "Fix it there", d: "Not a check added downstream" },
        { t: "Rerun the same steps", d: "The problem is gone" },
      ],
      cap: "The first and last steps are the same reproduction, so before and after line up. If it can't reproduce the problem, it doesn't change code.",
    },
  },

  // How-to 查慢：测、改、再测
  "h-perf": {
    type: "flow",
    base: { icons: ["Gauge", "Activity", "Wrench", "Gauge"], marks: ["bad", null, null, "good"] },
    zh: {
      steps: [
        { t: "测基线", d: "p50 约 900ms" },
        { t: "看时间花在哪", d: "trace 一下" },
        { t: "修测出来的原因", d: "不修猜的那个" },
        { t: "同样的数据再测", d: "p50 低于 200ms，返回的一样" },
      ],
      loop: "没变快就撤回，再来一轮",
      cap: "前后两个数字用同样的数据、交替各跑几次，比的是中位数。",
    },
    en: {
      steps: [
        { t: "Measure a baseline", d: "p50 about 900ms" },
        { t: "See where time goes", d: "Take a trace" },
        { t: "Fix the measured cause", d: "Not the guessed one" },
        { t: "Measure again, same data", d: "p50 under 200ms, same results" },
      ],
      loop: "Not faster? Revert and go again",
      cap: "Both numbers use the same data, alternating runs several times each, and compare medians.",
    },
  },

  // How-to 重构：基线和改完的输出对比
  "h-refactor": {
    type: "flow",
    base: { icons: ["Save", "Blocks", "RefreshCw", "Equal"], marks: [null, null, null, "good"] },
    zh: {
      steps: [
        { t: "存一份现在的输出", d: "基线：build 一次，复制 dist" },
        { t: "改结构", d: "先删再加" },
        { t: "再出一份", d: "同样的命令" },
        { t: "两份对比", d: "diff 为空，就是一点没变" },
      ],
      cap: "不用读懂每一行代码，看最后那条 diff 的输出就够了。",
    },
    en: {
      steps: [
        { t: "Save today's output", d: "Baseline: build once, copy dist" },
        { t: "Change the structure", d: "Subtract before you add" },
        { t: "Make the output again", d: "Same command" },
        { t: "Compare the two", d: "An empty diff means nothing changed" },
      ],
      cap: "You don't need to read every line of code. The output of that last diff is enough.",
    },
  },

  // How-to 评审分支：几个模型去弄坏它，只留跑出来的
  "h-review": {
    type: "fan",
    base: { n: 3 },
    zh: {
      from: "你的改动",
      by: ["模型一", "模型二", "模型三"],
      act: "各自去把它弄坏",
      keep: { t: "Findings", d: "真跑出了失败，带命令和输出" },
      drop: { t: "Dropped", d: "没能跑出来，附理由；也扫一眼" },
      cap: "/interrogate 只报告，不改你的代码。一个问题要真跑出来才算数。",
    },
    en: {
      from: "Your change",
      by: ["Model 1", "Model 2", "Model 3"],
      act: "each tries to break it",
      keep: { t: "Findings", d: "Actually failed when run, with command and output" },
      drop: { t: "Dropped", d: "Couldn't be shown in a run, with reasons; skim these too" },
      cap: "/interrogate only reports; it doesn't change your code. A problem counts only if a run shows it.",
    },
  },

  // How-to 控制花费：主对话用强的，写代码的帮手用便宜的
  "h-cost": {
    type: "tree",
    base: { tones: ["strong", "cheap"] },
    zh: {
      root: { t: "主对话", d: "读懂你、审改动", tag: "强模型" },
      kids: [{ t: "feature, refactoring", tag: "便宜模型" }, { t: "bug-fix", tag: "便宜模型" }, { t: "perf-issue", tag: "便宜模型" }],
      note: "帮手拿到的是说清楚的活，便宜模型也做得好",
      cap: "在 /setup-pstack 最后「确认角色」时，改下面这三行。",
    },
    en: {
      root: { t: "Main conversation", d: "Understands you, reviews changes", tag: "Strong model" },
      kids: [{ t: "feature, refactoring", tag: "Cheaper model" }, { t: "bug-fix", tag: "Cheaper model" }, { t: "perf-issue", tag: "Cheaper model" }],
      note: "The helpers get clearly defined work, which cheaper models handle well",
      cap: "Change these three rows at the end of /setup-pstack, when it asks you to confirm the roles.",
    },
  },

  // How-to 一句话拉回来：原则名 + 这次的事 + 要看的结果
  "h-steer": {
    type: "anatomy",
    base: { mono: [0] },
    zh: {
      parts: [
        { text: "apply prove it works.", label: "原则名，原样打" },
        { text: "跑真实的导入流程，", label: "这次要它做什么" },
        { text: "把写进去的记录给我看。", label: "要看的真实结果" },
      ],
      cap: "名字指明是哪一条规矩，后半句说这一次的事和你要看的东西。",
    },
    en: {
      parts: [
        { text: "apply prove it works.", label: "Principle name, typed as is" },
        { text: "Run the real import flow", label: "What to do this time" },
        { text: "and show me the records it wrote.", label: "The real result you want" },
      ],
      cap: "The name says which rule; the rest says what to do this time and what you want to see.",
    },
  },

  // How-to「给项目配一个验证技能」：生成的 verify-<应用名> 里有哪几节，照这个顺序跑
  "h-verify": {
    type: "flow",
    base: { icons: ["Power", "Activity", "MousePointerClick", "Camera", "Trash2"], marks: [null, null, null, "good", null] },
    zh: {
      steps: [
        { t: "启动", d: "从空数据起到真能用" },
        { t: "体检", d: "这个实例值不值得测" },
        { t: "像用户一样操作", d: "点真按钮，打真命令" },
        { t: "留证据", d: "截图、录屏、存下的数据" },
        { t: "收拾", d: "只关自己开的，证据留下" },
      ],
      cap: "生成的 verify-<应用名> 就是这几节。交给你之前，它照着自己写的从头跑一遍，再确认收拾完证据还在。",
    },
    en: {
      steps: [
        { t: "Launch", d: "From empty data to actually usable" },
        { t: "Doctor", d: "Is this instance worth driving?" },
        { t: "Drive it like a user", d: "Real buttons, real commands" },
        { t: "Capture evidence", d: "Screenshots, video, stored data" },
        { t: "Clean up", d: "Stop only what it started; keep the evidence" },
      ],
      cap: "The generated verify-<app> has these sections. Before handing it over, it runs them end to end once, then checks the evidence survived the cleanup.",
    },
  },

  // How-to「测试碰不到的 bug」：测试走你想到的顺序，模型检查把所有顺序都走一遍
  "h-formal": {
    type: "compare",
    base: { a: { icons: ["FlaskConical", "FlaskConical", "FlaskConical"] }, b: { icons: ["Workflow", "Shuffle", "Crosshair"] } },
    zh: {
      a: { who: "测试", steps: ["A 领任务，做完", "B 领下一个，做完", "重试一次，也正常"], end: "全部通过。上线后 A 卡了一下，同一个任务跑了两遍" },
      b: { who: "形式化验证", steps: ["把领任务、续租约、超时、重试写成一个小模型", "把所有先后顺序都走一遍", "撞上一条坏顺序"], end: "交给你一个几步的反例，用的是你代码里的名字" },
      cap: "测试只查有人想到的几种顺序。形式化验证在说好的范围里一种不漏，所以能找到那条没人想到的。",
    },
    en: {
      a: { who: "Tests", steps: ["A takes a job and finishes", "B takes the next one and finishes", "One retry, also fine"], end: "All green. In production A stalls once, and the same job runs twice" },
      b: { who: "Formal verification", steps: ["Model taking a job, renewing the lease, timing out, retrying", "Walk every possible order", "Hit a bad order"], end: "Hands you a short counterexample in your code's own names" },
      cap: "Tests check the orders someone thought of. Formal verification checks every order within the stated scope, so it finds the one nobody did.",
    },
  },

  // 同一篇：一条反例读起来是什么样（任务租约的例子）
  "h-formal-cex": {
    type: "flow",
    base: { icons: ["KeyRound", "Clock", "Users", "Play", "OctagonAlert"], marks: [null, null, "bad", "bad", "bad"] },
    zh: {
      steps: [
        { t: "A 领到任务 42", d: "租约 30 秒" },
        { t: "A 卡住 31 秒", d: "比如长时间垃圾回收" },
        { t: "租约过期", d: "B 领到同一个任务 42" },
        { t: "A 醒来接着写", d: "没再看租约还在不在" },
        { t: "任务 42 跑了两次", d: "规则被打破" },
      ],
      cap: "反例就是这样一串步骤。每一步都对得上你代码里的一个函数，能照着在真实代码里走一遍。",
    },
    en: {
      steps: [
        { t: "A takes job 42", d: "30-second lease" },
        { t: "A stalls for 31 s", d: "A long GC pause, say" },
        { t: "The lease expires", d: "B takes the same job 42" },
        { t: "A wakes up and writes", d: "Without checking it still holds the lease" },
        { t: "Job 42 ran twice", d: "The rule is broken" },
      ],
      cap: "A counterexample is a list of steps like this. Each step maps to a function in your code, so you can walk it through the real code.",
    },
  },
};
