import * as React from 'react';
import styled from '@emotion/styled';

/**
 * Types.
 */
interface IToastContainerOwnProps {
  /**
   * The content of the component.
   */
  children: React.ReactNode;
};

export type TToastContainerProps = IToastContainerOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;
/**
 *
 */

/**
 * Styles.
 */
const ToastContainerRoot = styled('div')({
  position: 'fixed',
  bottom: 0,
  padding: '10px',
  zIndex: 1300,
  width: '100%',
  maxWidth: '460px',
  wordBreak: 'break-word',
  left: '50%',
  transform: 'translateX(-50%)',
  '& > * + *': { marginTop: '10px' },
});
/**
 *
 */

export const ToastContainer: React.FC<TToastContainerProps> = (props) => {
  const { children, ...other } = props;

  return (
    <ToastContainerRoot
      {...other}
    >
      {children}
    </ToastContainerRoot>
  );
};

ToastContainer.displayName = 'ToastContainer';
