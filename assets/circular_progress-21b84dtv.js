import{j as t}from"./jsx-runtime-xF634gn_.js";import{e as h}from"./index-C-7etoUd.js";import{k as c}from"./emotion-react.browser.esm-vU_FEsrj.js";import{s as l,i as v}from"./emotion-styled.browser.esm-CnX2NPaZ.js";const y=c`
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
`,x=l("div",{shouldForwardProp:e=>v(e)&&e!=="color"})(e=>({label:"CircularProgress",overflow:"hidden",position:"relative",display:"inline-block",color:`var(--pv-color-${e.color})`,...e.variant==="indeterminate"?{animation:`${y} 1.4s linear infinite`}:{transform:"rotate(-90deg)"},...e.size==="small"&&{height:"calc(var(--pv-size-base) * 3)",width:"calc(var(--pv-size-base) * 3)"},...e.size==="large"&&{height:"calc(var(--pv-size-base) * 6)",width:"calc(var(--pv-size-base) * 6)"}})),k=l("svg")({display:"block"}),C=l("circle")(e=>({stroke:"currentcolor",strokeDasharray:"80px, 200px",strokeDashoffset:0,...e.variant==="indeterminate"&&{animation:`${g} 1.4s ease-in-out infinite`}})),r=44,o=4,i=h.forwardRef((e,d)=>{const{size:u="large",variant:a="indeterminate",value:m=0,color:p="primary",...f}=e,s={};if(a==="determinate"){const n=2*Math.PI*((r-o)/2);s.strokeDasharray=n.toFixed(3),s.strokeDashoffset=`${((100-m)/100*n).toFixed(3)}px`}return t.jsx(x,{ref:d,role:"progressbar",variant:a,size:u,color:p,...f,children:t.jsx(k,{viewBox:`${r/2} ${r/2} ${r} ${r}`,children:t.jsx(C,{cx:r,cy:r,r:(r-o)/2,fill:"none",strokeWidth:o,style:s,variant:a})})})});i.displayName="CircularProgress";try{i.displayName="CircularProgress",i.__docgenInfo={description:"",displayName:"CircularProgress",props:{color:{defaultValue:{value:"'primary'"},description:"The color of the component. It supports those theme colors that make sense for this component.",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"white"'}]}},className:{defaultValue:null,description:"The className of the component.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"'large'"},description:"The size of the progress.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},variant:{defaultValue:{value:"'indeterminate'"},description:`The variant to use.
Use indeterminate when there is no progress value.`,name:"variant",required:!1,type:{name:"enum",value:[{value:'"indeterminate"'},{value:'"determinate"'}]}},value:{defaultValue:{value:"0"},description:`The value of the progress indicator for the determinate variant.
Value between 0 and 100.`,name:"value",required:!1,type:{name:"number"}}}}}catch{}export{i as C};
