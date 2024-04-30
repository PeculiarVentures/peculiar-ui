import{j as u}from"./jsx-runtime-DtaoT6pD.js";import{r as q}from"./index-OjgoNOWw.js";import{n as f,i as V}from"./emotion-styled.browser.esm-jsqElTi7.js";import{u as P}from"./use_id-vDNgflVU.js";import{C as T}from"./check_icon-I3dJgzLy.js";import{M as _}from"./minus_icon-CfpksHZZ.js";import{l as m,d as h}from"./opacity-VJDgERWe.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xK8HOd_o.js";import"./emotion-element-c39617d8.browser.esm-upVMHClS.js";const E=f("label")({display:"inline-flex",width:"var(--pv-size-base-4)",height:"var(--pv-size-base-4)",position:"relative"}),N=f("input",{shouldForwardProp:e=>V(e)&&e!=="color"})({width:"100%",height:"100%",margin:0,padding:0,outline:0,borderRadius:"2px",borderWidth:"2px",borderStyle:"solid",appearance:"none",borderColor:"currentColor",backgroundColor:"transparent","&:before":{top:"-7px",left:"-7px",right:"-7px",bottom:"-7px",content:'""',position:"absolute",borderRadius:"50%",opacity:0,backgroundColor:"currentColor",transition:"opacity 200ms"}},e=>{const p=e.theme.mode==="dark";let r="var(--pv-color-gray-9)",a=`var(--pv-color-${e.color}-shade-1)`,n=`var(--pv-color-${e.color})`,o="var(--pv-color-gray-7)",i="var(--pv-color-white)",l=m.switch.hover,c=m.switch.focus,d=m.switch.active;return p&&(r="var(--pv-color-gray-7)",a=`var(--pv-color-${e.color})`,n=`var(--pv-color-${e.color}-tint-1)`,o="var(--pv-color-gray-5)",i="var(--pv-color-gray-8)",l=h.switch.hover,c=h.switch.focus,d=h.switch.active),{color:r,'&:checked, &[data-indeterminate="true"]':{"+ [aria-hidden]":{opacity:1}},"&:not(:disabled)":{cursor:"pointer",'&:checked, &[data-indeterminate="true"]':{color:a,backgroundColor:n,"+ [aria-hidden]":{color:"var(--pv-color-white)"}},"&:hover":{"&:before":{opacity:l}},"&:focus-visible":{"&:before":{opacity:c}},"&:active":{"&:before":{opacity:d}}},"&:disabled":{cursor:"not-allowed",color:"var(--pv-color-gray-6)",'&:checked, &[data-indeterminate="true"]':{color:o,backgroundColor:"var(--pv-color-gray-6)","+ [aria-hidden]":{color:i}}}}}),j=f("svg")({display:"block",position:"absolute",top:0,left:0,width:"100%",height:"100%",opacity:0,pointerEvents:"none"}),t=q.forwardRef((e,p)=>{const{checked:r,defaultChecked:a,color:n="primary",indeterminate:o=!1,required:i,inputProps:l,disabled:c,id:d,name:g,checkedIcon:C=T,onChange:x,...w}=e,b=P(d),I=o?_:C;return u.jsxs(E,{ref:p,htmlFor:b,...w,children:[u.jsx(N,{...l,"data-indeterminate":o,type:"checkbox",name:g,id:b,checked:r,defaultChecked:a,required:i,disabled:c,color:n,onChange:x}),u.jsx(j,{as:I,"aria-hidden":!0})]})});t.displayName="Checkbox";t.defaultProps={color:"primary"};try{t.displayName="Checkbox",t.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:null,description:"If `true`, the component is checked.",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:null,description:"If `true`, the component is checked by default.",name:"defaultChecked",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"The color of the component.",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},indeterminate:{defaultValue:null,description:"If `true`, the component appears indeterminate. This does not set the native\ninput element to indeterminate due to inconsistent behavior across browsers.",name:"indeterminate",required:!1,type:{name:"boolean"}},inputProps:{defaultValue:null,description:"Attributes applied to the input element.",name:"inputProps",required:!1,type:{name:'Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "type">'}},className:{defaultValue:null,description:"The content of the component.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"If `true`, the checkbox will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The `id` of the input element.",name:"id",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"If `true`, the `input` element will be required.",name:"required",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name attribute of the `input` element.",name:"name",required:!1,type:{name:"string"}},checkedIcon:{defaultValue:null,description:"The icon to display when the component is checked.",name:"checkedIcon",required:!1,type:{name:"ElementType<any>"}},onChange:{defaultValue:null,description:"Callback fired when the state is changed.",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}}}}}catch{}const z={title:"Components/Checkbox",component:t,tags:["autodocs"],argTypes:{inputProps:{control:!1},checkedIcon:{control:!1}}},s={};var y,v,k;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(k=(v=s.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const O=["Playground"];export{s as Playground,O as __namedExportsOrder,z as default};
