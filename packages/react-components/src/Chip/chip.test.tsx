import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Chip } from './index';

describe('<Chip />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(<Chip>Text</Chip>);

    expect(asFragment()).toMatchSnapshot();
  });
});
