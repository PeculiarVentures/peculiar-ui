import * as React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';
import { TypographyType } from '../styles';
import { Typography } from '../Typography';

/**
 * Types.
 */
export interface ButtonBaseOwnProps {
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
}

export interface ButtonBaseTypeMap<P = {}, D extends React.ElementType = 'button'> {
  props: P & ButtonBaseOwnProps;
  defaultComponent: D;
}

export type ButtonBaseProps<
  D extends React.ElementType = ButtonBaseTypeMap['defaultComponent'],
> = OverrideProps<ButtonBaseTypeMap<{}, D>, D> & {
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
})<ButtonBaseOwnProps>((props) => ({
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
    color: props.variant === 'text'
      ? 'var(--pv-color-gray-7)'
      : 'var(--pv-color-gray-8)',
    backgroundColor: props.variant === 'contained' && 'var(--pv-color-gray-4)',
    borderColor: props.variant === 'outlined' && 'var(--pv-color-gray-4)',
  },
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
  let boxShadow: string;
  let boxShadowActive: string;

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
  }

  if (props.variant === 'contained') {
    if (props.color === 'default') {
      backgroundColor = 'var(--pv-color-gray-8)';
      backgroundColorHover = 'var(--pv-color-gray-7)';
      backgroundColorFocus = 'var(--pv-color-gray-6)';
      backgroundColorActive = 'var(--pv-color-gray-5)';
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
    } else {
      boxShadow = 'var(--pv-shadow-light-low)';
      boxShadowActive = 'var(--pv-shadow-light-medium)';
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
  }

  return {
    borderColor,
    backgroundColor,
    color,
    boxShadow,
    '&:not(:disabled)': {
      '&:hover': {
        backgroundColor: backgroundColorHover,
      },
      '&:focus': {
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

export const ButtonBase = React.forwardRef<any, ButtonBaseProps>((props, ref) => {
  const {
    textVariant: textVariantProp,
    size,
    children,
    type = 'button',
    component,
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
}) as OverridableComponent<ButtonBaseTypeMap>;

ButtonBase.displayName = 'ButtonBase';

ButtonBase.defaultProps = {
  variant: 'text',
  color: 'default',
};
