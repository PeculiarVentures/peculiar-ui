import * as React from 'react';
import { Drawer } from './index';

export const Playground = (args: any) => (
  <Drawer
    {...args}
  />
);

Playground.args = {
  children: 'Hello',
};

export default {
  title: 'Components/Drawer',
  component: Drawer,
  argTypes: {
    children: { control: 'text' },
  },
};
