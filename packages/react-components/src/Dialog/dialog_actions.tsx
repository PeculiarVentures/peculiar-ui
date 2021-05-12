import React from 'react';
import { css, cx } from '../styles';

type BaseProps = {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * The className of the component.
   */
  className?: string;
};

type DialogActionsProps = BaseProps & React.HTMLAttributes<HTMLDivElement>;

const stylesBase = () => css({
  label: 'DialogActions',
  padding: '15px 20px 20px',
  flex: '0 0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  '& > :not(:first-of-type)': {
    marginLeft: '10px',
  },
});

export const DialogActions = React.forwardRef<HTMLDivElement, DialogActionsProps>((props, ref) => {
  const {
    children,
    className,
    ...other
  } = props;

  return (
    <footer
      {...other}
      ref={ref}
      className={cx({
        [stylesBase()]: true,
        [className]: !!className,
      })}
      data-key="dialog.actions"
    >
      {children}
    </footer>
  );
});

DialogActions.displayName = 'DialogActions';

DialogActions.defaultProps = {};
