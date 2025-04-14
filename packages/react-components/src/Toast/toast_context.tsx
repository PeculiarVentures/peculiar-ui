import * as React from 'react';
import { TAlertProps } from '../Alert';

export interface IBaseToastType {
  /**
   * The message of the toast.
   */
  message: string;
  /**
   * The status of the toast.
   */
  variant?: TAlertProps['variant'];
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
   * If set to `null`, toast will never dismiss.
   */
  duration?: number | null;
  /**
   * The `id` of the toast. Mostly used when you need to prevent duplicate.
   * By default, we generate a unique `id` for each toast.
   */
  id?: string;
};

export type TToastType = IBaseToastType & {
  createdAt: number;
};

export interface IToastContextType {
  addToast: (options: IBaseToastType) => void;
  removeToast: (id: string) => void;
  removeAllToasts: () => void;
};

const stub = (): never => {
  throw new Error('You forgot to wrap your component in <ToastProvider>.');
};

const initialContext: IToastContextType = {
  addToast: stub,
  removeToast: stub,
  removeAllToasts: stub,
};

export const ToastContext = React.createContext<IToastContextType>(initialContext);
