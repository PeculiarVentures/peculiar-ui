import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { CircularProgress } from './index';

describe('<CircularProgress />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(<CircularProgress />);

    expect(asFragment()).toMatchSnapshot();
  });
});
