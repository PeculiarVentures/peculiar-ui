import{j as s}from"./jsx-runtime-xF634gn_.js";import{e as h}from"./index-C-7etoUd.js";import{k as c}from"./emotion-react.browser.esm-DYtMi64m.js";import{n,i as v}from"./emotion-styled.browser.esm-4GIPFSzo.js";const y=c`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,g=c`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`,x=n("div",{shouldForwardProp:e=>v(e)&&e!=="color"})(e=>({label:"CircularProgress",overflow:"hidden",position:"relative",display:"inline-block",color:`var(--pv-color-${e.color})`,...e.variant==="indeterminate"?{animation:`${y} 1.4s linear infinite`}:{transform:"rotate(-90deg)"},...e.size==="small"&&{height:"var(--pv-size-base-3)",width:"var(--pv-size-base-3)"},...e.size==="large"&&{height:"var(--pv-size-base-6)",width:"var(--pv-size-base-6)"}})),k=n("svg")({display:"block"}),C=n("circle")(e=>({stroke:"currentcolor",strokeDasharray:"80px, 200px",strokeDashoffset:0,...e.variant==="indeterminate"&&{animation:`${g} 1.4s ease-in-out infinite`}})),r=44,o=4,i=h.forwardRef((e,d)=>{const{size:u="large",variant:a="indeterminate",value:m=0,color:p="primary",...f}=e,t={};if(a==="determinate"){const l=2*Math.PI*((r-o)/2);t.strokeDasharray=l.toFixed(3),t.strokeDashoffset=`${((100-m)/100*l).toFixed(3)}px`}return s.jsx(x,{ref:d,role:"progressbar",variant:a,size:u,color:p,...f,children:s.jsx(k,{viewBox:`${r/2} ${r/2} ${r} ${r}`,children:s.jsx(C,{cx:r,cy:r,r:(r-o)/2,fill:"none",strokeWidth:o,style:t,variant:a})})})});i.displayName="CircularProgress";try{i.displayName="CircularProgress",i.__docgenInfo={description:"",displayName:"CircularProgress",props:{color:{defaultValue:{value:"'primary'"},description:"The color of the component. It supports those theme colors that make sense for this component.",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"white"'}]}},className:{defaultValue:null,description:"The className of the component.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"'large'"},description:"The size of the progress.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},variant:{defaultValue:{value:"'indeterminate'"},description:`The variant to use.
Use indeterminate when there is no progress value.`,name:"variant",required:!1,type:{name:"enum",value:[{value:'"determinate"'},{value:'"indeterminate"'}]}},value:{defaultValue:{value:"0"},description:`The value of the progress indicator for the determinate variant.
Value between 0 and 100.`,name:"value",required:!1,type:{name:"number"}}}}}catch{}export{i as C};
