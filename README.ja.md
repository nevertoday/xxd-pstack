<div align="center">

# pstack 入門ガイド

[中文](./README.md) · [English](./README.en.md) · [한국어](./README.ko.md) · **日本語** · [العربية](./README.ar.md) · [Español](./README.es.md) · [Français](./README.fr.md) · [Русский](./README.ru.md) · [Deutsch](./README.de.md) · [Português](./README.pt.md)

**AI に、信頼できるシニアエンジニアのようにコードを書かせる：まず理解し、それから手を動かし、証拠を示す。**

[pstack](https://github.com/backnotprop/pstack) をやさしい言葉で解説する入門ガイドです。最初のインストールコマンドから、実際のプロジェクトで一晩任せて走らせるところまで扱います。

### 👉 [オンラインで読む：pstack.xiaoxiaodong.ai/en](https://pstack.xiaoxiaodong.ai/en/)

チュートリアルサイトは英語と中国語で読めます（中国語版：<https://pstack.xiaoxiaodong.ai>）。

![ガイド](https://img.shields.io/badge/%E3%82%AC%E3%82%A4%E3%83%89-9%E3%82%B9%E3%83%86%E3%83%83%E3%83%97-8A9A8C?style=flat-square)
![スキル](https://img.shields.io/badge/%E3%82%B9%E3%82%AD%E3%83%AB-34%E5%80%8B-D7B9C8?style=flat-square)
![How-to](https://img.shields.io/badge/How--to-17%E6%9C%AC-C9A97A?style=flat-square)
![Wiki](https://img.shields.io/badge/Wiki-20%E9%A0%85%E7%9B%AE-9AA8C4?style=flat-square)
![ツール](https://img.shields.io/badge/Claude_Code_·_Cursor_·_Codex-✓-8A9A8C?style=flat-square)

</div>

<p align="center">
  <img src="assets/en/hero.svg" width="100%" alt="デモ：/poteto-mode のプロンプトを一行入力すると、AI がバグ修正の手順を並べて一つずつチェックし、最後に修正前後の証拠を示す">
</p>

<p align="center">
  <a href="#-なぜ必要か">なぜ必要か</a> ·
  <a href="#-どう動くか">どう動くか</a> ·
  <a href="#-3-分で始める">始め方</a> ·
  <a href="#️-34-個のスキルを-1-枚で">スキルマップ</a> ·
  <a href="#-実際のプロジェクトで">実際のプロジェクト</a> ·
  <a href="#-一晩任せる">一晩任せる</a> ·
  <a href="#-ローカルで動かす">ローカルで動かす</a> ·
  <a href="https://pstack.xiaoxiaodong.ai/en/">オンラインで読む</a>
</p>

## 😵 なぜ必要か

AI でコードを書いたことがあれば、たぶんこんな場面を見たことがあるはずです。いきなり書き換え始め、それらしく見える場所を直して、「修正しました。これで大丈夫なはずです」と言う。動かしてみると、まだ壊れている。

<p align="center">
  <img src="assets/en/before-after.svg" width="100%" alt="比較：pstack なしでは AI がすぐにコードを書き換え、再現と検証を飛ばす。pstack ありでは 5 つの手順をすべて踏み、修正前後の証拠を示す">
</p>

pstack は、poteto（React コアチームのメンバーで、Cursor で働いている）が毎日自分でコードを書くときに使っている Agent Skills のパックです。**モデルは同じまま。変わるのは仕事の順番と基準です：**

| | ふつうの AI | pstack を入れると |
|---|---|---|
| 手を動かす前 | すぐ書き換える | 目標を自分の言葉で言い直し、まず `/how` でコードを読む |
| バグ修正 | 表面に条件分岐を足す | まず再現し、**最初におかしくなる場所**を見つけてから直す |
| 「できました」と言うとき | 「これで大丈夫なはずです」 | 実際のコマンド出力、保存された値、前後の比較を貼る |
| コードの量 | 直すほど増える | 第一原則：消せるものは消し、最小の変更で解決する |
| 並行作業 | 複数の AI が同じフォルダを取り合う | それぞれ自分の worktree を使うので、安心して同時に何本も走らせられる |

> [!NOTE]
> pstack はサブエージェントを多く送り出し、複数のモデルに互いの粗探しをさせるので、**遅くなり、トークンも多く使います**。それが厳密さの代償です。小さな変更には使わないでください。節約の方法は [コストを抑える](https://pstack.xiaoxiaodong.ai/en/howto/cost/)（英語）を見てください。

## 🧭 どう動くか

<p align="center">
  <img src="assets/en/how.svg" width="100%" alt="pstack の動き方：やりたいことを伝えると、/poteto-mode がプレイブックを選び、手順ごとにスキルを呼び、証拠を持って戻ってくる">
</p>

覚えるコマンドは `/poteto-mode` ひとつだけ。**何がしたいか**と**どうなったら完了か**をはっきり伝えてください。23 個の「プレイブック」（バグ修正、機能追加、リファクタリング、性能調査……）から一つを選び、手順を ToDo リストに書き写し、一歩ずつ他のスキルを呼び出します。やらないと決めた手順は黙って消えず、`skip: 理由` と書かれます。

## ⚡ 3 分で始める

**1. インストール**（使っているツールに合わせて一つ選んでください）

```bash
# Claude Code（コマンドに pstack: プレフィックスが付きます。例：/pstack:poteto-mode）
/plugin marketplace add cursor/plugins
/plugin install pstack@cursor-plugins

# Cursor
/add-plugin pstack

# Codex、OpenCode など（Node.js 22.20+、グローバルに入れるなら -g を追加）
npx skills add backnotprop/pstack
```

**2. モデルを選ぶ**：新しい会話で `/setup-pstack` を一度実行します。「検証スキル」を作るか聞かれたら**作る**を選んでください。 Claude Code では、セッションのモデルと各役割の組み合わせを [おすすめ設定 3 種](https://pstack.xiaoxiaodong.ai/en/howto/claude-code/#how-to-set-it-up-well) で確認できます。

**3. 最初のタスク**：本物だけれど大きくない仕事を一つ選び、同僚に仕事を頼むように伝えます：

```text
/poteto-mode リロード後にお気に入りがときどき二重に表示される。まず再現して、まだコードは変えないで。
完了の基準：お気に入りを 10 回連続で押しても、リストと chrome.storage にそれぞれ 1 件だけあること。
修正前と修正後の storage の実際の中身を見せて。
```

> [!TIP]
> よいプロンプトに入れるのは最大で 5 つ：**目標**、**どうなったら完了か**、**見たい証拠**、**すでに知っていること**、**本当の制約**。書かないほうがいいのは 2 つ：具体的なやり方と、原因についてのあなたの推測です。詳しくは [ステップ 3](https://pstack.xiaoxiaodong.ai/en/guide/3-first-task/)（英語）へ。

## 🗺️ 34 個のスキルを 1 枚で

<p align="center">
  <img src="assets/en/skills.svg" width="100%" alt="pstack スキルマップ：7 つのグループに分かれた 34 個のスキルと、24 の原則">
</p>

ふだんは `/poteto-mode` を打つだけ。他のスキルは必要なときに自分で呼び出します。特定のスキルを名指しで使いたいときや、AI が口にした名前を調べたいときは [スキルリファレンス](https://pstack.xiaoxiaodong.ai/en/skills/)（英語）へ。どのスキルにも、やさしい一行説明、使いどころ、そのまま使える例文、一緒に入れるべきスキルが載っています。

## 🛠 実際のプロジェクトで

どの記事にもそのままコピーできるプロンプトがあり、例は Chrome 拡張機能、Astro のサイト、Cloudflare の会員サイトといった実際の場面です。

| 手元の仕事 | 読む記事 | 一言でいうと |
|---|---|---|
| バグを直す | [再現して、直して、証明する](https://pstack.xiaoxiaodong.ai/en/howto/fix-bug/) | 「まず再現」は社交辞令ではなく制約 |
| 機能を足す | [既存のものを壊さずに](https://pstack.xiaoxiaodong.ai/en/howto/add-feature/) | どの既存の動作が 1 バイトも変わってはいけないかを言う |
| リファクタリング | [構造は変えて、動作は変えない](https://pstack.xiaoxiaodong.ai/en/howto/refactor/) | 今の出力を先に記録し、変更後に変わっていないと証明する |
| 遅い | [数字で語る](https://pstack.xiaoxiaodong.ai/en/howto/perf/) | 感覚ではなく測定値を渡す |
| 知らないプロジェクトを引き継ぐ | [触る前に理解する](https://pstack.xiaoxiaodong.ai/en/howto/new-codebase/) | 「まだコードは変えないで」で調査だけさせる |
| 出す前に不安 | [複数のモデルに粗探しさせる](https://pstack.xiaoxiaodong.ai/en/howto/review-branch/) | 失敗を実際に再現できる問題だけを残す |
| ドキュメントを書く | [README、PR の説明](https://pstack.xiaoxiaodong.ai/en/howto/write-docs/) | 人に使ってもらうコードなら、まず README を書く |
| 大きな移行 | [寝る前に任せる](https://pstack.xiaoxiaodong.ai/en/howto/big-migration/) | 「4 時間やって」は完了条件ではない |

ほかに [コピペで使えるプロンプト](https://pstack.xiaoxiaodong.ai/en/howto/recipes/)、[脱線したら一言で引き戻す](https://pstack.xiaoxiaodong.ai/en/howto/steer/)、[どのスキルを使えばいいかわからない](https://pstack.xiaoxiaodong.ai/en/howto/which-skill/) もあります（いずれも英語）。

## 🌙 一晩任せる

<p align="center">
  <img src="assets/en/overnight.svg" width="100%" alt="AI に一晩任せる：毎回、完了条件を確認し、最小の変更をし、検証し、コミットするか捨て、ログを一行残す。朝は決定ログを読む">
</p>

これまでの手順はすべてここで報われます。**自分で検証できる** AI だからこそ、安心して一人で作業させておけます。寝る前に「契約書」を渡しましょう：目標、合格か不合格かがはっきりする完了条件、新しい worktree、決定ログ、行き詰まったときの逃げ道。朝は `/show-me-your-work` の返答にある「needs attention」の部分を最初に読みます。一晩分を読み返すのではなく、判断だけを確認すれば済みます。詳しくは [ステップ 7](https://pstack.xiaoxiaodong.ai/en/guide/7-overnight/)（英語）へ。

## 📚 サイトの内容

| セクション | 内容 |
|---|---|
| [ガイド](https://pstack.xiaoxiaodong.ai/en/guide/0-what/) | 9 ステップを順番に：何なのか → インストール → モデル選び → 最初のタスク → まず理解する → 設計・実装・片付け → 検証して届ける → 一晩任せる → 自分のものにする |
| [スキルリファレンス](https://pstack.xiaoxiaodong.ai/en/skills/) | 34 個のスキル、一つにつき一枚 |
| [How-to](https://pstack.xiaoxiaodong.ai/en/howto/) | 17 本、一本につき一つのこと |
| [Wiki](https://pstack.xiaoxiaodong.ai/en/wiki/) | 20 の概念：一言で → たとえると → pstack では → よくある誤解。24 の原則と 23 のプレイブックの対照表つき |
| [FAQ](https://pstack.xiaoxiaodong.ai/en/faq/) | お金はかかる？ Cursor でないとだめ？ コードを勝手に書き換えない？ |

ページ右上の <kbd>⌘</kbd> <kbd>K</kbd> でサイト全体を検索できます。本文の**蛍光ペン**と**太い下線**は要点で、点線の付いた用語にカーソルを乗せると一行の説明が出ます。

## 🧑‍💻 ローカルで動かす

```bash
npm install
npm run dev        # http://localhost:4420
npm run build      # dist/ に出力
npm run release    # ビルドして Cloudflare にデプロイ
```

```text
src/data/nav.js        サイト構造：ガイド、How-to 一覧、用語集（唯一の情報源）
src/data/skills.js     スキルリファレンスのデータ
src/data/wiki.js       Wiki の項目
src/data/faq.js        FAQ
src/pages/guide/       ガイド（MDX）
src/pages/howto/       How-to（MDX）
public/xxd/            Xiaoxiaodong UI Kit（CDN を使わず同梱）
tools/build_assets.py  README のイラスト、SVG アニメーション、共有用画像を生成（social.svg → social.png / public/og.png）
```

内容の編集、ページの追加、書き方のルールは [docs/MAINTAINING.md](docs/MAINTAINING.md)（中国語）を見てください。README の画像はすべて `python3 tools/build_assets.py` で生成しています。文言や色を変えたら再実行してください。

## 🙌 謝辞

- [pstack](https://github.com/cursor/plugins/tree/main/pstack) は [poteto](https://x.com/poteto) が開発しました。このサイトでは汎用ミラーの [backnotprop/pstack](https://github.com/backnotprop/pstack) を使っています。ガイドの内容はその README と docs/guide をもとに書いており、コマンドと動作は公式リポジトリが正です。
- サイトの骨組みは [Xiaoxiaodong VPS チュートリアルサイト](https://vps.xiaoxiaodong.ai) から、インターフェースは [Xiaoxiaodong UI Kit](https://ui.xiaoxiaodong.ai) を使い、イラストの配色は [ghostty-tint](https://github.com/nevertoday/ghostty-tint) から借りています。

このサイトは非公式の入門ガイドです。説明がわかりにくい箇所や、手順どおりにやってもうまくいかない箇所があれば、[Issue を作成](https://github.com/nevertoday/xxd-pstack/issues)してください。

## 📄 ライセンス

チュートリアルの文章とサイトのコードは [MIT](LICENSE) です。`public/xxd/` にある Xiaoxiaodong UI Kit のビルド成果物は対象外で、独自の [LICENSE](public/xxd/LICENSE) が適用されます（非商用は無料、商用はライセンスが必要）。

Copyright (c) 2026 [小小东 Xiaoxiaodong](https://x.com/xiaoxiaodong01)
