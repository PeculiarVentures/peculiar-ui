import * as React from 'react';
import { ToastContextType, ToastContext } from './toast_context';

export const useToast = (): ToastContextType => React.useContext(ToastContext);
