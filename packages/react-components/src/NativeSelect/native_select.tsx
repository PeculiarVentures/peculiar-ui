import * as React from 'react';
import styled from '@emotion/styled';
import { Typography } from '../Typography';
import { ArrowDropDownIcon } from '../icons';

/**
 * Types.
 */
type NativeSelectOwnProps = {
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
};

type NativeSelectProps = NativeSelectOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>;
type NativeSelectRootProps = React.HTMLAttributes<HTMLSelectElement> & {
  selectSize?: NativeSelectOwnProps['size']
};
/**
 *
 */

/**
 * Styles.
 */
const NativeSelectRoot = styled('select')<NativeSelectRootProps>(
  (props) => ({
    fontFamily: 'inherit',
    outline: 'none',
    cursor: 'pointer',
    boxSizing: 'border-box',
    width: '100%',
    borderRadius: '4px',
    padding: '0 calc(var(--pv-size-base-2) + 24px) 0 var(--pv-size-base-2)',
    backgroundColor: 'var(--pv-color-gray-1)',
    borderStyle: 'solid',
    borderWidth: '1px',
    transition: 'background-color 200ms, color 200ms, border-color 200ms',
    display: 'block',
    appearance: 'none',
    fontWeight: 'var(--pv-text-c1-weight)' as 'normal',
    fontSize: 'var(--pv-text-c1-size)',
    lineHeight: 'var(--pv-text-c1-height)',
    letterSpacing: 'var(--pv-text-c1-spacing)',
    ...(props.selectSize === 'small' && {
      height: 'var(--pv-size-base-6)',
    }),
    ...(props.selectSize === 'medium' && {
      height: 'var(--pv-size-base-7)',
    }),
    ...(props.selectSize === 'large' && {
      height: 'var(--pv-size-base-8)',
    }),
  }),
  (props) => {
    const isDark = props.theme.mode === 'dark';
    const color = isDark
      ? 'var(--pv-color-white)'
      : 'var(--pv-color-black)';
    let borderColor = 'var(--pv-color-gray-8)';
    const borderColorHover = 'var(--pv-color-gray-10)';
    let borderColorDisabled = 'var(--pv-color-gray-5)';
    let colorDisabled = 'var(--pv-color-gray-7)';
    let invalidBackgroundColor = 'var(--pv-color-wrong-tint-5)';
    const invalidBorderColor = 'var(--pv-color-wrong)';
    let backgroundColorFocus = 'var(--pv-color-secondary-tint-5)';
    const borderColorFocus = 'var(--pv-color-secondary)';

    if (isDark) {
      borderColor = 'var(--pv-color-gray-5)';
      borderColorDisabled = 'var(--pv-color-gray-4)';
      colorDisabled = 'var(--pv-color-gray-4)';
      invalidBackgroundColor = 'var(--pv-color-wrong-shade-4)';
      backgroundColorFocus = 'var(--pv-color-secondary-shade-4)';
    }

    return ({
      color,
      borderColor,
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
        '&:focus-visible': {
          backgroundColor: backgroundColorFocus,
          borderColor: borderColorFocus,
        },
      },
    });
  },
);

const NativeSelectLabel = styled('label')({
  marginBottom: '2px',
  display: 'inline-block',
});

const NativeSelectErrorMessage = styled(Typography)({
  marginTop: '2px',
});

const NativeSelectContainer = styled('div')({
  position: 'relative',
});

const NativeSelectArrowIcon = styled(
  ArrowDropDownIcon,
)<Required<{ disabled: boolean }>>((props) => ({
  position: 'absolute',
  right: '0px',
  top: 'calc(50% - 12px)',
  pointerEvents: 'none',
  margin: '0px var(--pv-size-base)',
  color: 'var(--pv-color-gray-10)',
  ...(props.disabled && {
    color: 'var(--pv-color-gray-7)',
  }),
}));
/**
 *
 */

export const NativeSelect = React.forwardRef<HTMLDivElement, NativeSelectProps>((props, ref) => {
  const {
    options,
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
    onChange,
    ...other
  } = props;

  return (
    <div
      ref={ref}
      {...other}
    >
      {label && (
        <NativeSelectLabel
          htmlFor={id}
        >
          <Typography
            component="span"
            variant="c2"
            color="gray-10"
          >
            {label}
          </Typography>
        </NativeSelectLabel>
      )}
      <NativeSelectContainer>
        <NativeSelectRoot
          selectSize={size}
          disabled={disabled}
          defaultValue={defaultValue}
          id={id}
          value={value}
          required={required}
          name={name}
          ref={inputRef}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={autoFocus}
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
        </NativeSelectRoot>
        <NativeSelectArrowIcon
          disabled={disabled}
          aria-hidden
        />
      </NativeSelectContainer>
      {error && errorText && (
        <NativeSelectErrorMessage
          variant="c2"
          color="wrong"
        >
          {errorText}
        </NativeSelectErrorMessage>
      )}
    </div>
  );
});

NativeSelect.displayName = 'NativeSelect';

NativeSelect.defaultProps = {
  disabled: false,
  size: 'medium',
};
