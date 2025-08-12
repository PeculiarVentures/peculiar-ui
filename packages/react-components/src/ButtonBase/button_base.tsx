import * as React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { IOverridableComponent, TOverrideProps } from '../OverridableComponent';
import { TTypographyType } from '../styles';
import { Typography } from '../Typography';

/**
 * Types.
 */
export interface IButtonBaseOwnProps {
  /**
   * The content of the component.
   */
  children: React.ReactNode;
  /**
   * If `true`, the button will be disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * The variant to use.
   * @default 'text'
   */
  variant?: (
    'contained'
    | 'outlined'
    | 'text'
  );
  /**
   * The variant of text to use.
   */
  textVariant?: TTypographyType;
  /**
   * The color of the component.
   * @default 'default'
   */
  color?: (
    'primary'
    | 'secondary'
    | 'wrong'
    | 'white'
    | 'default'
  );
  /**
   * The size of the button.
   * @default 'medium'
   */
  size?: (
    'small'
    | 'medium'
    | 'large'
  );
}

export interface IButtonBaseTypeMap<P = object, D extends React.ElementType = 'button'> {
  props: P & IButtonBaseOwnProps;
  defaultComponent: D;
}

export type TButtonBaseProps<
  D extends React.ElementType = IButtonBaseTypeMap['defaultComponent'],
> = TOverrideProps<IButtonBaseTypeMap<object, D>, D> & {
  component?: D;
};
/**
 *
 */

/**
 * Styles.
 */
const ButtonBaseRoot = styled('button', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'color',
})<IButtonBaseOwnProps>({
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
}, (props) => {
  const isDark = props.theme.mode === 'dark';
  let color: string = isDark
    ? 'var(--pv-color-white)'
    : 'var(--pv-color-black)';
  let borderColor: string;
  let backgroundColor: string;
  let backgroundColorHover: string;
  let backgroundColorFocus: string;
  let backgroundColorActive: string;
  let boxShadow: string;
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
    } else if (props.color === 'white') {
      color = 'var(--pv-color-white)';
      borderColor = 'var(--pv-color-white)';
      backgroundColorHover = 'var(--pv-color-gray-7)';
      backgroundColorFocus = 'var(--pv-color-gray-8)';
      backgroundColorActive = 'var(--pv-color-gray-9)';
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
    } else if (props.color === 'white') {
      backgroundColor = 'var(--pv-color-white)';
      backgroundColorHover = 'var(--pv-color-gray-7)';
      backgroundColorFocus = 'var(--pv-color-gray-6)';
      backgroundColorActive = 'var(--pv-color-gray-5)';
    } else {
      color = `var(--pv-color-${props.color}-contrast)`;
      backgroundColor = `var(--pv-color-${props.color})`;
      backgroundColorHover = `var(--pv-color-${props.color}-tint-1)`;
      backgroundColorFocus = `var(--pv-color-${props.color}-tint-2)`;
      backgroundColorActive = `var(--pv-color-${props.color}-tint-2)`;
    }

    if (isDark) {
      boxShadow = 'var(--pv-shadow-dark-medium)';
      boxShadowActive = 'var(--pv-shadow-dark-hight)';
      colorDisabled = 'var(--pv-color-gray-6)';
      backgroundColorDisabled = 'var(--pv-color-gray-5)';
    } else {
      boxShadow = 'var(--pv-shadow-light-low)';
      boxShadowActive = 'var(--pv-shadow-light-medium)';
      colorDisabled = 'var(--pv-color-gray-8)';
      backgroundColorDisabled = 'var(--pv-color-gray-4)';
    }
  }

  if (props.variant === 'text') {
    if (props.color === 'default') {
      backgroundColorHover = 'var(--pv-color-gray-3)';
      backgroundColorFocus = 'var(--pv-color-gray-4)';
      backgroundColorActive = 'var(--pv-color-gray-5)';
    } else if (props.color === 'white') {
      color = 'var(--pv-color-white)';
      backgroundColorHover = 'var(--pv-color-gray-7)';
      backgroundColorFocus = 'var(--pv-color-gray-8)';
      backgroundColorActive = 'var(--pv-color-gray-9)';
    } else if (isDark) {
      color = `var(--pv-color-${props.color})`;
      backgroundColorHover = `var(--pv-color-${props.color}-shade-4)`;
      backgroundColorFocus = `var(--pv-color-${props.color}-shade-3)`;
      backgroundColorActive = `var(--pv-color-${props.color}-shade-2)`;
    } else {
      color = `var(--pv-color-${props.color})`;
      backgroundColorHover = `var(--pv-color-${props.color}-tint-5)`;
      backgroundColorFocus = `var(--pv-color-${props.color}-tint-4)`;
      backgroundColorActive = `var(--pv-color-${props.color}-tint-3)`;
    }

    if (isDark) {
      colorDisabled = 'var(--pv-color-gray-6)';
    } else {
      colorDisabled = 'var(--pv-color-gray-7)';
    }
  }

  return {
    borderColor,
    backgroundColor,
    color,
    boxShadow,
    '&:disabled': {
      cursor: 'not-allowed',
      boxShadow: 'none',
      color: colorDisabled,
      backgroundColor: backgroundColorDisabled,
      borderColor: borderColorDisabled,
    },
    '&:not(:disabled)': {
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
    },
  };
});

const ButtonBaseLabel = styled(Typography)({
  width: '100%',
  display: 'inherit',
  alignItems: 'inherit',
  justifyContent: 'inherit',
});
/**
 *
 */

export const ButtonBase = React.forwardRef<any, TButtonBaseProps>((props, ref) => {
  const {
    textVariant: textVariantProp,
    size = 'medium',
    children,
    type = 'button',
    component,
    variant = 'text',
    color = 'default',
    ...other
  } = props;

  const Component = component || 'button';
  const textVariant = textVariantProp || (size === 'small' ? 'btn2' : 'btn1');

  return (
    <ButtonBaseRoot
      as={Component}
      ref={ref}
      type={type}
      size={size}
      variant={variant}
      color={color}
      {...other}
    >
      <ButtonBaseLabel
        color="inherit"
        variant={textVariant}
      >
        {children}
      </ButtonBaseLabel>
    </ButtonBaseRoot>
  );
}) as IOverridableComponent<IButtonBaseTypeMap>;

ButtonBase.displayName = 'ButtonBase';
