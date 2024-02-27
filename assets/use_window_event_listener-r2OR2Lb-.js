import{j as n}from"./jsx-runtime-DtaoT6pD.js";import{M as i,C as r}from"./index-lbnigRlK.js";import{DemoExample as c}from"./use_window_event_listener.stories-gBkYrAeP.js";import{useMDXComponents as s}from"./index-82O-B91n.js";import"./index-OjgoNOWw.js";import"./iframe-rPRXFKYv.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xK8HOd_o.js";import"./index-mQqIOHEI.js";import"./inheritsLoose-Y9jOMJLd.js";import"./index-LnHysSno.js";import"./index-BdDYuicC.js";function o(t){const e=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},s(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Hooks/useWindowEventListener"}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"React hook that enables you to add event listeners to a window element within a React component."}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { useWindowEventListener } from '@peculiar/react-components';

export const Demo = () => {
  const [count, setCount] = React.useState(0);

  const handleWindowClick = () => {
    setCount((prevState) => prevState + 1);
  };

  useWindowEventListener('click', handleWindowClick);

  return (
    <p>
      Click window count:
      &nbsp;
      {count}
    </p>
  );
};
`})}),`
`,n.jsx(e.h2,{id:"demo",children:"Demo"}),`
`,n.jsx(r,{of:c})]})}function f(t={}){const{wrapper:e}=Object.assign({},s(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(o,t)})):o(t)}export{f as default};
