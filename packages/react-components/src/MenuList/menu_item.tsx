import React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';
import { Typography } from '../Typography';
import { TypographyType } from '../styles';

/**
 * Types.
 */
interface MenuItemOwnProps {
  children: React.ReactNode;
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * The variant of text to use.
   */
  textVariant?: TypographyType;
  /**
   * Element placed before the children.
   */
  startIcon?: React.ReactNode;
  /**
   * Element placed after the children.
   */
  endIcon?: React.ReactNode;
};

export interface MenuItemTypeMap<P = {}, D extends React.ElementType = 'li'> {
  props: P & MenuItemOwnProps;
  defaultComponent: D;
}

export type MenuItemProps<
  D extends React.ElementType = MenuItemTypeMap['defaultComponent'],
> = OverrideProps<MenuItemTypeMap<{}, D>, D> & {
  component?: D;
};
/**
 *
 */

/**
 * Styles.
 */
const MenuItemRoot = styled('li', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'disabled',
})<MenuItemOwnProps>(
  (props) => ({
    padding: '0px var(--pv-size-base-2)',
    fontFamily: 'inherit',
    outline: 'none',
    width: '100%',
    height: 'var(--pv-size-base-7)',
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textDecoration: 'none',
    userSelect: 'none',
    transition: 'background-color 200ms',
    backgroundColor: 'transparent',
    border: 'none',
    boxSizing: 'border-box',
    gap: 'var(--pv-size-base-2)',
    cursor: props.disabled
      ? 'not-allowed'
      : 'pointer',
  }),
  (props) => {
    const isDark = props.theme.mode === 'dark';
    let color = 'var(--pv-color-black)';
    let colorDisabled = 'var(--pv-color-gray-7)';
    let backgroundColorHover = 'var(--pv-color-gray-3)';
    let backgroundColorFocused = 'var(--pv-color-gray-4)';
    let backgroundColorSelected = 'var(--pv-color-gray-5)';

    if (isDark) {
      color = 'var(--pv-color-white)';
      colorDisabled = 'var(--pv-color-gray-6)';
      backgroundColorHover = 'var(--pv-color-gray-4)';
      backgroundColorFocused = 'var(--pv-color-gray-5)';
      backgroundColorSelected = 'var(--pv-color-gray-6)';
    }

    return {
      color,
      '&:hover': {
        backgroundColor: backgroundColorHover,
      },
      '&:focus-visible, &[data-focused="true"]': {
        backgroundColor: backgroundColorFocused,
      },
      '&:active, &[aria-selected="true"]': {
        backgroundColor: backgroundColorSelected,
      },
      ...(props.disabled && {
        color: colorDisabled,
        pointerEvents: 'none',
      }),
    };
  },
);

const MenuItemIcon = styled('span')({
  flexShrink: 0,
  display: 'inline-flex',
});

const MenuItemLabel = styled('span')({
  flex: '1 1 auto',
});
/**
 *
 */

export const MenuItem = React.forwardRef<any, MenuItemProps>((props, ref) => {
  const {
    component,
    children,
    disabled,
    textVariant: textVariantProp,
    startIcon,
    endIcon,
    onClick,
    ...other
  } = props;
  const Component = component || 'li';
  const textVariant = textVariantProp || 'b3';

  const handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    // Keyboard accessibility for non interactive elements
    if (
      event.target === event.currentTarget
      && event.key === 'Enter'
      && !disabled
    ) {
      event.preventDefault();

      if (onClick) {
        onClick(event as any);
      }
    }
  };

  return (
    <MenuItemRoot
      as={Component}
      ref={ref}
      tabIndex={-1}
      role="menuitem"
      aria-disabled={disabled}
      disabled={disabled}
      onKeyDown={handleKeyDown}
      onClick={onClick}
      {...other}
    >
      {startIcon && (
        <MenuItemIcon>
          {startIcon}
        </MenuItemIcon>
      )}
      <Typography
        component={MenuItemLabel}
        variant={textVariant}
        color="inherit"
        noWrap
      >
        {children}
      </Typography>
      {endIcon && (
        <MenuItemIcon>
          {endIcon}
        </MenuItemIcon>
      )}
    </MenuItemRoot>
  );
}) as OverridableComponent<MenuItemTypeMap>;

MenuItem.displayName = 'MenuItem';
