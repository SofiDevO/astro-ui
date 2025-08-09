import { _ as __vite_glob_0_0 } from '../chunks/Button_B3BdD497.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/Title_staqQTna.mjs';
import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_CZvN1y2W.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CdohpD6o.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$componentName = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$componentName;
  const { componentName } = Astro2.params;
  const query = new URLSearchParams(Astro2.request.url);
  query.get("props") || "{}";
  const components = Object.values([__vite_glob_0_0,__vite_glob_0_1]);
  console.log(components);
  let component = components.find((component2) => {
    const name = component2.default.name;
    console.log(name, componentName);
    if (name === componentName) {
      return component2;
    }
  });
  if (!component) {
    return new Response(null, {
      status: 404,
      statusText: "Not Found"
    });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "test" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "component.default", component.default, { "color": "gradient" }, { "default": ($$result3) => renderTemplate`
Tets
` })} ` })}`;
}, "/home/sofidev/lab/astro-ui/src/pages/[componentName].astro", void 0);

const $$file = "/home/sofidev/lab/astro-ui/src/pages/[componentName].astro";
const $$url = "/[componentName]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$componentName,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
