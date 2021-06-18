import * as React from 'react';
import { Box } from '../Box';
import { CheckIcon } from '../icons';
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
  inputProps?: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'>;
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

const stylesBase = () => css({
  label: 'Checkbox',
  cursor: 'pointer',
  display: 'inline-flex',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
});

const stylesBaseDisabled = () => css({
  label: 'disabled',
  cursor: 'not-allowed',
});

const stylesInput = () => css({
  label: 'Checkbox-input',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  margin: 0,
  padding: 0,
  cursor: 'inherit',
  borderRadius: '2px',
  borderWidth: '2px',
  borderStyle: 'solid',
  appearance: 'none',
  borderColor: 'var(--pv-color-gray-9)',
  backgroundColor: 'transparent',
  '&:checked': {
    backgroundColor: 'var(--pv-color-primary)',
    borderColor: 'var(--pv-color-primary-shade-1)',
    '+ [aria-hidden]': {
      opacity: 1,
    },
  },
  '&:disabled': {
    borderColor: 'var(--pv-color-gray-6)',
    '&:checked': {
      backgroundColor: 'var(--pv-color-gray-6)',
      borderColor: 'var(--pv-color-gray-7)',
    },
  },
});

const stylesControl = () => css({
  label: 'Checkbox-control',
  width: '20px',
  height: '20px',
  position: 'relative',
  color: 'var(--pv-color-white)',
  '&:after': {
    top: '-10px',
    left: '-10px',
    right: '-10px',
    bottom: '-10px',
    content: '""',
    position: 'absolute',
    borderRadius: '50%',
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
});

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
        [stylesBase()]: true,
        [stylesBaseDisabled()]: disabled,
        [className]: !!className,
      })}
    >
      <Box
        component="span"
        className={cx(stylesControl())}
      >
        <input
          {...inputProps}
          type="checkbox"
          id={id}
          checked={checked}
          defaultChecked={defaultChecked}
          required={required}
          disabled={disabled}
          className={cx(stylesInput())}
          onChange={onChange}
        />
        {renderIcon()}
      </Box>
    </label>
  );
});

Checkbox.displayName = 'Checkbox';

Checkbox.defaultProps = {};
