import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from '../../chunks/astro/server_CZvN1y2W.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const html = () => "<h1 id=\"hola-patata\">Hola patata</h1>\n<p>Hola esta es una prueba de documentación</p>";

				const frontmatter = {"title":"Button Component","id":"button-component"};
				const file = "/home/sofidev/lab/astro-ui/src/pages/docs/button.md";
				const url = "/docs/button";
				function rawContent() {
					return "   \n                       \n\n                    \n\n   \n\n# Hola patata\nHola esta es una prueba de documentación\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"hola-patata","text":"Hola patata"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`<meta charset="utf-8">${maybeRenderHead()}${unescapeHTML(html())}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
