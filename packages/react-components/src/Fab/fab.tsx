import * as React from 'react';
import { css, cx } from '../styles';
import { Typography } from '../Typography';

type BaseProps = {
  children: React.ReactNode;
  disabled?: boolean;
  color?: ('primary' | 'secondary');
  variant?: ('extended');
  className?: string;
  'data-testid'?: string;
};

type FabProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const stylesBase = () => css({
  label: 'Button',
  fontFamily: 'inherit',
  outline: 'none',
  cursor: 'pointer',
  boxSizing: 'border-box',
  borderRadius: '50%',
  border: '1px solid transparent',
  transition: 'background-color 200ms, color 200ms, box-shadow 200ms, border-color 200ms',
  '&:disabled': {
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
  height: '55px',
  width: '55px',
  padding: 0,
  overflow: 'hidden',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const stylesVariantExtended = () => css({
  borderRadius: '32px',
  height: '40px',
  width: 'auto',
  padding: '0 15px',
});

const stylesColorPrimary = () => css({
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

const stylesColorSecondary = () => css({
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

const stylesLabel = () => css({
  width: '100%',
  display: 'inherit',
  alignItems: 'inherit',
  justifyContent: 'inherit',
});

export const Fab = React.forwardRef<HTMLButtonElement, FabProps>((props, ref) => {
  const {
    variant,
    color,
    className,
    children,
    ...other
  } = props;

  return (
    <button
      ref={ref}
      type="button"
      className={cx({
        [stylesBase()]: true,
        [stylesVariantExtended()]: variant === 'extended',
        [stylesColorPrimary()]: color === 'primary',
        [stylesColorSecondary()]: color === 'secondary',
        [className]: !!className,
      })}
      {...other}
    >
      <Typography
        variant="btn1"
        className={stylesLabel()}
      >
        {children}
      </Typography>
    </button>
  );
});

Fab.displayName = 'Fab';

Fab.defaultProps = {
  disabled: false,
  color: 'primary',
};
