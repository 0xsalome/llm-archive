// 記事本文の画像を、書き手が意識しなくても軽く読み込めるようにする。
//
// 1. Wikimedia Commons の画像は投稿された解像度のまま配信され、1枚で
//    十数MBになることがある。表示幅に見合うサイズを要求し直す。
// 2. Markdown の ![]() は素の <img> になり、そのままだと画面外の画像も
//    ページを開いた瞬間にすべて取りに行くため、表示直前まで読み込みを遅らせる。
//
// 記事側では通常の Commons URL をそのまま書けばよい。
// 幅を明示したい画像だけ、URLに ?width=... を付けて上書きする。

const COMMONS_FILE_PATH_PREFIX =
  "https://commons.wikimedia.org/wiki/Special:FilePath/";

// 本文の表示幅は約800px。高精細画面でも粗く見えないよう余裕を持たせている。
const DEFAULT_IMAGE_WIDTH = 1200;

const withCommonsWidth = (src) => {
  if (typeof src !== "string") return src;
  if (!src.startsWith(COMMONS_FILE_PATH_PREFIX)) return src;
  if (/[?&]width=/.test(src)) return src;

  return `${src}${src.includes("?") ? "&" : "?"}width=${DEFAULT_IMAGE_WIDTH}`;
};

export function rehypeLazyImages() {
  return (tree) => {
    const walk = (node) => {
      if (node.type === "element" && node.tagName === "img") {
        node.properties = {
          ...node.properties,
          src: withCommonsWidth(node.properties?.src),
          loading: "lazy",
          decoding: "async",
        };
      }

      for (const child of node.children ?? []) walk(child);
    };

    walk(tree);
  };
}
