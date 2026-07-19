// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

const site = process.env.PUBLIC_SITE_URL || "https://0xsalome.github.io";
const base = process.env.PUBLIC_BASE_PATH ?? "/llm-archive";

export default defineConfig({
  site,
  base,
  integrations: [
    starlight({
      title: "LLM書庫",
      description: "未完成の問い、観察、仮説、読書メモ、AIとの対話から生まれた知識片を置くための小さな書庫。",
      favicon: "/favicon.png",
      locales: {
        root: {
          label: "日本語",
          lang: "ja",
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      sidebar: [
        {
          label: "Start Here",
          items: ["archive/first-note"],
        },
        {
          label: "Technology",
          items: [
            {
              label: "音は身体をどう震わせるか\n音波・脳波・倍音をめぐる観察",
              link: "/archive/sound-body-brain-waves/",
            },
            "archive/everyday-uncanny-technologies-japan",
          ],
        },
        {
          label: "Ecology",
          items: [
            {
              label: "複雑さを手放さない学問\n環境人文学と南方熊楠の萃点",
              link: "/archive/environmental-humanities-minakata-suiten/",
            },
          ],
        },
        {
          label: "Reading",
          items: [
            {
              label: "人工美学\n概念編",
              link: "/archive/artificial-aesthetics-overview/",
            },
            {
              label: "人工美学\n深掘り編",
              link: "/archive/artificial-aesthetics-compression-deep-dive/",
            },
          ],
        },
        {
          label: "References",
          items: ["archive/github-open-source-license-lineage"],
        },
      ],
      customCss: ["./src/styles/starlight.css"],
      components: {
        Header: "./src/components/starlight/Header.astro",
        MobileMenuFooter: "./src/components/starlight/MobileMenuFooter.astro",
        ThemeProvider: "./src/components/starlight/ThemeProvider.astro",
        ThemeSelect: "./src/components/starlight/ThemeSelect.astro",
        PageTitle: "./src/components/starlight/PageTitle.astro",
        Footer: "./src/components/starlight/Footer.astro",
      },
      disable404Route: true,
      credits: false,
    }),
  ],
});
