import * as React from 'react';
import { css, cx } from '../styles';

type BaseProps = {
  /**
   * The content of the component.
   */
  children: React.ReactNode;
};

export type ToastContainerProps = BaseProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

const stylesBase = () => css({
  label: 'ToastContainer',
  position: 'fixed',
  bottom: 0,
  padding: '10px',
  zIndex: 1300,
  width: '100%',
  maxWidth: '460px',
  wordBreak: 'break-word',
  left: '50%',
  transform: 'translateX(-50%)',
  '& > * + *': {
    marginTop: '10px',
  },
});

export const ToastContainer: React.FC<ToastContainerProps> = (props) => {
  const { children, className, ...other } = props;

  return (
    <div
      className={cx({
        [stylesBase()]: true,
        [className]: !!className,
      })}
      {...other}
    >
      {children}
    </div>
  );
};

ToastContainer.displayName = 'ToastContainer';
