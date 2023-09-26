import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Slider } from './index';

describe('<Slider />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(<Slider />);

    expect(asFragment()).toMatchSnapshot();
  });
});
