import * as React from 'react';
import type { TransitionProps } from 'react-transition-group/Transition';
import { Transition } from 'react-transition-group';

type BaseTransitionProps = Pick<TransitionProps<HTMLElement>, (
  'onEnter' |
  'onEntered' |
  'onEntering' |
  'onExit' |
  'onExited'|
  'onExiting'
)>;

type BaseProps = {
  in?: boolean;
  timeout?: number;
  children: React.ReactElement;
};

type FadeProps = BaseProps & BaseTransitionProps;

export const Fade: React.FC<FadeProps> = (props) => {
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
  } = props;

  return (
    <Transition
      in={inProp}
      timeout={timeout}
      appear
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
            opacity: (state === 'entering' || state === 'entered') ? 1 : 0,
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
};
