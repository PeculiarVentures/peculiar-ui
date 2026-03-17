import * as React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { TColorType } from '../styles';
import { SegmentedControl, TSegmentedControlProps } from './segmented_control';
// import { Tab, TTabProps } from './tab';

/**
 * Types.
 */
interface ISegmentedControlsOwnProps {
  /**
   * The content of the component.
   */
  children: React.ReactElement<TSegmentedControlProps, typeof SegmentedControl>[];
  /**
   * The value of the currently selected `SegmentedControl`.
   */
  value: string;
  /**
   * The color of the component.
   * @default 'black'
   */
  color?: ('black' | 'white');
  /**
   * The className of the component.
   */
  className?: string;
  /**
   * Callback fired when the value changes.
   */
  onChange?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, value: string) => void;
};

type TSegmentedControlsProps = ISegmentedControlsOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>;
/**
 *
 */

/**
 * Styles.
 */
const SegmentedControlsRoot = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'color',
})<Required<{ color: TColorType }>>((props) => {
  const isDark = props.theme.mode === 'dark';
  const isWhite = props.color === 'white';
  let backgroundColor = 'var(--pv-color-gray-4)';

  if (isDark || isWhite) {
    backgroundColor = 'var(--pv-color-gray-3)';
  }

  return {
    whiteSpace: 'nowrap',
    overflowX: 'auto',
    backgroundColor,
    borderRadius: 'calc(var(--pv-size-base) * 4)',
    display: 'inline-flex',
    padding: 'calc(var(--pv-size-base) - 1px)',
  };
});
/**
 *
 */

// eslint-disable-next-line @stylistic/max-len
export const SegmentedControls = React.forwardRef<HTMLDivElement, TSegmentedControlsProps>((props, ref) => {
  const {
    children: childrenProp,
    value,
    color = 'black',
    onChange,
    ...other
  } = props;

  const children = React.Children.map(
    childrenProp,
    (child: React.ReactElement<TSegmentedControlProps, typeof SegmentedControl>) => {
      if (!React.isValidElement<typeof SegmentedControl>(child)) {
        return null;
      }

      if (child.type.displayName !== 'SegmentedControl') {
        console.error('Peculiar-UI: The SegmentedControls component doesn\'t accept a Element as not a SegmentedControl.');

        return null;
      }

      const childValue = child.props.id;
      const selected = childValue === value;

      return React.cloneElement(child, {
        selected,
        color: child.props.color ?? color,
        onChange,
      });
    },
  );

  return (
    <SegmentedControlsRoot
      ref={ref}
      role="tablist"
      color={color}
      {...other}
    >
      {children}
    </SegmentedControlsRoot>
  );
});

SegmentedControls.displayName = 'SegmentedControls';
