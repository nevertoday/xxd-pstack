# 维护说明

把 [pstack](https://github.com/backnotprop/pstack)（poteto 的 AI 编程技能包）讲给第一次接触的人：说人话，从入门到在真实项目里用起来。
四块内容：主线教程（按顺序 0–8 步）、技能速查（34 个技能）、How-to（具体怎么做）、Wiki（这是什么）、常见问题。

- 站点骨架沿用 [小小东 VPS 教程站](https://vps.xiaoxiaodong.ai)（`../小小东VPS/site`）：同样的外壳、组件、搜索和写作规矩。
- 界面用 xxd-ui-kit（`public/xxd/` 里自带一份，不走 CDN）。
- 目前只有中文。`data/nav.js` 里的 `langOf` / `t` 保留着，加英文时照 VPS 站的做法在 `/en/` 下补一套。

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
- **Wiki** 和 **常见问题** 只改数据：`src/data/wiki.js`、`src/data/faq.js`。Wiki 条目可以带一张 `list` 表。
- **教程组件**（在 MDX 里 import）：`Callout`（`ok` / `warn` / `no` / `tip`）、`Term`（术语，`k` 对应 `GLOSSARY`）、`Checkpoint`（可打勾的检查点）、`Q`（「卡住了？」里的一条）、`Tabs`（按工具切换）、`Copy`（带复制按钮的提示词或命令）、`Cmd`（正文里一点就复制的命令）、`Shot`（配图）。
- **搜索**（⌘K）自动收录主线每一步、每篇 How-to、每个技能、每个 Wiki 条目和每条常见问题，正文按小节做全文搜索。
- **UI Kit 升级**：在 xxd-ui-kit 里 `pnpm xxd sync <本目录>`，不要手改 `public/xxd/`。改完界面跑 `pnpm xxd doctor <本目录>`。

## 写作规矩

- 站在第一次接触的人的角度：先说这一步做什么、为什么，再说怎么做，最后说应该看到什么。
- 说人话：短句、具体、不堆术语；第一次出现的术语用 `Term` 包起来。
- 提示词用中文写，技能名和原则名保留英文（`/how`、`prove it works`），AI 才认得。
- 只写 pstack 仓库里写明了的行为和命令；会变的东西（默认模型、剧本数量、命令前缀）以 [pstack 仓库](https://github.com/backnotprop/pstack) 为准，变了就改 `data/` 里对应的那一处。
- 作者 poteto 一律称「作者」或「poteto」，不用他 / 她。
- MDX 正文里不能出现裸的 `<`、`{`、`}`：占位符写在代码里，比如 `` `<你的应用名>` ``。

## 部署

线上：<https://pstack.xiaoxiaodong.ai>　仓库：<https://github.com/nevertoday/xxd-pstack>（Cloudflare Workers 静态资源，2026-11-09 首次部署）。
更新：`npm run release`（构建后 `wrangler deploy`，需要先 `npx wrangler login`），配置在 `wrangler.jsonc`。
