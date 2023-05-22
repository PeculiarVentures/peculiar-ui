import React from 'react';
import { EventBoundaryContext } from './event_boundary_context';

type EventBoundaryProviderPropsType = {
  /**
   * The child nodes your Provider has wrapped.
   */
  children: React.ReactNode;
  onEvent: (eventName: string) => void;
};

export const EventBoundaryProvider: React.FC<EventBoundaryProviderPropsType> = (props) => {
  const { children, onEvent } = props;

  return (
    <EventBoundaryContext.Provider
      value={{
        publish: onEvent,
      }}
    >
      {children}
    </EventBoundaryContext.Provider>
  );
};
