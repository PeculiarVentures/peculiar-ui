import * as React from 'react';
import { css, cx } from '../styles';
import { Typography } from '../Typography';

type BaseProps = {
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  size?: (
    'small' |
    'medium' |
    'large'
  );
  className?: string;
  dataTestId?: string;
  /**
   * Attributes applied to the `input` element.
   */
  inputProps?: React.SelectHTMLAttributes<HTMLInputElement>;
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue?: string;
  /**
   * The id of the `input` element.
   */
  id?: string;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
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
  inputRef?: React.ForwardedRef<HTMLInputElement>;
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus?: boolean;
  /**
   * If `true`, the `input` will indicate an error.
   */
  error?: boolean;
  errorText?: string;
  readOnly?: boolean;
};

type TextFieldProps = BaseProps & React.HTMLAttributes<HTMLDivElement>;

const stylesInputBase = () => css({
  label: 'TextField',
  fontFamily: 'inherit',
  outline: 'none',
  boxSizing: 'border-box',
  width: '100%',
  borderRadius: '4px',
  padding: '0 36px 0 10px',
  color: 'var(--pv-color-black)',
  backgroundColor: 'var(--pv-color-gray-1)',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'var(--pv-color-gray-8)',
  transition: 'background-color 200ms, color 200ms, border-color 200ms',
  display: 'block',
  appearance: 'none',
  '&::placeholder': {
    color: 'var(--pv-color-gray-9)',
  },
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
  height: '30px',
});

const stylesInputSizeMedium = () => css({
  label: 'medium',
  height: '35px',
});

const stylesInputSizeLarge = () => css({
  label: 'large',
  height: '40px',
});

const stylesLabel = () => css({
  label: 'TextFieldLabel',
  marginBottom: '8px',
  display: 'inline-block',
});

const stylesError = () => css({
  label: 'TextFieldError',
  marginTop: '2px',
});

export const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>((props, ref) => {
  const {
    size,
    className,
    label,
    onChange,
    dataTestId,
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
    readOnly,
    ...other
  } = props;

  return (
    <div
      {...other}
      ref={ref}
      data-testid={dataTestId}
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
            variant="s2"
            as="span"
          >
            {label}
          </Typography>
        </label>
      )}
      <input
        {...inputProps}
        type="text"
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
        placeholder={placeholder}
        readOnly={readOnly}
      />
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

TextField.displayName = 'TextField';

TextField.defaultProps = {
  disabled: false,
  size: 'medium',
};
