import React from 'react';
import { css, cx } from '../styles';

type BaseProps = {
  children?: React.ReactNode;
  onKeyDown?: React.KeyboardEventHandler<HTMLUListElement>;
};

type AutoListProps = BaseProps;

const stylesBase = () => css({
  label: 'Menu-list',
  padding: '7px 0px',
  outline: 'none',
  margin: 0,
  overflow: 'auto',
});

export const AutoList = React.forwardRef<HTMLUListElement, AutoListProps>((props, ref) => {
  const { children } = props;

  return (
    <ul
      {...props}
      role="menu"
      tabIndex={-1}
      className={cx({
        [stylesBase()]: true,
      })}
      ref={ref}
    >
      {children}
    </ul>
  );
});

AutoList.displayName = 'AutoList';

AutoList.defaultProps = {};
