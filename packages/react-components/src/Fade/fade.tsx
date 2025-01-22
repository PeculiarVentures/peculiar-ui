import * as React from 'react';
import type { TransitionProps } from 'react-transition-group/Transition';
import { Transition } from 'react-transition-group';
import { useMergedRef } from '../hooks';

export type BaseTransitionProps = Pick<TransitionProps<HTMLElement>, (
  'onEnter' |
  'onEntered' |
  'onEntering' |
  'onExit' |
  'onExited' |
  'onExiting'
)>;

interface BaseProps {
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
  children: React.ReactElement;
  finalOpacity?: number;
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   */
  appear?: boolean;
};

type FadeProps = BaseProps & BaseTransitionProps;

export const Fade = React.forwardRef<any, FadeProps>((props, ref) => {
  const {
    timeout,
    in: inProp,
    children,
    finalOpacity,
    appear,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    ...other
  } = props;
  const nodeRef = React.useRef(null);
  const multiRef = useMergedRef((children as any).ref, ref, nodeRef);

  const handleEnter = (isAppearing: boolean) => {
    // reading a dimension prop will cause the browser to recalculate,
    // which will let our animations work
    nodeRef.current.offsetHeight; // eslint-disable-line @typescript-eslint/no-unused-expressions

    if (onEnter) {
      onEnter(isAppearing);
    }
  };

  return (
    <Transition
      in={inProp}
      timeout={timeout}
      appear={appear}
      nodeRef={nodeRef}
      onEnter={handleEnter}
      onEntered={onEntered}
      onEntering={onEntering}
      onExit={onExit}
      onExited={onExited}
      onExiting={onExiting}
      {...other}
    >
      {(state) => (
        React.cloneElement(children, {
          style: {
            opacity: (state === 'entering' || state === 'entered') ? finalOpacity : 0,
            transition: `opacity ${timeout}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
            visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
            ...children.props.style,
          },
          ref: multiRef,
        })
      )}
    </Transition>
  );
});

Fade.displayName = 'Fade';

Fade.defaultProps = {
  timeout: 225,
  finalOpacity: 1,
  appear: true,
};
