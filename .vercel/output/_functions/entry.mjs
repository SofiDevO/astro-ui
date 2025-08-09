import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { c as createExports } from './chunks/entrypoint_CtcqNFiO.mjs';
import { manifest } from './manifest_DfsaXN6k.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/docs/button.astro.mjs');
const _page2 = () => import('./pages/docs/content.config.astro.mjs');
const _page3 = () => import('./pages/docs/title-component.astro.mjs');
const _page4 = () => import('./pages/docs/_---slug_.astro.mjs');
const _page5 = () => import('./pages/_componentname_.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/docs/button.md", _page1],
    ["src/pages/docs/content.config.ts", _page2],
    ["src/pages/docs/title-component.mdx", _page3],
    ["src/pages/docs/[...slug].astro", _page4],
    ["src/pages/[componentName].astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "230ebe6c-b3a4-4eb3-bffa-41bc60cb7bbb",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
