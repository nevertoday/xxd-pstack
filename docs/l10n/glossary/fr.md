| English term | French rendering | rule |
| --- | --- | --- |
| Agent Skill | Agent Skill | English + gloss on first use — gloss: *un dossier contenant un fichier `SKILL.md` qui apprend à l'IA à gérer un type de tâche* (masculine: *un Agent Skill*, *des Agent Skills*). |
| skill | skill | keep English — masculine (*un skill*, *des skills*); matches existing French text (*pack de skills*, *34 skills*). |
| SKILL.md | `SKILL.md` | keep English — filename, always in inline code. |
| harness | harness | English + gloss on first use — gloss: *l'outil qui exécute l'IA (Claude Code, Cursor, Codex, etc.)*; masculine (*le harness*). |
| playbook | playbook | English + gloss on first use — gloss: *la marche à suivre standard pour un type de tâche*; masculine (*un playbook*, *des playbooks*); matches existing French text. |
| poteto-mode | poteto-mode | keep English — never translate; keep `/` or `$` prefixes when written as a command; masculine when referred to by pronoun (*il choisit…*). |
| subagent | sous-agent | translate — masculine (*un sous-agent*, *des sous-agents*); standard in French dev docs. Reserve *IA d'appoint* for the plain-words term *helper AI*. |
| worktree | worktree | English + gloss on first use — gloss: *un dossier de travail séparé pour le même dépôt Git*; masculine (*un worktree*, *des worktrees*). |
| todo list | liste de tâches | translate — feminine (*la liste de tâches*); matches existing French text. |
| verification skill | skill de vérification | translate — keep *skill* in English (*un skill de vérification*, *des skills de vérification*). |
| formal verification | vérification formelle | translate — standard French computer science term. |
| decision log | journal de décisions | translate — masculine (*le journal de décisions*); keep actual filenames untouched. |
| principles | principes / principes d'ingénierie | translate — matches existing French text (*24 principes d'ingénierie*); always keep individual principle names (*prove it works*, *fix root causes*, *build the lever*…) in English. |
| tokens | tokens | English + gloss on first use — gloss: *l'unité de mesure et de facturation de l'IA*; masculine (*un token*, *des tokens*). |
| reasoning budget | budget de raisonnement | translate — masculine (*le budget de raisonnement*). |
| PR | PR | English + gloss on first use — gloss: *Pull Request, demande de revue et de fusion de modifications dans la branche principale*; feminine (*une PR*, plural *des PR*). |
| slash command | commande slash | translate — feminine (*une commande slash*); keep the command itself starting with `/` in English. |
| model roles | rôles de modèle | translate — singular: *rôle de modèle*. |
| Custom Mode | Custom Mode | English + gloss on first use — gloss: *mode personnalisé persistant de Cursor*; keep capitalized as a Cursor UI label. |
| fix a bug (playbook) | corriger un bug | translate — keep *bug* (masculine); keep English if shown as an exact playbook slug in code. |
| add a feature (playbook) | ajouter une fonctionnalité | translate — keep English if shown as an exact playbook slug in code. |
| refactor (playbook) | refactoring / refactorer | keep English — naturalized French dev usage (noun *un refactoring*, verb *refactorer*); keep `refactor` when shown as a playbook slug. |
| perf issue (playbook) | problème de performance | translate — keep English if shown as an exact playbook slug in code. |
| investigation (playbook) | investigation | translate — exact French cognate (feminine: *une investigation*). |
| prototype (playbook) | prototype | translate — exact French cognate (masculine: *un prototype*, verb *prototyper*). |
| babysit (playbook) | babysit | English + gloss on first use — gloss: *suivi automatique d'une PR, de sa CI et des retours de revue*; keep English as the distinctive playbook name. |
| shipping (playbook) | livraison | translate — or verb *livrer*; keep `shipping` in English only when shown as a playbook slug in code. |
| review panel | panel de revue | translate — masculine (*un panel de revue*). |
| budget (`/setup-pstack` choice) | budget | translate — keep the CLI option values `large`, `medium`, `small` in English (gloss in prose if helpful: *élevé / moyen / réduit*). |
| reasoning effort levels (`xhigh`, `high`, `medium`, `low`) | niveaux d'effort de raisonnement (`xhigh`, `high`, `medium`, `low`) | keep English — keep `xhigh`, `high`, `medium`, `low` untouched; translate only the surrounding phrase as *niveaux d'effort de raisonnement*. |
| checkpoint | point de contrôle | translate — masculine (*un point de contrôle*); keep the JSX component `<Checkpoint>` untouched. |
| reproduce / repro | reproduire / reproduction | translate — matches existing French text (*reproduis d'abord le bug*); use *cas de reproduction* for *repro* where clearer. |
| root cause | cause racine | translate — feminine (*la cause racine*); keep `fix root causes` in English when citing the principle name. |
| verify / verification | vérifier / vérification | translate — matches existing French text. |
| evidence | preuve / preuves | translate — never use *évidence* (false friend meaning "obviousness"). |
| diff | diff | keep English — masculine (*un diff*, *le diff*). |
| commit | commit | keep English — masculine (*un commit*, *des commits*; verb *faire un commit* or *commiter*). |
| branch | branche | translate — feminine (*une branche*, *la branche principale*). |
| merge | fusionner / fusion | translate — standard in written French Git docs; keep `merge` inside shell commands (`git merge`). |
| CI | CI | English + gloss on first use — gloss: *intégration continue, les tests et vérifications lancés automatiquement*; feminine (*la CI*). |
| lint | lint | English + gloss on first use — gloss: *vérification automatique du style et des erreurs simples du code*; masculine (*le lint*, *un linter*; verb *lancer le lint* or *linter*). |
| test | test | translate — masculine (*un test*, *les tests*; verb *tester*). |
| codemod | codemod | English + gloss on first use — gloss: *script de modification automatique du code à grande échelle*; masculine (*un codemod*). |
| migration | migration | translate — feminine (*une migration*). |
| stack (of PRs) | stack de PR | English + gloss on first use — gloss: *une série de PR empilées les unes sur les autres*; feminine (*une stack de PR*); keeps the link to the name *pstack*. |
| harness adapter | adaptateur de harness | translate — keep *harness* in English (masculine: *un adaptateur de harness*). |
| mirror | miroir | translate — matches existing French text (*le miroir de pstack*). |
| official version | version officielle | translate — use *dépôt officiel* or *pstack officiel* when referring to the repository, matching existing French text. |
| marketplace | boutique de plugins / marketplace | translate — use *boutique de plugins* in beginner-facing text (matches existing French text); *marketplace* (masculine) may be used in CLI/technical references with *boutique de plugins* as gloss. |
| plugin | plugin | keep English — masculine (*un plugin*, *des plugins*); matches existing French text (*boutique de plugins*). |
| main conversation | conversation principale | translate — the thread you type into, as opposed to subagents. |
| chat | chat | keep English — masculine (*le chat*); *discussion* also works in plain-language beginner prose. |
| helper AI | IA d'appoint | translate — feminine (*une IA d'appoint*, *des IA d'appoint*); matches existing French text. |
| prompt | prompt | keep English — masculine (*un prompt*, *des prompts*); *message* is acceptable in beginner lessons (matches existing French text). |
| copy-paste prompt | prompt à copier-coller | translate — keep *prompt* in English; short UI label remains *À copier* (matches existing `comp.copyTitle`). |
| Full guide (9 steps) | Guide complet : 9 étapes | translate — matches existing French UI (`ui.main`); use *le guide complet en 9 étapes* in running text. |
| Beginner track | Parcours débutant | translate — matches existing French UI (`ui.lessons`, `lesson.eyebrow`). |
| How-to | Fiches pratiques | translate — matches existing French UI (`ui.howto`: *Fiches pratiques : comment faire*). |
| Wiki | Wiki | keep English — matches existing French UI (`ui.wiki`: *Wiki : c'est quoi ?*). |
| FAQ | FAQ | keep English — feminine (*la FAQ*); matches existing French UI (`ui.faq`). |
| Skills reference | Les 34 skills en un coup d'œil / Référence des skills | translate — keep *skills* in English; use *Les 34 skills en un coup d'œil* for the navigation/page title (matches `ui.skills`) and *Référence des skills* in generic references. |
| overnight run | session de nuit / exécution de nuit | translate — use *session de nuit* for letting the AI work overnight, *exécution de nuit* in technical contexts. |
| let it run on its own | la laisser tourner toute seule | translate — feminine agreement for *l'IA* (*la laisser tourner toute seule*), masculine (*le laisser tourner tout seul*) for *pstack* or a *skill*. |
| steer / pull it back on track | recadrer / remettre sur les rails | translate — idiomatic French (*recadrer l'IA*, *la remettre sur les rails*). |
| unslop | retirer les tics d'IA / unslop | translate — use *retirer les tics d'IA* (or *épurer le style IA*) for the action in prose; keep English for the skill name (`/unslop`). |
| AI-sounding text ("slop") | texte qui sent l'IA (« slop ») | translate — mention *« slop »* on first use (masculine *le slop* if reused); *remplissage IA* also works for filler prose. |
| Stuck? | Un blocage ? | translate — recurring end-of-page troubleshooting heading; concise, idiomatic, and gender-neutral. |
| You should see | Vous devriez voir | translate — exact match with existing French callout title (`comp.callout.ok`). |

- **Address and voice**: Address the reader as `vous` in a friendly, direct, plain-spoken register (short sentences, one idea each), but use `tu` inside copy-paste prompts addressed to the AI (matching existing lessons, e.g. *« Comment tu as vérifié… »*).
- **Grammatical gender**: Treat *l'IA* as feminine (*elle*, *faites-la essayer elle-même*) and *pstack*, `/poteto-mode`, and *un skill* as masculine (*il choisit…*). Never use *il* or *elle* for `poteto`; repeat *poteto* or rephrase to stay gender-neutral.
- **French punctuation and quotes**: Use French guillemets `« … »` in prose and inside MDX double-quoted attributes (like `code="…"`), put a non-breaking space (`\u00a0`) inside guillemets and before `:`, `;`, `?`, `!`, and use the typographic ellipsis `…`.
- **Sentence case**: Use French sentence case for all headings, callout titles, table headers, and UI labels (capitalize only the first word and proper nouns: *Guide complet : 9 étapes*, *Première utilisation*), never English Title Case.
- **Idiomatic tech French**: Keep naturalized developer loanwords (*skill*, *playbook*, *PR*, *commit*, *diff*, *prompt*, *worktree*, *tokens*) with consistent gender, translate surrounding prose naturally, and avoid classic false friends (*evidence* → *preuves*, never *évidence*; *actually* → *en fait / vraiment*, never *actuellement*).
