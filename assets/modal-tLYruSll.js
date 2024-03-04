import{j as I}from"./jsx-runtime-DtaoT6pD.js";import{R as Z,r as H}from"./index-OjgoNOWw.js";import{n as fe,i as Ne}from"./emotion-styled.browser.esm-jsqElTi7.js";import{P as Ee}from"./portal-GS-MOYPJ.js";import{B as Fe}from"./box-prmQx5g4.js";import{F as Te}from"./fade-6tFb4vlS.js";import{u as ke}from"./use_merged_ref-U30BPCzO.js";/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var ve=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],G=ve.join(","),be=typeof Element>"u",S=be?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,U=!be&&Element.prototype.getRootNode?function(n){var e;return n==null||(e=n.getRootNode)===null||e===void 0?void 0:e.call(n)}:function(n){return n==null?void 0:n.ownerDocument},_=function n(e,t){var a;t===void 0&&(t=!0);var u=e==null||(a=e.getAttribute)===null||a===void 0?void 0:a.call(e,"inert"),l=u===""||u==="true",r=l||t&&e&&n(e.parentNode);return r},De=function(e){var t,a=e==null||(t=e.getAttribute)===null||t===void 0?void 0:t.call(e,"contenteditable");return a===""||a==="true"},pe=function(e,t,a){if(_(e))return[];var u=Array.prototype.slice.apply(e.querySelectorAll(G));return t&&S.call(e,G)&&u.unshift(e),u=u.filter(a),u},he=function n(e,t,a){for(var u=[],l=Array.from(e);l.length;){var r=l.shift();if(!_(r,!1))if(r.tagName==="SLOT"){var d=r.assignedElements(),c=d.length?d:r.children,p=n(c,!0,a);a.flatten?u.push.apply(u,p):u.push({scopeParent:r,candidates:p})}else{var w=S.call(r,G);w&&a.filter(r)&&(t||!e.includes(r))&&u.push(r);var m=r.shadowRoot||typeof a.getShadowRoot=="function"&&a.getShadowRoot(r),E=!_(m,!1)&&(!a.shadowRootFilter||a.shadowRootFilter(r));if(m&&E){var P=n(m===!0?r.children:m.children,!0,a);a.flatten?u.push.apply(u,P):u.push({scopeParent:r,candidates:P})}else l.unshift.apply(l,r.children)}}return u},me=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},R=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||De(e))&&!me(e)?0:e.tabIndex},Re=function(e,t){var a=R(e);return a<0&&t&&!me(e)?0:a},Se=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},ye=function(e){return e.tagName==="INPUT"},Pe=function(e){return ye(e)&&e.type==="hidden"},Ce=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(a){return a.tagName==="SUMMARY"});return t},Ie=function(e,t){for(var a=0;a<e.length;a++)if(e[a].checked&&e[a].form===t)return e[a]},xe=function(e){if(!e.name)return!0;var t=e.form||U(e),a=function(d){return t.querySelectorAll('input[type="radio"][name="'+d+'"]')},u;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")u=a(window.CSS.escape(e.name));else try{u=a(e.name)}catch(r){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",r.message),!1}var l=Ie(u,e.form);return!l||l===e},Ae=function(e){return ye(e)&&e.type==="radio"},Oe=function(e){return Ae(e)&&!xe(e)},Be=function(e){var t,a=e&&U(e),u=(t=a)===null||t===void 0?void 0:t.host,l=!1;if(a&&a!==e){var r,d,c;for(l=!!((r=u)!==null&&r!==void 0&&(d=r.ownerDocument)!==null&&d!==void 0&&d.contains(u)||e!=null&&(c=e.ownerDocument)!==null&&c!==void 0&&c.contains(e));!l&&u;){var p,w,m;a=U(u),u=(p=a)===null||p===void 0?void 0:p.host,l=!!((w=u)!==null&&w!==void 0&&(m=w.ownerDocument)!==null&&m!==void 0&&m.contains(u))}}return l},oe=function(e){var t=e.getBoundingClientRect(),a=t.width,u=t.height;return a===0&&u===0},qe=function(e,t){var a=t.displayCheck,u=t.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var l=S.call(e,"details>summary:first-of-type"),r=l?e.parentElement:e;if(S.call(r,"details:not([open]) *"))return!0;if(!a||a==="full"||a==="legacy-full"){if(typeof u=="function"){for(var d=e;e;){var c=e.parentElement,p=U(e);if(c&&!c.shadowRoot&&u(c)===!0)return oe(e);e.assignedSlot?e=e.assignedSlot:!c&&p!==e.ownerDocument?e=p.host:e=c}e=d}if(Be(e))return!e.getClientRects().length;if(a!=="legacy-full")return!0}else if(a==="non-zero-area")return oe(e);return!1},Ke=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var a=0;a<t.children.length;a++){var u=t.children.item(a);if(u.tagName==="LEGEND")return S.call(t,"fieldset[disabled] *")?!0:!u.contains(e)}return!0}t=t.parentElement}return!1},z=function(e,t){return!(t.disabled||_(t)||Pe(t)||qe(t,e)||Ce(t)||Ke(t))},Q=function(e,t){return!(Oe(t)||R(t)<0||!z(e,t))},Ve=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},Le=function n(e){var t=[],a=[];return e.forEach(function(u,l){var r=!!u.scopeParent,d=r?u.scopeParent:u,c=Re(d,r),p=r?n(u.candidates):d;c===0?r?t.push.apply(t,p):t.push(d):a.push({documentOrder:l,tabIndex:c,item:u,isScope:r,content:p})}),a.sort(Se).reduce(function(u,l){return l.isScope?u.push.apply(u,l.content):u.push(l.content),u},[]).concat(t)},je=function(e,t){t=t||{};var a;return t.getShadowRoot?a=he([e],t.includeContainer,{filter:Q.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Ve}):a=pe(e,t.includeContainer,Q.bind(null,t)),Le(a)},Me=function(e,t){t=t||{};var a;return t.getShadowRoot?a=he([e],t.includeContainer,{filter:z.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):a=pe(e,t.includeContainer,z.bind(null,t)),a},C=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return S.call(e,G)===!1?!1:Q(t,e)},Ge=ve.concat("iframe").join(","),$=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return S.call(e,Ge)===!1?!1:z(t,e)};/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function ue(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(u){return Object.getOwnPropertyDescriptor(n,u).enumerable})),t.push.apply(t,a)}return t}function le(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ue(Object(t),!0).forEach(function(a){Ue(n,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ue(Object(t)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))})}return n}function Ue(n,e,t){return e=ze(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function _e(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var a=t.call(n,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function ze(n){var e=_e(n,"string");return typeof e=="symbol"?e:String(e)}var se={activateTrap:function(e,t){if(e.length>0){var a=e[e.length-1];a!==t&&a.pause()}var u=e.indexOf(t);u===-1||e.splice(u,1),e.push(t)},deactivateTrap:function(e,t){var a=e.indexOf(t);a!==-1&&e.splice(a,1),e.length>0&&e[e.length-1].unpause()}},We=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},Xe=function(e){return(e==null?void 0:e.key)==="Escape"||(e==null?void 0:e.key)==="Esc"||(e==null?void 0:e.keyCode)===27},q=function(e){return(e==null?void 0:e.key)==="Tab"||(e==null?void 0:e.keyCode)===9},Ye=function(e){return q(e)&&!e.shiftKey},Je=function(e){return q(e)&&e.shiftKey},ce=function(e){return setTimeout(e,0)},de=function(e,t){var a=-1;return e.every(function(u,l){return t(u)?(a=l,!1):!0}),a},B=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),u=1;u<t;u++)a[u-1]=arguments[u];return typeof e=="function"?e.apply(void 0,a):e},M=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},Ze=[],$e=function(e,t){var a=(t==null?void 0:t.document)||document,u=(t==null?void 0:t.trapStack)||Ze,l=le({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:Ye,isKeyBackward:Je},t),r={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},d,c=function(o,i,s){return o&&o[i]!==void 0?o[i]:l[s||i]},p=function(o,i){var s=typeof(i==null?void 0:i.composedPath)=="function"?i.composedPath():void 0;return r.containerGroups.findIndex(function(f){var v=f.container,h=f.tabbableNodes;return v.contains(o)||(s==null?void 0:s.includes(v))||h.find(function(y){return y===o})})},w=function(o){var i=l[o];if(typeof i=="function"){for(var s=arguments.length,f=new Array(s>1?s-1:0),v=1;v<s;v++)f[v-1]=arguments[v];i=i.apply(void 0,f)}if(i===!0&&(i=void 0),!i){if(i===void 0||i===!1)return i;throw new Error("`".concat(o,"` was specified but was not a node, or did not return a node"))}var h=i;if(typeof i=="string"&&(h=a.querySelector(i),!h))throw new Error("`".concat(o,"` as selector refers to no known node"));return h},m=function(){var o=w("initialFocus");if(o===!1)return!1;if(o===void 0||!$(o,l.tabbableOptions))if(p(a.activeElement)>=0)o=a.activeElement;else{var i=r.tabbableGroups[0],s=i&&i.firstTabbableNode;o=s||w("fallbackFocus")}if(!o)throw new Error("Your focus-trap needs to have at least one focusable element");return o},E=function(){if(r.containerGroups=r.containers.map(function(o){var i=je(o,l.tabbableOptions),s=Me(o,l.tabbableOptions),f=i.length>0?i[0]:void 0,v=i.length>0?i[i.length-1]:void 0,h=s.find(function(g){return C(g)}),y=s.slice().reverse().find(function(g){return C(g)}),N=!!i.find(function(g){return R(g)>0});return{container:o,tabbableNodes:i,focusableNodes:s,posTabIndexesFound:N,firstTabbableNode:f,lastTabbableNode:v,firstDomTabbableNode:h,lastDomTabbableNode:y,nextTabbableNode:function(D){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,k=i.indexOf(D);return k<0?A?s.slice(s.indexOf(D)+1).find(function(O){return C(O)}):s.slice(0,s.indexOf(D)).reverse().find(function(O){return C(O)}):i[k+(A?1:-1)]}}}),r.tabbableGroups=r.containerGroups.filter(function(o){return o.tabbableNodes.length>0}),r.tabbableGroups.length<=0&&!w("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(r.containerGroups.find(function(o){return o.posTabIndexesFound})&&r.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},P=function b(o){var i=o.activeElement;if(i)return i.shadowRoot&&i.shadowRoot.activeElement!==null?b(i.shadowRoot):i},F=function b(o){if(o!==!1&&o!==P(document)){if(!o||!o.focus){b(m());return}o.focus({preventScroll:!!l.preventScroll}),r.mostRecentlyFocusedNode=o,We(o)&&o.select()}},L=function(o){var i=w("setReturnFocus",o);return i||(i===!1?!1:o)},j=function(o){var i=o.target,s=o.event,f=o.isBackward,v=f===void 0?!1:f;i=i||M(s),E();var h=null;if(r.tabbableGroups.length>0){var y=p(i,s),N=y>=0?r.containerGroups[y]:void 0;if(y<0)v?h=r.tabbableGroups[r.tabbableGroups.length-1].lastTabbableNode:h=r.tabbableGroups[0].firstTabbableNode;else if(v){var g=de(r.tabbableGroups,function(Y){var J=Y.firstTabbableNode;return i===J});if(g<0&&(N.container===i||$(i,l.tabbableOptions)&&!C(i,l.tabbableOptions)&&!N.nextTabbableNode(i,!1))&&(g=y),g>=0){var D=g===0?r.tabbableGroups.length-1:g-1,A=r.tabbableGroups[D];h=R(i)>=0?A.lastTabbableNode:A.lastDomTabbableNode}else q(s)||(h=N.nextTabbableNode(i,!1))}else{var k=de(r.tabbableGroups,function(Y){var J=Y.lastTabbableNode;return i===J});if(k<0&&(N.container===i||$(i,l.tabbableOptions)&&!C(i,l.tabbableOptions)&&!N.nextTabbableNode(i))&&(k=y),k>=0){var O=k===r.tabbableGroups.length-1?0:k+1,ie=r.tabbableGroups[O];h=R(i)>=0?ie.firstTabbableNode:ie.firstDomTabbableNode}else q(s)||(h=N.nextTabbableNode(i))}}else h=w("fallbackFocus");return h},T=function(o){var i=M(o);if(!(p(i,o)>=0)){if(B(l.clickOutsideDeactivates,o)){d.deactivate({returnFocus:l.returnFocusOnDeactivate});return}B(l.allowOutsideClick,o)||o.preventDefault()}},ee=function(o){var i=M(o),s=p(i,o)>=0;if(s||i instanceof Document)s&&(r.mostRecentlyFocusedNode=i);else{o.stopImmediatePropagation();var f,v=!0;if(r.mostRecentlyFocusedNode)if(R(r.mostRecentlyFocusedNode)>0){var h=p(r.mostRecentlyFocusedNode),y=r.containerGroups[h].tabbableNodes;if(y.length>0){var N=y.findIndex(function(g){return g===r.mostRecentlyFocusedNode});N>=0&&(l.isKeyForward(r.recentNavEvent)?N+1<y.length&&(f=y[N+1],v=!1):N-1>=0&&(f=y[N-1],v=!1))}}else r.containerGroups.some(function(g){return g.tabbableNodes.some(function(D){return R(D)>0})})||(v=!1);else v=!1;v&&(f=j({target:r.mostRecentlyFocusedNode,isBackward:l.isKeyBackward(r.recentNavEvent)})),F(f||r.mostRecentlyFocusedNode||m())}r.recentNavEvent=void 0},ge=function(o){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;r.recentNavEvent=o;var s=j({event:o,isBackward:i});s&&(q(o)&&o.preventDefault(),F(s))},te=function(o){if(Xe(o)&&B(l.escapeDeactivates,o)!==!1){o.preventDefault(),d.deactivate();return}(l.isKeyForward(o)||l.isKeyBackward(o))&&ge(o,l.isKeyBackward(o))},ae=function(o){var i=M(o);p(i,o)>=0||B(l.clickOutsideDeactivates,o)||B(l.allowOutsideClick,o)||(o.preventDefault(),o.stopImmediatePropagation())},re=function(){if(r.active)return se.activateTrap(u,d),r.delayInitialFocusTimer=l.delayInitialFocus?ce(function(){F(m())}):F(m()),a.addEventListener("focusin",ee,!0),a.addEventListener("mousedown",T,{capture:!0,passive:!1}),a.addEventListener("touchstart",T,{capture:!0,passive:!1}),a.addEventListener("click",ae,{capture:!0,passive:!1}),a.addEventListener("keydown",te,{capture:!0,passive:!1}),d},ne=function(){if(r.active)return a.removeEventListener("focusin",ee,!0),a.removeEventListener("mousedown",T,!0),a.removeEventListener("touchstart",T,!0),a.removeEventListener("click",ae,!0),a.removeEventListener("keydown",te,!0),d},we=function(o){var i=o.some(function(s){var f=Array.from(s.removedNodes);return f.some(function(v){return v===r.mostRecentlyFocusedNode})});i&&F(m())},X=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(we):void 0,x=function(){X&&(X.disconnect(),r.active&&!r.paused&&r.containers.map(function(o){X.observe(o,{subtree:!0,childList:!0})}))};return d={get active(){return r.active},get paused(){return r.paused},activate:function(o){if(r.active)return this;var i=c(o,"onActivate"),s=c(o,"onPostActivate"),f=c(o,"checkCanFocusTrap");f||E(),r.active=!0,r.paused=!1,r.nodeFocusedBeforeActivation=a.activeElement,i==null||i();var v=function(){f&&E(),re(),x(),s==null||s()};return f?(f(r.containers.concat()).then(v,v),this):(v(),this)},deactivate:function(o){if(!r.active)return this;var i=le({onDeactivate:l.onDeactivate,onPostDeactivate:l.onPostDeactivate,checkCanReturnFocus:l.checkCanReturnFocus},o);clearTimeout(r.delayInitialFocusTimer),r.delayInitialFocusTimer=void 0,ne(),r.active=!1,r.paused=!1,x(),se.deactivateTrap(u,d);var s=c(i,"onDeactivate"),f=c(i,"onPostDeactivate"),v=c(i,"checkCanReturnFocus"),h=c(i,"returnFocus","returnFocusOnDeactivate");s==null||s();var y=function(){ce(function(){h&&F(L(r.nodeFocusedBeforeActivation)),f==null||f()})};return h&&v?(v(L(r.nodeFocusedBeforeActivation)).then(y,y),this):(y(),this)},pause:function(o){if(r.paused||!r.active)return this;var i=c(o,"onPause"),s=c(o,"onPostPause");return r.paused=!0,i==null||i(),ne(),x(),s==null||s(),this},unpause:function(o){if(!r.paused||!r.active)return this;var i=c(o,"onUnpause"),s=c(o,"onPostUnpause");return r.paused=!1,i==null||i(),E(),re(),x(),s==null||s(),this},updateContainerElements:function(o){var i=[].concat(o).filter(Boolean);return r.containers=i.map(function(s){return typeof s=="string"?a.querySelector(s):s}),r.active&&E(),x(),this}},d.updateContainerElements(e),d};const K=n=>{const{children:e,open:t,disableAutoFocus:a}=n,u=Z.useRef(null),l=ke(e.ref,u);return Z.useEffect(()=>{if(!t||!u.current)return;const r=$e(u.current,{clickOutsideDeactivates:!1,allowOutsideClick:!0,escapeDeactivates:!1,fallbackFocus:()=>u.current||"body",...a&&{initialFocus:()=>u.current}});return r.activate(),()=>{r.deactivate({returnFocus:!0})}},[t]),Z.cloneElement(e,{ref:l})};K.displayName="FocusTrap";K.defaultProps={};try{K.displayName="FocusTrap",K.__docgenInfo={description:"",displayName:"FocusTrap",props:{children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},open:{defaultValue:null,description:"If true, focus will be locked.",name:"open",required:!0,type:{name:"boolean"}},disableAutoFocus:{defaultValue:null,description:"If `true`, the trap focus will not automatically shift focus\nto first interactive element when it opens,\nand replace it to the last focused element when it closes.",name:"disableAutoFocus",required:!1,type:{name:"boolean"}}}}}catch{}const He=/^(as|open|invisible|transitionDuration|variant)$/,Qe=fe(Fe,{shouldForwardProp:n=>!He.test(n)})(n=>({zIndex:-1,position:"fixed",right:0,bottom:0,top:0,left:0,WebkitTapHighlightColor:"transparent",...n.invisible&&{backgroundColor:"transparent"}})),et={light:.1,medium:.5,heavy:.9},V=H.forwardRef((n,e)=>{const{open:t,transitionDuration:a,variant:u,invisible:l,onEnter:r,onEntered:d,onEntering:c,onExit:p,onExited:w,onExiting:m,...E}=n;return I.jsx(Te,{in:t,timeout:a,onEnter:r,onEntered:d,onEntering:c,onExit:p,onExited:w,onExiting:m,finalOpacity:et[u],children:I.jsx(Qe,{ref:e,background:"black","aria-hidden":"true",invisible:l,...E})})});V.displayName="Backdrop";V.defaultProps={variant:"medium",invisible:!1,transitionDuration:225};try{V.displayName="Backdrop",V.__docgenInfo={description:"",displayName:"Backdrop",props:{open:{defaultValue:null,description:"If `true`, the backdrop is open.",name:"open",required:!0,type:{name:"boolean"}},className:{defaultValue:null,description:"The className of the component.",name:"className",required:!1,type:{name:"string"}},invisible:{defaultValue:{value:"false"},description:"If `true`, the backdrop is invisible.",name:"invisible",required:!1,type:{name:"boolean"}},transitionDuration:{defaultValue:{value:"225"},description:"The duration for the transition, in milliseconds.",name:"transitionDuration",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"medium"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"light"'},{value:'"heavy"'}]}}}}}catch{}const tt=fe("div",{shouldForwardProp:n=>Ne(n)&&n!=="open"})(n=>({position:"fixed",zIndex:1300,top:0,bottom:0,right:0,left:0,...!n.open&&n.exited&&{visibility:"hidden"}})),W=H.forwardRef((n,e)=>{const{children:t,open:a,transitionDuration:u,disableBackdropClick:l,disableEscapeKeyDown:r,keepMounted:d,backdropProps:c,disableEnforceFocus:p,disableAutoFocus:w,onClose:m,...E}=n,[P,F]=H.useState(!0);if(!d&&!a)return null;const L=T=>{l||m&&m(T)},j=T=>{r||T.key==="Escape"&&(T.stopPropagation(),m&&m(T))};return I.jsx(Ee,{children:I.jsxs(tt,{ref:e,open:a,exited:P,role:"presentation","aria-hidden":!a,onKeyDown:j,...E,children:[I.jsx(V,{...c,open:a,onClick:L,onEnter:()=>F(!1),onExited:()=>F(!0),transitionDuration:u}),I.jsx(K,{open:p?!1:a,disableAutoFocus:w,children:t})]})})});W.displayName="Modal";W.defaultProps={transitionDuration:225,disableBackdropClick:!1,disableEscapeKeyDown:!1,keepMounted:!1,disableEnforceFocus:!1};try{W.displayName="Modal",W.__docgenInfo={description:"",displayName:"Modal",props:{children:{defaultValue:null,description:"A single child content element.",name:"children",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> & ReactNode"}},open:{defaultValue:null,description:"If `true`, the modal is open.",name:"open",required:!0,type:{name:"boolean"}},className:{defaultValue:null,description:"The className of the component.",name:"className",required:!1,type:{name:"string"}},transitionDuration:{defaultValue:{value:"225"},description:"The duration for the transition, in milliseconds.",name:"transitionDuration",required:!1,type:{name:"number"}},disableBackdropClick:{defaultValue:{value:"false"},description:"If `true`, clicking the backdrop will not fire the `onClose` callback.",name:"disableBackdropClick",required:!1,type:{name:"boolean"}},disableEscapeKeyDown:{defaultValue:{value:"false"},description:"If `true`, hitting escape will not fire the `onClose` callback.",name:"disableEscapeKeyDown",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback fired when the component requests to be closed.",name:"onClose",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>) => void"}},keepMounted:{defaultValue:{value:"false"},description:"Always keep the children in the DOM.",name:"keepMounted",required:!1,type:{name:"boolean"}},backdropProps:{defaultValue:null,description:"Props applied to the `Backdrop` element.",name:"backdropProps",required:!1,type:{name:"Partial<BackdropProps>"}},disableEnforceFocus:{defaultValue:{value:"false"},description:"If `true`, the modal will not prevent focus from leaving the modal while open.",name:"disableEnforceFocus",required:!1,type:{name:"boolean"}},disableAutoFocus:{defaultValue:null,description:"If `true`, the trap focus will not automatically shift focus\nto first interactive element when it opens,\nand replace it to the last focused element when it closes.",name:"disableAutoFocus",required:!1,type:{name:"boolean"}}}}}catch{}export{W as M};
