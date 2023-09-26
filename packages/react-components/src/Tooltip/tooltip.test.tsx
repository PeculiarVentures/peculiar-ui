import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Tooltip } from './index';

describe('<Tooltip />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(<Tooltip title="tooltipText"><div>Text</div></Tooltip>);

    expect(asFragment()).toMatchSnapshot();
  });
});
