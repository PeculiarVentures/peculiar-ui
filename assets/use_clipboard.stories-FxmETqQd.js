import{j as m}from"./jsx-runtime-DtaoT6pD.js";import{R as c}from"./index-OjgoNOWw.js";const i=(o,e)=>{const t=document.createElement("textarea");if(t.value=o,document.body.appendChild(t),navigator.userAgent.match(/iPhone|iPad|iPod/i)){const r=document.createRange();t.setAttribute("contentEditable","true"),t.setAttribute("readOnly","true"),r.selectNodeContents(t);const n=window.getSelection();n&&(n.removeAllRanges(),n.addRange(r)),t.setSelectionRange(0,o.length)}else t.select();try{document.execCommand("copy"),e&&e()}catch(r){console.error("Fallback copy error:",r)}document.body.removeChild(t)},y=(o,e)=>{if(!navigator.clipboard){i(o,e);return}navigator.clipboard.writeText(o).then(e).catch(()=>i(o,e))};function d(){const[o,e]=c.useState(!1),t=c.useRef(),r=c.useRef(!1);return c.useEffect(()=>(r.current=!0,()=>{r.current=!1}),[]),{copy:async u=>{try{e(!0),clearTimeout(t.current),t.current=setTimeout(()=>{r&&e(!1)},1500),y(u)}catch{}},isCopied:o}}const g={title:"Hooks/useClipboard",component:d},a=()=>{const{copy:o,isCopied:e}=d();return m.jsx("button",{type:"button",onClick:()=>o("Text to copy"),children:e?"Copied":"Click to copy"})};var s,l,p;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const {
    copy,
    isCopied
  } = useClipboard();
  return <button type="button" onClick={() => copy('Text to copy')}>
      {isCopied ? 'Copied' : 'Click to copy'}
    </button>;
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const h=["DemoExample"];export{a as DemoExample,h as __namedExportsOrder,g as default};
