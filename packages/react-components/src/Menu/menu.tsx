import React from 'react';
import styled from '@emotion/styled';
import { Popover, PopoverProps } from '../Popover';
import { MenuList, MenuItem, SubMenuItem } from '../MenuList';
import { TypographyType } from '../styles';

/**
 * Types.
 */
interface OptionOwnProps {
  label: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  component?: React.ElementType;
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

type OptionProps = OptionOwnProps & Omit<React.AllHTMLAttributes<HTMLElement>, 'children'>;
type MenuOptionProps = OptionProps & {
  subOptions?: OptionProps[];
};

interface MenuOwnProps {
  /**
   * Menu reference element.
   */
  children: React.ReactElement;
  /**
   * Menu contents.
   */
  options: MenuOptionProps[];
  /**
   * Callback fired when the component requests to be closed.
   */
  onClose?: () => void;
  /**
   * Props applied to the `Popover` element.
   */
  popoverProps?: Partial<PopoverProps>;
};

export type MenuProps = MenuOwnProps;
/**
 *
 */

/**
 * Styles.
 */
const MenuPopover = styled(Popover)({
  '&[data-popper-placement^="bottom"]': {
    margin: 'var(--pv-size-base-3) 0px',
  },
  '&[data-popper-placement^="top"]': {
    margin: 'var(--pv-size-base-3) 0px',
  },
  '&[data-popper-placement^="right"]': {
    margin: '0px var(--pv-size-base-3)',
  },
  '&[data-popper-placement^="left"]': {
    margin: '0px var(--pv-size-base-3)',
  },
});
/**
 *
 */

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  const {
    children,
    options,
    onClose,
    popoverProps = {},
  } = props;
  const {
    modalProps = {},
  } = popoverProps;
  const [open, setOpen] = React.useState(false);
  const childRef = React.useRef(null);

  const handleChildClick = () => {
    setOpen(true);
  };

  const handlePopoverClose = () => {
    setOpen(false);

    if (onClose) {
      onClose();
    }
  };

  const handleMenuItemClick = (
    option: OptionProps,
  ) => (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (option.onClick) {
      option.onClick(event);
    }

    handlePopoverClose();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Tab') {
      event.preventDefault();

      handlePopoverClose();
    }
  };

  const renderOption = (option: MenuOptionProps, index: number) => {
    const {
      component,
      disabled,
      label,
      subOptions,
      className: classNameProp,
      textVariant: textVariantProp,
      startIcon,
      endIcon,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onClick,
      ...other
    } = option;

    if (subOptions && subOptions.length) {
      return (
        <SubMenuItem
          key={index}
          component={component}
          textVariant={textVariantProp}
          disabled={disabled}
          label={label}
          className={classNameProp}
          {...other}
        >
          {subOptions.map(renderOption)}
        </SubMenuItem>
      );
    }

    return (
      <MenuItem
        key={index}
        component={component}
        textVariant={textVariantProp}
        disabled={disabled}
        onClick={handleMenuItemClick(option)}
        className={classNameProp}
        startIcon={startIcon}
        endIcon={endIcon}
        {...other}
      >
        {label}
      </MenuItem>
    );
  };

  const childrenProps: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> = {
    'ref': childRef,
    'onClick': handleChildClick,
    'aria-haspopup': 'menu',
    'aria-expanded': String(open) as any,
  };

  return (
    <>
      {React.cloneElement(children, childrenProps)}
      <MenuPopover
        {...popoverProps}
        modalProps={{
          ...modalProps,
          disableAutoFocus: false,
        }}
        ref={ref}
        open={open}
        anchorEl={childRef.current}
        onClose={handlePopoverClose}
        onKeyDown={handleKeyDown}
      >
        <MenuList>
          {options.map(renderOption)}
        </MenuList>
      </MenuPopover>
    </>
  );
});

Menu.displayName = 'Menu';

Menu.defaultProps = {};
