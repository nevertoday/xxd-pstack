| English term | Russian rendering | rule |
| --- | --- | --- |
| Agent Skill | Agent Skill | English + gloss on first use (gloss: «навык для ИИ-агента»); refers to the formal format/spec, use «навык» thereafter. |
| skill | навык | translate — already established across the Russian UI and home page (do not use «скилл»). |
| SKILL.md | `SKILL.md` | keep English — always in inline code; never translate or decline. |
| harness | harness | English + gloss on first use (gloss: «среда запуска ИИ, например Claude Code, Cursor или Codex»); keep uninflected in Russian prose (e.g. «внутри harness»). |
| playbook | сценарий | translate — established on the home page («сценарий работы» on first mention, «сценарий» thereafter). |
| poteto-mode | `poteto-mode` / `/poteto-mode` | keep English — never translate or decline; preserve the leading `/` when used as a command. |
| subagent | субагент | translate — standard Russian dev term; use «ИИ-помощник» only when the English uses the plain-words «helper AI». |
| worktree | worktree | English + gloss on first use (gloss: «отдельная рабочая папка того же Git-репозитория»); never translate as «рабочее дерево», which means Git's working tree. |
| todo list | список дел | translate — already established on the Russian home page. |
| verification skill | навык проверки | translate — consistent with «навык» and «проверка». |
| formal verification | формальная верификация | translate — standard CS term in Russian (the one context that uses «верификация» instead of «проверка»). |
| decision log | журнал решений | translate — use consistently across all pages (do not alternate with «лог решений»). |
| principles | принципы | translate — «инженерные принципы» on first mention (per home page); keep individual principle names (`prove it works`, `fix root causes`, etc.) in English. |
| tokens | токены | translate — standard Russian adaptation (sg. «токен»). |
| reasoning budget | бюджет рассуждений | translate — standard term for how long the model is allowed to think. |
| PR | PR | English + gloss on first use (gloss: «Pull Request — запрос на проверку и слияние изменений»); keep uninflected («в этом PR», «несколько PR»). |
| slash command | слеш-команда | translate — use normative Russian spelling «слеш» (not «слэш»). |
| model roles | роли моделей | translate — sg. «роль модели». |
| Custom Mode | Custom Mode | English + gloss on first use (gloss: «пользовательский режим в Cursor, который остаётся включённым на каждом сообщении»); keep English as the Cursor UI name. |
| fix a bug (playbook) | исправление бага | translate — verb form «исправить баг»; keep English if inside inline code. |
| add a feature (playbook) | добавление фичи | translate — verb form «добавить фичу»; keep English if inside inline code. |
| refactor (playbook) | рефакторинг | translate — keep English if inside inline code. |
| perf issue (playbook) | проблема производительности | translate — keep English if inside inline code. |
| investigation (playbook) | расследование | translate — e.g. «сценарий расследования»; keep English if inside inline code. |
| prototype (playbook) | прототип | translate — or «прототипирование» for the activity; keep English if inside inline code. |
| babysit (playbook) | babysit | English + gloss on first use (gloss: «присмотр за PR и проверками до готовности»); distinctive pstack playbook name. |
| shipping (playbook) | shipping | English + gloss on first use (gloss: «доведение изменений до PR, слияния и релиза»); avoids narrowing it to production deploy alone. |
| review panel | коллегия ревью | translate — clarify on first use that several models review one change together; avoid «панель ревью» (sounds like a UI panel). |
| budget (`/setup-pstack` choice) | бюджет | translate — keep the `/setup-pstack` option slugs (`large`, `medium`, `small`) in English. |
| reasoning effort levels (`xhigh`, `high`, `medium`, `low`) | `xhigh`, `high`, `medium`, `low` | keep English — keep level names verbatim in inline code; call the setting «уровень рассуждений». |
| checkpoint | контрольная точка | translate — clear, natural Russian for reader progress checkboxes (avoid «чекпоинт»). |
| reproduce / repro | воспроизвести / воспроизведение | translate — matches «воспроизведи» on the home page; for a minimal repro case use «пример воспроизведения». |
| root cause | первопричина | translate — natural engineering term (avoid the calque «корневая причина»); keep `fix root causes` in English. |
| verify / verification | проверить / проверка | translate — established on the home page (reserve «верификация» for «формальная верификация»). |
| evidence | доказательства | translate — sg. «доказательство»; avoids colliding with «подтверждение» (confirmation) and pairs naturally with `prove it works`. |
| diff | diff | keep English — standard among Russian developers; keep uninflected («посмотреть diff», «размер diff»). |
| commit | коммит | translate — universal Russian Git term («сделать коммит», «история коммитов»); keep `git commit` in English. |
| branch | ветка | translate — universal Russian Git term. |
| merge | слияние | translate — verb «слить»; cleaner and more uniform than «мёрж/мердж»; keep `git merge` in English. |
| CI | CI | English + gloss on first use (gloss: «автоматические проверки в репозитории»); keep uninflected thereafter. |
| lint | линтер / проверка линтером | translate — «линтер» for the tool, «проверка линтером» for the check/step; keep CLI commands in English. |
| test | тест | translate — pl. «тесты», verb «запустить / прогнать тесты». |
| codemod | codemod | English + gloss on first use (gloss: «скрипт для автоматического массового переписывания кода»); keep uninflected. |
| migration | миграция | translate — standard Russian dev term. |
| stack (of PRs) | стек PR | translate — translate «stack» as «стек» and keep `PR` in English; gloss on first use if needed: «цепочка зависимых PR». |
| harness adapter | адаптер для harness | translate — combine Russian «адаптер для» with uninflected `harness`. |
| mirror | зеркало | translate — already established in the Russian UI (refers to `backnotprop/pstack`). |
| official version | официальная версия | translate — matches the Russian UI («Официальный pstack» when referring directly to the repo). |
| marketplace | магазин плагинов | translate — established in the Russian lesson illustrations; keep literal CLI commands with `marketplace` in English. |
| plugin | плагин | translate — established in the Russian lesson illustrations. |
| main conversation / chat | основной чат / чат | translate — use «основной чат» when contrasting with subagents. |
| helper AI | ИИ-помощник | translate — established on the Russian home page («ИИ-помощники»); use wherever English uses the plain-words «helper AI». |
| prompt | промпт | translate — standard Russian spelling is «промпт» (never «промт»). |
| copy-paste prompt | готовый промпт | translate — natural Russian phrasing (or «промпт для копирования» when stressing the copy step). |
| Full guide (9 steps) | Полное руководство (9 шагов) | translate — matches existing Russian UI (`Полное руководство: 9 шагов` in nav); omit «(англ.)» on translated pages. |
| Beginner track | Курс для начинающих | translate — matches existing Russian home page (compact nav/section label: «Для начинающих»). |
| How-to | How-to | keep English — already kept in English in the Russian navigation; omit «(англ.)» on translated pages. |
| Wiki | Wiki | keep English — already kept in English in the Russian navigation; omit «(англ.)» on translated pages. |
| FAQ | Частые вопросы | translate — already established in the Russian navigation and UI; omit «(англ.)» on translated pages. |
| Skills reference | Справочник навыков | translate — use «Все навыки» in compact nav links to match the existing Russian menu. |
| overnight run | ночной запуск | translate — verb phrasing «запустить на ночь». |
| let it run on its own | оставить работать самостоятельно | translate — or «дать поработать самостоятельно» depending on sentence flow. |
| steer / pull it back on track | направить / вернуть в нужное русло | translate — «направить» (or «подправить курс») for `steer`, «вернуть в нужное русло» for `pull it back on track`. |
| unslop | убрать ИИ-штампы | translate — keep `/unslop` or `` `unslop` `` in English when naming the skill/command; translate as «убрать ИИ-штампы» in prose. |
| AI-sounding text ("slop") | шаблонный ИИ-текст («слоп») | translate — introduce «слоп» in guillemets on first use to connect with `unslop`; thereafter «шаблонный ИИ-текст» or «ИИ-штампы». |
| Stuck? | Застряли? | translate — matches «Застряли на каком-то шаге» in the existing Russian UI. |
| You should see | Вы должны увидеть | translate — exact match with the existing Russian callout label (`comp.callout.ok`). |

- **Address and register (`вы`)**: Address the reader with polite lowercase `вы` (`вам`, `ваш`, capitalized only at sentence start); keep sentences short, active, and plain, and use sentence case for all headings.
- **Gender-neutral `poteto`**: Never use `он`/`она` or gendered past-tense verbs (`создал`, `написал`) for `poteto`; restructure with present tense or nominal phrasing (e.g. «pstack — проект poteto», «как делает poteto», «у poteto»).
- **Russian typography**: Use guillemets `« »` for quotations (which also keeps JSX `code="…"` attributes valid), a spaced em-dash ` — ` for definitions and breaks, the ellipsis character `…`, and always write `ё` («всё», «ещё», «подойдёт») to match existing Russian pages.
- **Uninflected English terms**: Never glue Russian case endings with hyphens onto Latin words or commands (avoid «PR-а», «diff-е», «worktree-ев»); leave them uninflected and let surrounding Russian words carry the case («в этом PR», «размер diff», «в отдельном worktree»).
- **Alignment with existing UI**: Always write `ИИ` (not `AI`) in Russian prose, drop «(англ.)» from links to newly translated sections, and match existing UI callout labels (`Вы должны увидеть`, `Внимание`, `Так не делайте`, `Совет`, `Скопируйте это`).
