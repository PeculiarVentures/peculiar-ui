import{_ as i}from"./iframe-xyW4GGK5.js";import{R as t,r as p}from"./index-OjgoNOWw.js";import{r as l,u}from"./react-18-DyM-o0Ps.js";import{b as h,d,H as E,D as x}from"./index-hvC27ksF.js";var D={code:h,a:d,...E},_=class extends p.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(r){let{showException:e}=this.props;e(r)}render(){let{hasError:r}=this.state,{children:e}=this.props;return r?null:t.createElement(t.Fragment,null,e)}},R=class{constructor(){this.render=async(r,e,o)=>{let n={...D,...e==null?void 0:e.components},s=x;return new Promise((a,m)=>{i(()=>import("./index-82O-B91n.js"),__vite__mapDeps([0,1]),import.meta.url).then(({MDXProvider:c})=>l(t.createElement(_,{showException:m,key:Math.random()},t.createElement(c,{components:n},t.createElement(s,{context:r,docsParameter:e}))),o)).then(()=>a())})},this.unmount=r=>{u(r)}}};export{R as D,D as d};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-82O-B91n.js","./index-OjgoNOWw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}