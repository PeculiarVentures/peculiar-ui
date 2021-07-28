import React from 'react';
import { Typography } from '../Typography';
import { css, cx } from '../styles';
import { IconButton } from '../IconButton';
import { CloseIcon } from '../icons';
import { Tooltip } from '../Tooltip';

type BaseProps = {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * The className of the component.
   */
  className?: string;
  /**
   * Tooltip title.
   */
  tooltipTitle?: string;
  /**
   * Callback fired when the component requests to be closed.
   */
  onClose?: () => void;
};

type DialogTitleProps = BaseProps & React.HTMLAttributes<HTMLDivElement>;

const stylesBase = () => css({
  label: 'DialogTitle',
  padding: '20px 20px 10px',
  display: 'flex',
  flex: '0 0 auto',
  justifyContent: 'space-between',
});

const stylesCloseButton = () => css({
  label: 'DialogTitle-close',
  marginLeft: '10px',
  marginRight: '-5px',
});

export const DialogTitle = React.forwardRef<HTMLDivElement, DialogTitleProps>((props, ref) => {
  const {
    children,
    className,
    tooltipTitle,
    onClose,
    ...other
  } = props;

  return (
    <header
      {...other}
      ref={ref}
      className={cx({
        [stylesBase()]: true,
        [className]: !!className,
      })}
      data-key="dialog.title"
    >
      <Typography
        variant="h4"
        color="black"
      >
        {children}
      </Typography>

      {onClose && (
        <Tooltip
          size="small"
          title={tooltipTitle}
          disablePortal={false}
        >
          <IconButton
            size="small"
            onClick={onClose}
            className={cx(stylesCloseButton())}
          >
            <CloseIcon />
          </IconButton>
        </Tooltip>
      )}
    </header>
  );
});

DialogTitle.displayName = 'DialogTitle';

DialogTitle.defaultProps = {};
