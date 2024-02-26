import{j as o}from"./jsx-runtime-DtaoT6pD.js";import{M as i,C as s}from"./index-QRzkEYIi.js";import{DemoExample as p}from"./use_clipboard.stories-jpqmN9XZ.js";import{useMDXComponents as r}from"./index-82O-B91n.js";import"./index-OjgoNOWw.js";import"./iframe--0IKXE-n.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xK8HOd_o.js";import"./index-mQqIOHEI.js";import"./inheritsLoose-Y9jOMJLd.js";import"./index-LnHysSno.js";import"./index-BdDYuicC.js";function t(e){const n=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},r(),e.components);return o.jsxs(o.Fragment,{children:[o.jsx(i,{title:"Hooks/useClipboard"}),`
`,o.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,o.jsx(n.p,{children:"React hook that provides copy to clipboard functionality."}),`
`,o.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-jsx",children:`import { useClipboard } from '@peculiar/react-components';

export const Demo = () => {
  const {
    onCopy,
    hasCopied,
  } = useClipboard('Text to copy');

  return (
    <button
      type="button"
      onClick={onCopy}
    >
      {hasCopied ? 'Copied' : 'Click to copy'}
    </button>
  );
};
`})}),`
`,o.jsx(n.h2,{id:"demo",children:"Demo"}),`
`,o.jsx(s,{of:p})]})}function g(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?o.jsx(n,Object.assign({},e,{children:o.jsx(t,e)})):t(e)}export{g as default};
