# 参考库

写教程时参考的外部资料。每条记出处、可信度，和本站哪几页用到了它。

- 原文放在 `raw/`，只留在本地，不提交（`.gitignore` 里排除了）。仓库是公开的，别人的文章不整篇转载。
- 这里只写我们自己的笔记：要点、和本站的对照、还没用上的地方。
- 引用原话一次不超过一句；写进网站的内容用自己的话讲，并附原文链接。

## poteto：The Complete Guide to pstack

作者本人讲自己怎么用 pstack 的两篇长文，发在 X 上。

| 篇 | 原帖 | 本地副本 |
| --- | --- | --- |
| 第一部分：Verification is all you need（2026 年 8 月） | https://x.com/poteto/status/2094457600259842065 | `raw/poteto-complete-guide-pt1.md` |
| 第二部分：The art of supervising someone smarter than you | 地址待补 | `raw/poteto-complete-guide-pt2.md` |

**副本不完整。** 两份都是从 X 页面抓下来的，标题、列表、代码块和提示词都在，大段正文没抓到，有几段在句子中间断掉。配图只剩 twimg 链接。要核对原话，以原帖为准。

### 第一部分的要点

- 验证是和 AI 协作的地基，要当成基础设施来维护。
- 给自己的应用做一个验证 CLI，例子是 `control-atlas.mjs`：`doctor`、`new-session`、`send`、`snapshot`、`screenshot`、`wait-settle`、`feature-flag`。命令按「查看 / 导航 / 操作 / 性能 / 日志 / 健康检查」分组。
- 这个 CLI 的设计要求：接口好组合（Ousterhout 的深模块）；有副作用的命令带 `--dry-run`；用子命令一层层展开功能；报错要写清楚下一步该怎么做；`--help` 写全；输出用 JSON 这类机器能读的格式。
- 验证技能还要管：准备开发数据库、登录和测试账号、调测试或预发环境的 API、用同样的方式装好并跑起开发环境。
- 每个功能一份说明文件，例子是「Preferences」：子功能、用户怎么走到这里、用 CLI 怎么驱动、坑。
- 三句用法：做功能后验证并给录屏截图；派云端 AI 做同样的事；查性能先录 trace、对症修，再用 `/swarm` 确认变快。

本站已用：`howto/verify-app`（「作者自己怎么用」一节）。

### 第二部分的要点

- 开头的判断：AI 做错，通常是两个原因。一是你的意图没说清；二是它缺少把事做对所需的背景。
- 「In your own words」：让它复述，用 `/how`、`/why`、`/teach`、`/recall` 补背景。
- 「Working backwards」：先写新东西的教程，再做设计。文档分四类（教程、操作指南、参考、解释）。示例是一条三段的长提示词：`/recall` + `/how` + `/why` 找回背景，`/poteto-mode` + `/technical-writing` 从教程倒推新设计，最后 `/teach` 并证明新方案更好。
- 「Measure a hundred times, cut once」：两种失败。一是直接接受 AI 的第一个设计；二是没有实测证据就把计划越磨越细。解法是做几个原型，用 `/control-app` 录屏截图给人挑。
- `/architect` 的五步：先摸清现状；多个模型并行画设计草图（调用方怎么写、核心类型、函数签名、理由）；换一个模型按评分标准交叉评审；照草图实现，发现对不上就说出来；设计错了就整个推倒重来。
- 要计划文档时：`/poteto-mode turn this design into a plan`。
- 四个实例：查原因不明的 bug；设计新的服务边界（webhook 限流）；多 PR 迁移到 StyleX，结果要和原来一模一样，bug 也照留；把 Slack 上报的 bug 复现、修好、给录屏。

本站已用：四个实例和大部分提示词在 `guide/4-understand`、`guide/5-design-build`、`howto/recipes`、`howto/write-docs` 里，很多是从官方 `docs/guide` 来的，没有标这篇文章的出处。

### 还没用上的地方

做完一条就从这里删掉。

- **第二部分没有标出处。** 补上原帖地址以后，加进第 5 步和 `howto/write-docs` 的延伸阅读。

已经用上的（2026-11-12）：
- 「AI 做错的两个原因」写进了第 3 步，指向第 4 步。
- 第二部分的三段长提示词写进了第 5 步「大功能：先写教程，再定设计」，用自己的话改写，没有照抄。
- 「没有证据就把计划越磨越细」和 `/architect` 推倒重来，写进了第 5 步。
- 第一部分的验证 CLI 六条要求和功能文件的格式，`howto/verify-app` 早就讲了（「把它当成项目的基础设施」和「你会得到什么」两节）。

## 别人的实测、作者的演讲和对谈（2026-11-21 收集）

