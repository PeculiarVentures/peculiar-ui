import React from 'react';
import { renderWithWrapper as render, screen } from '../test-utils';
import { Button } from '../index';

describe('<Button />', () => {
  it('should render as default', () => {
    render(<Button>Text</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Text');
    expect(button.getAttribute('class')).toMatch(/Button-medium/i);
  });
  it('should render an text button', () => {
    render(<Button>Text</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveStyle({ borderColor: 'transparent' });
    expect(button).toHaveStyle({ backgroundColor: 'transparent' });
  });
  it('should render an contained button', () => {
    render(<Button variant="contained">Text</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveStyle({ backgroundColor: 'var(--pv-color-gray-8)' });
  });
  it('should render an outlined button', () => {
    render(<Button variant="outlined">Text</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveStyle({ backgroundColor: 'transparent' });
    expect(button).toHaveStyle({ borderColor: 'var(--pv-color-gray-8)' });
  });
  it('should render an small size button', () => {
    render(<Button size="small">Text</Button>);

    const button = screen.getByRole('button');

    expect(button.getAttribute('class')).toMatch(/Button-small/i);
  });
  it('should render an medium size button', () => {
    render(<Button size="medium">Text</Button>);

    const button = screen.getByRole('button');

    expect(button.getAttribute('class')).toMatch(/Button-medium/i);
  });
  it('should render an large size button', () => {
    render(<Button size="large">Text</Button>);

    const button = screen.getByRole('button');

    expect(button.getAttribute('class')).toMatch(/Button-large/i);
  });
});
