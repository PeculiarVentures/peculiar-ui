import * as React from 'react';
import { Slider } from './index';

const Template = (args: any) => (
  <Slider
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {};

export default {
  title: 'Components/Slider',
  component: Slider,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};
