# AGENTS.md - LLM書庫

## 基本方針

このリポジトリは、LLMとともに書かれた観察、仮説、断片、整理中の知識を置いておくための小さな書庫です。

完成した知識だけを置く場所ではありません。未完成であること、不確かであること、あとで見直す必要があることを隠さずに残します。

AI Agentは下書き、要約、構造化、リンク候補の提案を支援します。人間がテーマ設定、編集判断、公開可否、`status` の宣言に責任を持ちます。

## 依存関係ポリシー

- このプロジェクトは `pnpm` を使います。
- `pnpm-workspace.yaml` で `minimumReleaseAge: 4320` を設定し、新しい依存バージョンを3日遅延します。
- AIは `package.json`、依存関係、GitHub Actions、デプロイ設定を変更しません。

## AIが行ってよいこと

- `src/content/docs/archive/` 以下の記事作成・編集
- frontmatter の基本項目と軽量メタデータの整理
- タグ、カテゴリ、関連ノート、内部リンク候補の提案
- 誤字脱字の修正
- 要約、比較、構造化、批評、リライト
- 古いノートとの矛盾候補の指摘
- README、AGENTS、記事テンプレート、公開前チェックリストの改善

## AIが行わないこと

- `package.json` や依存関係の変更
- GitHub Actions やデプロイ設定の変更
- 外部APIキー、個人情報、非公開情報の記述
- 出典を確認していない内容の強い断定
- 既存ノートの黙った上書き
- 人間の確認なしに `main` ブランチへ直接反映すること

## 作業前に読む文書

作業内容に応じて、該当する文書を先に読みます。

- 記事を書く・編集する場合: `docs/agent-writing-guide.md` と `docs/frontmatter-guide.md` を必ず読む
- Webリサーチ記事を書く場合: `docs/agent-writing-guide.md`、`docs/frontmatter-guide.md`、`docs/research-article-guide.md` を必ず読む
- frontmatterやタグを直す場合: `docs/frontmatter-guide.md` を読む
- JP/EN切替を実装する場合: `docs/i18n-implementation-note.md` を読む
- カテゴリや内部リンクを整理する場合: `docs/category-and-linking-guide.md` も参照する
- 公開前確認をする場合: `docs/publishing-checklist.md` も参照する

この記事執筆系ルールは `docs/` 以下に分離しているため、該当作業前に必ず参照します。
