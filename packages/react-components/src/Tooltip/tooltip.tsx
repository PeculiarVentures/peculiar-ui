import React from 'react';
import { Placement } from '@popperjs/core';
import { Popup } from '../Popup';
import { css, cx } from '../styles';

type BaseProps = {
  children: React.ReactElement;
  title: React.ReactElement;
  placement?: Placement;
  className?: string;
  disableFocusListener?: boolean,
  disableHoverListener?: boolean;
  disableTouchListener?: boolean;
  disableInteractive?: boolean;
};

const stylesTooltip = () => css({
  label: 'Tooltip',
  color: 'var(--pv-color-white)',
  backgroundColor: 'var(--pv-color-gray-10)',
  boxShadow: 'var(--pv-shadow-light-low)',
  margin: '5px',
  padding: '7px 10px',
  borderRadius: '4px',
});

const stylesPopup = (disableInteractive?: boolean) => css({
  label: 'Popup',
  pointerEvents: disableInteractive ? 'none' : 'auto',
});

export const Tooltip: React.FC<BaseProps> = (props) => {
  const {
    children,
    title,
    placement,
    className,
    disableFocusListener,
    disableHoverListener,
    disableTouchListener,
    disableInteractive,
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

    leaveTimer.current = setTimeout(() => {
      setOpen(false);
    }, 0);
  };

  const popupProps: any = {};
  const childrenProps: any = {
    ref: childRef,
  };

  if (!disableTouchListener) {
    childrenProps.onTouchStart = handleEnter;
    childrenProps.onTouchEnd = handleLeave;
  }

  if (!disableHoverListener) {
    childrenProps.onMouseOver = handleEnter;
    childrenProps.onMouseLeave = handleLeave;

    if (!disableInteractive) {
      popupProps.onMouseOver = handleEnter;
      popupProps.onMouseLeave = handleLeave;
    }
  }

  if (!disableFocusListener) {
    childrenProps.onFocus = handleEnter;
    childrenProps.onBlur = handleLeave;

    if (!disableInteractive) {
      popupProps.onFocus = handleEnter;
      popupProps.onBlur = handleLeave;
    }
  }

  return (
    <>
      {React.cloneElement(children, childrenProps)}
      <Popup
        anchorEl={childRef.current}
        open={open}
        placement={placement}
        className={cx({
          [stylesPopup(disableInteractive)]: true,
        })}
        {...popupProps}
      >
        <div
          className={cx({
            [stylesTooltip()]: true,
            [className]: !!className,
          })}
        >
          {title}
        </div>
      </Popup>
    </>
  );
};

Tooltip.displayName = 'Tooltip';

Tooltip.defaultProps = {
  placement: 'bottom',
};
