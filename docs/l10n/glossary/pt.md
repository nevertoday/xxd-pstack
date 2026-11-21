| English term | Brazilian Portuguese rendering | rule |
| --- | --- | --- |
| Agent Skill | Agent Skill | English + gloss on first use (gloss: pasta com instruções que ensina a IA a fazer um tipo de tarefa). Feminine (`uma Agent Skill`). |
| skill | skill | keep English — feminine (`a skill`, plural `as skills`); matches existing site text. |
| SKILL.md | `SKILL.md` | keep English — filename, always formatted as inline code. |
| harness | harness | English + gloss on first use (gloss: a ferramenta que roda a IA, como Claude Code, Cursor ou Codex). Masculine (`o harness`); never translate literally as “arreio”. |
| playbook | playbook | keep English — masculine (`o playbook`, plural `os playbooks`); matches existing site text. |
| poteto-mode | poteto-mode | keep English — skill/command name; masculine (`o poteto-mode`, `o /poteto-mode`). |
| subagent | subagente | translate — masculine (`o subagente`, plural `os subagentes`, no hyphen); use `IA ajudante` when the English says `helper AI`. |
| worktree | worktree | English + gloss on first use (gloss: uma segunda pasta de trabalho ligada ao mesmo repositório Git). Masculine (`o worktree`, plural `os worktrees`). |
| todo list | lista de tarefas | translate — matches existing site text. |
| verification skill | skill de verificação | translate — keep `skill` in English; feminine (`a skill de verificação`). |
| formal verification | verificação formal | translate — standard computer science term in pt-BR. |
| decision log | log de decisões | translate — keep `log` in English; masculine (`o log de decisões`). |
| principles | princípios / princípios de engenharia | translate — matches existing site text; always keep individual English principle names (`prove it works`, `fix root causes`, `build the lever`) unchanged. |
| tokens | tokens | keep English — masculine (`o token`, plural `os tokens`). |
| reasoning budget | orçamento de raciocínio | translate — masculine (`o orçamento de raciocínio`). |
| PR | PR | keep English — masculine (`o PR`, plural `os PRs`); expand to `Pull Request` only where the English explicitly defines it. |
| slash command | slash command | English + gloss on first use (gloss: comando que começa com `/`, como `/poteto-mode`). Masculine (`o slash command`, plural `os slash commands`). |
| model roles | papéis de modelo | translate — use `papel` (`papéis`) for `role` to avoid confusion with programming `função`. |
| Custom Mode | Custom Mode | English + gloss on first use (gloss: modo persistente do Cursor). Masculine (`o Custom Mode`); keep capitalized as a Cursor UI feature name. |
| fix a bug (playbook) | corrigir um bug | translate — keep `bug` in English; retain `` `fix a bug` `` if cited as a literal identifier. |
| add a feature (playbook) | adicionar uma funcionalidade | translate — retain `` `add a feature` `` if cited as a literal identifier. |
| refactor (playbook) | refatorar / refatoração | translate — verb `refatorar`, noun `refatoração`. |
| perf issue (playbook) | problema de performance | translate — natural pt-BR developer wording. |
| investigation (playbook) | investigação | translate — standard noun. |
| prototype (playbook) | protótipo | translate — standard noun. |
| babysit (playbook) | babysit | English + gloss on first use (gloss: acompanhar o PR ou a execução até terminar). Keep lowercase when naming the playbook (`o playbook babysit`). |
| shipping (playbook) | shipping | English + gloss on first use (gloss: entregar e colocar no ar). Keep lowercase when naming the playbook (`o playbook shipping`). |
| review panel | painel de revisão | translate — several models reviewing one change. |
| budget (`/setup-pstack` choice) | orçamento | translate — translate `budget` in prose, but keep the literal `/setup-pstack` options `large`, `medium`, `small` in English (with a brief parenthetical gloss if helpful). |
| reasoning effort levels (`xhigh`, `high`, `medium`, `low`) | `xhigh`, `high`, `medium`, `low` | keep English — never translate the level names; translate the category label as `níveis de esforço de raciocínio`. |
| checkpoint | checkpoint | keep English — masculine (`o checkpoint`, plural `os checkpoints`). |
| reproduce | reproduzir | translate — matches existing site text (`primeiro reproduza`). |
| repro | repro | English + gloss on first use (gloss: reprodução mínima do bug). Feminine (`a repro`); use `reprodução` in plain beginner-facing prose where clearer. |
| root cause | causa raiz | translate — feminine (`a causa raiz`). |
| verify / verification | verificar / verificação | translate — matches existing site text; prefer over `validar` for consistency. |
| evidence | evidências | translate — pair with `capturas de tela`, `saída de comandos`, and `gravações` (matching existing site text). |
| diff | diff | keep English — masculine (`o diff`, plural `os diffs`). |
| commit | commit | keep English — masculine (`o commit`, plural `os commits`); use verb phrase `fazer commit` (avoid `commitar`). |
| branch | branch | keep English — feminine (`a branch`, plural `as branches`, e.g. `na branch principal`). |
| merge | merge | keep English — masculine (`o merge`); use verb phrase `fazer merge` (avoid `mesclar` or `mergear`). |
| CI | CI | keep English — masculine (`o CI`, e.g. `o CI passou`). |
| lint | lint | keep English — masculine (`o lint`); use `rodar o lint` for the verb and `linter` for the tool. |
| test | teste / testes | translate — use `rodar os testes` and `testar`. |
| codemod | codemod | English + gloss on first use (gloss: script que transforma código automaticamente). Masculine (`o codemod`, plural `os codemods`). |
| migration | migração | translate — works naturally for both codebase and database migrations. |
| stack (of PRs) | stack de PRs | English + gloss on first use (gloss: sequência de PRs encadeados, um baseado no anterior). Feminine (`a stack de PRs`). |
| harness adapter | adaptador de harness | translate — keep `harness` in English; masculine (`o adaptador de harness`). |
| mirror (`backnotprop/pstack` copy) | cópia do pstack / cópia | translate — matches existing site text (`Cópia do pstack`, `a cópia do pstack`). |
| official version | versão oficial / pstack oficial | translate — matches existing site text (`pstack oficial`, `o original oficial`). |
| marketplace | marketplace | English + gloss on first use (gloss: loja de plugins). Masculine (`o marketplace`); aligns developer UI wording with the beginner lessons’ `loja de plugins`. |
| plugin | plugin | keep English — masculine (`o plugin`, plural `os plugins`); matches existing site text. |
| main conversation / chat | conversa principal / chat | translate — use `conversa principal` when contrasting with subagents, and `chat` for the input area. |
| helper AI | IA ajudante | translate — plural `IAs ajudantes`; matches existing site text. |
| prompt | prompt | keep English — masculine (`o prompt`, plural `os prompts`). |
| copy-paste prompt | prompt pronto para copiar | translate — keep `prompt` in English; matches existing `Copie isto` tone. |
| Full guide (9 steps) | Guia completo (9 passos) | translate — matches existing site text (`Guia completo: 9 passos` / `guia completo de 9 passos`). |
| Beginner track | Trilha para iniciantes | translate — use `Para iniciantes` in short nav labels and badges to match existing UI. |
| How-to | How-to | keep English — matches existing nav (`How-to: como fazer`). |
| Wiki | Wiki | keep English — feminine (`a Wiki`); matches existing nav (`Wiki: o que é cada coisa`). |
| FAQ | Perguntas frequentes | translate — matches existing site text. |
| Skills reference | Referência de skills | translate — keep `skills` in English; note nav uses `Todas as skills: as 34`. |
| overnight run | execução noturna | translate — use `rodar durante a noite` in verb clauses. |
| let it run on its own | deixar rodando sozinho | translate — agree in gender when the subject is `a IA` (`deixar a IA rodar sozinha`). |
| steer | corrigir o rumo / direcionar | translate — idiomatic pt-BR; avoid literal `dirigir`. |
| pull it back on track | colocar de volta nos trilhos | translate — natural pt-BR idiom. |
| unslop | unslop | English + gloss on first use (gloss: tirar o jeito de texto gerado por IA). Keep `/unslop` unchanged when it is the skill name. |
| AI-sounding text ("slop") | texto com cara de IA (“slop”) | English + gloss on first use (gloss for `slop`: texto genérico com cara de IA). Use `texto com cara de IA` in prose; keep `“slop”` in quotes when referencing the slang term. |
| Stuck? | Travou? | translate — matches existing site text (`Travou em algum passo`). |
| You should see | Você deve ver | translate — exact match with existing callout title. |

