import{e as f}from"./index-Wp2u197Z.js";import{u as Z}from"./use_id-BweIgYmC.js";import{u as ee}from"./use_controllable-DRJrQW8S.js";import{u as te}from"./use_enhanced_effect-C1-U52iU.js";function v(c){const h=f.useRef(c);return te(()=>{h.current=c}),f.useCallback((...I)=>(0,h.current)(...I),[])}const ne=(c,h,I,P)=>!c||!c.length?[]:c.filter(T=>P(T).trim().toLowerCase().includes(h.trim().toLowerCase()));function ue(c){const{id:h,options:I,defaultValue:P=c.multiple?[]:null,value:T,disableCloseOnSelect:R=!1,multiple:g=!1,readOnly:S,popoverProps:U,groupBy:y,getOptionLabel:D=e=>e.label??e,getOptionKey:E,filterOptions:_=ne,onOpen:L,onClose:N,onInputChange:O,onChange:k}=c,p=Z(h),q=f.useRef(null),b=f.useRef(null),d=f.useRef(-1),[i,B]=f.useState(!1),[x,H]=f.useState(""),[s,F]=ee({value:T,defaultValue:P}),u=i?_(I,x,s,D):[],j=(e,t)=>{if(!b.current||e===-1)return-1;let n=e;for(;;){if(t==="next"&&n===u.length||t==="previous"&&n===-1)return-1;const o=b.current.querySelector(`[data-option-index="${n}"]`);if(o&&!o.hasAttribute("tabindex"))n+=t==="next"?1:-1;else return n}},m=v((e,t="auto")=>{d.current=e;const n=b.current;if(!n)return;const o=n.querySelector('[role="option"][data-focused="true"]');if(o&&o.setAttribute("data-focused","false"),e===-1){n.scrollTop=0;return}const l=n.querySelector(`[data-option-index="${e}"]`);if(l&&(l.setAttribute("data-focused","true"),n.scrollHeight>n.clientHeight&&t!=="mouse")){const r=l,a=n.clientHeight+n.scrollTop,A=r.offsetTop+r.offsetHeight;A>a?n.scrollTop=A-n.clientHeight:r.offsetTop-r.offsetHeight*(y?1.3:0)<n.scrollTop&&(n.scrollTop=r.offsetTop-r.offsetHeight*(y?1.3:0))}}),C=v((e,t="next",n="auto")=>{if(!i)return;const l=j((()=>{const r=u.length-1;if(e==="reset")return-1;if(e==="start")return 0;if(e==="end")return r;const a=d.current+e;return a<0?a===-1?-1:d.current!==-1||Math.abs(e)>1?0:r:a>r?a===r+1?-1:Math.abs(e)>1?r:0:a})(),t);m(l,n)}),$=f.useCallback(()=>{if(!i)return;const e=Array.isArray(s)?s[0]:s;if(u.length===0||e==null){C("reset");return}if(b.current){if(e!=null){const t=u.findIndex(n=>n===e);t===-1?C("reset"):m(t);return}if(d.current>=u.length-1){m(u.length-1);return}m(d.current)}},[u.length,g?!1:s,C,m,i,x,g]),G=v(e=>{b.current=e,e&&$()});f.useEffect(()=>{$()},[$]);const w=e=>{i||(B(!0),L&&L(e))},J=e=>{S||w(e)},K=e=>{i&&(B(!1),H(""),N&&N(e))},V=(e,t,n,o)=>{let l=t,r=o;if(g){l=Array.isArray(s)?s.slice():[];const a=l.findIndex(A=>t===A);a===-1?l.push(t):(l.splice(a,1),r="removeOption")}F(l),R||K(e),k&&k(e,l,{option:t,index:n},r)},M=e=>{e.preventDefault(),H("");const t=g?[]:null;O&&O(e,""),F(t),k&&k(e,t,{option:null,index:0},"removeOption")},Q=e=>{const{value:t}=e.target;x!==t&&(H(t),O&&O(e,t)),t===""?g||M(e):w(e)},W=e=>{if(e.which!==229)switch(e.key){case"ArrowDown":e.preventDefault(),C(1,"next","keyboard"),w(e);break;case"ArrowUp":e.preventDefault(),C(-1,"previous","keyboard"),w(e);break;case"Enter":if(e.preventDefault(),d.current!==-1&&i){const t=u[d.current];V(e,t,d.current,"selectOption")}break}},X=e=>{const t=Number(e.currentTarget.getAttribute("data-option-index")),n=u[t];V(e,n,t,"selectOption")},Y=(e,t)=>n=>{n.preventDefault(),V(n,e,t,"removeOption")};let z=u;return y&&(z=u.reduce((e,t,n)=>{const o=y(t);return e.length>0&&e[e.length-1].group===o?e[e.length-1].options.push(t):e.push({key:n,index:n,group:o,options:[t]}),e},[])),{getRootProps:()=>({ref:q,"aria-expanded":i,"aria-autocomplete":"list","aria-controls":`${p}-listbox`,id:`${p}-toggle-button`,role:"combobox",onClick:J}),getInputLabelProps:()=>({id:`${p}-label`,htmlFor:`${p}-toggle-button`}),getListboxProps:()=>({ref:G,role:"listbox",tabIndex:-1,id:`${p}-listbox`}),getInputProps:()=>({id:`${p}-input`,type:"search",value:x,autoComplete:"off",autoCapitalize:"none",autoCorrect:"false",spellCheck:"false",onChange:Q}),getClearProps:()=>({tabIndex:-1,onClick:M}),getOptionProps:(e,t)=>{const n=(Array.isArray(s)?s:[s]).some(o=>o!=null&&e===o);return{key:E?E(e):D(e),tabIndex:-1,role:"option",id:`${p}-option-${t}`,"data-option-index":t,"aria-selected":n,onClick:X}},getPopoverProps:()=>({...U,open:i,anchorEl:q.current,onClose:K,onKeyDown:W}),getTagProps:(e,t)=>({key:t,"data-tag-index":t,tabIndex:-1,onDelete:S?void 0:Y(e,t)}),getOptionLabel:D,groupedOptions:z,popupOpen:i,value:s,searchValue:x,id:p}}export{ue as u};