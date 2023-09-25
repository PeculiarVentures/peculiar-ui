import * as React from 'react';
import styled from '@emotion/styled';
import { CheckIcon } from '../icons';
import { useId } from '../hooks';

/**
 * Types.
 */
type CheckboxOwnProps = {
  /**
   * If `true`, the component is checked.
   */
  checked?: boolean;
  /**
   * If `true`, the component is checked by default.
   */
  defaultChecked?: boolean;
  /**
   * Attributes applied to the input element.
   */
  inputProps?: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'type'>;
  /**
   * The content of the component.
   */
  className?: string;
  /**
   * If `true`, the checkbox will be disabled.
   */
  disabled?: boolean;
  /**
   * The `id` of the input element.
   */
  id?: string;
  /**
   * If `true`, the `input` element will be required.
   */
  required?: boolean;
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon?: React.ElementType<any>;
  /**
   * Callback fired when the state is changed.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type CheckboxProps = CheckboxOwnProps & Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'children' | 'htmlFor' | 'onChange'>;
/**
 *
 */

/**
 * Styles.
 */
const CheckboxRoot = styled('label')({
  display: 'inline-flex',
  width: 'var(--pv-size-base-4)',
  height: 'var(--pv-size-base-4)',
  position: 'relative',
});

const CheckboxInput = styled('input')({
  width: '100%',
  height: '100%',
  margin: 0,
  padding: 0,
  outline: 0,
  borderRadius: '2px',
  borderWidth: '2px',
  borderStyle: 'solid',
  appearance: 'none',
  color: 'var(--pv-color-gray-9)',
  borderColor: 'currentColor',
  backgroundColor: 'transparent',
  '&:before': {
    top: '-7px',
    left: '-7px',
    right: '-7px',
    bottom: '-7px',
    content: '""',
    position: 'absolute',
    borderRadius: '50%',
    opacity: 0,
    backgroundColor: 'currentColor',
    transition: 'opacity 200ms',
  },
  '&:checked': {
    '+ [aria-hidden]': {
      opacity: 1,
    },
  },
  '&:not(:disabled)': {
    cursor: 'pointer',
    '&:checked': {
      color: 'var(--pv-color-primary-shade-1)',
      backgroundColor: 'var(--pv-color-primary)',
    },
    '&:hover': {
      '&:before': {
        opacity: 0.18,
      },
    },
    '&:focus': {
      '&:before': {
        opacity: 0.23,
      },
    },
    '&:active': {
      '&:before': {
        opacity: 0.30,
      },
    },
  },
  '&:disabled': {
    cursor: 'not-allowed',
    color: 'var(--pv-color-gray-6)',
    '&:checked': {
      color: 'var(--pv-color-gray-7)',
      backgroundColor: 'var(--pv-color-gray-6)',
    },
  },
});

const CheckboxIcon = styled('svg')({
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0,
  color: 'var(--pv-color-white)',
  pointerEvents: 'none',
});
/**
 *
 */

export const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>((props, ref) => {
  const {
    checked,
    defaultChecked,
    required,
    inputProps,
    disabled,
    id: idProp,
    checkedIcon = CheckIcon,
    onChange,
    ...other
  } = props;
  const id = useId(idProp);

  return (
    <CheckboxRoot
      ref={ref}
      htmlFor={id}
      {...other}
    >
      <CheckboxInput
        {...inputProps}
        type="checkbox"
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        required={required}
        disabled={disabled}
        onChange={onChange}
      />
      <CheckboxIcon
        as={checkedIcon}
        aria-hidden
      />
    </CheckboxRoot>
  );
});

Checkbox.displayName = 'Checkbox';

Checkbox.defaultProps = {};
