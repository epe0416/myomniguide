import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'; // Importa el plugin

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'], // Asegura que cubra tus archivos
  theme: {
    extend: {},
  },
  plugins: [
    typography, // Agrega el plugin aquí
  ],
} satisfies Config