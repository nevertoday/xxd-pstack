// English Wiki entries: same slugs and structure as wiki.js. Only the text fields; slug/see/step/howto come from wiki.js.
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
    one: "pstack is a free, open-source (MIT) pack of Agent Skills: 34 skills and 24 principles that make AI coding tools work by a senior engineer's rules.",
    like: "Think of handing a smart but hasty new teammate a team handbook: reproduce a bug before fixing it, read the code before changing it, show proof before saying you're done. Same person (the model doesn't change), but now the work has a method.",
    here: [
      "It's written by poteto (Lauren Tan), who has worked on large codebases at Meta, Netflix and Cursor, and is on the React core team, where they helped build React Compiler. In the author's words, AI produces too much \"slop\": ==to go fast, first go deep==. pstack is the setup the author uses in Cursor every day.",
      "The official version lives in [the pstack folder of the cursor/plugins repo](https://github.com/cursor/plugins/tree/main/pstack) and is written for Cursor. [backnotprop/pstack](https://github.com/backnotprop/pstack) is a **mirror**: it syncs with the official version daily and rewrites the Cursor-only parts so any tool can use them. That's why Claude Code and Codex users usually install the mirror.",
    ],
    myths: [
      "\"pstack is a new AI model or an app\": neither. It's a set of instruction files (Markdown) written for the AI, installed into the AI coding tool you already use.",
      "\"Installing it makes the AI smarter\": the model's ability stays the same. What changes is the order and the standard of the work: no skipping the repro, no editing code it hasn't read, no claiming done without evidence.",
      "\"It only works in Cursor\": it was written for Cursor, but the mirror works in Claude Code, Codex, OpenCode, Pi and others. Only a few Cursor-only features get skipped.",
    ],
  },
  "agent-skill": {
    title: "Agent Skill", group: "Basics",
    one: "An Agent Skill is a folder with a SKILL.md file inside. It says how the AI should handle a certain kind of task.",
    like: "Like a recipe. The chef (the model) already knows how to cook, but with a recipe that says \"blanch first, then high heat, then thicken the sauce\", the dish comes out the same every time.",
    here: [
      "Every pstack skill is `skills/<name>/SKILL.md`. Some skills also carry reference material (`references/`) and scripts (`scripts/`). For example, `/statechart` comes with a set of TypeScript tools.",
      "This is an [open format](https://agentskills.io), not something pstack invented, so the same skill can be installed in different AI tools.",
    ],
    myths: [
      "\"A skill is just a very long prompt\": close, but it loads on demand. The AI only reads it when it needs it, so it doesn't take up room in the conversation the rest of the time.",
      "\"More skills is better\": even the author says you don't need that many on day one. Start with simple prompts. ==When the same problem shows up twice, then add a skill or a check==.",
    ],
  },
  "skill-md": {
    title: "SKILL.md", group: "Basics",
    one: "SKILL.md is the body of a skill: the first few lines give its name and when to use it, and the rest lays out the steps and rules.",
    like: "Like the leaflet in a medicine box: the top line says what it's for, and the AI reads that line first to decide whether to use it. If it does, it reads on for the dosage.",
    here: [
      "The opening block is called frontmatter. For example, `/poteto-mode` has `disable-model-invocation: true`, which means the AI never turns it on by itself: **you have to type `/poteto-mode` yourself**.",
      "To change how pstack behaves, you edit these files. The author suggests doing that properly too: use the \"write a skill\" playbook, then run the Eval playbook for a blind test of whether the change helped. Don't patch skills in the middle of a task.",
    ],
    myths: [
      "\"I can just dash off a SKILL.md\": text for an AI has a higher bar than text for people. ==One useless sentence becomes an instruction every future AI will follow==. The \"write a skill\" playbook checks the format and links for you.",
    ],
  },
  "harness": {
    title: "Host tools (Claude Code, Cursor, Codex)", group: "Basics",
    one: "The host is the tool that actually runs the AI, reads and writes your code, and runs commands. pstack is installed inside it.",
    like: "pstack is the handbook; the host is the desk. The desk, computer and permissions all come from the desk. The same handbook works much the same at any desk, but check the details.",
    here: [
      "pstack was written for Cursor. In other hosts, the Cursor names in the skills map to their local equivalents: Cursor's `Task` (start a subagent) is `Agent` in Claude Code and `spawn_agent` in Codex. pstack ships with a mapping table, and the AI reads it on its own.",
      "A few features exist only in Cursor (Automations, Bugbot, cloud agents). In other hosts, steps that need them are skipped with a one-line note, so nothing gets stuck.",
    ],
    list: [
      ["Cursor", "Native support. Install with `/add-plugin pstack`; has Custom Mode and cloud subagents."],
      ["Claude Code", "With the plugin install, commands get a `pstack:` prefix, like `/pstack:poteto-mode`. Model config lives in `~/.claude/rules/pstack-models.md`."],
      ["Codex, OpenCode, Pi, etc.", "Install with `npx skills add backnotprop/pstack`. Model config lives in `~/.agents/pstack-models.md`."],
    ],
    listTitle: "Common hosts", listHead: ["Host", "What to watch for"],
    myths: [
      "\"Switching hosts means a different pstack\": one mirror repo works in every host. ==The only differences are the install method, the command prefix and a few file paths==.",
    ],
  },
  "slash": {
    title: "Slash commands", group: "Basics",
    one: "Typing a word that starts with `/` in the chat box asks the AI to use a specific skill, like `/poteto-mode` or `/how`.",
    like: "Like ordering a dish by name instead of telling the waiter \"I'd like something spicy with chicken\". Naming it is faster and more precise.",
    here: [
      "Type `/poteto-mode` followed by your task and send them together. The AI never turns on pstack skills by itself (except `/setup-pstack`): either you name one, or `/poteto-mode` reads it when a step calls for it. So day to day you just type `/poteto-mode`, and you rarely have to name the other skills.",
      "If you installed the plugin in Claude Code, commands get a `pstack:` prefix, like `/pstack:how`. In Codex you name a skill with `$`, like `$how`.",
    ],
    myths: [
      "\"Naming more skills in one message is better\": the pstack docs call this out as a trap. Writing \"first /how, then /architect, then /arena\" often breaks the order the playbook already has. ==Just state the goal and the constraints==, and only name a skill when you want to override a default choice.",
    ],
  },
  "token-budget": {
    title: "Tokens and the reasoning budget", group: "Basics",
    one: "Tokens are the unit AI is billed and computed in. The reasoning budget is the setting for how long the model \"thinks\". pstack defaults to a fairly high setting, so it's slower and costs more, but it's more careful.",
    like: "Like hiring a contractor: they can glance at the job and start, or measure first, draw up two plans and get someone to double-check. The second costs more, but you redo less.",
    here: [
      "pstack starts subagents and has several models review together, and all of that costs tokens. `/setup-pstack` asks you to pick a budget tier: `large` (xhigh, same as the default), `unlimited` (every model at its highest setting), `medium`, or `small` (cheaper).",
      "Ways to save: use a strong model for the main conversation and a cheap, fast model for the coding roles; shrink the review panel; skip `/poteto-mode` for small changes.",
    ],
    myths: [
      "\"`auto` is a model name\": it isn't. Setting a role to `auto` or `inherit-parent` means \"no specific model; use the same one as the main conversation\".",
      "\"A higher budget is always better\": ==hard problems deserve a high budget; for everyday changes it just makes things slower and pricier==.",
    ],
  },
  "pr": {
    title: "PRs, commits and merging", group: "Basics",
    one: "A PR (Pull Request) is a request to have a set of changes reviewed and then merged into the main branch. By default, pstack wraps up every task as a clean PR.",
    like: "Like handing in homework: your scratch paper can be messy (your branch), but the copy you hand in is neat and shows your thinking (the PR), and it only counts once the teacher signs off (the merge).",
    here: [
      "The \"open a PR\" playbook works in a worktree, organizes the changes into a series of small, ordered commits, cleans up the code and the wording, writes the title in Conventional Commits format, writes the description as a brief, and gives you the PR link. The author's view: five narrow PRs beat one fat one.",
      "Once the PR is open, the \"Babysit\" playbook watches it until it's ready to merge (resolving conflicts, answering reviews, fixing CI), but **it never merges**. Merging is a separate decision: you say \"land the stack\" and the \"Shipping\" playbook takes over.",
    ],
    myths: [
      "\"All-green CI means it's safe to merge\": ==green doesn't mean safe==. The Shipping playbook sends a different AI, one that didn't write the code, to actually verify each PR, and only merges the ones that pass.",
      "\"You can't use pstack without GitHub\": the PR steps need it. If you're only changing code locally, reading code or tracking down a problem, you won't touch PRs.",
    ],
  },

  // ---------- How pstack works ----------
  "poteto-mode": {
    title: "/poteto-mode", group: "How pstack works",
    one: "`/poteto-mode` is pstack's main entry point: you state a goal, it picks a playbook, lists the steps as a to-do list, calls other skills step by step, and hands you evidence at the end.",
    like: "Like an experienced project manager taking a request: they repeat it back to check they understood, decide whether it's a bug fix or a new feature, route it through the matching process, and only hand it over after checking the result.",
    here: [
      "It starts by reading the index of the 24 principles. In its first reply it states your goal, the problem you're solving, and the smallest change it expects to make. It **doesn't wait for your confirmation** before carrying on (that's the \"never block on the human\" principle). If it misread you, interrupt at any time.",
      "In its replies, it has to say which principle it used and which decision that principle changed. Naming a principle without saying what changed means it wasn't really used.",
      "It only applies to the message you typed it in. In Cursor you can set it as a Custom Mode so it stays on. In other tools, short follow-ups (\"continue\", \"go ahead\") are fine: the playbook keeps going.",
    ],
    myths: [
      "\"Use it for everything\": the author says ==save it for work that needs rigor==. For a one-line copy change or an obvious small fix, just ask.",
      "\"I need to write long requirements\": you don't. One sentence each for the goal, what counts as done, and any leads you have.",
      "\"It'll ask me a pile of questions first\": quite the opposite. If a question can be answered by running something, it builds a quick prototype and tries it. It only asks you about real preferences that need your call.",
    ],
  },
  "playbook": {
    title: "Playbooks", group: "How pstack works",
    one: "A playbook is the standard way to handle one kind of task. `/poteto-mode` has 23 of them. \"Fix a bug\", for example, means reproduce, find the root cause, fix, then verify.",
    like: "Like hospital triage: a fever goes to one clinic, a broken bone to the ER, and each department has its own checks. You describe the symptoms; the nurse sends you to the right place.",
    here: [
      "Playbooks live in `skills/poteto-mode/playbooks/`. You don't have to name one: describe the task and it finds the match. If nothing fits, it hands off to `/figure-it-out` to design one on the spot.",
      "A few key phrases affect the match: \"don't change code yet\" pins the task to the Investigation playbook; \"new task\" makes it match again instead of continuing the previous playbook; \"I'm going to bed\" sends it down the long-running autonomous route.",
    ],
    list: [
      ["Investigation", "Read-only questions: how does x work, why is y written this way"],
      ["Bug fix", "Reproduce → root cause → fix → verify with runtime evidence"],
      ["Perf issue", "Start from a measured slowdown and improve against a baseline"],
      ["Hillclimb", "Keep improving one metric: measure before and after each hypothesis, one commit per change that works"],
      ["Runtime forensics / Trace forensics", "Find the cause from a live symptom or a captured profile; diagnose only, no fix"],
      ["Feature", "New behavior, starting from a data structure decided up front"],
      ["Refactoring", "Change structure only; behavior stays exactly the same"],
      ["Prototype", "Build a few throwaway drafts and decide based on results you can see"],
      ["Visual parity", "Make two implementations match pixel for pixel"],
      ["Write a skill / Eval", "Write or edit a SKILL.md; blind-test the effect of a skill change"],
      ["Babysit", "Watch a PR until it can merge: conflicts, reviews, CI"],
      ["Shipping", "Verify each PR independently, then merge the verified stack from the bottom up"],
      ["Autonomous / Orchestrate", "Run one long task to the end; hand multi-day, multi-PR projects to a coordinator"],
      ["Autopilot-full / Autopilot-stack", "Run a queue of unrelated PRs through to merge, or stop once verified and wait for you to merge"],
      ["Take over / Safe pause", "Pick up work a previous AI didn't finish; stop current work cleanly"],
      ["Multi-phase plan", "For work spanning several phases or PRs, write a plan first"],
      ["Clean up worktrees", "Delete merged or abandoned worktrees based on evidence, to free up disk"],
      ["Open a PR", "The last step of every playbook: small, ordered commits and a brief-style description"],
    ],
    listTitle: "The 23 playbooks (some grouped)", listHead: ["Playbook", "What it's for"],
    myths: [
      "\"I have to learn all 23 first\": no. ==You just describe the task; matching is its job==. This table is here so you can read the to-do list.",
      "\"Every step in the playbook runs\": not always. Steps that aren't needed are skipped, but they stay on the list marked `skip: reason`, so you can see what it decided not to do.",
    ],
  },
  "todo": {
    title: "The to-do list and skip", group: "How pstack works",
    one: "When `/poteto-mode` starts, it writes a to-do list. The first items are the chosen playbook's steps, copied in as-is. Steps it decides not to do stay on the list, marked `skip: reason`.",
    like: "Like a pilot's pre-flight checklist: every item gets read out, and the ones not done get \"not applicable, because…\" instead of being quietly passed over.",
    here: [
      "==Reading the list is the easiest way to keep an eye on the AI==: which playbook it chose, which steps it plans, what it skipped, all at a glance. If something got skipped that shouldn't have, just say \"don't skip step 3, reproduce first\".",
      "In Claude Code, if the session offers the TodoWrite tool, it uses that. If not, it writes the list in its reply and updates it at each stage.",
    ],
    myths: [
      "\"A longer list means more care\": the list comes from the playbook, so its length depends on the type of task. What matters is that no step gets skipped silently.",
    ],
  },
  "subagent": {
    title: "Subagents", group: "How pstack works",
    one: "A subagent is an AI helper the main conversation sends off to do one piece of work. It reads a lot in its own space and only brings back the conclusion.",
    like: "Like an editor sending a reporter into the field: the reporter spends all day there and fills a notebook, then comes back with one article. The editor's desk doesn't get buried in field notes.",
    here: [
      "Many pstack skills start subagents: `/how` sends a few read-only explorers through large modules; `/arena` has several each write a solution; `/swarm` gives each worker one piece of the job; `/interrogate` brings in several different models to poke holes.",
      "Behind this is the \"guard the context window\" principle: ==heavy reading goes to subagents; the main conversation keeps only the conclusions==. Which model each subagent uses is set by the config `/setup-pstack` writes.",
      "pstack also ships a dedicated subagent, `poteto-agent`. Before it starts, it reads the full `/poteto-mode` rules, so helpers sent out follow the same rules too.",
    ],
    myths: [
      "\"More subagents means faster\": subagents burn a lot of tokens. pstack only uses them when they buy coverage, an independent judgment, or room in the main conversation.",
      "\"Several subagents editing code in the same folder is fine\": they'll overwrite each other, and nobody can tell who changed what. Each one that edits code needs its own worktree.",
    ],
  },
  "worktree": {
    title: "Worktrees", group: "How pstack works",
    one: "A worktree is a second working folder for the same Git repo, with its own branch. When several AIs edit code at once, each uses its own, so they don't collide.",
    like: "Like several cooks making one meal: they share a fridge (the same repo), but each has their own cutting board (their own worktree), so nobody chops someone else's vegetables.",
    here: [
      "The \"open a PR\" playbook already works in a worktree, so you usually don't need to mention it. Only say something when you want a specific starting branch: \"start a new worktree from main and move the parser changes over\".",
      "Worktrees take disk space and machine resources; on a laptop, a few at once is about the limit. When disk is tight, say \"see what's eating my disk and delete the worktrees that can go\". The \"clean up worktrees\" playbook checks each one's merge status and uncommitted changes, and stops to ask you about any with uncommitted work.",
    ],
    myths: [
      "\"Worktrees are a pstack feature\": they're built into Git (`git worktree`). pstack just uses them by default.",
      "\"My project doesn't need Git\": most playbooks assume you're in a Git repo. If your project isn't using Git yet, run `git init` and make one commit first.",
    ],
  },
  "custom-mode": {
    title: "Custom Mode (always on)", group: "How pstack works",
    one: "Custom Mode is a Cursor feature that keeps `/poteto-mode` on for every turn, so you don't have to type it each time.",
    like: "Normal use is like swiping your badge every time you walk in. Custom Mode is like propping the door open until you close it yourself.",
    here: [
      "In Cursor, pick `/poteto-mode` from the `/` menu and press **Option+Enter** (Mac) or **Alt+Enter** (Windows) instead of Enter. A plain Enter only attaches the skill to that one message, and its effect fades as the chat goes on.",
      "Claude Code and Codex don't have this. The workaround: ==one conversation, one job==. When you switch tasks, start a new conversation or say \"/poteto-mode new task\".",
    ],
    myths: [
      "\"Every tool has Custom Mode\": only Cursor does (the Agents window and the CLI).",
    ],
  },
  "model-roles": {
    title: "Model roles and the pstack-models config", group: "How pstack works",
    one: "pstack splits the work into roles (writing code, making judgments, the review panel, swarm workers). Each role can use a different model. The setup lives in one small file that every skill reads.",
    like: "Like a construction crew: the people hauling bricks, drawing plans and inspecting the work don't all need to be the most expensive hires. The inspector is best brought in from another firm, so nobody checks their own work.",
    here: [
      "Default split: coding work (features, refactors, bug fixes, perf, hillclimbing) goes to grok; the hardest changes, writing and judgment go to opus 5.5. The review panel defaults to opus 5.5 plus grok. ==Having models from different families review each other is one of pstack's core practices==.",
      "`/setup-pstack` detects which models you can use and writes a config: in Cursor at `~/.cursor/rules/pstack-models.mdc`, in Claude Code at `~/.claude/rules/pstack-models.md`, and in other tools at `~/.agents/pstack-models.md`. Changes take effect in a new conversation.",
      "In Claude Code you can only pick Claude models (opus, sonnet, haiku, etc.). If the config names another vendor's model like grok or gpt, that role simply uses the current session's model and says so. And all Claude models count as one family, so `/arena` skips its judge when it can't find one from another family. For how to set it up, see [Using it in Claude Code](/en/howto/claude-code/#how-to-set-it-up-well).",
    ],
    myths: [
      "\"Roles not in the config can't be used\": unlisted roles use the skill's built-in defaults. You only override the ones you care about.",
      "\"When the defaults change, my config follows\": it doesn't. Whatever is written in your old config keeps the old defaults. To pick up new defaults, delete those lines or the whole file and run `/setup-pstack` again.",
    ],
  },
  "arena-swarm": {
    title: "/arena vs /swarm", group: "How pstack works",
    one: "`/arena` means \"several people each solve the same problem, pick the best and borrow the good parts of the rest\". `/swarm` means \"split one big job into pieces, one person per piece, then combine the results\".",
    like: "`/arena` is like a design pitch: three studios each submit a logo, you pick one as the base and work in the good ideas from the other two. `/swarm` is like grading exams: a hundred papers split among five teachers, twenty each, then the scores get combined.",
    here: [
      "`/arena`: each candidate works in its own folder, a judge from a different model family scores them, and a coordinator reads every one, picks a base, grafts in the best parts and verifies. Use it for decisions that are hard to change later, like naming, formats and algorithms. `/architect` uses it internally.",
      "`/swarm`: each worker has its own scope and checks, reports \"pass / problem / blocked\", and you get one concise report at the end. Use it for coverage tasks like \"check every package\" or \"verify every feature\".",
    ],
    myths: [
      "\"Use /arena for coverage checks\": the pstack docs call out this trap. Coverage is a job for `/swarm`. `/arena` runs its pick-a-base-and-graft routine on every result, which is wasted work.",
    ],
  },

  // ---------- Verification and evidence ----------
  "evidence": {
    title: "Evidence (not \"should be fixed\")", group: "Verification and evidence",
    one: "In pstack, \"done\" means proven with something real: real command output, values actually saved, a UI actually clicked through, before-and-after numbers.",
    like: "Like inspecting a house: the builders saying \"plumbing and wiring are fine\" doesn't count. You turn on the lights, run the taps and check the meter yourself.",
    here: [
      "This is the \"prove it works\" principle. It requires the AI to verify against the real artifact, not a stand-in, a gut feeling, or \"it compiled\".",
      "Different changes need different evidence: a CLI change means running the real command; a UI change means walking through it in the running app; a parser or migration means replaying a saved input; performance means comparing before-and-after profiles; storage means reading back the value that was written.",
      "The most useful thing you can do is state \"what counts as done\" and \"what evidence you want to see\" in your very first prompt. When something can't be verified, a good reply says \"inconclusive\". ==**A confident reply with no evidence is a red flag.**==",
    ],
    myths: [
      "\"All the tests pass, so it's proven\": tests only check the cases their author thought of. pstack wants behavior observed in the real app.",
      "\"Its explanation makes sense, so it's probably fine\": however reasonable an explanation sounds, it's worth less than an artifact you can check yourself. An artifact can be questioned; an explanation can only be believed.",
    ],
  },
  "verify-skill": {
    title: "Verification skill", group: "Verification and evidence",
    one: "A verification skill is a skill generated just for your project. It teaches the AI how to start your app, use it like a real user, what counts as evidence, and how to clean up afterward.",
    like: "Like writing an onboarding guide for a new tester: how to boot it up, which test account to use, where to click, what to screenshot. Once it's written, anyone can test without asking you every time.",
    here: [
      "Generate it with `/create-verification-skill`. It mostly \"interviews\" your code, not you: how the app starts locally, what to drive it with (existing test tools, a browser, the terminal or HTTP), what counts as evidence, whether two copies can run at once. Before handing it over, it does a full run itself: start up, self-check, use one feature, collect evidence, clean up, and confirm the evidence survives the cleanup.",
      "What it generates lives in your project (`.cursor/skills/verify-<app-name>/` in Cursor, `.claude/skills/verify-<app-name>/` in Claude Code), with a feature map that says how to prove each feature works. From then on your prompts can say \"verify with /verify-<app-name> and give me a video and screenshots\".",
      "The author says this is the single highest-payoff thing in the whole guide: ==**an AI that can check its own work keeps going until the check passes; one that can't just hands every result back to you to check by hand.**== If you're new, say \"yes\" when `/setup-pstack` asks at the end whether to generate one.",
    ],
    myths: [
      "\"Generate it once and you're set\": apps change, and the feature map goes stale. Run `/maintain-verification-skill` regularly (ideally daily). It only fixes the verification skill itself and never touches product code.",
      "\"My project is too small for this\": the sooner the better. It turns verification from something you have to do yourself into a step any AI can do.",
    ],
  },
  "formal-verification": {
    title: "Formal verification", group: "Verification and evidence",
    one: "Formal verification doesn't just test a few examples. It checks a rule against **every case** within a set scope, such as \"the same job never runs twice at once\".",
    like: "Ordinary testing is like spot-checking the brakes on a few cars. Formal verification is like proving mathematically that this brake design stops the car at any speed.",
    here: [
      "Generate it with `/create-formal-verification-skill`. It picks one promise from your code that's costly to break and hard for tests to hit, and chooses a tool to fit the problem: for whether events can happen in a bad order, a model checker (TLA+ by default); for whether code is correct on every input, a verifier that runs directly on the code; when no tool fits, lots of randomly generated inputs run against the real code.",
      "It deliberately builds a broken version to confirm the check catches it, because ==a check you've never seen fail proves nothing==. If your current code already breaks the rule, you get repro steps written in your code's own terms. It won't change product code unless you ask.",
      "After the code changes, run `/maintain-formal-verification-skill` to update and rerun. It tells you whether each failure means \"the verification is out of date\" or \"the code really has a bug\". To show it to product or design folks, draw it as a state diagram with `/statechart`.",
    ],
    myths: [
      "\"If verification passes, the whole system is fine\": a pass only covers that model or that scope. The handoff note spells out what was verified, with which tool, at what scope, and what wasn't covered.",
      "\"Every project should do this\": it's only worth it where there's concurrency, retries, state machines or parsers, and mistakes are expensive.",
    ],
  },
  "decision-log": {
    title: "Decision log", group: "Verification and evidence",
    one: "The decision log is a table the AI fills in as it works: one row per decision, with the time, stage, decision, reason, where the evidence is, and the outcome. When you come back, you read it instead of rereading the whole conversation.",
    like: "Like a lab notebook: what was done, why, and what happened, line by line. When the supervisor drops by the next day, they flip through it instead of rerunning the experiment.",
    here: [
      "`/show-me-your-work` handles it and saves it as a TSV file (`decisions.tsv` by default, or `.audit/<task-name>.tsv` when several tasks share a folder). By default it stays local. Commit it to the repo only when the task matters enough that reviewers need the record to feel confident.",
      "When you come back, say \"/show-me-your-work walk me through what you did last night\". Before it hands you the summary, it sends a reviewer from a different model family to read the log and the conversation, and the reply ends with a \"needs attention\" section. ==**Read that section first, then look at the rows it points to.**==",
      "For a quick status check, use `/ketchup`: it's read-only, tells you in plain words what changed since your last message, and lists everything waiting on your decision.",
    ],
    myths: [
      "\"With a log, I don't need to review\": the log makes reviewing faster. You review the decisions instead of rereading a whole night of conversation.",
    ],
  },

  // ---------- Principles ----------
  "principles": {
    title: "The 24 principles", group: "Principles",
    one: "pstack writes engineering experience down as 24 short principles, each with a name. `/poteto-mode` reads their index at the start of every task, and saying a name in the chat pulls the AI back on track precisely.",
    like: "Like a team's play calls: the coach shouts \"play two\" and everyone knows what to do, no long speech from the sidelines needed.",
    here: [
      "You don't \"call\" principles; you use their names to **correct course**. Say the AI wants to add a fourth adapter on top of three old ones: \"use subtract before you add. Delete the outdated adapters first, then design what's left.\" Or the AI declares success because it compiled: \"apply prove it works. Run the real import flow and show me the records it wrote.\"",
      "In its reply, the AI has to say which principle it used and which decision it changed. If it only quotes the name and can't say what changed, it didn't really use it.",
      "The author's advice: don't memorize them. Skim them now, and the day you notice the AI did something a principle could have prevented, come back and look it up. That's how they stick.",
    ],
    list: [
      ["laziness protocol", "Core · Delete what you can; solve the problem with the smallest change"],
      ["foundational thinking", "Core · Pick the right data structure before writing logic, and the code after it comes out clear"],
      ["redesign from first principles", "Core · When a new requirement arrives, redesign as if it had been there from day one instead of bolting it on"],
      ["attack the premise", "Core · When two or more fixes built on the same premise fail, write the premise down and test it directly"],
      ["subtract before you add", "Core · Clear out what's useless first, then build on the simpler base"],
      ["minimize reader load", "Core · Count how many jumps and how much state a reader has to hold in their head, and cut it where you can"],
      ["outcome-oriented execution", "Core · For big rewrites, go straight to the target architecture; don't write throwaway compatibility code for in-between states"],
      ["experience first", "Core · User experience beats implementation convenience; build fewer features, but polish each one"],
      ["exhaust the design space", "Core · When there's no precedent, build two or three prototypes and compare them side by side before deciding"],
      ["build the lever", "Core · Build tools (scripts, codemods, generators, skills) to do the work or prove it, instead of doing it by hand again and again"],
      ["model the domain", "Architecture · Put business rules into one structure, not a scatter of ifs"],
      ["boundary discipline", "Architecture · Validate at the system's edges (CLI, config, network, external APIs) and trust the types inside"],
      ["type system discipline", "Architecture · Make illegal states impossible to write; parse external data at the boundary; handle every branch"],
      ["make operations idempotent", "Architecture · Same result whether it ran halfway before or ran several times"],
      ["migrate callers then delete legacy apis", "Architecture · Once the callers are migrated, delete the old API in the same pass; no compatibility layer left behind"],
      ["separate before serializing shared state", "Architecture · Remove the sharing first; only add locks or queues when sharing is truly needed"],
      ["prove it works", "Verification · Verify against the real artifact; \"it compiles\" doesn't count"],
      ["fix root causes", "Verification · Follow the symptom back to where the system first went wrong, and fix it there"],
      ["sequence verifiable units", "Verification · Cut work into small pieces that can each be verified when done; verify before starting the next"],
      ["test behavior not implementation", "Verification · Tests assert behavior users can observe, and shouldn't break when internals change"],
      ["explain the number", "Verification · Before trusting a measured number, explain what's limiting it"],
      ["guard the context window", "Delegation · Heavy reading goes to subagents; the main conversation keeps only the conclusions"],
      ["never block on the human", "Delegation · Do reversible things first and show the results; only ask first when it can't be undone"],
      ["encode lessons in structure", "Meta · If you've given the same reminder twice, turn it into a lint, a check or a script"],
    ],
    listTitle: "All 24 (use the exact name so the AI recognizes it)", listHead: ["Name", "In plain words"],
    myths: [
      "\"You have to call the principles one by one\": no, `/poteto-mode` reads them every time. The names are there for you to correct course.",
      "\"If I say a principle's name, the AI definitely follows it\": check whether its reply says which decision that principle changed.",
    ],
  },
};
