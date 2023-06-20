import React from 'react';
import { OverridableComponent } from '../OverridableComponent';
import { Popper } from '../Popper';
import { Box } from '../Box';
import { useMergedRef } from '../hooks';
import { ArrowRightIcon } from '../icons';
import { css } from '../styles';
import { MenuItem } from './menu_item';
import type { MenuItemTypeMap, MenuItemProps } from './menu_item';
import { MenuList } from './menu_list';

/**
 * Types.
 */
type SubMenuItemProps = MenuItemProps & {
  label: React.ReactNode;
  children: React.ReactElement[];
};
/**
 *
 */

/**
 * Styles.
 */
const stylesBase = () => css({
  label: 'SubMenu-MenuList',
  minWidth: '16px',
  minHeight: '16px',
  boxShadow: 'var(--pv-shadow-light-low)',
});
/**
 *
 */

export const SubMenuItem = React.forwardRef<any, SubMenuItemProps>((props, ref) => {
  const {
    label,
    children,
    ...other
  } = props;
  const [open, setOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLElement>(null);
  const multiRef = useMergedRef(ref, rootRef);

  const handleMouseEnter = React.useCallback(() => setOpen(true), []);

  const handleMouseLeave = React.useCallback(() => setOpen(false), []);

  return (
    <MenuItem
      {...other}
      endIcon={<ArrowRightIcon />}
      ref={multiRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleMouseEnter}
    >
      {label}
      <Popper
        open={open}
        anchorEl={rootRef.current}
        placement="right-start"
        disablePortal
        onMouseLeave={handleMouseLeave}
      >
        <Box
          component={MenuList}
          borderRadius={4}
          background="white"
          className={stylesBase()}
        >
          {children}
        </Box>
      </Popper>
    </MenuItem>
  );
}) as OverridableComponent<MenuItemTypeMap>;

SubMenuItem.displayName = 'SubMenuItem';
