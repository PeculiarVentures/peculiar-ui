import * as React from 'react';
import styled from '@emotion/styled';
import { Typography } from '../Typography';
import { useId } from '../hooks/use_id';

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
   * The label content.
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
  /**
   * Callback fired when the value is changed.
   */
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
};

type TextareaFieldProps = TextareaFieldOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'children'>;
/**
 *
 */

/**
 * Styles.
 */
const TextareaFieldInput = styled(Typography)<TextareaFieldProps>(
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
    const borderColorHover = 'var(--pv-color-gray-10)';
    let borderColorDisabled = 'var(--pv-color-gray-5)';
    let colorDisabled = 'var(--pv-color-gray-7)';
    const invalidBorderColor = 'var(--pv-color-wrong)';
    const borderColorFocus = 'var(--pv-color-secondary)';

    if (isDark) {
      borderColor = 'var(--pv-color-gray-5)';
      colorPlaceholder = 'var(--pv-color-gray-6)';
      borderColorDisabled = 'var(--pv-color-gray-4)';
      colorDisabled = 'var(--pv-color-gray-4)';
    }

    return ({
      color,
      borderColor,
      '&::placeholder': {
        color: colorPlaceholder,
      },
      '&:hover': {
        borderColor: borderColorHover,
      },
      '&:disabled': {
        cursor: 'not-allowed',
        borderColor: borderColorDisabled,
        color: colorDisabled,
      },
      '&:not(:disabled)': {
        '&[aria-invalid]': {
          borderColor: invalidBorderColor,
        },
        '&:focus-visible': {
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
    inputProps = {},
    disabled,
    defaultValue,
    id: idProp,
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
  const id = useId(idProp);
  const inputLabelId = label && id ? `${id}-label` : undefined;

  return (
    <div
      ref={ref}
      {...other}
    >
      {label && (
        <TextareaFieldLabel
          htmlFor={id}
          id={inputLabelId}
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
        component="textarea"
        variant={size === 'small' ? 'c1' : 'b3'}
        size={size}
        disabled={disabled}
        defaultValue={defaultValue}
        id={id}
        value={value}
        required={required}
        name={name}
        // @ts-ignore
        ref={inputRef}
        autoFocus={autoFocus}
        aria-invalid={error || undefined}
        // @ts-ignore
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
