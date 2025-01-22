import * as React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { IOverridableComponent, TOverrideProps } from '../OverridableComponent';
import { TColorType } from '../styles';
import { Typography } from '../Typography';

/**
 * Types.
 */
export interface ITabOwnProps {
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

export interface ITabTypeMap<P = object, D extends React.ElementType = 'button'> {
  props: P & ITabOwnProps;
  defaultComponent: D;
}

export type TTabProps<
  D extends React.ElementType = ITabTypeMap['defaultComponent'],
> = TOverrideProps<ITabTypeMap<object, D>, D> & {
  component?: D;
};
/**
 *
 */

/**
 * Styles.
 */
const TabRoot = styled('button', { shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'color' })<Required<{ color: TColorType; selected: boolean }>>(
  (props) => ({
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
    ...(props.selected && ({ borderColor: 'var(--pv-color-secondary)' })),
  }),
  (props) => {
    const isDark = props.theme.mode === 'dark';
    const isWhite = props.color === 'white';
    let color: string;
    const colorDisabled = isDark
      ? 'var(--pv-color-gray-5)'
      : 'var(--pv-color-gray-7)';
    let backgroundColorHove = 'var(--pv-color-secondary-tint-5)';
    let backgroundColorFocus = 'var(--pv-color-secondary-tint-4)';
    let backgroundColorActive = 'var(--pv-color-secondary-tint-3)';

    if (isWhite) {
      color = 'var(--pv-color-gray-9)';
    } else if (isDark) {
      color = 'var(--pv-color-gray-7)';
    } else {
      color = 'var(--pv-color-gray-10)';
    }

    if (isDark) {
      backgroundColorHove = 'var(--pv-color-secondary-shade-4)';
      backgroundColorFocus = 'var(--pv-color-secondary-shade-3)';
      backgroundColorActive = 'var(--pv-color-secondary-shade-2)';
    }

    if (props.selected) {
      if (isDark || isWhite) {
        color = 'var(--pv-color-white)';
      } else {
        color = 'var(--pv-color-black)';
      }
    }

    return {
      '&:disabled': {
        cursor: 'not-allowed',
        color: colorDisabled,
      },
      '&:not(:disabled)': {
        color,
        '&:hover': { backgroundColor: backgroundColorHove },
        '&:focus-visible': { backgroundColor: backgroundColorFocus },
        '&:active': { backgroundColor: backgroundColorActive },
      },
    };
  },
);
/**
 *
 */

export const Tab = React.forwardRef<any, TTabProps>((props, ref) => {
  const {
    color = 'black',
    component,
    id,
    disabled,
    // @ts-expect-error: Property `selected` does not exist on type 'TabProps<"button">'
    selected,
    children,
    onChange,
    ...other
  } = props;
  const Component = component || 'button';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!selected && onChange) {
      onChange(event, id);
    }
  };

  return (
    <TabRoot
      as={Component}
      type="button"
      role="tab"
      ref={ref}
      disabled={disabled}
      id={id}
      color={color}
      selected={selected}
      aria-selected={Boolean(selected)}
      onClick={handleClick}
      {...other}
    >
      <Typography
        variant="s2"
        component="span"
        color="inherit"
      >
        {children}
      </Typography>
    </TabRoot>
  );
}) as IOverridableComponent<ITabTypeMap>;

Tab.displayName = 'Tab';

Tab.defaultProps = {
  disabled: false,
  color: 'black',
};
