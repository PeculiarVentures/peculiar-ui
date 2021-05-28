import * as React from 'react';
import { css, cx } from '../styles';
import { Typography } from '../Typography';

type BaseProps = {
  /**
   * The content of the component.
   */
  children: React.ReactNode;
  /**
   * If `true`, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * The variant to use.
   */
  variant?: (
    'contained' |
    'outlined' |
    'text'
  );
  /**
   * The color of the component.
   */
  color?: (
    'primary' |
    'secondary' |
    'wrong' |
    'white' |
    'default'
  );
  /**
   * The size of the button.
   */
  size?: (
    'small' |
    'medium' |
    'large'
  );
  /**
   * The className of the component.
   */
  className?: string;
  /**
   * The component used for the root node.
   */
  component?: React.ElementType;
  'data-testid'?: string;
};

export type ButtonBaseProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const stylesBase = () => css({
  label: 'ButtonBase',
  fontFamily: 'inherit',
  outline: 'none',
  cursor: 'pointer',
  boxSizing: 'border-box',
  border: '1px solid transparent',
  transition: 'background-color 200ms, color 200ms, box-shadow 200ms, border-color 200ms',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  backgroundColor: 'transparent',
  padding: 0,
  textDecoration: 'none',
  '&:disabled': {
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
});

const stylesVariantText = (props: ButtonBaseProps) => css({
  label: `text-${props.color}`,
  ...(props.color === 'default' && ({
    color: 'var(--pv-color-black)',
    '&:not(:disabled)': {
      '&:hover': {
        backgroundColor: 'var(--pv-color-gray-3)',
      },
      '&:focus': {
        backgroundColor: 'var(--pv-color-gray-4)',
      },
      '&:active': {
        backgroundColor: 'var(--pv-color-gray-5)',
      },
    },
  })),
  ...(props.color === 'white' && ({
    color: `var(--pv-color-${props.color})`,
    '&:not(:disabled)': {
      '&:hover': {
        backgroundColor: 'var(--pv-color-gray-7)',
      },
      '&:focus': {
        backgroundColor: 'var(--pv-color-gray-8)',
      },
      '&:active': {
        backgroundColor: 'var(--pv-color-gray-9)',
      },
    },
  })),
  ...(props.color !== 'default' && props.color !== 'white' && ({
    color: `var(--pv-color-${props.color})`,
    '&:not(:disabled)': {
      '&:hover': {
        backgroundColor: `var(--pv-color-${props.color}-tint-5)`,
      },
      '&:focus': {
        backgroundColor: `var(--pv-color-${props.color}-tint-4)`,
      },
      '&:active': {
        backgroundColor: `var(--pv-color-${props.color}-tint-3)`,
      },
    },
  })),
  '&:disabled': {
    color: 'var(--pv-color-gray-7)',
  },
});

const stylesVariantContained = (props: ButtonBaseProps) => css({
  label: `outlined-${props.color}`,
  boxShadow: 'var(--pv-shadow-light-low)',
  ...(props.color === 'default' && ({
    backgroundColor: 'var(--pv-color-gray-8)',
    color: 'var(--pv-color-black)',
    '&:not(:disabled)': {
      '&:hover': {
        backgroundColor: 'var(--pv-color-gray-7)',
      },
      '&:focus': {
        backgroundColor: 'var(--pv-color-gray-6)',
      },
      '&:active': {
        backgroundColor: 'var(--pv-color-gray-5)',
        boxShadow: 'var(--pv-shadow-light-medium)',
      },
    },
  })),
  ...(props.color === 'white' && ({
    backgroundColor: 'var(--pv-color-white)',
    color: 'var(--pv-color-black)',
    '&:not(:disabled)': {
      '&:hover': {
        backgroundColor: 'var(--pv-color-gray-7)',
      },
      '&:focus': {
        backgroundColor: 'var(--pv-color-gray-6)',
      },
      '&:active': {
        backgroundColor: 'var(--pv-color-gray-5)',
        boxShadow: 'var(--pv-shadow-light-medium)',
      },
    },
  })),
  ...(props.color !== 'default' && props.color !== 'white' && ({
    backgroundColor: `var(--pv-color-${props.color})`,
    color: 'var(--pv-color-white)',
    '&:not(:disabled)': {
      '&:hover': {
        backgroundColor: `var(--pv-color-${props.color}-tint-1)`,
      },
      '&:focus': {
        backgroundColor: `var(--pv-color-${props.color}-tint-2)`,
      },
      '&:active': {
        backgroundColor: `var(--pv-color-${props.color}-tint-2)`,
        boxShadow: 'var(--pv-shadow-light-medium)',
      },
    },
  })),
  '&:disabled': {
    color: 'var(--pv-color-gray-8)',
    backgroundColor: 'var(--pv-color-gray-4)',
  },
});

const stylesVariantOutlined = (props: ButtonBaseProps) => css({
  label: `contained-${props.color}`,
  ...(props.color === 'default' && ({
    color: 'var(--pv-color-black)',
    borderColor: 'var(--pv-color-gray-8)',
    '&:not(:disabled)': {
      '&:hover': {
        backgroundColor: 'var(--pv-color-gray-3)',
      },
      '&:focus': {
        backgroundColor: 'var(--pv-color-gray-4)',
      },
      '&:active': {
        backgroundColor: 'var(--pv-color-gray-5)',
      },
    },
  })),
  ...(props.color === 'white' && ({
    color: 'var(--pv-color-white)',
    borderColor: 'var(--pv-color-white)',
    '&:not(:disabled)': {
      '&:hover': {
        backgroundColor: 'var(--pv-color-gray-7)',
      },
      '&:focus': {
        backgroundColor: 'var(--pv-color-gray-8)',
      },
      '&:active': {
        backgroundColor: 'var(--pv-color-gray-9)',
      },
    },
  })),
  ...(props.color !== 'default' && props.color !== 'white' && ({
    color: `var(--pv-color-${props.color})`,
    borderColor: `var(--pv-color-${props.color}-tint-2)`,
    '&:not(:disabled)': {
      '&:hover': {
        backgroundColor: `var(--pv-color-${props.color}-tint-5)`,
      },
      '&:focus': {
        backgroundColor: `var(--pv-color-${props.color}-tint-4)`,
      },
      '&:active': {
        backgroundColor: `var(--pv-color-${props.color}-tint-3)`,
      },
    },
  })),
  '&:disabled': {
    color: 'var(--pv-color-gray-8)',
    borderColor: 'var(--pv-color-gray-4)',
  },
});

const stylesLabel = () => css({
  label: 'ButtonBase-label',
  width: '100%',
  display: 'inherit',
  alignItems: 'inherit',
  justifyContent: 'inherit',
});

export const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>((props, ref) => {
  const {
    variant,
    color,
    size,
    className,
    children,
    type = 'button',
    component: componentProp,
    ...other
  } = props;

  const Component = componentProp || 'button';

  return (
    <Component
      {...other}
      ref={ref}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={cx({
        [stylesBase()]: true,
        [stylesVariantText(props)]: variant === 'text',
        [stylesVariantContained(props)]: variant === 'contained',
        [stylesVariantOutlined(props)]: variant === 'outlined',
        [className]: !!className,
      })}
    >
      <Typography
        variant={size === 'small' ? 'btn2' : 'btn1'}
        className={cx(stylesLabel())}
      >
        {children}
      </Typography>
    </Component>
  );
});

ButtonBase.displayName = 'ButtonBase';

ButtonBase.defaultProps = {
  variant: 'text',
  color: 'default',
  component: 'button',
};
