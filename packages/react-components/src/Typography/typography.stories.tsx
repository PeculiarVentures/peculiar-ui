import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './index';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  args: { children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur' },
  argTypes: {
    children: { control: 'text' },
    // @ts-expect-error: `component` is not a valid prop
    component: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Playground: Story = {};

export const VariantExample = () => (
  <>
    <Typography variant="h1">
      h1. Heading
    </Typography>
    <Typography variant="h2">
      h2. Heading
    </Typography>
    <Typography variant="h3">
      h3. Heading
    </Typography>
    <Typography variant="h4">
      h4. Heading
    </Typography>
    <Typography variant="h5">
      h5. Heading
    </Typography>
    <Typography variant="s1">
      s1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
    </Typography>
    <Typography variant="s2">
      s2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
    </Typography>
    <Typography variant="b1">
      b1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
    </Typography>
    <Typography variant="b2">
      b2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
    </Typography>
    <Typography variant="b3">
      b3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
    </Typography>
    <Typography variant="c1">
      c1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
    </Typography>
    <Typography variant="c2">
      c2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
    </Typography>
    <Typography variant="btn1">
      btn1. Button text
    </Typography>
    <Typography variant="btn2">
      btn2. Button text
    </Typography>
  </>
);

export const ColorExample = () => (
  <>
    <Typography color="primary" variant="h5">
      Heading
    </Typography>
    <Typography color="secondary" variant="h5">
      Heading
    </Typography>
    <Typography color="wrong" variant="h5">
      Heading
    </Typography>
    <Typography color="attention" variant="h5">
      Heading
    </Typography>
  </>
);

export const TruncateExample = () => (
  <Typography noWrap>
    Lorem ipsum is placeholder text commonly used in the graphic, print,
    and publishing industries for previewing layouts and visual mockups.
  </Typography>
);
