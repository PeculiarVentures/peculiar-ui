import * as React from 'react';
import styled from '@emotion/styled';
import { Typography } from '../Typography';

/**
 * Types.
 */
type TextareaFieldOwnProps = {
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
  inputProps?: Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, 'size'>;
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
   * Callback fired when the value is changed.
   */
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
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
  inputRef?: React.ForwardedRef<HTMLTextAreaElement>;
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
};

type TextareaFieldProps = TextareaFieldOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>;
/**
 *
 */

/**
 * Styles.
 */
const TextareaFieldInput = styled('textarea')<Pick<TextareaFieldProps, 'size'>>((props) => ({
  fontFamily: 'inherit',
  outline: 'none',
  boxSizing: 'border-box',
  width: '100%',
  borderRadius: '4px',
  padding: 'var(--pv-size-base) var(--pv-size-base-2)',
  color: 'var(--pv-color-black)',
  backgroundColor: 'var(--pv-color-gray-1)',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'var(--pv-color-gray-8)',
  transition: 'background-color 200ms, color 200ms, border-color 200ms',
  display: 'block',
  appearance: 'none',
  resize: 'none',
  fontWeight: 'var(--pv-text-c1-weight)' as 'normal',
  fontSize: 'var(--pv-text-c1-size)',
  lineHeight: 'var(--pv-text-c1-height)',
  letterSpacing: 'var(--pv-text-c1-spacing)',
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
  ...(props.size === 'small' && {
    minHeight: 'var(--pv-size-base-12)',
  }),
  ...(props.size === 'medium' && {
    minHeight: 'var(--pv-size-base-14)',
  }),
  ...(props.size === 'large' && {
    minHeight: 'var(--pv-size-base-16)',
  }),
}));

const TextareaFieldLabel = styled('label')({
  marginBottom: '2px',
  display: 'inline-block',
});

const TextareaFieldError = styled(Typography)({
  marginTop: '2px',
});
/**
 *
 */

export const TextareaField = React.forwardRef<HTMLDivElement, TextareaFieldProps>((props, ref) => {
  const {
    size,
    label,
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
    onChange,
    ...other
  } = props;

  return (
    <div
      ref={ref}
      {...other}
    >
      {label && (
        <TextareaFieldLabel
          htmlFor={id}
        >
          <Typography
            component="span"
            variant="c2"
            color="gray-10"
          >
            {label}
          </Typography>
        </TextareaFieldLabel>
      )}
      <TextareaFieldInput
        {...inputProps}
        size={size}
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
        <TextareaFieldError
          variant="c2"
          color="wrong"
        >
          {errorText}
        </TextareaFieldError>
      )}
    </div>
  );
});

TextareaField.displayName = 'TextareaField';

TextareaField.defaultProps = {
  disabled: false,
  size: 'medium',
};
