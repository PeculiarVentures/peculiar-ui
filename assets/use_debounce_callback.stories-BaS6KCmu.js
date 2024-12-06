import{j as t}from"./jsx-runtime-CQsLhzk5.js";import{e as n}from"./index-Wp2u197Z.js";function m(u,o=300,a=!1){const e=n.useRef(),r=()=>{e.current&&(clearTimeout(e.current),e.current=void 0)},c=(...d)=>{r(),e.current=setTimeout(()=>u(...d),o)};return c.clear=()=>{r()},n.useEffect(()=>a?r:void 0,[a]),c}const v={title:"Hooks/useDebounceCallback",component:m},s=()=>{const[u,o]=n.useState(""),a=m(o,300);return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Below state will update 300ms after last change."}),t.jsxs("p",{children:["The input's value is:"," ",u]}),t.jsx("input",{type:"text",onChange:e=>{a(e.target.value)}})]})};var l,p,i;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(i=(p=s.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const b=["DemoExample"];export{s as DemoExample,b as __namedExportsOrder,v as default};
