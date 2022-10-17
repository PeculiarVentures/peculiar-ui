import * as React from 'react';
import { forwardRef } from '../system';
import { css, cx, ColorType } from '../styles';
import { Typography } from '../Typography';

export type TabProps = {
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
   * Callback fired when the value changes.
   */
  onChange?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, value: string) => void;
  onClick?: never;
  'data-testid'?: string;
};

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

export const Tab = forwardRef<TabProps, 'button'>((props, ref) => {
  const {
    children,
    className,
    disabled,
    id,
    color = 'black',
    as = 'button',
    onChange,
    // @ts-ignore
    selected,
    ...other
  } = props;
  const Component = as || 'button';

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
        as="span"
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
  color: 'black',
};
