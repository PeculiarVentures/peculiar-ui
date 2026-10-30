import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,r as n,u as r}from"./blocks-BkbI2scT.js";import{t as i}from"./jsx-runtime-BG4KOiPz.js";import{i as a,r as o}from"./react-Bg8UoiFE.js";import{r as s,t as c}from"./create_dialog.stories-DR9cA6BL.js";function l(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...a(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Hooks/createDialog`}),`
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

const useConfirmDialog = createDialog<IConfirmDialogParams>(({ openParams, close }) => {
  const handleConfirm = () => {
    openParams.onConfirm();
    close();
  };

  return (
    <Dialog
      open
      onClose={close}
    >
      <DialogTitle>Confirm Action</DialogTitle>
      <DialogContent dividers={false}>{openParams.message}</DialogContent>
      <DialogActions>
        <Button onClick={close}>Cancel</Button>
        <Button
          variant="contained"
          onClick={handleConfirm}
        >
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
`,(0,d.jsx)(n,{of:c})]})}function u(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=i(),o(),t(),s()})))()}f();export{u as default};