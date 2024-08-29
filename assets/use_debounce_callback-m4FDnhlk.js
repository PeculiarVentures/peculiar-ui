import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{M as a,C as r}from"./index-rZ_YOG8P.js";import{DemoExample as c}from"./use_debounce_callback.stories-gJPjVzln.js";import{useMDXComponents as s}from"./index-82O-B91n.js";import"./index-OjgoNOWw.js";import"./iframe-OgeCR7kA.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xK8HOd_o.js";import"./index-mQqIOHEI.js";import"./inheritsLoose-Y9jOMJLd.js";import"./index-LnHysSno.js";import"./index-BdDYuicC.js";function o(t){const n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Hooks/useDebounceCallback"}),`
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
