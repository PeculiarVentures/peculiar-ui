import React from 'react';
import { Popover, PopoverProps } from '../Popover';
import { Typography } from '../Typography';
import { css, cx } from '../styles';

type OptionType = {
  label: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

type BaseProps = {
  /**
   * Menu reference element.
   */
  children: React.ReactElement;
  /**
   * Menu contents.
   */
  options: OptionType[];
  /**
   * Callback fired when the component requests to be closed.
   */
  onClose?: () => void;
  /**
   * Props applied to the `Popover` element.
   */
  popoverProps?: Partial<PopoverProps>;
};

type MenuProps = BaseProps;

const stylesMenuList = () => css({
  label: 'Menu-list',
  padding: '7px 0px',
  outline: 'none',
});

const stylesMenuItem = () => css({
  label: 'Menu-item',
  padding: '0px 10px',
  fontFamily: 'inherit',
  outline: 'none',
  width: '100%',
  height: '35px',
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
    margin: '14px 0px',
  },
  '&[data-popper-placement^="top"]': {
    margin: '14px 0px',
  },
  '&[data-popper-placement^="right"]': {
    margin: '0px 14px',
  },
  '&[data-popper-placement^="left"]': {
    margin: '0px 14px',
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
    option: OptionType,
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
          {options.map((option) => (
            <button
              key={option.label}
              type="button"
              role="menuitem"
              className={cx(stylesMenuItem())}
              onClick={handleMenuItemClick(option)}
              disabled={option.disabled}
            >
              <Typography
                variant="b3"
              >
                {option.label}
              </Typography>
            </button>
          ))}
        </div>
      </Popover>
    </>
  );
});

Menu.displayName = 'Menu';

Menu.defaultProps = {};
