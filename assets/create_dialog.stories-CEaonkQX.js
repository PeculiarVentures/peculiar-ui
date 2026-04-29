import{j as o}from"./jsx-runtime-xF634gn_.js";import{e as t}from"./index-C-7etoUd.js";import{B as a}from"./button-CZby1Efw.js";import{D as f,a as C,b as D,c as x}from"./dialog_actions-DJ82qXIi.js";import"./emotion-styled.browser.esm-CyF2Egzp.js";import"./emotion-element-f0de968e.browser.esm-DLlpVLeB.js";import"./button_base-BNECpOAl.js";import"./typography-BRiAyRjM.js";import"./fade-BDSdpjve.js";import"./use_merged_ref-ClS6-mGQ.js";import"./Transition-D6I_MtWh.js";import"./index-DmZMPOxo.js";import"./index-BKjiqKB3.js";import"./circular_progress-CZgG3AeF.js";import"./emotion-react.browser.esm-vU_FEsrj.js";import"./modal-B_NVYtnJ.js";import"./portal-DuTPpHT8.js";import"./use_enhanced_effect-BDfR00fA.js";import"./box-CI25Pv03.js";import"./collapse-3pEpn_SB.js";import"./alert-DyMGNSFC.js";import"./icon_button-DQGpyUTZ.js";import"./tooltip-C0S-EZpA.js";import"./use_controllable-DXs9Mygf.js";import"./popper-kvlMNMdG.js";import"./close_icon-DLJ9YGil.js";import"./flex_container-BymB3eux.js";import"./close_circle_icon-Nt97DkBN.js";import"./warning_icon-D6xCuvw-.js";function p(n){return function(){const[i,m]=t.useState(null),u=t.useCallback(d=>{m(d)},[]),g=t.useCallback(()=>{m(null)},[]);return{dialog:i?t.createElement(n,{openParams:i,close:g}):null,open:u}}}const W={title:"Hooks/createDialog",component:p},h=p(({openParams:n,close:r})=>{const i=()=>{n.onConfirm(),r()};return o.jsxs(f,{open:!0,onClose:r,children:[o.jsx(C,{children:"Confirm Action"}),o.jsx(D,{dividers:!1,children:n.message}),o.jsxs(x,{children:[o.jsx(a,{onClick:r,children:"Cancel"}),o.jsx(a,{variant:"contained",color:"secondary",onClick:i,children:"Confirm"})]})]})}),e=()=>{const n=h();return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:()=>{n.open({message:"Are you sure you want to proceed with this action?",onConfirm:()=>{console.log("Action confirmed!")}})},children:"Open Confirm Dialog"}),n.dialog]})};var s,l,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const X=["ConfirmDialogExample"];export{e as ConfirmDialogExample,X as __namedExportsOrder,W as default};
