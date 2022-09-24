/*jshint esversion: 6 */
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://vibr.boting.xyz",
  integrations: [tailwind({ config: { applyBaseStyles: false } }), sitemap()],
});
