import * as React from 'react';
import { Typography } from './index';

export const Playground = (args: any) => (
  <Typography
    {...args}
  />
);

Playground.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
};

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    children: { control: 'text' },
    component: { control: false },
  },
};
