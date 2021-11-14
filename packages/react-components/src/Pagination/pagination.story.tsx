import * as React from 'react';
import { Pagination } from './index';

export const Default = (args: any) => (
  <Pagination
    {...args}
  />
);

Default.args = {
  currentPage: 1,
  count: 101,
  rowsPerPage: 20,
  // labelDisplayedRows: ({ from, to, count }: any) => `Example ${from} to ${to}, summ ${count}`,
  // getItemAriaLabel: (type: any) => `Move to ${type}`,
  // renderItem: React.forwardRef((props: any, ref: any) => {
  //   const { page, children } = props;

  //   return <a href={page} ref={ref} {...props}>{children}</a>;
  // }),
};

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    labelDisplayedRows: { control: false },
    getItemAriaLabel: { control: false },
    renderItem: { control: false },
    className: { control: 'text' },
  },
};
