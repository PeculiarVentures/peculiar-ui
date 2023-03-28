import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu } from './index';
import { Button } from '../Button';

export default {
  title: 'Components/Menu',
  component: Menu,
  argTypes: {
    children: { control: false },
    options: { control: false },
    popoverProps: { control: false },
  },
} as ComponentMeta<typeof Menu>;

export const Playground: ComponentStory<typeof Menu> = (args) => (
  <Menu
    {...args}
    options={[
      {
        label: 'Print',
        disabled: true,
        onClick: () => console.log('print'),
      },
      {
        label: 'Save to my profile',
        onClick: () => console.log('save'),
      },
      {
        label: 'Delete',
        onClick: () => console.log('delete'),
      },
    ]}
  >
    <Button>
      +
    </Button>
  </Menu>
);
Playground.args = {};
