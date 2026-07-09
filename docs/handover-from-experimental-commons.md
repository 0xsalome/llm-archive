# experimental-commons から LLM書庫へ引き継ぐこと

このメモは、`experimental-commons` を参考にしつつ、LLM書庫では何を引き継ぎ、何を引き継がないかを整理するためのものです。

## 引き継ぐ思想

- 完成した知識だけでなく、未完成の観察や仮説も置く
- 不確かなことは不確かなまま書く
- できるだけ出典や由来を残す
- provenance、knowledge_status の思想を引き継ぐ
- 知識の出どころを残す
- AIが行った処理を残す
- 確信度やレビュー要否を明示する
- 古いノートとの関係や更新履歴を残す
- AI Agentは下書きや整理を支援し、人間が公開責任を持つ
- 古いノートを黙って上書きせず、更新メモや関連リンクで関係を残す
- `date` と `status` で、知識の鮮度と成熟度を見えるようにする

## そのまま引き継がないこと

- StarlightのUIやサイドバー構造
- 多カテゴリの `src/content/docs/` 構造
- 開発者向けの厳密なテスト、push、CI運用
- experimental-commons の複雑な frontmatter をそのまま全項目コピーすること
- Codexが `main` に直接反映する運用

## LLM書庫での置き換え

| experimental-commons | LLM書庫 |
| --- | --- |
| 多カテゴリの `src/content/docs/` | 当面は `src/content/docs/archive/` に集約 |
| `status`: 🌱 `seed` / 🌿 `growing` / 🔎 `checked` / 🧭 `superseded` | LLM書庫用の4段階を使う |
| provenance frontmatter | 軽量frontmatterと本文の「出典・由来」「AI処理メモ」に分ける |
| knowledge_status frontmatter | 軽量frontmatterと本文の「更新メモ」「まだ確信がない点」に分ける |
| 開発者向けPRコメント | 非エンジニア向けの公開前チェックリスト |
| 複数カテゴリのサイドバー | タグとカード一覧で探す |

LLM書庫では、機械的に一覧・検索・レビューに使いたい情報を軽量frontmatterに残します。
人間が読み返すための文脈、迷い、判断理由は本文の短い注記に残します。

## LLM書庫に必要なファイル

- `AGENTS.md`: AI Agentに守ってほしい運用ルール
- `README.md`: 人間向けの書庫説明と最低限の使い方
- `docs/article-template.md`: 新規記事を書くときの型
- `docs/frontmatter-guide.md`: 基本frontmatterと軽量メタデータの説明
- `docs/publishing-checklist.md`: 公開前に見るチェックリスト
- `docs/category-and-linking-guide.md`: タグ、カテゴリ、内部リンクの考え方
- `src/content.config.ts`: frontmatterの最低限の検証
- `src/content/docs/archive/`: 公開される記事置き場

## 参考元

- https://kotowari-modoki.github.io/experimental-commons/
- https://github.com/kotowari-modoki/experimental-commons
