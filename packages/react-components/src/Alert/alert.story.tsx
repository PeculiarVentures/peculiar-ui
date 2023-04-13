import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alert } from './index';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    children: { control: 'text' },
  },
} as ComponentMeta<typeof Alert>;

export const Playground: ComponentStory<typeof Alert> = (args) => (
  <>
    <Alert
      {...args}
    />
    <br />
    <Alert
      {...args}
      onClose={undefined}
    />
  </>
);

Playground.args = {
  children: 'This is a message!',
};
