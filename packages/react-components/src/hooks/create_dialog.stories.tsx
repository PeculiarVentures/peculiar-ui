import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '../Dialog';
import { Button } from '../Button';
import { createDialog } from './create_dialog';

const meta = {
  title: 'Hooks/createDialog',
  component: createDialog,
};

export default meta;

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
    <Dialog
      open
      onClose={close}
    >
      <DialogTitle>
        Confirm Action
      </DialogTitle>
      <DialogContent dividers={false}>
        {openParams.message}
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleConfirm}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export const ConfirmDialogExample = () => {
  const confirmDialog = useConfirmDialog();

  return (
    <>
      <Button
        onClick={() => {
          confirmDialog.open({
            message: 'Are you sure you want to proceed with this action?',
            onConfirm: () => {
              console.log('Action confirmed!');
            },
          });
        }}
      >
        Open Confirm Dialog
      </Button>
      {confirmDialog.dialog}
    </>
  );
};
