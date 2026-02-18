import{j as e}from"./jsx-runtime-xF634gn_.js";import{useMDXComponents as r}from"./index-o2KxC7bF.js";import{M as s,C as i}from"./index-DP7Mi2QD.js";import{DemoExample as m}from"./use_id.stories-DiKMS_Fc.js";import"./index-C-7etoUd.js";import"./iframe-lkhoEW-u.js";import"./index-dzNl0v_V.js";import"./index-DWe4bgYs.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./use_id-Bg_loyUk.js";function t(o){const n={code:"code",h2:"h2",p:"p",pre:"pre",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Hooks/useId"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"React hook for generating unique IDs that can be passed to accessibility attributes."}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useId } from '@peculiar/react-components';

const Demo = () => {
  const id = useId();

  return (
    <div>
      ID is:
      {' '}
      {id}
    </div>
  );
};
`})}),`
`,e.jsx(n.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(i,{of:m})]})}function g(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{g as default};
