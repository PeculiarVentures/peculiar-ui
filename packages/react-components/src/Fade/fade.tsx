import * as React from 'react';
import type { TransitionProps } from 'react-transition-group/Transition';
import { Transition } from 'react-transition-group';

export type BaseTransitionProps = Pick<TransitionProps<HTMLElement>, (
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
  finalOpacity?: number;
};

type FadeProps = BaseProps & BaseTransitionProps;

export const Fade: React.FC<FadeProps> = (props) => {
  const {
    timeout,
    in: inProp,
    children,
    finalOpacity,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
  } = props;

  return (
    <Transition
      in={inProp}
      timeout={timeout}
      onEnter={onEnter}
      onEntered={onEntered}
      onEntering={onEntering}
      onExit={onExit}
      onExited={onExited}
      onExiting={onExiting}
    >
      {(state) => (
        React.cloneElement(children, {
          style: {
            opacity: (state === 'entering' || state === 'entered') ? finalOpacity : 0,
            transition: `opacity ${timeout}ms`,
            visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
            ...children.props.style,
          },
        })
      )}
    </Transition>
  );
};

Fade.displayName = 'Fade';

Fade.defaultProps = {
  timeout: 300,
  finalOpacity: 1,
};
