import React from 'react';
import { renderWithWrapper as render, screen } from '../test-utils';
import { Image } from '../index';

// prettier-ignore
const src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=';

describe('<Image />', () => {
  it('should render as default', () => {
    render(<Image src={src} />);

    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();
    expect(img.tagName).toBe('IMG');
    expect(img.getAttribute('src')).toEqual(src);
  });

  it('should have test id', () => {
    render(<Image src={src} data-testid="test-id" />);

    const img = screen.getByRole('img');

    expect(img.getAttribute('data-testid')).toMatch(/test-id/i);
  });

  it('should have alt', () => {
    render(<Image src={src} alt="Test alt" />);

    const img = screen.getByRole('img');

    expect(img.getAttribute('alt')).toMatch(/Test alt/i);

    screen.debug();
  });
});
