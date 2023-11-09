// Type imports
import type { ManifestOptions } from "vite-plugin-pwa";

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
  siteURL: "https://cswbrian.github.io",
  base: "/mixologist",
  description:
    "Discover the Perfect Mix: Explore Cocktail Ingredients and Recipes.",
  type: "website",
  image: {
    url: "https://picsum.photos/1200/630",
    alt: "OpenGraph thumbnail description.",
    width: 1200,
    height: 630,
  },
  siteName: "mixologist",
  twitter: {
    card: "summary_large_image",
  },
};

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
  name: "mixologist", // Change this to your website's name.
  short_name: "mixologist", // Change this to your website's short name.
  description:
    "Discover the Perfect Mix: Explore Cocktail Ingredients and Recipes.", // Change this to your websites description.
  theme_color: "#30E130", // Change this to your primary color.
  background_color: "#ffffff", // Change this to your background color.
  display: "standalone",
  icons: [
    {
      src: "/mixologist/favicons/favicon-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/mixologist/favicons/favicon-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      src: "/mixologist/favicons/favicon-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable",
    },
  ],
};
