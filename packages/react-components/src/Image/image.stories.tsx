import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './index';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs'],
  args: {
    src: 'https://bit.ly/dan-abramov',
    alt: 'Dan Abrahmov',
  },
  argTypes: {
    fallback: { control: false },
    loading: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Playground: Story = {};
