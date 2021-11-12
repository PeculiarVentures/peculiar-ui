import * as React from 'react';
import { Pagination } from './index';

export const Default = (args: any) => (
  <Pagination
    {...args}
  />
);

Default.args = {
  currentPage: 1,
  pageCount: 10,
};

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    // children: { control: 'text' },
    // maxVisibleItems: { control: false },
  },
};
