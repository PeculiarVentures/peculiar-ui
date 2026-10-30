import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-pByjoP3I.js";import{t as i}from"./jsx-runtime-BG4KOiPz.js";var a,o;function s(){return(s=t((()=>{a=e(r(),1),o=(e,t,n,r=!0)=>{a.useEffect(()=>{if(window.addEventListener(e,t),r)return()=>{window.removeEventListener(e,t)}},n)}})))()}var c=n({DemoExample:()=>f,__namedExportsOrder:()=>p,default:()=>d}),l,u,d,f,p;function m(){return(m=t((()=>{l=e(r(),1),s(),u=i(),d={title:`Hooks/useWindowEventListener`,component:o},f=()=>{let[e,t]=l.useState(0);return o(`click`,()=>{t(e=>e+1)}),(0,u.jsxs)(`p`,{children:[`Click window count: \xA0`,e]})},p=[`DemoExample`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const [count, setCount] = React.useState(0);
  const handleWindowClick = () => {
    setCount(prevState => prevState + 1);
  };
  useWindowEventListener('click', handleWindowClick);
  return <p>
      Click window count: &nbsp;
      {count}
    </p>;
}`,...f.parameters?.docs?.source}}}})))()}export{m as n,c as r,f as t};