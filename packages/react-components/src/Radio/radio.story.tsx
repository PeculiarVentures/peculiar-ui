import * as React from 'react';
import { Radio } from './index';

const Template = (args: any) => (
  <Radio
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {};

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    inputProps: { control: false },
    checkedIcon: { control: false },
  },
};
