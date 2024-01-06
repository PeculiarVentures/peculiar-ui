import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{R as r}from"./index-OjgoNOWw.js";function m(s,u=300,n=!1){const e=r.useRef(),o=()=>{e.current&&(clearTimeout(e.current),e.current=void 0)},c=(...d)=>{o(),e.current=setTimeout(()=>s(...d),u)};return c.clear=()=>{o()},r.useEffect(()=>n?o:void 0,[n]),c}const v={title:"Hooks/useDebounceCallback",component:m},a=()=>{const[s,u]=r.useState(""),n=m(u,300);return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Below state will update 300ms after last change."}),t.jsxs("p",{children:["The input's value is:"," ",s]}),t.jsx("input",{type:"text",onChange:e=>{n(e.target.value)}})]})};var l,p,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  const setValueDebounced = useDebounceCallback(setValue, 300);
  return <>
      <p>
        Below state will update 300ms after last change.
      </p>
      <p>
        The input&apos;s value is:
        {' '}
        {value}
      </p>
      <input type="text" onChange={event => {
      setValueDebounced(event.target.value);
    }} />
    </>;
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const b=["DemoExample"];export{a as DemoExample,b as __namedExportsOrder,v as default};
