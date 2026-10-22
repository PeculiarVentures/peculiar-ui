import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,r as n,u as r}from"./blocks-Cu3BKi6T.js";import{t as i}from"./jsx-runtime-BG4KOiPz.js";import{i as a,r as o}from"./react-Bg8UoiFE.js";import{n as s,t as c}from"./use_mount.stories-CK0Vd7EP.js";function l(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...a(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Hooks/useMount`}),`
`,(0,d.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,d.jsx)(t.p,{children:`React hook that runs a callback only once when the component mounts.`}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-jsx`,children:`import { useMount } from '@peculiar/react-components';

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
      <button onClick={() => setMounted((b) => !b)}>{mounted ? 'Mounted' : 'UnMounted'}</button>

      {mounted ? <Child /> : null}
    </div>
  );
};
`})}),`
`,(0,d.jsx)(t.h2,{id:`demo`,children:`Demo`}),`
`,(0,d.jsx)(n,{of:c})]})}function u(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=i(),o(),t(),s()})))()}f();export{u as default};