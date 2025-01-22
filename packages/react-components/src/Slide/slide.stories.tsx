import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../Typography';
import { Slide } from './index';

const meta: Meta<typeof Slide> = {
  title: 'Components/Animation/Slide',
  component: Slide,
  tags: ['autodocs'],
  args: {
    children: (
      <Typography
        variant="h1"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
    ),
  },
  argTypes: { children: { control: false } },
};

export default meta;

type Story = StoryObj<typeof Slide>;

export const Playground: Story = {};
