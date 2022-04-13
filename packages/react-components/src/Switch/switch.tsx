import * as React from 'react';
import { Box } from '../Box';
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
   * If `true`, the Switch will be disabled.
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
   * Name attribute of the `input` element.
   */
  name?: string;
  /**
   * Callback fired when the state is changed.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  'data-testid'?: string;
};

export type SwitchProps = BaseProps & Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'children' | 'htmlFor' | 'onChange'>;

const stylesBase = () => css({
  label: 'Switch',
  cursor: 'pointer',
  display: 'inline-flex',
  width: 'var(--pv-size-base-7)',
  height: 'var(--pv-size-base-4)',
  borderRadius: 'var(--pv-size-base-4)',
  justifyContent: 'center',
  alignItems: 'center',
});

const stylesBaseDisabled = () => css({
  label: 'disabled',
  cursor: 'not-allowed',
});

const stylesInput = () => css({
  label: 'Switch-input',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  margin: 0,
  padding: 0,
  cursor: 'inherit',
  borderRadius: 'var(--pv-size-base-4)',
  appearance: 'none',
  backgroundColor: 'var(--pv-color-gray-6)',
  '&:checked': {
    backgroundColor: 'var(--pv-color-primary)',
    '+ [aria-hidden]': {
      transform: 'translate(calc(100% - 1px),-50%)',
    },
  },
  '&:disabled': {
    opacity: 0.4,
    '&:checked': {
      backgroundColor: 'var(--pv-color-primary-tint-3)',
      opacity: 0.6,
    },
    '+ [aria-hidden]': {
      opacity: 0.8,
    },
  },
});

const stylesControl = () => css({
  label: 'Switch-control',
  width: 'var(--pv-size-base-7)',
  height: 'var(--pv-size-base-4)',
  position: 'relative',
  color: 'var(--pv-color-primary)',
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

const stylesDot = () => css({
  label: 'Switch-dot',
  display: 'block',
  position: 'absolute',
  top: '50%',
  width: 'var(--pv-size-base-3)',
  height: 'var(--pv-size-base-3)',
  transform: 'translate(calc(2px), -50%)',
  transition: 'transform 200ms',
  boxShadow: 'var(--pv-shadow-light-low)',
  boxSizing: 'content-box',
});

export const Switch = React.forwardRef<HTMLLabelElement, SwitchProps>((props, ref) => {
  const {
    checked,
    defaultChecked,
    required,
    inputProps,
    className,
    disabled,
    id: idProp,
    name,
    onChange,
    ...other
  } = props;
  const id = useId(idProp);
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
          name={name}
          id={id}
          checked={checked}
          defaultChecked={defaultChecked}
          required={required}
          disabled={disabled}
          className={cx(stylesInput())}
          onChange={onChange}
        />
        <Box
          aria-hidden
          className={cx(stylesDot())}
          background="primary-contrast"
          borderColor="gray-3"
          borderWidth={1}
          borderStyle="solid"
          borderRadius={100}
        />
      </Box>
    </label>
  );
});

Switch.displayName = 'Switch';

Switch.defaultProps = {};
