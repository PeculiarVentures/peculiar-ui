import{j as r}from"./jsx-runtime-CQsLhzk5.js";import{useMDXComponents as s}from"./index-C2WH5l5l.js";import{ae as a}from"./index-DspTA1k1.js";import{ColorItemExample as o}from"./palette.stories-3eZ5ZI5K.js";import{p as i,s as c,w as m,a as d,b as l,g as p,c as h}from"./utils-B6f9wHAn.js";import"./index-Wp2u197Z.js";import"./iframe-DokMiql0.js";import"../sb-preview/runtime.js";import"./index-DA8gG4lw.js";import"./index-yiGAEVS0.js";import"./index-Dy31kHqt.js";import"./typography-CSDQkA0z.js";import"./emotion-styled.browser.esm-C7XpMTT7.js";import"./emotion-element-c39617d8.browser.esm-BF_KrTCf.js";function n(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(a,{title:"Customization/Dark mode"}),`
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
`,r.jsx(o,{title:"Additional",colors:h})]})}function w(t={}){const{wrapper:e}={...s(),...t.components};return e?r.jsx(e,{...t,children:r.jsx(n,{...t})}):n(t)}export{w as default};
