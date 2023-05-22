import React from 'react';

export type EventBoundaryProviderContextType = {
  publish: (eventName: string) => void;
};

const stub = (): never => {
  throw new Error('You forgot to wrap your component in <EventBoundaryProvider>.');
};

const initialContext = {
  publish: stub,
};

export const EventBoundaryContext = React.createContext<EventBoundaryProviderContextType>(
  initialContext,
);
