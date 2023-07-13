import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Switch } from './index';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    inputProps: { control: false },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => (
  <Switch
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {};
