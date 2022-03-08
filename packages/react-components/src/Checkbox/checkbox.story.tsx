import * as React from 'react';
import { Checkbox } from './index';

const Template = (args: any) => (
  <Checkbox
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {};

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    inputProps: { control: false },
    checkedIcon: { control: false },
  },
};
