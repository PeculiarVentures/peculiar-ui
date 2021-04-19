import * as React from 'react';
import type { TransitionProps } from 'react-transition-group/Transition';
import { Transition } from 'react-transition-group';
import { css, cx } from '../styles';

type BaseTransitionProps = Pick<TransitionProps<HTMLElement>, (
  'onEnter' |
  'onEntered' |
  'onEntering' |
  'onExit' |
  'onExited' |
  'onExiting'
)>;

type BaseProps = {
  /**
   * If `true`, the component will transition in.
   */
  in?: boolean;
  /**
   * The duration for the transition, in milliseconds.
   */
  timeout?: number;
  /**
   * A single child content element.
   */
  children: React.ReactNode;
};

type CollapseProps = BaseProps & BaseTransitionProps & React.HTMLAttributes<HTMLDivElement>;

const stylesBase = (timeout: number) => css({
  label: 'Collapse',
  transition: `height ${timeout}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
  overflowY: 'hidden',
  height: 0,
});

const stylesEntered = () => css({
  label: 'entered',
  height: 'auto',
  overflowY: 'visible',
});

const stylesHidden = () => css({
  label: 'hidden',
  visibility: 'hidden',
});

export const Collapse: React.FC<CollapseProps> = (props) => {
  const {
    timeout,
    in: inProp,
    children,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    className,
    ...other
  } = props;
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const nodeRef = React.useRef<HTMLDivElement>(null);

  const getWrapperSize = () => (wrapperRef.current ? wrapperRef.current.clientHeight : 0);

  const handleEnter = (isAppearing: boolean) => {
    if (nodeRef.current) {
      nodeRef.current.style.height = '0px';
    }

    if (onEnter) {
      onEnter(isAppearing);
    }
  };

  const handleEntering = (isAppearing: boolean) => {
    if (nodeRef.current) {
      nodeRef.current.style.height = `${getWrapperSize()}px`;
    }

    if (onEntering) {
      onEntering(isAppearing);
    }
  };

  const handleEntered = (isAppearing: boolean) => {
    if (nodeRef.current) {
      nodeRef.current.style.height = 'auto';
    }

    if (onEntered) {
      onEntered(isAppearing);
    }
  };

  const handleExit = () => {
    if (nodeRef.current) {
      nodeRef.current.style.height = `${getWrapperSize()}px`;

      // reading a dimension prop will cause the browser to recalculate,
      // which will let our animations work
      nodeRef.current.offsetHeight; // eslint-disable-line @typescript-eslint/no-unused-expressions
    }

    if (onExit) {
      onExit();
    }
  };

  const handleExiting = () => {
    if (nodeRef.current) {
      nodeRef.current.style.height = '0px';
    }

    if (onExiting) {
      onExiting();
    }
  };

  return (
    <Transition
      in={inProp}
      timeout={timeout}
      onEnter={handleEnter}
      onEntering={handleEntering}
      onEntered={handleEntered}
      onExit={handleExit}
      onExiting={handleExiting}
      onExited={onExited}
    >
      {(state) => (
        <div
          {...other}
          className={cx({
            [stylesBase(timeout)]: true,
            [stylesEntered()]: state === 'entered',
            [stylesHidden()]: state === 'exited' && !inProp,
            [className]: !!className,
          })}
          ref={nodeRef}
        >
          <div
            ref={wrapperRef}
          >
            {children}
          </div>
        </div>
      )}
    </Transition>
  );
};

Collapse.displayName = 'Collapse';

Collapse.defaultProps = {
  timeout: 225,
};
