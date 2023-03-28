import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Chip } from './index';

export default {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {
    children: { control: false },
    deleteIcon: { control: false },
    onDelete: { control: false },
    onClick: { control: false },
    startContent: { control: false },
    component: { control: false },
  },
} as ComponentMeta<typeof Chip>;

export const Playground: ComponentStory<typeof Chip> = (args) => (
  <>
    <Chip
      {...args}
      onClick={undefined}
      onDelete={undefined}
    >
      Basic
    </Chip>
    <Chip
      {...args}
      onDelete={undefined}
    >
      Clickable
    </Chip>
    <Chip
      {...args}
    >
      Clickable deletable
    </Chip>
  </>
);
Playground.args = {};
