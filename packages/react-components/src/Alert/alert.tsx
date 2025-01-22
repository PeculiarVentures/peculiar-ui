import * as React from 'react';
import styled from '@emotion/styled';
import { Typography } from '../Typography';
import { IconButton } from '../IconButton';
import { CircularProgress } from '../CircularProgress';
import { FlexContainer, Flex } from '../Flex';
import {
  CloseCircleIcon,
  WarningIcon,
  CheckCircleIcon,
  CloseIcon,
} from '../icons';

/**
 * Types.
 */
interface AlertOwnProps {
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
};

export type AlertProps = AlertOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;
/**
 *
 */

/**
 * Styles.
 */
const AlertRoot = styled(FlexContainer)<AlertOwnProps>(
  {
    width: '100%',
    gap: 'var(--pv-size-base-2)',
    padding: 'var(--pv-size-base-2) var(--pv-size-base-4)',
    boxSizing: 'border-box',
    borderRadius: '4px',
  },
  (props) => {
    const isDark = props.theme.mode === 'dark';
    let backgroundColor: string;

    if (props.variant === 'wrong') {
      if (isDark) {
        backgroundColor = 'var(--pv-color-wrong-shade-4)';
      } else {
        backgroundColor = 'var(--pv-color-wrong-tint-5)';
      }

      return { backgroundColor };
    }

    if (isDark) {
      backgroundColor = 'var(--pv-color-gray-2)';
    } else {
      backgroundColor = 'var(--pv-color-black)';
    }

    return { backgroundColor };
  },
);

const AlertIcon = styled('div')<Required<Pick<AlertOwnProps, 'variant'>>>(
  (props) => ({
    width: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...(props.variant === 'wrong' && { color: 'var(--pv-color-wrong)' }),
    ...(props.variant === 'attention' && { color: 'var(--pv-color-attention)' }),
    ...(props.variant === 'success' && { color: 'var(--pv-color-success)' }),
  }),
);

const AlertMessage = styled(Flex)({
  padding: 'var(--pv-size-base) 0px',
  minHeight: 'var(--pv-text-b3-height)',
  overflowWrap: 'break-word',
});
/**
 *
 */

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    children,
    variant,
    disableIcon,
    onClose,
    ...other
  } = props;

  const renderIcon = () => {
    if (variant === 'wrong') {
      return (
        <CloseCircleIcon
          aria-hidden="true"
        />
      );
    }

    if (variant === 'attention') {
      return (
        <WarningIcon
          aria-hidden="true"
        />
      );
    }

    if (variant === 'success') {
      return (
        <CheckCircleIcon
          aria-hidden="true"
        />
      );
    }

    if (variant === 'pending') {
      return (
        <CircularProgress
          size="small"
          color="secondary"
          aria-hidden="true"
        />
      );
    }

    return null;
  };

  return (
    <AlertRoot
      ref={ref}
      role="alert"
      variant={variant}
      {...other}
    >
      {!disableIcon && (
        <AlertIcon
          variant={variant}
        >
          {renderIcon()}
        </AlertIcon>
      )}
      <AlertMessage size="grow">
        <Typography
          variant="b3"
          color={variant === 'wrong' ? 'wrong' : 'white'}
        >
          {children}
        </Typography>
      </AlertMessage>
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
    </AlertRoot>
  );
});

Alert.displayName = 'Alert';

Alert.defaultProps = { disableIcon: true };
