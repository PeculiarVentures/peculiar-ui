import{j as t}from"./jsx-runtime-CQsLhzk5.js";import{u}from"./use_controllable-DRJrQW8S.js";import"./index-Wp2u197Z.js";const i={title:"Hooks/useControllableState",component:u},e=()=>{const[n,o]=u({defaultValue:40});return t.jsxs("div",{children:[t.jsx("button",{onClick:()=>o(n+1),type:"button",children:"+"}),t.jsx("span",{children:n}),t.jsx("button",{onClick:()=>o(n-1),type:"button",children:"-"})]})};var a,s,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const [value, setValue] = useControllableState({
    defaultValue: 40
  });
  return <div>
      <button onClick={() => setValue(value + 1)} type="button">
        +
      </button>
      <span>
        {value}
      </span>
      <button onClick={() => setValue(value - 1)} type="button">
        -
      </button>
    </div>;
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const m=["DemoExample"];export{e as DemoExample,m as __namedExportsOrder,i as default};
