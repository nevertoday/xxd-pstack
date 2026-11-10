// English overlay for skills.js. Overlay: SKILLS.map((g) => ({ ...g, title: SKILL_GROUPS_EN[g.id], items: g.items.map((s) => ({ ...s, ...SKILLS_EN[s.name] })) })); badge/label text via SKILL_LABELS_EN[chinese].
// SKILLS_EN is keyed by skill name and holds only the text fields: zh (one-line summary, English here), use, ex, needs (same shape as skills.js).

export const SKILL_GROUPS_EN = {
  entry: "Start here: meet these three",
  listen: "Understand you first",
  understand: "Understand the code",
  design: "Design and review",
  build: "Build and clean up",
  verify: "Verify",
  report: "Report, review, get smoother over time",
  other: "Other",
};

export const SKILLS_EN = {
  "poteto-mode": { zh: "The main entry point. You say what you want and what counts as done; it plans the steps and brings back evidence.", use: "Anything that needs care. Skip it for an obvious one-line change.", ex: "/poteto-mode The export sometimes writes duplicate rows. Make it happen again first, then fix it, then prove the fix works.", needs: ["all principle-* principles", "most other skills"] },
  "poteto-help": { zh: "Ask it \"which skill fits this?\" and it answers with a prompt you can send as is.", use: "You're just starting, or you're not sure which skill to use.", ex: "/poteto-help I want to review this branch. Which skill should I use?", needs: ["the skills you're asking about"] },
  "setup-pstack": { zh: "Picks your models: it checks what you can use, asks your budget, and writes one config all skills share.", use: "Run it right after installing. Run it again to switch models or save money.", ex: "/setup-pstack" },
  "in-your-own-words": { zh: "Has the AI say back what you want in its own words, so you catch misunderstandings early.", use: "Your request is messy or a long discussion, and you worry the AI will get it wrong.", ex: "/in-your-own-words" },
  "sharpen": { zh: "Tightens your prompt: adds the steps and checks an expert would think of. It doesn't do the work.", use: "An important job, and you want the request right before you send it.", ex: "/sharpen Write a migration guide for the v2 config format." },
  "how": { zh: "Explains how a piece of code runs today: the flow, the key types, the easy-to-miss traps.", use: "You want to understand it before changing it, or you suspect it's slow.", ex: "/how How do we dedupe notifications? Is there an N+1 query when we look up subscribers?" },
  "why": { zh: "Finds out \"why it was done this way\" from Git history and docs, with a source for every claim.", use: "You see odd code or config and want its story, and whether the reason still holds.", ex: "/why Why is the retry limit 5? Does that reason still hold?", needs: ["how"] },
  "teach": { zh: "Combines /how and /why into one explanation that builds up, diagram by diagram, until you get it.", use: "A summary isn't enough and you want to really understand a change or a module.", ex: "/teach Walk me through how this PR changes retries. Convince me it fixes the real cause, not just the symptom.", needs: ["how", "why"] },
  "recall": { zh: "Reads your recent chats and shared records to remind you where things stand and what's next.", use: "You're back on an old topic after a few days, or want your progress back before a new chat.", ex: "/recall Help me remember how far we got on the export feature last week", needs: ["why", "unslop"] },
  "architect": { zh: "Before code that spans modules, it settles how it's called and what the types are, then compares options.", use: "The change reaches past one function and touches several modules.", ex: "/architect Design the import flow first, don't jump into code. What I care about most is how other code calls it.", needs: ["arena", "how"] },
  "arena": { zh: "Several AIs each try the problem, another company's model scores them, and the best one absorbs the others' good ideas.", use: "Choices that are hard to change later, like names, formats or algorithms, where you want options.", ex: "/arena This cache key format will be hard to change later. Give me 5 options." },
  "swarm": { zh: "Splits the work into separate pieces, sends one AI per piece, and sums it up in one report.", use: "You need to go through a lot: every package, every feature.", ex: "/swarm Run check.sh for every package under packages/, one agent per package, and give me one report at the end." },
  "interrogate": { zh: "Has several different models hunt for bugs in your change, keeping only ones a command can show. It changes nothing.", use: "The code is written but you're not confident, and want it picked apart before merging.", ex: "/interrogate Review the whole branch and be picky. Only report real bugs or things that used to work and now don't." },
  "blast-radius": { zh: "What else could a small change break? It finds out, and runs code to prove why it's safe.", use: "The change is small but you're not fully at ease with it.", ex: "/blast-radius What else does this change affect?", needs: ["arena", "how", "why", "unslop"] },
  "figure-it-out": { zh: "When none of the 23 ready-made approaches fit, it designs one on the spot. You can check every step.", use: "Big jobs, jobs with no ready-made approach, or jobs you'll review when you're back.", ex: "/figure-it-out Move every caller from the sync store to the new async store, with exactly the same behavior." },
  "tdd": { zh: "Writes a failing test first, then fixes the code, then runs the test again to see it pass.", use: "Fixing a bug, when tests are easy to run on your machine.", ex: "/tdd implement" },
  "typescript-best-practices": { zh: "Turns the type principles into concrete TypeScript habits, like handling every possible case.", use: "The task touches .ts / .tsx files. It doesn't load on its own; you have to name it.", ex: "/typescript-best-practices" },
  "unslop": { zh: "Takes the \"AI flavor\" out of writing: stock phrases, empty words, lists of three, em dashes.", use: "READMEs, PR descriptions, commit messages, or an AI reply that's too wordy.", ex: "/unslop Clean up the new README content, no em dashes" },
  "no-comments": { zh: "Cleans up comments before review, keeping only licenses, public API docs and notes on outside rules.", use: "Before the code goes to review.", ex: "/no-comments the diff" },
  "technical-writing": { zh: "Writes docs to a clear standard, editing line by line until a tired engineer gets it in one read.", use: "Writing docs, RFCs, READMEs, PR descriptions or commit messages.", ex: "/technical-writing Review the README changes", needs: ["unslop"] },
  "create-verification-skill": { zh: "Makes a \"verification skill\" for your project that teaches the AI to really use each feature like a user.", use: "You have no automatic way to prove a feature really works. The most useful thing a beginner can do.", ex: "/create-verification-skill", needs: ["maintain-verification-skill"] },
  "maintain-verification-skill": { zh: "After the app changes, it checks the verification skill feature by feature and fixes what's stale. It never touches product code.", use: "Best run once a day. You can make it a scheduled task.", ex: "/maintain-verification-skill" },
  "create-formal-verification-skill": { zh: "For cases tests can't reach (like concurrency or retries), it checks that a rule holds every time.", use: "Places where a mistake is costly and tests can hardly trigger it.", ex: "/create-formal-verification-skill Job leases and retry logic. The same job must never run twice at once.", needs: ["maintain-formal-verification-skill", "statechart"] },
  "maintain-formal-verification-skill": { zh: "When verified code changes, it updates and reruns the check. It tells you: stale check, or real bug.", use: "A merge or refactor touched verified code.", ex: "/maintain-formal-verification-skill" },
  "statechart": { zh: "Draws the states a user goes through, and marks the ones that break a rule and how you get there.", use: "People who don't read code, like product and design, need to \"see\" how it behaves.", ex: "/statechart What does the user see when editing notes offline" },
  "benchmark-checklist": { zh: "Checks a performance number against 7 questions. The verdict is only faster, slower, no difference, or not sure.", use: "You measured performance, or someone's numbers look suspiciously good.", ex: "/benchmark-checklist Check this 40% speedup before it goes into the PR" },
  "bro": { zh: "Says the last reply again in plain words: shorter, no jargon.", use: "The AI's reply was very technical and you still don't know what it said.", ex: "/bro" },
  "ketchup": { zh: "Sounds like \"catch up\": what changed, and which decisions are waiting on you. It only reads, never changes anything.", use: "You stepped away and want a quick update.", ex: "/ketchup", needs: ["bro"] },
  "ketchup-video": { zh: "Same as /ketchup, but as a short slideshow video with captions.", use: "You'd rather watch the progress than read it.", ex: "/ketchup-video", needs: ["ketchup", "bro"] },
  "show-me-your-work": { zh: "Has the AI log one line per decision: what it did, why, the evidence, the result.", use: "Long tasks, or tasks you'll leave running on their own.", ex: "/show-me-your-work Walk me through what you did last night" },
  "reflect": { zh: "After a task, three reviewers read the chat and suggest improvements. Nothing changes until you approve.", use: "A task was too slow or went the long way round, and you want to avoid that next time.", ex: "/reflect That was too slow. Write down what you learned so it doesn't happen again." },
  "correct": { zh: "Finds mistakes the AI keeps repeating and blocks them, with structure and types first and docs last.", use: "You're correcting the same mistake for the second time.", ex: "/correct The AI keeps skipping the repository layer and calling the database client directly" },
  "automate-me": { zh: "Reads your chats and builds a \"<your-name>-mode\" skill that works the way you do.", use: "You know /poteto-mode well and want one that's more like you.", ex: "/automate-me" },
  "make-bot-ui": { zh: "Builds a small web page whose buttons wake Grok Bot. Keys stay on your computer.", use: "You use Grok Bot and want a button-style control panel. Most people won't need it.", ex: "/make-bot-ui" },
};

// UI labels used by the skills page (badges, field labels), keyed by the Chinese text.
export const SKILL_LABELS_EN = {
  "技能速查": "Skills at a glance",
  "自动调用": "Auto",
  "要你亲手打": "Type it yourself",
  "按需点名": "Call when needed",
  "什么时候用": "When to use",
  "要一起装": "Install with",
  "原文": "Source",
};
