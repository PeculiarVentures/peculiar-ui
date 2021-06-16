import * as React from 'react';
import { css, cx } from '../styles';

type BaseProps = {
  className?: string;
  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue?: number;
  /**
   * The value of the slider.
   */
  value?: number;
  /**
   * If `true`, the slider will be disabled.
   */
  disabled?: boolean;
  /**
   * The maximum allowed value of the slider. Should not be equal to min.
   */
  max?: number;
  /**
   * The minimum allowed value of the slider. Should not be equal to max.
   */
  min?: number;
  /**
   * Name attribute of the hidden `input` element.
   */
  name?: string;
  /**
   * The granularity with which the slider can step through values
   */
  step?: number;
  /**
   * Callback function that is fired when the slider's value changed.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  'data-testid'?: string;
};

export type SliderProps = BaseProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

const stylesBase = () => css({
  label: 'Slider',
  height: '16px',
  width: '100%',
});

const stylesInput = () => css({
  label: 'Slider-input',
  appearance: 'none',
  width: '100%',
  height: '100%',
  outline: 'none',
  backgroundColor: 'var(--pv-color-primary-shade-1)',
  borderRadius: '16px',
  margin: 0,
  padding: 0,
  cursor: 'pointer',
  transition: 'background-color 200ms',
  '&::-webkit-slider-thumb': {
    appearance: 'none',
    height: '16px',
    width: '16px',
    backgroundColor: 'var(--pv-color-primary-tint-5)',
    border: '1px solid var(--pv-color-primary-shade-3)',
    borderRadius: '50%',
    cursor: 'inherit',
    transition: 'background-color 200ms, border-color 200ms',
  },
  '&::-moz-range-thumb': {
    appearance: 'none',
    height: '16px',
    width: '16px',
    backgroundColor: 'var(--pv-color-primary-tint-5)',
    border: '1px solid var(--pv-color-primary-shade-3)',
    borderRadius: '50%',
    cursor: 'inherit',
    transition: 'background-color 200ms, border-color 200ms',
  },
  '&:not(:disabled)': {
    '&:hover': {
      backgroundColor: 'var(--pv-color-primary-tint-1)',
    },
    '&:focus': {
      backgroundColor: 'var(--pv-color-primary-tint-2)',
    },
  },
  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: 'var(--pv-color-gray-4)',
    '&::-webkit-slider-thumb': {
      backgroundColor: 'var(--pv-color-gray-8)',
      borderColor: 'var(--pv-color-gray-8)',
    },
    '&::-moz-range-thumb': {
      backgroundColor: 'var(--pv-color-gray-8)',
      borderColor: 'var(--pv-color-gray-8)',
    },
  },
});

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  const {
    className,
    defaultValue,
    value,
    disabled,
    max,
    min,
    name,
    step,
    onChange,
    ...other
  } = props;

  return (
    <div
      {...other}
      ref={ref}
      className={cx({
        [stylesBase()]: true,
        [className]: !!className,
      })}
    >
      <input
        type="range"
        name={name}
        min={min}
        max={max}
        step={step}
        className={cx(stylesInput())}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
});

Slider.displayName = 'Slider';

Slider.defaultProps = {
  disabled: false,
  max: 100,
  min: 0,
  step: 1,
  defaultValue: 0,
};
