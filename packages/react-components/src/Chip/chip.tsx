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
  deleteIcon?: React.ReactElement;
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
})<ChipOwnProps>({
  display: 'inline-flex',
  maxWidth: '100%',
  fontFamily: 'inherit',
  outline: '0',
  boxSizing: 'border-box',
  borderRadius: 'var(--pv-size-base-3)',
  padding: '0 var(--pv-size-base-2)',
  height: 'var(--pv-size-base-6)',
  backgroundColor: 'transparent',
  transition:
    'background-color 200ms, color 200ms, border-color 200ms, box-shadow 200ms',
  margin: '0 var(--pv-size-base)',
  cursor: 'default',
  border: '1px solid transparent',
  verticalAlign: 'middle',
  justifyContent: 'center',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
}, (props) => ({
  // stylesDisabled
  pointerEvents: props.disabled ? 'none' : 'auto',
}), (props) => Boolean(props.onClick) && !props.disabled && ({
  // stylesClickable
  cursor: 'pointer',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
}), (props) => props.color !== 'default' && props.variant === 'contained' && ({
  // stylesVariantContainedColorNotDefault
  backgroundColor: `var(--pv-color-${props.color})`,
  color: 'var(--pv-color-white)',
  ...(typeof props.onClick === 'function' && !props.disabled && {
    '&:hover': {
      backgroundColor: `var(--pv-color-${props.color}-tint-1)`,
    },
    '&:focus': {
      backgroundColor: `var(--pv-color-${props.color}-tint-2)`,
    },
    '&:active': {
      backgroundColor: `var(--pv-color-${props.color}-tint-2)`,
      boxShadow: 'var(--pv-shadow-light-medium)',
    },
  }),
  ...(props.disabled && {
    color: 'var(--pv-color-gray-8)',
    backgroundColor: 'var(--pv-color-gray-4)',
  }),
}), (props) => props.color === 'default' && props.variant === 'contained' && ({
  // stylesVariantContainedColorDefault
  backgroundColor: 'var(--pv-color-gray-4)',
  color: 'var(--pv-color-black)',
  ...(typeof props.onClick === 'function' && !props.disabled && {
    '&:hover': {
      backgroundColor: 'var(--pv-color-gray-7)',
    },
    '&:focus': {
      backgroundColor: 'var(--pv-color-gray-6)',
    },
    '&:active': {
      backgroundColor: 'var(--pv-color-gray-5)',
    },
  }),
  ...(props.disabled && {
    color: 'var(--pv-color-gray-8)',
    backgroundColor: 'var(--pv-color-gray-4)',
  }),
}), (props) => props.color !== 'default' && props.variant === 'outlined' && ({
  // stylesVariantOutlinedColorNotDefault
  backgroundColor: 'transparent',
  color: `var(--pv-color-${props.color})`,
  borderColor: `var(--pv-color-${props.color}-tint-2)`,
  ...(typeof props.onClick === 'function' && !props.disabled && {
    '&:hover': {
      backgroundColor: `var(--pv-color-${props.color}-tint-5)`,
    },
    '&:focus': {
      backgroundColor: `var(--pv-color-${props.color}-tint-4)`,
    },
    '&:active': {
      backgroundColor: `var(--pv-color-${props.color}-tint-3)`,
    },
  }),
  ...(props.disabled && {
    color: 'var(--pv-color-gray-8)',
    borderColor: 'var(--pv-color-gray-4)',
  }),
}), (props) => props.color === 'default' && props.variant === 'outlined' && ({
  // stylesVariantOutlinedColorDefault
  backgroundColor: 'transparent',
  color: 'var(--pv-color-gray-10)',
  borderColor: 'var(--pv-color-gray-6)',
  ...(typeof props.onClick === 'function' && !props.disabled && {
    '&:hover': {
      backgroundColor: 'var(--pv-color-gray-3)',
    },
    '&:focus': {
      backgroundColor: 'var(--pv-color-gray-4)',
    },
    '&:active': {
      backgroundColor: 'var(--pv-color-gray-5)',
    },
  }),
  ...(props.disabled && {
    color: 'var(--pv-color-gray-8)',
    borderColor: 'var(--pv-color-gray-4)',
  }),
}));

const ChipDeleteIcon = styled('span')({
  width: '24px',
  height: '24px',
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',
  margin: '0px calc(var(--pv-size-base) * -1) 0 var(--pv-size-base)',
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

  const renderDeleteAction = () => {
    if (!onDelete) {
      return null;
    }

    return (
      <ChipDeleteIcon
        aria-hidden
        as={deleteIcon as React.ElementType}
        onClick={handleDeleteClick}
      />
    );
  };

  const startContent = startContentProp && (
    <ChipStartContent>
      {startContentProp}
    </ChipStartContent>
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
      {renderDeleteAction()}
    </ChipRoot>
  );
}) as OverridableComponent<ChipTypeMap>;

Chip.displayName = 'Chip';

Chip.defaultProps = {
  disabled: false,
  variant: 'contained',
  color: 'secondary',
};
