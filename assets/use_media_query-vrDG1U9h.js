import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{M as r,C as s}from"./index-vwMA7Q38.js";import{DemoExample as m}from"./use_media_query.stories-1hw5Yksf.js";import{useMDXComponents as i}from"./index-82O-B91n.js";import"./index-OjgoNOWw.js";import"./iframe-RvVjL8mU.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xK8HOd_o.js";import"./index-mQqIOHEI.js";import"./inheritsLoose-Y9jOMJLd.js";import"./index-LnHysSno.js";import"./index-BdDYuicC.js";import"./use_enhanced_effect-jDxBKzmp.js";function o(t){const n=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Hooks/useMediaQuery"}),`
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
