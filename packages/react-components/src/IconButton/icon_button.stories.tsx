import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CheckIcon } from '../icons';
import { IconButton } from './index';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  args: {
    children: (
      <CheckIcon />
    ),
  },
  argTypes: {
    children: {
      control: false,
    },
    tooltipProps: {
      control: false,
    },
    // @ts-expect-error: `component` is not a valid prop
    component: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Playground: Story = {};
