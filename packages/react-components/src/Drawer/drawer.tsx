import * as React from 'react';
import styled from '@emotion/styled';
import { Modal, ModalProps } from '../Modal';
import { Slide } from '../Slide';

/**
 * Types.
 */
interface DrawerOwnProps {
  /**
   * If `true`, the component is shown.
   */
  'open': boolean;
  /**
   * The content of the component.
   */
  'children': React.ReactNode;
  /**
   * The className of Drawer container.
   */
  'className'?: string;
  /**
   * The duration for the transition, in milliseconds.
   */
  'transitionDuration'?: number;
  /**
   * Props applied to the `Modal` element.
   */
  'modalProps'?: Partial<Omit<ModalProps, 'transitionDuration' | 'open' | 'onClose' | 'keepMounted'>>;
  /**
   * Callback fired when the component requests to be closed.
   */
  'onClose'?: () => void;
  'data-testid'?: string;
};

type DrawerProps = DrawerOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;
/**
 *
 */

/**
 * Styles.
 */
const DrawerPaper = styled('div')(
  (props) => ({
    width: '270px',
    height: '100%',
    position: 'fixed',
    top: 0,
    right: 0,
    overflowY: 'auto',
    outline: 'none',
    boxSizing: 'border-box',
    ...(props.theme.mode === 'dark'
      ? {
          backgroundColor: 'var(--pv-color-gray-2)',
        }
      : {
          backgroundColor: 'var(--pv-color-white)',
        }),
  }),
);
/**
 *
 */

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const {
    children,
    open,
    transitionDuration,
    modalProps = {},
    onClose,
    'data-testid': dataTestId,
    ...other
  } = props;

  return (
    <Modal
      {...modalProps}
      ref={ref}
      open={open}
      transitionDuration={transitionDuration}
      onClose={onClose}
      data-testid={dataTestId}
      keepMounted
    >
      <Slide
        in={open}
        timeout={transitionDuration}
      >
        <DrawerPaper
          tabIndex={-1}
          {...other}
        >
          {children}
        </DrawerPaper>
      </Slide>
    </Modal>
  );
});

Drawer.displayName = 'Drawer';

Drawer.defaultProps = {
  transitionDuration: 225,
};
