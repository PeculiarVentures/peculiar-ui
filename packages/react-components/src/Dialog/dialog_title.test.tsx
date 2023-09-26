import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { DialogTitle } from './index';

describe('<DialogTitle />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(<DialogTitle>Title</DialogTitle>);

    expect(asFragment()).toMatchSnapshot();
  });
});
