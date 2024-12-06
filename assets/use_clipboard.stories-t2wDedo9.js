import{j as m}from"./jsx-runtime-CQsLhzk5.js";import{e as c}from"./index-Wp2u197Z.js";const s=(t,o)=>{const e=document.createElement("textarea");if(e.value=t,document.body.appendChild(e),navigator.userAgent.match(/iPhone|iPad|iPod/i)){const r=document.createRange();e.setAttribute("contentEditable","true"),e.setAttribute("readOnly","true"),r.selectNodeContents(e);const n=window.getSelection();n&&(n.removeAllRanges(),n.addRange(r)),e.setSelectionRange(0,t.length)}else e.select();try{document.execCommand("copy")}catch(r){console.error("Fallback copy error:",r)}document.body.removeChild(e)},y=(t,o)=>{if(!navigator.clipboard){s(t,o);return}navigator.clipboard.writeText(t).then(o).catch(()=>s(t,o))};function u(){const[t,o]=c.useState(!1),e=c.useRef(),r=c.useRef(!1);return c.useEffect(()=>(r.current=!0,()=>{r.current=!1}),[]),{copy:async d=>{try{o(!0),clearTimeout(e.current),e.current=setTimeout(()=>{r&&o(!1)},1500),y(d)}catch{}},isCopied:t}}const g={title:"Hooks/useClipboard",component:u},a=()=>{const{copy:t,isCopied:o}=u();return m.jsx("button",{type:"button",onClick:()=>t("Text to copy"),children:o?"Copied":"Click to copy"})};var i,l,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const {
    copy,
    isCopied
  } = useClipboard();
  return <button type="button" onClick={() => copy('Text to copy')}>
      {isCopied ? 'Copied' : 'Click to copy'}
    </button>;
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const h=["DemoExample"];export{a as DemoExample,h as __namedExportsOrder,g as default};
