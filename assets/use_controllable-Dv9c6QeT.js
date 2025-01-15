import{j as n}from"./jsx-runtime-CQsLhzk5.js";import{useMDXComponents as r}from"./index-C2WH5l5l.js";import{ae as a,af as s}from"./index-B1hq2CfJ.js";import{DemoExample as l}from"./use_controllable.stories-DQUTFiII.js";import"./index-Wp2u197Z.js";import"./iframe-DTojuAtu.js";import"../sb-preview/runtime.js";import"./index-DA8gG4lw.js";import"./index-yiGAEVS0.js";import"./index-Dy31kHqt.js";import"./use_controllable-DRJrQW8S.js";function o(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Hooks/useControllableState"}),`
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
`,n.jsx(s,{of:l})]})}function b(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{b as default};
