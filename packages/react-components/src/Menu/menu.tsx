import React from 'react';
import { Popover, PopoverProps } from '../Popover';
import { Typography } from '../Typography';
import { css, cx, TypographyType } from '../styles';

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

type BaseProps = {
  /**
   * Menu reference element.
   */
  children: React.ReactElement;
  /**
   * Menu contents.
   */
  options: OptionProps[];
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

const stylesMenuList = () => css({
  label: 'Menu-list',
  padding: 'var(--pv-size-base-2) 0px',
  outline: 'none',
});

const stylesMenuItem = () => css({
  label: 'Menu-item',
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
    cursor: 'not-allowed',
  },
});

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
    setOpen(false);

    if (option.onClick) {
      option.onClick(event);
    }

    if (onClose) {
      onClose();
    }
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
          disableAutoFocus: true,
        }}
        ref={ref}
        open={open}
        anchorEl={childRef.current}
        onClose={handlePopoverClose}
        className={cx({
          [stylesPopper()]: true,
          [className]: !!className,
        })}
      >
        <div
          role="menu"
          tabIndex={-1}
          className={cx({
            [stylesMenuList()]: true,
          })}
        >
          {options.map((option, index) => {
            const {
              component,
              disabled,
              label,
              className: classNameProp,
              textVariant: textVariantProp,
              ...other
            } = option;
            const Component = component || 'button';
            const textVariant = textVariantProp || 'b3';

            return (
              <Component
                {...other}
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                type="button"
                role="menuitem"
                className={cx({
                  [stylesMenuItem()]: true,
                  [classNameProp]: !!classNameProp,
                })}
                onClick={handleMenuItemClick(option)}
                disabled={disabled}
              >
                <Typography
                  variant={textVariant}
                  color="inherit"
                  component="span"
                >
                  {label}
                </Typography>
              </Component>
            );
          })}
        </div>
      </Popover>
    </>
  );
});

Menu.displayName = 'Menu';

Menu.defaultProps = {};
