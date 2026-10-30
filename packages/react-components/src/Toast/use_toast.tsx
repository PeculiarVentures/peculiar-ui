import * as React from 'react';
import type { IToastContextType } from './toast_context';
import { ToastContext } from './toast_context';

export const useToast = (): IToastContextType => React.useContext(ToastContext);
