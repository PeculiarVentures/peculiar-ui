import{j as r}from"./jsx-runtime-CQsLhzk5.js";import{e as l}from"./index-Wp2u197Z.js";import{k as M}from"./emotion-react.browser.esm-8Xjhr7rM.js";import{n as v,i as w}from"./emotion-styled.browser.esm-C7XpMTT7.js";import{B as N}from"./box-BFgaEr0T.js";import{P as S}from"./popper-BC-5vKzS.js";import{u as B}from"./use_controllable-DRJrQW8S.js";import{u as C}from"./use_merged_ref-ClS6-mGQ.js";import{T as O}from"./typography-CSDQkA0z.js";const A=M`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,H=v(N,{shouldForwardProp:e=>w(e)&&e!=="color"})(e=>({maxWidth:"300px",wordWrap:"break-word",fontSize:0,animation:`${A} 225ms`,position:"relative",borderRadius:"4px",...e.size==="small"&&{padding:"5px 8px"},...e.size==="large"&&{padding:"8px 10px"}}),e=>{const a=e.theme.mode==="dark";let o,n="var(--pv-shadow-light-low)";return e.color==="black"?a?o="var(--pv-color-gray-5)":o="var(--pv-color-gray-10)":o="var(--pv-color-white)",a&&(n="var(--pv-shadow-dark-medium)"),{boxShadow:n,backgroundColor:o}}),I=v(S)(e=>({pointerEvents:e.interactive?"auto":"none",zIndex:1500,'&[data-popper-placement^="bottom"]':{"[data-popper-arrow]":{top:0,marginTop:"-4px"}},'&[data-popper-placement^="top"]':{"[data-popper-arrow]":{bottom:0,marginBottom:"-4px"}},'&[data-popper-placement^="right"]':{"[data-popper-arrow]":{left:0,marginLeft:"-4px"}},'&[data-popper-placement^="left"]':{"[data-popper-arrow]":{right:0,marginRight:"-4px"}}})),W=v("span",{shouldForwardProp:e=>w(e)&&e!=="color"})({width:"8px",height:"8px",background:"transparent",position:"absolute",display:"block","&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}},e=>{const a=e.theme.mode==="dark";let o;return e.color==="black"?a?o="var(--pv-color-gray-5)":o="var(--pv-color-gray-10)":o="var(--pv-color-white)",{color:o}}),c=e=>{const{open:a,children:o,title:n,placement:T,disableFocusListener:x,disableHoverListener:k,disableTouchListener:V,interactive:m,size:h,color:f,disablePortal:q,enterDelay:L,leaveDelay:D,arrow:P,offset:R,...z}=e,[E,b]=B({value:a,defaultValue:!1}),y=l.useRef(null),F=C(o.ref,y),[g,_]=l.useState(null),p=l.useRef(),d=l.useRef();l.useEffect(()=>()=>{clearTimeout(p.current),clearTimeout(d.current)},[]);const i=()=>{clearTimeout(p.current),clearTimeout(d.current),p.current=setTimeout(()=>{b(!0)},L)},s=()=>{clearTimeout(p.current),clearTimeout(d.current),d.current=setTimeout(()=>{b(!1)},D)},u={},t={ref:F};return V||(t.onTouchStart=i,t.onTouchEnd=s),k||(t.onMouseOver=i,t.onMouseLeave=s,m&&(u.onMouseOver=i,u.onMouseLeave=s)),x||(t.onFocus=i,t.onBlur=s,m&&(u.onFocus=i,u.onBlur=s)),r.jsxs(r.Fragment,{children:[l.cloneElement(o,t),r.jsx(I,{anchorEl:y.current,open:n&&E,placement:T,disablePortal:q,interactive:m,modifiers:[{name:"arrow",enabled:!!g,options:{element:g,padding:8}},{name:"offset",options:{offset:[0,R]}}],...u,children:j=>r.jsxs(H,{size:h,color:f,...z,children:[r.jsx(O,{component:"span",variant:h==="small"?"c2":"b3",color:f==="black"?"white":"black",children:n}),P?r.jsx(W,{"data-popper-arrow":!0,ref:_,style:j,color:f}):null]})})]})};c.displayName="Tooltip";c.defaultProps={placement:"bottom",size:"small",color:"white",enterDelay:100,leaveDelay:0,arrow:!1,offset:15,disableFocusListener:!1,disableHoverListener:!1,disableTouchListener:!1,disablePortal:!0};try{c.displayName="Tooltip",c.__docgenInfo={description:"",displayName:"Tooltip",props:{open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Tooltip reference element.",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},title:{defaultValue:null,description:"Tooltip title.",name:"title",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:{value:"bottom"},description:"Tooltip placement.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'},{value:'"auto"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},className:{defaultValue:null,description:"The className of the component.",name:"className",required:!1,type:{name:"string"}},disableFocusListener:{defaultValue:{value:"false"},description:"Do not respond to focus events.",name:"disableFocusListener",required:!1,type:{name:"boolean"}},disableHoverListener:{defaultValue:{value:"false"},description:"Do not respond to hover events.",name:"disableHoverListener",required:!1,type:{name:"boolean"}},disableTouchListener:{defaultValue:{value:"false"},description:"Do not respond to long press touch events.",name:"disableTouchListener",required:!1,type:{name:"boolean"}},interactive:{defaultValue:null,description:"Makes a tooltip interactive, i.e. will not close when the user hovers over the tooltip.",name:"interactive",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"small"},description:"The size of the tooltip.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},color:{defaultValue:{value:"white"},description:"The color of the tooltip.",name:"color",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"black"'}]}},disablePortal:{defaultValue:{value:"true"},description:"Disable the portal behavior. The children stay within it's parent DOM hierarchy.",name:"disablePortal",required:!1,type:{name:"boolean"}},enterDelay:{defaultValue:{value:"100"},description:"Add delay in showing the tooltip.",name:"enterDelay",required:!1,type:{name:"number"}},leaveDelay:{defaultValue:{value:"0"},description:"Add delay in hiding the tooltip.",name:"leaveDelay",required:!1,type:{name:"number"}},arrow:{defaultValue:{value:"false"},description:"If `true`, adds an arrow to the tooltip.",name:"arrow",required:!1,type:{name:"boolean"}},offset:{defaultValue:{value:"15"},description:`This can be useful if you need to apply some margin between them
or if you need to fine tune the position according to some custom logic.`,name:"offset",required:!1,type:{name:"number"}}}}}catch{}export{c as T};