import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, d as renderSlot } from './astro/server_CZvN1y2W.mjs';
import 'kleur/colors';
import { v as variantClasses, c as colorClasses } from './getColor_CDuIPqJS.mjs';

const $$Astro = createAstro();
const $$Title = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Title;
  const { as: Tag, class: classProp, attributes, color, ...props } = Astro2.props;
  const variant = Tag;
  const variantClass = variantClasses[variant] || variantClasses.p;
  const colorClass = colorClasses[color] || colorClasses.neutral;
  const classes = [variantClass, colorClass, classProp].filter(Boolean).join(" ");
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": classes, ...props, ...attributes }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/sofidev/lab/astro-ui/src/components/atoms/Title.astro", void 0);

const $$file = "/home/sofidev/lab/astro-ui/src/components/atoms/Title.astro";
const $$url = undefined;

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Title,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Title as $, __vite_glob_0_1 as _ };
