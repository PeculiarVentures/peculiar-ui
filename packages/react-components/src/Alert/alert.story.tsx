import * as React from 'react';
import { Alert } from './index';

export const Playground = (args: any) => (
  <>
    <Alert
      {...args}
    />
  </>
);

Playground.args = {
  children: 'This is a message!',
};

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    children: { control: 'text' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};
