import{j as o}from"./jsx-runtime-xF634gn_.js";import{useMDXComponents as r}from"./index-o2KxC7bF.js";import{M as i,C as s}from"./index-DP7Mi2QD.js";import{DemoExample as p}from"./use_clipboard.stories-DK5a2O3O.js";import"./index-C-7etoUd.js";import"./iframe-lkhoEW-u.js";import"./index-dzNl0v_V.js";import"./index-DWe4bgYs.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function t(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{title:"Hooks/useClipboard"}),`
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
`,o.jsx(s,{of:p})]})}function f(e={}){const{wrapper:n}={...r(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(t,{...e})}):t(e)}export{f as default};
