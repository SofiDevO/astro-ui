import { c as createComponent, m as maybeRenderHead, r as renderComponent, k as renderScript, e as addAttribute, b as renderTemplate, _ as __astro_tag_component__, h as createVNode, F as Fragment } from '../../chunks/astro/server_CZvN1y2W.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CdohpD6o.mjs';
import 'kleur/colors';
import { v as variantClasses, c as colorClasses } from '../../chunks/getColor_CDuIPqJS.mjs';
import { $ as $$Title } from '../../chunks/Title_staqQTna.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$TitleSelect = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="title-filters" class="flex items-center justify-between gap-20 my"> <div class="flex items-start gap-10 flex-col"> <div class="flex justify-center gap-10"> <select name="select-tag" id="title-tag"> ${Object.keys(variantClasses).map((variant) => renderTemplate`<option${addAttribute(variant, "value")}>${variant}</option>`)};
</select> <select name="" id="title-color"> ${Object.keys(colorClasses).map((variant) => renderTemplate`<option${addAttribute(variant, "value")}>${variant}</option>`)};
</select> </div> ${renderComponent($$result, "Title", $$Title, { "attributes": { id: "title-type" }, "as": "h1", "color": "gradient" }, { "default": ($$result2) => renderTemplate`Welcome to astro UI` })} </div> ${renderScript($$result, "/home/sofidev/lab/astro-ui/src/components/molecules/TitleSelect.astro?astro&type=script&index=0&lang.ts")}</div>`;
}, "/home/sofidev/lab/astro-ui/src/components/molecules/TitleSelect.astro", void 0);

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "title": "Button Component",
  "id": "title-component",
  "layout": "@layouts/Layout.astro"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "quick-overview",
    "text": "Quick Overview"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "quick-overview",
      children: "Quick Overview"
    }), "\n", createVNode(_components.p, {
      children: "Use the component in your Astro project by importing it and specifying the HTML tag and color scheme. For example:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "astro",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Title"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " as"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"h1\""
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " color"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"gradient\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">Welcome to astro UI</"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Title"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Properties:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "as"
        }), ": Determines the HTML element (e.g., ", createVNode(_components.code, {
          children: "h1"
        }), ", ", createVNode(_components.code, {
          children: "h2"
        }), ")."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "color"
        }), ": Chooses the color scheme from the ", createVNode(_components.code, {
          children: "colorClasses"
        }), " options."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "class"
        }), " (optional): Add extra CSS classes."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "attributes"
        }), " (optional): Pass additional HTML attributes (e.g., ", createVNode(_components.code, {
          children: "id"
        }), ", ", createVNode(_components.code, {
          children: "data-*"
        }), ")."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Interactive Setup:"
      })
    }), "\n", createVNode(_components.p, {
      children: "In dynamic environments, dropdown menus let you choose the HTML tag and color, updating the component in real time."
    }), "\n", createVNode(_components.p, {
      children: "This summary covers the essentials for using the dynamic title component in Astro."
    }), "\n", "\n", createVNode($$TitleSelect, {})]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "/docs/title-component";
const file = "/home/sofidev/lab/astro-ui/src/pages/docs/title-component.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/sofidev/lab/astro-ui/src/pages/docs/title-component.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
