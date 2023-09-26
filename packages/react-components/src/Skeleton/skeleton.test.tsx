import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Skeleton } from './index';

describe('<Skeleton />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(<Skeleton>Inside</Skeleton>);

    expect(asFragment()).toMatchSnapshot();
  });
});
