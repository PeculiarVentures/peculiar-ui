import{j as u}from"./jsx-runtime-xF634gn_.js";import{e as a}from"./index-C-7etoUd.js";const d=(e,n,s,o=!0)=>{a.useEffect(()=>{if(window.addEventListener(e,n),o)return()=>{window.removeEventListener(e,n)}},s)},m={title:"Hooks/useWindowEventListener",component:d},t=()=>{const[e,n]=a.useState(0);return d("click",()=>{n(o=>o+1)}),u.jsxs("p",{children:["Click window count:  ",e]})};var r,c,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const w=["DemoExample"];export{t as DemoExample,w as __namedExportsOrder,m as default};
