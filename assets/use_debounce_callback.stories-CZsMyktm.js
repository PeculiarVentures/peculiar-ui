import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-pByjoP3I.js";import{t as i}from"./jsx-runtime-BG4KOiPz.js";function a(e,t=300,n=!1){let r=o.useRef(),i=()=>{r.current&&=(clearTimeout(r.current),void 0)},a=(...n)=>{i(),r.current=setTimeout(()=>e(...n),t)};return a.clear=()=>{i()},o.useEffect(()=>n?i:void 0,[n]),a}var o;function s(){return(s=t((()=>{o=e(r())})))()}var c=n({DemoExample:()=>f,__namedExportsOrder:()=>p,default:()=>d}),l,u,d,f,p;function m(){return(m=t((()=>{l=e(r()),s(),u=i(),d={title:`Hooks/useDebounceCallback`,component:a},f=()=>{let[e,t]=l.useState(``),n=a(t,300);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`p`,{children:`Below state will update 300ms after last change.`}),(0,u.jsxs)(`p`,{children:[`The input's value is: `,e]}),(0,u.jsx)(`input`,{type:`text`,onChange:e=>{n(e.target.value)}})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  const setValueDebounced = useDebounceCallback(setValue, 300);
  return <>
      <p>Below state will update 300ms after last change.</p>
      <p>The input&apos;s value is: {value}</p>
      <input type="text" onChange={event => {
      setValueDebounced(event.target.value);
    }} />
    </>;
}`,...f.parameters?.docs?.source}}},p=[`DemoExample`]})))()}export{m as n,c as r,f as t};