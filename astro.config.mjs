// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { archiveSidebar } from "./src/archive-navigation.mjs";

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
      sidebar: archiveSidebar,
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
