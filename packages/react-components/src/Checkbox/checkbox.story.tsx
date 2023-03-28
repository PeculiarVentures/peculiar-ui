import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from './index';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    inputProps: { control: false },
    checkedIcon: { control: false },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {};
