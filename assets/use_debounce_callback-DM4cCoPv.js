import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{useMDXComponents as s}from"./index-C2WH5l5l.js";import{ae as a,af as r}from"./index-DspTA1k1.js";import{DemoExample as c}from"./use_debounce_callback.stories-BaS6KCmu.js";import"./index-Wp2u197Z.js";import"./iframe-DokMiql0.js";import"../sb-preview/runtime.js";import"./index-DA8gG4lw.js";import"./index-yiGAEVS0.js";import"./index-Dy31kHqt.js";function o(t){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Hooks/useDebounceCallback"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["React hook that makes passed function debounced, otherwise acts like ",e.jsx(n.code,{children:"useCallback"}),"."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useDebounceCallback } from '@peculiar/react-components';

export const Demo = () => {
  const [value, setValue] = React.useState('');
  const setValueDebounced = useDebounceCallback(setValue, 300);

  return (
    <>
      <p>
        Below state will update 300ms after last change.
      </p>
      <p>
        The input&apos;s value is:
        {' '}
        {value}
      </p>
      <input
        type="text"
        onChange={(event) => {
          setValueDebounced(event.target.value);
        }}
      />
    </>
  );
};
`})}),`
`,e.jsx(n.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(r,{of:c})]})}function v(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{v as default};
