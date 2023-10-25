import { defineConfig } from 'astro/config';

// Astro integration imports
import react from "@astrojs/react";
import { VitePWA } from "vite-plugin-pwa";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress"
import tailwind from "@astrojs/tailwind";

// Helper imports
import { manifest, seoConfig } from "./utils/seoConfig"


// https://astro.build/config
export default defineConfig({
  site: seoConfig.siteURL,
  base: seoConfig.base,
  integrations: [react(), sitemap(), tailwind(), compress()],
  vite: {
    plugins: [VitePWA({
      registerType: "autoUpdate",
      manifest,
      workbox: {
        globDirectory: 'dist',
        globPatterns: ['**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}'],
        // Don't fallback on document based (e.g. `/some-page`) requests
        // This removes an errant console.log message from showing up.
        navigateFallback: null
      }
    })]
  }
});