import{j as d}from"./jsx-runtime-CQsLhzk5.js";import{e as u}from"./index-Wp2u197Z.js";import{u as p}from"./use_enhanced_effect-C1-U52iU.js";function m(s){const[r,n]=u.useState(!1);return p(()=>{const e=window.matchMedia(s);e.matches!==r&&n(e.matches);const i=()=>{n(e.matches)};return e.addListener(i),()=>{e.removeListener(i)}},[r,s]),r}const l={title:"Hooks/useMediaQuery",component:m},t=()=>{const s=m("(min-width: 480px)");return d.jsxs("div",{children:["Screen is wide:"," ",s?"Yes":"No"]})};var o,a,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const isWide = useMediaQuery('(min-width: 480px)');
  return <div>
      Screen is wide:
      {' '}
      {isWide ? 'Yes' : 'No'}
    </div>;
}`,...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const w=["DemoExample"];export{t as DemoExample,w as __namedExportsOrder,l as default};
