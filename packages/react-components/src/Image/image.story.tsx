import * as React from 'react';
import { Image } from './index';

const Template = (args: any) => (
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

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    fallback: { control: false },
  },
};
