import React, { useState } from 'react';
import { Placement } from '@popperjs/core';
import { usePopper } from 'react-popper';
import { Portal } from '../Portal';

type BaseProps = {
  children: React.ReactNode;
  anchorEl?: Element;
  placement?: Placement;
  open?: boolean;
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
  const [popperElement, setPopperElement] = useState(null);
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
