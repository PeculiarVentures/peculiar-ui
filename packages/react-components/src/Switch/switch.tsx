import * as React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { Box } from '../Box';
import { useId } from '../hooks';
import { opacity } from '../styles/foundations';

/**
 * Types.
 */
interface ISwitchOwnProps {
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
   * @default 'primary'
   */
  color?: (
    'primary'
    | 'secondary'
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
};

export type TSwitchProps = ISwitchOwnProps & Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'children' | 'htmlFor' | 'onChange'>;
/**
 *
 */

/**
 * Styles.
 */
const SwitchRoot = styled('label')({
  display: 'inline-flex',
  width: 'var(--pv-size-base-7)',
  height: 'var(--pv-size-base-4)',
  borderRadius: 'var(--pv-size-base-4)',
  justifyContent: 'center',
  position: 'relative',
  alignItems: 'center',
  flexShrink: 0,
});

const SwitchInput = styled('input', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'color',
})<Required<Pick<ISwitchOwnProps, 'color'>>>(
  {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    outline: 0,
    borderRadius: 'inherit',
    appearance: 'none',
    backgroundColor: 'var(--pv-color-gray-6)',
  },
  (props) => {
    const isDark = props.theme.mode === 'dark';
    let backgroundColorChecked = `var(--pv-color-${props.color})`;
    let borderColor = 'var(--pv-color-gray-3)';
    let borderColorDisabled = 'var(--pv-color-gray-3)';
    let backgroundColorDisabled = 'var(--pv-color-gray-1)';
    let backgroundColorDisabledChecked = `var(--pv-color-${props.color}-tint-3)`;
    let opacityHover = opacity.light.switch.hover;
    let opacityFocus = opacity.light.switch.focus;
    let opacityActive = opacity.light.switch.active;

    if (isDark) {
      backgroundColorChecked = `var(--pv-color-${props.color}-tint-1)`;
      borderColor = 'var(--pv-color-gray-9)';
      borderColorDisabled = 'var(--pv-color-gray-6)';
      backgroundColorDisabled = 'var(--pv-color-gray-7)';
      backgroundColorDisabledChecked = `var(--pv-color-${props.color}-shade-3)`;
      opacityHover = opacity.dark.switch.hover;
      opacityFocus = opacity.dark.switch.focus;
      opacityActive = opacity.dark.switch.active;
    }

    return {
      '&:checked': {
        backgroundColor: backgroundColorChecked,
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
        backgroundColor: 'var(--pv-color-gray-4)',

        '+ [aria-hidden]': {
          borderColor: borderColorDisabled,
          backgroundColor: backgroundColorDisabled,
        },

        '&:checked': {
          backgroundColor: backgroundColorDisabledChecked,
        },
      },
      '&:not(:disabled)': {
        cursor: 'pointer',
        '+ [aria-hidden]': {
          borderColor,
        },
        '&:hover': {
          '+ [aria-hidden]:before': {
            opacity: opacityHover,
          },
        },
        '&:focus-visible': {
          '+ [aria-hidden]:before': {
            opacity: opacityFocus,
          },
        },
        '&:active': {
          '+ [aria-hidden]:before': {
            opacity: opacityActive,
          },
        },
      },
    };
  },
);

const SwitchDot = styled(Box)({
  display: 'block',
  position: 'absolute',
  width: 'var(--pv-size-base-3)',
  height: 'var(--pv-size-base-3)',
  transition: 'transform 200ms',
  boxShadow: 'var(--pv-shadow-light-low)',
  transform: 'translateX(calc(-50% + 2px))',
  pointerEvents: 'none',
  boxSizing: 'content-box',
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
/**
 *
 */

export const Switch = React.forwardRef<HTMLLabelElement, TSwitchProps>((props, ref) => {
  const {
    checked,
    defaultChecked,
    color = 'primary',
    required,
    inputProps,
    disabled,
    id: idProp,
    name,
    onChange,
    ...other
  } = props;
  const id = useId(idProp);

  return (
    <SwitchRoot
      ref={ref}
      htmlFor={id}
      {...other}
    >
      <SwitchInput
        {...inputProps}
        type="checkbox"
        name={name}
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        required={required}
        disabled={disabled}
        color={color}
        onChange={onChange}
      />
      <SwitchDot
        aria-hidden
        background={`${color}-contrast`}
        borderWidth={1}
        borderStyle="solid"
        borderRadius={100}
      />
    </SwitchRoot>
  );
});

Switch.displayName = 'Switch';
