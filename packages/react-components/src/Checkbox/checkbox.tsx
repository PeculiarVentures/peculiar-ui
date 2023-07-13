import * as React from 'react';
import { CheckIcon } from '../icons';
import { useId } from '../hooks';
import { css, cx } from '../styles';

/**
 * Types.
 */
type BaseProps = {
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
  checkedIcon?: React.ReactElement;
  /**
   * Callback fired when the state is changed.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  'data-testid'?: string;
};

export type CheckboxProps = BaseProps & Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'children' | 'htmlFor' | 'onChange'>;
/**
 *
 */

/**
 * Styles.
 */
const stylesBase = (props: BaseProps) => css({
  label: 'Checkbox',
  cursor: 'pointer',
  display: 'inline-flex',
  width: 'var(--pv-size-base-4)',
  height: 'var(--pv-size-base-4)',
  position: 'relative',
  ...(props.disabled && {
    cursor: 'not-allowed',
    pointerEvents: 'none',
  }),
});

const stylesInput = () => css({
  label: 'Checkbox-input',
  cursor: 'inherit',
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
    color: 'var(--pv-color-gray-6)',
    '&:checked': {
      color: 'var(--pv-color-gray-7)',
      backgroundColor: 'var(--pv-color-gray-6)',
    },
  },
});

const stylesIcon = () => css({
  label: 'Checkbox-icon',
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
    className,
    disabled,
    id: idProp,
    checkedIcon,
    onChange,
    ...other
  } = props;
  const id = useId(idProp);

  const renderIcon = () => {
    const baseIconProps = {
      'aria-hidden': true,
      className: cx(stylesIcon()),
    };

    if (checkedIcon) {
      return React.cloneElement(checkedIcon, baseIconProps);
    }

    return (
      <CheckIcon
        {...baseIconProps}
      />
    );
  };

  return (
    <label
      {...other}
      ref={ref}
      htmlFor={id}
      className={cx({
        [stylesBase(props)]: true,
        [className]: !!className,
      })}
    >
      <input
        {...inputProps}
        type="checkbox"
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        required={required}
        disabled={disabled}
        className={stylesInput()}
        onChange={onChange}
      />
      {renderIcon()}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';

Checkbox.defaultProps = {};
