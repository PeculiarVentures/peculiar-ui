import * as React from 'react';
import { IconButton } from './index';
import { CheckIcon } from '../icons';

const Template = (args: any) => (
  <IconButton
    {...args}
  >
    <CheckIcon />
  </IconButton>
);

export const Playground = Template.bind({});

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    children: { control: false },
    component: { control: false },
  },
};
