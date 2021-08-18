import * as React from 'react';
import { css, cx } from '../styles';
import { Typography } from '../Typography';
import { ArrowDropDownIcon } from '../icons';

type BaseProps = {
  options: {
    value: string;
    label: string;
  }[];
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * The size of the select.
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
   * Attributes applied to the `input` element.
   */
  inputProps?: React.SelectHTMLAttributes<HTMLSelectElement>;
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue?: string;
  /**
   * The id of the `input` element.
   */
  id?: string;
  /**
   * The label of the input. It is only used for layout.
   */
  label?: string;
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value?: string;
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder?: string;
  /**
   * If `true`, the `input` element is required.
   */
  required?: boolean;
  /**
   * Name attribute of the `input` element.
   */
  name?: string;
  /**
   * Pass a ref to the `input` element.
   */
  inputRef?: React.ForwardedRef<HTMLSelectElement>;
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus?: boolean;
  /**
   * If `true`, the `input` will indicate an error.
   */
  error?: boolean;
  errorText?: string;
  /**
   * Callback fired when the value is changed.
   */
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  'data-testid'?: string;
};

type SelectProps = BaseProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>;

const stylesInputBase = () => css({
  label: 'Select-input',
  fontFamily: 'inherit',
  outline: 'none',
  cursor: 'pointer',
  boxSizing: 'border-box',
  width: '100%',
  borderRadius: '4px',
  padding: '0 calc(var(--pv-size-base-2) + 24px) 0 var(--pv-size-base-2)',
  color: 'var(--pv-color-black)',
  backgroundColor: 'var(--pv-color-gray-1)',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'var(--pv-color-gray-8)',
  transition: 'background-color 200ms, color 200ms, border-color 200ms',
  display: 'block',
  appearance: 'none',
  '&:hover': {
    backgroundColor: 'var(--pv-color-gray-3)',
    borderColor: 'var(--pv-color-gray-7)',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: 'var(--pv-color-gray-1)',
    borderColor: 'var(--pv-color-gray-5)',
    color: 'var(--pv-color-gray-7)',
  },
  '&:not(:disabled)': {
    '&[aria-invalid]': {
      backgroundColor: 'var(--pv-color-wrong-tint-5)',
      borderColor: 'var(--pv-color-wrong-tint-3)',
    },
    '&:focus': {
      backgroundColor: 'var(--pv-color-secondary-tint-5)',
      borderColor: 'var(--pv-color-secondary-tint-3)',
    },
  },
}, {
  fontWeight: 'var(--pv-text-c1-weight)',
  fontSize: 'var(--pv-text-c1-size)',
  lineHeight: 'var(--pv-text-c1-height)',
  letterSpacing: 'var(--pv-text-c1-spacing)',
} as any);

const stylesInputSizeSmall = () => css({
  label: 'small',
  height: 'var(--pv-size-base-6)',
});

const stylesInputSizeMedium = () => css({
  label: 'medium',
  height: 'var(--pv-size-base-7)',
});

const stylesInputSizeLarge = () => css({
  label: 'large',
  height: 'var(--pv-size-base-8)',
});

const stylesLabel = () => css({
  label: 'Select-label',
  marginBottom: '2px',
  display: 'inline-block',
});

const stylesError = () => css({
  label: 'Select-error',
  marginTop: '2px',
});

const stylesInputContainer = () => css({
  label: 'Select-container',
  position: 'relative',
});

const stylesInputArrowIcon = () => css({
  label: 'Select-arrow-icon',
  position: 'absolute',
  right: '0px',
  top: 'calc(50% - 12px)',
  pointerEvents: 'none',
  margin: '0px var(--pv-size-base)',
  color: 'var(--pv-color-gray-10)',
});

const stylesInputArrowIconDisabled = () => css({
  label: 'disabled',
  color: 'var(--pv-color-gray-7)',
});

export const Select = React.forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
  const {
    options,
    size,
    className,
    label,
    onChange,
    inputProps,
    disabled,
    defaultValue,
    id,
    value,
    placeholder,
    required,
    name,
    inputRef,
    error,
    errorText,
    autoFocus,
    ...other
  } = props;

  return (
    <div
      {...other}
      ref={ref}
      className={className}
    >
      {label && (
        <label
          htmlFor={id}
          className={cx({
            [stylesLabel()]: true,
          })}
        >
          <Typography
            component="span"
            variant="c2"
            color="gray-10"
          >
            {label}
          </Typography>
        </label>
      )}
      <div className={cx(stylesInputContainer())}>
        <select
          disabled={disabled}
          defaultValue={defaultValue}
          id={id}
          value={value}
          required={required}
          name={name}
          ref={inputRef}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={autoFocus}
          className={cx({
            [stylesInputBase()]: true,
            [stylesInputSizeSmall()]: size === 'small',
            [stylesInputSizeMedium()]: size === 'medium',
            [stylesInputSizeLarge()]: size === 'large',
          })}
          aria-invalid={error || undefined}
          onChange={onChange}
          {...inputProps}
        >
          {placeholder && (
            <option value="">
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
        <ArrowDropDownIcon
          className={cx({
            [stylesInputArrowIcon()]: true,
            [stylesInputArrowIconDisabled()]: disabled,
          })}
          aria-hidden
        />
      </div>
      {error && errorText && (
        <Typography
          variant="c2"
          color="wrong"
          className={cx({
            [stylesError()]: true,
          })}
        >
          {errorText}
        </Typography>
      )}
    </div>
  );
});

Select.displayName = 'Select';

Select.defaultProps = {
  disabled: false,
  size: 'medium',
};
