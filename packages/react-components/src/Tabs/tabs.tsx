import * as React from 'react';
import styled from '@emotion/styled';
import { Tab, TabProps } from './tab';

type BaseProps = {
  /**
   * The content of the component.
   */
  children: React.ReactElement<TabProps, typeof Tab>[];
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

type TabsProps = BaseProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>;

/**
 * Styles.
 */
const TabsRoot = styled('div')<TabsProps>({
  whiteSpace: 'nowrap',
  overflowX: 'auto',
});
/**
 *
 */

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const {
    children: childrenProp,
    onChange,
    ...other
  } = props;

  const children = React.Children.map(
    childrenProp,
    (child: React.ReactElement<TabProps, typeof Tab>) => {
      if (!React.isValidElement<typeof Tab>(child)) {
        return null;
      }

      if (child.type.displayName !== 'Tab') {
        console.error('Peculiar-UI: The Tabs component doesn\'t accept a Element as not a Tab.');

        return null;
      }

      const childValue = child.props.id;
      const selected = childValue === props.value;

      return React.cloneElement(child, {
        // @ts-ignore
        selected,
        onChange,
      });
    },
  );

  return (
    <TabsRoot
      {...other}
      ref={ref}
      role="tablist"
    >
      {children}
    </TabsRoot>
  );
});
