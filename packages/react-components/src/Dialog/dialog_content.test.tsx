import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { DialogContent } from './index';

describe('<DialogContent />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(<DialogContent>Content</DialogContent>);

    expect(asFragment()).toMatchSnapshot();
  });
});
