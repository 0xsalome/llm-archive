export type AnnexFrontmatter = {
  title: string;
  description: string;
  date: string | Date;
  status: "seed" | "growing" | "checked" | "superseded";
  tags: string[];
  source_type?: string;
  source_ref?: string;
  ai_process?: string[];
  confidence?: "low" | "medium" | "high";
  review_needed?: boolean;
  related_notes?: string[];
};

type AnnexModule = {
  frontmatter: AnnexFrontmatter;
  Content: any;
};

export type AnnexEntry = {
  slug: string;
  data: AnnexFrontmatter;
  Content: any;
};

const modules = import.meta.glob("./content/annex/*.{md,mdx}", { eager: true }) as Record<string, AnnexModule>;

export const annexEntries = Object.entries(modules)
  .map(([file, module]) => ({
    slug: file.split("/").pop()?.replace(/\.(md|mdx)$/, "") ?? "",
    data: module.frontmatter,
    Content: module.Content,
  }))
  .filter((entry) => entry.slug)
  .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());

export const getAnnexEntry = (slug: string) => annexEntries.find((entry) => entry.slug === slug);
