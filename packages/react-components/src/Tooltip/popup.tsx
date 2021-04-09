import React, { useState } from 'react';
import { Placement } from '@popperjs/core';
import { usePopper } from 'react-popper';
import { Portal } from '../Portal';

type BaseProps = {
  children: React.ReactElement;
  anchorEl: React.ReactElement;
  placement?: Placement;
  open: boolean;
  disablePortal: boolean;
};

export const Popup: React.FC<BaseProps> = (props) => {
  const {
    children, anchorEl, placement, open, disablePortal,
  } = props;
  const referenceElement = React.useRef();
  const childNode = React.cloneElement(children, { ref: referenceElement });
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(
    referenceElement.current,
    popperElement,
    { placement },
  );
  const popper = (
    <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
      {anchorEl}
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
      {childNode}
      {open && popup()}
    </>
  );
};

Popup.displayName = 'Popup';

Popup.defaultProps = {
  placement: 'bottom',
};
