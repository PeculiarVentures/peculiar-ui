import * as React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';
import { Typography } from '../Typography';
import { CloseSmallIcon } from '../icons';

/**
 * Types.
 */
export interface ChipOwnProps {
  /**
   * The content of the component.
   */
  children: React.ReactNode;
  /**
   * If `true`, the chip will be disabled.
   */
  disabled?: boolean;
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon?: React.ElementType<any>;
  /**
   * The variant to use.
   */
  variant?: ('contained' | 'outlined');
  /**
   * The color of the component.
   */
  color?: ('secondary' | 'wrong' | 'default');
  /**
   * Element placed before the children.
   */
  startContent?: React.ReactElement;
  /**
   * Callback function fired when the delete icon is clicked. If set, the delete icon will be shown.
   */
  onDelete?: React.MouseEventHandler<HTMLElement>;
  /**
   * Callback function fired when the component is clicked. If set, the component will be clickable.
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export interface ChipTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & ChipOwnProps;
  defaultComponent: D;
}

export type ChipProps<
  D extends React.ElementType = ChipTypeMap['defaultComponent'],
> = OverrideProps<ChipTypeMap<{}, D>, D> & {
  component?: D;
};
/**
 *
 */

/**
 * Styles.
 */
const ChipRoot = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'color',
})<ChipOwnProps>((props) => ({
  display: 'inline-flex',
  maxWidth: '100%',
  fontFamily: 'inherit',
  outline: '0',
  boxSizing: 'border-box',
  borderRadius: 'var(--pv-size-base-3)',
  padding: '0 var(--pv-size-base-2)',
  height: 'var(--pv-size-base-6)',
  backgroundColor: 'transparent',
  transition: 'background-color 200ms, color 200ms, border-color 200ms, box-shadow 200ms',
  margin: '0 var(--pv-size-base)',
  cursor: 'default',
  border: '1px solid transparent',
  verticalAlign: 'middle',
  justifyContent: 'center',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  ...(props.disabled && {
    pointerEvents: 'none',
  }),
  ...(Boolean(props.onClick) && !props.disabled && {
    cursor: 'pointer',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
  }),
}), (props) => {
  const isDark = props.theme.mode === 'dark';
  let color: string = isDark
    ? 'var(--pv-color-white)'
    : 'var(--pv-color-black)';
  let borderColor: string;
  let backgroundColor: string;
  let backgroundColorHover: string;
  let backgroundColorFocus: string;
  let backgroundColorActive: string;
  let boxShadowActive: string;

  let colorDisabled: string;
  let backgroundColorDisabled: string;
  let borderColorDisabled: string;

  if (props.variant === 'outlined') {
    if (props.color === 'default') {
      borderColor = 'var(--pv-color-gray-7)';
      backgroundColorHover = 'var(--pv-color-gray-3)';
      backgroundColorFocus = 'var(--pv-color-gray-4)';
      backgroundColorActive = 'var(--pv-color-gray-5)';
    } else if (isDark) {
      color = `var(--pv-color-${props.color})`;
      borderColor = `var(--pv-color-${props.color}-shade-1)`;
      backgroundColorHover = `var(--pv-color-${props.color}-shade-4)`;
      backgroundColorFocus = `var(--pv-color-${props.color}-shade-3)`;
      backgroundColorActive = `var(--pv-color-${props.color}-shade-2)`;
    } else {
      color = `var(--pv-color-${props.color})`;
      borderColor = `var(--pv-color-${props.color}-tint-2)`;
      backgroundColorHover = `var(--pv-color-${props.color}-tint-5)`;
      backgroundColorFocus = `var(--pv-color-${props.color}-tint-4)`;
      backgroundColorActive = `var(--pv-color-${props.color}-tint-3)`;
    }

    if (isDark) {
      borderColorDisabled = 'var(--pv-color-gray-6)';
      colorDisabled = 'var(--pv-color-gray-5)';
    } else {
      borderColorDisabled = 'var(--pv-color-gray-8)';
      colorDisabled = 'var(--pv-color-gray-7)';
    }
  }

  if (props.variant === 'contained') {
    if (props.color === 'default') {
      if (isDark) {
        backgroundColor = 'var(--pv-color-gray-6)';
        backgroundColorHover = 'var(--pv-color-gray-5)';
        backgroundColorFocus = 'var(--pv-color-gray-4)';
        backgroundColorActive = 'var(--pv-color-gray-3)';
      } else {
        backgroundColor = 'var(--pv-color-gray-8)';
        backgroundColorHover = 'var(--pv-color-gray-7)';
        backgroundColorFocus = 'var(--pv-color-gray-6)';
        backgroundColorActive = 'var(--pv-color-gray-5)';
      }
    } else {
      color = `var(--pv-color-${props.color}-contrast)`;
      backgroundColor = `var(--pv-color-${props.color})`;
      backgroundColorHover = `var(--pv-color-${props.color}-tint-1)`;
      backgroundColorFocus = `var(--pv-color-${props.color}-tint-2)`;
      backgroundColorActive = `var(--pv-color-${props.color}-tint-2)`;
    }

    if (isDark) {
      boxShadowActive = 'var(--pv-shadow-dark-hight)';
      colorDisabled = 'var(--pv-color-gray-6)';
      backgroundColorDisabled = 'var(--pv-color-gray-5)';
    } else {
      boxShadowActive = 'var(--pv-shadow-light-medium)';
      colorDisabled = 'var(--pv-color-gray-8)';
      backgroundColorDisabled = 'var(--pv-color-gray-4)';
    }
  }

  return {
    borderColor,
    backgroundColor,
    color,
    ...(typeof props.onClick === 'function' && !props.disabled && {
      '&:hover': {
        backgroundColor: backgroundColorHover,
      },
      '&:focus-visible': {
        backgroundColor: backgroundColorFocus,
      },
      '&:active': {
        backgroundColor: backgroundColorActive,
        boxShadow: boxShadowActive,
      },
    }),
    ...(props.disabled && {
      color: colorDisabled,
      backgroundColor: backgroundColorDisabled,
      borderColor: borderColorDisabled,
    }),
  };
});

