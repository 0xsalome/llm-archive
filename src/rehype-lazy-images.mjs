// 記事本文の img に遅延読み込みを付ける。
// Markdown の ![]() は素の <img> になり、そのままだと画面外の画像も
// ページを開いた瞬間にすべて取りに行くため、表示直前まで読み込みを遅らせる。
export function rehypeLazyImages() {
  return (tree) => {
    const walk = (node) => {
      if (node.type === "element" && node.tagName === "img") {
        node.properties = {
          ...node.properties,
          loading: "lazy",
          decoding: "async",
        };
      }
      for (const child of node.children ?? []) walk(child);
    };

    walk(tree);
  };
}
