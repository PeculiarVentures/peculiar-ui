import React from 'react';
import { createFocusTrap } from 'focus-trap';
import { useMergedRef } from '../hooks';

interface BaseProps {
  /**
   * A single child content element.
   */
  children: React.ReactElement;
  /**
   * If true, focus will be locked.
   */
  open: boolean;
  /**
   * If `true`, the trap focus will not automatically shift focus
   * to first interactive element when it opens,
   * and replace it to the last focused element when it closes.
   */
  disableAutoFocus?: boolean;
};

export const FocusTrap: React.FC<BaseProps> = (props) => {
  const {
    children,
    open,
    disableAutoFocus,
  } = props;

  const rootRef = React.useRef(null);
  const multiRef = useMergedRef((children as any).ref, rootRef);

  React.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return undefined;
    }

    const focusTrap = createFocusTrap(rootRef.current, {
      clickOutsideDeactivates: false,
      allowOutsideClick: true,
      escapeDeactivates: false,
      fallbackFocus: () => rootRef.current || 'body',
      ...(disableAutoFocus && { initialFocus: () => rootRef.current }),
    });

    focusTrap.activate();

    return () => {
      focusTrap.deactivate({ returnFocus: true });
    };
  }, [open]);

  return React.cloneElement(children, { ref: multiRef });
};

FocusTrap.displayName = 'FocusTrap';

FocusTrap.defaultProps = {};
