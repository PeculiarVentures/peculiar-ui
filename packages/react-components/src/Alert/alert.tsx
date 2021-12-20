import * as React from 'react';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { IconButton } from '../IconButton';
import { CircularProgress } from '../CircularProgress';
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
   * The type of the component.
   */
  variant?: (
    'wrong' |
    'attention' |
    'success' |
    'pending'
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
  padding: 'var(--pv-size-base-2) var(--pv-size-base-4)',
  boxSizing: 'border-box',
});

const stylesIcon = (variant: BaseProps['variant']) => css({
  label: 'Alert-icon',
  marginRight: 'var(--pv-size-base-2)',
  width: '24px',
  display: 'flex',
  padding: 'var(--pv-size-base-half) 0px',
  justifyContent: 'center',
  alignItems: 'center',
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
  padding: 'var(--pv-size-base) 0px',
  flex: '1',
  minHeight: 'var(--pv-text-b3-height)',
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

    if (variant === 'pending') {
      return (
        <CircularProgress size="small" color="secondary" />
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
