// src/content.config.ts
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
      imagenCatalogo: image().optional(),

      nio: mercadoSchema.optional(),
      usa: mercadoSchema.optional(),

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
          'Proteína',
          'Rendimiento Deportivo',
          'Electrólitos'
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

const elementoProductoCombo = z.union([
  reference('productos'),
  z.object({
    item: reference('productos'),
    cantidad: z.number().int().positive().default(1),
  }),
]);

const horarioProductoSchema = z.object({
  producto: z.string(),
  toma: z.string(),
});

const combos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/combos' }),
  schema: z.object({
    nombre: z.string(),
    subtitulo: z.string(),
    icono: z.string().default('🔥'),
    objetivo: z.string(),
    
    // Campo para filtrado por mercado/país
    mercados: z.array(z.enum(['NIO', 'USA'])).default(['NIO', 'USA']),

    productos: z.array(elementoProductoCombo),
    protocoloConsumo: z.string(),
    destacado: z.boolean().default(false),

    beneficios: z.array(z.string()).optional(),
    recomendaciones: z.object({
      horarios: z.union([
        z.array(horarioProductoSchema),
        z.array(z.string()),
        z.string()
      ]).optional(),
      duracionEstimada: z.string().optional(),
      tips: z.array(z.string()).optional(),
    }).optional(),
  }),
});

export const collections = { productos, combos };