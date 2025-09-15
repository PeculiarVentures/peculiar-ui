import * as React from 'react';
import styled from '@emotion/styled';
import { Typography } from '../Typography';
import { useId } from '../hooks/use_id';

/**
 * Types.
 */
interface ITextFieldOwnProps {
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * The size of the input.
   * @default 'medium'
   */
  size?: (
    'small'
    | 'medium'
    | 'large'
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

type TTextFieldProps = ITextFieldOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'children'>;
/**
 *
 */

/**
 * Styles.
 */
const TextFieldInput = styled(Typography)<TTextFieldProps>(
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
        '&::placeholder': {
          color: colorDisabled,
        },
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

export const TextField = React.forwardRef<HTMLDivElement, TTextFieldProps>((props, ref) => {
  const {
    size = 'medium',
    label,
    inputProps = {},
    disabled = false,
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
    type = 'text',
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
        <TextFieldLabel
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
        </TextFieldLabel>
      )}
      <TextFieldInput
        {...inputProps}
        // @ts-expect-error: `component` is not a valid prop
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
        aria-invalid={error || undefined}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={inputRef}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={autoFocus}
        onChange={onChange}
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
