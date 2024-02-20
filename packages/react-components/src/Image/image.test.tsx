import React from 'react';
import { renderWithWrapper as render, screen, fireEvent } from '../test-utils';
import { Image } from '../index';

const src = 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60';

describe('<Image />', () => {
  it('should render as default', () => {
    const { asFragment } = render(<Image src={src} />);

    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();
    expect(img.tagName).toBe('IMG');
    expect(img.getAttribute('src')).toEqual(src);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should have test id', () => {
    const { asFragment } = render(<Image src={src} data-testid="test-id" />);

    const img = screen.getByRole('img');

    expect(img.getAttribute('data-testid')).toMatch(/test-id/i);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should have alt', () => {
    const { asFragment } = render(<Image src={src} alt="Test alt" />);

    const img = screen.getByRole('img');

    expect(img.getAttribute('alt')).toMatch(/Test alt/i);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should have class name', () => {
    const { asFragment } = render(<Image src={src} className="test-cls" />);

    const img = screen.getByRole('img');

    expect(img.getAttribute('class')).toMatch(/test-cls/i);

    expect(asFragment()).toMatchSnapshot();
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
    const { asFragment } = render(<Image src={undefined} loading={<div>Loading</div>} />);

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
