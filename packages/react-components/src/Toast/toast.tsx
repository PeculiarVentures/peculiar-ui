import * as React from 'react';
import { Alert, AlertProps } from '../Alert';
import { Fade } from '../Fade';

type BaseProps = {
  /**
   * The `id` of the toast. Mostly used when you need to prevent duplicate.
   */
  id: string;
  /**
   * Callback fired when the component requests to be closed.
   */
  onClose: (id: string) => void;
  /**
   * The delay before the toast hides (in milliseconds). If set to `null`, toast will never dismiss.
   */
  duration?: number;
  /**
   * If `true`, toast will show a close button.
   */
  isClosable?: boolean;
  /**
   * Props applied to the `Alert` element.
   */
  alertProps?: Omit<AlertProps, 'children' | 'onClose'>;
};

export const Toast: React.FC<BaseProps> = (props) => {
  const {
    id,
    onClose,
    duration,
    isClosable,
    alertProps,
    children,
  } = props;

  const handleClose = () => {
    onClose(id);
  };

  React.useEffect(() => {
    if (duration !== null) {
      const timeout = window.setTimeout(
        handleClose,
        duration,
      );

      return () => {
        clearTimeout(timeout);
      };
    }

    return null;
  });

  return (
    <Fade in>
      <Alert
        {...alertProps}
        onClose={isClosable ? handleClose : undefined}
      >
        {children}
      </Alert>
    </Fade>
  );
};

Toast.displayName = 'Toast';

Toast.defaultProps = {
  duration: 5000,
};
