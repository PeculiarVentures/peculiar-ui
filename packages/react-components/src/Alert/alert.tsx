import * as React from 'react';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { IconButton } from '../IconButton';
import { InfoIcon, CloseIcon } from '../icons';
import { css, cx, ColorType } from '../styles';

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
  color?: (
    'info' |
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

type AlertProps = BaseProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

const stylesBase = () => css({
  label: 'Alert',
  width: '100%',
  display: 'flex',
  boxShadow: 'var(--pv-shadow-dark-medium)',
  padding: '10px 20px',
  boxSizing: 'border-box',
});

const stylesIcon = () => css({
  label: 'Alert-icon',
  marginRight: '10px',
  color: 'var(--pv-color-white)',
  width: '24px',
  display: 'flex',
  padding: '3px 0px',
});

const stylesText = () => css({
  label: 'Alert-text',
  padding: '5px 0px',
  flex: '1',
});

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    children,
    color,
    className,
    disableIcon,
    onClose,
    ...other
  } = props;

  const getBackgroundColor = (): ColorType => {
    if (color === 'wrong' || color === 'success' || color === 'attention') {
      return color;
    }

    return 'secondary';
  };

  return (
    <Box
      {...other}
      ref={ref}
      role="alert"
      borderRadius={4}
      background={getBackgroundColor()}
      className={cx({
        [stylesBase()]: true,
        [className]: !!className,
      })}
    >
      {!disableIcon && (
        <div
          className={cx({
            [stylesIcon()]: true,
          })}
        >
          <InfoIcon />
        </div>
      )}
      <Typography
        variant="b3"
        color="white"
        className={cx({
          [stylesText()]: true,
        })}
      >
        {children}
      </Typography>
      {typeof onClose === 'function' && (
        <IconButton
          size="small"
          color="white"
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
  color: 'info',
};
