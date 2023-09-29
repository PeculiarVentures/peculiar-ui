import * as React from 'react';
import styled from '@emotion/styled';
import { Typography } from '../Typography';

/**
 * Types.
 */
type TextFieldOwnProps = {
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
};

type TextFieldProps = TextFieldOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'children'>;
/**
 *
 */

/**
 * Styles.
 */
const TextFieldInput = styled(Typography)<TextFieldProps>(
  (props) => ({
    fontFamily: 'inherit',
    outline: 'none',
    boxSizing: 'border-box',
    width: '100%',
    borderRadius: '4px',
    padding: '0 var(--pv-size-base-2)',
    backgroundColor: 'var(--pv-color-gray-1)',
    borderStyle: 'solid',
    borderWidth: '1px',
    transition: 'background-color 200ms, color 200ms, border-color 200ms',
    display: 'inline-flex',
    appearance: 'none',
    ...(props.size === 'small' && {
      height: 'var(--pv-size-base-6)',
    }),
    ...(props.size === 'medium' && {
      height: 'var(--pv-size-base-7)',
    }),
    ...(props.size === 'large' && {
      height: 'var(--pv-size-base-8)',
    }),
    '&:hover': {
      backgroundColor: 'var(--pv-color-gray-3)',
    },
    '&:disabled': {
      cursor: 'not-allowed',
      backgroundColor: 'var(--pv-color-gray-1)',
    },
  }),
  (props) => {
    if (props.theme.mode === 'dark') {
      return ({
        color: 'var(--pv-color-white)',
        borderColor: 'var(--pv-color-gray-5)',
        '&::placeholder': {
          color: 'var(--pv-color-gray-6)',
        },
        '&:hover': {
          borderColor: 'var(--pv-color-gray-4)',
        },
        '&:disabled': {
          borderColor: 'var(--pv-color-gray-4)',
          color: 'var(--pv-color-gray-4)',
        },
        '&:not(:disabled)': {
          '&[aria-invalid]': {
            backgroundColor: 'var(--pv-color-wrong-shade-4)',
            borderColor: 'var(--pv-color-wrong-shade-1)',
          },
          '&:focus': {
            backgroundColor: 'var(--pv-color-secondary-shade-4)',
            borderColor: 'var(--pv-color-secondary-shade-1)',
          },
        },
      });
    }

    return ({
      color: 'var(--pv-color-black)',
      borderColor: 'var(--pv-color-gray-8)',
      '&::placeholder': {
        color: 'var(--pv-color-gray-9)',
      },
      '&:hover': {
        borderColor: 'var(--pv-color-gray-7)',
      },
      '&:disabled': {
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
    });
  },
);

const TextFieldLabel = styled('label')({
  label: 'TextField-label',
  marginBottom: '2px',
  display: 'inline-block',
});

const TextFieldError = styled(Typography)({
  marginTop: '2px',
});
/**
 *
 */

export const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>((props, ref) => {
  const {
    size,
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
      ref={ref}
      {...other}
    >
      {label && (
        <TextFieldLabel
          htmlFor={id}
        >
          <Typography
            component="span"
            variant="c2"
            color="gray-10"
          >
            {label}
          </Typography>
        </TextFieldLabel>
      )}
      <TextFieldInput
        {...inputProps}
        // @ts-ignore
        component="input"
        variant={size === 'small' ? 'c1' : 'b3'}
        size={size}
        type={type}
        disabled={disabled}
        defaultValue={defaultValue}
        id={id}
        value={value}
        required={required}
        name={name}
        ref={inputRef}
        autoFocus={autoFocus}
        aria-invalid={error || undefined}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
      />
      {error && errorText && (
        <TextFieldError
          variant="c2"
          color="wrong"
        >
          {errorText}
        </TextFieldError>
      )}
    </div>
  );
});

TextField.displayName = 'TextField';

TextField.defaultProps = {
  disabled: false,
  size: 'medium',
};
