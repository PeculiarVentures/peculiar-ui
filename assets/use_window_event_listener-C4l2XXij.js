import{j as n}from"./jsx-runtime-Du8NFWEI.js";import{M as i,C as r}from"./index-DbarRA75.js";import{DemoExample as c}from"./use_window_event_listener.stories-BQj-F99n.js";import{useMDXComponents as s}from"./index-icA9A9Lr.js";import"./index-Dl6G-zuu.js";import"./iframe-Drf-7KXc.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-L5l4RKBO.js";import"./index-D1_ZHIBm.js";import"./inheritsLoose-B7h9gheN.js";import"./index-B5O4V4BP.js";import"./index-B9pQ14RZ.js";function o(t){const e=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},s(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Hooks/useWindowEventListener"}),`
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
