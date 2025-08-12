import React from 'react';
import { Placement } from '@popperjs/core';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { Popper } from '../Popper';
import { Box } from '../Box';
import { useMergedRef, useControllableState } from '../hooks';
import { Typography } from '../Typography';

/**
 * Types.
 */
export interface ITooltipOwnProps {
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
   * @default 'bottom'
   */
  placement?: Placement;
  /**
   * The className of the component.
   */
  className?: string;
  /**
   * Do not respond to focus events.
   * @default false
   */
  disableFocusListener?: boolean;
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener?: boolean;
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener?: boolean;
  /**
   * Makes a tooltip interactive, i.e. will not close when the user hovers over the tooltip.
   */
  interactive?: boolean;
  /**
   * The size of the tooltip.
   * @default 'small'
   */
  size?: ('small' | 'large');
  /**
   * The color of the tooltip.
   * @default 'white'
   */
  color?: ('black' | 'white');
  /**
   * Disable the portal behavior. The children stay within it's parent DOM hierarchy.
   * @default true
   */
  disablePortal?: boolean;
  /**
   * Add delay in showing the tooltip.
   * @default 100
   */
  enterDelay?: number;
  /**
   * Add delay in hiding the tooltip.
   * @default 0
   */
  leaveDelay?: number;
  /**
   * If `true`, adds an arrow to the tooltip.
   * @default false
   */
  arrow?: boolean;
  /**
   * This can be useful if you need to apply some margin between them
   * or if you need to fine tune the position according to some custom logic.
   * @default 15
   */
  offset?: number;
};

export type TTooltipProps = ITooltipOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'children'>;
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

const TooltipRoot = styled(Box, {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'color',
})<Pick<ITooltipOwnProps, 'size'>>(
  (props) => ({
    maxWidth: '300px',
    wordWrap: 'break-word',
    fontSize: 0,
    animation: `${stylesKeyframeOpacity} 225ms`,
    position: 'relative',
    borderRadius: '4px',
    ...(props.size === 'small' && {
      padding: '5px 8px',
    }),
    ...(props.size === 'large' && {
      padding: '8px 10px',
    }),
  }),
  (props) => {
    const isDark = props.theme.mode === 'dark';
    let backgroundColor: string;
    let boxShadow = 'var(--pv-shadow-light-low)';

    if (props.color === 'black') {
      if (isDark) {
        backgroundColor = 'var(--pv-color-gray-5)';
      } else {
        backgroundColor = 'var(--pv-color-gray-10)';
      }
    } else {
      backgroundColor = 'var(--pv-color-white)';
    }

    if (isDark) {
      boxShadow = 'var(--pv-shadow-dark-medium)';
    }

    return {
      boxShadow,
      backgroundColor,
    };
  },
);

const TooltipPopper = styled(Popper)<Required<Pick<ITooltipOwnProps, 'interactive'>>>((props) => ({
  pointerEvents: props.interactive ? 'auto' : 'none',
  zIndex: 1500,
  '&[data-popper-placement^="bottom"]': {
    '[data-popper-arrow]': {
      top: 0,
      marginTop: '-4px',
    },
  },
  '&[data-popper-placement^="top"]': {
    '[data-popper-arrow]': {
      bottom: 0,
      marginBottom: '-4px',
    },
  },
  '&[data-popper-placement^="right"]': {
    '[data-popper-arrow]': {
      left: 0,
      marginLeft: '-4px',
    },
  },
  '&[data-popper-placement^="left"]': {
    '[data-popper-arrow]': {
      right: 0,
      marginRight: '-4px',
    },
  },
}));

const TooltipArrow = styled('span', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'color',
})<Required<Pick<ITooltipOwnProps, 'color'>>>(
  {
    width: '8px',
    height: '8px',
    background: 'transparent',
    position: 'absolute',
    display: 'block',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: '100%',
      height: '100%',
      backgroundColor: 'currentColor',
      transform: 'rotate(45deg)',
    },
  },
  (props) => {
    const isDark = props.theme.mode === 'dark';
    let color: string;

    if (props.color === 'black') {
      if (isDark) {
        color = 'var(--pv-color-gray-5)';
      } else {
        color = 'var(--pv-color-gray-10)';
      }
    } else {
      color = 'var(--pv-color-white)';
    }

    return {
      color,
    };
  },
);
/**
 *
 */

export const Tooltip: React.FC<TTooltipProps> = (props) => {
  const {
    open: openProp,
    children,
    title,
    placement = 'bottom',
    disableFocusListener = false,
    disableHoverListener = false,
    disableTouchListener = false,
    interactive,
    size = 'small',
    color = 'white',
    disablePortal = true,
    enterDelay = 100,
    leaveDelay = 0,
    arrow = false,
    offset = 15,
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
  const childrenProps: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > = {
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
      <TooltipPopper
        anchorEl={nodeRef.current}
        open={title && open}
        placement={placement}
        disablePortal={disablePortal}
        interactive={interactive}
        modifiers={[
          {
            name: 'arrow',
            enabled: Boolean(arrowRef),
            options: {
              element: arrowRef,
              padding: 8,
            },
          },
          {
            name: 'offset',
            options: {
              offset: [0, offset],
            },
          },
        ]}
        {...popperProps}
      >
        {(style) => (
          <TooltipRoot
            size={size}
            color={color}
            {...other}
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
                    <TooltipArrow
                      data-popper-arrow
                      ref={setArrowRef}
                      style={style}
                      color={color}
                    />
                  )
                : null
            }
          </TooltipRoot>
        )}
      </TooltipPopper>
    </>
  );
};

Tooltip.displayName = 'Tooltip';
