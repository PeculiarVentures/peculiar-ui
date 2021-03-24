import * as React from 'react';
import { Backdrop } from './index';

export const Playground = (args: any) => (
  <Backdrop
    {...args}
  />
);

Playground.args = {
  open: true,
};

export default {
  title: 'Components/Backdrop',
  component: Backdrop,
};
