import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{Bt as n,Nt as r,Wt as i,zt as a}from"./iframe-Bypf3L-5.js";import{t as o}from"./mdx-react-shim-BO142sDj.js";import{DemoExample as s,t as c}from"./use_intersection_observer.stories-BzJZ5SP9.js";function l(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Hooks/useIntersectionObserver`}),`
`,(0,d.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,d.jsx)(t.p,{children:`React hook detects visibility of a component on the viewport using the natively present in the browser.`}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-jsx`,children:`import { useIntersectionObserver } from '@peculiar/react-components';

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
`,(0,d.jsx)(t.h2,{id:`demo`,children:`Demo`}),`
`,(0,d.jsx)(r,{of:s,sourceState:`none`})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),n(),c()}))();export{u as default};