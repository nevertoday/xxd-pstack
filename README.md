<div align="center">

# pstack 新手教程

[English](./README.en.md) · **中文** · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Español](./README.es.md) · [Português](./README.pt.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Русский](./README.ru.md) · [العربية](./README.ar.md)

### AI 说「修好了」，你一打开，还是坏的。

[pstack](https://github.com/backnotprop/pstack) 让它改完先自己试一遍，再来跟你说。<br>这份教程用大白话把 pstack 讲清楚，不会写代码也能学会。

<a href="https://pstack.xiaoxiaodong.ai/start/1-why/"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/doors/zh-1-dark.svg"><img src="assets/doors/zh-1.svg" height="92" alt="没写过代码: 新手入门 3 课 · 20 分钟"></picture></a> <a href="https://pstack.xiaoxiaodong.ai/guide/0-what/"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/doors/zh-2-dark.svg"><img src="assets/doors/zh-2.svg" height="92" alt="会写代码: 9 步完整教程"></picture></a> <a href="https://pstack.xiaoxiaodong.ai/skills/"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/doors/zh-3-dark.svg"><img src="assets/doors/zh-3.svg" height="92" alt="想学写提示词: 34 个技能拆解"></picture></a>

<sub>免费 · 开源 · 10 种语言</sub>

![新手入门](https://img.shields.io/badge/新手入门-3_课-8A9A8C?style=flat-square)
![完整教程](https://img.shields.io/badge/完整教程-9_步-8A9A8C?style=flat-square)
![技能](https://img.shields.io/badge/技能速查-34_个-D7B9C8?style=flat-square)
![How-to](https://img.shields.io/badge/How--to-17_篇-C9A97A?style=flat-square)
![Wiki](https://img.shields.io/badge/Wiki-20_条-9AA8C4?style=flat-square)
![语言](https://img.shields.io/badge/语言-10_种-9AA8C4?style=flat-square)
![工具](https://img.shields.io/badge/Claude_Code_·_Cursor_·_Codex-✓-8A9A8C?style=flat-square)

</div>

<p align="center">
  <img src="assets/hero.svg" width="100%" alt="演示：输入一句 /poteto-mode 提示词，AI 列出修 bug 的步骤并逐项打勾，最后给出修前修后的证据">
</p>

<p align="center">
  <a href="#-为什么需要它">为什么</a> ·
  <a href="#-pstack-好用但自己学很难">难在哪</a> ·
  <a href="#-这份教程怎么帮你">亮点</a> ·
  <a href="#-它是怎么干活的">怎么干活</a> ·
  <a href="#-三分钟上手">上手</a> ·
  <a href="#️-34-个技能一张图">技能地图</a> ·
  <a href="#-在真实项目里">真实项目</a> ·
  <a href="#-放手让它跑一夜">跑一夜</a> ·
  <a href="#-本地运行">本地运行</a> ·
  <a href="https://pstack.xiaoxiaodong.ai">在线阅读</a>
</p>

## 😵 为什么需要它

用 AI 写代码，你多半经历过这些：

- 它说「已修复，应该没问题了」。你一跑，还是坏的。
- 你说「还是不行」，它说「抱歉」，又改一处。来回五轮，一个下午没了。
- 你只想改一个按钮，它顺手动了十几个文件。
- 新开一个对话，它把昨天踩过的坑又踩一遍。

<p align="center">
  <img src="assets/before-after.svg" width="100%" alt="对比：不用 pstack 时 AI 直接改代码、跳过复现和验证；用 pstack 时五步都做，并给出修前修后的证据">
</p>

不是模型不够聪明，是它做事没章法：没看懂就改，没试过就说做完。pstack 是 poteto（React 核心团队成员，在 Cursor 工作）每天自己写代码用的一套 Agent Skills。**模型还是那个模型，变的是做事的顺序和标准：**

| 什么时候 | 平常的 AI | 装了 pstack |
|:---|:---|:---|
| 动手之前 | 直接改 | 先用自己的话复述目标，先用 `/how` 读懂代码 |
| 修 bug | 在表面加个判断 | 先让问题再出现一次，找到**第一个出错的地方**再修 |
| 说「做完了」 | 「应该没问题了」 | 贴出真实的命令输出、存下来的值、前后对比 |
| 代码量 | 越改越多 | 能删就删，用最小的改动解决问题 |
| 同一个错 | 下次还犯 | 用 `/correct` 改仓库本身，让下一个 AI 犯不了 |
| 并行 | 几个 AI 抢同一个目录 | 各用各的 worktree，放心同时开好几个 |

> [!NOTE]
> pstack 会多派帮手 AI、让几个模型互相挑刺，所以**更慢、更费 token**。小改动不用它，怎么省见 [控制花费](https://pstack.xiaoxiaodong.ai/howto/cost/)。

## 🧗 pstack 好用，但自己学很难

pstack 是 poteto 写给自己用的。官方文档默认你已经是资深工程师：

- **一上来就是一堆名字**：34 个技能、23 套剧本、24 条原则，全是英文术语，不知道哪些必须学。
- **不知道第一步做什么**：装哪个版本？装完要不要配置？该打哪个命令？
- **会打命令也不会说**：提示词没写清「怎么算做完」，它照样跑偏，只是跑得更认真。
- **看不懂它的回复**：回复又长又专业，你不知道哪句要紧、哪句能跳过。

很多人装上试了一次，觉得「好像没什么不同」，就放下了。

## ✨ 这份教程怎么帮你

- **20 分钟从零到用上**：新手入门 3 课，一条路走到底。每一步都写了「你应该看到什么」，不对也有办法。
- **只学要用的**：平时只记一个命令 `/poteto-mode`，加一句三段式的话：**我想要什么 · 做好是什么样子 · 做完给我看什么**。其他内容都标明「遇到了再查」。
- **每种情况都有能照抄的提示词**：修 bug、加功能、重构、接手陌生项目、睡前交代……换掉尖括号里的内容就能发。
- **教你看懂回复**：它的复述、待办清单、检查结果在哪，怎么判断它做得对不对，跑偏时回哪一句。
- **从高手的提示词里学写法**：34 个技能都能读原文，每个还挑了几句拆开讲：这句让 AI 做了什么、为什么这样写、你写提示词时怎么借用。
- **说人话**：每页标题下有一句话，告诉你这页能帮你做成什么；生词悬停就有解释。
- **全球都能读**：首页和新手入门有 10 种语言，母语读者从第一课就能学。
- **跟着 pstack 更新**：内容核对到 pstack 当前版本，每个命令都对照过官方仓库。

## 🧭 它是怎么干活的

<p align="center">
  <img src="assets/how.svg" width="100%" alt="pstack 怎么干活：你说一句话、/poteto-mode 挑剧本、按步骤调技能、带证据交回来">
</p>

你只要记一个命令 `/poteto-mode`，说清楚**要什么**和**怎么算做完**。它从 23 套「剧本」里挑一套（修 bug、加功能、重构、查性能……），把步骤抄进待办清单，一步步调用其他技能。决定不做的步骤不会悄悄消失，会写明 `skip: 理由`。

## ⚡ 三分钟上手

**1. 装上**（按你的工具选一种）

```bash
# Claude Code（命令会带 pstack: 前缀，比如 /pstack:poteto-mode）
/plugin marketplace add cursor/plugins
/plugin install pstack@cursor-plugins

# Cursor
/add-plugin pstack

# Codex、OpenCode 等（Node.js 22.20+；加 -g 装到全局）
npx skills add backnotprop/pstack
```

**2. 选模型**：新开对话跑一次 `/setup-pstack`，问到要不要生成「验证技能」时选**要**。 用 Claude Code 的，会话模型和各角色怎么搭见 [三套推荐配置](https://pstack.xiaoxiaodong.ai/howto/claude-code/#怎么配最好)。

**3. 第一个任务**：挑一件真实但不大的事，像跟同事交代工作一样说：

```text
/poteto-mode 收藏列表刷新后偶尔会重复。先复现，不要先改代码。
修好的标准：连点十次收藏，列表和 chrome.storage 里都只有一条。
把修之前和修之后 storage 里的实际内容给我看。
```

> [!TIP]
> 一句好提示词最多五样东西：**目标**、**怎么算做完**、**想看什么证据**、**你已经知道的**、**不能碰的地方**。最好别写的两样：具体怎么做，和你猜的原因。详见 [第 3 步](https://pstack.xiaoxiaodong.ai/guide/3-first-task/)。

## 🗺️ 34 个技能，一张图

<p align="center">
  <img src="assets/skills.svg" width="100%" alt="pstack 技能地图：34 个技能分七类，外加 24 条原则">
</p>

平时只打 `/poteto-mode`，其他的它在需要时自己叫上。想点名用某一个、或者看到 AI 提到一个名字想查查，去 [技能速查](https://pstack.xiaoxiaodong.ai/skills/)：每个技能都有一句人话、什么时候用、能照抄的例句、要和谁一起装。点进去还能读它的 SKILL.md 原文和译文（可以对照着看），以及「从它的写法里学」：挑几句原文，讲这句让 AI 做什么、为什么这样写、你写提示词时怎么借用。

## 🛠 在真实项目里

每篇都有能直接复制的提示词，例子用的是 Chrome 插件、Astro 网站、Cloudflare 会员站这类真实场景。

| 你手上的活 | 看这篇 | 一句话要点 |
|:---|:---|:---|
| 修一个 bug | [先复现，再修，再证明](https://pstack.xiaoxiaodong.ai/howto/fix-bug/) | 先让问题再出现一次，再动手修 |
| 加一个功能 | [不碰坏旧的](https://pstack.xiaoxiaodong.ai/howto/add-feature/) | 说清楚哪些旧行为一点都不能变 |
| 重构 | [结构变，行为不变](https://pstack.xiaoxiaodong.ai/howto/refactor/) | 先录下现在的输出，改完证明没变 |
| 嫌它慢 | [拿数字说话](https://pstack.xiaoxiaodong.ai/howto/perf/) | 给一个测量值，不是一个感觉 |
| 接手陌生项目 | [先看懂再动手](https://pstack.xiaoxiaodong.ai/howto/new-codebase/) | 「先别改代码」让它只调查 |
| 提交前心里没底 | [让几个模型挑刺](https://pstack.xiaoxiaodong.ai/howto/review-branch/) | 只留下能跑出失败的问题 |
| 写文档 | [README、PR 说明](https://pstack.xiaoxiaodong.ai/howto/write-docs/) | 给别人用的代码，先写 README |
| 一个大迁移 | [睡前交给它](https://pstack.xiaoxiaodong.ai/howto/big-migration/) | 完成条件要能判断过没过，不写「做 4 小时」 |

还有 [照抄就能用的提示词](https://pstack.xiaoxiaodong.ai/howto/recipes/)、[跑偏了一句话拉回来](https://pstack.xiaoxiaodong.ai/howto/steer/)、[不知道该用哪个技能](https://pstack.xiaoxiaodong.ai/howto/which-skill/)。

## 🌙 放手让它跑一夜

<p align="center">
  <img src="assets/overnight.svg" width="100%" alt="放手让 AI 跑一晚上：每一轮检查完成条件、做最小改动、验证、提交或丢弃、记一行日志；早上看决策日志">
</p>

前面所有步骤的回报都在这里：一个**能自己验证**的 AI，才是你能放心留下来独自干活的 AI。睡前给它一份「合同」：目标、能判断过或不过的完成条件、一个新的 worktree、决策日志、一个卡住时的逃生口。早上先读 `/show-me-your-work` 回复里的「需要注意」，审决定，不重读整夜。详见 [第 7 步](https://pstack.xiaoxiaodong.ai/guide/7-overnight/)。

## 📚 站里有什么

- **[新手入门](https://pstack.xiaoxiaodong.ai/start/1-why/)**：3 课 20 分钟，不会写代码也能看懂 · 它能帮你什么 → 装上它 → 第一次用
- **[完整教程](https://pstack.xiaoxiaodong.ai/guide/0-what/)**：9 步，给会写代码的人 · 是什么 → 安装 → 选模型 → 第一个任务 → 先看懂 → 设计动手收拾 → 验证交付 → 跑一夜 → 用熟以后
- **[技能速查](https://pstack.xiaoxiaodong.ai/skills/)**：34 个技能，每个有原文、译文和写法拆解
- **[How-to](https://pstack.xiaoxiaodong.ai/howto/)**：17 篇，一篇只讲一件事
- **[Wiki](https://pstack.xiaoxiaodong.ai/wiki/)**：20 个概念 · 一句话 → 打个比方 → 在 pstack 里 → 常见误区；含 24 条原则和 23 套剧本对照表
- **[常见问题](https://pstack.xiaoxiaodong.ai/faq/)**：要钱吗？必须用 Cursor 吗？会不会乱改我的代码？
- **语言**：首页和新手入门有 10 种语言；完整教程、技能、How-to、Wiki、常见问题有中文和 English

页面右上角 <kbd>⌘</kbd> <kbd>K</kbd> 全站搜索，正文里**荧光笔**和**粗下划线**标的是重点，带虚线的词悬停就有一句话解释。

## 🧑‍💻 本地运行

```bash
npm install
npm run dev        # http://localhost:4420
npm run build      # 输出到 dist/
npm run release    # 构建并部署到 Cloudflare
```

```text
src/data/nav.js        站点结构：新手入门、完整教程、How-to 清单、术语表（唯一来源）
src/data/skills.js     技能速查的数据
src/data/wiki.js       Wiki 条目
src/data/faq.js        常见问题
src/pages/start/       新手入门三课（MDX）
src/pages/guide/       完整教程（MDX）
src/pages/howto/       How-to（MDX）
public/xxd/            小小东 UI Kit（自带一份，不走 CDN）
tools/build_assets.py  生成 README 插画、SVG 动画和分享大图（social.svg → social.png / public/og.png）
```

改内容、加页面、写作规矩见 [docs/MAINTAINING.md](docs/MAINTAINING.md)。README 里的图都由 `python3 tools/build_assets.py` 生成，改了文字或颜色重跑一次。

## 🙌 致谢

- [pstack](https://github.com/cursor/plugins/tree/main/pstack) 由 [poteto](https://x.com/poteto) 开发；本站用的是 [backnotprop/pstack](https://github.com/backnotprop/pstack) 这个通用镜像。教程内容依据它的 README 和 docs/guide 写成，命令和行为以官方仓库为准。
- 站点骨架来自 [小小东 VPS 教程站](https://vps.xiaoxiaodong.ai)，界面用 [小小东 UI Kit](https://ui.xiaoxiaodong.ai)，插画配色借自 [ghostty-tint](https://github.com/nevertoday/ghostty-tint)。

本站是非官方的入门教程。发现哪里没写清楚、照做不成功，欢迎 [提 Issue](https://github.com/nevertoday/xxd-pstack/issues)。

## 📄 License

教程文字和站点代码采用 [MIT](LICENSE)。`public/xxd/` 里的小小东 UI Kit 构建产物不在此列，适用它自己的 [LICENSE](public/xxd/LICENSE)（非商用免费，商用需授权）。

Copyright (c) 2026 [小小东 Xiaoxiaodong](https://x.com/xiaoxiaodong01)
