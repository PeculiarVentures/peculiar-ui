import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-BTu_umhU.js";import{t as r}from"./jsx-runtime-BCDDjCIb.js";import{n as i,t as a}from"./use_mount-O8O2FBc_.js";function o(){return i(()=>{alert(`I have been mounted`)}),(0,c.jsx)(`div`,{})}var s,c,l,u,d,f=e((()=>{s=t(n()),a(),c=r(),l={title:`Hooks/useMount`,component:i},u=()=>{let[e,t]=(0,s.useState)(!1);return(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),children:e?`Mounted`:`UnMounted`}),e?(0,c.jsx)(o,{}):null]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const [mounted, setMounted] = useState(false);
  return <div>
      <button type="button" onClick={() => setMounted(b => !b)}>
        {mounted ? 'Mounted' : 'UnMounted'}
      </button>
      {mounted ? <Child /> : null}
    </div>;
}`,...u.parameters?.docs?.source}}},d=[`DemoExample`]}));f();export{u as DemoExample,d as __namedExportsOrder,l as default,f as t};