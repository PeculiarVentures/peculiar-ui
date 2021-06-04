import * as React from 'react';
import { ToastProvider, useToast } from './index';

const Test = () => {
  const toast = useToast();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          toast.addToast({
            message: 'This is an default message!',
          });
        }}
      >
        Show default toast
      </button>
      <br />
      <button
        type="button"
        onClick={() => {
          toast.addToast({
            message: 'This is an error message!',
            isClosable: true,
            variant: 'wrong',
            disableIcon: false,
          });
        }}
      >
        Show error toast
      </button>
      <br />
      <button
        type="button"
        onClick={() => {
          toast.addToast({
            message: 'This is a warning message!',
            isClosable: true,
            variant: 'attention',
            disableIcon: false,
          });
        }}
      >
        Show attention toast
      </button>
      <br />
      <button
        type="button"
        onClick={() => {
          toast.addToast({
            message: 'This is a success message!',
            isClosable: true,
            variant: 'success',
            disableIcon: false,
          });
        }}
      >
        Show success toast
      </button>
      <br />
      <button
        type="button"
        onClick={() => {
          toast.addToast({
            message: 'This is an error message!',
            duration: null,
          });
        }}
      >
        Show never dismissed toast
      </button>
      <br />
      <button
        type="button"
        onClick={() => {
          toast.removeAllToasts();
        }}
      >
        Close all toasts
      </button>
    </>
  );
};

export const Playground = () => (
  <ToastProvider>
    <Test />
  </ToastProvider>
);

Playground.args = {};

export default {
  title: 'Components/Toast',
};
