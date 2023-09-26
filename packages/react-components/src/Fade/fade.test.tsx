import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Fade } from './index';

describe('<Fade />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(
      <Fade>
        <div>Inside</div>
      </Fade>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
