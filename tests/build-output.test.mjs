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
