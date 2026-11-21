| English term | Korean rendering | rule |
| --- | --- | --- |
| Agent Skill | Agent Skill | English + gloss on first use: `Agent Skill(에이전트 스킬)`. Refers to the cross-tool skill standard/concept; use `스킬` for short mentions afterward. |
| skill | 스킬 | translate — Matches existing Korean text (`스킬 34개`, `스킬 한눈에 보기`). Always keep individual skill/command names (`/how`, `/poteto-mode`) in English. |
| SKILL.md | SKILL.md | keep English — File name; keep formatted as inline code `` `SKILL.md` ``. |
| harness | 하네스 | translate — Add `(harness)` on first use in technical pages so readers recognize the English term; fits the site's Hangul loanword pattern (`스킬`, `플레이북`). |
| playbook | 플레이북 | translate — Matches existing Korean text (`플레이북 22개`). |
| poteto-mode | poteto-mode | keep English — Skill/command name; preserve the exact source form (`poteto-mode`, `/poteto-mode`, `$poteto-mode`, `/pstack:poteto-mode`). |
| subagent | 서브에이전트 | translate — Standard term in Korean Claude Code/AI dev writing. Use `도우미 AI` only when the English says "helper AI" or uses beginner plain wording. |
| worktree | worktree | English + gloss on first use: `worktree(워크트리, 같은 Git 저장소의 별도 작업 폴더)`. Keep in English to match `git worktree` commands. |
| todo list | 할 일 목록 | translate — Matches existing Korean text (`할 일 목록에 옮겨 적어요`). |
| verification skill | 검증 스킬 | translate — Pairs consistently with `검증` and `스킬`. |
| formal verification | 형식 검증 | translate — Standard Korean CS term; optionally add `(formal verification)` on first use. |
| decision log | 결정 로그 | translate — Shorter and friendlier than `의사결정 로그`; keep any literal file name in English. |
| principles | 원칙 / 엔지니어링 원칙 | translate — Matches existing Korean text (`엔지니어링 원칙 24개`); use `원칙` for short mentions. Always keep individual principle names (`prove it works`, `fix root causes`, etc.) in English. |
| tokens | 토큰 | translate — Standard Korean AI usage/billing term (`토큰 사용량`). |
| reasoning budget | 추론 예산 | translate — Add `(reasoning budget)` on first use if helpful; keeps it distinct from `/setup-pstack`'s cost `예산`. |
| PR | PR | keep English — Universal among Korean developers (`PR을 올리다`, `PR 리뷰`). |
| slash command | 슬래시 명령어 | translate — Matches `명령어` in existing Korean text. |
| model roles | 모델 역할 | translate — Natural in Korean (`모델 역할별`); keep config keys or role slugs in English if shown in code. |
| Custom Mode | Custom Mode | English + gloss on first use: `Custom Mode(커스텀 모드)`. Keep `Custom Mode` so readers match Cursor's UI label. |
| fix a bug (playbook) | 버그 수정 | translate — Playbook name; keep English only if shown as a literal slug/code token. |
| add a feature (playbook) | 기능 추가 | translate — Playbook name. |
| refactor (playbook) | 리팩터링 | translate — Standard Korean spelling (`리팩터링`). |
| perf issue (playbook) | 성능 문제 | translate — Playbook name. |
| investigation (playbook) | 조사 | translate — Playbook name; use `원인 조사` when specifically referring to tracking down a bug or failure. |
| prototype (playbook) | 프로토타입 | translate — Playbook name; use `프로토타입 만들기` when phrased as an action. |
| babysit (playbook) | babysit | English + gloss on first use: `babysit(PR·CI 돌보기)`. Keep `babysit` as the playbook name since Korean has no concise one-word equivalent; use `지켜보며 챙기기` in plain explanations. |
| shipping (playbook) | 배포 | translate — Playbook name for landing/shipping changes; use `출시` when context is releasing a product/feature to users. |
| review panel | 리뷰 패널 | translate — Concise and natural (`리뷰 패널`); gloss on first use as `여러 모델이 함께 검토하는 리뷰 패널` if the English doesn't already explain it. |
| budget (`/setup-pstack`) | 예산 | translate — Use for the `/setup-pstack` cost choice; keep the option labels `large`, `medium`, `small` verbatim in English. |
| reasoning effort levels (`xhigh`, `high`, `medium`, `low`) | xhigh, high, medium, low | keep English — Keep all four level names verbatim; translate the label "reasoning effort" as `추론 강도`. |
| checkpoint | 체크포인트 | translate — Standard term for a progress check the reader ticks off. |
| reproduce / repro | 재현 / 재현하다 | translate — Standard Korean dev term (`버그를 재현하다`); in beginner-facing prose, plain phrasing like `문제를 다시 일으켜 보다` matches existing Korean text. |
| root cause | 근본 원인 | translate — Standard term; always keep the principle name `fix root causes` in English. |
| verify / verification | 검증 / 확인 | translate — Use `검증` in technical contexts (`검증 스킬`, `형식 검증`, `검증 단계`) and `확인` in everyday or beginner phrasing (matching existing Korean text: `넘기기 전에 확인`). |
| evidence | 근거 | translate — Natural technical Korean for screenshots, command output, and before/after proof (`검증 근거`, `결정 로그의 근거`). |
| diff | diff | keep English — Universal among Korean developers (`diff를 확인하다`). |
| commit | 커밋 | translate — Standard in Korean developer prose (`커밋 메시지`, `커밋하다`); keep `git commit` commands in English. |
| branch | 브랜치 | translate — Standard in Korean developer prose (`메인 브랜치`, `새 브랜치`). |
| merge | 머지 | translate — Everyday Korean developer term (`PR을 머지하다`); keep `병합` only when quoting GitHub's Korean UI button. |
| CI | CI | keep English — Universal among Korean developers (`CI를 통과하다`). |
| lint | 린트 | translate — Standard in Korean prose (`린트를 돌리다`, `린트 오류`); keep tool/command names in English. |
| test | 테스트 | translate — Universal in Korean (`테스트를 돌리다`, `단위 테스트`). |
| codemod | codemod | English + gloss on first use: `codemod(코드모드, 코드를 일괄 변환하는 스크립트)`. Commonly kept in English by Korean developers. |
| migration | 마이그레이션 | translate — Standard Korean dev loanword (`마이그레이션 작업`). |
| stack (of PRs) | PR 스택 / 스택 | translate — Combine English `PR` with loanword `스택` (`PR 스택`); briefly explain on first use as `서로 이어지는 여러 PR 묶음` if needed. |
| harness adapter | 하네스 어댑터 | translate — Pairs consistently with `하네스`. |
| mirror | 미러 / pstack 미러 | translate — Matches existing Korean text (`pstack 미러`). |
| official version | 공식 버전 / 공식 원본 | translate — Use `공식 버전` in general prose and `공식 원본` / `공식 pstack` when contrasting directly with `pstack 미러` (matching existing Korean text). |
| marketplace | 플러그인 스토어 | translate — Matches existing Korean text (`1단계: 플러그인 스토어 추가`); render "plugin marketplace" as `플러그인 스토어` without duplicating `플러그인`, and add `(marketplace)` on first mention alongside `/plugin marketplace`. |
| plugin | 플러그인 | translate — Matches existing Korean text (`플러그인 스토어`). |
| main conversation / chat | 메인 대화 | translate — Matches `대화` in existing Korean text; use `대화창` when referring to the chat input/window itself. |
| helper AI | 도우미 AI | translate — Matches existing Korean text (`할 일이 많으면 도우미 AI도 써요`); use for plain-words references to subagents. |
| prompt | 프롬프트 | translate — Standard Korean AI term. |
| copy-paste prompt | 복사해서 쓰는 프롬프트 | translate — Matches the site's polite, non-slang tone (`복사해서 바로 쓰면 돼요`); avoid slang `복붙`. |
| Full guide (9 steps) | 전체 가이드: 9단계 | translate — Matches existing Korean UI; use `전체 가이드` when `(9 steps)` is omitted. |
| Beginner track | 입문 코스 | translate — Matches existing Korean UI (`입문 코스: 여기서 시작`). |
| How-to | How-to | keep English — Matches existing Korean UI (`How-to: 구체적인 방법`). |
| Wiki | Wiki | keep English — Matches existing Korean UI (`Wiki: 용어 설명`). |
| FAQ | 자주 묻는 질문 | translate — Matches existing Korean UI (`자주 묻는 질문`). |
| Skills reference | 스킬 한눈에 보기 | translate — Matches existing Korean UI (`스킬 한눈에 보기: 34개 전부`). |
| overnight run | 밤새 실행 / 밤새 돌려 두기 | translate — Use `밤새 실행` as a noun phrase and `밤새 돌려 두기` / `밤새 돌려 두다` for headings or actions; friendlier than `야간 배치`. |
| let it run on its own | 알아서 돌아가게 두다 | translate — Use `알아서 돌아가게 두기` in headings/labels. |
| steer / pull it back on track | 방향을 잡다 / 방향을 바로잡다 | translate — Use `방향 잡기` in short headings; avoid stiff literal `조종하다` or `스티어링`. |
| unslop | unslop | English + gloss on first use: `unslop(AI 티 빼기)`. Keep `/unslop` or `unslop` in English as the skill name; use `AI 티를 빼다` when used as a regular verb in prose. |
| AI-sounding text ("slop") | AI 티 나는 글 | translate — Add `("slop")` only where the English explicitly introduces `slop` to explain `unslop`. |
| Stuck? | 막혔나요? | translate — Echoes `어느 단계에서 막혔거나` in existing Korean text and fits the site's concise 해요체. |
| You should see | 이렇게 보이면 돼요 | translate — Matches existing Korean UI (`comp.callout.ok`). |

