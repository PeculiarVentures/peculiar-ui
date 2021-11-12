import * as React from 'react';
import { Pagination } from './index';

export const Default = (args: any) => (
  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <Pagination
      {...args}
    />
  </div>
);

Default.args = {
  currentPage: 1,
  count: 101,
  rowsPerPage: 20,
  // labelDisplayedRows: ({ from, to, count }: any) => `Example ${from} to ${to}, summ ${count}`,
  // getItemAriaLabel: (type: any) => `Move to ${type}`,
};

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    // children: { control: 'text' },
    // maxVisibleItems: { control: false },
  },
};
