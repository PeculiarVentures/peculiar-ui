import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../Typography';
import { Fade } from './index';

const meta: Meta<typeof Fade> = {
  title: 'Components/Animation/Fade',
  component: Fade,
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
  argTypes: {
    children: {
      control: false,
    },
  },
};

export default meta;

type TStory = StoryObj<typeof Fade>;

export const Playground: TStory = {};
