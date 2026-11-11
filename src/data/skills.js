// 技能速查：pstack 的 34 个技能（另有 24 条原则，见 Wiki「24 条原则」）。技能速查页和搜索都读这里。
// name: 斜杠命令名 · zh: 一句话说人话 · use: 什么时候用 · ex: 例句 · needs: 要一起装的技能
// 除了 setup-pstack，所有技能都设了 disable-model-invocation：AI 不会自己决定启用，要么你点名，要么 /poteto-mode 按步骤去读。
// auto: true 表示 /poteto-mode 的步骤会用到它；manual: true 表示 README 写明「只在你亲手打时运行」。
// 依据：pstack 仓库 README 的技能表和「Install these together」表（2026-11 核对）。

export const SKILLS = [
  { id: "entry", title: "入口：先认识这三个", items: [
    { name: "poteto-mode", zh: "总入口。你说要什么、怎么算做完，它自己安排步骤。", use: "任何要认真做的事。一行就能改完的明显小事不用。", ex: "/poteto-mode 导出有时会写出重复的行。先让问题重现，再修，再证明修好了。", needs: ["所有 principle-* 原则", "大部分其他技能"], manual: true },
    { name: "poteto-help", zh: "问它「这事该用哪个技能」，它回答，并给一段能直接发的提示词。", use: "刚上手，或者拿不准该用哪个技能。", ex: "/poteto-help 我想审一下这个分支，该用哪个技能？", needs: ["你想问的那些技能"], manual: true },
    { name: "setup-pstack", zh: "帮你选模型：查你能用哪些模型、问预算，写成所有技能共用的配置。", use: "装完先跑它。想换模型、想省钱时再跑一次。", ex: "/setup-pstack" },
  ]},
  { id: "listen", title: "先听懂你", items: [
    { name: "in-your-own-words", zh: "让 AI 用自己的话说一遍你要什么，理解错了马上能看出来。", use: "需求很乱，或是一长串讨论，怕 AI 理解偏。", ex: "/in-your-own-words", manual: true },
    { name: "sharpen", zh: "把提示词改准：补上行家会想到的步骤和检查办法。它不干活。", use: "一件重要的活，发出去之前想把要求说准。", ex: "/sharpen 给 v2 配置格式写一份迁移指南。", manual: true },
  ]},
  { id: "understand", title: "看懂代码", items: [
    { name: "how", zh: "讲清楚一段代码现在怎么跑：流程、关键类型、容易踩的坑。", use: "改之前想先弄懂它，或者怀疑它哪里慢。", ex: "/how 我们是怎么给通知去重的？查订阅者的时候有没有 N+1 查询？", auto: true },
    { name: "why", zh: "查清「当初为什么这么做」：翻 Git 历史和文档，每条结论都带出处。", use: "看到奇怪的代码或配置，想知道来历、理由还成不成立。", ex: "/why 重试上限为什么是 5？这个理由现在还成立吗？", needs: ["how"], auto: true },
    { name: "teach", zh: "把 /how 和 /why 合成一篇讲解，一张图一张图带你真正看懂。", use: "光看摘要不够，想真正弄懂一个改动或模块。", ex: "/teach 讲讲这个 PR 怎么改了重试。说服我它修的是真正的原因，不只是表面。", needs: ["how", "why"] },
    { name: "recall", needs: ["why", "unslop"], zh: "翻你最近的聊天和共享记录，帮你想起做到哪了、下一步做什么。", use: "隔几天回到老话题，或开新对话前想先找回进度。", ex: "/recall 帮我回忆上周导出功能那块做到哪了" },
  ]},
  { id: "design", title: "设计和把关", items: [
    { name: "architect", zh: "写跨模块的代码前，先定好怎么调用、类型怎么定，再比几个方案。", use: "改动跨出一个函数，牵涉好几个模块。", ex: "/architect 先设计导入流程，别急着写代码。我最在意别的代码怎么调用它。", needs: ["arena", "how"], auto: true },
    { name: "arena", zh: "让几个 AI 各做一份，换一家模型打分，挑最好的，再吸收别家的好点子。", use: "命名、格式、算法这类以后很难改的决定，想多看几个方案。", ex: "/arena 这个缓存键格式以后很难改，来 5 个方案。", auto: true },
    { name: "swarm", zh: "把活切成互不相干的几块，各派一个 AI 去做，最后汇总成一份报告。", use: "要挨个检查很多东西：每个包、每个功能都过一遍。", ex: "/swarm 把 packages/ 下每个包都跑一遍它的 check.sh，一个包派一个，最后给我一份报告。", auto: true },
    { name: "interrogate", zh: "让几个不同的模型给改动挑错，只留下能跑出失败的问题。它只看不改。", use: "代码写完了心里没底，合并前想被挑一遍刺。", ex: "/interrogate 审一下整个分支，挑剔一点。不是真 bug 或功能倒退，就别报。", auto: true },
    { name: "blast-radius", zh: "一个小改动还会弄坏哪里？它找出来，并跑代码证明为什么安全。", use: "改动很小，但你不完全放心。", ex: "/blast-radius 这个改动还会影响哪里？", needs: ["arena", "how", "why", "unslop"] },
    { name: "figure-it-out", zh: "现成的 23 种做法都不合适时，它现场设计一套，每步都能回头查。", use: "很大的活、没有现成做法的活，或你要离开、回来再审的活。", ex: "/figure-it-out 把所有调用方从同步 store 迁到新的异步 store，行为完全不变。", auto: true },
  ]},
  { id: "build", title: "动手和清理", items: [
    { name: "tdd", zh: "先写一个会失败的测试，再修，再跑一遍确认它通过。", use: "修 bug，而且在本地跑测试很方便。", ex: "/tdd implement" },
    { name: "typescript-best-practices", zh: "把类型原则变成 TypeScript 的写法，比如每种情况都处理到。", use: "改的是 .ts / .tsx 文件。它不会自己加载，要你点名。", ex: "/typescript-best-practices" },
    { name: "unslop", zh: "去掉文字里的「AI 味」：套话、空话、排比、破折号。", use: "写 README、PR 说明、提交信息，或嫌 AI 的回复太啰嗦。", ex: "/unslop 改一下 README 的新内容，不要破折号", auto: true },
    { name: "no-comments", zh: "审核前清理注释：只留许可证、公开 API 文档和外部规则的说明。", use: "代码拿去审核之前。", ex: "/no-comments the diff", auto: true },
    { name: "technical-writing", zh: "按一套标准写文档，一句一句改到累了的工程师读一遍就懂。", use: "写文档、RFC、README、PR 说明或提交信息。", ex: "/technical-writing 审一下 README 的改动", needs: ["unslop"], auto: true },
  ]},
  { id: "verify", title: "验证", items: [
    { name: "create-verification-skill", zh: "给项目做一个「验证技能」，教 AI 像用户一样把功能真用一遍。", use: "还没有办法自动证明功能真能用。新手最该做的一件事。", ex: "/create-verification-skill", needs: ["maintain-verification-skill"] },
    { name: "maintain-verification-skill", zh: "应用改了，它逐个功能核对验证技能，过时就修。不碰产品代码。", use: "最好每天跑一次，可以设成定时任务。", ex: "/maintain-verification-skill" },
    { name: "create-formal-verification-skill", zh: "测试碰不到的情况（比如并发、重试），检查某条规则永远成立。", use: "有些地方出错代价很高，测试又很难触发。", ex: "/create-formal-verification-skill 任务租约和重试逻辑。同一个任务绝不能同时跑两次。", needs: ["maintain-formal-verification-skill", "statechart"] },
    { name: "maintain-formal-verification-skill", zh: "验证过的代码改了，它更新并重跑检查，告诉你是检查过时还是真有 bug。", use: "合并或重构碰到了验证过的代码。", ex: "/maintain-formal-verification-skill" },
    { name: "statechart", zh: "把用户会经历的状态画成图，标出违反规则的状态和怎么走到那里。", use: "产品、设计这些不看代码的人，想「看见」程序怎么表现。", ex: "/statechart 离线编辑笔记时用户会看到什么" },
    { name: "benchmark-checklist", zh: "用 7 个问题核对性能数字，结论只给快、慢、没差别、说不准。", use: "你测了性能，或者别人的数字好得可疑。", ex: "/benchmark-checklist 这个 40% 的提速写进 PR 之前先核一下", auto: true },
  ]},
  { id: "report", title: "汇报、复盘、越用越顺", items: [
    { name: "bro", zh: "把上一条回复用大白话重说一遍：更短，没有行话。", use: "AI 回得很专业，你看完还是不知道它说了啥。", ex: "/bro" },
    { name: "ketchup", zh: "「catch up」的谐音：告诉你变了什么、哪些事等你拍板。只看不改。", use: "离开一会儿回来，想快速知道进展。", ex: "/ketchup", needs: ["bro"] },
    { name: "ketchup-video", zh: "和 /ketchup 一样，但做成一段带字幕的幻灯片小视频。", use: "想「看」进展，不想读。", ex: "/ketchup-video", needs: ["ketchup", "bro"] },
    { name: "show-me-your-work", zh: "让 AI 每做一个决定就记一行：做了什么、为什么、证据和结果。", use: "长任务，或者你要离开、让它自己跑的任务。", ex: "/show-me-your-work 把你昨晚做的事给我讲一遍", auto: true },
    { name: "reflect", zh: "做完一件事，让三个审阅者读对话、提改进建议，你批准了才改。", use: "某次任务太慢、走了弯路，想下次别再犯。", ex: "/reflect 这次太慢了，把学到的记下来，下次别再重复。" },
    { name: "correct", zh: "找出 AI 反复犯的错，优先用结构和类型堵住，最后才写文档。", use: "同一个错，你要纠正第二次的时候。", ex: "/correct AI 老是绕过 repository 层直接调数据库客户端" },
    { name: "automate-me", zh: "读你的聊天记录，按你的习惯做一个「<你的名字>-mode」技能。", use: "/poteto-mode 用熟了，想要一套更像你自己的。", ex: "/automate-me" },
  ]},
  { id: "other", title: "其他", items: [
    { name: "make-bot-ui", zh: "做一个小网页，点按钮就唤醒 Grok Bot，密钥只留在你电脑上。", use: "你在用 Grok Bot，想要按钮式的操作界面。一般用不到。", ex: "/make-bot-ui" },
  ]},
];

export const SKILL_COUNT = SKILLS.reduce((n, g) => n + g.items.length, 0);
