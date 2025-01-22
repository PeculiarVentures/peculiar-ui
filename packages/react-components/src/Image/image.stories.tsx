import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './index';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs'],
  args: {
    src: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    alt: 'Perfect Latte',
  },
  argTypes: {
    fallback: { control: false },
    loading: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Playground: Story = {};
