import * as React from 'react';
import { css, cx } from '../styles';
import { Typography } from '../Typography';

type BaseProps = {
  /**
   * The content of the component.
   */
  children: React.ReactNode;
  /**
   * If `true`, the chip will be disabled.
   */
  disabled?: boolean;
  /**
   * The variant to use.
   */
  variant?: ('choice' | 'filter');
  /**
   * If `true`, the chip will be selected.
   */
  selected: boolean;
  /**
  * Used to render icon elements inside the Chip
  */
  icon?: React.ReactNode;
  className?: string;
  dataTestId?: string;
};

type ChipProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const stylesBase = () => css({
  label: 'Chip',
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'inherit',
  outline: 'none',
  boxSizing: 'border-box',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'var(--pv-color-gray-6)',
  borderRadius: '15px',
  padding: '0 15px',
  height: '30px',
  backgroundColor: 'transparent',
  color: 'var(--pv-color-gray-9)',
  transition: 'background-color 200ms, color 200ms, border-color 200ms',
  '&:disabled': {
    cursor: 'not-allowed',
    color: 'var(--pv-color-gray-7)',
    borderColor: 'var(--pv-color-gray-4)',
    backgroundColor: 'transparent',
  },
});

const stylesEffects = () => css({
  cursor: 'pointer',
  '&:not(:disabled)': {
    '&:hover': {
      backgroundColor: 'var(--pv-color-gray-3)',
      color: 'var(--pv-color-gray-9)',
    },
    '&:focus': {
      backgroundColor: 'var(--pv-color-gray-5)',
      color: 'var(--pv-color-black)',
      borderColor: 'var(--pv-color-gray-9)',
    },
    '&:active': {
      backgroundColor: 'var(--pv-color-gray-4)',
      color: 'var(--pv-color-gray-9)',
      borderColor: 'var(--pv-color-gray-9)',
    },
  },
});

const stylesChoiceSelected = () => css({
  backgroundColor: 'var(--pv-color-secondary-tint-5)',
  color: 'var(--pv-color-secondary)',
  borderColor: 'var(--pv-color-secondary-tint-3)',
});

const stylesFilterSelected = () => css({
  backgroundColor: 'var(--pv-color-gray-4)',
  color: 'var(--pv-color-black)',
  borderColor: 'var(--pv-color-gray-7)',
});

const stylesIcon = () => css({
  marginRight: '10px',
  display: 'flex',
  alignItems: 'center',
});

export const Chip = React.forwardRef<HTMLButtonElement, ChipProps>((props, ref) => {
  const {
    children,
    className,
    dataTestId,
    disabled,
    variant,
    selected,
    icon,
  } = props;
  const isChoice = variant === 'choice';
  const Icon = !isChoice && selected && icon && (
    <div className={stylesIcon()}>
      {icon}
    </div>
  );

  return (
    <button
      disabled={disabled}
      ref={ref}
      type="button"
      className={cx({
        [stylesBase()]: true,
        [stylesChoiceSelected()]: selected && isChoice,
        [stylesFilterSelected()]: selected && !isChoice,
        [stylesEffects()]: !selected || !isChoice,
        [className]: !!className,
      })}
      tabIndex={selected && isChoice ? -1 : 1}
      data-testid={dataTestId}
    >
      {Icon}
      <Typography
        variant="b3"
      >
        {children}
      </Typography>
    </button>
  );
});

Chip.displayName = 'Chip';

Chip.defaultProps = {
  disabled: false,
  variant: 'choice',
};
