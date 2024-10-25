import{j as r}from"./jsx-runtime-Du8NFWEI.js";import{M as a}from"./index-CahDekZF.js";import{ColorItemExample as o}from"./palette.stories-DR0wcK_p.js";import{useMDXComponents as s}from"./index-icA9A9Lr.js";import{p as i,s as c,w as m,a as d,b as l,g as p,c as h}from"./utils-DDmc6yYE.js";import"./index-Dl6G-zuu.js";import"./iframe-D9NETBGr.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-L5l4RKBO.js";import"./index-D1_ZHIBm.js";import"./inheritsLoose-B7h9gheN.js";import"./index-B5O4V4BP.js";import"./index-B9pQ14RZ.js";import"./typography-CsxZaBy5.js";import"./emotion-styled.browser.esm-Cx145QRj.js";import"./emotion-element-c39617d8.browser.esm-DM69r4Qw.js";function n(t){const e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2"},s(),t.components);return r.jsxs(r.Fragment,{children:[r.jsx(a,{title:"Customization/Dark mode"}),`
`,r.jsx(e.h1,{id:"dark-mode",children:"Dark mode"}),`
`,r.jsxs(e.p,{children:["You can make your application use the dark theme as the default—regardless of the user's preference—by adding mode: 'dark' to the ",r.jsx(e.code,{children:"ThemeProvider"}),":"]}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-tsx",children:`import { Button, ThemeProvider } from '@peculiar/react-components';

function App() {
  return (
    <ThemeProvider mode="dark">
      <Button>
        Action
      </Button>
    </ThemeProvider>
  );
}
`})}),`
`,r.jsx(e.h2,{id:"colors-dark",children:"Colors dark"}),`
`,r.jsx(o,{title:"Primary",colors:i}),`
`,r.jsx(o,{title:"Secondary",colors:c}),`
`,r.jsx(o,{title:"Wrong",colors:m}),`
`,r.jsx(o,{title:"Attention",colors:d}),`
`,r.jsx(o,{title:"Success",colors:l}),`
`,r.jsx(o,{title:"Grayscale",colors:p}),`
`,r.jsx(o,{title:"Additional",colors:h})]})}function B(t={}){const{wrapper:e}=Object.assign({},s(),t.components);return e?r.jsx(e,Object.assign({},t,{children:r.jsx(n,t)})):n(t)}export{B as default};
