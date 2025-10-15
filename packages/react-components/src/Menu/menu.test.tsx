import React from 'react';
import {
  renderWithWrapper as render,
  fireEvent,
  screen,
  act,
} from '../test-utils';
import { Menu } from './index';

describe('<Menu />', () => {
  const options: Partial<React.ComponentProps<typeof Menu>>['options'] = [
    {
      label: 'item-1',
    },
    {
      label: 'item-2',
    },
    {
      label: 'item-3',
    },
  ];

  it('should render with default styles', () => {
    const { asFragment } = render(
      <Menu
        options={options}
      >
        <button type="button">Open</button>
      </Menu>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', async () => {
    const { baseElement } = render(
      <Menu
        options={options}
        popoverProps={{
          className: 'my-class-name',
        }}
      >
        <button type="button">Open</button>
      </Menu>,
    );

    fireEvent.click(screen.getByRole('button'));

    // Popper update() - https://github.com/popperjs/react-popper/issues/350
    await act(async () => await null);

    expect(baseElement).toMatchSnapshot();
  });
});
