import React from 'react';
import styled from '@emotion/styled';
import { IOverridableComponent } from '../OverridableComponent';
import { Popper } from '../Popper';
import { Box } from '../Box';
import { useMergedRef } from '../hooks';
import { ArrowRightIcon } from '../icons';
import { MenuItem } from './menu_item';
import type { IMenuItemTypeMap, TMenuItemProps } from './menu_item';
import { MenuList } from './menu_list';

/**
 * Types.
 */
type TSubMenuItemOwnProps = TMenuItemProps & {
  label: React.ReactNode;
  children: React.ReactElement[];
};
/**
 *
 */

/**
 * Styles.
 */
const SubMenuItemRoot = styled(MenuList)(
  (props) => ({
    minWidth: '16px',
    minHeight: '16px',
    ...(props.theme.mode === 'dark'
      ? {
          boxShadow: 'var(--pv-shadow-dark-medium)',
          backgroundColor: 'var(--pv-color-gray-3)',
        }
      : {
          boxShadow: 'var(--pv-shadow-light-low)',
          backgroundColor: 'var(--pv-color-white)',
        }),
  }),
);
/**
 *
 */

export const SubMenuItem = React.forwardRef<any, TSubMenuItemOwnProps>((props, ref) => {
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
          component={SubMenuItemRoot}
          borderRadius={4}
        >
          {children}
        </Box>
      </Popper>
    </MenuItem>
  );
}) as IOverridableComponent<IMenuItemTypeMap>;

SubMenuItem.displayName = 'SubMenuItem';
