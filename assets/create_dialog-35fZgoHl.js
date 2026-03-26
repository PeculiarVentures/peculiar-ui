import{j as n}from"./jsx-runtime-xF634gn_.js";import{useMDXComponents as t}from"./index-o2KxC7bF.js";import{M as r,C as a}from"./index-w3-1yfD5.js";import{ConfirmDialogExample as m}from"./create_dialog.stories-C18QpEgH.js";import"./index-C-7etoUd.js";import"./iframe-BrYl-our.js";import"./index-DmZMPOxo.js";import"./index-BKjiqKB3.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./button-46-UHHnj.js";import"./emotion-styled.browser.esm-CyF2Egzp.js";import"./emotion-element-f0de968e.browser.esm-DLlpVLeB.js";import"./button_base-CQzPZv1U.js";import"./typography-C0CbCCeg.js";import"./dialog_actions-jrkoW1Sw.js";import"./fade-BDSdpjve.js";import"./use_merged_ref-ClS6-mGQ.js";import"./Transition-D6I_MtWh.js";import"./circular_progress-CZgG3AeF.js";import"./emotion-react.browser.esm-vU_FEsrj.js";import"./modal-ClzRNwwL.js";import"./portal-DuTPpHT8.js";import"./use_enhanced_effect-BDfR00fA.js";import"./box-4Pc-N7Ra.js";import"./collapse-cIkUIiUc.js";import"./alert-CZ88-N6q.js";import"./icon_button-CbQ-u9u5.js";import"./tooltip-BJnonNJl.js";import"./use_controllable-DXs9Mygf.js";import"./popper-CBNtLXW5.js";import"./close_icon-DLJ9YGil.js";import"./flex_container-Cu1eE0SW.js";import"./close_circle_icon-Nt97DkBN.js";import"./warning_icon-D6xCuvw-.js";function i(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Hooks/createDialog"}),`
`,n.jsx(o.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(o.p,{children:["Generic hook factory for managing dialog state. The ",n.jsx(o.code,{children:"createDialog"})," function creates a reusable hook that manages the open/close state of a dialog component and provides parameters to the dialog when opened."]}),`
`,n.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,n.jsxs(o.p,{children:["The ",n.jsx(o.code,{children:"createDialog"})," function is a factory that accepts a component function and returns a hook. The component function receives ",n.jsx(o.code,{children:"openParams"})," (the parameters passed when opening the dialog) and a ",n.jsx(o.code,{children:"close"})," function."]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  createDialog,
} from '@peculiar/react-components';

interface IConfirmDialogParams {
  message: string;
  onConfirm: VoidFunction;
}

const useConfirmDialog = createDialog<IConfirmDialogParams>(({
  openParams,
  close,
}) => {
  const handleConfirm = () => {
    openParams.onConfirm();
    close();
  };

  return (
    <Dialog open onClose={close}>
      <DialogTitle>
        Confirm Action
      </DialogTitle>
      <DialogContent dividers={false}>
        {openParams.message}
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>Cancel</Button>
        <Button variant="contained" onClick={handleConfirm}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
});

// Usage in component
function MyComponent() {
  const confirmDialog = useConfirmDialog();

  return (
    <>
      <Button
        onClick={() => {
          confirmDialog.open({
            message: 'Are you sure?',
            onConfirm: () => {
              console.log('Confirmed!');
            },
          });
        }}
      >
        Open Dialog
      </Button>
      {confirmDialog.dialog}
    </>
  );
}
`})}),`
`,n.jsx(o.h2,{id:"demo",children:"Demo"}),`
`,n.jsx(a,{of:m})]})}function V(e={}){const{wrapper:o}={...t(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(i,{...e})}):i(e)}export{V as default};
