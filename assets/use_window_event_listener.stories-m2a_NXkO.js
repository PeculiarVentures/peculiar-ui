import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-BTu_umhU.js";import{t as r}from"./jsx-runtime-BCDDjCIb.js";import{h as i,t as a}from"./hooks-C4HDdmR9.js";var o,s,c,l,u,d=e((()=>{o=t(n()),a(),s=r(),c={title:`Hooks/useWindowEventListener`,component:i},l=()=>{let[e,t]=o.useState(0);return i(`click`,()=>{t(e=>e+1)}),(0,s.jsxs)(`p`,{children:[`Click window count: \xA0`,e]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [count, setCount] = React.useState(0);
  const handleWindowClick = () => {
    setCount(prevState => prevState + 1);
  };
  useWindowEventListener('click', handleWindowClick);
  return <p>
      Click window count:
      &nbsp;
      {count}
    </p>;
}`,...l.parameters?.docs?.source}}},u=[`DemoExample`]}));d();export{l as DemoExample,u as __namedExportsOrder,c as default,d as t};