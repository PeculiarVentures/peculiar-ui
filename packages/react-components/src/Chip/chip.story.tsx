import * as React from 'react';
import { Chip } from './index';

export const Playground = (args: any) => (
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

export default {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {
    children: { control: false },
    deleteIcon: { control: false },
    onDelete: { control: false },
    onClick: { control: false },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};
