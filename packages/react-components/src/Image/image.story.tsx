import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Image } from './index';

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    fallback: { control: false },
    loading: { control: false },
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => (
  <Image
    {...args}
  />
);

export const Default = Template.bind({});

Default.args = {
  src: 'https://bit.ly/dan-abramov',
  alt: 'Dan Abrahmov',
};

export const Fallback = Template.bind({});

Fallback.args = {
  src: 'https://bit.ly/broken-link',
  fallback: (
    <p>
      Fallback component
    </p>
  ),
};

export const Playground = Template.bind({});
