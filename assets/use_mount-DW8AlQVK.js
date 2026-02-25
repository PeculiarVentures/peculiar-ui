import{j as n}from"./jsx-runtime-xF634gn_.js";import{useMDXComponents as r}from"./index-o2KxC7bF.js";import{M as s,C as i}from"./index-CXD8oFZN.js";import{DemoExample as m}from"./use_mount.stories-BcNhdcT1.js";import"./index-C-7etoUd.js";import"./iframe-CUXvfHXt.js";import"./index-dzNl0v_V.js";import"./index-DWe4bgYs.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function o(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Hooks/useMount"}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"React hook that runs a callback only once when the component mounts."}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { useMount } from '@peculiar/react-components';

function Child() {
  useMount(() => {
    alert('I have been mounted');
  });

  return <div></div>;
}

export const Demo = () => {
  const [mounted, setMounted] = useState(false);

  return (
    <div>
      <button onClick={() => setMounted((b) => !b)}>
        {mounted ? 'Mounted' : 'UnMounted'}
      </button>

      {mounted ? <Child /> : null}
    </div>
  );
};
`})}),`
`,n.jsx(e.h2,{id:"demo",children:"Demo"}),`
`,n.jsx(i,{of:m})]})}function f(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{f as default};
