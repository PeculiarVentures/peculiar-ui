import * as React from 'react';
import { Menu, MenuProps } from './index';
import { Button } from '../Button';

export const Playground = (args: MenuProps) => (
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

export default {
  title: 'Components/Menu',
  component: Menu,
  argTypes: {
    children: { control: false },
    options: { control: false },
    popoverProps: { control: false },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};
