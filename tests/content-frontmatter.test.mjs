import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const docsDir = path.join(root, "src", "content", "docs");

const requiredFields = [
  "title",
  "description",
  "date",
  "status",
  "tags",
  "source_type",
  "source_ref",
  "ai_process",
  "confidence",
  "review_needed",
  "related_notes",
];

const validStatuses = new Set(["seed", "growing", "checked", "superseded"]);
const validSourceTypes = new Set([
  "personal_note",
  "ai_session",
  "web_research",
  "book",
  "paper",
  "official_source",
  "other",
]);
const validAiProcesses = new Set([
  "draft",
  "summarize",
  "extract",
  "structure",
  "rewrite",
  "compare",
  "fact_check",
  "critique",
]);
const validConfidence = new Set(["low", "medium", "high"]);

async function listContentFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const resolved = path.join(dir, entry.name);
      if (entry.isDirectory()) return listContentFiles(resolved);
      if (entry.isFile() && /\.(md|mdx)$/.test(entry.name)) return [resolved];
      return [];
    }),
  );

  return files.flat();
}

function parseScalar(value) {
  const trimmed = value.trim();
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (trimmed === "[]") return [];
  return trimmed.replace(/^["']|["']$/g, "");
}

function parseFrontmatter(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---/);
  assert.ok(match, "frontmatter block is required");

  const data = {};
  let currentKey = null;

  for (const line of match[1].split("\n")) {
    if (!line.trim()) continue;

    const listItem = line.match(/^\s+-\s+(.*)$/);
    if (listItem) {
      assert.ok(currentKey, `list item without key: ${line}`);
      data[currentKey] ??= [];
      assert.ok(Array.isArray(data[currentKey]), `${currentKey} must be an array`);
      data[currentKey].push(parseScalar(listItem[1]));
      continue;
    }

    const field = line.match(/^([A-Za-z_][A-Za-z0-9_]*):(?:\s*(.*))?$/);
    assert.ok(field, `unsupported frontmatter line: ${line}`);
    currentKey = field[1];
    data[currentKey] = field[2] === undefined || field[2] === "" ? [] : parseScalar(field[2]);
  }

  return data;
}

test("docs content uses the LLM archive frontmatter contract", async () => {
  const files = await listContentFiles(docsDir);
  assert.ok(files.length > 0, "docs content should not be empty");

  for (const file of files) {
    const relative = path.relative(root, file);
    const frontmatter = parseFrontmatter(await readFile(file, "utf8"));

    for (const field of requiredFields) {
      assert.ok(Object.hasOwn(frontmatter, field), `${relative} is missing ${field}`);
    }

    assert.ok(validStatuses.has(frontmatter.status), `${relative} has invalid status`);
    assert.ok(validSourceTypes.has(frontmatter.source_type), `${relative} has invalid source_type`);
    assert.ok(validConfidence.has(frontmatter.confidence), `${relative} has invalid confidence`);
    assert.equal(typeof frontmatter.review_needed, "boolean", `${relative} review_needed must be boolean`);

    assert.ok(Array.isArray(frontmatter.tags), `${relative} tags must be an array`);
    assert.ok(frontmatter.tags.length >= 2, `${relative} must have at least two tags`);
    assert.ok(frontmatter.tags.length <= 3, `${relative} must have at most three tags`);

    assert.ok(Array.isArray(frontmatter.ai_process), `${relative} ai_process must be an array`);
    for (const process of frontmatter.ai_process) {
      assert.ok(validAiProcesses.has(process), `${relative} has invalid ai_process: ${process}`);
    }

    assert.ok(Array.isArray(frontmatter.related_notes), `${relative} related_notes must be an array`);
    assert.match(String(frontmatter.date), /^\d{4}-\d{2}-\d{2}$/, `${relative} date must be YYYY-MM-DD`);
  }
});
