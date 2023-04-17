import React from 'react';
import { renderWithWrapper as render, screen } from '../test-utils';
import { Fab } from '../index';
import { PlusIcon } from '../icons';

describe('<Fab />', () => {
  it('should render as default', () => {
    render(
      <Fab>
        <PlusIcon role="img" />
      </Fab>,
    );

    const button = screen.getByRole('button');
    const icon = screen.getByRole('img');

    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
    expect(button.getAttribute('class')).toMatch(/ButtonBase-Fab/i);
    expect(icon.tagName).toBe('svg');
    expect(button).toContainElement(icon);
  });
});
