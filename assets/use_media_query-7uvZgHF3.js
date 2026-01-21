import{j as e}from"./jsx-runtime-xF634gn_.js";import{useMDXComponents as r}from"./index-o2KxC7bF.js";import{M as i,C as s}from"./index-CISM9zH5.js";import{DemoExample as m}from"./use_media_query.stories-DCua3MBV.js";import"./index-C-7etoUd.js";import"./iframe-hucTUr5f.js";import"./index-dzNl0v_V.js";import"./index-DWe4bgYs.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./use_enhanced_effect-B1RabiBj.js";function t(o){const n={code:"code",h2:"h2",p:"p",pre:"pre",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Hooks/useMediaQuery"}),`
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
`,e.jsx(s,{of:m})]})}function v(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{v as default};
