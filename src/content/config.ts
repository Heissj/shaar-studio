import { defineCollection, z } from 'astro:content';

const journal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    cover: z.string().optional(),
    excerpt: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

const gallery = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    date: z.coerce.date().optional(),
    location: z.string().optional(),
    tag: z.enum(['street', 'portrait', 'architecture', 'landscape']),
    page: z.enum(['gallery', 'kabul-streets', 'featured', 'about']).default('gallery'),
  }),
});

export const collections = { journal, gallery };
