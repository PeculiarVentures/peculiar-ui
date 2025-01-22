import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{useMDXComponents as r}from"./index-C2WH5l5l.js";import{ae as i,af as s}from"./index-C-c8caA0.js";import{DemoExample as a}from"./use_media_query.stories-CNn1b0qR.js";import"./index-Wp2u197Z.js";import"./iframe-BLFSsrBL.js";import"../sb-preview/runtime.js";import"./index-DA8gG4lw.js";import"./index-yiGAEVS0.js";import"./index-Dy31kHqt.js";import"./use_enhanced_effect-C1-U52iU.js";function t(o){const n={code:"code",h2:"h2",p:"p",pre:"pre",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Hooks/useMediaQuery"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"React hook that tracks state of a CSS media query."}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useMediaQuery } from '@peculiar/react-components';

const Demo = () => {
  const isWide = useMediaQuery('(min-width: 480px)');

  return (
    <div>
      Screen is wide:
      {' '}
      {isWide ? 'Yes' : 'No'}
    </div>
  );
};
`})}),`
`,e.jsx(n.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(s,{of:a})]})}function v(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{v as default};
