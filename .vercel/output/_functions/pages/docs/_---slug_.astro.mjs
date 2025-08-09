import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, d as renderSlot } from '../../chunks/astro/server_CZvN1y2W.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CdohpD6o.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": slug }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])}` })}`;
}, "/home/sofidev/lab/astro-ui/src/pages/docs/[...slug].astro", void 0);

const $$file = "/home/sofidev/lab/astro-ui/src/pages/docs/[...slug].astro";
const $$url = "/docs/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
