import{j as o}from"./jsx-runtime-Du8NFWEI.js";import{M as r,C as s}from"./index-DQK4iNk9.js";import{DemoExample as p}from"./use_clipboard.stories-B064ckxh.js";import{useMDXComponents as i}from"./index-CL8UvjIf.js";import"./index-Dl6G-zuu.js";import"./iframe-Bgj4Woy0.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-L5l4RKBO.js";import"./index-D1_ZHIBm.js";import"./inheritsLoose-B7h9gheN.js";import"./index-B5O4V4BP.js";import"./index-B9pQ14RZ.js";function t(e){const n=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},i(),e.components);return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Hooks/useClipboard"}),`
`,o.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,o.jsx(n.p,{children:"React hook that provides copy to clipboard functionality."}),`
`,o.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-jsx",children:`import { useClipboard } from '@peculiar/react-components';

export const Demo = () => {
  const { copy, isCopied } = useClipboard();

  return (
    <button
      type="button"
      onClick={() => copy('Text to copy')}
    >
      {isCopied ? 'Copied' : 'Click to copy'}
    </button>
  );
};
`})}),`
`,o.jsx(n.h2,{id:"demo",children:"Demo"}),`
`,o.jsx(s,{of:p})]})}function g(e={}){const{wrapper:n}=Object.assign({},i(),e.components);return n?o.jsx(n,Object.assign({},e,{children:o.jsx(t,e)})):t(e)}export{g as default};
