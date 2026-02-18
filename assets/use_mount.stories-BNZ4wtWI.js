import{j as o}from"./jsx-runtime-xF634gn_.js";import{r as m}from"./index-C-7etoUd.js";import{u as c}from"./use_enhanced_effect-B1RabiBj.js";function r(t){c(t,[])}const f={title:"Hooks/useMount",component:r};function i(){return r(()=>{alert("I have been mounted")}),o.jsx("div",{})}const e=()=>{const[t,d]=m.useState(!1);return o.jsxs("div",{children:[o.jsx("button",{type:"button",onClick:()=>d(a=>!a),children:t?"Mounted":"UnMounted"}),t?o.jsx(i,{}):null]})};var n,s,u;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const [mounted, setMounted] = useState(false);
  return <div>
      <button type="button" onClick={() => setMounted(b => !b)}>
        {mounted ? 'Mounted' : 'UnMounted'}
      </button>
      {mounted ? <Child /> : null}
    </div>;
}`,...(u=(s=e.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const M=["DemoExample"];export{e as DemoExample,M as __namedExportsOrder,f as default};
