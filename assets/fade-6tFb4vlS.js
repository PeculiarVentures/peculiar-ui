import{j as _}from"./jsx-runtime-DtaoT6pD.js";import{r}from"./index-OjgoNOWw.js";import{u as b}from"./use_merged_ref-U30BPCzO.js";import{T as R}from"./Transition-ZSq31Zhi.js";const n=r.forwardRef((a,d)=>{const{timeout:o,in:l,children:t,finalOpacity:p,appear:u,onEnter:s,onEntered:m,onEntering:c,onExit:f,onExited:y,onExiting:h,...E}=a,i=r.useRef(null),g=b(t.ref,d,i),x=e=>{i.current.offsetHeight,s&&s(e)};return _.jsx(R,{in:l,timeout:o,appear:u,onEnter:x,onEntered:m,onEntering:c,onExit:f,onExited:y,onExiting:h,nodeRef:i,...E,children:e=>r.cloneElement(t,{style:{opacity:e==="entering"||e==="entered"?p:0,transition:`opacity ${o}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,visibility:e==="exited"&&!l?"hidden":void 0,...t.props.style},ref:g})})});n.displayName="Fade";n.defaultProps={timeout:225,finalOpacity:1,appear:!0};try{n.displayName="Fade",n.__docgenInfo={description:"",displayName:"Fade",props:{in:{defaultValue:null,description:"If `true`, the component will transition in.",name:"in",required:!1,type:{name:"boolean"}},timeout:{defaultValue:{value:"225"},description:"The duration for the transition, in milliseconds.",name:"timeout",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},finalOpacity:{defaultValue:{value:"1"},description:"",name:"finalOpacity",required:!1,type:{name:"number"}},appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.",name:"appear",required:!1,type:{name:"boolean"}}}}}catch{}export{n as F};