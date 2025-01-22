import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '../Box';
import { FlexContainer, Flex } from './index';

const meta: Meta<typeof FlexContainer> = {
  title: 'Components/Flex',
  component: FlexContainer,
  args: {
    children: (
      <>
        <Flex>
          1
        </Flex>
        <Flex>
          2
        </Flex>
        <Flex>
          3
        </Flex>
      </>
    ),
  },
  argTypes: {
    children: {
      control: false,
    },
    // @ts-expect-error: `component` is not a valid prop
    component: {
      control: false,
    },
  },
};

export default meta;

type TStory = StoryObj<typeof Flex>;

export const Playground: TStory = {};

export const AutoLayoutExample = () => (
  <FlexContainer gap={20}>
    <Flex
      size="grow"
      component={Box}
      background="gray-5"
    >
      size=grow
    </Flex>
    <Flex
      component={Box}
      background="gray-8"
      style={{
        width: '60%',
      }}
    >
      size=60%
    </Flex>
    <Flex
      size="grow"
      component={Box}
      background="gray-5"
    >
      size=grow
    </Flex>
  </FlexContainer>
);

export const VariableWidthExample = () => (
  <FlexContainer gap={20}>
    <Flex
      size="auto"
      component={Box}
      background="gray-5"
    >
      size=auto
    </Flex>
    <Flex
      component={Box}
      background="gray-8"
      style={{
        width: '60%',
      }}
    >
      size=60%
    </Flex>
    <Flex
      size="grow"
      component={Box}
      background="gray-5"
    >
      size=grow
    </Flex>
  </FlexContainer>
);

export const ColumnExample = () => (
  <FlexContainer gap={10} direction="column">
    <Flex
      component={Box}
      background="gray-5"
    >
      1
    </Flex>
    <Flex
      component={Box}
      background="gray-5"
    >
      2
    </Flex>
    <Flex
      component={Box}
      background="gray-5"
    >
      3
    </Flex>
  </FlexContainer>
);
