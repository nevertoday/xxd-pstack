| English term | Japanese rendering | rule |
| --- | --- | --- |
| Agent Skill | Agent Skill | English + gloss on first use: `Agent Skill（AI に特定の作業の進め方を教える指示ファイル一式）`. Shorten to `スキル` after introduction. |
| skill | スキル | translate; existing site term (`スキル 34 個`). Keep `/skill-name` in English. |
| SKILL.md | `SKILL.md` | keep English; file name, format as inline code. |
| harness | ハーネス | translate; on first mention without a `<Term>` link, briefly gloss as `ハーネス（Claude Code や Cursor など、AI を動かすツール本体）`. |
| playbook | プレイブック | translate; existing site term (`プレイブック 22 個`). |
| poteto-mode | poteto-mode | keep English; skill/command name (`/poteto-mode`, `$poteto-mode`). |
| subagent | サブエージェント | translate; standard Japanese dev term. Use `ヘルパーの AI` only when the English says `helper AI`. |
| worktree | worktree | English + gloss on first use: `worktree（同じ Git リポジトリの別作業フォルダ）`. Standard among Japanese developers (matches `git worktree`). |
| todo list | ToDo リスト | translate; existing site term (keep exact casing `ToDo リスト`). |
| verification skill | 検証スキル | translate; aligns with `スキル` and `検証`. |
| formal verification | 形式検証 | translate; standard Japanese CS term; keep any plain-language explanation from the English. |
| decision log | 判断ログ | translate; concise and natural (keep file names such as `decisions.md` in English if referenced). |
| principles | エンジニアリングの原則 / 原則 | translate; existing site term (`エンジニアリングの原則 24 個`). Always keep individual principle names (`prove it works`, `fix root causes`, etc.) in English. |
| tokens | トークン | translate; standard Japanese AI term (e.g., `トークン消費`, `トークン数`). |
| reasoning budget | 推論バジェット | translate; allotted thinking effort/time (keep distinct from `/setup-pstack`'s `budget` = `予算`). |
| PR | PR | English + gloss on first use: `PR（プルリクエスト）`. Keep `PR` everywhere after first use. |
| slash command | スラッシュコマンド | translate; standard Japanese term for `/…` commands. |
| model roles | モデルの役割 | translate; natural in prose (keep config keys in English if shown in code). |
| Custom Mode | Custom Mode | English + gloss on first use: `Custom Mode（Cursor のカスタムモード）`. Matches Cursor's UI label. |
| fix a bug (playbook) | バグ修正 | translate; keep exact slug in English if written as inline code. |
| add a feature (playbook) | 機能追加 | translate; keep exact slug in English if written as inline code. |
| refactor (playbook) | リファクタリング | translate; keep exact slug in English if written as inline code. |
| perf issue (playbook) | パフォーマンス問題 | translate; use `パフォーマンス改善` when phrased as a goal or action. |
| investigation (playbook) | 調査 | translate; keep exact slug in English if written as inline code. |
| prototype (playbook) | プロトタイプ | translate; use `プロトタイプ作成` when phrased as an action. |
| babysit (playbook) | babysit | English + gloss on first use: `babysit（PR や CI の見守り・自動対応）`. Matches the `/babysit` skill name. |
| shipping (playbook) | リリース作業 | translate; covers PR finalization through merge/release (keep `shipping` if written as an inline-code identifier). |
| review panel | レビューパネル | translate; gloss on first use if unexplained as `レビューパネル（複数モデルで 1 つの変更をレビューする仕組み）`. |
| budget (`/setup-pstack`: `large` / `medium` / `small`) | 予算 | translate; refers to the `/setup-pstack` cost choice (distinct from `reasoning budget` = `推論バジェット`). Keep the option values `large`, `medium`, `small` in English (optionally gloss on first use as `large（大）` / `medium（中）` / `small（小）`). |
| reasoning effort levels (`xhigh`, `high`, `medium`, `low`) | `xhigh` / `high` / `medium` / `low` | keep English; exact setting values, never translate (render `reasoning effort` as `推論レベル` if named in prose). |
| checkpoint | チェックポイント | translate; saved progress checkmarks ticked by the reader. |
| reproduce / repro | 再現する / 再現 | translate; existing site term (`再現`). Render noun `repro` as `再現手順` or `再現コード` by context. |
| root cause | 根本原因 | translate; keep the principle name `fix root causes` in English. |
| verify / verification | 確かめる / 検証 | translate; use `確かめる` in plain or beginner prose (matching the existing home page) and `検証` / `検証する` for nouns, headings, and technical terms (`検証スキル`, `形式検証`). |
| evidence | 根拠 / 証拠 | translate; use `根拠` in general and in decision logs, and `証拠` when referring naturally to screenshots/logs proving a fix works (avoid stiff corporate `エビデンス`). |
| diff | diff | keep English; idiomatic among Japanese developers (`diff を確認する`); `差分` is fine in plain beginner explanations. |
| commit | コミット | translate; katakana is standard in Japanese prose (`コミットする`), while `commit` stays English in commands like `git commit`. |
| branch | ブランチ | translate; standard in Japanese prose (`main ブランチ`, `ブランチを切る`). |
| merge | マージ | translate; standard in Japanese prose (`マージする`). |
| CI | CI | keep English; universally used in Japanese dev writing. |
| lint | lint | keep English; standard in Japanese dev writing (`lint を通す`, `lint エラー`). |
| test | テスト | translate; standard in Japanese prose (`テストを通す`). |
| codemod | codemod | English + gloss on first use: `codemod（コードを一括自動変換するスクリプト）`. Kept in English by Japanese developers. |
| migration | マイグレーション | translate; use for DB/codebase migrations (`移行` is fine for general tool or version switches). |
| stack (of PRs) | PR スタック | translate; gloss on first use as `PR スタック（依存し合う小さな PR を積み上げた構成）`, then shorten to `スタック` when context is clear. |
| harness adapter | ハーネスアダプター | translate; aligns with `ハーネス`. |
| mirror (`backnotprop/pstack` copy) | ミラー / pstack ミラー | translate; existing site term (`pstack のミラー`, `pstack ミラー`). |
| official version | 公式版 / 公式の原版 | translate; matches existing site wording (`公式の原版`, `公式 pstack`). |
| marketplace | マーケットプレイス | translate; matches Claude Code's `marketplace` CLI/docs for developers (keep existing `プラグインストア` in beginner lesson 2's figure, and bridge with `マーケットプレイス（プラグインストア）` if referencing it). |
| plugin | プラグイン | translate; aligns with existing `プラグインストア`. |
| main conversation / chat | メインの会話 / チャット | translate; matches existing `チャット` on the home page. |
| helper AI | ヘルパーの AI | translate; existing site term (plain-words version of `subagent`). |
| prompt | プロンプト | translate; standard Japanese AI term (use `メッセージ` only when the English says `message`). |
| copy-paste prompt | コピペ用プロンプト | translate; concise and idiomatic (existing copy-box label is `これをコピー`). |
| Full guide (9 steps) | 完全ガイド（9 ステップ） | translate; existing site term (nav label uses `完全ガイド：9 ステップ`). |
| Beginner track | 入門コース | translate; existing site term. |
| How-to | How-to | keep English; existing site term (`How-to：具体的なやり方`). |
| Wiki | Wiki | keep English; existing site term (`Wiki：用語の説明`). |
| FAQ | よくある質問 | translate; existing site term. |
| Skills reference | スキル一覧 | translate; existing site term (`スキル一覧：全 34 個`). |
| overnight run | 夜間実行 | translate; use `夜間実行` as a noun/heading and `一晩かけて走らせる` in conversational prose. |
| let it run on its own | 任せて走らせる | translate; plain and natural (`AI に任せて走らせる`), avoiding stiff `自律稼働させる`. |
| steer / pull it back on track | 軌道修正する | translate; idiomatic everyday Japanese for both phrases. |
| unslop | unslop | English + gloss on first use: `unslop（AI っぽい文章のクセを取り除くこと）`. Matches the `/unslop` skill name. |
| AI-sounding text ("slop") | AI っぽい文章 | translate; add `（slop）` on first use when introducing `unslop`. |
| Stuck? | つまずいたときは？ | translate; matches the friendly tone and `つまずいた` wording in existing Japanese copy. |
| You should see | こう表示されれば OK | translate; existing site callout title (`comp.callout.ok`). |

