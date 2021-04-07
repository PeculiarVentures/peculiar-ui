import * as React from 'react';
import { Chip } from './index';

export const Playground = (args: any) => (
  <Chip
    {...args}
  />
);

Playground.args = {
  children: 'Hello',
};

export default {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {
    children: { control: 'text' },
    icon: { control: false },
  },
};
