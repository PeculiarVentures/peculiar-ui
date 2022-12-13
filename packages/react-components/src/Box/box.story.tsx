import * as React from 'react';
import { Box } from './index';

export const Default = (args: any) => (
  <Box
    {...args}
  />
);

Default.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
  borderWidth: 4,
  borderRadius: 4,
  borderStyle: 'solid',
  background: 'primary-tint-3',
  borderColor: 'secondary-tint-3',
};

export default {
  title: 'Playground/Box',
  component: Box,
  argTypes: {
    children: { control: 'text' },
    component: { control: false },
  },
};
