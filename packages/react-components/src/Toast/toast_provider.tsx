import * as React from 'react';
import {
  ToastContext,
  ToastType,
  BaseToastType,
} from './toast_context';
import { ToastContainer, ToastContainerProps } from './toast_container';
import { Portal } from '../Portal';
import { Toast } from './toast';

type BaseProps = {
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
  const [toasts, setToasts] = React.useState<ToastType[]>([]);
  const [queue, setQueue] = React.useState<ToastType[]>([]);

  const addToast = React.useCallback((options: BaseToastType) => {
    const id = options.id || `${Date.now()}${Math.random()}`;
    const newToast: ToastType = {
      ...options,
      id,
      createdAt: Date.now(),
    };

    const inQueue = queue.findIndex((item: ToastType) => item.id === id);

    if (inQueue > -1) {
      return;
    }

    const inToasts = toasts.findIndex((item: ToastType) => item.id === id);

    if (inToasts > -1) {
      return;
    }

    if (toasts.length >= maxToasts) {
      setQueue((prevState) => ([
        ...prevState,
        newToast,
      ]));

      return;
    }

    setToasts((prevState) => ([
      ...prevState,
      newToast,
    ]));
  }, [toasts, queue]);

  const removeToast = React.useCallback((id: string) => {
    const inToasts = toasts.findIndex((item: ToastType) => item.id === id);

    if (inToasts > -1 && queue.length) {
      return setQueue((prevQueue) => {
        setToasts((prevToasts) => {
          const newList = [...prevToasts];

          newList.splice(inToasts, 1);
          newList.push(prevQueue[0]);

          return newList;
        });

        return prevQueue.slice(1, prevQueue.length);
      });
    }

    if (inToasts > -1) {
      return setToasts((prevToasts) => prevToasts.filter((item) => item.id !== id));
    }

    const inQueue = queue.findIndex((item: ToastType) => item.id === id);

    if (inQueue > -1) {
      return setQueue((prevQueue) => prevQueue.filter((item) => item.id !== id));
    }

    return undefined;
  }, [toasts, queue]);

  const removeAllToasts = () => {
    setToasts([]);
    setQueue([]);
  };

  const hasToasts = Boolean(toasts.length);

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
            {toasts.map((toast) => (
              <Toast
                key={toast.id}
                id={toast.id}
                onClose={removeToast}
                isClosable={toast.isClosable}
                duration={toast.duration}
                alertProps={{
                  disableIcon: toast.disableIcon,
                  variant: toast.variant,
                }}
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

ToastProvider.defaultProps = {
  maxToasts: 1,
};
