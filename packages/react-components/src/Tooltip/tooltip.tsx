import React, { useState } from 'react';
import { Placement } from '@popperjs/core';
import { Popup } from '../Popup';
import { css, cx } from '../styles';

type BaseProps = {
  children: React.ReactElement;
  title: React.ReactElement;
  placement?: Placement;
  className?: string;
};

const styleTooltip = () => css({
  label: 'tooltip',
  color: 'var(--pv-color-white)',
  backgroundColor: 'var(--pv-color-gray-10)',
  boxShadow: 'var(--pv-shadow-light-low)',
  margin: '5px',
  padding: '7px 10px',
  borderRadius: '4px',
});

export const Tooltip: React.FC<BaseProps> = (props) => {
  const {
    children, title, placement, className,
  } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => { !open && setOpen(true); };
  const handleClose = () => { setOpen(false); };

  return (
    <Popup
      anchorEl={children}
      open={open}
      placement={placement}
      onMouseOver={handleOpen}
      onMouseLeave={handleClose}
    >
      <div
        className={cx({
          [styleTooltip()]: true,
          [className]: !!className,
        })}
      >
        {title}
      </div>
    </Popup>
  );
};

Tooltip.displayName = 'Tooltip';

Tooltip.defaultProps = {
  placement: 'bottom',
};
