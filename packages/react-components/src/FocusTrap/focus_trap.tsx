import React from 'react';
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
};

export const FocusTrap: React.FC<BaseProps> = (props) => {
  const {
    children,
    open,
  } = props;
  const fallbackRef = React.useRef(null);

  return (
    <>
      <div
        tabIndex={-1}
        ref={fallbackRef}
      />
      <FocusTrapReact
        active={open}
        focusTrapOptions={{
          clickOutsideDeactivates: true,
          fallbackFocus: () => fallbackRef.current,
        }}
      >
        {children}
      </FocusTrapReact>
    </>
  );
};

FocusTrap.displayName = 'FocusTrap';

FocusTrap.defaultProps = {};
