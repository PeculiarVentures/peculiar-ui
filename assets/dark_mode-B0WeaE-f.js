import{j as r}from"./jsx-runtime-xF634gn_.js";import{useMDXComponents as s}from"./index-o2KxC7bF.js";import{M as a}from"./index-CQtnV9Qr.js";import{ColorItemExample as e}from"./palette.stories-AQXa0Kq7.js";import{p as i,s as c,w as m,a as d,b as l,g as p,c as h}from"./utils-BRRLvpTZ.js";import"./index-C-7etoUd.js";import"./iframe-WsVDjk04.js";import"./index-dzNl0v_V.js";import"./index-DWe4bgYs.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./typography-BPMyf_HL.js";import"./emotion-styled.browser.esm-CnX2NPaZ.js";import"./emotion-element-f0de968e.browser.esm-DLlpVLeB.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(a,{title:"Customization/Dark mode"}),`
`,r.jsx(o.h1,{id:"dark-mode",children:"Dark mode"}),`
`,r.jsxs(o.p,{children:["You can make your application use the dark theme as the default—regardless of the user's preference—by adding mode: 'dark' to the ",r.jsx(o.code,{children:"ThemeProvider"}),":"]}),`
`,r.jsx(o.pre,{children:r.jsx(o.code,{className:"language-tsx",children:`import { Button, ThemeProvider } from '@peculiar/react-components';

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
`,r.jsx(o.h2,{id:"colors-dark",children:"Colors dark"}),`
`,r.jsx(e,{title:"Primary",colors:i}),`
`,r.jsx(e,{title:"Secondary",colors:c}),`
`,r.jsx(e,{title:"Wrong",colors:m}),`
`,r.jsx(e,{title:"Attention",colors:d}),`
`,r.jsx(e,{title:"Success",colors:l}),`
`,r.jsx(e,{title:"Grayscale",colors:p}),`
`,r.jsx(e,{title:"Additional",colors:h})]})}function w(t={}){const{wrapper:o}={...s(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(n,{...t})}):n(t)}export{w as default};
