// 技能速查：pstack 的 34 个技能（另有 24 条原则，见 Wiki「24 条原则」）。技能速查页和搜索都读这里。
// name: 斜杠命令名 · zh: 一句话说人话 · use: 什么时候用 · ex: 例句 · needs: 要一起装的技能
// 除了 setup-pstack，所有技能都设了 disable-model-invocation：AI 不会自己决定启用，要么你点名，要么 /poteto-mode 按步骤去读。
// auto: true 表示 /poteto-mode 的步骤会用到它；manual: true 表示 README 写明「只在你亲手打时运行」。
// 依据：pstack 仓库 README 的技能表和「Install these together」表（2026-11 核对）。

export const SKILLS = [
  { id: "entry", title: "入口：先认识这三个", items: [
    { name: "poteto-mode", zh: "总入口。你说目标和怎么算做完，它挑剧本、列待办、按步骤调用其他技能，最后拿证据给你。", use: "任何需要认真对待的任务。小到一行的显而易见的改动就不用了。", ex: "/poteto-mode 导出偶尔会写出重复的行，先复现，再修，再验证。", needs: ["所有 principle-* 原则", "大部分其他技能"], manual: true },
    { name: "poteto-help", zh: "pstack 的问路处。问它「这事该用哪个技能」，它回答、给你一段可以直接发的提示词，并附上出处。", use: "刚上手，或者拿不准该用哪个技能、哪个剧本。", ex: "/poteto-help 我想审一下这个分支，该用哪个技能？", needs: ["你想问的那些技能"], manual: true },
    { name: "setup-pstack", zh: "选模型。检测你能用哪些模型，问你预算，然后写一份配置，所有技能都按它来派活。", use: "装完第一件事；想换模型、想省钱时再跑一次。", ex: "/setup-pstack" },
  ]},
  { id: "listen", title: "先听懂你", items: [
    { name: "in-your-own-words", zh: "让 AI 用自己的话复述：你想要什么、你在解决什么问题。理解错了在这一步就能发现。", use: "需求说得乱、或者是一长串讨论，怕 AI 理解偏。", ex: "/in-your-own-words", manual: true },
    { name: "sharpen", zh: "把你的提示词改得「更深而不是更长」：补上行家会做而你没想到的事、该从什么原始材料入手、怎么检查结果对不对。只改提示词，不干活。", use: "一件重要的活，发出去之前想先把要求磨准。", ex: "/sharpen 给 v2 配置格式写一份迁移指南。", manual: true },
  ]},
  { id: "understand", title: "看懂代码", items: [
    { name: "how", zh: "讲清楚一块代码现在是怎么工作的：运行流程、关键类型、不显眼的坑。像资深同事带你熟悉模块。", use: "改之前想先弄懂；怀疑有性能问题（比如 N+1 查询）。", ex: "/how 我们是怎么给通知去重的？查订阅者的时候有没有 N+1？", auto: true },
    { name: "why", zh: "挖出「为什么当初这么做」：翻 Git 历史，再查你接入的 issue、文档、聊天记录等，每条结论都带出处，分清证据和推测。", use: "看到一段奇怪的代码或配置，想知道它的来历、理由还成不成立。", ex: "/why 重试上限为什么是 5？这个理由现在还成立吗？", needs: ["how"], auto: true },
    { name: "teach", zh: "把 /how 和 /why 合成一篇真正能让你看懂的讲解，一张图一张图往上搭。", use: "光看摘要不够，想真的理解一个改动或一个模块。", ex: "/teach 讲讲这个 PR 怎么改了重试，说服我它修的是根因不是表象。", needs: ["how", "why"] },
    { name: "recall", needs: ["why", "unslop"], zh: "翻你自己最近的聊天记录和共享记录，帮你回忆「这件事做到哪了、下一步是什么」。", use: "隔了几天回到一个老话题，或者开新对话前想先把上下文找回来。", ex: "/recall 帮我回忆上周导出功能那块做到哪了" },
  ]},
  { id: "design", title: "设计和把关", items: [
    { name: "architect", zh: "写跨函数、跨模块的代码之前，先把「调用方怎么用、类型怎么定、模块怎么分」定下来。会先读代码，再让几个方案比一比。", use: "改动要跨过函数边界、要动所有权或分层。", ex: "/architect 先设计导入流程，别急着写代码。我最在意调用方怎么用。", needs: ["arena", "how"], auto: true },
    { name: "arena", zh: "同一个题目让几个 AI 各做一份（各在自己的目录里），换一个模型家族来打分，挑最好的当底子，再把其他方案的好点子嫁接进来。", use: "命名、格式、算法这类「改起来很贵」的决定，想多看几个方案。", ex: "/arena 这个缓存键格式以后很难改，来 5 个方案。", auto: true },
    { name: "swarm", zh: "把活切成互不相干的几块，一块派一个 AI，最后汇总成一份报告（每块是通过 / 有问题 / 卡住）。", use: "要覆盖很多份东西：每个包都检查一遍、每个功能都验一遍。", ex: "/swarm 把 packages/ 下每个包都跑一遍它的 check.sh，一个包一个人，最后给我一份报告。", auto: true },
    { name: "interrogate", zh: "把改动交给几个不同模型去「攻击」，只留下能用命令跑出失败的问题，被丢掉的也列出来告诉你为什么。什么都不改。", use: "代码写完了、心里没底，想在合并前被挑一遍刺。", ex: "/interrogate 审一下整个分支，挑剔一点。除非是真 bug 或行为倒退，别报小毛病。", auto: true },
    { name: "blast-radius", zh: "一个看起来很小的改动，还可能弄坏哪里？找出「它之所以安全」的那一条事实，并用跑代码来证明。", use: "改动很小但你不完全放心。", ex: "/blast-radius 这个改动还会影响哪里？", needs: ["arena", "how", "why", "unslop"] },
    { name: "figure-it-out", zh: "23 个剧本都对不上时，现场为这件事设计一套严谨、可审计的做法。", use: "很大的、或者没有现成剧本的活；你要离开、回来再审的活。", ex: "/figure-it-out 把所有调用方从同步 store 迁到新的异步 store，行为完全不变。", auto: true },
  ]},
  { id: "build", title: "动手和清理", items: [
    { name: "tdd", zh: "先写一个会失败的测试，再修，再跑一遍让它通过。测试很难写时会直说，改用最接近的真实命令来证明。", use: "修 bug，并且本地有便宜的测试路径。", ex: "/tdd implement" },
    { name: "typescript-best-practices", zh: "把类型方面的原则落到 TypeScript 语法上：可辨识联合、边界处用 unknown、穷尽所有分支、从 schema 推导类型。", use: "任务涉及 .ts / .tsx 文件。它不会自己加载，要你点名。", ex: "/typescript-best-practices" },
    { name: "unslop", zh: "去掉文字里的「AI 味」：套话、空话、排比、破折号之类。", use: "README、PR 说明、提交信息，或者 AI 给你的回复本身。", ex: "/unslop 改一下 README 的新内容，不要破折号", auto: true },
    { name: "no-comments", zh: "提交审核前清理注释：派一个只读的「注释审查员」（Comment Sicko），只保留许可证、公开 API 文档、外部约束这几类，其他都删；声称「别动」的注释，会提议改成类型、测试或 lint 来保证。", use: "代码要拿去审核之前。", ex: "/no-comments the diff", auto: true },
    { name: "technical-writing", zh: "按一套分层标准写文档：先判断是教程、操作指南、参考还是讲解，再一句一句改到「累了的工程师读一遍就懂」。", use: "写文档、RFC、README、PR 说明、提交信息。", ex: "/technical-writing 审一下 README 的改动", needs: ["unslop"], auto: true },
  ]},
  { id: "verify", title: "验证", items: [
    { name: "create-verification-skill", zh: "给你的项目生成一个「验证技能」：教 AI 怎么启动应用、怎么像用户一样操作、拿什么当证据、怎么收尾。交付前自己先完整跑通一次。", use: "项目还没有脚本化的方式证明「功能真的能用」。新手最该做的一件事。", ex: "/create-verification-skill", needs: ["maintain-verification-skill"] },
    { name: "maintain-verification-skill", zh: "应用改了，验证技能里的功能地图可能过时。它逐个功能读源码 + 实际跑一遍，结果只有三种：干净、改了（一个 PR）、卡住。从不改产品代码。", use: "最好每天跑一次，可以设成定时任务。", ex: "/maintain-verification-skill" },
    { name: "create-formal-verification-skill", zh: "测试碰不到的情况（并发、重试、状态机、解析器）用形式化工具检查某一条规则在所有情况下都成立，并生成一个以后每次改动都能复查的技能。", use: "代码里有「出错代价很高、测试又很难触发」的地方。", ex: "/create-formal-verification-skill 任务租约和重试逻辑。同一个任务绝不能同时跑两次。", needs: ["maintain-formal-verification-skill", "statechart"] },
    { name: "maintain-formal-verification-skill", zh: "被形式化验证覆盖的代码改了以后，更新模型、重新跑，并告诉你每个失败是「验证过时了」还是「代码真有 bug」。", use: "合并或重构碰到了被验证过的代码。", ex: "/maintain-formal-verification-skill" },
    { name: "statechart", zh: "把「用户会看到什么」画成状态图，背后是一个检查过的 TLA+ 模型；违反规则的状态会标出来，并给出走到那里的最短路径。", use: "产品、设计这些不看代码的人需要「看见」行为。", ex: "/statechart 离线编辑笔记时用户会看到什么" },
    { name: "benchmark-checklist", zh: "量出来一个「快了 40%」先别高兴：用 7 个问题逐个核对（瓶颈在哪、两边是否同样调优、有没有报错、能不能复现……），结论只给快、慢、没差别、说不准。", use: "你测了性能，或者别人的数字好得可疑。", ex: "/benchmark-checklist 这个 40% 的提速写进 PR 之前先核一下", auto: true },
  ]},
  { id: "report", title: "汇报、复盘、越用越顺", items: [
    { name: "bro", zh: "把上一条回复用大白话重说一遍：更短，没有行话。", use: "AI 回得很专业，你看完还是不知道它说了啥。", ex: "/bro" },
    { name: "ketchup", zh: "「catch up」的谐音。告诉你自你上条消息以来变了什么，并把每个等你拍板的事列清楚：它的建议、证据、风险。只读，不改东西。", use: "离开一会儿回来，想快速知道进展。", ex: "/ketchup", needs: ["bro"] },
    { name: "ketchup-video", zh: "和 /ketchup 一样，但做成一段带字幕的幻灯片小视频，待你决定的事写在视频下面。", use: "想「看」进展而不是读。", ex: "/ketchup-video", needs: ["ketchup", "bro"] },
    { name: "show-me-your-work", zh: "让 AI 每做一个决定就往决策日志里记一行（时间、阶段、决定、理由、证据、结果），回来时再让另一个模型帮你审一遍。", use: "长任务、你要离开的任务。", ex: "/show-me-your-work 把你昨晚做的事给我讲一遍", auto: true },
    { name: "reflect", zh: "一个任务刚做完、学到了东西：三个审阅者读这次对话，提出改技能的建议，分成采纳 / 拒绝 / 待定，等你批准才动。", use: "某次任务做得太久、走了弯路，想让下次别再犯。", ex: "/reflect 这次太慢了，把学到的记下来，下次别再重复。" },
    { name: "correct", zh: "你老在纠正 AI 同一类错误？它从提交、回滚、审核意见里找出反复出现的错误，按「架构 > 类型 / lint / CI > 测试 > 文档」的顺序从根上堵住。", use: "同样的错第二次出现。", ex: "/correct AI 老是绕过 repository 层直接调数据库客户端" },
    { name: "automate-me", zh: "读你最近的聊天记录，总结你自己的工作习惯，生成一个属于你的「<你的名字>-mode」技能。", use: "用熟了 /poteto-mode，想要一套更像你自己的。", ex: "/automate-me" },
  ]},
  { id: "other", title: "其他", items: [
    { name: "make-bot-ui", zh: "做一个小网页，按钮通过 webhook 唤醒 Grok Bot；密钥留在你电脑上的服务器里，不进浏览器。", use: "你在用 Grok Bot，想要一个按钮式的操作界面。一般用不到。", ex: "/make-bot-ui" },
  ]},
];

export const SKILL_COUNT = SKILLS.reduce((n, g) => n + g.items.length, 0);
