import * as React from 'react';
import { Button } from './index';

export const Base = (args) => (
  <Button
    {...args}
  />
)

Base.args = { children: 'Hello' };

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
  },
};
