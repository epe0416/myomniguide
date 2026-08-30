import { defineCollection, reference } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const mercadoSchema = z.object({
  puntos: z.number().min(0),
  precio: z.number().positive(),
});

const productos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/productos' }),
  schema: ({ image }) =>
    z.object({
      nombre: z.string(),
      subtitulo: z.string(),
      imagen: image().optional(),

      // Estructura regional simétrica por mercado
      nio: mercadoSchema.optional(),
      usa: mercadoSchema.optional(),

      // Validación estricta de categorías (Omnilife + Seytú)
      categorias: z.array(
        z.enum([
          'Sistema Inmune',
          'Antioxidantes',
          'Salud Cardiovascular',
          'Energía',
          'Regeneración Muscular',
          'Salud Articular',
          'Salud Ósea',
          'Control de Peso',
          'Nutrición General',
          'Nutrición Infantil',
          'Control de Glucosa',
          'Salud Digestiva',
          'Rendimiento Mental',
          'Control de Estrés',
          'Salud Visual',
          'Salud Femenina',
          'Salud Masculina',
          'Salud Renal y Urinaria',
          'Salud Hepática',
          'Hidratación',
          'Cuidado Facial',
          'Cuidado Corporal',
          'Cuidado Capilar',
          'Maquillaje',
          'Protección Solar',
          'Anti-Edad',
          'Perfil Lipídico',
          'Estructura',
        ])
      ).min(1),

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

const combos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/combos' }),
  schema: z.object({
    nombre: z.string(),
    subtitulo: z.string(),
    icono: z.string().default('🔥'),
    objetivo: z.string(),
    productos: z.array(reference('productos')),
    protocoloConsumo: z.string(),
    destacado: z.boolean().default(false),
  }),
});

export const collections = { productos, combos };