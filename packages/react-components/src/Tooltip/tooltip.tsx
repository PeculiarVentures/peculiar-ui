import React from 'react';
import { Placement } from '@popperjs/core';
import { Popper } from '../Popper';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { css, cx, keyframes } from '../styles';

type BaseProps = {
  /**
   * Tooltip reference element.
   */
  children: React.ReactElement;
  /**
   * Tooltip title.
   */
  title: React.ReactNode;
  /**
   * Tooltip placement.
   */
  placement?: Placement;
  className?: string;
  /**
   * Do not respond to focus events.
   */
  disableFocusListener?: boolean,
  /**
   * Do not respond to hover events.
   */
  disableHoverListener?: boolean;
  /**
   * Do not respond to long press touch events.
   */
  disableTouchListener?: boolean;
  /**
   * Makes a tooltip interactive, i.e. will not close when the user hovers over the tooltip.
   */
  interactive?: boolean;
  /**
   * The size of the tooltip.
   */
  size?: ('small' | 'large');
  /**
   * The color of the tooltip.
   */
  color?: ('black' | 'white');
};

type TooltipProps = BaseProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'children'>;

const stylesKeyframesOpacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const stylesTooltip = () => css({
  label: 'Tooltip',
  boxShadow: 'var(--pv-shadow-light-low)',
  margin: '14px',
  maxWidth: '300px',
  wordWrap: 'break-word',
  fontSize: 0,
  animation: `${stylesKeyframesOpacity} 300ms`,
});

const stylesSizeSmall = () => css({
  label: 'small',
  padding: '5px 8px',
});

const stylesSizeLarge = () => css({
  label: 'large',
  padding: '8px 10px',
});

const stylesPopper = (interactive?: boolean) => css({
  label: 'Popper',
  pointerEvents: interactive ? 'auto' : 'none',
  zIndex: 1500,
});

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const {
    children,
    title,
    placement,
    className,
    disableFocusListener,
    disableHoverListener,
    disableTouchListener,
    interactive,
    size,
    color,
    ...other
  } = props;
  const [open, setOpen] = React.useState(false);
  const childRef = React.useRef();
  const enterTimer = React.useRef<any>();
  const leaveTimer = React.useRef<any>();

  React.useEffect(() => () => {
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
  }, []);

  const handleEnter = () => {
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);

    setOpen(true);

    enterTimer.current = setTimeout(
      () => {
        setOpen(true);
      },
      100,
    );
  };

  const handleLeave = () => {
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);

    leaveTimer.current = setTimeout(
      () => {
        setOpen(false);
      },
      0,
    );
  };

  const popperProps: React.HTMLAttributes<HTMLDivElement> = {};
  const childrenProps: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> = {
    ref: childRef,
  };

  if (!disableTouchListener) {
    childrenProps.onTouchStart = handleEnter;
    childrenProps.onTouchEnd = handleLeave;
  }

  if (!disableHoverListener) {
    childrenProps.onMouseOver = handleEnter;
    childrenProps.onMouseLeave = handleLeave;

    if (interactive) {
      popperProps.onMouseOver = handleEnter;
      popperProps.onMouseLeave = handleLeave;
    }
  }

  if (!disableFocusListener) {
    childrenProps.onFocus = handleEnter;
    childrenProps.onBlur = handleLeave;

    if (interactive) {
      popperProps.onFocus = handleEnter;
      popperProps.onBlur = handleLeave;
    }
  }

  return (
    <>
      {React.cloneElement(children, childrenProps)}
      <Popper
        anchorEl={childRef.current}
        open={open}
        placement={placement}
        className={cx({
          [stylesPopper(interactive)]: true,
        })}
        {...popperProps}
      >
        <Box
          {...other}
          background={color === 'black' ? 'gray-10' : 'white'}
          borderRadius={4}
          className={cx({
            [stylesTooltip()]: true,
            [stylesSizeSmall()]: size === 'small',
            [stylesSizeLarge()]: size === 'large',
            [className]: !!className,
          })}
        >
          <Typography
            component="span"
            variant={size === 'small' ? 'c2' : 'b3'}
            color={color === 'black' ? 'white' : 'black'}
          >
            {title}
          </Typography>
        </Box>
      </Popper>
    </>
  );
};

Tooltip.displayName = 'Tooltip';

Tooltip.defaultProps = {
  placement: 'bottom',
  size: 'small',
  color: 'black',
};
