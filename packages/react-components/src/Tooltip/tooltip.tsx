import React from 'react';
import { Placement } from '@popperjs/core';
import { Popper } from '../Popper';
import { Box } from '../Box';
import { useMergedRef } from '../hooks';
import { Typography } from '../Typography';
import { css, cx, keyframes } from '../styles';

/**
 * Types.
 */
export type TooltipBaseProps = {
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
  /**
   * The className of the component.
   */
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
  /**
   * Disable the portal behavior. The children stay within it's parent DOM hierarchy.
   */
  disablePortal?: boolean;
  /**
   * Add delay in showing the tooltip.
   */
  enterDelay?: number;
  /**
   * Add delay in hiding the tooltip.
   */
  leaveDelay?: number;
  /**
   * Manually open tooltip when needed.
   */
  open?: boolean;
};

export type TooltipProps = TooltipBaseProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'children'>;
/**
 *
 */

/**
 * Styles.
 */
const stylesKeyframeOpacity = keyframes`
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
  maxWidth: '300px',
  wordWrap: 'break-word',
  fontSize: 0,
  animation: `${stylesKeyframeOpacity} 225ms`,
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
  '&[data-popper-placement^="bottom"]': {
    padding: 'var(--pv-size-base-3) 0px',
  },
  '&[data-popper-placement^="top"]': {
    padding: 'var(--pv-size-base-3) 0px',
  },
  '&[data-popper-placement^="right"]': {
    padding: '0px var(--pv-size-base-3)',
  },
  '&[data-popper-placement^="left"]': {
    padding: '0px var(--pv-size-base-3)',
  },
});
/**
 *
 */

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const {
    open: openProp,
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
    disablePortal,
    enterDelay,
    leaveDelay,
    ...other
  } = props;
  const [open, setOpen] = React.useState<boolean>(openProp);
  const nodeRef = React.useRef(null);
  const multiRef = useMergedRef((children as any).ref, nodeRef);
  const enterTimer = React.useRef<NodeJS.Timeout>();
  const leaveTimer = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => () => {
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
  }, []);

  const handleEnter = () => {
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);

    enterTimer.current = setTimeout(
      () => {
        setOpen(true);
      },
      enterDelay,
    );
  };

  const handleLeave = () => {
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);

    leaveTimer.current = setTimeout(
      () => {
        setOpen(false);
      },
      leaveDelay,
    );
  };

  const popperProps: React.HTMLAttributes<HTMLDivElement> = {};
  const childrenProps: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> = {
    ref: multiRef,
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
        anchorEl={nodeRef.current}
        open={title && open}
        placement={placement}
        className={cx({
          [stylesPopper(interactive)]: true,
        })}
        disablePortal={disablePortal}
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
  color: 'white',
  disablePortal: true,
  enterDelay: 100,
  leaveDelay: 0,
  open: false,
};
