import React, { useState } from 'react';
import { Placement } from '@popperjs/core';
import { usePopper } from 'react-popper';
import { Portal } from '../Portal';

type BaseProps = {
  children: React.ReactElement;
  anchorEl: React.ReactElement;
  placement?: Placement;
  open?: boolean;
  disablePortal?: boolean;
};

type PopupProps = BaseProps & React.HTMLAttributes<HTMLElement>;

export const Popup: React.FC<PopupProps> = (props) => {
  const {
    children, anchorEl, placement, open, disablePortal, ...other
  } = props;
  const referenceElement = React.useRef();
  // TODO: Think about `ref` margins
  const anchorNode = React.cloneElement(anchorEl, { ref: referenceElement, ...other });
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(
    referenceElement.current,
    popperElement,
    { placement },
  );
  const popper = (
    <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
      {children}
    </div>
  );
  const popup = () => {
    if (!disablePortal) {
      return <Portal>{popper}</Portal>;
    }

    return popper;
  };

  return (
    <>
      {anchorNode}
      {open && popup()}
    </>
  );
};

Popup.displayName = 'Popup';

Popup.defaultProps = {
  placement: 'bottom',
};