const ChipDeleteIcon = styled('span')({
  width: '24px',
  height: '24px',
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',
  transition: 'opacity 200ms',
  opacity: '0.6',
  flexShrink: 0,
  '&:hover': {
    opacity: '1',
  },
});

const ChipStartContent = styled('span')({
  marginRight: 'var(--pv-size-base)',
  display: 'inherit',
});

const ChipEndContent = styled('span')({
  marginLeft: 'var(--pv-size-base)',
  display: 'inherit',
});

/**
 *
 */

export const Chip = React.forwardRef<any, ChipProps>((props, ref) => {
  const {
    children,
    disabled,
    deleteIcon = CloseSmallIcon,
    startContent: startContentProp,
    component,
    onClick,
    onDelete,
    ...other
  } = props;
  const Component = component || 'div';
  const clickable = Boolean(onClick);

  const baseProps = {
    disabled,
    role: clickable ? 'button' : undefined,
    'aria-disabled': disabled ? true : undefined,
    tabIndex: clickable && !disabled ? 0 : undefined,
    onClick,
  };

  const handleDeleteClick = (event: React.MouseEvent<HTMLElement>) => {
    // Stop the event from bubbling up to the `Chip`.
    event.stopPropagation();

    if (onDelete) {
      onDelete(event);
    }
  };

  const startContent = startContentProp && (
    <ChipStartContent>
      {startContentProp}
    </ChipStartContent>
  );

  const endContent = onDelete && (
    <ChipEndContent>
      <ChipDeleteIcon
        aria-hidden
        as={deleteIcon}
        onClick={handleDeleteClick}
      />
    </ChipEndContent>
  );

  return (
    <ChipRoot
      as={Component}
      ref={ref}
      {...baseProps}
      {...other}
    >
      {startContent}
      <Typography
        variant="b3"
        component="span"
        color="inherit"
        noWrap
      >
        {children}
      </Typography>
      {endContent}
    </ChipRoot>
  );
}) as OverridableComponent<ChipTypeMap>;

Chip.displayName = 'Chip';

Chip.defaultProps = {
  disabled: false,
  variant: 'contained',
  color: 'secondary',
};
