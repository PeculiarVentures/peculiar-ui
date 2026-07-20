import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{E as n,O as r,S as i,g as a,m as o,t as s,w as c,y as l}from"./foundations-cG1awtAQ.js";import{Bt as u,Wt as d,zt as f}from"./iframe-CUF1RwMG.js";import{t as p}from"./mdx-react-shim-CRV7onkY.js";import{ColorItemExample as m,t as h}from"./palette.stories-C6nJ3Z3R.js";function g(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...d(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f,{title:`Customization/Dark mode`}),`
`,(0,v.jsx)(t.h1,{id:`dark-mode`,children:`Dark mode`}),`
`,(0,v.jsxs)(t.p,{children:[`You can make your application use the dark theme as the default—regardless of the user's preference—by adding mode: 'dark' to the `,(0,v.jsx)(t.code,{children:`ThemeProvider`}),`:`]}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`import { Button, ThemeProvider } from '@peculiar/react-components';

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
`,(0,v.jsx)(t.h2,{id:`colors-dark`,children:`Colors dark`}),`
`,(0,v.jsx)(m,{title:`Primary`,colors:i}),`
`,(0,v.jsx)(m,{title:`Secondary`,colors:c}),`
`,(0,v.jsx)(m,{title:`Wrong`,colors:r}),`
`,(0,v.jsx)(m,{title:`Attention`,colors:a}),`
`,(0,v.jsx)(m,{title:`Success`,colors:n}),`
`,(0,v.jsx)(m,{title:`Grayscale`,colors:l}),`
`,(0,v.jsx)(m,{title:`Additional`,colors:o})]})}function _(e={}){let{wrapper:t}={...d(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;e((()=>{v=t(),p(),u(),h(),s()}))();export{_ as default};