// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://epe0416.github.io',
  base: '/myomniguide',
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});