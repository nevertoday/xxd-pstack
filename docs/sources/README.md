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
