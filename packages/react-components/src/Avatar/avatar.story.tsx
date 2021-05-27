import * as React from 'react';
import { Avatar } from './index';

const Template = (args: any) => (
  <Avatar
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {
  src: 'https://bit.ly/dan-abramov',
  name: 'Dan Abrahmov',
};

export const Initials = Template.bind({});
Initials.args = {
  name: 'Dan Abrahmov',
};

export const Fallback = Template.bind({});
Fallback.args = {
  src: 'https://bit.ly/broken-link',
};

export const Playground = Template.bind({});

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {},
};
