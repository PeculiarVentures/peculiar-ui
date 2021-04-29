import * as React from 'react';
import { css, cx } from '../styles';
import { Typography } from '../Typography';

type BaseProps = {
  /**
   * The content of the component.
   */
  children: React.ReactNode;
  /**
   * If `true`, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * The variant to use.
   */
  variant?: (
    'primary' |
    'secondary' |
    'tertiary' |
    'wrong'
  );
  /**
   * The size of the button.
   */
  size?: (
    'small' |
    'medium' |
    'large'
  );
  /**
   * The className of the component.
   */
  className?: string;
  dataTestId?: string;
};

export type ButtonBaseProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const stylesBase = () => css({
  label: 'ButtonBase',
  fontFamily: 'inherit',
  outline: 'none',
  cursor: 'pointer',
  boxSizing: 'border-box',
  border: '1px solid transparent',
  transition: 'background-color 200ms, color 200ms, box-shadow 200ms, border-color 200ms',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  '&:disabled': {
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
});

const stylesVariantPrimary = () => css({
  label: 'primary',
  color: 'var(--pv-color-white)',
  backgroundColor: 'var(--pv-color-primary)',
  boxShadow: 'var(--pv-shadow-light-low)',
  '&:not(:disabled)': {
    '&:hover': {
      backgroundColor: 'var(--pv-color-primary-tint-1)',
    },
    '&:focus': {
      backgroundColor: 'var(--pv-color-primary-tint-2)',
    },
    '&:active': {
      backgroundColor: 'var(--pv-color-primary-tint-2)',
      boxShadow: 'var(--pv-shadow-light-medium)',
    },
  },
  '&:disabled': {
    color: 'var(--pv-color-gray-8)',
    backgroundColor: 'var(--pv-color-gray-4)',
  },
});

const stylesVariantSecondary = () => css({
  label: 'secondary',
  color: 'var(--pv-color-black)',
  backgroundColor: 'transparent',
  borderColor: 'var(--pv-color-gray-8)',
  '&:not(:disabled)': {
    '&:hover': {
      backgroundColor: 'var(--pv-color-gray-3)',
    },
    '&:focus': {
      backgroundColor: 'var(--pv-color-gray-4)',
    },
    '&:active': {
      backgroundColor: 'var(--pv-color-gray-5)',
    },
  },
  '&:disabled': {
    color: 'var(--pv-color-gray-7)',
  },
});

const stylesVariantWrong = () => css({
  label: 'wrong',
  color: 'var(--pv-color-white)',
  backgroundColor: 'var(--pv-color-wrong)',
  boxShadow: 'var(--pv-shadow-light-low)',
  '&:not(:disabled)': {
    '&:hover': {
      backgroundColor: 'var(--pv-color-wrong-tint-1)',
    },
    '&:focus': {
      backgroundColor: 'var(--pv-color-wrong-tint-2)',
    },
    '&:active': {
      backgroundColor: 'var(--pv-color-wrong-tint-2)',
      boxShadow: 'var(--pv-shadow-light-medium)',
    },
  },
  '&:disabled': {
    color: 'var(--pv-color-gray-8)',
    backgroundColor: 'var(--pv-color-gray-4)',
  },
});

const stylesVariantTertiary = () => css({
  label: 'tertiary',
  color: 'var(--pv-color-secondary)',
  backgroundColor: 'transparent',
  '&:not(:disabled)': {
    '&:hover': {
      backgroundColor: 'var(--pv-color-secondary-tint-5)',
    },
    '&:focus': {
      backgroundColor: 'var(--pv-color-secondary-tint-4)',
    },
    '&:active': {
      backgroundColor: 'var(--pv-color-secondary-tint-3)',
    },
  },
  '&:disabled': {
    color: 'var(--pv-color-gray-7)',
  },
});

export const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>((props, ref) => {
  const {
    variant,
    size,
    className,
    children,
    dataTestId,
    type = 'button',
    ...other
  } = props;

  return (
    <button
      {...other}
      ref={ref}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={cx({
        [stylesBase()]: true,
        [stylesVariantPrimary()]: variant === 'primary',
        [stylesVariantSecondary()]: variant === 'secondary',
        [stylesVariantWrong()]: variant === 'wrong',
        [stylesVariantTertiary()]: variant === 'tertiary',
        [className]: !!className,
      })}
      data-testid={dataTestId}
    >
      <Typography
        variant={size === 'small' ? 'btn2' : 'btn1'}
      >
        {children}
      </Typography>
    </button>
  );
});

ButtonBase.displayName = 'ButtonBase';

ButtonBase.defaultProps = {};
