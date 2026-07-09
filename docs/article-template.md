# 記事テンプレート

新しい記事を作るときは、この形をコピーして `src/content/docs/archive/your-note-name.md` に置きます。

ファイル名は英小文字の kebab-case にします。

例:

- `llm-reading-notes.md`
- `agent-writing-observation.md`
- `prompt-failure-patterns.md`

```md
---
title: 記事タイトル
description: 1〜2文の説明
date: 2026-07-06
status: seed
tags:
  - AI
  - 運用
source_type: ai_session
source_ref: "ChatGPT session, 2026-07-06"
ai_process:
  - structure
  - rewrite
confidence: medium
review_needed: true
related_notes: []
---

# 記事タイトル

## 何を観察したか

ここに観察、読書メモ、会話から得た気づきを書く。

## 仮説

まだ確定していない考えを書く。

「現時点では」「〜と思われる」「要検証」を使ってよい。

## まだ確信がない点

- 追加で確認したいこと
- 出典が弱いところ
- AIが補った可能性があるところ
- 自分の経験だけに寄っているところ

## 出典・由来

frontmatterの `source_type` / `source_ref` に短く書いた内容を、人間が読める文脈として補足する。

- 個人メモ:
- AIセッション:
- Webページ:
- 書籍・論文:

## AI処理メモ

frontmatterの `ai_process` に短く書いた内容を、本文ではもう少し具体的に書く。

例:

- 会話ログから論点を抽出した
- 文章を読みやすく並べ替えた
- タグ候補を出した
- 反論や不確かな点を挙げた

## 関連ノート

- まだなければ「なし」と書く
- 関係する記事が増えたらリンクする
- frontmatterの `related_notes` にも、機械的に扱いたいリンクを入れる

## 次に残る問い

- まだ確認していない点:
- この結論が届く範囲:
- 次に観察・調査すること:

## 更新メモ

- 2026-07-06: 初稿
```

## Webリサーチ記事の短い型

調査記事は、出典の要約を並べるだけにしない。
具体的な観察から入り、少数の事例を置き、最後に共通する構造を整理する。

```md
---
title: 記事タイトル
description: 何を観察したノートかを1〜2文で書く。
date: 2026-07-08
status: seed
tags:
  - 観察
  - 技術
  - データ
source_type: web_research
source_ref: "公式情報、報道、公開資料を中心に確認したWebリサーチ"
ai_process:
  - extract
  - summarize
  - structure
  - rewrite
  - fact_check
confidence: medium
review_needed: true
related_notes: []
---

導入。定義からではなく、気になった観察や違和感から始める。

## 身近な場所にある技術

**事例名**
どこで、何の名目で使われ、人の何を測定・分類・誘導するのかを書く。
出典の細かい説明はここに詰め込みすぎない。

**事例名**
同じ粒度で短く書く。

## 共通する構造

事例に共通する読み方を書く。
便利さ、安全、防犯、効率化と、管理・記録・分類が同じ仕組みで進む点を整理する。

<aside class="llm-term-note">
  <strong>用語メモ</strong>
  <dl>
    <dt>専門用語</dt>
    <dd>この章を読むために必要な意味だけを短く書く。</dd>
  </dl>
</aside>

## 結び

断定しすぎない短い所感で終える。

## 次に残る問い

- まだ確認していない点:
- この結論が届く範囲:
- 次に観察・調査すること:

## 参考・出典

最重要なものだけに絞り、リンク総数で5〜6個におさえる。
説明はリンクの横に置かず、リンクの下に短く書く。

- [出典名](https://example.com/)<br>
  この記事で何を確認したか。
```
