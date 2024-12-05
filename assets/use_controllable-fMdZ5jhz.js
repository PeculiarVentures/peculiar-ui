import{j as n}from"./jsx-runtime-Du8NFWEI.js";import{M as a,C as s}from"./index-e1M4SoSa.js";import{DemoExample as l}from"./use_controllable.stories-CzBZw3eQ.js";import{useMDXComponents as r}from"./index-icA9A9Lr.js";import"./index-Dl6G-zuu.js";import"./iframe-DRYsyK8r.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-L5l4RKBO.js";import"./index-D1_ZHIBm.js";import"./inheritsLoose-B7h9gheN.js";import"./index-B5O4V4BP.js";import"./index-B9pQ14RZ.js";import"./use_controllable-DUuBybTH.js";function o(t){const e=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},r(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Hooks/useControllableState"}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"React hook that allows any component handle controlled and uncontrolled modes, and provide control over its internal state."}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { useControllableState } from '@peculiar/react-components';

export const Demo = () => {
  const [value, setValue] = useControllableState({ defaultValue: 40 });

  return (
    <div>
      <button
        onClick={() => setValue(value + 1)}
        type="button"
      >
        +
      </button>
      <span>
        {value}
      </span>
      <button
        onClick={() => setValue(value - 1)}
        type="button"
      >
        -
      </button>
    </div>
  );
};
`})}),`
`,n.jsx(e.h2,{id:"demo",children:"Demo"}),`
`,n.jsx(s,{of:l})]})}function g(t={}){const{wrapper:e}=Object.assign({},r(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(o,t)})):o(t)}export{g as default};
