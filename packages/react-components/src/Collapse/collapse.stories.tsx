import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../Typography';
import { Collapse } from './index';

const meta: Meta<typeof Collapse> = {
  title: 'Components/Animation/Collapse',
  component: Collapse,
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

type TStory = StoryObj<typeof Collapse>;

export const Playground: TStory = {};
