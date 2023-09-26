import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Slide } from './index';

describe('<Slide />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(<Slide><div>Inside</div></Slide>);

    expect(asFragment()).toMatchSnapshot();
  });
});
