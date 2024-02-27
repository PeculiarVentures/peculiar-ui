import{j as r}from"./jsx-runtime-DtaoT6pD.js";import{r as p}from"./index-OjgoNOWw.js";import{n as i}from"./emotion-styled.browser.esm-jsqElTi7.js";import{T as u}from"./typography-mH1J_rqf.js";import{I as m}from"./icon_button-rG1aAbiU.js";import{C as v}from"./close_icon-Bp311Jgy.js";import{C as f,a as g}from"./close_circle_icon-XpY_jUxJ.js";import{W as h}from"./warning_icon-iK8dORZk.js";import{C as x}from"./circular_progress-_GSDl8M_.js";const b=i("div")({width:"100%",display:"flex",padding:"var(--pv-size-base-2) var(--pv-size-base-4)",boxSizing:"border-box",borderRadius:"4px"},e=>{const n=e.theme.mode==="dark";let o;return e.variant==="wrong"?(n?o="var(--pv-color-wrong-shade-4)":o="var(--pv-color-wrong-tint-5)",{backgroundColor:o}):(n?o="var(--pv-color-gray-2)":o="var(--pv-color-black)",{backgroundColor:o})}),w=i("div")(e=>({marginRight:"var(--pv-size-base-2)",width:"24px",display:"flex",padding:"var(--pv-size-base-half) 0px",justifyContent:"center",alignItems:"center",...e.variant==="wrong"&&{color:"var(--pv-color-wrong)"},...e.variant==="attention"&&{color:"var(--pv-color-attention)"},...e.variant==="success"&&{color:"var(--pv-color-success)"}})),y=i(u)({padding:"var(--pv-size-base) 0px",flex:"1",minHeight:"var(--pv-text-b3-height)"}),t=p.forwardRef((e,n)=>{const{children:o,variant:a,disableIcon:l,onClose:s,...c}=e,d=()=>a==="wrong"?r.jsx(f,{}):a==="attention"?r.jsx(h,{}):a==="success"?r.jsx(g,{}):a==="pending"?r.jsx(x,{size:"small",color:"secondary"}):null;return r.jsxs(b,{ref:n,role:"alert",variant:a,...c,children:[!l&&r.jsx(w,{variant:a,children:d()}),r.jsx(y,{variant:"b3",color:a==="wrong"?"wrong":"white",children:o}),s&&r.jsx(m,{size:"small",color:a==="wrong"?"wrong":"white",circled:!0,onClick:s,children:r.jsx(v,{})})]})});t.displayName="Alert";t.defaultProps={disableIcon:!0};try{t.displayName="Alert",t.__docgenInfo={description:"",displayName:"Alert",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"The className of the component.",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"The type of the component.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"wrong"'},{value:'"attention"'},{value:'"success"'},{value:'"pending"'}]}},disableIcon:{defaultValue:{value:"true"},description:"If `true`, the start icon will be hidden.",name:"disableIcon",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback fired when the component requests to be closed.",name:"onClose",required:!1,type:{name:"() => void"}}}}}catch{}export{t as A};