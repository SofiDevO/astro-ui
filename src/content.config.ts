import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";

const docs = defineCollection({
  loader: glob({ base: "./src/components/docs", pattern:  "**/*.md" }),
});

export const collections = { docs };
