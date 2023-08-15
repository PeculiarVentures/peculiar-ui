import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconButton } from './index';
import { CheckIcon } from '../icons';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    children: { control: false },
    component: { control: false },
    tooltipProps: { control: false },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton
    {...args}
  >
    <CheckIcon />
  </IconButton>
);

export const Playground = Template.bind({});
