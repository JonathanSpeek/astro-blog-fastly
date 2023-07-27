import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://jonathanspeek.github.io",
  base: "/astro-blog-fastly",
  integrations: [mdx(), sitemap()],
});
