import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,u as n}from"./blocks-BkbI2scT.js";import{t as r}from"./jsx-runtime-BG4KOiPz.js";import{i,r as a}from"./react-Bg8UoiFE.js";import{b as o,c as s,d as c,f as l,g as u,m as d,o as f,v as p}from"./iframe-B9XpwsN7.js";import{r as m,t as h}from"./palette.stories-Bhy5tVAK.js";function g(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(n,{title:`Customization/Dark mode`}),`
`,(0,v.jsx)(t.h1,{id:`dark-mode`,children:`Dark mode`}),`
`,(0,v.jsxs)(t.p,{children:[`You can make your application use the dark theme as the default—regardless of the user's preference—by adding mode: 'dark' to the `,(0,v.jsx)(t.code,{children:`ThemeProvider`}),`:`]}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`import { Button, ThemeProvider } from '@peculiar/react-components';

function App() {
  return (
    <ThemeProvider mode="dark">
      <Button>Action</Button>
    </ThemeProvider>
  );
}
`})}),`
`,(0,v.jsx)(t.h2,{id:`colors-dark`,children:`Colors dark`}),`
`,(0,v.jsx)(h,{title:`Primary`,colors:d}),`
`,(0,v.jsx)(h,{title:`Secondary`,colors:u}),`
`,(0,v.jsx)(h,{title:`Wrong`,colors:o}),`
`,(0,v.jsx)(h,{title:`Attention`,colors:s}),`
`,(0,v.jsx)(h,{title:`Success`,colors:p}),`
`,(0,v.jsx)(h,{title:`Grayscale`,colors:c}),`
`,(0,v.jsx)(h,{title:`Additional`,colors:f})]})}function _(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=r(),a(),t(),m(),l()})))()}y();export{_ as default};