import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["wip", "live", "ongoing", "paused"]),
    url: z.string().optional(),
    repo: z.string().optional(),
    tech: z.array(z.string()).optional(),
    order: z.number(),
  }),
});

export const collections = { projects };
