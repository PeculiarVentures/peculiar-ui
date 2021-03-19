import * as React from 'react';
import { Avatar } from './index';

export const Playground = (args: any) => (
  <Avatar
    {...args}
  />
);

Playground.args = {};

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    children: { control: 'text' },
  },
};