- **Register (해요체 + compact labels)**: Use warm, polite 해요체 (`…해요`, `…하세요`, `…예요/이에요`, `…있나요?`) for all prose, headings, and Q&A — never formal 합니다체 (`…합니다`) or plain 해라체 (`…한다`). In tight UI labels, diagram steps, and table cells, use short nominalized endings (`…하기`, `…고침`, `…보여 줌`), matching the existing Korean pages.
- **Reader & author references**: Omit second-person pronouns naturally and use `당신` sparingly only when needed for clarity (use `…분` for audience descriptions like `코딩하는 분`). Always refer to the author as `poteto` or `작성자` — never use gendered pronouns (`그`, `그녀`).
- **Quotation marks & punctuation**: Use typographic double quotes `“ ”` for quoted speech, UI text, and air-quotes (not straight `"` and not `「」`). Use Unicode ellipsis `…`, middle dot `·` for compact pairings (`질문·토론하기`, `입문 코스 · 레슨 1 / 3`), colons `:` for label subtitles (`전체 가이드: 9단계`), and parentheses with no leading space (`Claude Code(또는 Cursor, Codex)`). Avoid em-dashes (`—`); split into short sentences or use colons/commas instead.
- **Particles & spacing**: Attach Korean particles directly to English terms, inline code, and numbers without spaces, following Korean pronunciation (`pstack을`, `/poteto-mode가`, `PR을`, `PR로`, `diff를`, `CI가`, `worktree에서`, `SKILL.md에`). Keep auxiliary verbs spaced (`해 보게`, `보여 줌`, `남겨 주세요`) to match existing pages.
- **Sentence rhythm & vocabulary**: Keep sentences short with one idea each, splitting long English sentences rather than stacking modifiers. Prefer everyday Korean verbs (`돌리다`, `고치다`, `바꾸다`, `보여 주다`) over stiff Sino-Korean phrasing (`수행하다`, `진행하다`).
