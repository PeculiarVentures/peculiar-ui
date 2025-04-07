import React from 'react';
import styled from '@emotion/styled';
import {
  usePopper, PopperProps as PopperReactProps, Modifier,
} from 'react-popper';
import { Portal } from '../Portal';

/**
 * Types.
 */
interface IBaseProps {
  /**
   * If `true`, the popper is visible.
   */
  open: boolean;
  /**
   * Popper render node.
   */
  children: React.ReactNode | ((style: React.CSSProperties) => React.ReactNode);
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
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   */
  modifiers?: Modifier<any>[];
};

type TPopperProps = IBaseProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;
/**
 *
 */

/**
 * Styles.
 */
const PopperTooltip = styled('div')({});
/**
 *
 */

export const Popper: React.FC<TPopperProps> = (props) => {
  const {
    children,
    anchorEl,
    placement,
    open,
    disablePortal,
    allowUseSameWidth,
    modifiers,
    ...other
  } = props;
  const [popperElement, setPopperElement] = React.useState(null);
  const popperModifiers: Modifier<any>[] = React.useMemo(() => {
    let baseModifiers: Modifier<any>[] = [
      {
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
      },
    ];

    if (modifiers && modifiers.length) {
      baseModifiers = baseModifiers.concat(modifiers);
    }

    return baseModifiers;
  }, [allowUseSameWidth, modifiers]);

  const { styles, attributes } = usePopper(
    anchorEl,
    popperElement,
    {
      placement,
      modifiers: popperModifiers,
    },
  );

  const tooltip = (
    <PopperTooltip
      {...other}
      ref={setPopperElement}
      style={styles.popper}
      role="tooltip"
      {...attributes.popper}
    >
      {typeof children === 'function' ? children(styles.arrow) : children}
    </PopperTooltip>
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