- **Address and tone**: Always address the reader as `você` (never `tu` or `o senhor`) with matching imperative/present verbs (`digite`, `rode`, `veja`, `escolha`). Keep a friendly, direct Brazilian developer voice—avoid European Portuguese forms (`ficheiro`, `ecrã`, `utilizador`) and stiff bureaucratic verbs (`efetuar`, `realizar`).
- **Gender neutrality for `poteto` and loanword gender**: Never use `ele`, `ela`, or gendered nouns like `o autor` for `poteto`; write `poteto` directly or restructure the sentence (`criado por poteto`, `quem mantém o pstack`). Keep loanword gender uniform across every page (feminine: `a skill`, `a branch`, `a repro`, `a stack`, `a Wiki`; masculine: `o playbook`, `o harness`, `o worktree`, `o PR`, `o commit`, `o diff`, `o merge`, `o CI`, `o lint`, `o prompt`, `o checkpoint`, `o plugin`, `o token`, `o codemod`, `o marketplace`, `o Custom Mode`).
- **Quotation marks and MDX safety**: Use typographic double quotes `“…”` (matching the existing pt-BR pages) in prose and inside double-quoted JSX/MDX attributes such as `code="…"`; never use guillemets `« »` or unescaped straight `"` inside attributes.
- **Punctuation and capitalization**: Use sentence case for headings, UI labels, and callouts (`Guia completo`, `Você deve ver`); use lowercase after colons unless starting a proper noun or standalone sentence (`Para iniciantes: três lições, 20 minutos.`); use the single-character ellipsis `…` and avoid the Oxford comma before `e` unless needed for clarity.
- **Short sentences and natural dev verbs**: Keep sentences crisp with one idea each, matching the pace of the English source, and favor everyday Brazilian developer phrasing (`rodar` for commands/tests, `fazer commit`/`fazer merge`, `captura de tela`, `travou`) over literal calques.
