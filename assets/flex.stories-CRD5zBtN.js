import{j as e}from"./jsx-runtime-xF634gn_.js";import{F as t,a as o}from"./flex_container-bh-6Sisg.js";import{B as r}from"./box-d-Kj0sXT.js";const z={title:"Components/Flex",component:t,args:{children:e.jsxs(e.Fragment,{children:[e.jsx(o,{children:"1"}),e.jsx(o,{children:"2"}),e.jsx(o,{children:"3"})]})},argTypes:{children:{control:!1},component:{control:!1}}},n={},a=()=>e.jsxs(t,{gap:20,children:[e.jsx(o,{size:"grow",component:r,background:"gray-5",children:"size=grow"}),e.jsx(o,{component:r,background:"gray-8",style:{width:"60%"},children:"size=60%"}),e.jsx(o,{size:"grow",component:r,background:"gray-5",children:"size=grow"})]}),s=()=>e.jsxs(t,{gap:20,children:[e.jsx(o,{size:"auto",component:r,background:"gray-5",children:"size=auto"}),e.jsx(o,{component:r,background:"gray-8",style:{width:"60%"},children:"size=60%"}),e.jsx(o,{size:"grow",component:r,background:"gray-5",children:"size=grow"})]}),c=()=>e.jsxs(t,{gap:10,direction:"column",children:[e.jsx(o,{component:r,background:"gray-5",children:"1"}),e.jsx(o,{component:r,background:"gray-5",children:"2"}),e.jsx(o,{component:r,background:"gray-5",children:"3"})]});var l,i,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(i=n.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var d,x,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`() => <FlexContainer gap={20}>
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
  </FlexContainer>`,...(m=(x=a.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var p,u,y;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`() => <FlexContainer gap={20}>
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
  </FlexContainer>`,...(y=(u=s.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var F,h,b;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`() => <FlexContainer gap={10} direction="column">
    <Flex component={Box} background="gray-5">
      1
    </Flex>
    <Flex component={Box} background="gray-5">
      2
    </Flex>
    <Flex component={Box} background="gray-5">
      3
    </Flex>
  </FlexContainer>`,...(b=(h=c.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const j=["Playground","AutoLayoutExample","VariableWidthExample","ColumnExample"],C=Object.freeze(Object.defineProperty({__proto__:null,AutoLayoutExample:a,ColumnExample:c,Playground:n,VariableWidthExample:s,__namedExportsOrder:j,default:z},Symbol.toStringTag,{value:"Module"}));export{a as A,c as C,C as S,s as V};
