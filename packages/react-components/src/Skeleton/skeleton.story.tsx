import * as React from 'react';
import { Skeleton } from './index';

export const Playground = (args: any) => (
  <Skeleton
    {...args}
  />
);

export default {
  title: 'Playground/Skeleton',
  component: Skeleton,
  argTypes: {
    children: { control: false },
  },
};
