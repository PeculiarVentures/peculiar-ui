import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Popover } from './index';

describe('<Popover />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(
      <Popover
        open={false}
        anchorEl={document.createElement('div')}
      >
        <div>Inside</div>
      </Popover>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
