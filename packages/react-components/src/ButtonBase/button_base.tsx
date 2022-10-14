import * as React from 'react';
import { forwardRef } from '../system';
import { css, cx, TypographyType } from '../styles';
import { Typography } from '../Typography';

export type ButtonBaseProps = {
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
    'contained' |
    'outlined' |
    'text'
  );
  /**
   * The variant of text to use.
   */
  textVariant?: TypographyType;
  /**
   * The color of the component.
   */
  color?: (
    'primary' |
    'secondary' |
    'wrong' |
    'white' |
    'default'
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
  'data-testid'?: string;
};

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
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  backgroundColor: 'transparent',
  padding: 0,
  textDecoration: 'none',
  '&:disabled': {
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
});

const stylesVariantTextColorDefault = () => css({
  color: 'var(--pv-color-black)',
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
});

const stylesVariantTextColorWhite = () => css({
  color: 'var(--pv-color-white)',
  '&:not(:disabled)': {
    '&:hover': {
      backgroundColor: 'var(--pv-color-gray-7)',
    },
    '&:focus': {
      backgroundColor: 'var(--pv-color-gray-8)',
    },
    '&:active': {
      backgroundColor: 'var(--pv-color-gray-9)',
    },
  },
});

const stylesVariantTextColor = (color: ButtonBaseProps['color']) => css({
  color: `var(--pv-color-${color})`,
  '&:not(:disabled)': {
    '&:hover': {
      backgroundColor: `var(--pv-color-${color}-tint-5)`,
    },
    '&:focus': {
      backgroundColor: `var(--pv-color-${color}-tint-4)`,
    },
    '&:active': {
      backgroundColor: `var(--pv-color-${color}-tint-3)`,
    },
  },
});

const stylesVariantText = () => css({
  '&:disabled': {
    color: 'var(--pv-color-gray-7)',
  },
});

const stylesVariantContainedColorDefault = () => css({
  backgroundColor: 'var(--pv-color-gray-8)',
  color: 'var(--pv-color-black)',
  '&:not(:disabled)': {
    '&:hover': {
      backgroundColor: 'var(--pv-color-gray-7)',
    },
    '&:focus': {
      backgroundColor: 'var(--pv-color-gray-6)',
    },
    '&:active': {
      backgroundColor: 'var(--pv-color-gray-5)',
      boxShadow: 'var(--pv-shadow-light-medium)',
    },
  },
});

const stylesVariantContainedColorWhite = () => css({
  backgroundColor: 'var(--pv-color-white)',
  color: 'var(--pv-color-black)',
  '&:not(:disabled)': {
    '&:hover': {
      backgroundColor: 'var(--pv-color-gray-7)',
    },
    '&:focus': {
      backgroundColor: 'var(--pv-color-gray-6)',
    },
    '&:active': {
      backgroundColor: 'var(--pv-color-gray-5)',
      boxShadow: 'var(--pv-shadow-light-medium)',
    },
  },
});

const stylesVariantContainedColor = (color: ButtonBaseProps['color']) => css({
  backgroundColor: `var(--pv-color-${color})`,
  color: `var(--pv-color-${color}-contrast)`,
  '&:not(:disabled)': {
    '&:hover': {
      backgroundColor: `var(--pv-color-${color}-tint-1)`,
    },
    '&:focus': {
      backgroundColor: `var(--pv-color-${color}-tint-2)`,
    },
    '&:active': {
      backgroundColor: `var(--pv-color-${color}-tint-2)`,
      boxShadow: 'var(--pv-shadow-light-medium)',
    },
  },
});

const stylesVariantContained = () => css({
  boxShadow: 'var(--pv-shadow-light-low)',
  '&:disabled': {
    color: 'var(--pv-color-gray-8)',
    backgroundColor: 'var(--pv-color-gray-4)',
  },
});

const stylesVariantOutlinedColorDefault = () => css({
  color: 'var(--pv-color-black)',
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
});

const stylesVariantOutlinedColorWhite = () => css({
  color: 'var(--pv-color-white)',
  borderColor: 'var(--pv-color-white)',
  '&:not(:disabled)': {
    '&:hover': {
      backgroundColor: 'var(--pv-color-gray-7)',
    },
    '&:focus': {
      backgroundColor: 'var(--pv-color-gray-8)',
    },
    '&:active': {
      backgroundColor: 'var(--pv-color-gray-9)',
    },
  },
});

const stylesVariantOutlinedColor = (color: ButtonBaseProps['color']) => css({
  color: `var(--pv-color-${color})`,
  borderColor: `var(--pv-color-${color}-tint-2)`,
  '&:not(:disabled)': {
    '&:hover': {
      backgroundColor: `var(--pv-color-${color}-tint-5)`,
    },
    '&:focus': {
      backgroundColor: `var(--pv-color-${color}-tint-4)`,
    },
    '&:active': {
      backgroundColor: `var(--pv-color-${color}-tint-3)`,
    },
  },
});

const stylesVariantOutlined = () => css({
  '&:disabled': {
    color: 'var(--pv-color-gray-8)',
    borderColor: 'var(--pv-color-gray-4)',
  },
});

const stylesLabel = () => css({
  label: 'ButtonBase-label',
  width: '100%',
  display: 'inherit',
  alignItems: 'inherit',
  justifyContent: 'inherit',
});

export const ButtonBase = forwardRef<ButtonBaseProps, 'button'>((props, ref) => {
  const {
    variant,
    textVariant: textVariantProp,
    color,
    size,
    className,
    children,
    disabled,
    type = 'button',
    as,
    ...other
  } = props;

  const Component = as || 'button';
  const textVariant = textVariantProp || (size === 'small' ? 'btn2' : 'btn1');

  return (
    <Component
      {...other}
      ref={ref}
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={disabled}
      className={cx({
        [stylesBase()]: true,

        [stylesVariantTextColorDefault()]: variant === 'text' && color === 'default',
        [stylesVariantTextColorWhite()]: variant === 'text' && color === 'white',
        [stylesVariantTextColor(color)]: variant === 'text' && !['white', 'default'].includes(color),
        [stylesVariantText()]: variant === 'text',

        [stylesVariantContainedColorDefault()]: variant === 'contained' && color === 'default',
        [stylesVariantContainedColorWhite()]: variant === 'contained' && color === 'white',
        [stylesVariantContainedColor(color)]: variant === 'contained' && !['white', 'default'].includes(color),
        [stylesVariantContained()]: variant === 'contained',

        [stylesVariantOutlinedColorDefault()]: variant === 'outlined' && color === 'default',
        [stylesVariantOutlinedColorWhite()]: variant === 'outlined' && color === 'white',
        [stylesVariantOutlinedColor(color)]: variant === 'outlined' && !['white', 'default'].includes(color),
        [stylesVariantOutlined()]: variant === 'outlined',

        [className]: !!className,
      })}
    >
      <Typography
        variant={textVariant}
        className={cx(stylesLabel())}
        color="inherit"
      >
        {children}
      </Typography>
    </Component>
  );
});

ButtonBase.displayName = 'ButtonBase';

ButtonBase.defaultProps = {
  variant: 'text',
  color: 'default',
  component: 'button',
};
