import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{Bt as n,Nt as r,Wt as i,zt as a}from"./iframe-DgRRKy_j.js";import{t as o}from"./mdx-react-shim-D_JpUb7A.js";import{DemoExample as s,t as c}from"./use_mount.stories-Bb5VTcKu.js";function l(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Hooks/useMount`}),`
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
      <button onClick={() => setMounted((b) => !b)}>
        {mounted ? 'Mounted' : 'UnMounted'}
      </button>

      {mounted ? <Child /> : null}
    </div>
  );
};
`})}),`
`,(0,d.jsx)(t.h2,{id:`demo`,children:`Demo`}),`
`,(0,d.jsx)(r,{of:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),n(),c()}))();export{u as default};