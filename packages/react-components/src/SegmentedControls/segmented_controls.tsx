import * as React from 'react';
import styled from '@emotion/styled';
import { Tabs } from '../Tabs';
import { SegmentedControl, TSegmentedControlProps } from './segmented_control';

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
const SegmentedControlsRoot = styled(Tabs)((props) => {
  const isDark = props.theme.mode === 'dark';
  let backgroundColor = 'var(--pv-color-gray-4)';

  if (isDark) {
    backgroundColor = 'var(--pv-color-gray-3)';
  }

  return {
    whiteSpace: 'nowrap',
    overflowX: 'auto',
    backgroundColor,
    borderRadius: 'calc(var(--pv-size-base) * 4)',
    display: 'inline-flex',
    padding: '2px',
    gap: '1px',
    boxSizing: 'border-box',
    height: 'calc(var(--pv-size-base) * 6)',
  };
});
/**
 *
 */

// eslint-disable-next-line @stylistic/max-len
export const SegmentedControls = React.forwardRef<HTMLDivElement, TSegmentedControlsProps>((props, ref) => (
  <SegmentedControlsRoot
    ref={ref}
    {...(props)}
  >
    {props.children}
  </SegmentedControlsRoot>
));

SegmentedControls.displayName = 'SegmentedControls';
