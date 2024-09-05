import{j as n}from"./jsx-runtime-DtaoT6pD.js";import{r as _}from"./index-OjgoNOWw.js";import{n as k}from"./emotion-styled.browser.esm-jsqElTi7.js";import{B as o}from"./box-Qz44njHh.js";const C=/^(as|direction|wrap|gap|align|justify)$/,V=k("div",{shouldForwardProp:e=>!C.test(e)})(e=>({minWidth:"0px",...e.size==="auto"&&{flex:"0 0 auto",maxWidth:"none",width:"auto"},...e.size==="grow"&&{flexBasis:"0px",flexGrow:1,maxWidth:"100%"},...!e.size&&{flexGrow:0,flexBasis:"auto"}})),a=_.forwardRef((e,c)=>{const{component:d,...u}=e,p=d||"div";return n.jsx(V,{as:p,ref:c,...u})});a.displayName="Flex";a.defaultProps={};try{a.displayName="Flex",a.__docgenInfo={description:"",displayName:"Flex",props:{component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!0,type:{name:"ElementType<any>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"grow"'}]}},className:{defaultValue:null,description:"The className of the component.",name:"className",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}const q=/^(as|direction|wrap|gap|align|justify)$/,N=k("div",{shouldForwardProp:e=>!q.test(e)})(e=>({display:"flex",flexDirection:e.direction,flexWrap:e.wrap,gap:e.gap,alignItems:e.align,justifyContent:e.justify})),r=_.forwardRef((e,c)=>{const{component:d,...u}=e,p=d||"div";return n.jsx(N,{as:p,ref:c,...u})});r.displayName="FlexContainer";r.defaultProps={direction:"row"};try{r.displayName="FlexContainer",r.__docgenInfo={description:"",displayName:"FlexContainer",props:{component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!0,type:{name:"ElementType<any>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},direction:{defaultValue:{value:"row"},description:"Defines the `flex-direction` style property.",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"inherit"'},{value:'"initial"'},{value:'"-moz-initial"'},{value:'"revert"'},{value:'"unset"'},{value:'"column"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},wrap:{defaultValue:null,description:"Defines the `flex-wrap` style property.",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"initial"'},{value:'"wrap"'},{value:'"-moz-initial"'},{value:'"revert"'},{value:'"unset"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},gap:{defaultValue:null,description:"Defines the `gap` style property.",name:"gap",required:!1,type:{name:"string | number"}},align:{defaultValue:null,description:"Defines the `align-items` style property.",name:"align",required:!1,type:{name:"AlignItems"}},justify:{defaultValue:null,description:"Defines the `justify-content` style property.",name:"justify",required:!1,type:{name:"JustifyContent"}},className:{defaultValue:null,description:"The className of the component.",name:"className",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}const B={title:"Components/Flex",component:r,args:{children:n.jsxs(n.Fragment,{children:[n.jsx(a,{children:"1"}),n.jsx(a,{children:"2"}),n.jsx(a,{children:"3"})]})},argTypes:{children:{control:!1},component:{control:!1}}},t={},l=()=>n.jsxs(r,{gap:20,children:[n.jsx(a,{size:"grow",component:o,background:"gray-5",children:"size=grow"}),n.jsx(a,{component:o,background:"gray-8",style:{width:"60%"},children:"size=60%"}),n.jsx(a,{size:"grow",component:o,background:"gray-5",children:"size=grow"})]}),s=()=>n.jsxs(r,{gap:20,children:[n.jsx(a,{size:"auto",component:o,background:"gray-5",children:"size=auto"}),n.jsx(a,{component:o,background:"gray-8",style:{width:"60%"},children:"size=60%"}),n.jsx(a,{size:"grow",component:o,background:"gray-5",children:"size=grow"})]}),i=()=>n.jsxs(r,{gap:10,direction:"column",children:[n.jsx(a,{component:o,background:"gray-5",children:"1"}),n.jsx(a,{component:o,background:"gray-5",children:"2"}),n.jsx(a,{component:o,background:"gray-5",children:"3"})]});var m,g,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,f,h;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`() => <FlexContainer gap={20}>
    <Flex size="grow" component={Box} background="gray-5">
      size=grow
    </Flex>
    <Flex component={Box} background="gray-8" style={{
    width: '60%'
  }}>
      size=60%
    </Flex>
    <Flex size="grow" component={Box} background="gray-5">
      size=grow
    </Flex>
  </FlexContainer>`,...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var w,F,v;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`() => <FlexContainer gap={20}>
    <Flex size="auto" component={Box} background="gray-5">
      size=auto
    </Flex>
    <Flex component={Box} background="gray-8" style={{
    width: '60%'
  }}>
      size=60%
    </Flex>
    <Flex size="grow" component={Box} background="gray-5">
      size=grow
    </Flex>
  </FlexContainer>`,...(v=(F=s.parameters)==null?void 0:F.docs)==null?void 0:v.source}}};var j,z,b;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`() => <FlexContainer gap={10} direction="column">
    <Flex component={Box} background="gray-5">
      1
    </Flex>
    <Flex component={Box} background="gray-5">
      2
    </Flex>
    <Flex component={Box} background="gray-5">
      3
    </Flex>
  </FlexContainer>`,...(b=(z=i.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};const E=["Playground","AutoLayoutExample","VariableWidthExample","ColumnExample"],D=Object.freeze(Object.defineProperty({__proto__:null,AutoLayoutExample:l,ColumnExample:i,Playground:t,VariableWidthExample:s,__namedExportsOrder:E,default:B},Symbol.toStringTag,{value:"Module"}));export{l as A,i as C,r as F,D as S,s as V,a};
