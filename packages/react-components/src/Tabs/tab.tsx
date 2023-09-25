import * as React from 'react';
import styled from '@emotion/styled';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';
import { ColorType } from '../styles';
import { Typography } from '../Typography';

/**
 * Types.
 */
export interface TabOwnProps {
  /**
   * The content of the component.
   */
  children: React.ReactNode;
  /**
   * Unique identifier used to control which tab is selected.
   */
  id: string;
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
}

export interface TabTypeMap<P = {}, D extends React.ElementType = 'button'> {
  props: P & TabOwnProps;
  defaultComponent: D;
}

export type TabProps<
  D extends React.ElementType = TabTypeMap['defaultComponent'],
> = OverrideProps<TabTypeMap<{}, D>, D> & {
  component?: D;
};
/**
 *
 */

/**
 * Styles.
 */
const TabRoot = styled('button')({
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
/**
 *
 */

export const Tab = React.forwardRef<any, TabProps>((props, ref) => {
  const {
    color = 'black',
    component,
    onChange,
    id,
    disabled,
    // @ts-ignore
    selected,
    children,
    ...other
  } = props;
  const Component = component || 'button';

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
    <TabRoot
      {...other}
      as={Component}
      type="button"
      role="tab"
      ref={ref}
      disabled={disabled}
      id={id}
      aria-selected={selected || undefined}
      onClick={handleClick}
    >
      <Typography
        variant="s2"
        component="span"
        color={textColor}
      >
        {children}
      </Typography>
    </TabRoot>
  );
}) as OverridableComponent<TabTypeMap>;

Tab.displayName = 'Tab';

Tab.defaultProps = {
  disabled: false,
  color: 'black',
};
