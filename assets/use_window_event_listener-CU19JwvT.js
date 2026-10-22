import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,r as n,u as r}from"./blocks-Cu3BKi6T.js";import{t as i}from"./jsx-runtime-BG4KOiPz.js";import{i as a,r as o}from"./react-Bg8UoiFE.js";import{n as s,t as c}from"./use_window_event_listener.stories-dSzuPwuD.js";function l(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...a(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Hooks/useWindowEventListener`}),`
`,(0,d.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,d.jsx)(t.p,{children:`React hook that enables you to add event listeners to a window element within a React component.`}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-jsx`,children:`import { useWindowEventListener } from '@peculiar/react-components';

export const Demo = () => {
  const [count, setCount] = React.useState(0);

  const handleWindowClick = () => {
    setCount((prevState) => prevState + 1);
  };

  useWindowEventListener('click', handleWindowClick);

  return (
    <p>
      Click window count: &nbsp;
      {count}
    </p>
  );
};
`})}),`
`,(0,d.jsx)(t.h2,{id:`demo`,children:`Demo`}),`
`,(0,d.jsx)(n,{of:c})]})}function u(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=i(),o(),t(),s()})))()}f();export{u as default};