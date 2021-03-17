import * as React from 'react';
import { Box } from './index';

export const Playground = (args: any) => (
  <Box
    {...args}
  />
);

Playground.args = { children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur' };

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    children: { control: 'text' },
    as: { control: 'text' },
  },
};