- **Register and tone**: Use polite です／ます調 in a friendly, practical voice with short sentences (one idea per sentence) and everyday wording; omit `あなた` unless needed for clarity or contrast.
- **Spacing around Latin text and numbers**: Put a half-width space between Japanese characters and half-width Latin words or digits (`はじめての pstack`, `3 つのレッスン、20 分`, `スキル 34 個`), matching the existing Japanese UI; never add spaces next to full-width Japanese punctuation (`。`, `、`, `：`, `（`, `）`, `「`, `」`).
- **Punctuation and quotes**: Use full-width Japanese punctuation (`。`, `、`, `：`, `？`, `！`, `（…）`, `…`) in prose, full-width `：` for labels and subheadings (`完全ガイド：9 ステップ`), and `「…」` for quoted phrases, UI text, and inner quotes inside MDX attributes like `code="…"`.
- **Gender-neutral author reference**: Refer to the author only as `poteto` or `作者` (e.g., `poteto が作っています`, `作者の X`); never use gendered pronouns (`彼` / `彼女`).
- **Untranslated tokens in Japanese sentences**: Keep skill/command names (`/poteto-mode`), principle names (`prove it works`), product names (`Claude Code`, `Cursor`, `Codex`), paths, flags, and model slugs verbatim in English, followed by a space before Japanese particles (`/poteto-mode がプレイブックを選ぶ`, `prove it works を適用してください`).
