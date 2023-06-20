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
        subOptions: [
          {
            label: 'Full screen',
            onClick: () => console.log('full screen'),
          },
          {
            label: 'Search',
            onClick: () => console.log('search'),
          },
          {
            label: 'Previous',
            onClick: () => console.log('previous'),
          },
          {
            label: 'Next',
            onClick: () => console.log('next'),
          },
          {
            label: 'best',
            onClick: () => console.log('next'),
          },
        ],
      },
      {
        label: 'Options',
        subOptions: [
          {
            label: 'Full screen',
            onClick: () => console.log('full screen'),
          },
          {
            label: 'Search',
            onClick: () => console.log('search'),
          },
          {
            label: 'Previous',
            onClick: () => console.log('previous'),
          },
          {
            label: 'Next',
            onClick: () => console.log('next'),
          },
          {
            label: 'best',
            onClick: () => console.log('next'),
          },
        ],
      },
    ]}
  >
    <Button>
      +
    </Button>
  </Menu>
);
Playground.args = {};
