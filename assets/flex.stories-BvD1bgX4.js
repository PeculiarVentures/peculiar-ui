import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-BG4KOiPz.js";import{i as r,n as i,r as a,t as o}from"./flex_container-C8s6MPQ8.js";import{n as s,t as c}from"./box-tilIEdLB.js";var l=t({AutoLayoutExample:()=>p,ColumnExample:()=>h,Playground:()=>f,VariableWidthExample:()=>m,__namedExportsOrder:()=>g,default:()=>d}),u,d,f,p,m,h,g;function _(){return(_=e((()=>{s(),i(),r(),u=n(),d={title:`Components/Flex`,component:o,args:{children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a,{children:`1`}),(0,u.jsx)(a,{children:`2`}),(0,u.jsx)(a,{children:`3`})]})},argTypes:{children:{control:!1},component:{control:!1}}},f={},p=()=>(0,u.jsxs)(o,{gap:20,children:[(0,u.jsx)(a,{size:`grow`,component:c,background:`gray-5`,children:`size=grow`}),(0,u.jsx)(a,{component:c,background:`gray-8`,style:{width:`60%`},children:`size=60%`}),(0,u.jsx)(a,{size:`grow`,component:c,background:`gray-5`,children:`size=grow`})]}),m=()=>(0,u.jsxs)(o,{gap:20,children:[(0,u.jsx)(a,{size:`auto`,component:c,background:`gray-5`,children:`size=auto`}),(0,u.jsx)(a,{component:c,background:`gray-8`,style:{width:`60%`},children:`size=60%`}),(0,u.jsx)(a,{size:`grow`,component:c,background:`gray-5`,children:`size=grow`})]}),h=()=>(0,u.jsxs)(o,{gap:10,direction:`column`,children:[(0,u.jsx)(a,{component:c,background:`gray-5`,children:`1`}),(0,u.jsx)(a,{component:c,background:`gray-5`,children:`2`}),(0,u.jsx)(a,{component:c,background:`gray-5`,children:`3`})]}),g=[`Playground`,`AutoLayoutExample`,`VariableWidthExample`,`ColumnExample`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <FlexContainer gap={20}>
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
  </FlexContainer>`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <FlexContainer gap={20}>
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
  </FlexContainer>`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <FlexContainer gap={10} direction="column">
    <Flex component={Box} background="gray-5">
      1
    </Flex>
    <Flex component={Box} background="gray-5">
      2
    </Flex>
    <Flex component={Box} background="gray-5">
      3
    </Flex>
  </FlexContainer>`,...h.parameters?.docs?.source}}}})))()}export{_ as a,l as i,h as n,m as r,p as t};