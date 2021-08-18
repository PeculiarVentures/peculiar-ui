import * as React from 'react';
import { css, cx } from '../styles';
import { Typography } from '../Typography';
import { CloseSmallIcon } from '../icons';

type BaseProps = {
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
  color?: ('secondary' | 'wrong');
  /**
   * The className of the component.
   */
  className?: string;
  /**
   * Callback function fired when the delete icon is clicked. If set, the delete icon will be shown.
   */
  onDelete?: React.MouseEventHandler<HTMLElement>;
  /**
   * Callback function fired when the component is clicked. If set, the component will be clickable.
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
  'data-testid'?: string;
};

type ChipProps = BaseProps & React.HTMLAttributes<HTMLDivElement>;

const stylesBase = () => css({
  label: 'Chip',
  display: 'inline-flex',
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
});

const stylesDisabled = () => css({
  label: 'disabled',
  pointerEvents: 'none',
});

const stylesClickable = () => css({
  label: 'clickable',
  cursor: 'pointer',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
});

const stylesVariantContained = (props: ChipProps) => css({
  label: 'contained',
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
});

const stylesVariantOutlined = (props: ChipProps) => css({
  label: 'outlined',
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
});

const stylesDeleteAction = () => css({
  label: 'delete',
  width: '24px',
  height: '24px',
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',
  margin: '0px calc(var(--pv-size-base) * -1) 0 var(--pv-size-base)',
  transition: 'opacity 200ms',
  opacity: '0.6',
  '&:hover': {
    opacity: '1',
  },
});

export const Chip = React.forwardRef<HTMLDivElement, ChipProps>((props, ref) => {
  const {
    children,
    disabled,
    deleteIcon,
    variant,
    color,
    className,
    onClick,
    onDelete,
    ...other
  } = props;
  const clickable = Boolean(onClick);

  const baseProps = {
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

    const baseIconProps = {
      'aria-hidden': true,
      className: cx(stylesDeleteAction()),
      onClick: handleDeleteClick,
    };

    if (deleteIcon) {
      return React.cloneElement(deleteIcon, baseIconProps);
    }

    return (
      <CloseSmallIcon {...baseIconProps} />
    );
  };

  return (
    <div
      {...other}
      {...baseProps}
      ref={ref}
      className={cx({
        [stylesBase()]: true,
        [stylesDisabled()]: disabled,
        [stylesClickable()]: clickable && !disabled,
        [stylesVariantContained(props)]: variant !== 'outlined',
        [stylesVariantOutlined(props)]: variant === 'outlined',
        [className]: !!className,
      })}
    >
      <Typography
        variant="b3"
        component="span"
        color="inherit"
      >
        {children}
      </Typography>
      {renderDeleteAction()}
    </div>
  );
});

Chip.displayName = 'Chip';

Chip.defaultProps = {
  disabled: false,
  variant: 'contained',
  color: 'secondary',
};
