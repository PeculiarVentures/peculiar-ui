import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{Bt as n,Nt as r,Wt as i,zt as a}from"./iframe-DgRRKy_j.js";import{t as o}from"./mdx-react-shim-D_JpUb7A.js";import{ConfirmDialogExample as s,t as c}from"./create_dialog.stories-KAQsEALj.js";function l(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Hooks/createDialog`}),`
`,(0,d.jsx)(t.h2,{id:`overview`,children:`Overview`}),`
`,(0,d.jsxs)(t.p,{children:[`Generic hook factory for managing dialog state. The `,(0,d.jsx)(t.code,{children:`createDialog`}),` function creates a reusable hook that manages the open/close state of a dialog component and provides parameters to the dialog when opened.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`createDialog`}),` function is a factory that accepts a component function and returns a hook. The component function receives `,(0,d.jsx)(t.code,{children:`openParams`}),` (the parameters passed when opening the dialog) and a `,(0,d.jsx)(t.code,{children:`close`}),` function.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import {
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
`,(0,d.jsx)(t.h2,{id:`demo`,children:`Demo`}),`
`,(0,d.jsx)(r,{of:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),n(),c()}))();export{u as default};