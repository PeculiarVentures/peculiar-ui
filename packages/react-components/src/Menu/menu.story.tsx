/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { Menu } from './index';
import { Button } from '../Button';

export const Playground = (args: any) => (
  <Menu
    {...args}
    options={[
      {
        label: 'Print',
        disabled: true,
        onClick: () => alert('print'),
      },
      {
        label: 'Save to my profile',
        onClick: () => alert('save'),
      },
      {
        label: 'Delete',
        onClick: () => alert('delete'),
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
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};
