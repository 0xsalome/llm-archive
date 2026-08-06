import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");

test("build emits the home page and custom 404 page", async () => {
  await access(path.join(distDir, "index.html"));
  await access(path.join(distDir, "404.html"));
});

test("home page lists archive entries but not the 404 page", async () => {
  const html = await readFile(path.join(distDir, "index.html"), "utf8");

  assert.match(html, /LLM書庫/);
  assert.match(html, /archive\/first-note\//);
  assert.doesNotMatch(html, /ページが見つかりません/);
});

test("article images are lazy loaded and requested at a display size", async () => {
  const archiveDir = path.join(distDir, "archive");
  const slugs = await readdir(archiveDir);
  let checked = 0;

  for (const slug of slugs) {
    const html = await readFile(path.join(archiveDir, slug, "index.html"), "utf8");

    for (const tag of html.match(/<img\b[^>]*>/g) ?? []) {
      const src = tag.match(/src="([^"]+)"/)?.[1] ?? "";
      if (!src.startsWith("https://commons.wikimedia.org/wiki/Special:FilePath/")) continue;

      assert.match(tag, /loading="lazy"/, `${slug}: image is not lazy loaded: ${src}`);
      assert.match(src, /[?&]width=\d+/, `${slug}: image is served at full size: ${src}`);
      checked += 1;
    }
  }

  assert.ok(checked > 0, "expected at least one Wikimedia Commons image");
});

test("each archive source page has a built HTML page", async () => {
  const archiveDir = path.join(root, "src", "content", "docs", "archive");
  const files = await readdir(archiveDir);
  const sourcePages = files.filter((file) => /\.(md|mdx)$/.test(file));

  assert.ok(sourcePages.length > 0, "archive should contain at least one page");

  for (const file of sourcePages) {
    const slug = file.replace(/\.(md|mdx)$/, "");
    await access(path.join(distDir, "archive", slug, "index.html"));
  }
});
