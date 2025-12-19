import{j as n}from"./jsx-runtime-xF634gn_.js";import{useMDXComponents as t}from"./index-o2KxC7bF.js";import{M as r,C as a}from"./index-DSbJ0lsZ.js";import{ConfirmDialogExample as m}from"./create_dialog.stories-ksBv83Qs.js";import"./index-C-7etoUd.js";import"./iframe-BLhLnx9E.js";import"./index-dzNl0v_V.js";import"./index-DWe4bgYs.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./button-DWh3nqiF.js";import"./emotion-styled.browser.esm-CnX2NPaZ.js";import"./emotion-element-f0de968e.browser.esm-DLlpVLeB.js";import"./button_base-BAV5LCTl.js";import"./typography-U7XEbHq-.js";import"./dialog_actions-OgZqo03t.js";import"./fade-DHl67KFq.js";import"./use_merged_ref-ClS6-mGQ.js";import"./Transition-RLbX08wD.js";import"./circular_progress-ClTK8PIK.js";import"./emotion-react.browser.esm-vU_FEsrj.js";import"./modal-Dmtq1sBO.js";import"./portal-B1al-bvw.js";import"./use_enhanced_effect-B1RabiBj.js";import"./box-BYP7GzWl.js";import"./collapse-Dy8w92x5.js";import"./alert-BzoAUclm.js";import"./icon_button-CkCtmefI.js";import"./tooltip-rXwcjHWA.js";import"./use_controllable-DXs9Mygf.js";import"./popper-O6M8mNeX.js";import"./usePopper-CdO4NS3w.js";import"./close_icon-DLJ9YGil.js";import"./flex_container-CrE31eS_.js";import"./close_circle_icon-Nt97DkBN.js";import"./warning_icon-D6xCuvw-.js";function i(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Hooks/createDialog"}),`
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
`,n.jsx(a,{of:m})]})}function q(e={}){const{wrapper:o}={...t(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(i,{...e})}):i(e)}export{q as default};
