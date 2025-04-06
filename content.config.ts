import { defineCollection, defineContentConfig, z } from "@nuxt/content";
import { asSitemapCollection } from "@nuxtjs/sitemap/content";

export default defineContentConfig({
  collections: {
    content: defineCollection(
      asSitemapCollection({
        schema: z.object({
          author: z.string(),
          title: z.string(),
          date: z.string(),
          external: z.boolean().optional().default(false),
          externalUrl: z.string().optional(),
          language: z.string().optional(),
          description: z.string(),
        }),
        source: {
          cwd: "posts",
          include: "content/*.md",
          exclude: ["**/.*"],
        },
        type: "page",
      }),
    ),
  }
});
