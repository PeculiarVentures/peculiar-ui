import{j as o}from"./jsx-runtime-DtaoT6pD.js";import{M as r,C as s}from"./index-gdWgIG-L.js";import{DemoExample as p}from"./use_clipboard.stories-FxmETqQd.js";import{useMDXComponents as i}from"./index-82O-B91n.js";import"./index-OjgoNOWw.js";import"./iframe-DKCm-Qu0.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xK8HOd_o.js";import"./index-mQqIOHEI.js";import"./inheritsLoose-Y9jOMJLd.js";import"./index-LnHysSno.js";import"./index-BdDYuicC.js";function t(e){const n=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},i(),e.components);return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Hooks/useClipboard"}),`
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
