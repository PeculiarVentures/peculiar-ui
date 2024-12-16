import{j as o}from"./jsx-runtime-CQsLhzk5.js";import{e as f}from"./index-Wp2u197Z.js";import{k as c}from"./emotion-react.browser.esm-8Xjhr7rM.js";import{n,i as v}from"./emotion-styled.browser.esm-C7XpMTT7.js";const h=c`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,y=c`
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
`,g=n("div",{shouldForwardProp:e=>v(e)&&e!=="color"})(e=>({label:"CircularProgress",overflow:"hidden",position:"relative",display:"inline-block",color:`var(--pv-color-${e.color})`,...e.variant==="indeterminate"?{animation:`${h} 1.4s linear infinite`}:{transform:"rotate(-90deg)"},...e.size==="small"&&{height:"var(--pv-size-base-3)",width:"var(--pv-size-base-3)"},...e.size==="large"&&{height:"var(--pv-size-base-6)",width:"var(--pv-size-base-6)"}})),x=n("svg")({display:"block"}),k=n("circle")(e=>({stroke:"currentcolor",strokeDasharray:"80px, 200px",strokeDashoffset:0,...e.variant==="indeterminate"&&{animation:`${y} 1.4s ease-in-out infinite`}})),r=44,i=4,a=f.forwardRef((e,d)=>{const{size:u,variant:t="indeterminate",value:m=0,...p}=e,s={};if(t==="determinate"){const l=2*Math.PI*((r-i)/2);s.strokeDasharray=l.toFixed(3),s.strokeDashoffset=`${((100-m)/100*l).toFixed(3)}px`}return o.jsx(g,{ref:d,role:"progressbar",variant:t,size:u,...p,children:o.jsx(x,{viewBox:`${r/2} ${r/2} ${r} ${r}`,children:o.jsx(k,{cx:r,cy:r,r:(r-i)/2,fill:"none",strokeWidth:i,style:s,variant:t})})})});a.displayName="CircularProgress";a.defaultProps={color:"primary",size:"large",variant:"indeterminate",value:0};try{a.displayName="CircularProgress",a.__docgenInfo={description:"",displayName:"CircularProgress",props:{color:{defaultValue:{value:"primary"},description:"The color of the component. It supports those theme colors that make sense for this component.",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"white"'}]}},className:{defaultValue:null,description:"The className of the component.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"large"},description:"The size of the progress.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},variant:{defaultValue:{value:"indeterminate"},description:`The variant to use.
Use indeterminate when there is no progress value.`,name:"variant",required:!1,type:{name:"enum",value:[{value:'"determinate"'},{value:'"indeterminate"'}]}},value:{defaultValue:{value:"0"},description:`The value of the progress indicator for the determinate variant.
Value between 0 and 100.`,name:"value",required:!1,type:{name:"number"}}}}}catch{}export{a as C};
