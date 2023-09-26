import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { LinearProgress } from './index';

describe('<LinearProgress />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(<LinearProgress />);

    expect(asFragment()).toMatchSnapshot();
  });
});
