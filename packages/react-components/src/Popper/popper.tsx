import React from 'react';
import { usePopper, PopperProps as PopperReactProps, Modifier } from 'react-popper';
import { Portal } from '../Portal';
import { css, cx } from '../styles';

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
  /**
   * If `true`, adds arrow to popper.
   */
  arrow?: boolean;
  /**
   * The color of the arrow.
   */
  arrowColor?: ('gray-10' | 'white');
};

type PopperProps = BaseProps & React.HTMLAttributes<HTMLDivElement>;

/**
 * Styles.
 */
const styleArrow = (color?: 'gray-10' | 'white') => css({
  label: 'Arrow',
  position: 'absolute',
  width: 8,
  height: 8,
  background: `var(--pv-color-${color})`,
  visibility: 'hidden',
  '&:before': {
    position: 'absolute',
    width: 8,
    height: 8,
    background: 'inherit',
    visibility: 'visible',
    content: '""',
    transform: 'rotate(45deg)',
  },
});
const styleArrowPosition = () => css({
  '&[data-popper-placement^="top"] > [data-popper-arrow="true"]': {
    bottom: 11,
  },
  '&[data-popper-placement^="bottom"] > [data-popper-arrow="true"]': {
    top: 11,
  },
  '&[data-popper-placement^="left"] > [data-popper-arrow="true"]': {
    right: 11,
  },
  '&[data-popper-placement^="right"] > [data-popper-arrow="true"]': {
    left: 11,
  },
});
/**
 *
 */

export const Popper: React.FC<PopperProps> = (props) => {
  const {
    children,
    anchorEl,
    placement,
    open,
    disablePortal,
    allowUseSameWidth,
    arrow: arrowProp,
    className,
    arrowColor,
    ...other
  } = props;
  const [popperElement, setPopperElement] = React.useState(null);
  const [arrowElement, setArrowElement] = React.useState(null);
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
  const arrowModifier: Modifier<'arrow'> = {
    name: 'arrow',
    options: {
      element: arrowElement,
      padding: 6,
    },
  };
  const { styles, attributes } = usePopper(
    anchorEl,
    popperElement,
    {
      placement,
      modifiers: [sameWidthModifier, arrowModifier],
    },
  );

  const arrow = (
    <div
      className={cx({ [styleArrow(arrowColor)]: true })}
      data-popper-arrow
      ref={setArrowElement}
      style={styles.arrow}
    />
  );

  const tooltip = (
    <div
      {...other}
      ref={setPopperElement}
      style={styles.popper}
      role="tooltip"
      className={cx(className, { [styleArrowPosition()]: arrowProp })}
      {...attributes.popper}
    >
      {arrowProp ? arrow : null}
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
