# LLM書庫

[日本語](#日本語) / [English](#english)

## 日本語

LLMとともに作成したリサーチ記事、観察記録、考察を置いておく小さな書庫です。

調査の過程、不確かさ、更新の履歴、誠実な保留を残すことを重視します。

### 概要

このリポジトリは、Markdownで書かれた記事を管理し、GitHub Pagesで公開するための場所です。

記事は主に `src/content/docs/archive/` に置かれます。

公開サイトは `https://0xsalome.github.io/llm-archive/` を想定しています。

### 方針

* LLMによるリサーチ、構成、執筆への関与をできるだけ明示する
* 出典、不確かさ、更新理由をできるだけ記録する
* 記事として読める形に整える
* 公開判断、出典確認、最終責任は人間が持つ

### 執筆

記事には軽量なfrontmatterを付けます。詳しい書き方は [frontmatterガイド](docs/frontmatter-guide.md) を参照してください。

`status` は次の4段階で扱います。

* 🌱 `seed`: 未整理の断片、仮説、下書き
* 🌿 `growing`: 整理中で、ある程度読める
* 🔎 `checked`: 出典や論理を一度確認した段階
* 🧭 `superseded`: 後のノートによって見方が更新された段階

各記事の結論後には、必要に応じて3行程度の「次に残る問い」を置き、未確認点、結論の射程、今後調べるべき問いを短く残します。

記事を書くときは、以下のドキュメントも参照します。

* [記事テンプレート](docs/article-template.md)
* [公開前チェックリスト](docs/publishing-checklist.md)
* [カテゴリと内部リンクの考え方](docs/category-and-linking-guide.md)

### 開発

このリポジトリでは `pnpm` を使います。

```bash
pnpm install
pnpm dev
```

公開設定を変更する場合は、`astro.config.mjs` のGitHub Pages向け設定を確認してください。

### 貢献

記事の追加や修正は、ブランチを作成してPull Requestで提案してください。

`main` にマージされた内容だけが公開対象になります。

### AI利用

この書庫には、LLMとともに作成した記事が含まれます。

LLMはリサーチ、構成、本文執筆、要約、言い換え、整理、レビュー補助に関与することがあります。AIが関与した記事では、必要に応じてfrontmatterや本文中にその経緯を記録します。

人間がテーマ設定、編集、出典確認、公開判断、最終責任を持ちます。

記事は確定知識ではなく、調査・観察・考察として公開されます。医療・法律・投資などの専門助言ではありません。

### ライセンス

ライセンスは対象によって異なります。

* コード、設定、UI実装: [MIT License](LICENSE-CODE.md)
* 記事本文、README、docs内の文章: [CC BY 4.0](LICENSE-CONTENT.md)
* 第三者画像、引用、外部資料: それぞれの出典元ライセンス

全体方針は [LICENSE.md](LICENSE.md) と [NOTICE.md](NOTICE.md) を確認してください。

### フォーク元・謝辞

LLM書庫は、experimental-commons をフォークし、サイト構成・デザイン・運用設計を LLM書庫向けに改変して作成しています。

Original: [experimental-commons](https://github.com/kotowari-modoki/experimental-commons)
License: CC BY 4.0
Changes: サイト名、記事分類、タグ、文体、表示内容などを LLM書庫向けに変更しています。

各記事は、特記がない限り、LLMとの対話を通じて新たに作成しています。引用・参照している第三者の文章、画像、図表、外部資料については、それぞれの出典とライセンスを優先します。

## English

LLM Archive is a small knowledge archive for research notes, observations, and essays created with the help of large language models.

It does not aim to present finished knowledge only. It keeps uncertainty, revision history, source context, and unfinished questions visible.

### What is this?

This repository manages Markdown articles and publishes them with GitHub Pages.

Articles are mainly stored in `src/content/docs/archive/`.

The public site is expected to be available at `https://0xsalome.github.io/llm-archive/`.

### Principles

* Record how LLMs were involved in research, outlining, drafting, summarizing, rewriting, or review.
* Keep sources, uncertainty, and reasons for updates visible where possible.
* Shape notes into readable articles without pretending they are final.
* Human editors remain responsible for topic selection, source checking, publication decisions, and final judgment.

### Writing

Articles use lightweight frontmatter. See the Japanese docs for the detailed writing rules:

* [Article template](docs/article-template.md)
* [Publishing checklist](docs/publishing-checklist.md)
* [Category and linking guide](docs/category-and-linking-guide.md)
* [Frontmatter guide](docs/frontmatter-guide.md)

The `status` field describes the maturity of each note:

* 🌱 `seed`: fragment, hypothesis, or draft
* 🌿 `growing`: being organized and readable enough to share
* 🔎 `checked`: sources or reasoning have been checked once
* 🧭 `superseded`: later notes have updated the view

### Development

This repository uses `pnpm`.

```bash
pnpm install
pnpm dev
```

The GitHub Pages configuration lives in `astro.config.mjs`.

### Contributing

Please propose article additions or changes through a branch and Pull Request.

Only content merged into `main` is published.

### AI Use

This archive includes articles drafted or revised with LLM assistance. LLMs may help with research, structure, drafting, summarization, rewriting, comparison, and review support.

Articles are research notes, observations, and reflections. They are not medical, legal, investment, or other professional advice.

### License

This repository uses separate licenses:

* Code, configuration, and UI implementation: [MIT License](LICENSE-CODE.md)
* Articles, README, and documentation text: [CC BY 4.0](LICENSE-CONTENT.md)
* Third-party images, quotations, and external materials: licenses stated by their original sources

See [LICENSE.md](LICENSE.md) and [NOTICE.md](NOTICE.md) for the overall policy.

### Acknowledgement

LLM Archive is adapted from experimental-commons.

Original: [experimental-commons](https://github.com/kotowari-modoki/experimental-commons)  
License: CC BY 4.0  
Changes: site name, article categories, tags, writing style, displayed content, and archive operation have been adapted for LLM Archive.
