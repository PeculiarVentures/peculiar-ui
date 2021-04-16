import * as React from 'react';
import FocusTrapReact from 'focus-trap-react';

type BaseProps = {
  /**
   * A single child content element.
   */
  children: React.ReactElement;
  /**
   * If true, focus will be locked.
   */
  open: boolean;
  /**
   * If `true`, the trap focus will not automatically
   * shift focus to itself when it opens.
   */
  // TODO: Need to implement.
  disableAutoFocus?: boolean;
};

// TODO: Add handler for error from `FocusTrapReact` for container without interactive elements.
export const FocusTrap: React.FC<BaseProps> = (props) => {
  const {
    children,
    open,
  } = props;

  return (
    <FocusTrapReact
      active={open}
      focusTrapOptions={{
        clickOutsideDeactivates: true,
      }}
    >
      {children}
    </FocusTrapReact>
  );
};

FocusTrap.displayName = 'FocusTrap';

FocusTrap.defaultProps = {};
