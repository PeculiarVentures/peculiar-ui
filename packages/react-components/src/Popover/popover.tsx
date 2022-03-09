import React from 'react';
import { usePopper, PopperProps, Modifier } from 'react-popper';
import { Modal, ModalProps } from '../Modal';
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
  placement?: PopperProps<unknown>['placement'];
  /**
   * Callback fired when the component requests to be closed.
   */
  onClose?: () => void;
  /**
   * Props applied to the `Modal` element.
   */
  modalProps?: Partial<ModalProps>;
  /**
   * Make your popover the same width as the reference.
   */
  allowUseSameWidth?: boolean;
};

export type PopoverProps = BaseProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

const stylesBase = () => css({
  label: 'Popover',
  outline: 0,
  maxWidth: 'calc(100% - 32px)',
  minWidth: '16px',
  maxHeight: 'calc(100% - 32px)',
  minHeight: '16px',
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
    modalProps,
    allowUseSameWidth,
    ...other
  } = props;

  const [popperElement, setPopperElement] = React.useState(null);
  const sameWidthModifier: Modifier<'sameWidth'> = React.useMemo(
    () => ({
      name: 'sameWidth',
      enabled: allowUseSameWidth,
      phase: 'beforeWrite',
      requires: ['computeStyles'],
      fn: ({ state }) => {
        // eslint-disable-next-line no-param-reassign
        state.styles.popper.width = `${state.rects.reference.width}px`;
      },
      effect: ({ state }) => {
        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`;
      },
    }),
    [],
  );
  const { styles, attributes } = usePopper(
    anchorEl,
    popperElement,
    {
      placement,
      modifiers: [sameWidthModifier],
    },
  );

  return (
    <Modal
      {...modalProps}
      ref={ref}
      open={open}
      onClose={onClose}
      backdropProps={{
        invisible: true,
      }}
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
  allowUseSameWidth: false,
};
