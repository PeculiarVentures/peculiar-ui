import * as React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { IOverridableComponent, TOverrideProps } from '../OverridableComponent';
import { Typography } from '../Typography';

/**
 * Types.
 */
export interface ISegmentedControlOwnProps {
  /**
   * The content of the component.
   */
  children: React.ReactNode;
  /**
   * Unique identifier used to control which segmented control is selected.
   */
  id: string;
  /**
   * If `true`, the segmented control will be disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Callback fired when the value changes.
   */
  onChange?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, value: string) => void;
  onClick?: never;
}

export interface ISegmentedControlTypeMap<P = object, D extends React.ElementType = 'button'> {
  props: P & ISegmentedControlOwnProps;
  defaultComponent: D;
}

export type TSegmentedControlProps<
  D extends React.ElementType = ISegmentedControlTypeMap['defaultComponent'],
> = TOverrideProps<ISegmentedControlTypeMap<object, D>, D> & {
  component?: D;
};
/**
 *
 */

/**
 * Styles.
 */
const SegmentedControlRoot = styled('button', {
  shouldForwardProp: isPropValid,
})<Required<{ selected: boolean }>>(
  (props) => ({
    fontFamily: 'inherit',
    outline: 'none',
    cursor: 'pointer',
    boxSizing: 'border-box',
    border: '1px solid transparent',
    minHeight: 'calc(var(--pv-size-base) * 4 + 2px)',
    height: '100%',
    padding: '0 calc(var(--pv-size-base) * 2)',
    borderRadius: 'calc(var(--pv-size-base) * 4)',
    transition: 'background-color 200ms, color 200ms, border-color 200ms, box-shadow 200ms',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    ...(props.selected && ({
      backgroundColor: 'var(--pv-color-white)',
      boxShadow: 'var(--pv-shadow-light-soft)',
      pointerEvents: 'none',
    })),
  }),
  (props) => {
    const isDark = props.theme.mode === 'dark';
    let color = 'var(--pv-color-gray-10)';
    const colorDisabled = isDark
      ? 'var(--pv-color-gray-5)'
      : 'var(--pv-color-gray-8)';
    let backgroundColor = 'transparent';
    let backgroundColorHover = 'var(--pv-color-gray-5)';
    let backgroundColorActive = 'var(--pv-color-gray-6)';
    let borderColor = 'transparent';
    let borderColorHover = 'var(--pv-color-gray-5)';
    let borderColorActive = 'var(--pv-color-gray-6)';

    if (isDark) {
      backgroundColorHover = 'var(--pv-color-gray-4)';
      backgroundColorActive = 'var(--pv-color-gray-5)';
      borderColorHover = 'var(--pv-color-gray-4)';
      borderColorActive = 'var(--pv-color-gray-5)';
      color = 'var(--pv-color-gray-8)';
    }

    if (props.selected) {
      if (isDark) {
        backgroundColor = 'var(--pv-color-gray-6)';
        color = 'var(--pv-color-white)';
        borderColor = 'var(--pv-color-gray-5)';
      } else {
        backgroundColor = 'var(--pv-color-white)';
        color = 'var(--pv-color-black)';
        borderColor = 'var(--pv-color-gray-3)';
      }
    }

    return {
      backgroundColor,
      borderColor,
      '&:disabled': {
        cursor: 'not-allowed',
        color: colorDisabled,
      },
      '&:not(:disabled)': {
        color,
        '&:hover': {
          backgroundColor: backgroundColorHover,
          borderColor: borderColorHover,
        },
        '&:focus-visible': {
          borderColor: 'var(--pv-color-secondary)',
        },
        '&:active': {
          backgroundColor: backgroundColorActive,
          borderColor: borderColorActive,
        },
      },
    };
  },
);
/**
 *
 */

export const SegmentedControl = React.forwardRef<any, TSegmentedControlProps>((props, ref) => {
  const {
    component,
    id,
    disabled = false,
    // @ts-expect-error: Property `selected` does not exist
    // on type 'TSegmentedControlProps<"button">'
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
    <SegmentedControlRoot
      as={Component}
      type="button"
      role="tab"
      ref={ref}
      disabled={disabled}
      id={id}
      selected={selected}
      aria-selected={Boolean(selected)}
      onClick={handleClick}
      {...other}
    >
      <Typography
        variant="btn2"
        component="span"
        color="inherit"
      >
        {children}
      </Typography>
    </SegmentedControlRoot>
  );
}) as IOverridableComponent<ISegmentedControlTypeMap>;

SegmentedControl.displayName = 'SegmentedControl';
