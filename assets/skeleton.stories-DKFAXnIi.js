import{j as u}from"./jsx-runtime-CQsLhzk5.js";import{r as d}from"./index-Wp2u197Z.js";import{k as c}from"./emotion-react.browser.esm-8Xjhr7rM.js";import{n as v}from"./emotion-styled.browser.esm-C7XpMTT7.js";import{B as m}from"./box-BFgaEr0T.js";import"./emotion-element-c39617d8.browser.esm-BF_KrTCf.js";const h=/^(as|height|width|variant)$/,y=c`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`,p=v(m,{shouldForwardProp:e=>!h.test(e)})(e=>({display:"block",height:"1.2em",animation:`${y} 1.5s ease-in-out 0.5s infinite`,...e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"4px","&:empty:before":{content:'"\\00a0"'}},...e.variant==="circle"&&{borderRadius:"50%"},...e.children&&{"& > *":{visibility:"hidden"},...!e.width&&{maxWidth:"fit-content"},...!e.height&&{height:"auto"}},...e.height&&{height:e.height},...e.width&&{width:e.width}})),a=d.forwardRef((e,i)=>{const{children:s,...o}=e;return u.jsx(p,{ref:i,...o,children:s})});a.displayName="Skeleton";a.defaultProps={variant:"text",background:"gray-4"};try{a.displayName="Skeleton",a.__docgenInfo={description:"",displayName:"Skeleton",props:{component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!0,type:{name:"ElementType<any, keyof IntrinsicElements>"}},children:{defaultValue:null,description:"Optional children to infer width and height from.",name:"children",required:!1,type:{name:"ReactNode"}},height:{defaultValue:null,description:"Height of the skeleton.",name:"height",required:!1,type:{name:"string | number"}},width:{defaultValue:null,description:"Width of the skeleton.",name:"width",required:!1,type:{name:"string | number"}},variant:{defaultValue:{value:"text"},description:"The type of content that will be rendered.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"rect"'},{value:'"text"'}]}},background:{defaultValue:{value:"gray-4"},description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"wrong"'},{value:'"white"'},{value:'"primary-tint-5"'},{value:'"primary-tint-4"'},{value:'"primary-tint-3"'},{value:'"primary-tint-2"'},{value:'"primary-tint-1"'},{value:'"primary-shade-1"'},{value:'"primary-shade-2"'},{value:'"primary-shade-3"'},{value:'"primary-shade-4"'},{value:'"primary-shade-5"'},{value:'"primary-contrast"'},{value:'"secondary-tint-5"'},{value:'"secondary-tint-4"'},{value:'"secondary-tint-3"'},{value:'"secondary-tint-2"'},{value:'"secondary-tint-1"'},{value:'"secondary-shade-1"'},{value:'"secondary-shade-2"'},{value:'"secondary-shade-3"'},{value:'"secondary-shade-4"'},{value:'"secondary-shade-5"'},{value:'"secondary-contrast"'},{value:'"wrong-tint-5"'},{value:'"wrong-tint-4"'},{value:'"wrong-tint-3"'},{value:'"wrong-tint-2"'},{value:'"wrong-tint-1"'},{value:'"wrong-shade-1"'},{value:'"wrong-shade-2"'},{value:'"wrong-shade-3"'},{value:'"wrong-shade-4"'},{value:'"wrong-shade-5"'},{value:'"wrong-contrast"'},{value:'"attention-tint-5"'},{value:'"attention-tint-4"'},{value:'"attention-tint-3"'},{value:'"attention-tint-2"'},{value:'"attention-tint-1"'},{value:'"attention"'},{value:'"attention-shade-1"'},{value:'"attention-shade-2"'},{value:'"attention-shade-3"'},{value:'"attention-shade-4"'},{value:'"attention-shade-5"'},{value:'"success-tint-5"'},{value:'"success-tint-4"'},{value:'"success-tint-3"'},{value:'"success-tint-2"'},{value:'"success-tint-1"'},{value:'"success"'},{value:'"success-shade-1"'},{value:'"success-shade-2"'},{value:'"success-shade-3"'},{value:'"success-shade-4"'},{value:'"success-shade-5"'},{value:'"black"'},{value:'"gray-10"'},{value:'"gray-9"'},{value:'"gray-8"'},{value:'"gray-7"'},{value:'"gray-6"'},{value:'"gray-5"'},{value:'"gray-4"'},{value:'"gray-3"'},{value:'"gray-2"'},{value:'"gray-1"'},{value:'"extra-1"'},{value:'"extra-2"'}]}},className:{defaultValue:null,description:"The className of the component.",name:"className",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}const _={title:"Components/Skeleton",component:a,tags:["autodocs"],argTypes:{children:{control:!1},component:{control:!1}}},t={};var n,r,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const q=["Playground"];export{t as Playground,q as __namedExportsOrder,_ as default};