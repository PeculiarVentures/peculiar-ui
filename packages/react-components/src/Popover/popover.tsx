import React from 'react';
import type { Placement } from '@popperjs/core';
import { usePopper } from 'react-popper';
import { Modal } from '../Modal';
import { Box } from '../Box';
import { Fade } from '../Fade';
import { css, cx } from '../styles';

type BaseProps = {
  /**
   * If `true`, the popover is visible.
   */
  open: boolean;
  /**
   * The content of the component.
   */
  children: React.ReactNode;
  /**
   * A HTML element, or a function that returns it. It's used to set the position of the popover
   */
  anchorEl: Element;
  /**
   * Popover placement.
   */
  placement?: Placement;
  /**
   * Callback fired when the component requests to be closed.
   */
  onClose?: () => void;
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   */
  disableEnforceFocus?: boolean;
};

type PopoverProps = BaseProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

const stylesBase = () => css({
  label: 'Popover',
  outline: 0,
  maxWidth: 'calc(100% - 32px)',
  minWidth: '16px',
  maxHeight: 'calc(100% - 32px)',
  minHeight: '16px',
  overflowX: 'hidden',
  overflowY: 'auto',
  boxShadow: 'var(--pv-shadow-light-low)',
});

export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
  const {
    open,
    children,
    anchorEl,
    placement,
    onClose,
    className,
    disableEnforceFocus,
    ...other
  } = props;

  const [popperElement, setPopperElement] = React.useState(null);
  const { styles, attributes } = usePopper(
    anchorEl,
    popperElement,
    { placement },
  );

  return (
    <Modal
      ref={ref}
      open={open}
      onClose={onClose}
      backdropProps={{
        invisible: true,
      }}
      disableEnforceFocus={disableEnforceFocus}
    >
      <Fade
        in={open}
        ref={setPopperElement}
      >
        <Box
          {...other}
          borderRadius={4}
          background="white"
          tabIndex={-1}
          style={styles.popper}
          {...attributes.popper}
          className={cx({
            [stylesBase()]: true,
            [className]: !!className,
          })}
        >
          {children}
        </Box>
      </Fade>
    </Modal>
  );
});

Popover.displayName = 'Popover';

Popover.defaultProps = {
  placement: 'bottom-end',
  disableEnforceFocus: false,
};
