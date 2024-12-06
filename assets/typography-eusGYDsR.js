import{j as u}from"./jsx-runtime-CQsLhzk5.js";import{r as s}from"./index-Wp2u197Z.js";import{n as i}from"./emotion-styled.browser.esm-C7XpMTT7.js";const v=/^(as|color|variant|noWrap)$/,c=i("p",{shouldForwardProp:e=>!v.test(e)})(e=>({margin:0,color:e.color==="inherit"?"inherit":`var(--pv-color-${e.color})`,fontWeight:`var(--pv-text-${e.variant}-weight)`,fontSize:`var(--pv-text-${e.variant}-size)`,lineHeight:`var(--pv-text-${e.variant}-height)`,letterSpacing:`var(--pv-text-${e.variant}-spacing)`,...e.noWrap&&{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}})),d={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",s1:"h6",s2:"h6",b1:"p",b2:"p",b3:"p",btn1:"span",btn2:"span",c1:"p",c2:"p"},a=s.forwardRef((e,n)=>{const{variant:t,component:l,...r}=e,o=l||d[t]||"p";return u.jsx(c,{as:o,ref:n,variant:t,...r})});a.displayName="Typography";a.defaultProps={variant:"b1",color:"black"};try{a.displayName="Typography",a.__docgenInfo={description:"",displayName:"Typography",props:{component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!0,type:{name:"ElementType<any, keyof IntrinsicElements>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"b1"},description:"The variant to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"s1"'},{value:'"s2"'},{value:'"b1"'},{value:'"b2"'},{value:'"b3"'},{value:'"btn1"'},{value:'"btn2"'},{value:'"c1"'},{value:'"c2"'}]}},color:{defaultValue:{value:"black"},description:"The color of the component.",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary-tint-5"'},{value:'"primary-tint-4"'},{value:'"primary-tint-3"'},{value:'"primary-tint-2"'},{value:'"primary-tint-1"'},{value:'"primary"'},{value:'"primary-shade-1"'},{value:'"primary-shade-2"'},{value:'"primary-shade-3"'},{value:'"primary-shade-4"'},{value:'"primary-shade-5"'},{value:'"primary-contrast"'},{value:'"secondary-tint-5"'},{value:'"secondary-tint-4"'},{value:'"secondary-tint-3"'},{value:'"secondary-tint-2"'},{value:'"secondary-tint-1"'},{value:'"secondary"'},{value:'"secondary-shade-1"'},{value:'"secondary-shade-2"'},{value:'"secondary-shade-3"'},{value:'"secondary-shade-4"'},{value:'"secondary-shade-5"'},{value:'"secondary-contrast"'},{value:'"wrong-tint-5"'},{value:'"wrong-tint-4"'},{value:'"wrong-tint-3"'},{value:'"wrong-tint-2"'},{value:'"wrong-tint-1"'},{value:'"wrong"'},{value:'"wrong-shade-1"'},{value:'"wrong-shade-2"'},{value:'"wrong-shade-3"'},{value:'"wrong-shade-4"'},{value:'"wrong-shade-5"'},{value:'"wrong-contrast"'},{value:'"attention-tint-5"'},{value:'"attention-tint-4"'},{value:'"attention-tint-3"'},{value:'"attention-tint-2"'},{value:'"attention-tint-1"'},{value:'"attention"'},{value:'"attention-shade-1"'},{value:'"attention-shade-2"'},{value:'"attention-shade-3"'},{value:'"attention-shade-4"'},{value:'"attention-shade-5"'},{value:'"success-tint-5"'},{value:'"success-tint-4"'},{value:'"success-tint-3"'},{value:'"success-tint-2"'},{value:'"success-tint-1"'},{value:'"success"'},{value:'"success-shade-1"'},{value:'"success-shade-2"'},{value:'"success-shade-3"'},{value:'"success-shade-4"'},{value:'"success-shade-5"'},{value:'"black"'},{value:'"gray-10"'},{value:'"gray-9"'},{value:'"gray-8"'},{value:'"gray-7"'},{value:'"gray-6"'},{value:'"gray-5"'},{value:'"gray-4"'},{value:'"gray-3"'},{value:'"gray-2"'},{value:'"gray-1"'},{value:'"white"'},{value:'"extra-1"'},{value:'"extra-2"'},{value:'"inherit"'}]}},noWrap:{defaultValue:null,description:"If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.\nNote that text overflow can only happen with block or inline-block level elements\n(the element needs to have a width in order to overflow).",name:"noWrap",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"The className of the component.",name:"className",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}export{a as T};
