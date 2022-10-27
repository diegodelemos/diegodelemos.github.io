import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://diegodelemos.me/',
  integrations: [mdx(), image(), tailwind(), sitemap()]
});