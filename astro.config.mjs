import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  routes: [
    { src: '/about', file: 'src/pages/about.astro' },
    { src: '/*', file: 'src/pages/index.astro' },
  ],
  integrations: [solidJs(), tailwind()],
  output: "server",
  adapter: vercel()
});