import{j as r}from"./jsx-runtime-Du8NFWEI.js";import{n as a}from"./emotion-styled.browser.esm-Cx145QRj.js";import{B as me}from"./box-DqWWW0cx.js";import{C as ye}from"./close_small_icon-DjrgdBnT.js";import{A as he}from"./arrow_drop_down_icon-ydQSLVfV.js";import{T as y}from"./typography-CsxZaBy5.js";import{M as ge}from"./menu_item-DcNg-Liw.js";import{P as ve}from"./popper-D6f_HpFI.js";import{C as fe}from"./chip-ZhxiPZdQ.js";import{u as be}from"./use_autocomplete-1RwtRUau.js";import{R as j}from"./index-Dl6G-zuu.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-L5l4RKBO.js";import"./emotion-element-c39617d8.browser.esm-DM69r4Qw.js";import"./usePopper-Q5pBTNBt.js";import"./index-D1_ZHIBm.js";import"./portal-96hzBhmF.js";import"./use_enhanced_effect-Bwnr551i.js";import"./use_id-C1Yisc_V.js";import"./use_controllable-DUuBybTH.js";const Te=t=>{const o=j.useRef(null);return j.useEffect(()=>{const l=i=>{o.current&&!o.current.contains(i.target)&&t()};return document.addEventListener("click",l,!0),()=>{document.removeEventListener("click",l,!0)}},[o,t]),o},xe=/^(as|size|disabled|isHasClearIcon)$/,we=a(me,{shouldForwardProp:t=>!xe.test(t)})({outline:"none",boxSizing:"border-box",width:"100%",borderRadius:"4px",backgroundColor:"var(--pv-color-gray-1)",borderStyle:"solid",borderWidth:"1px",transition:"background-color 200ms, color 200ms, border-color 200ms",appearance:"none",userSelect:"none",textAlign:"left",fontFamily:"inherit",position:"relative",display:"inline-flex",alignItems:"center",flexWrap:"wrap",gap:"var(--pv-size-base)",minHeight:"var(--pv-size-base-8)"},t=>{const o=t.isHasClearIcon?"48px":"24px";switch(t.size){case"small":return{minHeight:"var(--pv-size-base-6)",padding:`1px calc(var(--pv-size-base-2) + ${o}) 1px var(--pv-size-base-2)`};case"medium":return{minHeight:"var(--pv-size-base-7)",padding:`1px calc(var(--pv-size-base-2) + ${o}) 1px var(--pv-size-base-2)`};default:return{minHeight:"var(--pv-size-base-8)",padding:`3px calc(var(--pv-size-base-2) + ${o}) 3px var(--pv-size-base-2)`}}},t=>{const o=t.theme.mode==="dark",l=o?"var(--pv-color-white)":"var(--pv-color-black)";let i="var(--pv-color-gray-8)",u="var(--pv-color-gray-9)",d="var(--pv-color-gray-7)",h="var(--pv-color-gray-5)",v="var(--pv-color-gray-7)",g="var(--pv-color-wrong-tint-5)",c="var(--pv-color-wrong-tint-3)",f="var(--pv-color-secondary-tint-5)",b="var(--pv-color-secondary-tint-3)";return o&&(i="var(--pv-color-gray-5)",u="var(--pv-color-gray-6)",d="var(--pv-color-gray-4)",h="var(--pv-color-gray-4)",v="var(--pv-color-gray-4)",g="var(--pv-color-wrong-shade-4)",c="var(--pv-color-wrong-shade-1)",f="var(--pv-color-secondary-shade-4)",b="var(--pv-color-secondary-shade-1)"),{borderColor:i,...t.disabled&&{cursor:"not-allowed",backgroundColor:"var(--pv-color-gray-1)",borderColor:h,color:v},...!t.disabled&&{color:l,cursor:"text","&:hover":{backgroundColor:"var(--pv-color-gray-3)",borderColor:d},"&[aria-placeholder]":{color:u},"&[aria-invalid]":{backgroundColor:g,borderColor:c},"&:focus-visible":{backgroundColor:f,borderColor:b},"&:focus-within":{backgroundColor:f,borderColor:b}}}}),Ce=a("div")({position:"absolute",right:"0px",top:"calc(50% - 12px)",display:"flex",alignItems:"center",margin:"0px var(--pv-size-base)"}),Ae=a(ye)({color:"var(--pv-color-gray-10)",cursor:"pointer",'&[aria-disabled="true"]':{color:"inherit",pointerEvents:"none"}}),ke=a(he)({color:"var(--pv-color-gray-10)",'&[aria-disabled="true"]':{color:"inherit"}},t=>({...t.open&&{transform:"rotate(180deg)"}})),Se=a("input")({bottom:0,left:0,height:"100%",position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"}),N=a("div")({padding:"var(--pv-size-base-3) var(--pv-size-base-2)"}),Ve=a("ul")({maxHeight:"36vh",overflowY:"auto",margin:0,listStyleType:"none",position:"relative",padding:"10px 0"}),Ie=a(y)(t=>({padding:"var(--pv-size-base-2)",color:t.theme.mode==="dark"?"var(--pv-color-gray-6)":"var(--pv-color-gray-9)"})),Oe=a("ul")({padding:0,listStyleType:"none"}),Pe=a(ge)(t=>({...t.inGroup&&{padding:"0px var(--pv-size-base-2) 0 var(--pv-size-base-3)"}})),Re=a(ve)({minWidth:240,outline:0,borderRadius:"4px",minHeight:"16px",maxHeight:"calc(100% - 32px)",zIndex:1300},t=>{const o=t.theme.mode==="dark";let l="var(--pv-color-white)",i="var(--pv-shadow-light-low)";return o&&(l="var(--pv-color-gray-3)",i="var(--pv-shadow-dark-medium)"),{backgroundColor:l,boxShadow:i}}),qe=a(fe)(t=>({label:"Autocomplete-tag",borderRadius:"3px",margin:0,...t.size==="small"&&{height:"var(--pv-size-base-5)"}})),Le=a(y)({margin:"0 var(--pv-size-base-2)"}),B=a(y)(()=>({fontFamily:"inherit",outline:"none",boxSizing:"border-box",minWidth:"30px",width:0,flexGrow:1,backgroundColor:"transparent",borderStyle:"none",appearance:"none"}),t=>{const o=t.theme.mode==="dark",l=o?"var(--pv-color-white)":"var(--pv-color-black)";let i="var(--pv-color-gray-9)",u="var(--pv-color-gray-7)";return o&&(i="var(--pv-color-gray-6)",u="var(--pv-color-gray-4)"),{color:l,"&::placeholder":{color:i},"&:disabled":{cursor:"not-allowed",color:u}}}),De=a(y)({marginTop:"2px"}),Ee=a("label")({label:"TextField-label",marginBottom:"2px",display:"inline-block"}),A=t=>{const{className:o,size:l,placeholder:i,label:u,disabled:d=!1,noOptionsText:h,loading:v,loadingText:g,limitTags:c=-1,name:f,required:b,multiple:H=!1,readOnly:T,error:V,errorText:I,renderRoot:W,renderOption:K,renderTag:_,getLimitTagsText:U=e=>`${e} more`,groupBy:O,onCreate:P}=t,{id:$,value:s,searchValue:R,groupedOptions:x,getRootProps:J,getInputLabelProps:X,getInputProps:Y,getListboxProps:Q,getOptionProps:Z,getPopoverProps:ee,getTagProps:q,getOptionLabel:k,getClearProps:te}=be(t),{onChange:L,...D}=Y(),{onClick:re}=te(),oe=J(),p=ee(),E=e=>{if(e.which!==229)switch(e.key){case"Tab":{p.open&&p.onClose(e);break}case"Escape":e.preventDefault(),p.onClose(e);break;case"Enter":e.preventDefault(),P&&!x.length&&P(e,R),p.onKeyDown(e);break;default:p.onKeyDown(e)}},ae=(e,n)=>r.jsx(Pe,{...e,inGroup:!!O,children:k(n)}),le=e=>r.jsxs("li",{children:[r.jsx(Ie,{variant:"c1",color:"gray-10",children:e.group}),r.jsx(Oe,{children:e.children})]},e.key),ne=_||((e,n)=>r.jsx(qe,{...e,color:"secondary",variant:"contained",size:l,disabled:d,children:k(n)})),ie=(e,n)=>{const m=q(e,n);return ne(m,e)},S=(()=>{if(!s||Array.isArray(s)&&s.length===0)return null;if(Array.isArray(s)){const e=s.length>c&&c!==-1&&!p.open?s.length-c:0,n=e>0?s.slice(0,c):s;return r.jsxs(r.Fragment,{children:[n.map(ie),!!e&&r.jsx(Le,{variant:"c2",color:"gray-9",children:U(e)})]})}return k(s)})(),w=S===null,se=Te(p.onClose),de=({ref:e,...n},m)=>r.jsxs(we,{"aria-invalid":V||void 0,"aria-placeholder":w||void 0,size:l,disabled:d,ref:e,component:"label",isHasClearIcon:!w&&!T,children:[H?r.jsxs(r.Fragment,{children:[w?null:S,r.jsx(B,{...D,...n,noWrap:!0,component:"input",type:"text",variant:l==="small"?"c1":"b3",placeholder:i,readOnly:T,onChange:L,onKeyDown:E})]}):r.jsx(B,{...D,...n,noWrap:!0,component:"input",type:"text",value:R||S||"",variant:l==="small"?"c1":"b3",placeholder:i,readOnly:T,onChange:L,onKeyDown:E}),r.jsxs(Ce,{children:[!w&&!T?r.jsx(Ae,{role:"button",title:"clear","aria-disabled":d,onClick:re}):null,r.jsx(ke,{role:"button",title:"open","aria-disabled":d,"aria-hidden":!0,open:p.open})]}),r.jsx(Se,{type:"text",value:w?"":JSON.stringify(m),tabIndex:-1,"aria-hidden":"true",disabled:d,autoComplete:"off",id:$,name:f,required:b,readOnly:T,onChange:()=>{}})]}),pe=K||ae,ue=W||de,z=(e,n)=>{const m=Z(e,n);return pe(m,e)};return r.jsxs("div",{className:o,children:[u&&r.jsx(Ee,{...X(),children:r.jsx(y,{component:"span",variant:"c2",color:"gray-10",children:u})}),ue({...oe,disabled:d},s,q),V&&I&&r.jsx(De,{variant:"c2",color:"wrong",children:I}),r.jsx(Re,{placement:"bottom-start",allowUseSameWidth:!0,...p,tabIndex:-1,children:r.jsxs("div",{ref:se,children:[v&&x.length===0&&r.jsx(N,{children:typeof g=="string"?r.jsx(y,{variant:"b2",color:"gray-10",children:g}):g}),x.length===0&&!v&&r.jsx(N,{children:typeof h=="string"?r.jsx(y,{variant:"b2",color:"gray-10",children:h}):h}),x.length>0&&r.jsx(Ve,{...Q(),children:x.map((e,n)=>O&&"options"in e?le({key:e.key,group:e.group,children:e.options.map((m,ce)=>z(m,e.index+ce))}):z(e,n))})]})})]})};A.defaultProps={noOptionsText:"No options",loading:!1,loadingText:"Loading...",required:!1,allowCreateOption:!1,size:"medium"};try{A.displayName="Autocomplete",A.__docgenInfo={description:"",displayName:"Autocomplete",props:{id:{defaultValue:null,description:`This prop is used to help implement the accessibility logic.
If you don't provide an id it will fall back to a randomly generated one.`,name:"id",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"Array of options.",name:"options",required:!0,type:{name:"readonly T[]"}},defaultValue:{defaultValue:null,description:"The default value. Use when the component is not controlled.",name:"defaultValue",required:!1,type:{name:"AutocompleteValue<T, Multiple>"}},value:{defaultValue:null,description:"The value of the select.",name:"value",required:!1,type:{name:"AutocompleteValue<T, Multiple>"}},disableCloseOnSelect:{defaultValue:null,description:"If `true`, the popup won't close when a value is selected.",name:"disableCloseOnSelect",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"If `true`, `value` must be an array and the menu will support multiple selections.",name:"multiple",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:`It prevents the user from changing the value of
the field (not from interacting with the field).`,name:"readOnly",required:!1,type:{name:"boolean"}},popoverProps:{defaultValue:null,description:"Props applied to the `Popover` element.",name:"popoverProps",required:!1,type:{name:'Omit<HTMLAttributes<HTMLDivElement>, "children">'}},groupBy:{defaultValue:null,description:"If provided, the options will be grouped under the returned string.",name:"groupBy",required:!1,type:{name:"(option: T) => string"}},getOptionLabel:{defaultValue:null,description:"Used to determine the string value for a given option. It's used to fill the input.",name:"getOptionLabel",required:!1,type:{name:"(option: T) => string"}},getOptionKey:{defaultValue:null,description:"Used to determine the key value for a given option.",name:"getOptionKey",required:!1,type:{name:"(option: T) => string"}},filterOptions:{defaultValue:null,description:"A filter function that determines the options that are eligible.",name:"filterOptions",required:!1,type:{name:"AutocompleteFilterOptionsType<T, Multiple>"}},onClose:{defaultValue:null,description:"Callback fired when the popup requests to be closed.",name:"onClose",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>) => void"}},onOpen:{defaultValue:null,description:"Callback fired when the popup requests to be opened.",name:"onOpen",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>) => void"}},onChange:{defaultValue:null,description:"Callback fired when the value changes.",name:"onChange",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, value: AutocompleteValue<T, Multiple>, details: AutocompleteChangeDetails<T>, reason: AutocompleteChangeReason) => void"}},onInputChange:{defaultValue:null,description:"Callback fired when the input value changes.",name:"onInputChange",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, value: string) => void"}},className:{defaultValue:null,description:"The className of the component.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"The size of the root component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},placeholder:{defaultValue:null,description:"The short hint displayed in the `input` before the user enters a value.",name:"placeholder",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The label content.",name:"label",required:!1,type:{name:"string"}},noOptionsText:{defaultValue:{value:"No options"},description:"Text to display when there are no options.",name:"noOptionsText",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:{value:"false"},description:"If `true`, the component is in a loading state.\nThis shows the `loadingText` in place of suggestions (only if there are no\nsuggestions to show, e.g. `options` are empty).",name:"loading",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:{value:"Loading..."},description:"Text to display when in a loading state.",name:"loadingText",required:!1,type:{name:"ReactNode"}},limitTags:{defaultValue:null,description:"The maximum number of tags that will be visible when not focused.",name:"limitTags",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"If `true`, the autocomplete will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name attribute of the `input` element.",name:"name",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"If `true`, the `input` element is required.",name:"required",required:!1,type:{name:"boolean"}},allowCreateOption:{defaultValue:{value:"false"},description:"If `true`, the create button element will be shown.",name:"allowCreateOption",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"If `true`, the `input` will indicate an error.",name:"error",required:!1,type:{name:"boolean"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},renderRoot:{defaultValue:null,description:"Render the root element.",name:"renderRoot",required:!1,type:{name:"(props: object, value: AutocompleteValue<T, Multiple>, getTagProps: (option: T, index: number) => { key: number; 'data-tag-index': number; tabIndex: -1; onDelete?: (event: SyntheticEvent<...>) => void; }) => ReactNode"}},renderOption:{defaultValue:null,description:"Render the option, use `getOptionLabel` by default.",name:"renderOption",required:!1,type:{name:"(props: object, option: T) => ReactNode"}},renderTag:{defaultValue:null,description:"Render the tags elements.",name:"renderTag",required:!1,type:{name:"(props: object, option: T) => ReactNode"}},getLimitTagsText:{defaultValue:null,description:"The label to display when the tags are truncated (`limitTags`).",name:"getLimitTagsText",required:!1,type:{name:"(more: number) => string"}},onCreate:{defaultValue:null,description:"Callback fired when the create button clicked.",name:"onCreate",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, value: string) => void"}}}}}catch{}const ze=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"Léon: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014},{title:"Casablanca",year:1942},{title:"City Lights",year:1931},{title:"Psycho",year:1960},{title:"The Green Mile",year:1999},{title:"The Intouchables",year:2011},{title:"Modern Times",year:1936},{title:"Raiders of the Lost Ark",year:1981},{title:"Rear Window",year:1954},{title:"The Pianist",year:2002},{title:"The Departed",year:2006},{title:"Terminator 2: Judgment Day",year:1991},{title:"Back to the Future",year:1985},{title:"Whiplash",year:2014},{title:"Gladiator",year:2e3},{title:"Memento",year:2e3},{title:"The Prestige",year:2006},{title:"The Lion King",year:1994},{title:"Apocalypse Now",year:1979},{title:"Alien",year:1979},{title:"Sunset Boulevard",year:1950},{title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{title:"The Great Dictator",year:1940},{title:"Cinema Paradiso",year:1988},{title:"The Lives of Others",year:2006},{title:"Grave of the Fireflies",year:1988},{title:"Paths of Glory",year:1957},{title:"Django Unchained",year:2012},{title:"The Shining",year:1980},{title:"WALL·E",year:2008},{title:"American Beauty",year:1999},{title:"The Dark Knight Rises",year:2012},{title:"Princess Mononoke",year:1997},{title:"Aliens",year:1986},{title:"Oldboy",year:2003},{title:"Once Upon a Time in America",year:1984},{title:"Witness for the Prosecution",year:1957},{title:"Das Boot",year:1981},{title:"Citizen Kane",year:1941},{title:"North by Northwest",year:1959},{title:"Vertigo",year:1958},{title:"Star Wars: Episode VI - Return of the Jedi",year:1983},{title:"Reservoir Dogs",year:1992},{title:"Braveheart",year:1995},{title:"M",year:1931},{title:"Requiem for a Dream",year:2e3},{title:"Amélie",year:2001},{title:"A Clockwork Orange",year:1971},{title:"Like Stars on Earth",year:2007},{title:"Taxi Driver",year:1976},{title:"Lawrence of Arabia",year:1962},{title:"Double Indemnity",year:1944},{title:"Eternal Sunshine of the Spotless Mind",year:2004},{title:"Amadeus",year:1984},{title:"To Kill a Mockingbird",year:1962},{title:"Toy Story 3",year:2010},{title:"Logan",year:2017},{title:"Full Metal Jacket",year:1987},{title:"Dangal",year:2016},{title:"The Sting",year:1973},{title:"2001: A Space Odyssey",year:1968},{title:"Singin' in the Rain",year:1952},{title:"Toy Story",year:1995},{title:"Bicycle Thieves",year:1948},{title:"The Kid",year:1921},{title:"Inglourious Basterds",year:2009},{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}],at={title:"Components/Autocomplete",component:A,args:{options:ze,placeholder:"Select a movie",getOptionLabel:t=>t.title},tags:["autodocs"],argTypes:{options:{control:!1},getOptionLabel:{control:!1},defaultValue:{control:!1},value:{control:!1},filterOptions:{control:!1},popoverProps:{control:!1}}},C={};var F,M,G;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(G=(M=C.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};const lt=["Playground"];export{C as Playground,lt as __namedExportsOrder,at as default};
