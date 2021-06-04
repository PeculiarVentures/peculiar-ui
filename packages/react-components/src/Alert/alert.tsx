import * as React from 'react';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { IconButton } from '../IconButton';
import {
  CloseCircleIcon,
  WarningIcon,
  CheckCircleIcon,
  CloseIcon,
} from '../icons';
import { css, cx } from '../styles';

type BaseProps = {
  /**
   * The content of the component.
   */
  children: React.ReactNode;
  /**
   * The className of the component.
   */
  className?: string;
  /**
   * The color of the component.
   */
  variant?: (
    'wrong' |
    'attention' |
    'success'
  );
  /**
   * If `true`, the start icon will be hidden.
   */
  disableIcon?: boolean;
  /**
   * Callback fired when the component requests to be closed.
   */
  onClose?: () => void;
  'data-testid'?: string;
};

export type AlertProps = BaseProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

const stylesBase = () => css({
  label: 'Alert',
  width: '100%',
  display: 'flex',
  padding: '10px 20px',
  boxSizing: 'border-box',
});

const stylesIcon = (variant: BaseProps['variant']) => css({
  label: 'Alert-icon',
  marginRight: '10px',
  width: '24px',
  display: 'flex',
  padding: '3px 0px',
  ...(variant === 'wrong' && {
    color: 'var(--pv-color-wrong)',
  }),
  ...(variant === 'attention' && {
    color: 'var(--pv-color-attention)',
  }),
  ...(variant === 'success' && {
    color: 'var(--pv-color-success)',
  }),
});

const stylesText = () => css({
  label: 'Alert-text',
  padding: '5px 0px',
  flex: '1',
});

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    children,
    variant,
    className,
    disableIcon,
    onClose,
    ...other
  } = props;

  const renderIcon = () => {
    if (variant === 'wrong') {
      return (
        <CloseCircleIcon />
      );
    }

    if (variant === 'attention') {
      return (
        <WarningIcon />
      );
    }

    if (variant === 'success') {
      return (
        <CheckCircleIcon />
      );
    }

    return null;
  };

  return (
    <Box
      {...other}
      ref={ref}
      role="alert"
      borderRadius={4}
      background={variant === 'wrong' ? 'wrong-tint-5' : 'black'}
      className={cx({
        [stylesBase()]: true,
        [className]: !!className,
      })}
    >
      {!disableIcon && (
        <div className={cx(stylesIcon(variant))}>
          {renderIcon()}
        </div>
      )}
      <Typography
        variant="b3"
        color={variant === 'wrong' ? 'wrong' : 'white'}
        className={cx({
          [stylesText()]: true,
        })}
      >
        {children}
      </Typography>
      {onClose && (
        <IconButton
          size="small"
          color={variant === 'wrong' ? 'wrong' : 'white'}
          circled
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      )}
    </Box>
  );
});

Alert.displayName = 'Alert';

Alert.defaultProps = {
  disableIcon: true,
};
