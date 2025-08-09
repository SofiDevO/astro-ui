import 'kleur/colors';
import { l as decodeKey } from './chunks/astro/server_CZvN1y2W.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BT0_KZHX.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/sofidev/lab/astro-ui/","cacheDir":"file:///home/sofidev/lab/astro-ui/node_modules/.astro/","outDir":"file:///home/sofidev/lab/astro-ui/dist/","srcDir":"file:///home/sofidev/lab/astro-ui/src/","publicDir":"file:///home/sofidev/lab/astro-ui/public/","buildClientDir":"file:///home/sofidev/lab/astro-ui/dist/client/","buildServerDir":"file:///home/sofidev/lab/astro-ui/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/docs/button","isIndex":false,"type":"page","pattern":"^\\/docs\\/button\\/?$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"button","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/docs/button.md","pathname":"/docs/button","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/docs/content.config","isIndex":false,"type":"endpoint","pattern":"^\\/docs\\/content\\.config\\/?$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"content.config","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/docs/content.config.ts","pathname":"/docs/content.config","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_componentName_._8ZiCq9r.css"}],"routeData":{"route":"/docs/title-component","isIndex":false,"type":"page","pattern":"^\\/docs\\/title-component\\/?$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"title-component","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/docs/title-component.mdx","pathname":"/docs/title-component","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_componentName_._8ZiCq9r.css"}],"routeData":{"route":"/docs/[...slug]","isIndex":false,"type":"page","pattern":"^\\/docs(?:\\/(.*?))?\\/?$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/docs/[...slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_componentName_._8ZiCq9r.css"}],"routeData":{"route":"/[componentname]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"componentName","dynamic":true,"spread":false}]],"params":["componentName"],"component":"src/pages/[componentName].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_componentName_._8ZiCq9r.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/sofidev/lab/astro-ui/src/pages/[componentName].astro",{"propagation":"none","containsHead":true}],["/home/sofidev/lab/astro-ui/src/pages/docs/[...slug].astro",{"propagation":"none","containsHead":true}],["/home/sofidev/lab/astro-ui/src/pages/docs/title-component.mdx",{"propagation":"none","containsHead":true}],["/home/sofidev/lab/astro-ui/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/sofidev/lab/astro-ui/src/pages/docs/content.config.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/docs/content.config@_@ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/docs/button@_@md":"pages/docs/button.astro.mjs","\u0000@astro-page:src/pages/docs/content.config@_@ts":"pages/docs/content.config.astro.mjs","\u0000@astro-page:src/pages/docs/[...slug]@_@astro":"pages/docs/_---slug_.astro.mjs","\u0000@astro-page:src/pages/[componentName]@_@astro":"pages/_componentname_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/docs/title-component@_@mdx":"pages/docs/title-component.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","/home/sofidev/lab/astro-ui/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_I6wGv8Ro.mjs","/home/sofidev/lab/astro-ui/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/home/sofidev/lab/astro-ui/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_CVoFpj96.mjs","\u0000@astrojs-manifest":"manifest_BlRwlAOE.mjs","/home/sofidev/lab/astro-ui/src/components/molecules/TitleSelect.astro?astro&type=script&index=0&lang.ts":"_astro/TitleSelect.astro_astro_type_script_index_0_lang.DSo4z8tf.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/sofidev/lab/astro-ui/src/components/molecules/TitleSelect.astro?astro&type=script&index=0&lang.ts","const o={h1:\"text-2xl font-bold uppercase lg:text-4xl\",h2:\"text-lg font-medium uppercase lg:text-2xl\",h3:\"text-2xl font-semibold uppercase \",h4:\"text-xl font-semibold uppercase\",h5:\"text-lg font-semibold uppercase\",p:\"text-base font-medium\"},a={white:\"text-white \",black:\"text-black\",primary:\"text-grey-600\",neutral:\"text-neutral-300\",warnining:\"text-yellow-500\",danger:\"text-red-500\",gradient:\"bg-gradient-to-r from-blue-500 to-violet-900 bg-clip-text  font-extrabold text-transparent\"},n=document.querySelector(\"#title-type\"),i=document.querySelector(\"#title-tag\"),c=document.querySelector(\"#title-color\"),s=document.querySelector(\"#title-filters\");let e=i.value,l=c.value;s.addEventListener(\"change\",r=>{let t=r.target;t.tagName===\"SELECT\"&&(t.id===\"title-color\"&&(l=t.value),t.id===\"title-tag\"&&(e=t.value),n.setAttribute(\"class\",o[e]+\" \"+a[l]))});"]],"assets":["/_astro/_componentName_._8ZiCq9r.css","/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"2c+1ho6W1DtdlZIozLqLjZdlPcjTfICnMcocRRDNanA="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
