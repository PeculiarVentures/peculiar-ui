import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { MenuItem } from './index';

describe('<MenuItem />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(<MenuItem>MenuItem</MenuItem>);

    expect(asFragment()).toMatchSnapshot();
  });
});
