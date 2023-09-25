import React from 'react';
import styled from '@emotion/styled';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';
import { Typography } from '../Typography';
import { TypographyType } from '../styles';

/**
 * Types.
 */
type MenuItemOwnProps = {
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
const MenuItemRoot = styled('li')<MenuItemOwnProps>((props) => ({
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
  cursor: 'pointer',
  transition: 'background-color 200ms',
  backgroundColor: 'transparent',
  border: 'none',
  color: 'var(--pv-color-black)',
  boxSizing: 'border-box',
  gap: 'var(--pv-size-base-2)',
  '&:hover': {
    backgroundColor: 'var(--pv-color-gray-3)',
  },
  '&:focus': {
    backgroundColor: 'var(--pv-color-gray-4)',
  },
  '&:active': {
    backgroundColor: 'var(--pv-color-gray-5)',
  },
  ...(props.disabled && {
    color: 'var(--pv-color-gray-7)',
    cursor: 'not-allowed',
    pointerEvents: 'none',
  }),
}));

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
