import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Menu } from './index';

describe('<Menu />', () => {
  it('should render with default styles', () => {
    const options: Partial<React.ComponentProps<typeof Menu>>['options'] = [
      { label: 'item-1' },
      { label: 'item-2' },
      { label: 'item-3' },
    ];

    const { asFragment } = render(
      <Menu
        options={options}
      >
        <button type="button">Open</button>
      </Menu>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