给 `howto/field-notes`（用过的人怎么说）找的资料。本站只写现在（0.15.46）还成立的用法，每条附原文链接。很多文章写的是旧版：23 套剧本、51 个技能、`/orchestrate`、`unlimited` 预算、`with checkpoint`、`skip:` 标记，引用前要核对。

**作者本人**（一手，可信度高；作者现在做 Grok Bot，pstack 是在 Cursor 时写的）

| 资料 | 地址 | 要点 |
| --- | --- | --- |
| 演讲 All Code Is Slop (Except Mine)，2026-11 | https://www.youtube.com/watch?v=O_zcc6Xl12g | 力气先花在代码和架构，再是 lint、类型、测试，再是运行时验证，规则文件最后；纠正写成确定的检查；大部分 token 花在验证；个人每月约 3000 个 PR，花了约半年 |
| 和 Matt Pocock 的直播对谈，2026-10-02 | https://www.youtube.com/watch?v=MN9dGgmLyso | 机械的部分放进 CLI，AI 只做判断；坏模式先记进文件，过几天一起找共同原因；夜里放手，早上读提交记录，抽查而不是逐个审 |
| Loops You Can Trust，2026-06-24 | https://x.com/poteto/article/2069824386283319343 | 验证是限制步骤；每一环都能叫停；复现要两次并录屏；第一份手做，再写脚本加检查；StyleX 迁移改成每天一个叶子组件 |
| 「先从验证开始」帖子，2026-10-11 | https://x.com/poteto/status/2109436202554372476 | 先让 AI 能像用户一样跑自己的成果；好的证据比 diff 更容易审 |
| How I Use Cursor，2026-05-25 | https://x.com/poteto/article/2058975157503570132 | 先往深里用再往宽里铺；七个带结束条件的提示词例子。里面的 `/orchestrate` 已删 |

**别人的实测和教程**

| 资料 | 可信度 | 要点 |
| --- | --- | --- |
| [productize.life](https://productize.life/blog/pstack-skills/en)（0.15.15） | 高，两个真实任务 | 埋 bug 证明测试会失败；只拿五个工具不用总开关；Claude Code 里多模型步骤变成一个模型 |
| [Flavio Copes：poteto-mode](https://flaviocopes.com/poteto-mode/) | 高 | 提示词写结果和怎么验证，不列技能；arena 从 2 个候选加到 4 个 |
| [azukiazusa](https://azukiazusa.dev/en/blog/pstack-agent-skills/) | 高，真实线上 bug | 修 bug 同时修了产生坏数据的代码；让 `/architect` 写实现前停下看公开接口 |
| [Rob Shocks 对比（文字版）](https://the-agent-daily.org/agentnews-experimental/deep-dives/pstack-is-agent-overkill-use-it-anyway) | 中，一次 A/B | 同一应用 30 分钟对 1 小时，pstack 版更扎实；决策日志抓到三处编造 |
| [justmao 系列](https://justmao.com/en/posts/pstack-install-routing/)（0.15.43） | 中高 | 无人值守提示词六部分；限制交给权限和花费上限，不靠提示词 |
| [redreamality 0.15.43 实测](https://redreamality.com/cn/blog/pstack-0-15-43-hands-on/) | 高（版本事实） | 技能文字缩短约两成；更新后重跑 `/setup-pstack` |
| [kayvane](https://www.kayvane.com/posts/building-a-multi-skill-system)（很早的版本） | 高（设计分析） | 派活都走 poteto-agent |
| [codesook](https://codesook.dev/en/posts/pstack-the-right-way/) | 中 | 先做验证技能再用 poteto-mode；搭配 Matt Pocock 的技能 |
| 五里墩茶社 B 站 [BV1LLWY6yEch](https://www.bilibili.com/video/BV1LLWY6yEch/)、[BV1xfsM6wE39](https://www.bilibili.com/video/BV1xfsM6wE39/)、[BV1WGsi6MEJm](https://www.bilibili.com/video/BV1WGsi6MEJm/)（0.15.36） | 高，唯一的中文一手实测 | 交接四项；验证按方面分三路；找方案的共同遗漏 |
| V2EX 译文 [1247444](https://www.v2ex.com/t/1247444)、[1247460](https://www.v2ex.com/t/1247460)、[1247995](https://www.v2ex.com/t/1247995)、[1248228](https://www.v2ex.com/t/1248228) | 中（译文） | 回复里有人质疑「不看 PR」和 PR 数字 |
| X 上的回复（10 秒教程那条 https://x.com/poteto/status/2110757066709356851 下面） | 一手，零散 | 一周额度 8 小时用光；预算管想多久不管总花费；自动套上 poteto-mode 待办太多 |

没用上、可以再看的：知乎三篇（抓取时 403）、linux.do（403）、zenn 上 karamage 的文章、YC Lightcone 播客、作者 38 分钟的「2500 个 PR」视频。
