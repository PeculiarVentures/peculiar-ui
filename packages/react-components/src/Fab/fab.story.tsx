import * as React from 'react';
import { Fab } from './index';
import { PlusIcon } from '../icons';

export const Playground = (args: any) => (
  <Fab
    {...args}
  />
);

Playground.args = {
  children: <PlusIcon />,
};

export default {
  title: 'Components/FloatingActionButton',
  component: Fab,
  argTypes: {
    children: { control: false },
    component: { control: false },
  },
};
