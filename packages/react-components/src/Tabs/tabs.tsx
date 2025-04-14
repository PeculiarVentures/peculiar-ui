import * as React from 'react';
import styled from '@emotion/styled';
import { Tab, TTabProps } from './tab';

/**
 * Types.
 */
interface ITabsOwnProps {
  /**
   * The content of the component.
   */
  children: React.ReactElement<TTabProps, typeof Tab>[];
  /**
   * The value of the currently selected `Tab`.
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

type TTabsProps = ITabsOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>;
/**
 *
 */

/**
 * Styles.
 */
const TabsRoot = styled('div')({
  whiteSpace: 'nowrap',
  overflowX: 'auto',
});
/**
 *
 */

export const Tabs = React.forwardRef<HTMLDivElement, TTabsProps>((props, ref) => {
  const {
    children: childrenProp,
    value,
    onChange,
    ...other
  } = props;

  const children = React.Children.map(
    childrenProp,
    (child: React.ReactElement<TTabProps, typeof Tab>) => {
      if (!React.isValidElement<typeof Tab>(child)) {
        return null;
      }

      if (child.type.displayName !== 'Tab') {
        console.error('Peculiar-UI: The Tabs component doesn\'t accept a Element as not a Tab.');

        return null;
      }

      const childValue = child.props.id;
      const selected = childValue === value;

      return React.cloneElement(child, {
        selected,
        onChange,
      });
    },
  );

  return (
    <TabsRoot
      ref={ref}
      role="tablist"
      {...other}
    >
      {children}
    </TabsRoot>
  );
});

Tabs.displayName = 'Tabs';
