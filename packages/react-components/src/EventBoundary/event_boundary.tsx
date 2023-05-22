import React from 'react';
import { useEventBoundaryContext } from './use_event_boundary_context';

/**
 * Types.
 */
type EventBoundaryProps = {
  event: keyof Omit<React.DOMAttributes<HTMLElement>, 'css' | 'children' | 'dangerouslySetInnerHTML'>;
  eventName: string;
  /**
   * A single child content element.
   */
  children: React.ReactElement;
};
/**
 *
 */

export const EventBoundary: React.FC<EventBoundaryProps> = (props) => {
  const {
    event: eventProp,
    eventName,
    children,
  } = props;
  const { publish } = useEventBoundaryContext();

  return React.Children.only(children) && React.cloneElement(children, {
    [eventProp]: (event: React.SyntheticEvent) => {
      publish(eventName);

      if (children.props[eventProp]) {
        children.props[eventProp](event);
      }
    },
  });
};
