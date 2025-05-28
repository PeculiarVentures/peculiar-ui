import{j as t}from"./jsx-runtime-xF634gn_.js";import{u}from"./use_controllable-DXs9Mygf.js";import"./index-C-7etoUd.js";const i={title:"Hooks/useControllableState",component:u},e=()=>{const[n,o]=u({defaultValue:40});return t.jsxs("div",{children:[t.jsx("button",{type:"button",onClick:()=>o(n+1),children:"+"}),t.jsx("span",{children:n}),t.jsx("button",{type:"button",onClick:()=>o(n-1),children:"-"})]})};var a,s,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const [value, setValue] = useControllableState({
    defaultValue: 40
  });
  return <div>
      <button type="button" onClick={() => setValue(value + 1)}>
        +
      </button>
      <span>
        {value}
      </span>
      <button type="button" onClick={() => setValue(value - 1)}>
        -
      </button>
    </div>;
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const m=["DemoExample"];export{e as DemoExample,m as __namedExportsOrder,i as default};
