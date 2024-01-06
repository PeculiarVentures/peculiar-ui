import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { Drawer } from './index';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </Typography>
        <Button>
          Button
        </Button>
      </>
    ),
    style: {
      padding: '20px',
    },
  },
  argTypes: {
    children: { control: false },
    style: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Playground: Story = {};
