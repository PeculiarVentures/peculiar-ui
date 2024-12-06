import{j as p}from"./jsx-runtime-CQsLhzk5.js";import{g as N,r as K,e as k}from"./index-Wp2u197Z.js";import{at as T,au as C,av as L}from"./index-OEU5mBnJ.js";import"./chunk-NUUEMKO5-B3I_shGN.js";import{G as $}from"./emotion-react.browser.esm-8Xjhr7rM.js";import{o as q,q as B}from"./utils-B6f9wHAn.js";import{b as U}from"./emotion-element-c39617d8.browser.esm-BF_KrTCf.js";import"./iframe-DQmigF-8.js";import"../sb-preview/runtime.js";import"./index-DA8gG4lw.js";import"./index-yiGAEVS0.js";import"./index-Dy31kHqt.js";import"./react-18-Bstx5tUr.js";var g="DARK_MODE",W=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var n,o,a;if(Array.isArray(e)){if(n=e.length,n!=r.length)return!1;for(o=n;o--!==0;)if(!t(e[o],r[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(a=Object.keys(e),n=a.length,n!==Object.keys(r).length)return!1;for(o=n;o--!==0;)if(!Object.prototype.hasOwnProperty.call(r,a[o]))return!1;for(o=n;o--!==0;){var s=a[o];if(!t(e[s],r[s]))return!1}return!0}return e!==e&&r!==r};const D=N(W);function d(t){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(t)}var v;function A(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function E(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?A(Object(r),!0).forEach(function(n){Y(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function Y(t,e,r){return e=G(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function G(t){var e=H(t,"string");return d(e)==="symbol"?e:String(e)}function H(t,e){if(d(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(d(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function m(t){return Z(t)||J(t)||F(t)||z()}function z(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F(t,e){if(t){if(typeof t=="string")return S(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(t,e)}}function J(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Z(t){if(Array.isArray(t))return S(t)}function S(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const{global:Q}=__STORYBOOK_MODULE_GLOBAL__;__STORYBOOK_MODULE_CORE_EVENTS__;var x=Q,X=x.document,h=x.window,I="sb-addon-themes-3";(v=h.matchMedia)===null||v===void 0||v.call(h,"(prefers-color-scheme: dark)");var _={classTarget:"body",dark:T.dark,darkClass:["dark"],light:T.light,lightClass:["light"],stylePreview:!1,userHasExplicitlySetTheTheme:!1},P=function(e){h.localStorage.setItem(I,JSON.stringify(e))},ee=function(e,r){var n=r.current,o=r.darkClass,a=o===void 0?_.darkClass:o,s=r.lightClass,i=s===void 0?_.lightClass:s;if(n==="dark"){var c,u;(c=e.classList).remove.apply(c,m(y(i))),(u=e.classList).add.apply(u,m(y(a)))}else{var f,j;(f=e.classList).remove.apply(f,m(y(a))),(j=e.classList).add.apply(j,m(y(i)))}},y=function(e){var r=[];return r.concat(e).map(function(n){return n})},te=function(e){var r=X.querySelector(e.classTarget);r&&ee(r,e)},M=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=h.localStorage.getItem(I);if(typeof r=="string"){var n=JSON.parse(r);return e&&(e.dark&&!D(n.dark,e.dark)&&(n.dark=e.dark,P(n)),e.light&&!D(n.light,e.light)&&(n.light=e.light,P(n))),n}return E(E({},_),e)};te(M());function re(t,e){return se(t)||ae(t,e)||oe(t,e)||ne()}function ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(t,e){if(t){if(typeof t=="string")return w(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(t,e)}}function w(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function ae(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n,o,a,s,i=[],c=!0,u=!1;try{if(a=(r=r.call(t)).next,e!==0)for(;!(c=(n=a.call(r)).done)&&(i.push(n.value),i.length!==e);c=!0);}catch(f){u=!0,o=f}finally{try{if(!c&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(u)throw o}}return i}}function se(t){if(Array.isArray(t))return t}const{addons:ie,useState:ce,useEffect:le}=__STORYBOOK_MODULE_PREVIEW_API__;function ue(){var t=ce(M().current==="dark"),e=re(t,2),r=e[0],n=e[1];return le(function(){var o=ie.getChannel();return o.on(g,n),function(){return o.off(g,n)}},[]),r}const l=t=>{const{children:e,mode:r,theme:n,cssVarsRoot:o="html, ::backdrop"}=t,a=K.useMemo(()=>q(B(r,n)),[n,r]);return p.jsxs(U,{theme:{mode:r},children:[p.jsx($,{styles:{[o]:a}}),e]})};l.displayName="ThemeProvider";l.defaultProps={mode:"light"};try{l.displayName="ThemeProvider",l.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"ThemeOptionsType"}},mode:{defaultValue:{value:"light"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},cssVarsRoot:{defaultValue:null,description:"",name:"cssVarsRoot",required:!1,type:{name:"string"}}}}}catch{}const pe="@peculiar/react-components",de="1.1.1",fe="PeculiarVentures Team",me="A simple and customizable component library to build faster, beautiful, and more accessible React applications.",ye=["react","react-component"],ge=!1,he="dist/cjs/index.js",be="dist/esm/index.js",ve="dist/esnext/index.js",Oe="dist/types/index.d.ts",Se=["dist/"],_e={type:"git",url:"https://github.com/PeculiarVentures/peculiar-ui.git",directory:"packages/react-components"},je={start:"storybook dev -p 3000",prebuild:"yarn clean",build:"yarn build:esm && yarn build:cjs && yarn build:esnext","build:esm":"tsc -p tsconfig.build.json","build:cjs":"tsc -p tsconfig.build.json -m commonjs --outDir dist/cjs","build:esnext":"tsc -p tsconfig.build.json -t esnext --outDir dist/esnext","build:storybook":"storybook build -o public",clean:"rimraf public dist themes","test:unit":"jest --passWithNoTests --watchAll","test:unit:coverage":"yarn test:unit --coverage --watchAll=false","test:unit:updateSnapshot":"jest --updateSnapshot","check:types":"tsc --noEmit"},ke={"@types/react":"^17.0.0 || ^18.0.0",react:"^17.0.0 || ^18.0.0","react-dom":"^17.0.0 || ^18.0.0"},Te={"@types/react":{optional:!0}},De={"@emotion/react":"^11.11.1","@emotion/styled":"^11.11.0","@peculiar/color":"^0.1.4","@popperjs/core":"^2.11.7","@types/flat":"^5.0.2","@types/react-transition-group":"^4.4.5",deepmerge:"^4.3.1",flat:"^5.0.2","focus-trap":"^7.5.4",nanoid:"^3.3.6","react-popper":"^2.3.0","react-transition-group":"^4.4.5"},Ae={"@babel/preset-env":"7.26.0","@storybook/addon-essentials":"8.4.7","@storybook/react":"8.4.7","@storybook/react-vite":"8.4.7","@types/react":"^18.0.34","@types/react-dom":"^18.0.11","@vitejs/plugin-react-swc":"^3.5.0",react:"^18.2.0","react-dom":"^18.2.0",rimraf:"^3.0.2",storybook:"8.4.7","storybook-dark-mode":"^4.0.2",typescript:"5.1.6",vite:"^5.4.8"},Ee={access:"public"},Pe={node:">=18.x"},we="MIT",b={name:pe,private:!1,version:de,author:fe,description:me,keywords:ye,sideEffects:ge,main:he,module:be,esnext:ve,typings:Oe,files:Se,repository:_e,scripts:je,peerDependencies:ke,peerDependenciesMeta:Te,dependencies:De,devDependencies:Ae,publishConfig:Ee,engines:Pe,license:we},R=C({base:"light",brandTitle:`${b.name} v${b.version}`}),V=C({base:"dark",brandTitle:`${b.name} v${b.version}`,appPreviewBg:"#1B1C1D"}),{addons:Ce}=__STORYBOOK_MODULE_PREVIEW_API__,O=Ce.getChannel(),xe=t=>{const[e,r]=k.useState(!1);return k.useEffect(()=>(O.on(g,r),()=>O.removeListener(g,r)),[O,r]),p.jsx(l,{mode:e?"dark":"light",children:p.jsx(L,{theme:e?V:R,context:t.context,children:t.children})})},Ie=t=>{const e=ue();return p.jsx(l,{mode:e?"dark":"light",children:t()})},He={decorators:[Ie],parameters:{actions:{argTypesRegex:"^on[A-Z].*"},darkMode:{dark:V,light:R},docs:{container:xe},options:{storySort:{method:"alphabetical",order:["Installation","Customization",["CSS Variables","Palette","Dark mode"],"Components","Hooks"]}}}};export{He as default};
