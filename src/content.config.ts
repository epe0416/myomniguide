import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const productos = defineCollection({
  // Asegúrate de usar './src/content/productos'
  loader: glob({ pattern: '**/*.md', base: './src/content/productos' }),
  schema: ({ image }) =>
    z.object({
      nombre: z.string(),
      subtitulo: z.string(),
      imagen: image().optional(),
      categoria: z.enum([
        'Nutrición General',
        'Energía y Deporte',
        'Control de Peso',
        'Cuidado Personal',
      ]),
      formato: z.string(),
      beneficiosPrincipales: z.array(z.string()),
      modoUso: z.string(),
      paraQuienEs: z.array(z.string()),
      destacado: z.boolean().default(false),
    }),
});

export const collections = { productos };