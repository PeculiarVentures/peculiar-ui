import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Box } from './index';

describe('<Box />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(<Box />);

    expect(asFragment()).toMatchSnapshot();
  });
});
