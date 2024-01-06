import{j as h}from"./jsx-runtime-DtaoT6pD.js";import{r as p}from"./index-OjgoNOWw.js";import{n as g,i as y}from"./emotion-styled.browser.esm-jsqElTi7.js";import{T as f}from"./typography-mH1J_rqf.js";const b=g("button",{shouldForwardProp:o=>y(o)&&o!=="color"})({fontFamily:"inherit",outline:"none",cursor:"pointer",boxSizing:"border-box",border:"1px solid transparent",transition:"background-color 200ms, color 200ms, box-shadow 200ms, border-color 200ms",userSelect:"none",whiteSpace:"nowrap",display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"middle",backgroundColor:"transparent",padding:0,textDecoration:"none"},o=>{const t=o.theme.mode==="dark";let l=t?"var(--pv-color-white)":"var(--pv-color-black)",n,v,r,e,a,i,d,c,s,m;return o.variant==="outlined"&&(o.color==="default"?(n="var(--pv-color-gray-7)",r="var(--pv-color-gray-3)",e="var(--pv-color-gray-4)",a="var(--pv-color-gray-5)"):o.color==="white"?(l="var(--pv-color-white)",n="var(--pv-color-white)",r="var(--pv-color-gray-7)",e="var(--pv-color-gray-8)",a="var(--pv-color-gray-9)"):t?(l=`var(--pv-color-${o.color})`,n=`var(--pv-color-${o.color}-shade-1)`,r=`var(--pv-color-${o.color}-shade-4)`,e=`var(--pv-color-${o.color}-shade-3)`,a=`var(--pv-color-${o.color}-shade-2)`):(l=`var(--pv-color-${o.color})`,n=`var(--pv-color-${o.color}-tint-2)`,r=`var(--pv-color-${o.color}-tint-5)`,e=`var(--pv-color-${o.color}-tint-4)`,a=`var(--pv-color-${o.color}-tint-3)`),t?(m="var(--pv-color-gray-6)",c="var(--pv-color-gray-5)"):(m="var(--pv-color-gray-8)",c="var(--pv-color-gray-7)")),o.variant==="contained"&&(o.color==="default"?t?(v="var(--pv-color-gray-6)",r="var(--pv-color-gray-5)",e="var(--pv-color-gray-4)",a="var(--pv-color-gray-3)"):(v="var(--pv-color-gray-8)",r="var(--pv-color-gray-7)",e="var(--pv-color-gray-6)",a="var(--pv-color-gray-5)"):o.color==="white"?(v="var(--pv-color-white)",r="var(--pv-color-gray-7)",e="var(--pv-color-gray-6)",a="var(--pv-color-gray-5)"):(l=`var(--pv-color-${o.color}-contrast)`,v=`var(--pv-color-${o.color})`,r=`var(--pv-color-${o.color}-tint-1)`,e=`var(--pv-color-${o.color}-tint-2)`,a=`var(--pv-color-${o.color}-tint-2)`),t?(i="var(--pv-shadow-dark-medium)",d="var(--pv-shadow-dark-hight)",c="var(--pv-color-gray-6)",s="var(--pv-color-gray-5)"):(i="var(--pv-shadow-light-low)",d="var(--pv-shadow-light-medium)",c="var(--pv-color-gray-8)",s="var(--pv-color-gray-4)")),o.variant==="text"&&(o.color==="default"?(r="var(--pv-color-gray-3)",e="var(--pv-color-gray-4)",a="var(--pv-color-gray-5)"):o.color==="white"?(l="var(--pv-color-white)",r="var(--pv-color-gray-7)",e="var(--pv-color-gray-8)",a="var(--pv-color-gray-9)"):t?(l=`var(--pv-color-${o.color})`,r=`var(--pv-color-${o.color}-shade-4)`,e=`var(--pv-color-${o.color}-shade-3)`,a=`var(--pv-color-${o.color}-shade-2)`):(l=`var(--pv-color-${o.color})`,r=`var(--pv-color-${o.color}-tint-5)`,e=`var(--pv-color-${o.color}-tint-4)`,a=`var(--pv-color-${o.color}-tint-3)`),t?c="var(--pv-color-gray-6)":c="var(--pv-color-gray-7)"),{borderColor:n,backgroundColor:v,color:l,boxShadow:i,"&:disabled":{cursor:"not-allowed",boxShadow:"none",color:c,backgroundColor:s,borderColor:m},"&:not(:disabled)":{"&:hover":{backgroundColor:r},"&:focus-visible":{backgroundColor:e},"&:active":{backgroundColor:a,boxShadow:d}}}}),w=g(f)({width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"}),u=p.forwardRef((o,t)=>{const{textVariant:l,size:n,children:v,type:r="button",component:e,...a}=o,i=e||"button",d=l||(n==="small"?"btn2":"btn1");return h.jsx(b,{as:i,ref:t,type:r,size:n,...a,children:h.jsx(w,{color:"inherit",variant:d,children:v})})});u.displayName="ButtonBase";u.defaultProps={variant:"text",color:"default"};try{u.displayName="ButtonBase",u.__docgenInfo={description:"",displayName:"ButtonBase",props:{component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!0,type:{name:"ElementType<any>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!0,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"If `true`, the button will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"text"},description:"The variant to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"contained"'},{value:'"outlined"'}]}},textVariant:{defaultValue:null,description:"The variant of text to use.",name:"textVariant",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"s1"'},{value:'"s2"'},{value:'"b1"'},{value:'"b2"'},{value:'"b3"'},{value:'"btn1"'},{value:'"btn2"'},{value:'"c1"'},{value:'"c2"'}]}},color:{defaultValue:{value:"default"},description:"The color of the component.",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"secondary"'},{value:'"wrong"'},{value:'"white"'}]}},size:{defaultValue:null,description:"The size of the button.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},className:{defaultValue:null,description:"The className of the component.",name:"className",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}export{u as B};
