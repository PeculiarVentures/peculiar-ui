import * as React from 'react';
import { Fab } from './index';

export const Playground = (args: any) => (
  <Fab
    {...args}
  />
);

Playground.args = {
  children: '+',
};

export default {
  title: 'Components/FloatingActionButton',
  component: Fab,
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: {
        type: 'select',
        options: { default: undefined, extended: 'extended' },
      },
    },
  },
};
