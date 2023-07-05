import React from 'react';
import { Placement } from '@popperjs/core';
import { Popper } from '../Popper';
import { Box } from '../Box';
import { useMergedRef, useControllableState } from '../hooks';
import { Typography } from '../Typography';
import { css, cx, keyframes } from '../styles';

/**
 * Types.
 */
export type TooltipBaseProps = {
  /**
   * If `true`, the component is shown.
   */
  open?: boolean;
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
   * If `true`, adds an arrow to the tooltip.
   */
  arrow?: boolean;
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

const stylesTooltip = (props: TooltipBaseProps) => css({
  label: 'Tooltip',
  boxShadow: 'var(--pv-shadow-light-low)',
  maxWidth: '300px',
  wordWrap: 'break-word',
  fontSize: 0,
  animation: `${stylesKeyframeOpacity} 225ms`,
  position: 'relative',
  ...(props.size === 'small' && {
    padding: '5px 8px',
  }),
  ...(props.size === 'large' && {
    padding: '8px 10px',
  }),
});

const stylesPopper = (props: TooltipBaseProps) => css({
  label: 'Popper',
  pointerEvents: props.interactive ? 'auto' : 'none',
  zIndex: 1500,
  '&[data-popper-placement^="bottom"]': {
    padding: 'var(--pv-size-base-3) 0px',
    '[data-popper-arrow]': {
      top: 0,
      marginTop: '-4px',
    },
  },
  '&[data-popper-placement^="top"]': {
    padding: 'var(--pv-size-base-3) 0px',
    '[data-popper-arrow]': {
      bottom: 0,
      marginBottom: '-4px',
    },
  },
  '&[data-popper-placement^="right"]': {
    padding: '0px var(--pv-size-base-3)',
    '[data-popper-arrow]': {
      left: 0,
      marginLeft: '-4px',
    },
  },
  '&[data-popper-placement^="left"]': {
    padding: '0px var(--pv-size-base-3)',
    '[data-popper-arrow]': {
      right: 0,
      marginRight: '-4px',
    },
  },
});

const stylesArrow = (props: TooltipBaseProps) => css({
  label: 'arrow',
  width: '8px',
  height: '8px',
  background: 'transparent',
  position: 'absolute',
  display: 'block',
  color: props.color === 'white' ? 'var(--pv-color-white)' : 'var(--pv-color-gray-10)',
  '&::before': {
    content: '""',
    margin: 'auto',
    display: 'block',
    width: '100%',
    height: '100%',
    backgroundColor: 'currentColor',
    transform: 'rotate(45deg)',
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
    arrow,
    ...other
  } = props;
  const [open, setOpen] = useControllableState({
    value: openProp,
    defaultValue: false,
  });
  const nodeRef = React.useRef(null);
  const multiRef = useMergedRef((children as any).ref, nodeRef);
  const [arrowRef, setArrowRef] = React.useState(null);
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
        className={stylesPopper(props)}
        disablePortal={disablePortal}
        modifiers={[
          {
            name: 'arrow',
            enabled: Boolean(arrowRef),
            options: {
              element: arrowRef,
              padding: 8,
            },
          },
        ]}
        {...popperProps}
      >
        {(style) => (
          <Box
            {...other}
            background={color === 'black' ? 'gray-10' : 'white'}
            borderRadius={4}
            className={cx({
              [stylesTooltip(props)]: true,
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
            {
              arrow
                ? (
                  <span
                    className={stylesArrow(props)}
                    data-popper-arrow
                    ref={setArrowRef}
                    style={style}
                  />
                )
                : null
            }
          </Box>
        )}
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
  arrow: false,
};
