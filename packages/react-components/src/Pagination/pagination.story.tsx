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
  renderItem: (p: any) => {
    const { element } = p;

    return <a href={`/${element}`} {...p}>{element}</a>;
  },
};

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    // children: { control: 'text' },
    // component: { control: false },
  },
};
