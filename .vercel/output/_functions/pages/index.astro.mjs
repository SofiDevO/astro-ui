import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CZvN1y2W.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CdohpD6o.mjs';
import { g as getCollection } from '../chunks/_astro_content_ByavDKbb.mjs';
import { $ as $$Button } from '../chunks/Button_B3BdD497.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  await getCollection("docs");
  const posts = await getCollection("docs");
  console.log(posts);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<header> <!-- <nav>
      <ul>
          {
              docs.map((doc) => (

                  <li><a href={\`/docs/\${doc.id}\`}>{doc.id}</a></a></li>
              ))
          }
      </ul>
  </nav>
  </header> --> <main class="w-full flex flex-col items-start justify-center gap-20 "> <!-- <ButtonSelect /> --> ${renderComponent($$result2, "Button", $$Button, { "variant": "warning" }, { "default": async ($$result3) => renderTemplate`Hola mundo` })} </main> </header>` })}`;
}, "/home/sofidev/lab/astro-ui/src/pages/index.astro", void 0);

const $$file = "/home/sofidev/lab/astro-ui/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
