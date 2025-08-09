import { d as defineCollection } from '../../chunks/_astro_content_ByavDKbb.mjs';
import * as z from 'zod';
export { renderers } from '../../renderers.mjs';

const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    id: z.string()
  })
});
const collections = { docs };

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  collections
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
