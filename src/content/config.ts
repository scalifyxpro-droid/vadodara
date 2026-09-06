import { defineCollection, z } from 'astro:content';

const niches = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    urlSlug: z.string(),
    category: z.string(),
    eyebrow: z.string(),
    titles: z.array(z.string()).length(3),
    descriptions: z.array(z.string()).length(3),
    keywords: z.array(z.string()).min(8),
    heroSub: z.string(),
    aboutHeading: z.string(),
    aboutParagraphs: z.array(z.string()),
    usps: z.array(z.object({ title: z.string(), body: z.string() })),
    services: z.array(z.string()),
    costIntro: z.string(),
    costFactors: z.array(z.string()),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })),
  }),
});

export const collections = { niches };
