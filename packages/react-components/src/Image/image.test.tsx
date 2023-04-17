import React from 'react';
import { renderWithWrapper as render, screen, fireEvent } from '../test-utils';
import { Image } from '../index';

const src = 'https://bit.ly/dan-abramov';

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
  });

  it('should have class name', () => {
    render(<Image src={src} className="test-cls" />);

    const img = screen.getByRole('img');

    expect(img.getAttribute('class')).toMatch(/test-cls/i);
  });

  it('should call onError handler', () => {
    const handleErr = jest.fn();

    render(<Image src="broken.png" onError={handleErr} />);

    const img = screen.getByRole('img');

    fireEvent.error(img);

    expect(handleErr).toHaveBeenCalledTimes(1);
  });

  it('should call onLoad handler', () => {
    const handleLoad = jest.fn();

    render(<Image src={src} onLoad={handleLoad} />);

    const img = screen.getByRole('img');

    fireEvent.load(img);

    expect(handleLoad).toHaveBeenCalledTimes(1);
  });

  it('should render loading component', () => {
    render(<Image src={undefined} loading={<div>Loading</div>} />);

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
});
