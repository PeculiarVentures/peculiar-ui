import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{n as r,t as i}from"./Box-QWCp5k_d.js";import{i as a,n as o,t as s}from"./Flex-718AmEtl.js";var c=e({AutoLayoutExample:()=>f,ColumnExample:()=>m,Playground:()=>d,VariableWidthExample:()=>p,__namedExportsOrder:()=>h,default:()=>u}),l,u,d,f,p,m,h,g=t((()=>{i(),s(),l=n(),u={title:`Components/Flex`,component:o,args:{children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{children:`1`}),(0,l.jsx)(a,{children:`2`}),(0,l.jsx)(a,{children:`3`})]})},argTypes:{children:{control:!1},component:{control:!1}}},d={},f=()=>(0,l.jsxs)(o,{gap:20,children:[(0,l.jsx)(a,{size:`grow`,component:r,background:`gray-5`,children:`size=grow`}),(0,l.jsx)(a,{component:r,background:`gray-8`,style:{width:`60%`},children:`size=60%`}),(0,l.jsx)(a,{size:`grow`,component:r,background:`gray-5`,children:`size=grow`})]}),p=()=>(0,l.jsxs)(o,{gap:20,children:[(0,l.jsx)(a,{size:`auto`,component:r,background:`gray-5`,children:`size=auto`}),(0,l.jsx)(a,{component:r,background:`gray-8`,style:{width:`60%`},children:`size=60%`}),(0,l.jsx)(a,{size:`grow`,component:r,background:`gray-5`,children:`size=grow`})]}),m=()=>(0,l.jsxs)(o,{gap:10,direction:`column`,children:[(0,l.jsx)(a,{component:r,background:`gray-5`,children:`1`}),(0,l.jsx)(a,{component:r,background:`gray-5`,children:`2`}),(0,l.jsx)(a,{component:r,background:`gray-5`,children:`3`})]}),d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => <FlexContainer gap={20}>
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
  </FlexContainer>`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <FlexContainer gap={20}>
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
  </FlexContainer>`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <FlexContainer gap={10} direction="column">
    <Flex component={Box} background="gray-5">
      1
    </Flex>
    <Flex component={Box} background="gray-5">
      2
    </Flex>
    <Flex component={Box} background="gray-5">
      3
    </Flex>
  </FlexContainer>`,...m.parameters?.docs?.source}}},h=[`Playground`,`AutoLayoutExample`,`VariableWidthExample`,`ColumnExample`]}));g();export{f as AutoLayoutExample,m as ColumnExample,d as Playground,p as VariableWidthExample,h as __namedExportsOrder,u as default,g as n,c as t};