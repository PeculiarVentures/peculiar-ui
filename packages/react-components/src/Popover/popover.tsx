import React from 'react';
import styled from '@emotion/styled';
import {
  usePopper, PopperProps, Modifier,
} from 'react-popper';
import { Modal, TModalProps } from '../Modal';
import { Fade } from '../Fade';

interface IBaseProps {
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
  onClose?: (event: React.SyntheticEvent) => void;
  /**
   * Props applied to the `Modal` element.
   */
  modalProps?: Partial<TModalProps>;
  /**
   * Make your popover the same width as the reference.
   */
  allowUseSameWidth?: boolean;
};

export type TPopoverProps = IBaseProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

/**
 * Styles.
 */
const PopoverRoot = styled('div')(
  {
    outline: 0,
    maxWidth: 'calc(100% - 32px)',
    minWidth: '16px',
    maxHeight: 'calc(100% - 32px)',
    minHeight: '16px',
    borderRadius: '4px',
  },
  (props) => {
    const isDark = props.theme.mode === 'dark';
    const backgroundColor: string = isDark
      ? 'var(--pv-color-gray-3)'
      : 'var(--pv-color-white)';
    const boxShadow: string = isDark
      ? 'var(--pv-shadow-dark-medium)'
      : 'var(--pv-shadow-light-low)';

    return {
      boxShadow,
      backgroundColor,
    };
  },
);
/**
 *
 */

export const Popover = React.forwardRef<HTMLDivElement, TPopoverProps>((props, ref) => {
  const {
    open,
    children,
    anchorEl,
    placement,
    modalProps,
    allowUseSameWidth,
    onClose,
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
        state.styles.popper.width = `${state.rects.reference.width}px`;
      },
      effect: ({ state }) => {
        // @ts-expect-error: TypeScript may not recognize the style property
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
      backdropProps={{
        invisible: true,
      }}
      onClose={onClose}
    >
      <Fade
        in={open}
        ref={setPopperElement}
      >
        <PopoverRoot
          {...other}
          tabIndex={-1}
          style={styles.popper}
          {...attributes.popper}
        >
          {children}
        </PopoverRoot>
      </Fade>
    </Modal>
  );
});

Popover.displayName = 'Popover';

Popover.defaultProps = {
  placement: 'bottom-end',
  allowUseSameWidth: false,
};
