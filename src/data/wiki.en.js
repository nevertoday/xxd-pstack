// English Wiki entries: same slugs and structure as wiki.js. Only the text fields; slug/see/step/howto come from wiki.js.
// Same plain-words rules as the Chinese (docs/MAINTAINING.md): short sentences, one idea each, at most one ==highlight== per entry.
export const WIKI_GROUPS_EN = {
  "基本概念": "Basics",
  "pstack 怎么干活": "How pstack works",
  "验证和证据": "Verification and evidence",
  "原则": "Principles",
};

export const WIKI_EN = {
  // ---------- Basics ----------
  "pstack": {
    title: "What pstack is", group: "Basics",
    one: "pstack is a free set of work rules for AI coding tools. It makes the AI work like a seasoned engineer.",
    like: "Like handing a smart but hasty new teammate a handbook. Same person, but now the work has a method.",
    here: [
      "It's 34 skills and 24 principles, all instruction files written for the AI. The rules are simple. Before fixing a bug, make it happen again. Before changing code, read it. ==Before saying \"done\", show proof.==",
      "The author is poteto, and this is the setup the author uses in Cursor every day. The official version is written for Cursor. Claude Code and Codex users usually install [the mirror](https://github.com/backnotprop/pstack). It syncs with the official version daily and works in any tool.",
    ],
    myths: [
      "\"It's a new model, or an app\": neither. It's a set of instruction files you add to the AI coding tool you already use.",
      "\"Installing it makes the AI smarter\": the model stays the same. What changes is the order and the standard of the work.",
      "\"It only works in Cursor\": the mirror works in Claude Code, Codex, OpenCode and Pi. A few Cursor-only features get skipped.",
    ],
  },
  "agent-skill": {
    title: "Agent Skill", group: "Basics",
    one: "A skill is a how-to written for the AI: for this kind of task, do it this way.",
    like: "Like a recipe. The chef can already cook, but with a recipe the dish comes out the same every time.",
    here: [
      "Each skill is a folder with a `SKILL.md` file inside. Some also carry reference material and scripts. For example, `/statechart` comes with a set of TypeScript tools.",
      "It's an [open format](https://agentskills.io), so the same skill can be installed in different AI tools.",
    ],
    myths: [
      "\"A skill is just a very long prompt\": close. The difference is the AI only reads it when it needs it, so it doesn't fill up the chat.",
      "\"More skills is better\": you don't need many on day one. ==When the same problem shows up twice, add a skill or a check.==",
    ],
  },
  "skill-md": {
    title: "SKILL.md", group: "Basics",
    one: "SKILL.md is the body of a skill: its name and when to use it first, then the steps and rules.",
    like: "Like a medicine leaflet. The AI reads the \"what it's for\" line at the top to decide. If it's a match, it reads on.",
    here: [
      "The opening lines are called frontmatter. For example, `/poteto-mode` has `disable-model-invocation: true`. That means the AI never turns it on by itself: **you have to type `/poteto-mode` yourself**.",
      "To change how pstack works, you edit these files. The author suggests using the \"write a skill\" playbook, then the Eval playbook to test whether the change helped. Don't patch skills in the middle of a task.",
    ],
    myths: [
      "\"I can just dash off a SKILL.md\": text for an AI has a higher bar. ==One useless sentence becomes something every future AI will do.== The \"write a skill\" playbook checks the format and links for you.",
    ],
  },
  "harness": {
    title: "Host tools (Claude Code, Cursor, Codex)", group: "Basics",
    one: "The host is the tool that actually runs the AI, like Claude Code or Cursor. pstack is installed inside it.",
    like: "pstack is the handbook; the host is the desk. The same handbook works much the same at any desk.",
    here: [
      "pstack was written for Cursor. In other tools, the Cursor names in the skills map to local ones. pstack ships with a mapping table, and the AI reads it on its own.",
      "A few features exist only in Cursor, like Automations, Bugbot and cloud agents. In other tools, steps that need them are skipped with a one-line note.",
    ],
    list: [
      ["Cursor", "Native. Install with `/add-plugin pstack`"],
      ["Claude Code", "Add `pstack:`, like `/pstack:poteto-mode`"],
      ["Codex, OpenCode, Pi, etc.", "Install with `npx skills add backnotprop/pstack`"],
    ],
    listTitle: "Common hosts", listHead: ["Host", "What to watch for"],
    myths: [
      "\"A different tool needs a different pstack\": one mirror works everywhere. ==Only the install method, the command prefix and a few file paths differ.==",
    ],
  },
  "slash": {
    title: "Slash commands", group: "Basics",
    one: "Typing a word that starts with `/` asks the AI to use a specific skill, like `/how`.",
    like: "Like ordering a dish by name. It's faster and more precise than describing what you feel like.",
    here: [
      "Day to day, you type `/poteto-mode` followed by your task and send them together. The AI never picks up the other skills by itself (except `/setup-pstack`). Either you name one, or `/poteto-mode` reads it when it's needed.",
      "The prefix depends on the tool. With the Claude Code plugin, add `pstack:`, like `/pstack:how`. In Codex, use `$`, like `$how`.",
    ],
    myths: [
      "\"Naming more skills in one message is better\": the pstack docs warn about this. Writing \"first /how, then /architect\" often breaks the order it already planned. ==Just say what you want and what it must not touch.== Only name a skill to replace a default choice.",
    ],
  },
  "token-budget": {
    title: "Tokens and the reasoning budget", group: "Basics",
    one: "Tokens are the unit AI usage is billed in. The reasoning budget sets how long it thinks at each step.",
    like: "Like hiring a contractor. A quick look and start is cheap. Measuring, drawing plans and a second check costs more, but you redo less.",
    here: [
      "pstack sends out helper AIs and has several models review together, and all of that costs tokens. So by default it's slower and pricier, but more careful. `/setup-pstack` asks you to pick a tier. `large` is the default (xhigh). `unlimited` runs every model at its highest. `medium` and `small` cost less.",
      "Three ways to save. Use a cheap, fast model for the coding roles. Shrink the review panel. Skip `/poteto-mode` for small changes.",
    ],
    myths: [
      "\"`auto` is a model name\": it means \"no specific model; use the same one as the main chat\". `inherit-parent` means the same.",
      "\"A higher budget is always better\": ==hard problems deserve a high budget. For everyday changes it's just slower and pricier.==",
    ],
  },
  "pr": {
    title: "PRs, commits and merging", group: "Basics",
    one: "A PR is a request: \"please review these changes\". Once approved, they're merged into the main branch.",
    like: "Like handing in homework. Your draft can be messy, the copy you hand in is neat, and it counts once the teacher signs off.",
    here: [
      "By default, pstack wraps up every task as a PR. The \"open a PR\" playbook sorts the changes into a few small commits. It writes the title and description, then gives you the link. The author's view: five small PRs beat one big one.",
      "Once the PR is open, the \"Babysit\" playbook watches it. It resolves conflicts, answers reviews and fixes the automated checks (CI). **It never merges.** To merge, you say \"land the stack\" and the \"Shipping\" playbook takes over.",
    ],
    myths: [
      "\"All-green CI means it's safe to merge\": ==green doesn't mean safe.== The Shipping playbook sends a different AI, one that didn't write the code, to check each PR for real. Only the ones that pass get merged.",
      "\"You can't use pstack without GitHub\": only the PR steps need it. Changing code locally or tracking down a problem doesn't.",
    ],
  },

  // ---------- How pstack works ----------
  "poteto-mode": {
    title: "/poteto-mode", group: "How pstack works",
    one: "`/poteto-mode` is the main entry point. You say what you want; it plans the steps, does the work, and shows you proof.",
    like: "Like an experienced project manager. They repeat the request back, pick the right process, and only hand it over after checking.",
    here: [
      "Its first reply repeats what you want and the problem you're solving. It also names the smallest change it expects. It **doesn't wait for your OK** before carrying on. If it misread you, interrupt right away.",
      "After that, \"continue\" or \"go ahead\" is enough, and it keeps going. In Cursor, you can also set it as a Custom Mode so it stays on.",
    ],
    myths: [
      "\"Use it for everything\": the author says ==save it for work that needs rigor==. For a one-line text change, just ask.",
      "\"I need to write long requirements\": you don't. One sentence each: what you want, what counts as done, and any leads.",
      "\"It'll ask me a pile of questions first\": if running something can answer it, it tries a quick test. It only asks you when it needs your call.",
    ],
  },
  "playbook": {
    title: "Playbooks", group: "How pstack works",
    one: "A playbook is the fixed set of steps for one kind of task. You describe the task; it picks one and follows it.",
    like: "Like hospital triage. You describe the symptoms, the nurse sends you to the right department, and each department has its own routine.",
    here: [
      "`/poteto-mode` has 23 playbooks. You don't name one: describe the task and it picks. If nothing fits, it uses `/figure-it-out` to design one on the spot.",
      "A few phrases change its choice. \"Don't change code yet\": investigate only. \"New task\": treat it as something new and pick again. \"I'm going to bed\": keep working on its own for a long stretch.",
    ],
    list: [
      ["Investigation", "Look, don't touch; learn how it works"],
      ["Bug fix", "Repro, find the cause, fix, verify"],
      ["Perf issue", "Start from a measured slowdown; compare"],
      ["Hillclimb", "Push one metric up, step by step"],
      ["Runtime forensics / Trace forensics", "Find the cause from live symptoms; no fix"],
      ["Feature", "New feature; settle the data shape first"],
      ["Refactoring", "Change structure; behavior stays the same"],
      ["Prototype", "Build a few drafts; decide on results"],
      ["Visual parity", "Make two versions match pixel for pixel"],
      ["Write a skill / Eval", "Write or edit a skill; test the change"],
      ["Babysit", "Watch a PR until it can merge"],
      ["Shipping", "Verify each PR, then merge in order"],
      ["Autonomous / Orchestrate", "Run a long task to the end; run big projects"],
      ["Autopilot-full / Autopilot-stack", "Run PRs to merge, or verify and wait for you"],
      ["Take over / Safe pause", "Pick up unfinished work; stop cleanly"],
      ["Multi-phase plan", "Plan first for multi-phase, multi-PR work"],
      ["Clean up worktrees", "Delete unused worktrees to free disk"],
      ["Open a PR", "Wrap up: tidy commits, write the description"],
    ],
    listTitle: "The 23 playbooks (some grouped)", listHead: ["Playbook", "What it's for"],
    myths: [
      "\"I have to learn all 23 first\": no. ==You describe the task; picking the playbook is its job.== This table just helps you read the to-do list.",
      "\"Every step in the playbook runs\": not always. Steps it doesn't need stay on the list, marked `skip:` with a reason.",
    ],
  },
  "todo": {
    title: "The to-do list and skip", group: "How pstack works",
    one: "The to-do list is the steps it writes down when it starts. Skipped steps stay on it, marked `skip:` with a reason.",
    like: "Like a pilot's pre-flight checklist. Every item is read out, and the ones that don't apply say why.",
    here: [
      "==Reading the list is the easiest way to keep an eye on the AI.== Which approach it chose, which steps it plans, what it skipped: all at a glance. If it skipped something it shouldn't, say \"don't skip step 3, make the problem happen again first\".",
      "The first items are the chosen playbook's steps, copied as-is. In Claude Code, it uses the TodoWrite tool if the session has one. If not, it writes the list in its reply and updates it at each stage.",
    ],
    myths: [
      "\"A longer list means more care\": the length depends on the type of task. What matters is that no step gets skipped quietly.",
    ],
  },
  "subagent": {
    title: "Subagents", group: "How pstack works",
    one: "A subagent is a helper AI sent off to do one small job. It reads a lot, then brings back only the conclusion.",
    like: "Like an editor sending a reporter out. The reporter spends all day in the field and comes back with one article, not a pile of notes.",
    here: [
      "Many pstack skills send out helpers. `/how` sends a few to read code without changing it. `/arena` has several each write a solution. `/swarm` gives each helper one piece of the job. `/interrogate` brings in different models to find holes.",
      "That way, ==heavy reading goes to helpers, and the main chat keeps only the conclusions.== The principle is called `guard the context window`. Which model each helper uses comes from the config `/setup-pstack` writes.",
    ],
    myths: [
      "\"More helpers means faster\": helpers burn a lot of tokens. pstack only sends them when it pays off: wider coverage, an independent opinion, or room in the main chat.",
      "\"Several helpers editing code in one folder is fine\": they overwrite each other, and nobody can tell who changed what. Each one that edits code needs its own worktree.",
    ],
  },
  "worktree": {
    title: "Worktrees", group: "How pstack works",
    one: "A worktree is a second working folder for the same repo. When several AIs edit code at once, each uses its own.",
    like: "Like several cooks making one meal. They share a fridge, but each has their own cutting board.",
    here: [
      "The \"open a PR\" playbook already works in a worktree, so you usually don't mention it. Only say something to pick the starting branch, like \"start a new worktree from main\".",
      "Worktrees take disk space; on a laptop, a few at once is about the limit. When disk is tight, say \"see what's eating my disk and delete the worktrees that can go\". For any with uncommitted changes, it stops and asks you.",
    ],
    myths: [
      "\"Worktrees are a pstack feature\": they're built into Git (`git worktree`). pstack just uses them by default.",
      "\"My project doesn't need Git\": most playbooks assume a Git repo. If you're not using Git yet, run `git init` and make one commit.",
    ],
  },
  "custom-mode": {
    title: "Custom Mode (always on)", group: "How pstack works",
    one: "Custom Mode is a Cursor feature that keeps `/poteto-mode` on, so you don't type it every time.",
    like: "Normal use is like swiping your badge at every door. Custom Mode props the door open until you close it.",
    here: [
      "In Cursor, pick `/poteto-mode` from the `/` menu and press **Option+Enter** (Mac) or **Alt+Enter** (Windows). A plain Enter only covers that one message, and its effect fades as the chat goes on.",
      "Claude Code and Codex don't have this. The workaround: ==one chat, one job.== To switch tasks, start a new chat or say \"/poteto-mode new task\".",
    ],
    myths: [
      "\"Every tool has Custom Mode\": only Cursor does (the Agents window and the CLI).",
    ],
  },
  "model-roles": {
    title: "Model roles and the pstack-models config", group: "How pstack works",
    one: "pstack splits the work into roles. Each role can use a different model, set in one small config file.",
    like: "Like a building crew. Not everyone needs to be the priciest hire. The inspector should come from another firm, so nobody checks their own work.",
    here: [
      "Default split: coding goes to grok. The hardest changes, writing and judgment go to opus 5.5. The review panel has one of each by default. ==Models from different families reviewing each other is a core pstack practice.==",
      "`/setup-pstack` checks which models you can use and writes the config. In Cursor it's `~/.cursor/rules/pstack-models.mdc`. In Claude Code it's `~/.claude/rules/pstack-models.md`. Other tools use `~/.agents/pstack-models.md`. Changes apply in a new chat. Claude Code only offers Claude models; see [Using it in Claude Code](/en/howto/claude-code/#how-to-set-it-up-well).",
    ],
    myths: [
      "\"Roles not in the config can't be used\": unlisted roles use the skill's built-in defaults. You only change the ones you care about.",
      "\"When the defaults change, my config follows\": it doesn't; your old config stays as it is. To get new defaults, delete those lines or the whole file, then run `/setup-pstack` again.",
    ],
  },
  "arena-swarm": {
    title: "/arena vs /swarm", group: "How pstack works",
    one: "`/arena`: several people solve the same problem, and the best wins. `/swarm`: a big job split into pieces, one each.",
    like: "`/arena` is a design pitch: pick one entry as the base and work in the others' best ideas. `/swarm` is grading exams: a hundred papers split among five teachers.",
    here: [
      "Use `/arena` for decisions that are hard to change later, like names, formats and algorithms. Each candidate works on its own, and a model from another family judges them. Then it picks a base, adds the best parts of the others, and verifies. `/architect` uses it inside.",
      "Use `/swarm` for jobs that must cover everything, like \"check every package\". Each helper handles its own piece and reports \"pass / problem / blocked\". At the end you get one short report.",
    ],
    myths: [
      "\"Use /arena for a full sweep\": the pstack docs warn about this. ==For a full sweep, use `/swarm`.== `/arena` would pick a base and merge parts for every result, which is wasted work.",
    ],
  },

  // ---------- Verification and evidence ----------
  "evidence": {
    title: "Evidence (not \"should be fixed\")", group: "Verification and evidence",
    one: "In pstack, \"done\" needs real proof: real output, values actually saved, a screen actually clicked through.",
    like: "Like inspecting a house. \"The plumbing's fine\" doesn't count; you turn on the lights, run the taps and check the meter.",
    here: [
      "This principle means \"show that it works\"; its name is `prove it works`. Proof comes from something that really ran, and \"it compiled\" doesn't count. For a command-line change, run the real command. For a screen change, click through it in the app. For speed, compare before-and-after numbers.",
      "In your first prompt, say \"what counts as done\" and \"what proof you want\". That's the most useful thing you can do. When it can't check something, a good reply says \"inconclusive\". ==**A confident reply with no proof can't be trusted.**==",
    ],
    myths: [
      "\"All the tests pass, so it's proven\": tests only check the cases their author thought of. pstack wants to see how the real app behaves.",
      "\"Its explanation makes sense, so it's probably fine\": a result you can check beats any explanation. You can verify a result; an explanation you can only believe or not.",
    ],
  },
  "verify-skill": {
    title: "Verification skill", group: "Verification and evidence",
    one: "A verification skill is a guide made for your project. It teaches the AI to start your app, use it like a user, and collect proof.",
    like: "Like an onboarding guide for a new tester: how to start it, which account, where to click, what to screenshot. Once it exists, anyone can test.",
    here: [
      "Generate it with `/create-verification-skill`. It mostly reads your code to learn how the app starts and how to drive it. Before handing it over, it does a full run itself. The files go in your project: `.cursor/skills/verify-<app-name>/` in Cursor, `.claude/skills/verify-<app-name>/` in Claude Code. From then on you can say \"verify with /verify-<app-name> and give me screenshots\".",
      "The author says this is the highest-payoff thing in the whole guide. ==**An AI that can check its own work keeps going until the check passes. One that can't hands every result back to you.**== When `/setup-pstack` asks at the end whether to generate one, say yes.",
    ],
    myths: [
      "\"Generate it once and you're set\": apps change, and the guide goes stale. Run `/maintain-verification-skill` regularly, ideally daily. It only fixes the verification skill and never touches product code.",
      "\"My project is too small for this\": the sooner the better. With it, checking isn't your job anymore; any AI can do it.",
    ],
  },
  "formal-verification": {
    title: "Formal verification", group: "Verification and evidence",
    one: "Formal verification checks every case of one rule, within a set scope.",
    like: "Ordinary testing spot-checks the brakes on a few cars. Formal verification proves mathematically that this brake design stops at any speed.",
    here: [
      "Generate it with `/create-formal-verification-skill`. It picks a rule that's costly to break and hard for tests to reach. For example: \"the same job never runs twice at once\". The tool depends on the problem; for event order it uses TLA+ by default. It also builds a broken version on purpose to confirm the check catches it. ==A check you've never seen fail proves nothing.==",
      "If your code already breaks the rule, you get steps that make the problem happen. It won't change product code unless you ask. After the code changes, run `/maintain-formal-verification-skill` to update and rerun. It tells you whether the check is out of date or the code really has a bug. To show product or design folks, draw it as a state diagram with `/statechart`.",
    ],
    myths: [
      "\"If it passes, the whole system is fine\": a pass only covers that scope. The handoff note says what was checked and what wasn't.",
      "\"Every project should do this\": it's worth it only for concurrency, retries, state machines or parsers, where mistakes are expensive.",
    ],
  },
  "decision-log": {
    title: "Decision log", group: "Verification and evidence",
    one: "The decision log is a table the AI fills in as it works, one row per decision. Read it instead of the whole chat.",
    like: "Like a lab notebook: what was done, why, and what happened. The next day, the supervisor flips through it and gets it.",
    here: [
      "`/show-me-your-work` keeps it. Each row has the time, stage, decision, reason, where the proof is, and the result. It's saved as a TSV file, `decisions.tsv` by default, and stays on your machine.",
      "When you come back, say \"/show-me-your-work walk me through what you did last night\". Before it hands you the summary, a model from another family reviews it. The reply ends with a \"needs attention\" section. ==**Read that section first, then the rows it points to.**== For a quick status check, use `/ketchup`. It only reads, and tells you in plain words what changed and what's waiting on you.",
    ],
    myths: [
      "\"With a log, I don't need to review\": the log makes reviewing faster. You review the decisions, not a whole night of chat.",
    ],
  },

  // ---------- Principles ----------
  "principles": {
    title: "The 24 principles", group: "Principles",
    one: "pstack writes engineering experience as 24 short principles. When the AI drifts, saying a name pulls it back.",
    like: "Like a team's play calls. The coach shouts one, and everyone knows what to do.",
    here: [
      "You don't call principles; `/poteto-mode` reads them at the start of every task. The names are for you, to correct course. Say it claims success just because it compiled. You reply: \"apply prove it works. Run the real import flow and show me the records it wrote.\" Its reply should say which decision that changed. If it can't, it didn't really use it.",
      "The author's advice: don't memorize them. Skim them now. ==When the AI makes a mistake a principle could have prevented, come back and look it up.== That's how they stick.",
    ],
    list: [
      ["laziness protocol", "Core · Delete what you can; change as little as possible"],
      ["foundational thinking", "Core · Pick the right data shape, then write logic"],
      ["redesign from first principles", "Core · Redesign as if it was there from day one"],
      ["attack the premise", "Core · Two fixes failed? Test the premise"],
      ["subtract before you add", "Core · Remove what's useless, then add"],
      ["minimize reader load", "Core · Less to jump through, less to remember"],
      ["outcome-oriented execution", "Core · Go straight to the goal; no stopgap code"],
      ["experience first", "Core · User experience first; fewer, better features"],
      ["exhaust the design space", "Core · No precedent? Build a few prototypes and compare"],
      ["build the lever", "Core · Build a tool instead of repeating by hand"],
      ["model the domain", "Architecture · Keep business rules in one place, not scattered ifs"],
      ["boundary discipline", "Architecture · Check outside data where it comes in"],
      ["type system discipline", "Architecture · Make wrong states impossible to write"],
      ["make operations idempotent", "Architecture · Half-run or run twice, same result"],
      ["migrate callers then delete legacy apis", "Architecture · Move the callers, then delete the old API"],
      ["separate before serializing shared state", "Architecture · Stop sharing first; lock only if you must"],
      ["prove it works", "Verification · Prove it with something real; compiling doesn't count"],
      ["fix root causes", "Verification · Fix where things first went wrong"],
      ["sequence verifiable units", "Verification · Small pieces; check each before the next"],
      ["test behavior not implementation", "Verification · Test what users can see"],
      ["explain the number", "Verification · Find out what's limiting the number"],
      ["guard the context window", "Delegation · Heavy reading goes to helper AIs"],
      ["never block on the human", "Delegation · Do what can be undone; ask before what can't"],
      ["encode lessons in structure", "Meta · Said the same reminder twice? Make it a check"],
    ],
    listTitle: "All 24 (type the English name as-is so the AI recognizes it)", listHead: ["Name", "In plain words"],
    myths: [
      "\"You have to call the principles one by one\": no, `/poteto-mode` reads them every time. The names are for you to correct course.",
      "\"If I say a principle's name, the AI follows it\": check whether its reply says which decision that principle changed.",
    ],
  },
};
