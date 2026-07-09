import { defineCollection, z } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

const llmArchiveSchema = z.object({
  date: z.coerce.date(),
  status: z.enum(["seed", "growing", "checked", "superseded"]),
  tags: z.array(z.string()).min(2).max(3),
  source_type: z.enum(["personal_note", "ai_session", "web_research", "book", "paper", "official_source", "other"]).optional(),
  source_ref: z.string().optional(),
  ai_process: z.array(z.enum(["draft", "summarize", "extract", "structure", "rewrite", "compare", "fact_check", "critique"])).default([]),
  confidence: z.enum(["low", "medium", "high"]).optional(),
  review_needed: z.boolean().optional(),
  related_notes: z.array(z.string()).default([]),
});

const docs = defineCollection({
  loader: docsLoader(),
  schema: docsSchema({
    extend: llmArchiveSchema,
  }),
});

export const collections = { docs };
