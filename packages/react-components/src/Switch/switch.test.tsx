import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Switch } from './index';

describe('<Switch />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(<Switch />);

    expect(asFragment()).toMatchSnapshot();
  });
});
