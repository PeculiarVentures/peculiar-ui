import * as React from 'react';
import { IconButton } from './index';
import { CheckIcon } from '../icons';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    children: { control: false },
    component: { control: false },
  },
};

const Template = (args: any) => (
  <IconButton
    {...args}
  >
    <CheckIcon />
  </IconButton>
);

export const Playground = Template.bind({});
