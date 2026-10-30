import * as React from 'react';
import { Transition } from 'react-transition-group';
import { useMergedRef } from '../hooks';
import { getElementRef } from '../utils/get_element_ref';

// The props of Transition<HTMLElement> (TransitionProps), taken from the package root:
// ESM declarations can't import the extensionless react-transition-group/Transition
// subpath under node16/nodenext resolution.
export type TBaseTransitionProps = Pick<
  React.ComponentProps<typeof Transition<HTMLElement>>,
  | 'onEnter'
  | 'onEntered'
  | 'onEntering'
  | 'onExit'
  | 'onExited'
  | 'onExiting'
  | 'unmountOnExit'
  | 'mountOnEnter'
>;

interface IBaseProps {
  /**
   * If `true`, the component will transition in.
   */
  in?: boolean;
  /**
   * The duration for the transition, in milliseconds.
   * @default 225
   */
  timeout?: number;
  /**
   * A single child content element.
   */
  children: React.ReactElement;
  /**
   * @default 1
   */
  finalOpacity?: number;
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * @default true
   */
  appear?: boolean;
}

type TFadeProps = IBaseProps & TBaseTransitionProps;

export const Fade = React.forwardRef<any, TFadeProps>((props, ref) => {
  const {
    timeout = 225,
    in: inProp,
    children,
    finalOpacity = 1,
    appear = true,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    ...other
  } = props;
  const nodeRef = React.useRef<HTMLElement>(null);
  // The child receives the transition styles and the merged ref.
  const child = children as React.ReactElement<{
    style?: React.CSSProperties;
    ref?: React.Ref<HTMLElement>;
  }>;
  const multiRef = useMergedRef(getElementRef<HTMLElement>(children), ref, nodeRef);

  const handleEnter = (isAppearing: boolean) => {
    if (nodeRef.current) {
      // reading a dimension prop will cause the browser to recalculate,
      // which will let our animations work
      void nodeRef.current.offsetHeight;
    }

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
      {(state) =>
        React.cloneElement(child, {
          style: {
            opacity: state === 'entering' || state === 'entered' ? finalOpacity : 0,
            transition: `opacity ${timeout}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
            visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
            ...child.props.style,
          },
          ref: multiRef,
        })
      }
    </Transition>
  );
});

Fade.displayName = 'Fade';
