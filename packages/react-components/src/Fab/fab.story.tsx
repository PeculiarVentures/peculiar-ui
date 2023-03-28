import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Fab } from './index';
import { PlusIcon } from '../icons';

export default {
  title: 'Components/FloatingActionButton',
  component: Fab,
  argTypes: {
    children: { control: false },
    component: { control: false },
  },
} as ComponentMeta<typeof Fab>;

export const Playground: ComponentStory<typeof Fab> = (args) => (
  <Fab
    {...args}
  />
);
Playground.args = {
  children: <PlusIcon />,
};
