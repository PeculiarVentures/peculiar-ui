import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{t as n,x as r}from"./hooks-C4kkZCT6.js";var i,a,o,s,c=e((()=>{n(),i=t(),a={title:`Hooks/useClipboard`,component:r},o=()=>{let{copy:e,isCopied:t}=r();return(0,i.jsx)(`button`,{type:`button`,onClick:()=>e(`Text to copy`),children:t?`Copied`:`Click to copy`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const {
    copy,
    isCopied
  } = useClipboard();
  return <button type="button" onClick={() => copy('Text to copy')}>
      {isCopied ? 'Copied' : 'Click to copy'}
    </button>;
}`,...o.parameters?.docs?.source}}},s=[`DemoExample`]}));c();export{o as DemoExample,s as __namedExportsOrder,a as default,c as t};