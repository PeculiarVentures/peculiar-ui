import{j as o}from"./jsx-runtime-xF634gn_.js";import{e as t}from"./index-C-7etoUd.js";import{B as a}from"./button-Bswhh1yh.js";import{D as f,a as C,b as D,c as x}from"./dialog_actions-CHM0zp4g.js";import"./emotion-styled.browser.esm-CnX2NPaZ.js";import"./emotion-element-f0de968e.browser.esm-DLlpVLeB.js";import"./button_base-CybQvLg0.js";import"./typography-DuoUhFsW.js";import"./fade-DHl67KFq.js";import"./use_merged_ref-ClS6-mGQ.js";import"./Transition-RLbX08wD.js";import"./index-dzNl0v_V.js";import"./index-DWe4bgYs.js";import"./circular_progress-21b84dtv.js";import"./emotion-react.browser.esm-vU_FEsrj.js";import"./modal-D5cgANfz.js";import"./portal-B1al-bvw.js";import"./use_enhanced_effect-B1RabiBj.js";import"./box-D_T88elW.js";import"./collapse-Dy8w92x5.js";import"./alert-Dyi6hiPe.js";import"./icon_button-CTDgRvsl.js";import"./tooltip-hJVBvmEi.js";import"./use_controllable-DXs9Mygf.js";import"./popper-BIqgRoih.js";import"./close_icon-DLJ9YGil.js";import"./flex_container-Cn7GkWK3.js";import"./close_circle_icon-Nt97DkBN.js";import"./warning_icon-D6xCuvw-.js";function p(n){return function(){const[i,m]=t.useState(null),u=t.useCallback(d=>{m(d)},[]),g=t.useCallback(()=>{m(null)},[]);return{dialog:i?t.createElement(n,{openParams:i,close:g}):null,open:u}}}const W={title:"Hooks/createDialog",component:p},h=p(({openParams:n,close:r})=>{const i=()=>{n.onConfirm(),r()};return o.jsxs(f,{open:!0,onClose:r,children:[o.jsx(C,{children:"Confirm Action"}),o.jsx(D,{dividers:!1,children:n.message}),o.jsxs(x,{children:[o.jsx(a,{onClick:r,children:"Cancel"}),o.jsx(a,{variant:"contained",color:"secondary",onClick:i,children:"Confirm"})]})]})}),e=()=>{const n=h();return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:()=>{n.open({message:"Are you sure you want to proceed with this action?",onConfirm:()=>{console.log("Action confirmed!")}})},children:"Open Confirm Dialog"}),n.dialog]})};var s,l,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
