import * as React from 'react';
import { IToastContextType, ToastContext } from './toast_context';

export const useToast = (): IToastContextType => React.useContext(ToastContext);
