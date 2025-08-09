import { c as createComponent, a as createAstro, e as addAttribute, f as renderHead, d as renderSlot, b as renderTemplate } from './astro/server_CZvN1y2W.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                   */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Ui</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/sofidev/lab/astro-ui/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
