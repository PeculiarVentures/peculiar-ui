import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Slider } from './index';

export default {
  title: 'Components/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => (
  <Slider
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {};
