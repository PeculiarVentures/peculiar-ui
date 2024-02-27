import{j as n}from"./jsx-runtime-DtaoT6pD.js";import{M as a,C as s}from"./index-Hr5JZ4Xe.js";import{DemoExample as l}from"./use_controllable.stories-6lKFGi8w.js";import{useMDXComponents as r}from"./index-82O-B91n.js";import"./index-OjgoNOWw.js";import"./iframe-onaVkT9n.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xK8HOd_o.js";import"./index-mQqIOHEI.js";import"./inheritsLoose-Y9jOMJLd.js";import"./index-LnHysSno.js";import"./index-BdDYuicC.js";import"./use_controllable-CY5ZQbVr.js";function o(t){const e=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},r(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Hooks/useControllableState"}),`
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
