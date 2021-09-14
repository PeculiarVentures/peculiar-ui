import React from 'react';
import { css, cx } from '../styles';

type BaseProps = {
  children?: React.ReactNode;
  onKeyDown?: React.KeyboardEventHandler<HTMLUListElement>;
};

type SelectPickerListProps = BaseProps;

const stylesBase = () => css({
  label: 'Select-picker-list',
  padding: '7px 0',
  outline: 'none',
  margin: 0,
  overflow: 'auto',
});

export const SelectPickerList = React.forwardRef<HTMLUListElement, SelectPickerListProps>((
  props,
  ref,
) => {
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

SelectPickerList.displayName = 'SelectPickerList';

SelectPickerList.defaultProps = {};
