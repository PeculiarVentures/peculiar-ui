import * as React from 'react';
import { css, cx } from '../css';

type BaseProps = {
  children: React.ReactNode;
  variant?: (
    'h1' |
    'h2' |
    'h3' |
    'h4' |
    'h5' |
    's1' |
    's2' |
    'b1' |
    'b2' |
    'btn1' |
    'btn2' |
    'c1' |
    'c2'
  );
  color?: (
    'primary-tint-5' |
    'primary-tint-4' |
    'primary-tint-3' |
    'primary-tint-2' |
    'primary-tint-1' |
    'primary' |
    'primary-shade-1' |
    'primary-shade-2' |
    'primary-shade-3' |
    'primary-shade-4' |
    'primary-shade-5' |
    'secondary-tint-5' |
    'secondary-tint-4' |
    'secondary-tint-3' |
    'secondary-tint-2' |
    'secondary-tint-1' |
    'secondary' |
    'secondary-shade-1' |
    'secondary-shade-2' |
    'secondary-shade-3' |
    'secondary-shade-4' |
    'secondary-shade-5' |
    'danger-tint-5' |
    'danger-tint-4' |
    'danger-tint-3' |
    'danger-tint-2' |
    'danger-tint-1' |
    'danger' |
    'danger-shade-1' |
    'danger-shade-2' |
    'danger-shade-3' |
    'danger-shade-4' |
    'danger-shade-5' |
    'success' |
    'attention' |
    'extra-1' |
    'extra-2' |
    'black' |
    'gray-10' |
    'gray-9' |
    'gray-8' |
    'gray-7' |
    'gray-6' |
    'gray-5' |
    'gray-4' |
    'gray-3' |
    'gray-2' |
    'gray-1' |
    'white'
  );
  className?: string;
  as?: React.ElementType,
};

type TypographyProps = BaseProps & React.HTMLAttributes<HTMLElement>;

const stylesBase = css(
  {
    label: 'Typography',
  },
  {
    margin: 0,
    padding: 0,
  },
);

export const Typography = React.forwardRef<HTMLElement, TypographyProps>((props, ref?: any) => {
  const {
    variant,
    className,
    as,
    color,
    ...other
  } = props;
  let asComponent = 'p';

  if (/h/.test(variant)) {
    asComponent = variant;
  } else if (/s/.test(variant)) {
    asComponent = 'h6';
  } else if (/btn/.test(variant)) {
    asComponent = 'span';
  }

  return React.createElement(as || asComponent, {
    ref,
    className: cx(
      stylesBase,
      css(
        {
          label: variant,
        },
        {
          fontWeight: `var(--pv-text-${variant}-weight)`,
          fontSize: `var(--pv-text-${variant}-size)`,
          lineHeight: `var(--pv-text-${variant}-height)`,
          letterSpacing: `var(--pv-text-${variant}-spacing)`,
        } as any,
      ),
      (color && css(
        {
          label: color,
        },
        {
          color: `var(--pv-color-${color})`,
        },
      )),
      className,
    ),
    ...other,
  });
});

Typography.displayName = 'Typography';

Typography.defaultProps = {
  variant: 'b1',
};
