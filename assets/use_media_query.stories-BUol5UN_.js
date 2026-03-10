import{j as u}from"./jsx-runtime-xF634gn_.js";import{e as p}from"./index-C-7etoUd.js";import{I as h,u as f}from"./use_enhanced_effect-BDfR00fA.js";function c(e,n=!1){const[d,m]=p.useState(()=>n!==void 0?n:h?!1:window.matchMedia(e).matches);return f(()=>{const t=window.matchMedia(e),r=()=>{m(t.matches)};return r(),t.addListener(r),()=>{t.removeListener(r)}},[e]),d}const M={title:"Hooks/useMediaQuery",component:c},s=()=>{const e=c("(min-width: 480px)");return u.jsxs("div",{children:["Screen is wide:"," ",e?"Yes":"No"]})};var i,o,a;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const isWide = useMediaQuery('(min-width: 480px)');
  return <div>
      Screen is wide:
      {' '}
      {isWide ? 'Yes' : 'No'}
    </div>;
}`,...(a=(o=s.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const l=["DemoExample"];export{s as DemoExample,l as __namedExportsOrder,M as default};
