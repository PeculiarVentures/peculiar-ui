import{j as n}from"./jsx-runtime-xF634gn_.js";import{useMDXComponents as r}from"./index-o2KxC7bF.js";import{M as i,C as s}from"./index-DTJhzM0F.js";import{DemoExample as c}from"./use_window_event_listener.stories-B6-mT6O3.js";import"./index-C-7etoUd.js";import"./iframe-CnY0Wu3v.js";import"./index-DVfLDD12.js";import"./index-CtyGc8zC.js";import"./index-CXQShRbs.js";import"./index-DzUv_9kz.js";function o(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Hooks/useWindowEventListener"}),`
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
`,n.jsx(s,{of:c})]})}function v(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{v as default};
