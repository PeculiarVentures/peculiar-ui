import * as React from 'react';
import { Typography } from './index';

export const Default = (args: any) => (
  <Typography
    {...args}
  />
);

Default.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
};

export default {
  title: 'Playground/Typography',
  component: Typography,
  argTypes: {
    children: { control: 'text' },
    component: { control: false },
  },
};
