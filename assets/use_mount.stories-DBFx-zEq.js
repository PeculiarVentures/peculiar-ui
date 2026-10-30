import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-pByjoP3I.js";import{t as i}from"./jsx-runtime-BG4KOiPz.js";function a(e){o.useEffect(e,[])}var o;function s(){return(s=t((()=>{o=e(r())})))()}var c=n({DemoExample:()=>p,__namedExportsOrder:()=>m,default:()=>f});function l(){return a(()=>{alert(`I have been mounted`)}),(0,d.jsx)(`div`,{})}var u,d,f,p,m;function h(){return(h=t((()=>{u=r(),s(),d=i(),f={title:`Hooks/useMount`,component:a},p=()=>{let[e,t]=(0,u.useState)(!1);return(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),children:e?`Mounted`:`UnMounted`}),e?(0,d.jsx)(l,{}):null]})},m=[`DemoExample`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [mounted, setMounted] = useState(false);
  return <div>
      <button type="button" onClick={() => setMounted(b => !b)}>
        {mounted ? 'Mounted' : 'UnMounted'}
      </button>
      {mounted ? <Child /> : null}
    </div>;
}`,...p.parameters?.docs?.source}}}})))()}export{h as n,c as r,p as t};