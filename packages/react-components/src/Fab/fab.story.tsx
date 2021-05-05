import * as React from 'react';
import { Fab } from './index';
import { CheckmarkIcon } from '../icons';

export const Playground = (args: any) => (
  <Fab
    {...args}
  />
);

Playground.args = {
  children: <CheckmarkIcon />,
};

export default {
  title: 'Components/FloatingActionButton',
  component: Fab,
  argTypes: {
    children: { control: false },
  },
};
