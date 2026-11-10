// Wiki 条目：每条同样的结构 —— 一句话（one）、比喻（like）、在 pstack 里（here，最多两段）、可选的清单表（list）、常见误区（myths）、相关（see）。
// 文字里可以用 **粗体**、==荧光笔==（每条最多一处）、`代码`、[外链](https://…) 和 [站内链接](/路径/)（lib/md.js 里简单转换）。
// 写法照 docs/MAINTAINING.md 的「说人话」：短句、一句一个意思、新词当场解释。
// step: 对应的主线步骤；howto: 对应的 How-to。

export const WIKI_GROUPS = ["基本概念", "pstack 怎么干活", "验证和证据", "原则"];

export const WIKI = [
  // ---------- 基本概念 ----------
  {
    slug: "pstack", title: "pstack 是什么", group: "基本概念",
    one: "pstack 是一套免费的工作规矩，装进 AI 编程工具，让 AI 像老手一样干活。",
    like: "像给一个聪明但毛躁的新同事发一本工作手册。人还是那个人，做事有了章法。",
    here: [
      "它由 34 个技能和 24 条原则组成，都是写给 AI 看的说明文件。规矩很朴素：修 bug 前先让问题再出现一次，改代码前先读懂。==说做完了，要拿出证据。==",
      "作者是 poteto，这是作者每天在 Cursor 里用的那一套。官方版是写给 Cursor 的。用 Claude Code、Codex 的人，一般装[镜像版](https://github.com/backnotprop/pstack)。它每天跟官方版同步，哪个工具都能用。",
    ],
    myths: [
      "「它是一个新模型，或者一个 App」：都不是。它是一些说明文件，装进你已经在用的 AI 编程工具里。",
      "「装了，AI 就变聪明了」：模型的能力不变。变的是做事的顺序和标准。",
      "「只能在 Cursor 里用」：镜像版在 Claude Code、Codex、OpenCode、Pi 里都能用。少数 Cursor 独有的功能会跳过。",
    ],
    see: ["agent-skill", "poteto-mode", "harness"],
    step: 0,
  },
  {
    slug: "agent-skill", title: "Agent Skill（技能）", group: "基本概念",
    one: "技能是一份写给 AI 的做法说明：遇到某类任务，就照这个来。",
    like: "像菜谱。厨师本来就会做菜，照着菜谱做，每次味道都稳定。",
    here: [
      "每个技能是一个文件夹，里面有一份 `SKILL.md`。有的还带参考资料和脚本。比如 `/statechart` 带了一套 TypeScript 工具。",
      "这是一个[公开的格式](https://agentskills.io)，所以同一个技能能装进不同的 AI 工具。",
    ],
    myths: [
      "「技能就是一段很长的提示词」：差不多。区别是用到时 AI 才去读，平时不占对话的地方。",
      "「技能越多越好」：第一天用不着那么多。==同一个毛病出现两次，再加技能或检查。==",
    ],
    see: ["skill-md", "slash", "pstack"],
    howto: "pick-skills",
  },
  {
    slug: "skill-md", title: "SKILL.md", group: "基本概念",
    one: "SKILL.md 是技能的正文：开头写名字和什么时候用，后面写步骤和规矩。",
    like: "像药品说明书。AI 先看最上面的「适应症」，决定用不用；要用，再往下读。",
    here: [
      "开头那几行叫 frontmatter。比如 `/poteto-mode` 写着 `disable-model-invocation: true`。意思是 AI 不会自己启用它，**必须你亲手打 `/poteto-mode`**。",
      "想改 pstack 的做法，就改这些文件。作者建议用「写技能」剧本来改，再用 Eval 剧本测一测改得好不好。不要在任务做到一半时随手改。",
    ],
    myths: [
      "「随手写一个 SKILL.md 就行」：给 AI 看的文字要求更高。==多写一句没用的话，以后每个 AI 都会照着做。==「写技能」剧本会帮你检查格式和链接。",
    ],
    see: ["agent-skill", "playbook"],
    step: 8,
  },
  {
    slug: "harness", title: "宿主工具（Claude Code、Cursor、Codex）", group: "基本概念",
    one: "宿主就是真正跑 AI 的那个工具，比如 Claude Code、Cursor。pstack 装在它里面。",
    like: "pstack 是工作手册，宿主是工位。同一本手册放到不同工位上，用法差不多。",
    here: [
      "pstack 原本是写给 Cursor 的。到了别的工具里，技能里的 Cursor 叫法要换成当地的叫法。pstack 自带一张对照表，AI 会自己去读。",
      "少数功能只有 Cursor 有，比如 Automations、Bugbot、云端代理。在别的工具里，用到它们的步骤会跳过，并留一句说明。",
    ],
    list: [
      ["Cursor", "原生支持，`/add-plugin pstack` 安装"],
      ["Claude Code", "命令加 `pstack:`，如 `/pstack:poteto-mode`"],
      ["Codex、OpenCode、Pi 等", "用 `npx skills add backnotprop/pstack` 安装"],
    ],
    listTitle: "常见宿主", listHead: ["宿主", "要注意的"],
    myths: [
      "「换个工具，就要换一套 pstack」：同一个镜像，各工具通用。==区别只在安装方式、命令前缀和几个文件路径。==",
    ],
    see: ["pstack", "model-roles", "subagent"],
    howto: "claude-code",
  },
  {
    slug: "slash", title: "斜杠命令", group: "基本概念",
    one: "在对话框里打 `/` 开头的词，就是点名让 AI 用某个技能，比如 `/how`。",
    like: "像在餐厅直接报菜名。比跟服务员描述口味更快，也更准。",
    here: [
      "平时只打 `/poteto-mode`，后面接你的任务，一起发出去。其他技能 AI 不会自己拿来用（`/setup-pstack` 除外）。要么你点名，要么 `/poteto-mode` 在需要时去读。",
      "前缀因工具而不同。Claude Code 插件版要加 `pstack:`，比如 `/pstack:how`。Codex 里用 `$`，比如 `$how`。",
    ],
    myths: [
      "「一句话里点名的技能越多越好」：这是 pstack 文档专门提醒的坑。「先 /how 再 /architect」这种写法，常常打乱它排好的顺序。==说清楚你要什么、哪里不能碰，就够了。==只有想换掉某个默认做法时，才点名技能。",
    ],
    see: ["poteto-mode", "agent-skill"],
    howto: "which-skill",
  },
  {
    slug: "token-budget", title: "token 和推理预算", group: "基本概念",
    one: "token 是 AI 按量计费的单位。推理预算决定它每一步想多久。",
    like: "像请装修师傅。看一眼就开工便宜；先量尺寸、出方案、找人复核贵，但返工少。",
    here: [
      "pstack 会派帮手 AI、请几个模型一起评审，这些都花 token。所以它默认更慢、更费钱，也更仔细。`/setup-pstack` 会让你选档位。`large` 就是默认（xhigh）。`unlimited` 让每个模型开到最高。`medium`、`small` 更省。",
      "想省钱，有三个办法。写代码的角色换便宜、快的模型。评审小组少几个人。小改动别用 `/poteto-mode`。",
    ],
    myths: [
      "「`auto` 是一个模型名」：它的意思是不指定模型，跟主对话用同一个。`inherit-parent` 也是这个意思。",
      "「预算越高越好」：==难题值得开高。日常小改开高，只是更慢、更贵。==",
    ],
    see: ["model-roles", "subagent"],
    howto: "cost",
  },
  {
    slug: "pr", title: "PR、提交和合并", group: "基本概念",
    one: "PR 是一份「请审一下这些改动」的申请，审过才合并进主分支。",
    like: "像交作业。草稿可以乱写，交上去的那份要誊清楚，老师批过才算数。",
    here: [
      "pstack 默认把每个任务收尾成一个 PR。「开 PR」剧本会把改动整理成几个小提交。它写好标题和说明，最后给你链接。作者的看法是：五个小 PR 胜过一个大 PR。",
      "PR 开了以后，「Babysit」剧本会一直盯着。它解决冲突、回复评审、修好自动检查（CI）。**它从不合并。**要合并，你得说「land the stack」，交给「Shipping」剧本。",
    ],
    myths: [
      "「CI 全绿就可以合了」：==绿了不等于安全。==Shipping 剧本会另派一个没写过这段代码的 AI，逐个实际验证。验过的才合。",
      "「不用 GitHub 就用不了 pstack」：只有开 PR 那几步需要。只在本地改代码、查问题，用不到它。",
    ],
    see: ["worktree", "verify-skill"],
    step: 6,
  },

  // ---------- pstack 怎么干活 ----------
  {
    slug: "poteto-mode", title: "/poteto-mode", group: "pstack 怎么干活",
    one: "`/poteto-mode` 是总入口：你说要什么，它自己安排步骤、干活，最后拿证据给你。",
    like: "像一个有经验的项目经理。先复述一遍需求，选好流程分派下去，验收过了才交给你。",
    here: [
      "第一条回复里，它会复述你要什么、要解决什么问题。它还会说出预计的最小改动。它**不会等你点头**就往下做。理解错了，就马上打断它。",
      "后面接着聊时，说「继续」「做吧」就够了，它会接着做。在 Cursor 里，还可以把它设成 Custom Mode，一直开着。",
    ],
    myths: [
      "「什么事都要用它」：作者说==留给需要严谨的活==。改一行字这种小事，直接说就行。",
      "「要写很长的需求」：不用。要什么、怎么算做完、你知道的线索，各写一句。",
      "「它会先问我一堆问题」：跑一下就能知道的，它会自己做个小样试试。只有要你拿主意的事，才来问你。",
    ],
    see: ["playbook", "todo", "principles", "custom-mode"],
    step: 3,
  },
  {
    slug: "playbook", title: "剧本（Playbook）", group: "pstack 怎么干活",
    one: "剧本是一类任务的固定步骤。你说任务，它自己挑一套照着做。",
    like: "像医院分诊。你只说症状，护士帮你分到对的科室，每个科室有自己的流程。",
    here: [
      "`/poteto-mode` 有 23 套剧本。你不用点名，说清楚任务，它会自己挑。都对不上时，它用 `/figure-it-out` 现场设计一套。",
      "有几句话会改变它的选择。「先别改代码」：只调查，不动手。「new task」：当成一件新的事，重新挑。「我要去睡了」：长时间自己干下去。",
    ],
    list: [
      ["调查 Investigation", "只看不改，弄清怎么工作的"],
      ["修 bug", "先重现，再找原因、修、验证"],
      ["性能 Perf issue", "从测出来的慢开始，前后对比"],
      ["爬坡 Hillclimb", "盯一个指标，一点点往上提"],
      ["运行时取证 / 轨迹取证", "从运行时的现象找原因，不修"],
      ["功能 Feature", "做新功能，先定好数据结构"],
      ["重构 Refactoring", "只改结构，行为不变"],
      ["原型 Prototype", "做几个草稿，看结果再定"],
      ["视觉一致 Visual parity", "两个实现做到像素一样"],
      ["写技能 / Eval", "写或改技能；测改得好不好"],
      ["Babysit", "盯着 PR，直到能合并"],
      ["Shipping", "逐个验证，再按顺序合并"],
      ["自主运行 / Orchestrate", "长任务跑到底；大项目统筹"],
      ["Autopilot-full / Autopilot-stack", "一队 PR 跑到合并，或验完等你合"],
      ["接手 / 安全暂停", "接上没做完的活；干净地停下"],
      ["多阶段计划", "跨阶段、跨 PR 的活，先出计划"],
      ["清理 worktree", "删掉没用的 worktree，腾磁盘"],
      ["开 PR", "收尾：整理提交，写好说明"],
    ],
    listTitle: "23 套剧本（合并着说）", listHead: ["剧本", "用来做什么"],
    myths: [
      "「我得先学会这 23 套」：不用。==你只管说任务，挑剧本是它的事。==这张表是帮你看懂待办清单的。",
      "「剧本里每一步都会做」：不一定。用不上的步骤也留在清单里，写明 `skip:` 和理由。",
    ],
    see: ["poteto-mode", "todo"],
    howto: "which-skill",
  },
  {
    slug: "todo", title: "待办清单和 skip", group: "pstack 怎么干活",
    one: "待办清单是它开工时列的步骤。不做的步骤也留着，写明 `skip:` 和理由。",
    like: "像飞行员起飞前的检查单。每一项都念出来，不适用的也要说为什么。",
    here: [
      "==看清单，是你盯住 AI 最省力的办法。==它选了哪种做法、要做哪几步、跳过了什么，一眼就知道。不该跳的被跳了，就说「第 3 步不要跳，先让问题再出现一次」。",
      "清单的前几项，是它选中的剧本的步骤，原样照抄。在 Claude Code 里，有 TodoWrite 工具就用它。没有的话，它把清单写在回复里，每个阶段更新一次。",
    ],
    myths: [
      "「清单越长越认真」：长短看任务类型。要紧的是，没有一步被悄悄跳过。",
    ],
    see: ["playbook", "poteto-mode"],
    step: 3,
  },
  {
    slug: "subagent", title: "子代理", group: "pstack 怎么干活",
    one: "子代理就是派出去干一小块活的帮手 AI。它读完一大堆东西，只把结论带回来。",
    like: "像主编派记者去现场。记者跑一整天，回来只交一篇稿子，主编桌上不会堆满材料。",
    here: [
      "pstack 很多技能会派帮手。`/how` 派几个去读代码，只看不改。`/arena` 让几个各写一个方案。`/swarm` 一人分一块活。`/interrogate` 请几个不同的模型来挑毛病。",
      "这样，==大量阅读交给帮手，主对话只留结论。==这条原则叫 `guard the context window`。每个帮手用什么模型，看 `/setup-pstack` 写的配置。",
    ],
    myths: [
      "「帮手越多越快」：帮手很费 token。pstack 只在值得时才派。比如要查得更全、要独立判断，或者给主对话省地方。",
      "「几个帮手在同一个目录里一起改代码，没问题」：会互相覆盖，也说不清谁改了什么。要改代码的，每个都得有自己的 worktree。",
    ],
    see: ["worktree", "model-roles", "token-budget"],
  },
  {
    slug: "worktree", title: "worktree（工作树）", group: "pstack 怎么干活",
    one: "worktree 是同一个仓库的另一份工作目录。几个 AI 同时改代码，各用一份，互不打架。",
    like: "像几个厨师合做一桌菜。共用一个冰箱，但每人一块砧板。",
    here: [
      "「开 PR」剧本本来就在 worktree 里干活，平时不用特意说。要指定从哪个分支开始时再说，比如「从 main 新开一个 worktree」。",
      "worktree 占磁盘，笔记本上同时开几个就差不多了。磁盘紧张时，说「看看什么在吃我的磁盘，把能删的 worktree 删掉」。有没提交的改动的，它会停下来问你。",
    ],
    myths: [
      "「worktree 是 pstack 的功能」：它是 Git 自带的（`git worktree`），pstack 只是默认用它。",
      "「项目不用 Git 也行」：大部分剧本假设你在 Git 仓库里。还没用 Git 的话，先 `git init` 并提交一次。",
    ],
    see: ["subagent", "pr"],
  },
  {
    slug: "custom-mode", title: "Custom Mode（常驻模式）", group: "pstack 怎么干活",
    one: "Custom Mode 是 Cursor 的功能：让 `/poteto-mode` 一直开着，不用每句都打。",
    like: "普通用法像每次进门都要刷卡。常驻模式像门一直开着，直到你自己关上。",
    here: [
      "在 Cursor 里，从 `/` 菜单选中 `/poteto-mode`，按 **Option+Enter**（Mac）或 **Alt+Enter**（Windows）。普通的 Enter 只管这一条消息，聊久了效果会变弱。",
      "Claude Code、Codex 没有这个功能。替代办法是：==一个对话只做一件事。==换任务就开新对话，或者说「/poteto-mode new task」。",
    ],
    myths: [
      "「每个工具都有 Custom Mode」：只有 Cursor 有（Agents 窗口和 CLI）。",
    ],
    see: ["poteto-mode", "harness"],
    howto: "cursor",
  },
  {
    slug: "model-roles", title: "模型角色和 pstack-models 配置", group: "pstack 怎么干活",
    one: "pstack 把活分成几种角色，每种可以配不同的模型，写在一个小配置文件里。",
    like: "像一个工程队，不必都请最贵的师傅。验收最好请别家的人，免得自己验自己。",
    here: [
      "默认分工：写代码交给 grok；最难的改动、写文字和做判断交给 opus 5.5。评审小组默认是这两家各出一个。==让不同家的模型互相评审，是 pstack 的核心做法。==",
      "`/setup-pstack` 会查你能用哪些模型，再写好配置。Cursor 的在 `~/.cursor/rules/pstack-models.mdc`。Claude Code 的在 `~/.claude/rules/pstack-models.md`。其他工具的在 `~/.agents/pstack-models.md`。改完要开新对话才生效。Claude Code 里只能用 Claude 的模型，怎么配见[在 Claude Code 里用](/howto/claude-code/#怎么配最好)。",
    ],
    myths: [
      "「配置里没写的角色，就不能用」：没写的用技能自带的默认值。你只改你在意的。",
      "「默认值更新了，我的配置会跟着变」：不会，旧配置照旧。想用新默认，删掉那几行或整个文件，再跑一次 `/setup-pstack`。",
    ],
    see: ["token-budget", "subagent", "harness"],
    step: 2,
  },
  {
    slug: "arena-swarm", title: "/arena 和 /swarm 的区别", group: "pstack 怎么干活",
    one: "`/arena`：同一道题几个人各做一份，挑最好的。`/swarm`：大活切成块，一人一块。",
    like: "`/arena` 像设计比稿：几家各交一版，选一版做底，再揉进别家的好点子。`/swarm` 像阅卷：一百份卷子，五个老师分着批。",
    here: [
      "`/arena` 用在以后很难改的决定上，比如命名、格式、算法。几份方案各做各的，请别家的模型当评委打分。最后挑一份做底，补上别家的长处，再验证。`/architect` 内部就会用它。",
      "`/swarm` 用在要全部过一遍的活上，比如「每个包都检查一遍」。每人管自己那块，回报「通过 / 有问题 / 卡住」。最后汇成一份简短的报告。",
    ],
    myths: [
      "「用 /arena 做全面检查」：pstack 文档专门提醒过这个坑。==全面检查用 `/swarm`。==`/arena` 会对每份结果挑底子、拼长处，白费力气。",
    ],
    see: ["subagent", "principles"],
    howto: "which-skill",
  },

  // ---------- 验证和证据 ----------
  {
    slug: "evidence", title: "证据（而不是「应该好了」）", group: "验证和证据",
    one: "在 pstack 里，「做完了」要拿真东西证明：真实的输出、存下的值、点过的界面。",
    like: "像验收房子。施工队说水电没问题不算，要当面开灯、放水、看电表。",
    here: [
      "这条原则的意思是「证明它能用」，名字叫 `prove it works`。证据要来自真实运行的东西，「编译通过了」不算。命令行改动，就跑真命令。界面改动，就在应用里点一遍。性能改动，就比前后的数字。",
      "第一句提示词里，就写明「怎么算做完」和「想看什么证据」。这是你能做的最有用的事。查不了的，好的回复会写「说不准」。==**很自信、却拿不出证据的回复，不能信。**==",
    ],
    myths: [
      "「测试都过了，就证明好了」：测试只查写测试的人想到的情况。pstack 要看真实应用里的表现。",
      "「它解释得很有道理，应该没问题」：解释再合理，也比不上一个你能自己检查的结果。结果能拿来核对，解释只能选择信不信。",
    ],
    see: ["verify-skill", "principles", "formal-verification"],
    step: 6,
  },
  {
    slug: "verify-skill", title: "验证技能", group: "验证和证据",
    one: "验证技能是给你的项目生成的说明：教 AI 启动应用、像用户一样操作、拿出证据。",
    like: "像给新来的测试同学写上手手册：怎么开机、点哪里、截什么图。写好以后，谁来都能测。",
    here: [
      "用 `/create-verification-skill` 生成。它主要读你的代码，自己弄清应用怎么启动、怎么操作。交给你之前，它会自己完整跑一遍。生成的文件放在项目里：Cursor 是 `.cursor/skills/verify-<应用名>/`，Claude Code 是 `.claude/skills/verify-<应用名>/`。以后就能说「用 /verify-<应用名> 验证，给我截图」。",
      "作者说，整个指南里回报最高的就是这一件。==**能检查自己的 AI，会一直干到检查通过。不能的，只能把结果都扔回给你查。**==`/setup-pstack` 最后问要不要生成时，选「要」。",
    ],
    myths: [
      "「生成一次就够了」：应用会变，说明会过时。定期（最好每天）跑 `/maintain-verification-skill` 复查。它只修验证技能，不碰产品代码。",
      "「我的项目太小，用不上」：越早有越好。有了它，验证就不用你亲自做，哪个 AI 都能做。",
    ],
    see: ["evidence", "formal-verification"],
    step: 6,
  },
  {
    slug: "formal-verification", title: "形式化验证", group: "验证和证据",
    one: "形式化验证是在限定范围内，把一条规则的所有情况都查一遍。",
    like: "普通测试像抽查几辆车的刹车。形式化验证像用数学证明：这种刹车在任何车速下都刹得住。",
    here: [
      "用 `/create-formal-verification-skill` 生成。它会挑一条出错代价高、测试又难碰到的规则。比如「同一个任务绝不会同时跑两次」。工具按问题挑，比如查事件顺序默认用 TLA+。它还会故意做一个坏掉的版本，确认检查抓得到。==一个从没见它失败过的检查，什么也证明不了。==",
      "现有代码已经违反规则的话，你会拿到一串让问题再出现的步骤。你不要求，它就不改产品代码。代码改了以后，用 `/maintain-formal-verification-skill` 更新并重跑。它会说清是验证过时了，还是代码真有 bug。想给产品、设计看，用 `/statechart` 画成状态图。",
    ],
    myths: [
      "「验证通过，整个系统就没问题」：通过只覆盖那个范围。交付说明会写清验证了什么、没覆盖什么。",
      "「每个项目都该上」：只在有并发、重试、状态机、解析器，而且出错很贵的地方才值得。",
    ],
    see: ["verify-skill", "evidence"],
    step: 6,
  },
  {
    slug: "decision-log", title: "决策日志", group: "验证和证据",
    one: "决策日志是 AI 边干边记的表，每个决定一行。你回来看它，不用重看整段对话。",
    like: "像实验记录本：做了什么、为什么、结果怎样。导师第二天翻翻本子就懂了。",
    here: [
      "由 `/show-me-your-work` 负责。每行写时间、阶段、决定、理由、证据在哪、结果。存成一个 TSV 文件，默认叫 `decisions.tsv`，只放在本地。",
      "你回来时说「/show-me-your-work 把你昨晚做的事给我讲一遍」。交回总结前，它会请另一家的模型审一遍。回复最后有一段「需要注意」，==**先读这一段，再看它指向的那几行。**==只想快速知道进展，用 `/ketchup`。它只看不改，用大白话说变了什么、哪些事等你拿主意。",
    ],
    myths: [
      "「有日志就不用审了」：日志让你审得更快。你审的是决定，不用重读一整夜的对话。",
    ],
    see: ["evidence", "poteto-mode"],
    step: 7,
  },

  // ---------- 原则 ----------
  {
    slug: "principles", title: "24 条原则", group: "原则",
    one: "pstack 把工程经验写成 24 条短原则。AI 跑偏时，你说出名字就能把它拉回来。",
    like: "像球队的战术暗号。教练喊一声，全队就知道该干什么。",
    here: [
      "你不用调用原则，`/poteto-mode` 每次开工都会读。原则名是给你纠偏用的。比如它只因为编译通过，就说成功了。你可以回：「apply prove it works. 跑一遍真实的导入流程，给我看写进去的记录。」它的回复要说出这条原则改了哪个决定，说不出就是没真用。",
      "作者建议别背。现在扫一眼就行。==等 AI 犯了某条原则能防住的错，再回来查。==这样记得最牢。",
    ],
    list: [
      ["laziness protocol", "核心 · 能删就删，改动越小越好"],
      ["foundational thinking", "核心 · 先选对数据结构，再写逻辑"],
      ["redesign from first principles", "核心 · 当它第一天就在，重新设计"],
      ["attack the premise", "核心 · 修两次都不行，先查前提"],
      ["subtract before you add", "核心 · 先删没用的，再加新的"],
      ["minimize reader load", "核心 · 让读代码的人少跳少记"],
      ["outcome-oriented execution", "核心 · 直奔目标，不写过渡代码"],
      ["experience first", "核心 · 用户体验优先，少而精"],
      ["exhaust the design space", "核心 · 没先例时，做几个原型比一比"],
      ["build the lever", "核心 · 做个工具，别手工重复"],
      ["model the domain", "架构 · 业务规则集中放，别散成 if"],
      ["boundary discipline", "架构 · 在入口处检查外来数据"],
      ["type system discipline", "架构 · 让错误状态根本写不出来"],
      ["make operations idempotent", "架构 · 跑一半、跑几次，结果都一样"],
      ["migrate callers then delete legacy apis", "架构 · 改完调用处，马上删旧接口"],
      ["separate before serializing shared state", "架构 · 先拆开共享，不行再加锁"],
      ["prove it works", "验证 · 拿真东西证明，编译过不算"],
      ["fix root causes", "验证 · 找到最早出错的地方再修"],
      ["sequence verifiable units", "验证 · 切小块，验过一块再做下一块"],
      ["test behavior not implementation", "验证 · 测用户看得到的表现"],
      ["explain the number", "验证 · 先弄清是什么限制了这个数"],
      ["guard the context window", "分工 · 大量阅读交给帮手 AI"],
      ["never block on the human", "分工 · 能撤回的先做，不可逆的先问"],
      ["encode lessons in structure", "元原则 · 同一句提醒说两次，就写成检查"],
    ],
    listTitle: "全部 24 条（英文名原样打出来，AI 才认得）", listHead: ["名字", "说人话"],
    myths: [
      "「原则要一条条点名调用」：不用，`/poteto-mode` 每次都会读。名字是给你纠偏用的。",
      "「说了原则名，AI 就一定照做了」：看它回复里有没有说，这条原则改了哪个决定。",
    ],
    see: ["poteto-mode", "evidence"],
    howto: "steer",
  },
];
