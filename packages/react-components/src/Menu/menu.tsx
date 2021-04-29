import React from 'react';
import { Popover } from '../Popover';
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
};

type MenuProps = BaseProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

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

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  const {
    children,
    options,
    onClose,
    ...other
  } = props;
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
        {...other}
        ref={ref}
        open={open}
        anchorEl={childRef.current}
        onClose={handlePopoverClose}
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
