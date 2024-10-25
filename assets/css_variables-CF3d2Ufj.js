import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{M as r}from"./index-CwcN3avl.js";import{useMDXComponents as s}from"./index-icA9A9Lr.js";import"./index-Dl6G-zuu.js";import"./iframe-C8d3SmaM.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-L5l4RKBO.js";import"./index-D1_ZHIBm.js";import"./inheritsLoose-B7h9gheN.js";import"./index-B5O4V4BP.js";import"./index-B9pQ14RZ.js";function t(o){const n=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",a:"a",h2:"h2",pre:"pre"},s(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Customization/CSS Variables"}),`
`,e.jsx(n.h1,{id:"css-variables",children:"CSS Variables"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@peculiar/react-components"}),' now converts theme tokens (colors, font sizes, etc) to CSS Custom Properties (also known as "CSS variables").']}),`
`,e.jsx(n.p,{children:"CSS variables are now supported in all modern browsers, and we think they are useful to:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"avoid prop interpolations;"}),`
`,e.jsxs(n.li,{children:["avoid classname regeneration from ",e.jsx(n.a,{href:"https://emotion.sh/docs/introduction",target:"_blank",rel:"nofollow noopener noreferrer",children:"emotion"}),";"]}),`
`,e.jsx(n.li,{children:"reduce runtime evaluation of token values in Theme context;"}),`
`,e.jsx(n.li,{children:"use theme token outside components (embedded forms, markdown content, etc.)"}),`
`]}),`
`,e.jsx(n.h2,{id:"converting-theme-tokens-to-css-variables",children:"Converting theme tokens to CSS variables"}),`
`,e.jsxs(n.p,{children:["By default, ",e.jsx(n.code,{children:"ThemeProvider"})," converts theme tokens defined in your theme (or our default theme) to CSS variables internally so you don't have to."]}),`
`,e.jsx(n.p,{children:"Given a theme object that looks like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const theme = {
  color: {
    black: '#293033',
    primary: '#5ebc54',
  },
  text: {
    h1: {
      size: '30px',
    },
  },
};
`})}),`
`,e.jsxs(n.p,{children:["When you pass this theme to the ",e.jsx(n.code,{children:"ThemeProvider"}),", we'll automatically generate CSS variables that look like:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`html {
  --pv-color-black: #293033;
  --pv-color-primary: #5ebc54;
  --pv-text-h1-size: 30px;
}
`})}),`
`,e.jsx(n.h2,{id:"styling-non-peculiar-components",children:"Styling non-peculiar components"}),`
`,e.jsx(n.p,{children:"You can write custom CSS to style the components"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.button-custom {
  background-color: var(--pv-color-primary);
}
`})}),`
`,e.jsx(n.h2,{id:"attaching-the-css-variables",children:"Attaching the CSS variables"}),`
`,e.jsxs(n.p,{children:["By default, ",e.jsx(n.code,{children:"ThemeProvider"})," attaches the generated CSS variables to the ",e.jsx(n.code,{children:"html, ::backdrop"})," element."]}),`
`,e.jsxs(n.p,{children:["To change the root element, pass the ",e.jsx(n.code,{children:"cssVarsRoot"})," prop to ",e.jsx(n.code,{children:"ThemeProvider"})," and set its value to the css selector of the element you want."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ThemeProvider cssVarsRoot='#app'>
  <App />
</ThemeProvider>
`})})]})}function v(o={}){const{wrapper:n}=Object.assign({},s(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(t,o)})):t(o)}export{v as default};
