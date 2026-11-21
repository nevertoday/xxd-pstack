| English term | German rendering | rule |
| --- | --- | --- |
| Agent Skill | Agent Skill | English + gloss on first use (gloss: `ein Ordner mit Anweisungen für eine bestimmte Aufgabe`); capitalize as German noun (`der Agent Skill`, Pl. `Agent Skills`) |
| skill | Skill | keep English; capitalize as German noun (`der Skill`, Pl. `Skills`; in compounds `Skill-Paket`); matches existing text |
| SKILL.md | `SKILL.md` | keep English; filename, always in inline code |
| harness | Harness | English + gloss on first use (gloss: `das Tool, in dem die KI läuft, z. B. Claude Code, Cursor oder Codex`); `das Harness`, Pl. `Harnesses` |
| playbook | Playbook | keep English; capitalize as German neuter noun (`das Playbook`, Pl. `Playbooks`); matches existing text |
| poteto-mode | poteto-mode | keep English; never translate, keep `/poteto-mode`, `$poteto-mode`, `/pstack:poteto-mode` verbatim |
| subagent | Subagent | English + gloss on first use (gloss: `eine Helfer-KI für eine einzelne Teilaufgabe`); `der Subagent`, Pl. `Subagents` |
| worktree | Worktree | English + gloss on first use (gloss: `ein zusätzlicher Arbeitsordner für dasselbe Git-Repo`); `der Worktree`, Pl. `Worktrees` (or `Git-Worktree`) |
| todo list | To-do-Liste | translate; use Duden hyphenation (`die To-do-Liste`); matches existing text |
| verification skill | Prüf-Skill | translate; hybrid compound (`der Prüf-Skill`, Pl. `Prüf-Skills`) matching `prüfen` and `Skill` in existing text |
| formal verification | formale Verifikation | translate; standard German computer science term (`die formale Verifikation`) |
| decision log | Entscheidungsprotokoll | translate (`das Entscheidungsprotokoll`, Pl. `Entscheidungsprotokolle`); keep literal filenames in English |
| principles | Prinzipien / Engineering-Prinzipien | translate (`das Prinzip`, Pl. `Prinzipien`; use `Engineering-Prinzipien` as in existing text); keep individual principle names (`prove it works`, etc.) in English |
| tokens | Tokens | keep English; capitalize as German noun (`das Token`, Pl. `Tokens`; in compounds `Token-Verbrauch`) |
| reasoning budget | Reasoning-Budget | English + gloss on first use (gloss: `wie lange das Modell nachdenken darf`); hyphenated compound (`das Reasoning-Budget`) |
| PR | PR | keep English (`der PR`, Pl. `PRs`); spell out `Pull Request` where the English does |
| slash command | Slash-Befehl | translate (`der Slash-Befehl`, Pl. `Slash-Befehle`); matches `Befehl` in existing UI |
| model roles | Modellrollen | translate (Sg. `die Modellrolle`, Pl. `die Modellrollen`) |
| Custom Mode | Custom Mode | English + gloss on first use (gloss: `ein dauerhafter Modus in Cursor`); Cursor UI name (`der Custom Mode`, Pl. `Custom Modes`) |
| fix a bug (playbook) | Bug beheben | translate; keep `fix a bug` verbatim only if formatted as an inline-code ID (`der Bug` stays English) |
| add a feature (playbook) | Feature hinzufügen | translate; keep `add a feature` verbatim only if formatted as an inline-code ID (`das Feature` stays English) |
| refactor (playbook) | Refactoring | keep English (`das Refactoring`, verb `refaktorisieren` / `umbauen`); keep `refactor` verbatim if inline code |
| perf issue (playbook) | Performance-Problem | translate (`das Performance-Problem`); keep `perf issue` verbatim if inline code |
| investigation (playbook) | Untersuchung | translate (`die Untersuchung`); keep `investigation` verbatim if inline code |
| prototype (playbook) | Prototyp | translate (`der Prototyp`, Pl. `Prototypen`); keep `prototype` verbatim if inline code |
| babysit (playbook) | Babysitting | English + gloss on first use (gloss: `einen PR oder laufenden Prozess aktiv begleiten`); verb `babysitten`; keep `babysit` verbatim if inline code |
| shipping (playbook) | Shipping | English + gloss on first use (gloss: `fertigstellen, prüfen und ausliefern`); keep `shipping` verbatim if inline code |
| review panel | Review-Panel | English + gloss on first use (gloss: `mehrere Modelle, die dieselbe Änderung prüfen`); `das Review-Panel`, Pl. `Review-Panels` |
| budget (`/setup-pstack` choice) | Budget | translate (`das Budget`); keep the CLI option values `large`, `medium`, `small` verbatim in English |
| reasoning effort levels (`xhigh`, `high`, `medium`, `low`) | `xhigh`, `high`, `medium`, `low` | keep English; never translate the four level names (refer to the setting in prose as `Reasoning-Stufe`) |
| checkpoint | Checkpoint | keep English; capitalize as German noun (`der Checkpoint`, Pl. `Checkpoints`) |
| reproduce | reproduzieren | translate; matches existing text (`Erst reproduzieren, dann beheben, dann prüfen`) |
| repro | Repro | English + gloss on first use (gloss: `kurz für Reproduktion`); `das Repro` (e.g. `Repro-Schritte`) |
| root cause | Grundursache | translate (`die Grundursache`, or `eigentliche Ursache` in plain prose); keep principle name `fix root causes` in English |
| verify / verification | prüfen / Prüfung | translate; matches existing text (`prüfen`, `geprüft`, `Es prüft, bevor es abgibt`) |
| evidence | Beleg / Belege | translate (`der Beleg`, Pl. `Belege`); plain everyday German, avoid `Evidenz` |
| diff | Diff | keep English (`der Diff`, Pl. `Diffs`) |
| commit | Commit | keep English (`der Commit`, Pl. `Commits`; verb `committen`) |
| branch | Branch | keep English (`der Branch`, Pl. `Branches`) |
| merge | Merge | keep English (`der Merge`, Pl. `Merges`; verb `mergen`) |
| CI | CI | keep English (`die CI`) |
| lint | Lint / linten | keep English (verb `linten`, noun `Linter` or `Lint-Prüfung`) |
| test | Test / testen | translate (`der Test`, Pl. `Tests`; verb `testen`) |
| codemod | Codemod | English + gloss on first use (gloss: `ein Skript für automatische Code-Änderungen im ganzen Projekt`); `der Codemod`, Pl. `Codemods` |
| migration | Migration | translate (`die Migration`, Pl. `Migrationen`) |
| stack (of PRs) | PR-Stack / Stack | English + gloss on first use (gloss: `mehrere aufeinander aufbauende PRs`); `der Stack`, Pl. `Stacks` |
| harness adapter | Harness-Adapter | English + gloss on first use (gloss: `die Anpassungsschicht zwischen pstack und dem jeweiligen Tool`); `der Harness-Adapter`, Pl. `Harness-Adapter` |
| mirror (`backnotprop/pstack`) | pstack-Spiegel / Spiegel | translate (`der pstack-Spiegel`, `der Spiegel`); matches existing UI |
| official version | offizielle Version / offizielles Original | translate; matches existing UI (`das offizielle Original`, `Offizielles pstack`) |
| marketplace | Plugin-Store | translate (`der Plugin-Store`); matches existing text (`den Plugin-Store hinzufügen`); keep `marketplace` verbatim inside CLI commands |
| plugin | Plugin | keep English (`das Plugin`, Pl. `Plugins`); matches `Plugin-Store` in existing text |
| main conversation / chat | Hauptchat / Chat | translate (`der Hauptchat`, `der Chat`); matches `chatten` in existing text |
| helper AI | Helfer-KI | translate (`die Helfer-KI`, Pl. `Helfer-KIs`); matches existing text |
| prompt | Prompt | keep English (`der Prompt`, Pl. `Prompts`) |
| copy-paste prompt | Prompt zum Kopieren | translate; matches existing UI (`Zum Kopieren`) |
| Full guide (9 steps) | Vollständige Anleitung (9 Schritte) | translate (nav label: `Vollständige Anleitung: 9 Schritte`); matches existing UI |
| Beginner track | Einsteigerkurs | translate (`der Einsteigerkurs`); matches existing UI |
| How-to | Kurzanleitungen | translate (Sg. `Kurzanleitung`, nav label: `Kurzanleitungen: wie genau`); matches existing UI |
| Wiki | Wiki | keep English (`das Wiki`, nav label: `Wiki: was ist das?`); matches existing UI |
| FAQ | FAQ / Häufige Fragen | keep English; use `Häufige Fragen` in nav/section titles and `FAQ` in prose, matching existing UI |
| Skills reference | Skill-Übersicht | translate (`die Skill-Übersicht`; nav label: `Alle 34 Skills im Überblick`); matches existing UI |
| overnight run | Über-Nacht-Lauf | translate (`der Über-Nacht-Lauf`; in verbal phrasing prefer `über Nacht laufen lassen`) |
| let it run on its own | allein laufen lassen | translate (or `selbstständig laufen lassen`); short, idiomatic everyday phrasing |
| steer / pull it back on track | nachsteuern / wieder auf Kurs bringen | translate (`nachsteuern` for "steer", `wieder auf Kurs bringen` for "pull it back on track") |
| unslop | KI-Floskeln entfernen | translate in prose; keep `/unslop` verbatim when referring to the skill or command |
| AI-sounding text ("slop") | Slop | English + gloss on first use (gloss: `generischer KI-Einheitsbrei` / `KI-typische Floskeln`); `der Slop` |
| Stuck? | Kommst du nicht weiter? | translate; natural `du`-register heading for end-of-page troubleshooting |
| You should see | Das solltest du sehen | translate; callout title, exact match to existing UI (`comp.callout.ok`) |

- Address the reader consistently with lowercase `du` / `dir` / `dein` (capitalized only at sentence start) and direct informal imperatives (`Probier`, `Schau`, `Mach`, `Kopier`), keeping sentences short and free of stiff *Behördendeutsch*.
- Treat `KI` as feminine (`die KI` → `sie`) and `pstack` as neuter (`es`); never use gendered pronouns (`er`/`sie`) or gendered nouns (`der Autor`) for `poteto`—repeat `poteto` by name or restructure the clause neutrally.
- Always use German typographic quotation marks `„…“` (bottom-99, top-66) in prose and inside JSX/MDX attributes such as `code="…"` so they stay idiomatic and never break attribute delimiters.
- Prefer colons (`:`) to introduce brief explanations and examples (matching existing UI style), use spaced en-dashes (` – `) rather than English em-dashes (`—`), and attach the ellipsis character `…` directly to the preceding word without a space (`Begriffe…`).
- Capitalize English loanwords used as German nouns (`Skill`, `Playbook`, `Commit`, `Diff`, `Prompt`, `Worktree`) and hyphenate mixed English-German or abbreviation compounds (`Skill-Paket`, `PR-Stack`, `Reasoning-Budget`, `To-do-Liste`, `pstack-Spiegel`).
