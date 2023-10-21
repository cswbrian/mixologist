import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import { VitePWA } from "vite-plugin-pwa"

// Helper imports
import { manifest } from "./utils/seoConfig"


// https://astro.build/config
export default defineConfig({
  site: 'https://cswbrian.github.io',
  base: '/mixologist',
  integrations: [react()],
  vite: {
		plugins: [
			VitePWA({
				registerType: "autoUpdate",
				manifest,
				workbox: {
				  globDirectory: 'dist',
				  globPatterns: [
				    '**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}',
				  ],
				  // Don't fallback on document based (e.g. `/some-page`) requests
				  // This removes an errant console.log message from showing up.
				  navigateFallback: null,
				},
			})
		]
	}
});