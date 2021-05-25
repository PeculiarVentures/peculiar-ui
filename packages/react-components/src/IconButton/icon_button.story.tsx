import * as React from 'react';
import { IconButton } from './index';
import { CheckIcon } from '../icons';

export const Playground = (args: any) => (
  <IconButton
    {...args}
  />
);

Playground.args = {
  children: <CheckIcon />,
};

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    children: { control: false },
  },
};
