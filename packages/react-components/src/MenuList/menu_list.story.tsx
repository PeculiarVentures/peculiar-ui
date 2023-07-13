import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuItem, MenuList } from './index';

export default {
  title: 'Components/MenuList',
  component: MenuList,
  argTypes: {
    children: { control: false },
    component: { control: false },
  },
} as ComponentMeta<typeof MenuList>;

export const Playground: ComponentStory<typeof MenuList> = (args) => (
  <MenuList
    {...args}
  >
    <MenuItem disabled onClick={() => console.log('print')}>
      Print
    </MenuItem>
    <MenuItem onClick={() => console.log('copy')}>
      Copy
    </MenuItem>
    <MenuItem onClick={() => console.log('delete')}>
      Delete
    </MenuItem>
  </MenuList>
);
Playground.args = {};
