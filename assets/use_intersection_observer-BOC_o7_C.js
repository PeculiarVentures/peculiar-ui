import{j as e}from"./jsx-runtime-xF634gn_.js";import{useMDXComponents as r}from"./index-o2KxC7bF.js";import{M as i,C as s}from"./index-CISM9zH5.js";import{DemoExample as c}from"./use_intersection_observer.stories-BIytSwRI.js";import"./index-C-7etoUd.js";import"./iframe-hucTUr5f.js";import"./index-dzNl0v_V.js";import"./index-DWe4bgYs.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function o(t){const n={code:"code",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Hooks/useIntersectionObserver"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"React hook detects visibility of a component on the viewport using the natively present in the browser."}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useIntersectionObserver } from '@peculiar/react-components';

const Section = (props: { title: string }) => {
  const { title } = props;
  const [refIntersecting, { isIntersecting }] = useIntersectionObserver();

  console.log(\`Render Section \${title}\`, { isIntersecting });

  return (
    <div
      ref={refIntersecting}
      style={{
        height: '20vh',
        display: 'flex',
        border: '1px dashed #000',
        fontSize: '2rem',
      }}
    >
      <div style={{ margin: 'auto' }}>
        {title}
      </div>
    </div>
  );
};

export const Demo = () => (
  Array.from({ length: 5 }).map((_, index) => (
    <Section
      key={index}
      title={\`\${index + 1}\`}
    />
  ))
);
`})}),`
`,e.jsx(n.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(s,{of:c,sourceState:"none"})]})}function g(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{g as default};
