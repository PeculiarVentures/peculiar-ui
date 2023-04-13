import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './index';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
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
