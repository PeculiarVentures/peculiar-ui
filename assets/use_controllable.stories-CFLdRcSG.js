import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-BG4KOiPz.js";import{n as r,t as i}from"./use_controllable-KMRgqzKh.js";var a=t({DemoExample:()=>c,__namedExportsOrder:()=>l,default:()=>s}),o,s,c,l;function u(){return(u=e((()=>{i(),o=n(),s={title:`Hooks/useControllableState`,component:r},c=()=>{let[e,t]=r({defaultValue:40});return(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`button`,{type:`button`,onClick:()=>t(e+1),children:`+`}),(0,o.jsx)(`span`,{children:e}),(0,o.jsx)(`button`,{type:`button`,onClick:()=>t(e-1),children:`-`})]})},l=[`DemoExample`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useControllableState({
    defaultValue: 40
  });
  return <div>
      <button type="button" onClick={() => setValue(value + 1)}>
        +
      </button>
      <span>{value}</span>
      <button type="button" onClick={() => setValue(value - 1)}>
        -
      </button>
    </div>;
}`,...c.parameters?.docs?.source}}}})))()}export{u as n,a as r,c as t};