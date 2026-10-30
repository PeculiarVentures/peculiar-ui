import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-pByjoP3I.js";import{t as i}from"./jsx-runtime-BG4KOiPz.js";import{n as a,t as o}from"./button-DA6aXp38.js";import{a as s,c,i as l,n as u,o as d,r as f,s as p,t as m}from"./dialog_actions-Csfk2qqt.js";function h(e){return function(){let[t,n]=g.useState(null),r=g.useCallback(e=>{n(e)},[]),i=g.useCallback(()=>{n(null)},[]);return{dialog:t?g.createElement(e,{openParams:t,close:i}):null,open:r}}}var g;function _(){return(_=t((()=>{g=e(r(),1)})))()}var v=n({ConfirmDialogExample:()=>S,__namedExportsOrder:()=>C,default:()=>b}),y,b,x,S,C;function w(){return(w=t((()=>{a(),c(),d(),l(),u(),_(),y=i(),b={title:`Hooks/createDialog`,component:h},x=h(({openParams:e,close:t})=>(0,y.jsxs)(p,{open:!0,onClose:t,children:[(0,y.jsx)(s,{children:`Confirm Action`}),(0,y.jsx)(f,{children:e.message}),(0,y.jsxs)(m,{children:[(0,y.jsx)(o,{onClick:t,children:`Cancel`}),(0,y.jsx)(o,{variant:`contained`,color:`secondary`,onClick:()=>{e.onConfirm(),t()},children:`Confirm`})]})]})),S=()=>{let e=x();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o,{onClick:()=>{e.open({message:`Are you sure you want to proceed with this action?`,onConfirm:()=>{console.log(`Action confirmed!`)}})},children:`Open Confirm Dialog`}),e.dialog]})},C=[`ConfirmDialogExample`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}}})))()}export{v as n,w as r,S as t};