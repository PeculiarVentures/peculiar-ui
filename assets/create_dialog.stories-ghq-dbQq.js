import{j as o}from"./jsx-runtime-xF634gn_.js";import{e as t}from"./index-C-7etoUd.js";import{B as m}from"./button-CfrAjz_j.js";import{D as f,a as C,b as D,c as x}from"./dialog_actions-C5mzmke4.js";import"./emotion-styled.browser.esm-CnX2NPaZ.js";import"./emotion-element-f0de968e.browser.esm-DLlpVLeB.js";import"./button_base-BAV5LCTl.js";import"./typography-U7XEbHq-.js";import"./fade-DHl67KFq.js";import"./use_merged_ref-ClS6-mGQ.js";import"./Transition-RLbX08wD.js";import"./index-dzNl0v_V.js";import"./index-DWe4bgYs.js";import"./circular_progress-21b84dtv.js";import"./emotion-react.browser.esm-vU_FEsrj.js";import"./modal-D5cgANfz.js";import"./portal-B1al-bvw.js";import"./use_enhanced_effect-B1RabiBj.js";import"./box-D_T88elW.js";import"./collapse-Dy8w92x5.js";import"./alert-BXqu0eFo.js";import"./icon_button-BOFeEVdx.js";import"./tooltip-jNQ7yRjq.js";import"./use_controllable-DXs9Mygf.js";import"./popper-BcHmvg9s.js";import"./usePopper-CdO4NS3w.js";import"./close_icon-DLJ9YGil.js";import"./flex_container-D6PgrUrU.js";import"./close_circle_icon-Nt97DkBN.js";import"./warning_icon-D6xCuvw-.js";function p(n){return function(){const[i,a]=t.useState(null),u=t.useCallback(d=>{a(d)},[]),g=t.useCallback(()=>{a(null)},[]);return{dialog:i?t.createElement(n,{openParams:i,close:g}):null,open:u}}}const X={title:"Hooks/createDialog",component:p},h=p(({openParams:n,close:r})=>{const i=()=>{n.onConfirm(),r()};return o.jsxs(f,{open:!0,onClose:r,children:[o.jsx(C,{children:"Confirm Action"}),o.jsx(D,{dividers:!1,children:n.message}),o.jsxs(x,{children:[o.jsx(m,{onClick:r,children:"Cancel"}),o.jsx(m,{variant:"contained",color:"secondary",onClick:i,children:"Confirm"})]})]})}),e=()=>{const n=h();return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:()=>{n.open({message:"Are you sure you want to proceed with this action?",onConfirm:()=>{console.log("Action confirmed!")}})},children:"Open Confirm Dialog"}),n.dialog]})};var s,l,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Y=["ConfirmDialogExample"];export{e as ConfirmDialogExample,Y as __namedExportsOrder,X as default};
