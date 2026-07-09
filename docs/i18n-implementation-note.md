# JP/EN切替実装メモ

これは将来のJP/EN切替実装のためのメモです。

普段の記事執筆時には必読にしません。ユーザーからJP/EN切替の実装を依頼された場合に参照します。

## 実装方針

ユーザーからJP/EN切替の実装を依頼されたら、再調査から始めず、次の方針で進めます。

- Starlightには標準の `LanguageSelect` があり、複数ロケール化すると記事ページの `ThemeSelect` 横に表示される
- `astro.config.mjs` の `locales` に `root` と `en` を定義し、`defaultLocale: "root"` を設定する
- 日本語記事は現状どおり `src/content/docs/archive/*.md` に置く
- 英語記事は同じslugで `src/content/docs/en/archive/*.md` に置く
- URLは日本語が `/llm-archive/archive/.../`、英語が `/llm-archive/en/archive/.../` になる想定
- トップページはStarlight標準ヘッダーではなく `src/pages/index.astro` の独自実装なので、ダークモードトグル横の `JP / EN` は別途追加する
- `getCollection("docs")` は日英両方を拾うため、トップページ側では現在ロケールに応じて表示記事をフィルタする
- 英語トップページを作る場合は `src/pages/en/index.astro` を追加し、日本語トップと同じカードUIを使うか、共通コンポーネント化する
- 記事本文は機械翻訳で即時切替するのではなく、英語版Markdownを個別に管理する。翻訳品質、`status`、`confidence`、`review_needed` を記事ごとに持てるため、この書庫の運用に合う
- 依存関係は追加しない。Starlight/Astroの既存i18n機能で実装する
