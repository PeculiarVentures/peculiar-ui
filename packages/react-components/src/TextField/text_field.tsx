import * as React from 'react';
import { css, cx } from '../styles';
import { Typography } from '../Typography';

type BaseProps = {
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * The size of the input.
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
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
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
  /**
   * It prevents the user from changing the value of
   * the field (not from interacting with the field).
   */
  readOnly?: boolean;
  /**
   * Type of the `input` element.
   */
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  /**
   * Callback fired when the value is changed.
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  'data-testid'?: string;
};

type TextFieldProps = BaseProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'children'>;

const stylesInputBase = () => css({
  label: 'TextField',
  fontFamily: 'inherit',
  outline: 'none',
  boxSizing: 'border-box',
  width: '100%',
  borderRadius: '4px',
  padding: '0 var(--pv-size-base-2)',
  color: 'var(--pv-color-black)',
  backgroundColor: 'var(--pv-color-gray-1)',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'var(--pv-color-gray-8)',
  transition: 'background-color 200ms, color 200ms, border-color 200ms',
  display: 'inline-flex',
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
  label: 'TextField-label',
  marginBottom: '2px',
  display: 'inline-block',
});

const stylesError = () => css({
  label: 'TextField-error',
  marginTop: '2px',
});

export const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>((props, ref) => {
  const {
    size,
    className,
    label,
    inputProps = {},
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
    type = 'text',
    onChange,
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
      <input
        {...inputProps}
        type={type}
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
          [inputProps.className]: !!inputProps.className,
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
