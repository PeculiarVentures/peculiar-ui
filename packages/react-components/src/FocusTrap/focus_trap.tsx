import * as React from 'react';
import FocusLock from 'react-focus-lock';

type BaseProps = {
  /**
   * A single child content element.
   */
  children: React.ReactElement;
  /**
   * If true, focus will be locked.
   */
  open: boolean;
};

export const FocusTrap: React.FC<BaseProps> = (props) => {
  const {
    children,
    open,
  } = props;

  return (
    <FocusLock
      disabled={!open}
      returnFocus
    >
      {children}
    </FocusLock>
  );
};

FocusTrap.displayName = 'FocusTrap';

FocusTrap.defaultProps = {};
