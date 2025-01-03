import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{useMDXComponents as r}from"./index-C2WH5l5l.js";import{ae as i,af as s}from"./index-BUlNSo9C.js";import{DemoExample as c}from"./use_intersection_observer.stories-JeRiX9AL.js";import"./index-Wp2u197Z.js";import"./iframe-B1OxMBR5.js";import"../sb-preview/runtime.js";import"./index-DA8gG4lw.js";import"./index-yiGAEVS0.js";import"./index-Dy31kHqt.js";function o(t){const n={code:"code",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Hooks/useIntersectionObserver"}),`
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
