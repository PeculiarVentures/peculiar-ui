import * as React from 'react';
import { IconButton } from './index';
import { CheckmarkIcon } from '../icons';

export const Playground = (args: any) => (
  <IconButton
    {...args}
  />
);

Playground.args = {
  children: <CheckmarkIcon />,
};

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    children: { control: false },
  },
};
