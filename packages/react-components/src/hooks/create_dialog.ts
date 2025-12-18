import React from 'react';

interface IDialogRef<T> {
  openParams: T;
  close: () => void;
}

type TDialogComponent<T> = React.ComponentType<IDialogRef<T>>;

/**
 * Generic hook factory for managing dialog state.
 *
 * Accepts an inline arrow function component that receives IDialogRef<T> as props.
 *
 * @example
 * ```tsx
 * interface IDeleteDialogParams {
 *   itemId: string;
 *   onSuccess: VoidFunction;
 * }
 *
 * export const useDeleteDialog = createDialog<IDeleteDialogParams>(({
 *   openParams,
 *   close,
 * }) => {
 *   const handleSubmit = () => {
 *     fetch(`/api/items/${openParams.itemId}`, {
 *       method: 'DELETE',
 *     }).then(() => {
 *       openParams.onSuccess();
 *       close();
 *     }).catch(() => {
 *       // Handle error
 *     });
 *   };
 *
 *   return (
 *     <ConfirmationDialog=
 *         onClose={close}
 *         onSubmit={handleSubmit}
 *       >
 *         Are you sure you want to delete this item?
 *       </ConfirmationDialog>
 *   );
 * });
 *
 * // Usage:
 * function MyComponent() {
 *   const deleteDialog = useDeleteDialog();
 *
 *   return (
 *     <>
 *       <button
 *         onClick={() => {
 *           deleteDialog.open({
 *             itemId: '123',
 *             onSuccess: () => {
 *               console.log('Item deleted');
 *             },
 *           })
 *         }}
 *       >
 *         Delete
 *       </button>
 *       {deleteDialog.dialog}
 *     </>
 *   );
 * }
 * ```
 */
export function createDialog<T>(
  component: TDialogComponent<T>,
): () => { dialog: React.ReactNode | null; open: (params: T) => void } {
  return function useDialogHook() {
    const [openParams, setOpenParams] = React.useState<T | null>(null);

    const open = React.useCallback((params: T) => {
      setOpenParams(params);
    }, []);

    const close = React.useCallback(() => {
      setOpenParams(null);
    }, []);

    return {
      dialog: openParams
        ? React.createElement(component, {
            openParams,
            close,
          })
        : null,
      open,
    };
  };
}
