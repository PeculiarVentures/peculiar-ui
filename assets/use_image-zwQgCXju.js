import{R as a}from"./index-OjgoNOWw.js";import{u as f}from"./use_enhanced_effect-jDxBKzmp.js";function m(e,i={}){const{onLoad:u,onError:o}=i,[c,t]=a.useState("pending"),r=a.useRef();return f(()=>{if(e)return t("loading"),r.current=new Image,r.current.src=e,r.current.onload=n=>{r.current&&(t("loaded"),u&&u(n))},r.current.onerror=n=>{r.current&&(r.current=void 0,t("failed"),o&&o(n))},()=>{r.current=void 0}},[e]),{status:c,image:r.current}}export{m as u};
