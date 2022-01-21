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
   * The color of the component.
   */
  color?: ('black' | 'white');
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
  minHeight: 'var(--pv-size-base-12)',
  height: '100%',
  padding: '0 var(--pv-size-base-3)',
  backgroundColor: 'transparent',
  transition: 'background-color 200ms, color 200ms, border-color 200ms',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
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
    color = 'black',
    component: componentProp,
    onChange,
    ...other
  } = props;
  const Component = componentProp || 'button';

  const textColor: ColorType = React.useMemo(() => {
    if (disabled) {
      return 'gray-7';
    }

    if (color === 'white') {
      if (selected) {
        return 'white';
      }

      return 'gray-9';
    }

    if (selected) {
      return 'black';
    }

    return 'gray-10';
  }, [disabled, selected, color]);

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
        color={textColor}
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
  color: 'black',
};
