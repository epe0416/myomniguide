import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const productos = defineCollection({
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

      empresario: z
        .object({
          argumentosVenta: z.array(z.string()),
          loQueHace: z.array(z.string()),
          loQueNoHace: z.array(z.string()),
          tipsDemostra: z.array(z.string()).optional(),
        })
        .optional(),
    }),
});

export const collections = { productos };