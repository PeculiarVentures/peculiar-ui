import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-pByjoP3I.js";import{t as r}from"./jsx-runtime-BG4KOiPz.js";import{i,n as a,r as o,t as s}from"./emotion-styled.browser.esm-CCc8GCCM.js";import{C as c,w as l}from"./iframe-BxCgROA0.js";var u,d,f,p,m,h,g,_,v,y;function b(){return(b=t((()=>{u=e(n(),1),o(),c(),s(),d=r(),f=l`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,p=l`
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
`,m=a(`div`,{shouldForwardProp:e=>i(e)&&e!==`color`})(e=>({label:`CircularProgress`,overflow:`hidden`,position:`relative`,display:`inline-block`,color:`var(--pv-color-${e.color})`,...e.variant===`indeterminate`?{animation:`${f} 1.4s linear infinite`}:{transform:`rotate(-90deg)`},...e.size===`small`&&{height:`calc(var(--pv-size-base) * 3)`,width:`calc(var(--pv-size-base) * 3)`},...e.size===`large`&&{height:`calc(var(--pv-size-base) * 6)`,width:`calc(var(--pv-size-base) * 6)`}})),h=a(`svg`)({display:`block`}),g=a(`circle`)(e=>({stroke:`currentcolor`,strokeDasharray:`80px, 200px`,strokeDashoffset:0,...e.variant===`indeterminate`&&{animation:`${p} 1.4s ease-in-out infinite`}})),_=44,v=4,y=u.forwardRef((e,t)=>{let{size:n=`large`,variant:r=`indeterminate`,value:i=0,color:a=`primary`,...o}=e,s={};if(r===`determinate`){let e=2*Math.PI*20;s.strokeDasharray=e.toFixed(3),s.strokeDashoffset=`${((100-i)/100*e).toFixed(3)}px`}return(0,d.jsx)(m,{ref:t,role:`progressbar`,variant:r,size:n,color:a,...o,children:(0,d.jsx)(h,{viewBox:`${_/2} ${_/2} ${_} ${_}`,children:(0,d.jsx)(g,{cx:_,cy:_,r:20,fill:`none`,strokeWidth:v,style:s,variant:r})})})}),y.displayName=`CircularProgress`})))()}export{b as n,y as t};