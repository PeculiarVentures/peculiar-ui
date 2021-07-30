import * as React from 'react';
import { AlertProps } from '../Alert';

export type BaseToastType = {
  /**
   * The message of the toast.
   */
  message: string;
  /**
   * The status of the toast.
   */
  variant?: AlertProps['variant'];
  /**
   * If `true`, the toast start icon will be hidden.
   */
  disableIcon?: boolean;
  /**
   * If `true`, toast will show a close button.
   */
  isClosable?: boolean;
  /**
   * The delay before the toast hides (in milliseconds).
   * If set to `undefined`, toast will never dismiss.
   */
  duration?: number;
  /**
   * The `id` of the toast. Mostly used when you need to prevent duplicate.
   * By default, we generate a unique `id` for each toast.
   */
  id?: string;
};

export type ToastType = BaseToastType & {
  createdAt: number;
};

export type ToastContextType = {
  addToast: (options: BaseToastType) => void;
  removeToast: (id: string) => void;
  removeAllToasts: () => void;
};

const stub = (): never => {
  throw new Error('You forgot to wrap your component in <ToastProvider>.');
};

const initialContext: ToastContextType = {
  addToast: stub,
  removeToast: stub,
  removeAllToasts: stub,
};

export const ToastContext = React.createContext<ToastContextType>(initialContext);
