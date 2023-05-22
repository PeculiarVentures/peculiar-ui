import React from 'react';
import { EventBoundaryContext, EventBoundaryProviderContextType } from './event_boundary_context';

export const useEventBoundaryContext = (): EventBoundaryProviderContextType => (
  React.useContext(EventBoundaryContext)
);
