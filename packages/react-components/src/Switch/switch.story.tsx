import * as React from 'react';
import { Switch } from './index';

const Template = (args: any) => (
  <Switch
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {};

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    inputProps: { control: false },
  },
};
