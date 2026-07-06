import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-BTu_umhU.js";import{t as r}from"./jsx-runtime-BCDDjCIb.js";import{s as i,t as a}from"./hooks-C4HDdmR9.js";var o,s,c,l,u,d=e((()=>{o=t(n()),a(),s=r(),c={title:`Hooks/useDebounceCallback`,component:i},l=()=>{let[e,t]=o.useState(``),n=i(t,300);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`p`,{children:`Below state will update 300ms after last change.`}),(0,s.jsxs)(`p`,{children:[`The input's value is:`,` `,e]}),(0,s.jsx)(`input`,{type:`text`,onChange:e=>{n(e.target.value)}})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}},u=[`DemoExample`]}));d();export{l as DemoExample,u as __namedExportsOrder,c as default,d as t};