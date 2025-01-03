import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{useMDXComponents as r}from"./index-C2WH5l5l.js";import{ae as s,af as i}from"./index-BUlNSo9C.js";import{DemoExample as a}from"./use_id.stories-d2EcZOv0.js";import"./index-Wp2u197Z.js";import"./iframe-B1OxMBR5.js";import"../sb-preview/runtime.js";import"./index-DA8gG4lw.js";import"./index-yiGAEVS0.js";import"./index-Dy31kHqt.js";import"./use_id-BweIgYmC.js";function t(o){const n={code:"code",h2:"h2",p:"p",pre:"pre",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Hooks/useId"}),`
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
`,e.jsx(i,{of:a})]})}function g(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{g as default};
