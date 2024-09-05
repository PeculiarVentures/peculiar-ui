import{j as u}from"./jsx-runtime-DtaoT6pD.js";import{r as o}from"./index-OjgoNOWw.js";import{n as s}from"./emotion-styled.browser.esm-jsqElTi7.js";const i=/^(as|background|borderColor|borderWidth|borderStyle|borderPosition|borderRadius|boxShadow)$/,d=s("div",{shouldForwardProp:e=>!i.test(e)})(e=>({background:e.background&&`var(--pv-color-${e.background})`,borderColor:e.borderColor&&`var(--pv-color-${e.borderColor})`,borderStyle:e.borderStyle,borderRadius:e.borderRadius,boxShadow:e.boxShadow&&`var(--pv-shadow-${e.boxShadow})`}),e=>{const{borderWidth:a,borderPosition:t}=e;return typeof a!="number"?{}:t?{borderWidth:[["horizontal","top"].includes(t)?a:0,["vertical","right"].includes(t)?a:0,["horizontal","bottom"].includes(t)?a:0,["vertical","left"].includes(t)?a:0,""].join("px ")}:{borderWidth:a}}),r=o.forwardRef((e,a)=>{const{component:t,...l}=e,n=t||"div";return u.jsx(d,{as:n,ref:a,...l})});r.displayName="Box";try{r.displayName="Box",r.__docgenInfo={description:"",displayName:"Box",props:{component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!0,type:{name:"ElementType<any>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"wrong"'},{value:'"white"'},{value:'"primary-tint-5"'},{value:'"primary-tint-4"'},{value:'"primary-tint-3"'},{value:'"primary-tint-2"'},{value:'"primary-tint-1"'},{value:'"primary-shade-1"'},{value:'"primary-shade-2"'},{value:'"primary-shade-3"'},{value:'"primary-shade-4"'},{value:'"primary-shade-5"'},{value:'"primary-contrast"'},{value:'"secondary-tint-5"'},{value:'"secondary-tint-4"'},{value:'"secondary-tint-3"'},{value:'"secondary-tint-2"'},{value:'"secondary-tint-1"'},{value:'"secondary-shade-1"'},{value:'"secondary-shade-2"'},{value:'"secondary-shade-3"'},{value:'"secondary-shade-4"'},{value:'"secondary-shade-5"'},{value:'"secondary-contrast"'},{value:'"wrong-tint-5"'},{value:'"wrong-tint-4"'},{value:'"wrong-tint-3"'},{value:'"wrong-tint-2"'},{value:'"wrong-tint-1"'},{value:'"wrong-shade-1"'},{value:'"wrong-shade-2"'},{value:'"wrong-shade-3"'},{value:'"wrong-shade-4"'},{value:'"wrong-shade-5"'},{value:'"wrong-contrast"'},{value:'"attention-tint-5"'},{value:'"attention-tint-4"'},{value:'"attention-tint-3"'},{value:'"attention-tint-2"'},{value:'"attention-tint-1"'},{value:'"attention"'},{value:'"attention-shade-1"'},{value:'"attention-shade-2"'},{value:'"attention-shade-3"'},{value:'"attention-shade-4"'},{value:'"attention-shade-5"'},{value:'"success-tint-5"'},{value:'"success-tint-4"'},{value:'"success-tint-3"'},{value:'"success-tint-2"'},{value:'"success-tint-1"'},{value:'"success"'},{value:'"success-shade-1"'},{value:'"success-shade-2"'},{value:'"success-shade-3"'},{value:'"success-shade-4"'},{value:'"success-shade-5"'},{value:'"black"'},{value:'"gray-10"'},{value:'"gray-9"'},{value:'"gray-8"'},{value:'"gray-7"'},{value:'"gray-6"'},{value:'"gray-5"'},{value:'"gray-4"'},{value:'"gray-3"'},{value:'"gray-2"'},{value:'"gray-1"'},{value:'"extra-1"'},{value:'"extra-2"'}]}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"wrong"'},{value:'"white"'},{value:'"primary-tint-5"'},{value:'"primary-tint-4"'},{value:'"primary-tint-3"'},{value:'"primary-tint-2"'},{value:'"primary-tint-1"'},{value:'"primary-shade-1"'},{value:'"primary-shade-2"'},{value:'"primary-shade-3"'},{value:'"primary-shade-4"'},{value:'"primary-shade-5"'},{value:'"primary-contrast"'},{value:'"secondary-tint-5"'},{value:'"secondary-tint-4"'},{value:'"secondary-tint-3"'},{value:'"secondary-tint-2"'},{value:'"secondary-tint-1"'},{value:'"secondary-shade-1"'},{value:'"secondary-shade-2"'},{value:'"secondary-shade-3"'},{value:'"secondary-shade-4"'},{value:'"secondary-shade-5"'},{value:'"secondary-contrast"'},{value:'"wrong-tint-5"'},{value:'"wrong-tint-4"'},{value:'"wrong-tint-3"'},{value:'"wrong-tint-2"'},{value:'"wrong-tint-1"'},{value:'"wrong-shade-1"'},{value:'"wrong-shade-2"'},{value:'"wrong-shade-3"'},{value:'"wrong-shade-4"'},{value:'"wrong-shade-5"'},{value:'"wrong-contrast"'},{value:'"attention-tint-5"'},{value:'"attention-tint-4"'},{value:'"attention-tint-3"'},{value:'"attention-tint-2"'},{value:'"attention-tint-1"'},{value:'"attention"'},{value:'"attention-shade-1"'},{value:'"attention-shade-2"'},{value:'"attention-shade-3"'},{value:'"attention-shade-4"'},{value:'"attention-shade-5"'},{value:'"success-tint-5"'},{value:'"success-tint-4"'},{value:'"success-tint-3"'},{value:'"success-tint-2"'},{value:'"success-tint-1"'},{value:'"success"'},{value:'"success-shade-1"'},{value:'"success-shade-2"'},{value:'"success-shade-3"'},{value:'"success-shade-4"'},{value:'"success-shade-5"'},{value:'"black"'},{value:'"gray-10"'},{value:'"gray-9"'},{value:'"gray-8"'},{value:'"gray-7"'},{value:'"gray-6"'},{value:'"gray-5"'},{value:'"gray-4"'},{value:'"gray-3"'},{value:'"gray-2"'},{value:'"gray-1"'},{value:'"extra-1"'},{value:'"extra-2"'}]}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"number"}},borderStyle:{defaultValue:null,description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'}]}},borderPosition:{defaultValue:null,description:"",name:"borderPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"horizontal"'},{value:'"vertical"'}]}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"number"}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"enum",value:[{value:'"light-low"'},{value:'"light-medium"'},{value:'"light-hight"'},{value:'"light-soft"'},{value:'"dark-medium"'},{value:'"dark-hight"'}]}},className:{defaultValue:null,description:"The className of the component.",name:"className",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}export{r as B};
