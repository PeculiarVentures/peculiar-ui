import * as React from 'react';
import { Portal } from '../Portal';
import {
  ToastContext,
  ToastType,
  BaseToastType,
} from './toast_context';
import { ToastContainer, ToastContainerProps } from './toast_container';
import { Toast } from './toast';

interface BaseProps {
  /**
   * The content of the component.
   */
  children: React.ReactNode;
  /**
   * Maximum snackbars that can be stacked on bottom of one another.
   */
  maxToasts?: number;
  /**
   * Props applied to the `ToastContainer` element.
   */
  toastContainerProps?: Omit<ToastContainerProps, 'children'>;
};

export const ToastProvider: React.FC<BaseProps> = (props) => {
  const {
    children,
    toastContainerProps,
    maxToasts = 1,
  } = props;
  const [state, setState] = React.useState<{ toasts: ToastType[]; queue: ToastType[] }>({
    toasts: [],
    queue: [],
  });

  const addToast = (options: BaseToastType) => {
    const id = options.id || `${Date.now()}${Math.random()}`;
    const newToast: ToastType = {
      ...options,
      id,
      createdAt: Date.now(),
    };

    setState((prevState) => {
      const inQueue = prevState.queue.findIndex((item: ToastType) => item.id === id);

      if (inQueue > -1) {
        return prevState;
      }

      const inToasts = prevState.toasts.findIndex((item: ToastType) => item.id === id);

      if (inToasts > -1) {
        return prevState;
      }

      if (prevState.toasts.length >= maxToasts) {
        return {
          toasts: prevState.toasts,
          queue: [
            ...prevState.queue,
            newToast,
          ],
        };
      }

      return {
        queue: prevState.queue,
        toasts: [
          ...prevState.toasts,
          newToast,
        ],
      };
    });
  };

  const removeToast = (id: string) => {
    setState((prevState) => {
      const inToasts = prevState.toasts.findIndex((item: ToastType) => item.id === id);

      if (inToasts > -1 && prevState.queue.length) {
        const newList = [...prevState.toasts];

        newList.splice(inToasts, 1);
        newList.push(prevState.queue[0]);

        return {
          queue: prevState.queue.slice(1, prevState.queue.length),
          toasts: newList,
        };
      }

      if (inToasts > -1) {
        return {
          queue: prevState.queue,
          toasts: prevState.toasts.filter((item) => item.id !== id),
        };
      }

      const inQueue = prevState.queue.findIndex((item: ToastType) => item.id === id);

      if (inQueue > -1) {
        return {
          toasts: prevState.toasts,
          queue: prevState.queue.filter((item) => item.id !== id),
        };
      }

      return prevState;
    });
  };

  const removeAllToasts = () => {
    setState({
      toasts: [],
      queue: [],
    });
  };

  const hasToasts = Boolean(state.toasts.length);

  return (
    <ToastContext.Provider
      value={{
        addToast,
        removeToast,
        removeAllToasts,
      }}
    >
      {children}
      {hasToasts && (
        <Portal>
          <ToastContainer {...toastContainerProps}>
            {state.toasts.map((toast) => (
              <Toast
                key={toast.id}
                id={toast.id}
                isClosable={toast.isClosable}
                duration={toast.duration}
                alertProps={{
                  disableIcon: toast.disableIcon,
                  variant: toast.variant,
                }}
                onClose={removeToast}
              >
                {toast.message}
              </Toast>
            ))}
          </ToastContainer>
        </Portal>
      )}
    </ToastContext.Provider>
  );
};

ToastProvider.displayName = 'ToastProvider';

ToastProvider.defaultProps = { maxToasts: 1 };
