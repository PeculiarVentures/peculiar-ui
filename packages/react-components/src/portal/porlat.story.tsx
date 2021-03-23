import * as React from 'react';
import { Portal } from './index';

export const Playground = (args: any) => (
  <Portal
    {...args}
  />
);

Playground.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
};

export default {
  title: 'Components/Portal',
  component: Portal,
  argTypes: {
    children: { control: 'text' },
    container: {
      table: {
        disable: true,
      },
    },
  },
};
