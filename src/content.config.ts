import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articles = defineCollection({
  loader: glob({
    base: "./src/content/articles",
    pattern: "**/*.md",
    generateId: ({ entry }) => entry.replace(/\.md$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z
      .string()
      .regex(/^\/?articles\/.+/, "Article URL must start with 'articles/'.")
      .optional(),
    pubDate: z.date(),
    originalPubDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { articles };
