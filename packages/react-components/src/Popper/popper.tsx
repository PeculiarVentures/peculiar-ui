import React from 'react';
import { usePopper, PopperProps as PopperReactProps, Modifier } from 'react-popper';
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
  placement?: PopperReactProps<unknown>['placement'];
  /**
   * Disable the portal behavior. The children stay within it's parent DOM hierarchy.
   */
  disablePortal?: boolean;
  /**
   * Make your popper the same width as the reference.
   */
  allowUseSameWidth?: boolean;
};

type PopperProps = BaseProps & React.HTMLAttributes<HTMLDivElement>;

export const Popper: React.FC<PopperProps> = (props) => {
  const {
    children,
    anchorEl,
    placement,
    open,
    disablePortal,
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
  allowUseSameWidth: false,
};
