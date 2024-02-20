import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{M as i,C as s}from"./index-A854vZC-.js";import{DemoExample as c}from"./use_intersection_observer.stories-0m2hRJye.js";import{useMDXComponents as r}from"./index-82O-B91n.js";import"./index-OjgoNOWw.js";import"./iframe-j_Qx72rA.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xK8HOd_o.js";import"./index-mQqIOHEI.js";import"./inheritsLoose-Y9jOMJLd.js";import"./index-LnHysSno.js";import"./index-BdDYuicC.js";function o(t){const n=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Hooks/useIntersectionObserver"}),`
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
`,e.jsx(s,{of:c,sourceState:"none"})]})}function b(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(o,t)})):o(t)}export{b as default};
