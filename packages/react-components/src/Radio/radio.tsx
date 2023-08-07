import * as React from 'react';
import { DotIcon } from '../icons';
import { useId } from '../hooks';
import { css, cx } from '../styles';

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
   * If `true`, the radio will be disabled.
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
   * Name attribute of the `input` element.
   */
  name?: string;
  /**
   * Callback fired when the state is changed.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  'data-testid'?: string;
};

export type RadioProps = BaseProps & Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'children' | 'htmlFor' | 'onChange'>;

/**
 * Styles.
 */
const stylesBase = () => css({
  label: 'Radio',
  cursor: 'pointer',
  display: 'inline-flex',
  width: 'var(--pv-size-base-4)',
  height: 'var(--pv-size-base-4)',
  borderRadius: '50%',
  color: 'var(--pv-color-gray-6)',
  position: 'relative',
});

const stylesInput = () => css({
  label: 'Radio-input',
  cursor: 'inherit',
  width: '100%',
  height: '100%',
  margin: 0,
  padding: 0,
  outline: 0,
  borderRadius: '50%',
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
      color: 'var(--pv-color-primary)',
      opacity: 1,
    },
  },

  '&:not(:disabled)': {
    cursor: 'pointer',

    '&:checked': {
      color: 'var(--pv-color-primary-shade-1)',
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

    '+ [aria-hidden]': {
      color: 'inherit',
    },

    color: 'var(--pv-color-gray-6)',
    '&:checked': {
      color: 'var(--pv-color-gray-7)',
    },
  },
});

const stylesIcon = () => css({
  label: 'Radio-icon',
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0,
  pointerEvents: 'none',
});
/**
 *
 */

export const Radio = React.forwardRef<HTMLLabelElement, RadioProps>((props, ref) => {
  const {
    checked,
    defaultChecked,
    required,
    inputProps,
    className,
    disabled,
    id: idProp,
    checkedIcon,
    name,
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
      <DotIcon
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
        [stylesBase()]: true,
        [className]: !!className,
      })}
    >
      <input
        {...inputProps}
        type="radio"
        name={name}
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        required={required}
        disabled={disabled}
        className={cx(stylesInput())}
        onChange={onChange}
      />
      {renderIcon()}
    </label>
  );
});

Radio.displayName = 'Radio';

Radio.defaultProps = {};
