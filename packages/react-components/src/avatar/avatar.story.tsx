import * as React from 'react';
import { Avatar } from './index';

export const Playground = (args: any) => (
  <Avatar
    {...args}
  />
);

Playground.args = {
  src: 'https://material-ui.com/static/images/avatar/1.jpg',
};

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    children: { control: 'text' },
  },
};
