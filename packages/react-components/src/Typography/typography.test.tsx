import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Typography } from '../index';

describe('<Typography />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(<Typography />);

    expect(asFragment()).toMatchSnapshot();
  });
});
