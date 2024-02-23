import React from 'react';
import { useToast, ToastProvider } from './index';

const meta = {
  title: 'Hooks/useToast',
  component: useToast,
};

export default meta;

const ToastStatusExample = () => {
  const { addToast, removeAllToasts } = useToast();
  const statuses = ['success', 'wrong', 'attention', 'pending'];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'baseline',
        gap: 10,
      }}
    >
      {statuses.map((status) => (
        <button
          key={status}
          type="button"
          onClick={() => {
            addToast({
              message: `${status} toast`,
              variant: status as any,
              disableIcon: false,
              isClosable: true,
            });
          }}
        >
          Show
          {' '}
          {status}
          {' '}
          toast
        </button>
      ))}
      <button
        type="button"
        onClick={removeAllToasts}
      >
        Remove all toasts
      </button>
    </div>
  );
};

export const DemoExample = () => (
  <ToastProvider maxToasts={4}>
    <ToastStatusExample />
  </ToastProvider>
);
