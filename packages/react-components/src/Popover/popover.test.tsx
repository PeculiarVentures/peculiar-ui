import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Popover } from './index';

describe('<Popover />', () => {
  it('should render with default styles', () => {
    const {
      baseElement,
    } = render(
      <Popover
        open={false}
        anchorEl={document.createElement('div')}
      >
        <div>Inside</div>
      </Popover>,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('should render with default open styles', () => {
    const {
      baseElement,
    } = render(
      <Popover
        open
        anchorEl={document.createElement('div')}
      >
        <div>Inside</div>
      </Popover>,
    );

    expect(baseElement).toMatchSnapshot();
  });
});
