import React from 'react';
import { Popover, PopoverProps } from '../Popover';
import { MenuList, MenuItem, SubMenuItem } from '../MenuList';
import { css, cx, TypographyType } from '../styles';

/**
 * Types.
 */
type OptionBaseProps = {
  label: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  component?: React.ElementType;
  /**
   * The variant of text to use.
   */
  textVariant?: TypographyType;
};

type OptionProps = OptionBaseProps & Omit<React.AllHTMLAttributes<HTMLElement>, 'children'>;
type MenuOptionProps = OptionProps & {
  subOptions?: OptionProps[];
};

type BaseProps = {
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

export type MenuProps = BaseProps;
/**
 *
 */

/**
 * Styles.
 */
const stylesPopper = () => css({
  label: 'Menu-popover',
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
    className,
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
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        component={component}
        textVariant={textVariantProp}
        disabled={disabled}
        onClick={handleMenuItemClick(option)}
        className={classNameProp}
        {...other}
      >
        {label}
      </MenuItem>
    );
  };

  const childrenProps: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> = {
    ref: childRef,
    onClick: handleChildClick,
    'aria-haspopup': 'menu',
    'aria-expanded': String(open) as any,
  };

  return (
    <>
      {React.cloneElement(children, childrenProps)}
      <Popover
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
        className={cx({
          [stylesPopper()]: true,
          [className]: !!className,
        })}
      >
        <MenuList>
          {options.map(renderOption)}
        </MenuList>
      </Popover>
    </>
  );
});

Menu.displayName = 'Menu';

Menu.defaultProps = {};
