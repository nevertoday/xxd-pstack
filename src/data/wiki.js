// Wiki 条目：每条同样的结构 —— 一句话（one）、比喻（like）、在 pstack 里（here，可以是几段）、可选的清单表（list）、常见误区（myths）、相关（see）。
// 文字里可以用 **粗体**、`代码`、[外链](https://…) 和 [站内链接](/路径/)（lib/md.js 里简单转换）。
// step: 对应的主线步骤；howto: 对应的 How-to。

export const WIKI_GROUPS = ["基本概念", "pstack 怎么干活", "验证和证据", "原则"];

export const WIKI = [
  // ---------- 基本概念 ----------
  {
    slug: "pstack", title: "pstack 是什么", group: "基本概念",
    one: "pstack 是一包免费开源（MIT）的 Agent Skills：34 个技能加 24 条原则，让 AI 编程工具按资深工程师的规矩干活。",
    like: "像给一个聪明但毛躁的新同事发了一本「团队工作手册」：修 bug 先复现，改代码先读懂，说做完了要拿证据。人还是那个人（模型没变），但做事有章法了。",
    here: [
      "作者是 poteto（Lauren Tan），在 Meta、Netflix、Cursor 都写过大规模代码，也是 React 核心团队成员，参与做 React Compiler。作者的说法是：AI 写的「垃圾代码」太多了，==要快，先要深==。pstack 就是作者每天在 Cursor 里用的那一套。",
      "官方版本放在 [cursor/plugins 仓库的 pstack 目录](https://github.com/cursor/plugins/tree/main/pstack)，是给 Cursor 写的。[backnotprop/pstack](https://github.com/backnotprop/pstack) 是一个**镜像**：每天和官方同步，并把一些只适用于 Cursor 的写法改成了任何工具都能用，所以 ++Claude Code、Codex 用户一般装这个++。",
    ],
    myths: [
      "「pstack 是一个新的 AI 模型或者一个 App」：都不是。它是一堆写给 AI 看的说明文件（Markdown），装进你已经在用的 AI 编程工具里。",
      "「装了就能让 AI 变聪明」：++模型能力不变++。变的是做事的顺序和标准：不会跳过复现、不会不读代码就改、不会没证据就说做完了。",
      "「只能在 Cursor 里用」：官方是为 Cursor 写的，但镜像版在 Claude Code、Codex、OpenCode、Pi 等工具里都能用，只有少数 Cursor 独有的功能会跳过。",
    ],
    see: ["agent-skill", "poteto-mode", "harness"],
    step: 0,
  },
  {
    slug: "agent-skill", title: "Agent Skill（技能）", group: "基本概念",
    one: "Agent Skill 是一个文件夹，里面一份 SKILL.md，写着「遇到某类任务时，AI 应该按什么做法来」。",
    like: "像菜谱。厨师（模型）本来就会做菜，但照着一份写清楚「先焯水、再大火、最后勾芡」的菜谱，每次出来的味道都稳定。",
    here: [
      "pstack 的每个技能都是 `skills/<名字>/SKILL.md`。有的技能还带着参考资料（`references/`）和脚本（`scripts/`），比如 `/statechart` 带了一套 TypeScript 工具。",
      "这是一个[公开的格式](https://agentskills.io)，不是 pstack 自己发明的，所以++同一个技能能装进不同的 AI 工具++。",
    ],
    myths: [
      "「技能就是一段很长的提示词」：差不多，但它是按需加载的：++AI 只在用到时才读它++，平时不占对话空间。",
      "「技能越多越好」：作者自己都说，第一天用不着那么多。先用简单的提示词，==同一个毛病出现两次，再加技能或检查==。",
    ],
    see: ["skill-md", "slash", "pstack"],
    howto: "pick-skills",
  },
  {
    slug: "skill-md", title: "SKILL.md", group: "基本概念",
    one: "SKILL.md 是技能的正文：开头几行写名字、什么时候用，后面写具体步骤和规矩。",
    like: "像药盒里的说明书：最上面一行是「适应症」，AI 先看这一行决定要不要用；用的话再往下读用法用量。",
    here: [
      "开头一段叫 frontmatter，比如 `/poteto-mode` 的写着 `disable-model-invocation: true`，意思是 AI 不会自己决定启用它，**必须你亲手打 `/poteto-mode`**。",
      "想改 pstack 的行为，就是改这些文件。作者建议改技能也走正规流程：用「写技能」的剧本、再用 Eval 剧本盲测一下改得好不好，++不要随手在任务中途改++。",
    ],
    myths: [
      "「自己随手写一个 SKILL.md 就行」：给 AI 看的文字要求比给人看的更高，==一句没用的话会变成以后每个 AI 都去执行的指令==。走「写技能」剧本会帮你检查格式和链接。",
    ],
    see: ["agent-skill", "playbook"],
    step: 8,
  },
  {
    slug: "harness", title: "宿主工具（Claude Code、Cursor、Codex）", group: "基本概念",
    one: "宿主就是真正跑 AI、能读写你代码和执行命令的那个工具。pstack 装在它里面。",
    like: "pstack 是一套工作手册，宿主是工位：桌子、电脑、权限都由工位提供。同一本手册放到不同工位上，用法大同小异，细节要对照一下。",
    here: [
      "pstack 原本写给 Cursor。在别的宿主里，技能里提到的 Cursor 名字要换成对应的东西，比如 Cursor 的 `Task`（派子代理）在 Claude Code 里叫 `Agent`，在 Codex 里叫 `spawn_agent`。pstack 自己带了对照表，++AI 会自己读++。",
      "少数功能只有 Cursor 有（Automations、Bugbot、云端代理）。在其他宿主里，用到它们的步骤会被跳过，并且留一行说明，++不会卡住++。",
    ],
    list: [
      ["Cursor", "原生支持。`/add-plugin pstack` 安装，有 Custom Mode、云端子代理。"],
      ["Claude Code", "插件安装后命令带 `pstack:` 前缀，比如 `/pstack:poteto-mode`；模型配置在 `~/.claude/rules/pstack-models.md`。"],
      ["Codex、OpenCode、Pi 等", "用 `npx skills add backnotprop/pstack` 安装；模型配置在 `~/.agents/pstack-models.md`。"],
    ],
    listTitle: "常见宿主", listHead: ["宿主", "要注意的"],
    myths: [
      "「换个宿主就要换一套 pstack」：同一个镜像仓库，各宿主通用。==区别只在安装方式、命令前缀和几个文件路径==。",
    ],
    see: ["pstack", "model-roles", "subagent"],
    howto: "claude-code",
  },
  {
    slug: "slash", title: "斜杠命令", group: "基本概念",
    one: "在对话框里打 `/` 开头的词，就是点名让 AI 用某个技能，比如 `/poteto-mode`、`/how`。",
    like: "像在餐厅直接点菜名，而不是跟服务员描述「我想吃一个辣的、有鸡肉的」。点名更快、更准。",
    here: [
      "`/poteto-mode` 后面接你的任务，一起发出去。pstack 的技能（除了 `/setup-pstack`）AI 都不会自己决定启用：要么你点名，要么你用了 `/poteto-mode`，由它在步骤需要时去读。所以平时只打 `/poteto-mode`，++大部分技能就不用你点名了++。",
      "在 Claude Code 里用插件装的，命令名前面加 `pstack:`，比如 `/pstack:how`；Codex 里点名技能用 `$`，比如 `$how`。",
    ],
    myths: [
      "「一句话里点名越多技能越好」：这是 pstack 文档里专门点名的坑。「先 /how 再 /architect 再 /arena」这种写法，往往会打乱剧本本来安排好的顺序。==说目标和约束就行==，只有想改掉某个默认选择时才点名。",
    ],
    see: ["poteto-mode", "agent-skill"],
    howto: "which-skill",
  },
  {
    slug: "token-budget", title: "token 和推理预算", group: "基本概念",
    one: "token 是 AI 计费和计算的单位；推理预算是让模型「想多久」的档位。pstack 默认开得比较高，所以更慢、更费钱，也更仔细。",
    like: "像请装修师傅：可以让他看一眼就开工，也可以让他先量尺寸、出两个方案、再找人复核。++后者贵，但返工少++。",
    here: [
      "pstack 会派子代理、让几个模型一起评审，这些都要花 token。`/setup-pstack` 让你选一个预算档位：`large`（xhigh，等于默认值）、`unlimited`（每个模型开到最高档）、`medium`、`small`（更省）。",
      "省钱的办法：++主对话用强模型++，写代码的角色用便宜快的模型；把评审小组的人数减少；小改动不用 `/poteto-mode`。",
    ],
    myths: [
      "「`auto` 是一个模型名」：不是。把某个角色设成 `auto` 或 `inherit-parent`，意思是「不指定模型，跟主对话用同一个」。",
      "「预算越高越好」：==难题值得开高，日常改动开高只是更慢更贵==。",
    ],
    see: ["model-roles", "subagent"],
    howto: "cost",
  },
  {
    slug: "pr", title: "PR、提交和合并", group: "基本概念",
    one: "PR（Pull Request）是把一组改动提交给别人审核、再合并进主分支的请求。pstack 默认把每个任务收尾成一个干净的 PR。",
    like: "像交作业：草稿纸上可以乱写（你的分支），交上去的那份要誊清楚、写明思路（PR），老师批过才算数（合并）。",
    here: [
      "「开 PR」剧本会：在 worktree 里干活，把改动整理成一串小而有序的提交，清理代码和文字，标题用 Conventional Commits 格式，描述写成简报，最后给你 PR 链接。作者的观点是：++五个窄的 PR 胜过一个胖的++。",
      "开了 PR 之后，「Babysit」剧本负责盯到能合并（解决冲突、回复评审、修 CI），但**它从不合并**；合并是另一个决定，要你说「land the stack」，走「Shipping」剧本。",
    ],
    myths: [
      "「CI 全绿就可以合了」：==绿不等于安全==。Shipping 剧本会再派一个没写过这段代码的 AI，逐个 PR 实际验证一遍，验过的才合。",
      "「不用 GitHub 就用不了 pstack」：开 PR 那几步需要。只在本地改代码、读代码、查问题，用不到 PR。",
    ],
    see: ["worktree", "verify-skill"],
    step: 6,
  },

  // ---------- pstack 怎么干活 ----------
  {
    slug: "poteto-mode", title: "/poteto-mode", group: "pstack 怎么干活",
    one: "`/poteto-mode` 是 pstack 的总入口：你说目标，它挑一套剧本、把步骤列成待办、按步骤调用其他技能，最后拿证据给你。",
    like: "像一个有经验的项目经理接到需求：先复述一遍确认理解，判断这是修 bug 还是做新功能，按对应的流程分派，最后验收了才交给你。",
    here: [
      "它一开始会读 24 条原则的索引，然后在第一条回复里说出：你的目标、你在解决什么问题、它预计最小的改动是什么。它**不会等你确认**就往下做（这是「别卡在人身上」原则），++理解错了你随时打断++。",
      "回复里，它要说出用到了哪条原则、这条原则改变了哪个决定。只报原则名、说不出改了什么，等于没用。",
      "它只在你打出来的那条消息里生效。在 Cursor 里可以设成 Custom Mode 一直开着；在其他工具里，后续消息很短（「继续」「做吧」）也没关系，剧本会接着走。",
    ],
    myths: [
      "「什么事都要用它」：作者说==留给需要严谨的活==。改一行文案、显而易见的小改动，直接说就行。",
      "「要写很长的需求」：不用。目标、怎么算做完、你知道的线索，++每样一句话++。",
      "「它会先问我一堆问题」：恰恰相反。能通过跑一下就知道答案的问题，它会自己做个原型去试，只有真正需要你拍板的偏好问题才问你。",
    ],
    see: ["playbook", "todo", "principles", "custom-mode"],
    step: 3,
  },
  {
    slug: "playbook", title: "剧本（Playbook）", group: "pstack 怎么干活",
    one: "剧本是一类任务的标准做法。`/poteto-mode` 有 23 套，比如「修 bug」就是先复现、找根因、修、再验证。",
    like: "像医院的分诊：发烧走发热门诊、骨折走急诊外科，每个科室有自己的检查流程。你只要说症状，护士帮你分到对的科室。",
    here: [
      "剧本放在 `skills/poteto-mode/playbooks/` 里。你不用点名剧本，说清楚任务，它会自己匹配；完全对不上时，交给 `/figure-it-out` 现场设计一套。",
      "几个关键短语会影响匹配：「先别改代码」++会把任务钉在「调查」剧本++；「new task」让它重新匹配，而不是接着上一个剧本走；「我要去睡了」会走长时间自主运行的路线。",
    ],
    list: [
      ["调查 Investigation", "只读的问题：x 是怎么工作的、y 为什么这么写"],
      ["修 bug", "复现 → 根因 → 修 → 拿运行证据验证"],
      ["性能 Perf issue", "从一个测量到的慢开始，对着基线改进"],
      ["爬坡 Hillclimb", "持续改进一个指标，每个假设前后都测，一个有效改动一个提交"],
      ["运行时取证 / 轨迹取证", "从运行中的症状或抓到的 profile 找原因，只诊断不修"],
      ["功能 Feature", "新行为，从一个先定好的数据结构出发"],
      ["重构 Refactoring", "只改结构，行为一点不变"],
      ["原型 Prototype", "做几个一次性的草稿，用看得见的结果做决定"],
      ["视觉一致 Visual parity", "两个实现要做到像素级一样"],
      ["写技能 / Eval", "写或改 SKILL.md；盲测一个技能改动的效果"],
      ["Babysit", "把 PR 盯到可以合并：冲突、评审、CI"],
      ["Shipping", "逐个独立验证，再从底往上合并验证过的那一串"],
      ["自主运行 / Orchestrate", "一个长任务一直跑到完；多天、多 PR 的大项目交给一个协调者"],
      ["Autopilot-full / Autopilot-stack", "一队互不相干的 PR 跑到合并；或者只做到验证完、等你来合"],
      ["接手 / 安全暂停", "接上一个 AI 没做完的活；把手上的活干净地停下来"],
      ["多阶段计划", "跨多个阶段或多个 PR 的活，先出计划"],
      ["清理 worktree", "按证据删掉已合并或废弃的 worktree，腾磁盘"],
      ["开 PR", "所有剧本的最后一步：小而有序的提交、简报式描述"],
    ],
    listTitle: "23 套剧本（合并着说）", listHead: ["剧本", "用来做什么"],
    myths: [
      "「我得先学会这 23 套」：不用。==你只要会说任务，匹配是它的事==。这张表是给你看懂待办清单用的。",
      "「剧本里的步骤都会执行」：不一定。不需要的步骤会被跳过，但会留在清单里写明 `skip: 理由`，你能看到它决定不做什么。",
    ],
    see: ["poteto-mode", "todo"],
    howto: "which-skill",
  },
  {
    slug: "todo", title: "待办清单和 skip", group: "pstack 怎么干活",
    one: "`/poteto-mode` 开工时会列一份待办清单，前几项就是所选剧本的步骤，原样抄进来。决定不做的步骤留在清单里，写明 `skip: 理由`。",
    like: "像飞行员起飞前的检查单：每一项都要念出来，没做的也要说「这项不适用，因为……」，而不是悄悄略过。",
    here: [
      "==看清单是你监督 AI 最省力的办法==：它选了哪个剧本、准备做哪几步、跳过了什么，一眼就知道。看到不该跳的被跳了，直接说「第 3 步不要跳，先复现」。",
      "在 Claude Code 里，如果会话提供 TodoWrite 工具，它就用那个；没有的话，它会把清单写在回复里，每个阶段更新一次。",
    ],
    myths: [
      "「清单越长说明越认真」：清单来自剧本，长短取决于任务类型。++关键是没有一步被悄悄跳过++。",
    ],
    see: ["playbook", "poteto-mode"],
    step: 3,
  },
  {
    slug: "subagent", title: "子代理", group: "pstack 怎么干活",
    one: "子代理是主对话派出去干一小块活的 AI 助手。它在自己的空间里读一大堆东西，干完只把结论交回来。",
    like: "像主编派实习记者去现场：记者跑一整天、记一本子，回来只交一篇稿子。主编的桌面不会被现场材料堆满。",
    here: [
      "pstack 里很多技能会派子代理：`/how` 派几个只读的探索者读大模块；`/arena` 派几个人各写一个方案；`/swarm` 一块活一个人；`/interrogate` 派几个不同模型来挑刺。",
      "这背后是「守住上下文窗口」原则：==大量阅读交给子代理，主对话只留结论==。每个子代理用什么模型，由 `/setup-pstack` 写的配置决定。",
      "pstack 还带了一个专门的子代理 `poteto-agent`：它开工前会先把 `/poteto-mode` 的规矩完整读一遍，保证被派出去的助手也守同样的规矩。",
    ],
    myths: [
      "「子代理越多越快」：++子代理很费 token++。pstack 只在能换来覆盖面、独立判断或者节省主对话空间时才派。",
      "「几个子代理在同一个目录里一起改代码没问题」：会互相覆盖，谁改了什么也说不清。要改代码的，++每个都要有自己的 worktree++。",
    ],
    see: ["worktree", "model-roles", "token-budget"],
  },
  {
    slug: "worktree", title: "worktree（工作树）", group: "pstack 怎么干活",
    one: "worktree 是同一个 Git 仓库的另一份工作目录，有自己的分支。几个 AI 同时改代码时，各用一份，互不打架。",
    like: "像几个厨师合做一桌菜：共用一个冰箱（同一个仓库），但每人一块砧板（各自的 worktree），不会切到别人的菜。",
    here: [
      "「开 PR」剧本本来就在 worktree 里干活，所以==平时你不用特意说==。只有指定从哪个分支开始时才说：「从 main 新开一个 worktree，再把解析器的改动移过去」。",
      "worktree 占磁盘和机器资源，++笔记本上同时开几个就差不多了++。磁盘紧张时说「看看什么在吃我的磁盘，把能删的 worktree 删掉」，「清理 worktree」剧本会按合并状态和未提交的改动逐个判断，有未提交内容的会停下来问你。",
    ],
    myths: [
      "「worktree 是 pstack 的功能」：是 Git 自带的功能（`git worktree`）。pstack 只是默认用它。",
      "「项目不用 Git 也行」：大部分剧本假设你在一个 Git 仓库里。还没用 Git 的项目，先 `git init` 并提交一次。",
    ],
    see: ["subagent", "pr"],
  },
  {
    slug: "custom-mode", title: "Custom Mode（常驻模式）", group: "pstack 怎么干活",
    one: "Custom Mode 是 Cursor 的功能：把 `/poteto-mode` 变成每一轮对话都在的模式，不用每句话都打一遍。",
    like: "普通用法像每次进门都要刷一次卡；常驻模式像门一直开着，直到你自己关上。",
    here: [
      "在 Cursor 里，从 `/` 菜单选中 `/poteto-mode` 后按 **Option+Enter**（Mac）或 **Alt+Enter**（Windows），而不是 Enter。普通 Enter 只把技能附在这一条消息上，++聊着聊着它的影响会变弱++。",
      "Claude Code、Codex 没有这个功能。替代办法：==一个对话只做一件事==；换任务时开新对话，或者说「/poteto-mode new task」。",
    ],
    myths: [
      "「每个工具都有 Custom Mode」：只有 Cursor（Agents 窗口和 CLI）有。",
    ],
    see: ["poteto-mode", "harness"],
    howto: "cursor",
  },
  {
    slug: "model-roles", title: "模型角色和 pstack-models 配置", group: "pstack 怎么干活",
    one: "pstack 把活分成几种角色（写代码、做判断、评审小组、swarm 工人），每种角色可以配不同的模型，配置写在一个小文件里，所有技能都读它。",
    like: "像一个工程队：搬砖的、画图的、验收的，不必都请最贵的师傅。验收的最好请别家的人，免得自己验自己。",
    here: [
      "默认分工：写代码的活（功能、重构、修 bug、性能、爬坡）给 grok，最难的改动、写文字和做判断给 opus 5.5；评审小组默认是 opus 5.5 加 grok 两家。==用不同家族的模型互相评审，是 pstack 的一个核心做法==。",
      "`/setup-pstack` 会检测你能用哪些模型，写一份配置：Cursor 在 `~/.cursor/rules/pstack-models.mdc`，Claude Code 在 `~/.claude/rules/pstack-models.md`，其他工具在 `~/.agents/pstack-models.md`。++改完要开一个新对话才生效++。",
      "在 Claude Code 里只能选 Claude 的模型（opus、sonnet、haiku 等）。配置里出现 grok、gpt 这类别家模型时，那个角色会直接用当前会话的模型，并说明一声。",
    ],
    myths: [
      "「配置里没写的角色就不能用」：没写的角色用技能自带的默认值。你只覆盖你在意的。",
      "「默认值更新了，我的配置会跟着变」：不会。++旧配置里写死的还是旧默认值++。想跟上新默认，删掉那几行或者整个文件，再跑一次 `/setup-pstack`。",
    ],
    see: ["token-budget", "subagent", "harness"],
    step: 2,
  },
  {
    slug: "arena-swarm", title: "/arena 和 /swarm 的区别", group: "pstack 怎么干活",
    one: "`/arena` 是「同一道题几个人各做一份，挑最好的再取长补短」；`/swarm` 是「一份大活切成几块，一人一块，最后汇总」。",
    like: "`/arena` 像设计比稿：三家公司各交一版 logo，选一版做底，把另两版的好点子揉进来。`/swarm` 像阅卷：一百份卷子分给五个老师，每人批二十份，最后汇总成绩。",
    here: [
      "`/arena`：每个候选在自己的目录里做，换一个模型家族的评委打分，再由协调者读完每一份、挑底子、嫁接、验证。用在命名、格式、算法这类以后很难改的决定上。`/architect` 内部就会用它。",
      "`/swarm`：每个工人有自己的范围和检查，回报「通过 / 有问题 / 卡住」，最后一份精简报告。用在「每个包都检查一遍」「每个功能都验一遍」++这类覆盖型任务++。",
    ],
    myths: [
      "「用 /arena 来做覆盖检查」：++pstack 文档专门点了这个坑++。覆盖要用 `/swarm`，`/arena` 会对每份结果做挑底子、嫁接那一套，白白浪费。",
    ],
    see: ["subagent", "principles"],
    howto: "which-skill",
  },

  // ---------- 验证和证据 ----------
  {
    slug: "evidence", title: "证据（而不是「应该好了」）", group: "验证和证据",
    one: "pstack 里「做完了」的意思是：拿真实的东西证明过。真实的命令输出、真实存下来的值、真实点过的界面、前后对比的数字。",
    like: "像验收房子：施工队说「水电都没问题」不算，要当面开灯、放水、看电表。",
    here: [
      "这是「证明它能用」（prove it works）原则。它要求 AI 对照真实产物验证，而不是对照替代品、自我感觉或者「编译通过了」。",
      "不同改动对应不同证据：命令行改动就跑真命令；界面改动就在运行的应用里走一遍；解析器或迁移就回放一份保存好的输入；性能就比前后 profile；存储就把写进去的值读出来。",
      "你能做的最有用的事，是在第一句提示词里就写明「怎么算做完」和「想看什么证据」。验证不了的，好的回复会写「说不准」（inconclusive）。==**一个很自信却没证据的回复，是危险信号。**==",
    ],
    myths: [
      "「测试都过了就证明好了」：++测试只检查写测试的人想到的情况++。pstack 要的是在真实应用里观察到的行为。",
      "「它解释得很有道理，应该没问题」：解释再合理也不如一个你能自己检查的产物。++产物能被质疑，解释只能被相信++。",
    ],
    see: ["verify-skill", "principles", "formal-verification"],
    step: 6,
  },
  {
    slug: "verify-skill", title: "验证技能", group: "验证和证据",
    one: "验证技能是给你的项目量身生成的一个技能：教 AI 怎么启动你的应用、怎么像用户一样操作、拿什么当证据、怎么收尾。",
    like: "像给新来的测试同学写一份「上手手册」：怎么开机、测试账号是哪个、点哪里、截什么图。写好以后，谁来都能测，不用每次问你。",
    here: [
      "用 `/create-verification-skill` 生成。它主要「采访」你的代码而不是你：应用怎么在本地启动、用什么来操作（已有的测试工具、浏览器、终端或 HTTP）、什么算证据、能不能同时开两个。交付前它会自己完整跑一遍：启动、自检、操作一个功能、拿证据、清理，确认证据在清理后还在。",
      "生成的东西放在项目里（Cursor 是 `.cursor/skills/verify-<应用名>/`，Claude Code 是 `.claude/skills/verify-<应用名>/`），带一份功能地图，每个功能写明怎么证明它能用。以后提示词里就可以说「用 /verify-<应用名> 验证，给我视频和截图」。",
      "作者说，整个指南里回报最高的就是这一件：==**能检查自己工作的 AI 会一直干到检查通过；不能的，只能把每个结果都扔回给你手动检查。**== 新手在 `/setup-pstack` 最后被问到要不要生成时，选「要」。",
    ],
    myths: [
      "「生成一次就一劳永逸」：应用会变，功能地图会过时。用 `/maintain-verification-skill` 定期（++最好每天++）复查，它只会修验证技能本身，从不改产品代码。",
      "「我项目太小用不上」：++越早有越好++。它把「验证」从一件要你亲自做的事，变成任何 AI 都能做的一步。",
    ],
    see: ["evidence", "formal-verification"],
    step: 6,
  },
  {
    slug: "formal-verification", title: "形式化验证", group: "验证和证据",
    one: "形式化验证不是举几个例子测一测，而是把「某条规则」在限定范围内的**所有情况**都检查一遍，比如「同一个任务绝不会同时跑两次」。",
    like: "普通测试像抽查几辆车的刹车；形式化验证像用数学证明「这种刹车设计在任何车速下都能刹住」。",
    here: [
      "用 `/create-formal-verification-skill` 生成。它会从代码里挑一个「出错代价高、测试又很难碰到」的承诺来验证，按问题挑工具：事件会不会以坏的顺序发生，用模型检查器（默认 TLA+）；代码对每个输入是否都对，用能直接跑在代码上的验证器；没有合适工具时，用随机生成的大量输入去测真实代码。",
      "它会故意做一个坏掉的版本，确认检查能抓到它，因为「==一个你从没见过失败的检查，什么也证明不了==」。如果现有代码已经违反规则，你会拿到一串用你代码里的说法写的复现步骤。产品代码你不要求就不改。",
      "代码改了以后，用 `/maintain-formal-verification-skill` 更新并重跑，它会告诉你每个失败是「验证过时了」还是「代码真有 bug」。想给产品、设计看，就用 `/statechart` 画成状态图。",
    ],
    myths: [
      "「验证通过就说明整个系统没问题」：++通过只覆盖那个模型或那个范围++。交付说明里会写清楚验证了什么、用什么工具、范围多大、没覆盖什么。",
      "「每个项目都该上」：只在有并发、重试、状态机、解析器，++并且出错很贵的地方才值得++。",
    ],
    see: ["verify-skill", "evidence"],
    step: 6,
  },
  {
    slug: "decision-log", title: "决策日志", group: "验证和证据",
    one: "决策日志是 AI 边干边记的一张表：每个决定一行，写时间、阶段、决定、理由、证据在哪、结果。你回来时看它，而不是重看整段对话。",
    like: "像实验记录本：做了什么、为什么、结果如何，一行一行。第二天导师来看，翻本子就知道，不用重做一遍实验。",
    here: [
      "由 `/show-me-your-work` 负责，存成一个 TSV 文件（默认 `decisions.tsv`，几个任务共用目录时在 `.audit/<任务名>.tsv`）。++默认只放在本地++；任务够重要、评审需要这条记录才能放心时，再提交进仓库。",
      "你回来时说「/show-me-your-work 把你昨晚做的事给我讲一遍」。它交回总结之前，会派另一个模型家族的审阅者读日志和对话，回复最后有一个「需要注意」部分。==**先读那一部分，再去看它指向的那几行。**==",
      "只想快速知道进展，用 `/ketchup`：只读，用大白话告诉你自上条消息以来变了什么，并列出每件等你拍板的事。",
    ],
    myths: [
      "「有日志就不用审了」：日志是让你审得更快，++审决定而不是重读一夜的对话++。",
    ],
    see: ["evidence", "poteto-mode"],
    step: 7,
  },

  // ---------- 原则 ----------
  {
    slug: "principles", title: "24 条原则", group: "原则",
    one: "pstack 把工程经验写成 24 条短原则，每条一个名字。`/poteto-mode` 每次开工都读它们的索引；你在对话里说出名字，就能精确地把 AI 拉回正轨。",
    like: "像球队的战术暗号：教练喊一声「二号战术」，全队都知道要干什么，不用在场边讲一大段。",
    here: [
      "你不用「调用」原则，只用它们的名字来**纠偏**。比如 AI 想在三个旧适配器上再加一个：「use subtract before you add. 先删掉过时的适配器，再设计剩下的。」AI 因为编译通过就说成功了：「apply prove it works. 跑一遍真实的导入流程，给我看写进去的记录。」",
      "AI 在回复里要说出用到了哪条原则、它改变了哪个决定。只引名字、说不出改了什么，说明它没真用。",
      "作者的建议：==别背==。现在扫一眼，等哪天你发现 AI 做了一件「某条原则本可以阻止」的事，再回来查。这样记得最牢。",
    ],
    list: [
      ["laziness protocol", "核心 · 能删就删，用最小的改动解决问题"],
      ["foundational thinking", "核心 · 写逻辑之前先选对数据结构，后面的代码自然就清楚了"],
      ["redesign from first principles", "核心 · 加新需求时，当它从第一天就在那样重新设计，而不是硬塞进去"],
      ["attack the premise", "核心 · 两次以上基于同一个前提的修复都失败了，就把前提写下来直接验证"],
      ["subtract before you add", "核心 · 先清掉没用的东西，再在更简单的基础上加"],
      ["minimize reader load", "核心 · 数一数读代码的人要跳几层、脑子里要记多少状态，能减就减"],
      ["outcome-oriented execution", "核心 · 大改造直奔目标架构，别为了中间状态写一次性的兼容代码"],
      ["experience first", "核心 · 用户体验优先于实现方便；少做几个功能，但每个都打磨好"],
      ["exhaust the design space", "核心 · 没有先例时，做两三个原型并排比较再定"],
      ["build the lever", "核心 · 做工具（脚本、codemod、生成器、技能）来干活或证明，而不是手工一遍遍做"],
      ["model the domain", "架构 · 把业务规则放进一个结构里，而不是散落一地的 if"],
      ["boundary discipline", "架构 · 在系统边界（命令行、配置、网络、外部接口）集中校验，内部信任类型"],
      ["type system discipline", "架构 · 让非法状态根本写不出来；外部数据在边界解析；所有分支都要处理"],
      ["make operations idempotent", "架构 · 不管之前跑了一半还是跑了几次，结果都一样"],
      ["migrate callers then delete legacy apis", "架构 · 迁完调用方就删旧接口，同一波做完，不留兼容层"],
      ["separate before serializing shared state", "架构 · 先消除共享，实在要共享才加锁排队"],
      ["prove it works", "验证 · 对照真实产物验证，「编译通过」不算"],
      ["fix root causes", "验证 · 顺着症状找到系统第一次出错的地方，在那里修"],
      ["sequence verifiable units", "验证 · 把活切成小块，每块结束都能验证，验过再做下一块"],
      ["test behavior not implementation", "验证 · 测试断言用户能观察到的行为，改内部实现时不该挂"],
      ["explain the number", "验证 · 相信一个测出来的数字之前，先说清楚是什么在限制它"],
      ["guard the context window", "分工 · 大量阅读交给子代理，主对话只留结论"],
      ["never block on the human", "分工 · 能撤回的事先做、把结果给人看，只有不可逆的才先问"],
      ["encode lessons in structure", "元原则 · 同一句提醒说了两次，就把它变成 lint、检查或脚本"],
    ],
    listTitle: "全部 24 条（名字保留英文，说出来 AI 才认得）", listHead: ["名字", "说人话"],
    myths: [
      "「原则要一条条点名调用」：不用，`/poteto-mode` 每次都读。++名字是给你纠偏用的++。",
      "「说出原则名，AI 就一定照做了」：要看它回复里有没有说出这条原则改了哪个决定。",
    ],
    see: ["poteto-mode", "evidence"],
    howto: "steer",
  },
];
