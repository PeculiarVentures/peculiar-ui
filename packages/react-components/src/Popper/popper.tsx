import React from 'react';
import type { Placement } from '@popperjs/core';
import { usePopper } from 'react-popper';
import { Portal } from '../Portal';

type BaseProps = {
  /**
   * If `true`, the popper is visible.
   */
  open: boolean;
  /**
   * Popper render node.
   */
  children: React.ReactNode;
  /**
   * It's used to set the position of the popper.
   */
  anchorEl?: Element;
  /**
   * Popper placement.
   */
  placement?: Placement;
  /**
   * Disable the portal behavior. The children stay within it's parent DOM hierarchy.
   */
  disablePortal?: boolean;
};

type PopperProps = BaseProps & React.HTMLAttributes<HTMLDivElement>;

export const Popper: React.FC<PopperProps> = (props) => {
  const {
    children,
    anchorEl,
    placement,
    open,
    disablePortal,
    ...other
  } = props;
  const [popperElement, setPopperElement] = React.useState(null);
  const { styles, attributes } = usePopper(
    anchorEl,
    popperElement,
    { placement },
  );

  const tooltip = (
    <div
      {...other}
      ref={setPopperElement}
      style={styles.popper}
      role="tooltip"
      {...attributes.popper}
    >
      {children}
    </div>
  );

  const render = () => {
    if (!disablePortal) {
      return (
        <Portal>
          {tooltip}
        </Portal>
      );
    }

    return tooltip;
  };

  return open ? render() : null;
};

Popper.displayName = 'Popper';

Popper.defaultProps = {
  placement: 'bottom',
};
