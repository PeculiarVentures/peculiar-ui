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

type PopupProps = BaseProps & React.HTMLAttributes<HTMLDivElement>;

export const Popup: React.FC<PopupProps> = (props) => {
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

  const popper = (
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

  const popup = () => {
    if (!disablePortal) {
      return <Portal>{popper}</Portal>;
    }

    return popper;
  };

  return open ? popup() : null;
};

Popup.displayName = 'Popup';

Popup.defaultProps = {
  placement: 'bottom',
};
