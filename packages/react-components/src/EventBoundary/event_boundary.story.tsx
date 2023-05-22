import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../Button';
import { TextField } from '../TextField';
import { EventBoundary, EventBoundaryProvider } from './index';

export default {
  title: 'Components/EventBoundary',
  component: EventBoundary,
  argTypes: {
    children: { control: false },
  },
} as ComponentMeta<typeof EventBoundary>;

export const Template: ComponentStory<typeof EventBoundary> = () => (
  <EventBoundaryProvider
    onEvent={(eventName) => console.log(eventName)}
  >
    <EventBoundary
      event="onClick"
      eventName="button click"
    >
      <Button
        onClick={() => {
          console.log('own click');
        }}
      >
        Click me
      </Button>
    </EventBoundary>
    <EventBoundary
      event="onChange"
      eventName="field change"
    >
      <TextField
        onChange={() => {
          console.log('own change');
        }}
      />
    </EventBoundary>
  </EventBoundaryProvider>
);
