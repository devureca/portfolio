import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        url: z.string().url(),
        imageUrl: z.string(),
        date: z.coerce.date()
    })
});

export const collections = { projects };