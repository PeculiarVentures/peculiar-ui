import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './index';

const meta: Meta<typeof Box> = {
  title: 'Components/Box',
  component: Box,
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
    borderWidth: 4,
    borderRadius: 4,
    borderStyle: 'solid',
    background: 'primary-tint-3',
    borderColor: 'secondary-tint-3',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    // @ts-expect-error: `component` is not a valid prop
    component: {
      control: false,
    },
  },
};

export default meta;

type TStory = StoryObj<typeof Box>;

export const Playground: TStory = {};

export const BackgroundColorExample = () => (
  <>
    <Box
      background="attention"
    >
      Attention
    </Box>
    <Box
      background="gray-6"
    >
      Gray 6
    </Box>
  </>
);

export const BorderColorExample = () => (
  <>
    <Box
      borderColor="secondary"
      borderStyle="solid"
      borderWidth={1}
    >
      Secondary
    </Box>
    <Box
      borderColor="wrong"
      borderStyle="solid"
      borderWidth={4}
    >
      Wrong
    </Box>
  </>
);

export const BorderStyleExample = () => (
  <>
    <Box
      borderColor="primary"
      borderStyle="solid"
      borderWidth={1}
    >
      Solid
    </Box>
    <Box
      borderColor="primary"
      borderStyle="dashed"
      borderWidth={1}
    >
      Dashed
    </Box>
  </>
);

export const BorderPositionExample = () => (
  <>
    <Box
      borderColor="primary"
      borderStyle="solid"
      borderWidth={1}
    >
      Default
    </Box>
    <Box
      borderColor="primary"
      borderStyle="solid"
      borderWidth={1}
      borderPosition="horizontal"
    >
      Horizontal
    </Box>
    <Box
      borderColor="primary"
      borderStyle="solid"
      borderWidth={1}
      borderPosition="vertical"
    >
      Vertical
    </Box>
    <Box
      borderColor="primary"
      borderStyle="solid"
      borderWidth={1}
      borderPosition="top"
    >
      Top
    </Box>
    <Box
      borderColor="primary"
      borderStyle="solid"
      borderWidth={1}
      borderPosition="bottom"
    >
      Bottom
    </Box>
    <Box
      borderColor="primary"
      borderStyle="solid"
      borderWidth={1}
      borderPosition="left"
    >
      Left
    </Box>
    <Box
      borderColor="primary"
      borderStyle="solid"
      borderWidth={1}
      borderPosition="right"
    >
      Right
    </Box>
  </>
);

export const BoxShadowExample = () => (
  <>
    <Box
      boxShadow="light-low"
    >
      Light-low
    </Box>
    <Box
      boxShadow="light-medium"
    >
      Light-medium
    </Box>
    <Box
      boxShadow="light-hight"
    >
      Light-hight
    </Box>
    <Box
      boxShadow="light-soft"
    >
      Light-soft
    </Box>
    <Box
      boxShadow="dark-medium"
    >
      Dark-medium
    </Box>
    <Box
      boxShadow="dark-hight"
    >
      Dark-hight
    </Box>
  </>
);
