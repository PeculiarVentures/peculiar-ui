import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{M as r,C as s}from"./index-CahDekZF.js";import{DemoExample as m}from"./use_media_query.stories-BnfvkP1q.js";import{useMDXComponents as i}from"./index-icA9A9Lr.js";import"./index-Dl6G-zuu.js";import"./iframe-D9NETBGr.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-L5l4RKBO.js";import"./index-D1_ZHIBm.js";import"./inheritsLoose-B7h9gheN.js";import"./index-B5O4V4BP.js";import"./index-B9pQ14RZ.js";import"./use_enhanced_effect-Bwnr551i.js";function o(t){const n=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Hooks/useMediaQuery"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"React hook that tracks state of a CSS media query."}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useMediaQuery } from '@peculiar/react-components';

const Demo = () => {
  const isWide = useMediaQuery('(min-width: 480px)');

  return (
    <div>
      Screen is wide:
      {' '}
      {isWide ? 'Yes' : 'No'}
    </div>
  );
};
`})}),`
`,e.jsx(n.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(s,{of:m})]})}function C(t={}){const{wrapper:n}=Object.assign({},i(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(o,t)})):o(t)}export{C as default};
