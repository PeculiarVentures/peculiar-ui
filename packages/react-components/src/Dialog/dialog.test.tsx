import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Dialog } from './index';

describe('<Collapse />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(<Dialog open>Dialog Content</Dialog>);

    expect(asFragment()).toMatchSnapshot();
  });
});
