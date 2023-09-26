import React from 'react';
import { renderWithWrapper as render, screen } from '../test-utils';
import { IconButton } from './index';
import { PlusIcon } from '../icons';

describe('<IconButton />', () => {
  it('should render as default', () => {
    const { asFragment } = render(
      <IconButton>
        <PlusIcon role="img" />
      </IconButton>,
    );

    const button = screen.getByRole('button');
    const icon = screen.getByRole('img');

    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
    expect(icon.tagName).toBe('svg');
    expect(button).toContainElement(icon);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should have title', () => {
    const { asFragment } = render(
      <IconButton title="Test title">
        <PlusIcon />
      </IconButton>,
    );

    const button = screen.getByRole('button');

    expect(button.getAttribute('aria-label')).toMatch(/Test title/i);

    expect(asFragment()).toMatchSnapshot();
  });
});
