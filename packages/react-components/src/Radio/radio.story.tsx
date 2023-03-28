import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from './index';

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    inputProps: { control: false },
    checkedIcon: { control: false },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => (
  <Radio
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {};
