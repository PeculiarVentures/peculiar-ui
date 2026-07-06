import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{t as n,y as r}from"./hooks-C4HDdmR9.js";var i,a,o,s,c=e((()=>{n(),i=t(),a={title:`Hooks/useControllableState`,component:r},o=()=>{let[e,t]=r({defaultValue:40});return(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`button`,{type:`button`,onClick:()=>t(e+1),children:`+`}),(0,i.jsx)(`span`,{children:e}),(0,i.jsx)(`button`,{type:`button`,onClick:()=>t(e-1),children:`-`})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}},s=[`DemoExample`]}));c();export{o as DemoExample,s as __namedExportsOrder,a as default,c as t};