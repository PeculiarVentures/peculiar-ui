import{j as y}from"./jsx-runtime-CQsLhzk5.js";import{r as h}from"./index-Wp2u197Z.js";import{u as b}from"./use_image-CqSn7Xtv.js";import"./use_enhanced_effect-C1-U52iU.js";const e=h.forwardRef((r,m)=>{const{className:i,src:f,fallback:s,loading:o,alt:p,...u}=r,{status:d,image:a}=b(f),g=d==="failed";return(a==null?void 0:a.src)?y.jsx("img",{...u,ref:m,alt:p,src:a.src,className:i}):s&&g?s:o||null});e.displayName="Image";e.defaultProps={};try{e.displayName="Image",e.__docgenInfo={description:"",displayName:"Image",props:{src:{defaultValue:null,description:"The `src` attribute for the `img` element.",name:"src",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"Fallback element to show if image is loading.",name:"loading",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},fallback:{defaultValue:null,description:"Fallback element to show if image fails.",name:"fallback",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},className:{defaultValue:null,description:"The className of the component.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const N={title:"Components/Image",component:e,tags:["autodocs"],args:{src:"https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",alt:"Perfect Latte"},argTypes:{fallback:{control:!1},loading:{control:!1}}},t={};var l,n,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const k=["Playground"];export{t as Playground,k as __namedExportsOrder,N as default};