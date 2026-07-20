import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{n,t as r}from"./Button-Cs6tbpQE.js";import{n as i,r as a}from"./hooks-C4HDdmR9.js";import{ct as o,ft as s,mt as c,st as l,ut as u}from"./iframe-Bypf3L-5.js";var d,f,p,m,h,g=e((()=>{l(),r(),a(),d=t(),f={title:`Hooks/createDialog`,component:i},p=i(({openParams:e,close:t})=>(0,d.jsxs)(c,{open:!0,onClose:t,children:[(0,d.jsx)(s,{children:`Confirm Action`}),(0,d.jsx)(u,{dividers:!1,children:e.message}),(0,d.jsxs)(o,{children:[(0,d.jsx)(n,{onClick:t,children:`Cancel`}),(0,d.jsx)(n,{variant:`contained`,color:`secondary`,onClick:()=>{e.onConfirm(),t()},children:`Confirm`})]})]})),m=()=>{let e=p();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n,{onClick:()=>{e.open({message:`Are you sure you want to proceed with this action?`,onConfirm:()=>{console.log(`Action confirmed!`)}})},children:`Open Confirm Dialog`}),e.dialog]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const confirmDialog = useConfirmDialog();
  return <>
      <Button onClick={() => {
      confirmDialog.open({
        message: 'Are you sure you want to proceed with this action?',
        onConfirm: () => {
          console.log('Action confirmed!');
        }
      });
    }}>
        Open Confirm Dialog
      </Button>
      {confirmDialog.dialog}
    </>;
}`,...m.parameters?.docs?.source}}},h=[`ConfirmDialogExample`]}));g();export{m as ConfirmDialogExample,h as __namedExportsOrder,f as default,g as t};