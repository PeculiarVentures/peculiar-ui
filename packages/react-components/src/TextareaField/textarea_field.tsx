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
const TextareaFieldInput = styled('textarea')<Required<Pick<TextareaFieldProps, 'size'>>>(
  (props) => ({
    fontFamily: 'inherit',
    outline: 'none',
    boxSizing: 'border-box',
    width: '100%',
    borderRadius: '4px',
    padding: 'var(--pv-size-base) var(--pv-size-base-2)',
    backgroundColor: 'var(--pv-color-gray-1)',
    borderStyle: 'solid',
    borderWidth: '1px',
    transition: 'background-color 200ms, color 200ms, border-color 200ms',
    display: 'block',
    appearance: 'none',
    resize: 'none',
    fontWeight: 'var(--pv-text-c1-weight)' as 'normal',
    fontSize: 'var(--pv-text-c1-size)',
    lineHeight: 'var(--pv-text-c1-height)',
    letterSpacing: 'var(--pv-text-c1-spacing)',
    ...(props.size === 'small' && {
      minHeight: 'var(--pv-size-base-12)',
    }),
    ...(props.size === 'medium' && {
      minHeight: 'var(--pv-size-base-14)',
    }),
    ...(props.size === 'large' && {
      minHeight: 'var(--pv-size-base-16)',
    }),
  }),
  (props) => {
    const isDark = props.theme.mode === 'dark';
    const color = isDark
      ? 'var(--pv-color-white)'
      : 'var(--pv-color-black)';

    let borderColor = 'var(--pv-color-gray-8)';
    let colorPlaceholder = 'var(--pv-color-gray-9)';
    let borderColorHover = 'var(--pv-color-gray-7)';
    let borderColorDisabled = 'var(--pv-color-gray-5)';
    let colorDisabled = 'var(--pv-color-gray-7)';
    let invalidBackgroundColor = 'var(--pv-color-wrong-tint-5)';
    let invalidBorderColor = 'var(--pv-color-wrong-tint-3)';
    let backgroundColorFocus = 'var(--pv-color-secondary-tint-5)';
    let borderColorFocus = 'var(--pv-color-secondary-tint-3)';

    if (isDark) {
      borderColor = 'var(--pv-color-gray-5)';
      colorPlaceholder = 'var(--pv-color-gray-6)';
      borderColorHover = 'var(--pv-color-gray-4)';
      borderColorDisabled = 'var(--pv-color-gray-4)';
      colorDisabled = 'var(--pv-color-gray-4)';
      invalidBackgroundColor = 'var(--pv-color-wrong-shade-4)';
      invalidBorderColor = 'var(--pv-color-wrong-shade-1)';
      backgroundColorFocus = 'var(--pv-color-secondary-shade-4)';
      borderColorFocus = 'var(--pv-color-secondary-shade-1)';
    }

    return ({
      color,
      borderColor,
      '&::placeholder': {
        color: colorPlaceholder,
      },
      '&:hover': {
        backgroundColor: 'var(--pv-color-gray-3)',
        borderColor: borderColorHover,
      },
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: 'var(--pv-color-gray-1)',
        borderColor: borderColorDisabled,
        color: colorDisabled,
      },
      '&:not(:disabled)': {
        '&[aria-invalid]': {
          backgroundColor: invalidBackgroundColor,
          borderColor: invalidBorderColor,
        },
        '&:focus': {
          backgroundColor: backgroundColorFocus,
          borderColor: borderColorFocus,
        },
      },
    });
  },
);

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
