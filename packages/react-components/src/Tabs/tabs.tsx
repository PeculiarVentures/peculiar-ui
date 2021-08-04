import * as React from 'react';
import { css, cx } from '../styles';
import { Tab, TabBaseProps } from './tab';

type BaseProps = {
  /**
   * The content of the component.
   */
  children: React.ReactElement<TabBaseProps, typeof Tab>[];
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

type TabsBaseProps = BaseProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>;

const stylesBase = () => css({
  label: 'Tabs',
  whiteSpace: 'nowrap',
  overflowX: 'auto',
});

export const Tabs = React.forwardRef<HTMLDivElement, TabsBaseProps>((props, ref) => {
  const {
    children: childrenProp,
    className,
    onChange,
    value,
    ...other
  } = props;

  const children = React.Children.map(childrenProp, (child) => {
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
      // @ts-ignore
      selected,
      onChange,
    });
  });

  return (
    <div
      {...other}
      ref={ref}
      role="tablist"
      className={cx({
        [stylesBase()]: true,
        [className]: !!className,
      })}
    >
      {children}
    </div>
  );
});
