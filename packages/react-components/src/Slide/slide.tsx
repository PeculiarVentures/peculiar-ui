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
  direction?: ('right');
};

type SlideProps = BaseProps & BaseTransitionProps;

export const Slide: React.FC<SlideProps> = (props) => {
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
            transform: (state === 'entering' || state === 'entered') ? 'translateX(0px)' : 'translateX(100%)',
            transition: `transform ${timeout}ms`,
            visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
            ...children.props.style,
          },
        })
      )}
    </Transition>
  );
};

Slide.displayName = 'Slide';

Slide.defaultProps = {
  timeout: 300,
  direction: 'right',
};
