import * as React from 'react';
import { css, cx } from '../css';
import { Typography } from '../typography';

type BaseProps = {
  children: React.ReactNode;
  disabled?: boolean;
  variant?: ('primary' | 'secondary' | 'tertiary' | 'danger');
  size?: ('small' | 'medium' | 'large');
  className?: string;
};

type ButtonProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const stylesBase = css(
  {
    label: 'Button',
  },
  {
    fontFamily: 'inherit',
    outline: 'none',
    cursor: 'pointer',
    boxSizing: 'border-box',
    borderRadius: '4px',
    border: '1px solid transparent',
    transition: 'background-color 200ms, color 200ms, box-shadow 200ms, border-color 200ms',
    '&:disabled': {
      cursor: 'not-allowed',
      boxShadow: 'none',
    },
  },
);

const stylesSizeSmall = css(
  {
    label: 'small',
  },
  {
    height: 32,
    minWidth: 32,
    padding: '0 10px',
  },
);

const stylesSizeMedium = css(
  {
    label: 'medium',
  },
  {
    height: 35,
    minWidth: 35,
    padding: '0 15px',
  },
);

const stylesSizeLarge = css(
  {
    label: 'large',
  },
  {
    height: 40,
    minWidth: 40,
    padding: '0 20px',
  },
);

const stylesVariantPrimary = css(
  {
    label: 'primary',
  },
  {
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
  },
);

const stylesVariantSecondary = css(
  {
    label: 'secondary',
  },
  {
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
  },
);

const stylesVariantDanger = css(
  {
    label: 'danger',
  },
  {
    color: 'var(--pv-color-white)',
    backgroundColor: 'var(--pv-color-danger)',
    boxShadow: 'var(--pv-shadow-light-low)',
    '&:not(:disabled)': {
      '&:hover': {
        backgroundColor: 'var(--pv-color-danger-tint-1)',
      },
      '&:focus': {
        backgroundColor: 'var(--pv-color-danger-tint-2)',
      },
      '&:active': {
        backgroundColor: 'var(--pv-color-danger-tint-2)',
        boxShadow: 'var(--pv-shadow-light-medium)',
      },
    },
    '&:disabled': {
      color: 'var(--pv-color-gray-8)',
      backgroundColor: 'var(--pv-color-gray-4)',
    },
  },
);

const stylesVariantTertiary = css(
  {
    label: 'tertiary ',
  },
  {
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
  },
);

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref?: any) => {
  const {
    variant,
    size,
    className,
    children,
    ...other
  } = props;

  return (
    <button
      ref={ref}
      type="button"
      className={cx({
        [stylesBase]: true,
        [stylesSizeSmall]: size === 'small',
        [stylesSizeMedium]: size === 'medium',
        [stylesSizeLarge]: size === 'large',
        [stylesVariantPrimary]: variant === 'primary',
        [stylesVariantSecondary]: variant === 'secondary',
        [stylesVariantDanger]: variant === 'danger',
        [stylesVariantTertiary]: variant === 'tertiary',
      }, className)}
      {...other}
    >
      <Typography
        variant={size === 'small' ? 'btn2' : 'btn1'}
      >
        {children}
      </Typography>
    </button>
  );
});

Button.displayName = 'Button';

Button.defaultProps = {
  disabled: false,
  variant: 'primary',
  size: 'medium',
};
