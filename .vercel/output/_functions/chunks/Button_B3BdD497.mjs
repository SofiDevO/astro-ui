import { c as createComponent, a as createAstro, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, d as renderSlot, b as renderTemplate } from './astro/server_CZvN1y2W.mjs';
import { t as titleVariants } from './getColor_CDuIPqJS.mjs';
import 'clsx';

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { href, class: className, attributes, variant = "default", ...props } = Astro2.props;
  const variantClasses = titleVariants[variant] || titleVariants.default;
  const baseClasses = "p-3 text-center rounded-md font-bold cursor-pointer max-w-[max-content]  ";
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${spreadAttributes(attributes)}${addAttribute(`${baseClasses} ${variantClasses} ${className}`, "class")}${spreadAttributes(props)}>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<button${spreadAttributes(attributes)}${addAttribute(`${baseClasses} ${variantClasses} ${className}  ${attributes?.disabled && "disabled:opacity-50 disabled:cursor-not-allowed"}`, "class")}${spreadAttributes(props)}>${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "/home/sofidev/lab/astro-ui/src/components/atoms/Button.astro", void 0);

const $$file = "/home/sofidev/lab/astro-ui/src/components/atoms/Button.astro";
const $$url = undefined;

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Button,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Button as $, __vite_glob_0_0 as _ };
