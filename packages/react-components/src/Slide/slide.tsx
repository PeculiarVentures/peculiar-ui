import * as React from 'react';
import type { TransitionProps } from 'react-transition-group/Transition';
import { Transition, TransitionStatus } from 'react-transition-group';
import { useMergedRef } from '../hooks';

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
  children: React.ReactElement;
  /**
   * Direction the child node will enter from.
   */
  direction?: ('right' | 'left' | 'up' | 'down');
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   */
  appear?: boolean;
};

type SlideProps = BaseProps & BaseTransitionProps;

export const Slide = React.forwardRef<any, SlideProps>((props, ref) => {
  const {
    timeout,
    in: inProp,
    children,
    appear,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    direction,
  } = props;
  const nodeRef = React.useRef<HTMLElement>(null);
  const multiRef = useMergedRef((children as any).ref, ref, nodeRef);

  const handleEnter = (isAppearing: boolean) => {
    // reading a dimension prop will cause the browser to recalculate,
    // which will let our animations work
    nodeRef.current.offsetHeight; // eslint-disable-line @typescript-eslint/no-unused-expressions

    if (onEnter) {
      onEnter(isAppearing);
    }
  };

  const transformValue = (state: TransitionStatus) => {
    if (state === 'entering' || state === 'entered') {
      if (direction === 'right' || direction === 'left') {
        return 'translateX(0px)';
      }

      if (direction === 'up' || direction === 'down') {
        return 'translateY(0px)';
      }
    } else {
      if (direction === 'right') {
        return 'translateX(100%)';
      }

      if (direction === 'left') {
        return 'translateX(-100%)';
      }

      if (direction === 'up') {
        return 'translateY(-100%)';
      }

      if (direction === 'down') {
        return 'translateY(100%)';
      }
    }

    return undefined;
  };

  return (
    <Transition
      in={inProp}
      timeout={timeout}
      appear={appear}
      onEnter={handleEnter}
      onEntered={onEntered}
      onEntering={onEntering}
      onExit={onExit}
      onExited={onExited}
      onExiting={onExiting}
      nodeRef={nodeRef}
    >
      {(state) => (
        React.cloneElement(children, {
          style: {
            transform: transformValue(state),
            transition: `transform ${timeout}ms`,
            visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
            ...children.props.style,
          },
          ref: multiRef,
        })
      )}
    </Transition>
  );
});

Slide.displayName = 'Slide';

Slide.defaultProps = {
  timeout: 225,
  direction: 'right',
  appear: true,
};
