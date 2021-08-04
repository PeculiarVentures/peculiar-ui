import * as React from 'react';
import { css, cx, ColorType } from '../styles';
import { Typography } from '../Typography';

type BaseProps = {
  /**
   * The content of the component.
   */
  children: React.ReactNode;
  /**
   * Unique identifier used to control which tab is selected.
   */
  id: string;
  /**
   * The className of the component.
   */
  className?: string;
  /**
   * If `true`, the tab will be disabled.
   */
  disabled?: boolean;
  /**
   * The component used for the root node.
   */
  component?: React.ElementType;
  /**
   * Callback fired when the value changes.
   */
  onChange?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, value: string) => void;
  'data-testid'?: string;
};

export type TabBaseProps = BaseProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'onChange'>;

const stylesBase = () => css({
  label: 'Tab',
  fontFamily: 'inherit',
  outline: 'none',
  cursor: 'pointer',
  boxSizing: 'border-box',
  border: 0,
  borderBottom: '3px solid transparent',
  minHeight: '60px',
  height: '100%',
  padding: '0 15px',
  backgroundColor: 'transparent',
  transition: 'background-color 200ms, color 200ms, border-color 200ms',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:disabled': {
    cursor: 'not-allowed',
  },
  '&[aria-selected]': {
    borderColor: 'var(--pv-color-secondary)',
  },
  '&:not(:disabled)': {
    '&:hover': {
      backgroundColor: 'var(--pv-color-secondary-tint-5)',
    },
    '&:focus': {
      backgroundColor: 'var(--pv-color-secondary-tint-4)',
    },
    '&:active': {
      backgroundColor: 'var(--pv-color-secondary-tint-3)',
    },
  },
});

export const Tab = React.forwardRef<HTMLButtonElement, TabBaseProps>((props, ref) => {
  const {
    children,
    className,
    disabled,
    id,
    // @ts-ignore
    selected,
    component: componentProp,
    onChange,
    ...other
  } = props;
  const Component = componentProp || 'button';
  let color: ColorType = 'gray-10';

  if (disabled) {
    color = 'gray-7';
  } else if (selected) {
    color = 'black';
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!selected && onChange) {
      onChange(event, id);
    }
  };

  return (
    <Component
      {...other}
      type="button"
      ref={ref}
      role="tab"
      disabled={disabled}
      id={id}
      aria-selected={selected || undefined}
      className={cx({
        [stylesBase()]: true,
        [className]: !!className,
      })}
      onClick={handleClick}
    >
      <Typography
        variant="s2"
        component="span"
        color={color}
      >
        {children}
      </Typography>
    </Component>
  );
});

Tab.displayName = 'Tab';

Tab.defaultProps = {
  disabled: false,
  component: 'button',
};
