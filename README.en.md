<div align="center">

# pstack Beginner's Guide

**English** · [中文](./README.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Español](./README.es.md) · [Português](./README.pt.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Русский](./README.ru.md) · [العربية](./README.ar.md)

### Your AI says “fixed.” You open it. Still broken.

[pstack](https://github.com/backnotprop/pstack) makes it try its own work before it tells you it's done.<br>This guide explains pstack in plain words. You can learn it even if you've never written code.

<a href="https://pstack.xiaoxiaodong.ai/en/"><img src="assets/btn/en.svg" width="560" alt="Start learning: Free · up and running in 20 minutes · 10 languages"></a>

![Beginner track](https://img.shields.io/badge/Beginner_track-3_lessons-8A9A8C?style=flat-square)
![Guide](https://img.shields.io/badge/Guide-9_steps-8A9A8C?style=flat-square)
![Skills](https://img.shields.io/badge/Skills-34-D7B9C8?style=flat-square)
![How-to](https://img.shields.io/badge/How--to-17_guides-C9A97A?style=flat-square)
![Wiki](https://img.shields.io/badge/Wiki-20_entries-9AA8C4?style=flat-square)
![Languages](https://img.shields.io/badge/Languages-10-9AA8C4?style=flat-square)
![Tools](https://img.shields.io/badge/Claude_Code_·_Cursor_·_Codex-✓-8A9A8C?style=flat-square)

</div>

<p align="center">
  <img src="assets/en/hero.svg" width="100%" alt="Demo: type one /poteto-mode prompt; the AI lists the bug-fix steps, checks them off one by one, and ends with before-and-after evidence">
</p>

<p align="center">
  <a href="#-why-you-need-it">Why</a> ·
  <a href="#-pstack-is-great-but-hard-to-learn-alone">The hard part</a> ·
  <a href="#-how-this-guide-helps">Highlights</a> ·
  <a href="#-how-it-works">How it works</a> ·
  <a href="#-get-started-in-three-minutes">Get started</a> ·
  <a href="#️-34-skills-one-map">Skill map</a> ·
  <a href="#-in-real-projects">Real projects</a> ·
  <a href="#-let-it-run-overnight">Overnight</a> ·
  <a href="#-run-it-locally">Run locally</a> ·
  <a href="https://pstack.xiaoxiaodong.ai/en/">Read online</a>
</p>

## 😵 Why you need it

If you've coded with AI, you've probably lived through these:

- It says "Fixed, should be fine now." You run it. Still broken.
- You say "still broken." It says "sorry" and changes something else. Five rounds later, your afternoon is gone.
- You asked it to change one button. It touched a dozen files.
- In a new chat, it falls into the same hole it fell into yesterday.

<p align="center">
  <img src="assets/en/before-after.svg" width="100%" alt="Comparison: without pstack the AI edits code right away and skips reproducing and verifying; with pstack it does all five steps and shows before-and-after evidence">
</p>

The model isn't too dumb. It just works without a method: it changes code it hasn't understood, and calls things done without trying them. pstack is the set of Agent Skills that poteto (a React core team member who works at Cursor) uses to write code every day. **The model stays the same. What changes is the order it works in and the bar it holds itself to:**

| | Typical AI | With pstack |
|---|---|---|
| Before touching code | Edits right away | Restates the goal in its own words, reads the code with `/how` first |
| Fixing a bug | Adds a check on the surface | Makes the bug happen again, finds **the first place it goes wrong**, then fixes |
| Saying "done" | "Should be fine now" | Pastes real command output, stored values, before-and-after comparisons |
| Amount of code | Keeps growing | Deletes what it can, solves it with the smallest change |
| The same mistake | Makes it again next time | `/correct` changes the repo itself, so the next AI can't make it |
| Parallel work | Several AIs fight over one folder | Each gets its own worktree, so you can safely run several at once |

> [!NOTE]
> pstack sends out more helper AIs and has several models pick holes in each other's work, so it's **slower and uses more tokens**. Skip it for small changes. For ways to save, see [Keep costs down](https://pstack.xiaoxiaodong.ai/en/howto/cost/).

## 🧗 pstack is great, but hard to learn alone

poteto wrote pstack for their own use. The official docs assume you're already a senior engineer:

- **A wall of names on day one**: 34 skills, 23 playbooks, 24 principles, all jargon. Which ones do you actually need?
- **No obvious first step**: which version do you install? Do you need to configure it? Which command do you type?
- **Knowing the command isn't enough**: if your prompt doesn't say what "done" means, it still drifts. It just drifts more carefully.
- **Replies you can't read**: long and technical. You can't tell which line matters and which you can skip.

Plenty of people install it, try it once, think "it's not that different," and give up.

## ✨ How this guide helps

- **From zero to using it in 20 minutes**: three beginner lessons, one path. Every step says what you should see, and what to do if you don't.
- **Learn only what you need**: one command, `/poteto-mode`, plus one three-part message: **what I want · what done looks like · what to show me when it's done**. Everything else is marked "look it up when you need it."
- **A copy-ready prompt for every situation**: fixing a bug, adding a feature, refactoring, taking over a strange codebase, handing work over before bed. Swap the parts in angle brackets and send.
- **Learn to read its replies**: where to find its restatement, its todo list and its checks, how to tell whether it did well, and what one line to send when it drifts.
- **Learn prompt writing from an expert**: read the full text of all 34 skills, with a few sentences from each taken apart: what the line makes the AI do, why it's worded that way, and how to borrow it.
- **Plain words**: every page opens with one line on what it helps you get done, and unfamiliar terms explain themselves on hover.
- **Readable worldwide**: the home page and beginner lessons come in 10 languages, so you can start in your own.
- **Kept current**: checked against the current pstack release; every command matches the official repo.

**Where to start**

- **Never written code**: the [3 beginner lessons](https://pstack.xiaoxiaodong.ai/en/start/1-why/), 20 minutes. Learn to have AI build small pages and tools for you, and to tell whether it got them right.
- **You code**: the [9-step guide](https://pstack.xiaoxiaodong.ai/en/guide/0-what/) and 17 how-tos, from your first task to letting it work alone overnight.
- **You want to get better at talking to AI**: each of the [34 skills](https://pstack.xiaoxiaodong.ai/en/skills/) comes with its full text and a breakdown of how it's worded. See how an expert writes prompts.

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

**2. Pick models**: in a new conversation, run `/setup-pstack` once. When it asks whether to generate a "verification skill", say **yes**. On Claude Code, see [three recommended setups](https://pstack.xiaoxiaodong.ai/en/howto/claude-code/#how-to-set-it-up-well) for pairing the session model with each role.

**3. Your first task**: pick something real but not big, and explain it the way you'd hand work to a coworker:

```text
/poteto-mode Favorites sometimes show up twice after a refresh. Reproduce it first; don't change any code yet.
Done means: after clicking Favorite ten times in a row, the list and chrome.storage each have exactly one entry.
Show me the actual storage contents before and after the fix.
```

> [!TIP]
> A good prompt has at most five things: **the goal**, **what counts as done**, **what evidence you want**, **what you already know**, and **what must not be touched**. Two things are better left out: exactly how to do it, and your guess at the cause. More in [Step 3](https://pstack.xiaoxiaodong.ai/en/guide/3-first-task/).

## 🗺️ 34 skills, one map

<p align="center">
  <img src="assets/en/skills.svg" width="100%" alt="pstack skill map: 34 skills in seven groups, plus 24 principles">
</p>

Day to day you only type `/poteto-mode`; it calls the others when it needs them. If you want to call one by name, or the AI mentions a name you want to look up, see the [Skill reference](https://pstack.xiaoxiaodong.ai/en/skills/): each skill has a plain-language summary, when to use it, an example you can copy, and what to install with it. Open a skill to read its full SKILL.md and "what its wording teaches": a few sentences from the original, what each makes the AI do, why it's written that way, and how to borrow it in your own prompts.

## 🛠 In real projects

Every guide has prompts you can copy as is, with examples from real setups like a Chrome extension, an Astro site and a Cloudflare members' site.

| The job in front of you | Read this | The gist |
|---|---|---|
| Fix a bug | [Reproduce, fix, prove it](https://pstack.xiaoxiaodong.ai/en/howto/fix-bug/) | Make the bug happen again before anything gets fixed |
| Add a feature | [Without breaking old ones](https://pstack.xiaoxiaodong.ai/en/howto/add-feature/) | Say which existing behavior must not change at all |
| Refactor | [New structure, same behavior](https://pstack.xiaoxiaodong.ai/en/howto/refactor/) | Record the current output first, then prove it didn't change |
| It's too slow | [Make it faster, with numbers](https://pstack.xiaoxiaodong.ai/en/howto/perf/) | Give it a measurement, not a feeling |
| Take over an unfamiliar project | [Understand before you touch it](https://pstack.xiaoxiaodong.ai/en/howto/new-codebase/) | "Don't change any code yet" keeps it to investigating |
| Unsure before you ship | [Let several models pick holes](https://pstack.xiaoxiaodong.ai/en/howto/review-branch/) | Only keep the problems that can be shown failing |
| Write docs | [READMEs, PR descriptions](https://pstack.xiaoxiaodong.ai/en/howto/write-docs/) | For code others will use, write the README first |
| A big migration | [Hand it over before bed](https://pstack.xiaoxiaodong.ai/en/howto/big-migration/) | A done condition that passes or fails, not "work for 4 hours" |

There's also [Copy-paste prompts](https://pstack.xiaoxiaodong.ai/en/howto/recipes/), [Pull it back on track in one sentence](https://pstack.xiaoxiaodong.ai/en/howto/steer/) and [Not sure which skill to use](https://pstack.xiaoxiaodong.ai/en/howto/which-skill/).

## 🌙 Let it run overnight

<p align="center">
  <img src="assets/en/overnight.svg" width="100%" alt="Letting the AI run overnight: each round it checks the done condition, makes the smallest change, verifies, commits or discards, and logs one line; in the morning you read the decision log">
</p>

This is where all the earlier steps pay off: only an AI that **can verify its own work** is one you can safely leave to work alone. Before bed, give it a "contract": the goal, a done condition that clearly passes or fails, a fresh worktree, a decision log, and an escape hatch for when it gets stuck. In the morning, read the "needs attention" part of the `/show-me-your-work` reply first. You review decisions instead of rereading the whole night. More in [Step 7](https://pstack.xiaoxiaodong.ai/en/guide/7-overnight/).

## 📚 What's on the site

| Section | What's in it |
|---|---|
| [Beginner track](https://pstack.xiaoxiaodong.ai/en/start/1-why/) | 3 lessons, 20 minutes, no coding needed: what it does for you → install it → use it for the first time |
| [Full guide](https://pstack.xiaoxiaodong.ai/en/guide/0-what/) | 9 steps for people who code: what it is → install → pick models → first task → understand first → design, build, clean up → verify and ship → run overnight → once you're comfortable |
| [Skill reference](https://pstack.xiaoxiaodong.ai/en/skills/) | 34 skills, each with its full text and a breakdown of its wording |
| [How-to](https://pstack.xiaoxiaodong.ai/en/howto/) | 17 guides, one task each |
| [Wiki](https://pstack.xiaoxiaodong.ai/en/wiki/) | 20 concepts: one sentence → an analogy → in pstack → common mistakes; includes tables of the 24 principles and 23 playbooks |
| [FAQ](https://pstack.xiaoxiaodong.ai/en/faq/) | Does it cost money? Do I have to use Cursor? Will it mess up my code? |
| Languages | Home page and beginner lessons: 10 languages. Full guide, skills, how-tos, wiki and FAQ: English and 中文 |

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
src/pages/start/       Beginner track, 3 lessons (MDX)
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
