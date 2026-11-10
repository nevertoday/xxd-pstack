<div align="center">

# pstack Beginner's Guide

[中文](./README.md) · **English** · [한국어](./README.ko.md) · [日本語](./README.ja.md) · [العربية](./README.ar.md) · [Español](./README.es.md) · [Français](./README.fr.md) · [Русский](./README.ru.md) · [Deutsch](./README.de.md) · [Português](./README.pt.md)

**Make AI write code like a senior engineer you can trust: understand first, then change, then show the evidence.**

A plain-language beginner's guide to [pstack](https://github.com/backnotprop/pstack), from typing your first install command to letting it run overnight on a real project.

### 👉 [Read it online: pstack.xiaoxiaodong.ai/en](https://pstack.xiaoxiaodong.ai/en/)

![Guide](https://img.shields.io/badge/Guide-9_steps-8A9A8C?style=flat-square)
![Skills](https://img.shields.io/badge/Skills-34-D7B9C8?style=flat-square)
![How-to](https://img.shields.io/badge/How--to-17_guides-C9A97A?style=flat-square)
![Wiki](https://img.shields.io/badge/Wiki-20_entries-9AA8C4?style=flat-square)
![Tools](https://img.shields.io/badge/Claude_Code_·_Cursor_·_Codex-✓-8A9A8C?style=flat-square)

</div>

<p align="center">
  <img src="assets/en/hero.svg" width="100%" alt="Demo: type one /poteto-mode prompt; the AI lists the bug-fix steps, checks them off one by one, and ends with before-and-after evidence">
</p>

<p align="center">
  <a href="#-why-you-need-it">Why</a> ·
  <a href="#-how-it-works">How it works</a> ·
  <a href="#-get-started-in-three-minutes">Get started</a> ·
  <a href="#️-34-skills-one-map">Skill map</a> ·
  <a href="#-in-real-projects">Real projects</a> ·
  <a href="#-let-it-run-overnight">Overnight</a> ·
  <a href="#-run-it-locally">Run locally</a> ·
  <a href="https://pstack.xiaoxiaodong.ai/en/">Read online</a>
</p>

## 😵 Why you need it

If you've written code with AI, you've probably seen this: it starts editing right away, changes something in a plausible-looking spot, then tells you "Fixed, should be fine now." You run it, and it's still broken.

<p align="center">
  <img src="assets/en/before-after.svg" width="100%" alt="Comparison: without pstack the AI edits code right away and skips reproducing and verifying; with pstack it does all five steps and shows before-and-after evidence">
</p>

pstack is the pack of Agent Skills that poteto (a React core team member who works at Cursor) uses to write code every day. **The model stays the same. What changes is the order it works in and the bar it holds itself to:**

| | Typical AI | With pstack |
|---|---|---|
| Before touching code | Edits right away | Restates the goal in its own words, reads the code with `/how` first |
| Fixing a bug | Adds a check on the surface | Reproduces it first, finds **the first place it goes wrong**, then fixes |
| Saying "done" | "Should be fine now" | Pastes real command output, stored values, before-and-after comparisons |
| Amount of code | Keeps growing | First principle: delete what you can, solve it with the smallest change |
| Parallel work | Several AIs fight over one folder | Each gets its own worktree, so you can safely run several at once |

> [!NOTE]
> pstack sends out more subagents and has several models pick holes in each other's work, so it's **slower and uses more tokens**. That's the price of being thorough. Skip it for small changes. For ways to save, see [Keep costs down](https://pstack.xiaoxiaodong.ai/en/howto/cost/).

## 🧭 How it works

<p align="center">
  <img src="assets/en/how.svg" width="100%" alt="How pstack works: you say what you want, /poteto-mode picks a playbook, calls skills step by step, and comes back with evidence">
</p>

You only need to remember one command, `/poteto-mode`, and say clearly **what you want** and **what counts as done**. It picks one of 23 "playbooks" (fix a bug, add a feature, refactor, chase performance...), copies the steps into a todo list, and calls the other skills one step at a time. Steps it decides to skip don't quietly vanish; they're marked `skip: reason`.

## ⚡ Get started in three minutes

**1. Install** (pick the one for your tool)

```bash
# Claude Code (commands get a pstack: prefix, e.g. /pstack:poteto-mode)
/plugin marketplace add cursor/plugins
/plugin install pstack@cursor-plugins

# Cursor
/add-plugin pstack

# Codex, OpenCode and others (Node.js 22.20+; add -g to install globally)
npx skills add backnotprop/pstack
```

**2. Pick models**: in a new conversation, run `/setup-pstack` once. When it asks whether to generate a "verification skill", say **yes**.

**3. Your first task**: pick something real but not big, and explain it the way you'd hand work to a coworker:

```text
/poteto-mode Favorites sometimes show up twice after a refresh. Reproduce it first; don't change any code yet.
Done means: after clicking Favorite ten times in a row, the list and chrome.storage each have exactly one entry.
Show me the actual storage contents before and after the fix.
```

> [!TIP]
> A good prompt has at most five things: **the goal**, **what counts as done**, **what evidence you want**, **what you already know**, and **real constraints**. Two things are better left out: exactly how to do it, and your guess at the cause. More in [Step 3](https://pstack.xiaoxiaodong.ai/en/guide/3-first-task/).

## 🗺️ 34 skills, one map

<p align="center">
  <img src="assets/en/skills.svg" width="100%" alt="pstack skill map: 34 skills in seven groups, plus 24 principles">
</p>

Day to day you only type `/poteto-mode`; it calls the others when it needs them. If you want to call one by name, or the AI mentions a name you want to look up, see the [Skill reference](https://pstack.xiaoxiaodong.ai/en/skills/): each skill has a plain-language summary, when to use it, an example you can copy, and what to install with it.

## 🛠 In real projects

Every guide has prompts you can copy as is, with examples from real setups like a Chrome extension, an Astro site and a Cloudflare members' site.

| The job in front of you | Read this | The gist |
|---|---|---|
| Fix a bug | [Reproduce, fix, prove it](https://pstack.xiaoxiaodong.ai/en/howto/fix-bug/) | "Reproduce first" is a constraint, not a pleasantry |
| Add a feature | [Without breaking old ones](https://pstack.xiaoxiaodong.ai/en/howto/add-feature/) | Say which existing behavior must not change by a single byte |
| Refactor | [New structure, same behavior](https://pstack.xiaoxiaodong.ai/en/howto/refactor/) | Record the current output first, then prove it didn't change |
| It's too slow | [Make it faster, with numbers](https://pstack.xiaoxiaodong.ai/en/howto/perf/) | Give it a measurement, not a feeling |
| Take over an unfamiliar project | [Understand before you touch it](https://pstack.xiaoxiaodong.ai/en/howto/new-codebase/) | "Don't change any code yet" keeps it to investigating |
| Unsure before you ship | [Let several models pick holes](https://pstack.xiaoxiaodong.ai/en/howto/review-branch/) | Only keep the problems that can be shown failing |
| Write docs | [READMEs, PR descriptions](https://pstack.xiaoxiaodong.ai/en/howto/write-docs/) | For code others will use, write the README first |
| A big migration | [Hand it over before bed](https://pstack.xiaoxiaodong.ai/en/howto/big-migration/) | "Work for 4 hours" is not a done condition |

There's also [Copy-paste prompts](https://pstack.xiaoxiaodong.ai/en/howto/recipes/), [Pull it back on track in one sentence](https://pstack.xiaoxiaodong.ai/en/howto/steer/) and [Not sure which skill to use](https://pstack.xiaoxiaodong.ai/en/howto/which-skill/).

## 🌙 Let it run overnight

<p align="center">
  <img src="assets/en/overnight.svg" width="100%" alt="Letting the AI run overnight: each round it checks the done condition, makes the smallest change, verifies, commits or discards, and logs one line; in the morning you read the decision log">
</p>

This is where all the earlier steps pay off: only an AI that **can verify its own work** is one you can safely leave to work alone. Before bed, give it a "contract": the goal, a done condition that clearly passes or fails, a fresh worktree, a decision log, and an escape hatch for when it gets stuck. In the morning, read the "needs attention" part of the `/show-me-your-work` reply first. You review decisions instead of rereading the whole night. More in [Step 7](https://pstack.xiaoxiaodong.ai/en/guide/7-overnight/).

## 📚 What's on the site

| Section | What's in it |
|---|---|
| [Guide](https://pstack.xiaoxiaodong.ai/en/guide/0-what/) | 9 steps, read in order: what it is → install → pick models → first task → understand first → design, build, clean up → verify and ship → run overnight → make it your own |
| [Skill reference](https://pstack.xiaoxiaodong.ai/en/skills/) | 34 skills, one card each |
| [How-to](https://pstack.xiaoxiaodong.ai/en/howto/) | 17 guides, one task each |
| [Wiki](https://pstack.xiaoxiaodong.ai/en/wiki/) | 20 concepts: one sentence → an analogy → in pstack → common mistakes; includes tables of the 24 principles and 23 playbooks |
| [FAQ](https://pstack.xiaoxiaodong.ai/en/faq/) | Does it cost money? Do I have to use Cursor? Will it mess up my code? |

Press <kbd>⌘</kbd> <kbd>K</kbd> at the top right of any page to search the whole site. In the text, **highlighter** and **bold underline** mark the key points, and dotted-underlined terms show a one-line explanation on hover.

## 🧑‍💻 Run it locally

```bash
npm install
npm run dev        # http://localhost:4420
npm run build      # outputs to dist/
npm run release    # build and deploy to Cloudflare
```

```text
src/data/nav.js        Site structure: guide, How-to list, glossary (single source)
src/data/skills.js     Data for the skill reference
src/data/wiki.js       Wiki entries
src/data/faq.js        FAQ
src/pages/guide/       Guide (MDX)
src/pages/howto/       How-to (MDX)
public/xxd/            Xiaoxiaodong UI Kit (bundled copy, no CDN)
tools/build_assets.py  Generates README illustrations, SVG animations and the share image (social.svg → social.png / public/og.png)
```

For editing content, adding pages and writing rules, see [docs/MAINTAINING.md](docs/MAINTAINING.md) (in Chinese). All images in the README are generated by `python3 tools/build_assets.py`; rerun it after changing text or colors.

## 🙌 Thanks

- [pstack](https://github.com/cursor/plugins/tree/main/pstack) is built by [poteto](https://x.com/poteto); this site uses [backnotprop/pstack](https://github.com/backnotprop/pstack), a general-purpose mirror. The guide is based on its README and docs/guide; the official repository is the source of truth for commands and behavior.
- The site skeleton comes from the [Xiaoxiaodong VPS tutorial site](https://vps.xiaoxiaodong.ai), the interface uses the [Xiaoxiaodong UI Kit](https://ui.xiaoxiaodong.ai), and the illustration colors are borrowed from [ghostty-tint](https://github.com/nevertoday/ghostty-tint).

This is an unofficial beginner's guide. If something isn't clear, or following the steps doesn't work, please [open an issue](https://github.com/nevertoday/xxd-pstack/issues).

## 📄 License

The tutorial text and site code are under [MIT](LICENSE). The Xiaoxiaodong UI Kit build in `public/xxd/` is not covered; it has its own [LICENSE](public/xxd/LICENSE) (free for noncommercial use, commercial use needs a license).

Copyright (c) 2026 [小小东 Xiaoxiaodong](https://x.com/xiaoxiaodong01)
