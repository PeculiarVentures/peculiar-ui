import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Fade } from './index';

describe('<Fade />', () => {
  it('should render with default styles', () => {
    const {
      asFragment,
    } = render(
      <Fade>
        <div>Inside</div>
      </Fade>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should finish animation', () => {
    const {
      asFragment,
    } = render(
      <Fade in>
        <div>Inside</div>
      </Fade>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
