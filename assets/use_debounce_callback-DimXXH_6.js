import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{M as a,C as r}from"./index-DF3zfyyC.js";import{DemoExample as c}from"./use_debounce_callback.stories-CfRnjR7C.js";import{useMDXComponents as s}from"./index-icA9A9Lr.js";import"./index-Dl6G-zuu.js";import"./iframe-CkjgIj6I.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-L5l4RKBO.js";import"./index-D1_ZHIBm.js";import"./inheritsLoose-B7h9gheN.js";import"./index-B5O4V4BP.js";import"./index-B9pQ14RZ.js";function o(t){const n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Hooks/useDebounceCallback"}),`
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
`,e.jsx(r,{of:c})]})}function v(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(o,t)})):o(t)}export{v as default};
