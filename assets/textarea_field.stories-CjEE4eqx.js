import{j as a}from"./jsx-runtime-CQsLhzk5.js";import{r as P}from"./index-Wp2u197Z.js";import{n as h}from"./emotion-styled.browser.esm-C7XpMTT7.js";import{u as I}from"./use_id-BweIgYmC.js";import{T as g}from"./typography-eusGYDsR.js";import"./emotion-element-c39617d8.browser.esm-BF_KrTCf.js";const _=h(g)(e=>({fontFamily:"inherit",outline:"none",boxSizing:"border-box",width:"100%",borderRadius:"4px",padding:"var(--pv-size-base) var(--pv-size-base-2)",backgroundColor:"var(--pv-color-gray-1)",borderStyle:"solid",borderWidth:"1px",transition:"background-color 200ms, color 200ms, border-color 200ms",display:"block",appearance:"none",resize:"none",...e.size==="small"&&{minHeight:"var(--pv-size-base-12)"},...e.size==="medium"&&{minHeight:"var(--pv-size-base-14)"},...e.size==="large"&&{minHeight:"var(--pv-size-base-16)"}}),e=>{const l=e.theme.mode==="dark",t=l?"var(--pv-color-white)":"var(--pv-color-black)";let r="var(--pv-color-gray-8)",n="var(--pv-color-gray-9)",i="var(--pv-color-gray-7)",d="var(--pv-color-gray-5)",s="var(--pv-color-gray-7)",u="var(--pv-color-wrong-tint-5)",p="var(--pv-color-wrong-tint-3)",c="var(--pv-color-secondary-tint-5)",m="var(--pv-color-secondary-tint-3)";return l&&(r="var(--pv-color-gray-5)",n="var(--pv-color-gray-6)",i="var(--pv-color-gray-4)",d="var(--pv-color-gray-4)",s="var(--pv-color-gray-4)",u="var(--pv-color-wrong-shade-4)",p="var(--pv-color-wrong-shade-1)",c="var(--pv-color-secondary-shade-4)",m="var(--pv-color-secondary-shade-1)"),{color:t,borderColor:r,"&::placeholder":{color:n},"&:hover":{backgroundColor:"var(--pv-color-gray-3)",borderColor:i},"&:disabled":{cursor:"not-allowed",backgroundColor:"var(--pv-color-gray-1)",borderColor:d,color:s},"&:not(:disabled)":{"&[aria-invalid]":{backgroundColor:u,borderColor:p},"&:focus-visible":{backgroundColor:c,borderColor:m}}}}),H=h("label")({marginBottom:"2px",display:"inline-block"}),E=h(g)({marginTop:"2px"}),o=P.forwardRef((e,l)=>{const{size:t,label:r,inputProps:n={},disabled:i,defaultValue:d,id:s,value:u,placeholder:p,required:c,name:m,inputRef:q,error:b,errorText:y,autoFocus:V,readOnly:z,onChange:F,...w}=e,v=I(s),k=r&&v?`${v}-label`:void 0;return a.jsxs("div",{ref:l,...w,children:[r&&a.jsx(H,{htmlFor:v,id:k,children:a.jsx(g,{component:"span",variant:"c2",color:"gray-10",children:r})}),a.jsx(_,{...n,component:"textarea",variant:t==="small"?"c1":"b3",size:t,disabled:i,defaultValue:d,id:v,value:u,required:c,name:m,ref:q,autoFocus:V,"aria-invalid":b||void 0,onChange:F,placeholder:p,readOnly:z}),b&&y&&a.jsx(E,{variant:"c2",color:"wrong",children:y})]})});o.displayName="TextareaField";o.defaultProps={disabled:!1,size:"medium"};try{o.displayName="TextareaField",o.__docgenInfo={description:"",displayName:"TextareaField",props:{disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"The size of the input.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},className:{defaultValue:null,description:"The className of the component.",name:"className",required:!1,type:{name:"string"}},inputProps:{defaultValue:null,description:"Attributes applied to the `input` element.",name:"inputProps",required:!1,type:{name:'Omit<InputHTMLAttributes<HTMLTextAreaElement>, "size">'}},defaultValue:{defaultValue:null,description:"The default value. Use when the component is not controlled.",name:"defaultValue",required:!1,type:{name:"string | (string & readonly string[])"}},id:{defaultValue:null,description:"The id of the `input` element.",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The label content.",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"The value of the `input` element, required for a controlled component.",name:"value",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"The short hint displayed in the `input` before the user enters a value.",name:"placeholder",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"If `true`, the `input` element is required.",name:"required",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name attribute of the `input` element.",name:"name",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"Pass a ref to the `input` element.",name:"inputRef",required:!1,type:{name:"ForwardedRef<HTMLTextAreaElement>"}},autoFocus:{defaultValue:null,description:"If `true`, the `input` element is focused during the first mount.",name:"autoFocus",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"If `true`, the `input` will indicate an error.",name:"error",required:!1,type:{name:"boolean"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},readOnly:{defaultValue:null,description:`It prevents the user from changing the value of
the field (not from interacting with the field).`,name:"readOnly",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Callback fired when the value is changed.",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLTextAreaElement>"}}}}}catch{}const M={title:"Components/TextareaField",component:o,tags:["autodocs"],args:{placeholder:"Placeholder"},argTypes:{inputProps:{control:!1},inputRef:{control:!1},onChange:{control:!1}}},f={};var x,T,C;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(C=(T=f.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const S=["Playground"];export{f as Playground,S as __namedExportsOrder,M as default};
