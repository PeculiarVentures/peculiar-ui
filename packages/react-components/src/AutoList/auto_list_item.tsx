import React from 'react';
import { Typography } from '../Typography';
import { css, cx } from '../styles';

type BaseProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  index?: number;
  selected?: boolean;
};

type AutoListItemProps = BaseProps;

const stylesBase = () => css({
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
  boxSizing: 'border-box',
  '&[aria-disabled="true"]': {
    color: 'var(--pv-color-gray-7)',
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
  '&[data-focus="true"]': {
    backgroundColor: 'var(--pv-color-gray-4)',
  },
  '&:hover': {
    backgroundColor: 'var(--pv-color-gray-3)',
  },
});

export const AutoListItem = React.forwardRef<HTMLLIElement, AutoListItemProps>((props, ref) => {
  const {
    children, disabled, onClick, index, selected,
  } = props;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Enter') {
      if (onClick) {
        onClick();
      }
    }
  };

  return (
    <li
      role="menuitem"
      className={cx(stylesBase())}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-disabled={disabled}
      tabIndex={-1}
      ref={ref}
      data-option-index={index}
      data-focus={selected}
    >
      <Typography
        noWrap
        variant="b3"
      >
        {children}
      </Typography>
    </li>
  );
});

AutoListItem.displayName = 'AutoListItem';

AutoListItem.defaultProps = {};
