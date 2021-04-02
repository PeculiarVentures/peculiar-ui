import * as React from 'react';
import { Modal } from '../Modal';
import { Slide } from '../Slide';
import { Box } from '../Box';
import { css, cx } from '../styles';

type BaseProps = {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * If `true`, the component is shown.
   */
  open?: boolean;
  className?: string;
  /**
   * The duration for the transition, in milliseconds.
   */
  transitionDuration?: number;
  /**
   * Callback fired when the component requests to be closed.
   */
  onClose?: () => void;
  dataTestId?: string;
};

type DrawerProps = BaseProps & React.HTMLAttributes<HTMLDivElement>;

const stylesBase = () => css({
  label: 'Drawer',
  width: '270px',
  height: '100%',
  position: 'fixed',
  top: 0,
  right: 0,
  overflowY: 'auto',
});

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const {
    children,
    className,
    open,
    transitionDuration,
    onClose,
    dataTestId,
    ...other
  } = props;

  return (
    <Modal
      ref={ref}
      open={open}
      transitionDuration={transitionDuration}
      onBackdropClick={onClose}
      dataTestId={dataTestId}
    >
      <Slide
        in={open}
        timeout={transitionDuration}
      >
        <Box
          {...other}
          background="white"
          className={cx({
            [stylesBase()]: true,
            [className]: !!className,
          })}
        >
          {children}
        </Box>
      </Slide>
    </Modal>
  );
});

Drawer.displayName = 'Drawer';

Drawer.defaultProps = {
  open: false,
};
