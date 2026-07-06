import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{Bt as n,Wt as r,zt as i}from"./iframe-DgRRKy_j.js";import{t as a}from"./mdx-react-shim-D_JpUb7A.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...r(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Customization/CSS Variables`}),`
`,(0,c.jsx)(t.h1,{id:`css-variables`,children:`CSS Variables`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`@peculiar/react-components`}),` now converts theme tokens (colors, font sizes, etc) to CSS Custom Properties (also known as "CSS variables").`]}),`
`,(0,c.jsx)(t.p,{children:`CSS variables are now supported in all modern browsers, and we think they are useful to:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`avoid prop interpolations;`}),`
`,(0,c.jsxs)(t.li,{children:[`avoid classname regeneration from `,(0,c.jsx)(t.a,{href:`https://emotion.sh/docs/introduction`,rel:`nofollow`,children:`emotion`}),`;`]}),`
`,(0,c.jsx)(t.li,{children:`reduce runtime evaluation of token values in Theme context;`}),`
`,(0,c.jsx)(t.li,{children:`use theme token outside components (embedded forms, markdown content, etc.)`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`converting-theme-tokens-to-css-variables`,children:`Converting theme tokens to CSS variables`}),`
`,(0,c.jsxs)(t.p,{children:[`By default, `,(0,c.jsx)(t.code,{children:`ThemeProvider`}),` converts theme tokens defined in your theme (or our default theme) to CSS variables internally so you don't have to.`]}),`
`,(0,c.jsx)(t.p,{children:`Given a theme object that looks like this:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`const theme = {
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
`,(0,c.jsxs)(t.p,{children:[`When you pass this theme to the `,(0,c.jsx)(t.code,{children:`ThemeProvider`}),`, we'll automatically generate CSS variables that look like:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`html {
  --pv-color-black: #293033;
  --pv-color-primary: #5ebc54;
  --pv-text-h1-size: 30px;
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`styling-non-peculiar-components`,children:`Styling non-peculiar components`}),`
`,(0,c.jsx)(t.p,{children:`You can write custom CSS to style the components`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`.button-custom {
  background-color: var(--pv-color-primary);
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`attaching-the-css-variables`,children:`Attaching the CSS variables`}),`
`,(0,c.jsxs)(t.p,{children:[`By default, `,(0,c.jsx)(t.code,{children:`ThemeProvider`}),` attaches the generated CSS variables to the `,(0,c.jsx)(t.code,{children:`html, ::backdrop`}),` element.`]}),`
`,(0,c.jsxs)(t.p,{children:[`To change the root element, pass the `,(0,c.jsx)(t.code,{children:`cssVarsRoot`}),` prop to `,(0,c.jsx)(t.code,{children:`ThemeProvider`}),` and set its value to the css selector of the element you want.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<ThemeProvider cssVarsRoot='#app'>
  <App />
</ThemeProvider>
`})})]})}function s(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),n()}))();export{s as default};