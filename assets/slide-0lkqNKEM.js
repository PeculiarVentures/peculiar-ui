import{j as _}from"./jsx-runtime-CQsLhzk5.js";import{r as a}from"./index-Wp2u197Z.js";import{u as w}from"./use_merged_ref-ClS6-mGQ.js";import{T as R}from"./Transition-CwNB1HnW.js";const n=a.forwardRef((o,d)=>{const{timeout:l,in:s,children:r,appear:f,onEnter:u,onEntered:p,onEntering:m,onExit:c,onExited:h,onExiting:g,direction:e}=o,i=a.useRef(null),y=w(r.ref,d,i),E=t=>{i.current.offsetHeight,u&&u(t)},v=()=>{if(e==="right"||e==="left")return"translateX(0px)";if(e==="up"||e==="down")return"translateY(0px)"},x=()=>{if(e==="right")return"translateX(100%)";if(e==="left")return"translateX(-100%)";if(e==="up")return"translateY(-100%)";if(e==="down")return"translateY(100%)"};return _.jsx(R,{in:s,timeout:l,appear:f,onEnter:E,onEntered:p,onEntering:m,onExit:c,onExited:h,onExiting:g,nodeRef:i,children:t=>a.cloneElement(r,{style:{transform:t==="entering"||t==="entered"?v():x(),transition:`transform ${l}ms cubic-bezier(0, 0, 0.2, 1) 0ms`,visibility:t==="exited"&&!s?"hidden":void 0,...r.props.style},ref:y})})});n.displayName="Slide";n.defaultProps={timeout:225,direction:"right",appear:!0};try{n.displayName="Slide",n.__docgenInfo={description:"",displayName:"Slide",props:{in:{defaultValue:null,description:"If `true`, the component will transition in.",name:"in",required:!1,type:{name:"boolean"}},timeout:{defaultValue:{value:"225"},description:"The duration for the transition, in milliseconds.",name:"timeout",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},direction:{defaultValue:{value:"right"},description:"Direction the child node will enter from.",name:"direction",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"up"'},{value:'"down"'}]}},appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.",name:"appear",required:!1,type:{name:"boolean"}}}}}catch{}export{n as S};