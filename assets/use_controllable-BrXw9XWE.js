import{j as n}from"./jsx-runtime-xF634gn_.js";import{useMDXComponents as r}from"./index-o2KxC7bF.js";import{M as a,C as s}from"./index-DhoU-PWy.js";import{DemoExample as l}from"./use_controllable.stories-Dr4fXFDb.js";import"./index-C-7etoUd.js";import"./iframe-CQCljjtp.js";import"./index-DVfLDD12.js";import"./index-CtyGc8zC.js";import"./index-CXQShRbs.js";import"./index-DzUv_9kz.js";import"./use_controllable-DXs9Mygf.js";function o(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Hooks/useControllableState"}),`
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
`,n.jsx(s,{of:l})]})}function C(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{C as default};
