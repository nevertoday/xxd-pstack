# 维护说明

把 [pstack](https://github.com/backnotprop/pstack)（poteto 的 AI 编程技能包）讲给第一次接触的人：说人话，从入门到在真实项目里用起来。
四块内容：主线教程（按顺序 0–8 步）、技能速查（34 个技能）、How-to（具体怎么做）、Wiki（这是什么）、常见问题。

- 站点骨架沿用 [小小东 VPS 教程站](https://vps.xiaoxiaodong.ai)（`../小小东VPS/site`）：同样的外壳、组件、搜索和写作规矩。
- 界面用 xxd-ui-kit（`public/xxd/` 里自带一份，不走 CDN）。
- 中英双语：中文在根路径，英文在 `/en/` 下，slug 相同，顶栏按钮切到对应页。改了一篇中文，**同一次提交里把英文版也改了**：
  - 正文：`src/pages/en/guide/`、`src/pages/en/howto/`（MDX，路径多一层 `../`；站内链接加 `/en`；`<Term k="中文键" />` 照原样，英文名在 `nav.js` 的 `GLOSSARY[k].en`）。
  - 数据：`nav.js` 各条目的 `en: {}`；`wiki.en.js`、`faq.en.js`、`skills.en.js`（按 slug / 技能名叠加，结构和条数要和中文一致）；界面文字在各组件和 `views/` 里的 zh / en 两份。
  - 强调：每页最多一处 `<mark>`（这页最要紧的一句），`<u>` 只给照做会失败的坑；英文页放在对应的那句上。
- README 有 10 种语言（`README.md` 中文，`README.<lang>.md` 其他）；非中文版用 `assets/en/` 的英文插画（同一个 `build_assets.py` 生成）。

```bash
npm install
npm run dev        # http://localhost:4420
npm run build      # 输出到 dist/
```

## 怎么改

- **站点结构**只在 `src/data/nav.js` 改：主线 9 步（`STEPS`）、How-to 清单（`HOWTO`）、术语解释（`GLOSSARY`）、本站仓库地址（`REPO`）。
- **主线教程**每一步是 `src/pages/guide/<n>-<slug>.mdx`，开头写 `layout: ../../layouts/Guide.astro` 和 `step: n`。
- **How-to** 是 `src/pages/howto/<slug>.mdx`（`layout: ../../layouts/HowTo.astro`，`slug` 要和 `HOWTO` 里一致，`step` 是相关的主线步骤）。
- **技能速查**只改数据：`src/data/skills.js`（每个技能：一句话、什么时候用、例句、要一起装的技能、谁来调用）。
- **技能详情页**（`/skills/<名>/`）：人话简介来自 `skills.js`；原文、中文译文和「从它的写法里学」来自 `src/data/skill-docs/<名>.json`。
  - 原文按空行切成一块块，每块一对 `{ en, zh }`，页面上可切换中文 / 原文 / 对照。
  - pstack 更新后：`node scripts/skill-docs.mjs sync <pstack 仓库目录>`。英文没变的块保留译文，变了的块译文清空。
  - 然后 `node scripts/skill-docs.mjs check`，把它列出的缺译文、写法原句找不到的补上。
  - 译文要完整忠实（不缩写、不增删），代码块、命令、技能名、原则名、路径保持英文；用户写「用户 / 对方」，不用他 / 她。
  - 写法每个技能 3–5 条：`quote` 必须是原文里的原句；`does` 这句让 AI 做什么、`why` 为什么这样写、`try` 读者怎么借用，各一句。
  - 原文是 MIT 许可（Lauren Tan），页脚保留署名和核对到的版本。
- **Wiki** 和 **常见问题** 只改数据：`src/data/wiki.js`、`src/data/faq.js`。Wiki 条目可以带一张 `list` 表。
- **教程组件**（在 MDX 里 import）：`Callout`（`ok` / `warn` / `no` / `tip`）、`Term`（术语，`k` 对应 `GLOSSARY`）、`Checkpoint`（可打勾的检查点）、`Q`（「卡住了？」里的一条）、`Tabs`（按工具切换）、`Copy`（带复制按钮的提示词或命令）、`Cmd`（正文里一点就复制的命令）、`Shot`（配图）。
- **搜索**（⌘K）自动收录主线每一步、每篇 How-to、每个技能、每个 Wiki 条目和每条常见问题，正文按小节做全文搜索。
- **UI Kit 升级**：在 xxd-ui-kit 里 `pnpm xxd sync <本目录>`，不要手改 `public/xxd/`。改完界面跑 `pnpm xxd doctor <本目录>`。

## 写作规矩

- 站在第一次接触的人的角度：先说这一步做什么、为什么，再说怎么做，最后说应该看到什么。
- 说人话：短句、具体、不堆术语；第一次出现的术语用 `Term` 包起来。
- 提示词用中文写，技能名和原则名保留英文（`/how`、`prove it works`），AI 才认得。
- 只写 pstack 仓库里写明了的行为和命令；会变的东西（默认模型、剧本数量、命令前缀）以 [pstack 仓库](https://github.com/backnotprop/pstack) 为准，变了就改 `data/` 里对应的那一处。
- 当前内容核对到 pstack **0.15.36**（backnotprop/pstack `0854796`，2026-11-10）。下次同步先看它的 `SYNC-LOG.md` 从这一行往后有没有「Synced」，再 `git diff 0854796 HEAD -- skills docs` 看具体改了什么。
- 作者 poteto 一律称「作者」或「poteto」，不用他 / 她。
- MDX 正文里不能出现裸的 `<`、`{`、`}`：占位符写在代码里，比如 `` `<你的应用名>` ``。

## 说人话：全站的改写规则

读者反馈「读着脑袋烧、get 不到」，原因几乎都是下面这几条。写新内容、改旧内容都照这个来。

**每页**
- frontmatter 里写 `tldr:`，显示在标题下面的「一句话」：看完这页你能做成什么。不超过 40 个字，说结果，不说「本页介绍……」。
- 小节标题写读者的动作或问题：「先写清楚怎么算做完」「它说复现不出来」。不用名词当标题（「约束」「原理」）。
- 正文比改之前短三分之一以上。删掉读者用不上的：作者履历、版本差异、少见的边缘情况、内部流程的细节。真有人需要的，收进页尾的 `Q` 折叠项。

**每段、每句**
- 一段只讲一件事；一句只讲一个意思。中文一句超过 30 个字就拆开，英文超过 20 个词就拆开。
- 先给例子，再讲道理：先放能照抄的提示词或操作，再用一两句说为什么。
- 正面说要做什么。不用「不是……而是……」「最好别……」「……不是客气话」这类要读者拐弯的句式。
- 只讲读者要做的事和会看到的东西。AI 内部怎么派活、剧本有几步，能不讲就不讲。
- 一句话里最多出现一个新词。
- **卖点只说一次。** 「做完拿出证据 / 看懂证据」这类概括 pstack 好处的话，首页标题说一次、第 1 课说一次，就够了。别的页面的「一句话」、简介、导航摘要、术语悬停提示里不再重复，写这一页具体做什么。必须提到时，写具体的东西（截图、命令输出、它试过的结果），不要再喊口号。

**词**
- 新词第一次出现，当场用大白话说清楚（括号或紧跟一句），或者直接换成日常说法：

| 别写 | 写成 |
| --- | --- |
| 产物 | 能拿来检查的东西（截图、输出、录屏） |
| 约束 | 要求、不能碰的地方 |
| 根因 | 真正的原因 |
| 复现 | 让问题再出现一次（第一次出现时这样解释，之后可以用「复现」） |
| 下游 / 上游 | 出问题之后的地方 / 出问题的源头 |
| 上下文 | 前面聊过的内容 |
| 意图 | 你想要什么 |
| 匹配到剧本 | 挑中一种做法 |
| 子代理 | 派出去干活的帮手 AI |
| 只读 | 只看不改 |
| 钉死、钉在 | 固定 |
| 证明力 | 说服力 |
| 一个字节都不能变 | 正文里写「一点都不能变」；给 AI 的提示词里写「要和原来逐字一样」（提示词要精确） |
| 收敛、坍缩、落地、闭环、抓手 | 删掉，换成具体发生了什么 |

- 原则名（`prove it works`、`fix root causes`）不当咒语直接甩给读者。先写中文意思，再说「这是 pstack 认识的名字，原样打出来它就懂」。
- 剧本、技能、worktree、PR 这些站内术语，用 `Term` 包起来，悬停有一句解释。

**表格和列表**
- 表格最多 3 列、5 行，每格不超过 15 个字。放不下就改成列表。
- 列表每项先写结论（加粗几个字），后面最多一句解释。

**不能动的**
- 命令、提示词、文件路径、数字保持准确；不写 pstack 仓库里没写的行为。
- 强调：每页最多一处 `<mark>`；`<u>` 只给会让人做错的坑。
- 中文页和 `/en/` 下的英文页一起改，结构保持一致。

## 新手入门（/start/）的写法

新手入门是给没写过代码、只和 AI 聊过天的人看的。站点有两条路：新手入门三课（`src/pages/start/`，数据在 `nav.js` 的 `LESSONS`），和给会写代码的人的完整教程（`guide/`）。新手页的规矩比上面更严：

- **先做，后讲。** 每一课一开始就让人动手；道理只讲到「为什么要这样做」的一句话。（Carroll 的极简教学、Diátaxis 的 tutorial 原则）
- **只给一条路。** 不列「也可以这样」。别的工具、别的装法放到页尾的「不对怎么办」里，一句话带过。
- **每一步写「你应该看到」。** 用 `<Callout type="ok">`，写屏幕上真的会出现的字。
- **每一课都有「不对怎么办」。** 按读者会看到的现象写问题（「打 /pstack: 什么都没弹出来」），不按原因写。
- **不出现没解释过的词。** worktree、PR、CI、diff、子代理、token、剧本、原则名都不进新手页；非要用就换成日常说法（「额度」「检查结果」）。
- **说清楚哪些是可选的。** 三课之外的一切都标成「遇到了再查」；不要让读者觉得每一页都必须看。
- **反复用同一个句式。** 「我想要什么 · 做好是什么样子 · 做完给我看什么」在每个例子里重复，换场景不换句式。
- **示意要标明是示意。** AI 回复的样子用 `Reply` 组件，标题写「示意」，不冒充真实记录。

## 部署

线上：<https://pstack.xiaoxiaodong.ai>　仓库：<https://github.com/nevertoday/xxd-pstack>（Cloudflare Workers 静态资源，2026-11-09 首次部署）。
更新：`npm run release`（构建后 `wrangler deploy`，需要先 `npx wrangler login`），配置在 `wrangler.jsonc`。

## README 插画和分享大图

`python3 tools/build_assets.py` 生成 `assets/*.svg`（README 插画、SVG 动画、分享图 `social.svg`）。分享图还要转成 PNG（用 Chrome 渲染，中文字体最准）：

```bash
printf '<!doctype html><meta charset="utf-8"><style>html,body{margin:0;width:1280px;height:640px;overflow:hidden}</style><img src="file://%s/assets/social.svg" width="1280" height="640">' "$PWD" > /tmp/social.html
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --allow-file-access-from-files --force-device-scale-factor=1 --window-size=1280,640 --screenshot="$PWD/assets/social.png" file:///tmp/social.html
cp assets/social.png public/og.png
```

`public/og.png` 是网站的分享图（og:image）。`assets/social.png` 要在 GitHub 仓库 Settings → General → Social preview 手动上传（GitHub 没有接口能设置）。
