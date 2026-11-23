import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    weekNumber: z.number().default(1),
    author: z.string().default('Dr. Dt. Koray Altun'),
    authorRole: z.string().default('Estetik Diş Hekimi & Kurucu'),
    category: z.string(),
    readingTime: z.string(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['tr', 'en']).default('tr'),
    featured: z.boolean().default(false),
    // Phase 2 extension hooks
    communityCommentsCount: z.number().default(0),
    allowPatientQuestions: z.boolean().default(true),
  }),
});

export const collections = { blog };
