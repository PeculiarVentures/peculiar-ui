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
   * The color of the component.
   */
  color?: (
    'primary' |
    'secondary'
  );
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
  display: 'inline-flex',
  width: 'var(--pv-size-base-7)',
  height: 'var(--pv-size-base-4)',
  borderRadius: 'var(--pv-size-base-4)',
  justifyContent: 'center',
  position: 'relative',
  alignItems: 'center',
});

const stylesInput = (props: BaseProps) => css({
  label: 'Switch-input',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  margin: 0,
  padding: 0,
  outline: 0,
  borderRadius: 'inherit',
  appearance: 'none',
  backgroundColor: 'var(--pv-color-gray-6)',
  '&:checked': {
    backgroundColor: `var(--pv-color-${props.color})`,

    '+ [aria-hidden]': {
      transform: 'translateX(calc(50% - 2px))',

      '&:before': {
        backgroundColor: `var(--pv-color-${props.color}-shade-2)`,
      },
    },
  },

  '&:disabled': {
    cursor: 'not-allowed',
    pointerEvents: 'none',
    opacity: 0.4,
  },

  '&:not(:disabled)': {
    cursor: 'pointer',

    '&:hover': {
      '+ [aria-hidden]:before': {
        opacity: 0.18,
      },
    },
    '&:focus': {
      '+ [aria-hidden]:before': {
        opacity: 0.23,
      },
    },
    '&:active': {
      '+ [aria-hidden]:before': {
        opacity: 0.30,
      },
    },
  },
});

const stylesDot = () => css({
  label: 'Switch-dot',
  display: 'block',
  position: 'absolute',
  width: 'var(--pv-size-base-3)',
  height: 'var(--pv-size-base-3)',
  transition: 'transform 200ms',
  boxShadow: 'var(--pv-shadow-light-low)',
  transform: 'translateX(calc(-50% + 2px))',
  pointerEvents: 'none',
  '&:before': {
    top: '-10px',
    left: '-10px',
    right: '-10px',
    bottom: '-10px',
    content: '""',
    position: 'absolute',
    borderRadius: '50%',
    opacity: 0,
    backgroundColor: 'var(--pv-color-gray-9)',
    transition: 'opacity 200ms, background-color 200ms',
  },
});

export const Switch = React.forwardRef<HTMLLabelElement, SwitchProps>((props, ref) => {
  const {
    checked,
    defaultChecked,
    color = 'primary',
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
        [className]: !!className,
      })}
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
        className={cx(stylesInput(props))}
        onChange={onChange}
      />
      <Box
        aria-hidden
        className={cx(stylesDot())}
        background={`${color}-contrast`}
        borderColor="gray-3"
        borderWidth={1}
        borderStyle="solid"
        borderRadius={100}
      />
    </label>
  );
});

Switch.displayName = 'Switch';

Switch.defaultProps = {
  color: 'primary',
};
