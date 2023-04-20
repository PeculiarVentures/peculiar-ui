import React from 'react';
import { renderWithWrapper as render, screen, fireEvent } from '../test-utils';
import { Avatar } from '../index';

const src = 'https://bit.ly/dan-abramov';

describe('<Avatar />', () => {
  describe('Avatar render variants', () => {
    it('should render as default', () => {
      render(<Avatar />);

      const img = screen.getByRole('img');

      expect(img).toBeInTheDocument();
      expect(img.tagName).toBe('svg');
    });

    it('should render as image', () => {
      render(<Avatar src={src} />);

      const img = screen.getByRole('img');

      expect(img).toBeInTheDocument();
      expect(img.tagName).toBe('IMG');
      expect(img.getAttribute('src')).toEqual(src);
    });

    it('should  render 1 initial with a 1-word name', () => {
      render(<Avatar name="First" />);
      expect(screen.getByText('F')).toBeInTheDocument();
    });

    it('should render 2 initials with a 2-word name', () => {
      render(<Avatar name="First Last" />);
      expect(screen.getByText('FL')).toBeInTheDocument();
    });

    it('should render 2 initials with a 3-word name', () => {
      render(<Avatar name="First Middle Last" />);
      expect(screen.getByText('FM')).toBeInTheDocument();
    });

    it('should render initials with fn', () => {
      render(<Avatar name="First" getInitials={(str) => str.split('')[0]} />);
      expect(screen.getByText('F')).toBeInTheDocument();
    });

    it('should prioritize render as image over initials', () => {
      render(<Avatar src={src} name="First" />);

      const img = screen.getByRole('img');

      expect(img).toBeInTheDocument();
      expect(img.getAttribute('src')).toEqual(src);
    });

    it('should have test id', () => {
      render(<Avatar data-testid="test-id" />);

      expect(
        screen
          .getByRole('img')
          .closest('div[class*="Avatar"]')
          .getAttribute('data-testid'),
      ).toMatch(/test-id/i);
    });

    it('should have class name', () => {
      render(<Avatar className="test-cls" />);

      expect(
        screen
          .getByRole('img')
          .closest('div[class*="Avatar"]')
          .getAttribute('class'),
      ).toMatch(/test-cls/i);
    });
  });

  describe('Avatar render sizes', () => {
    it('should render a small size', () => {
      render(<Avatar size="small" />);

      expect(
        screen
          .getByRole('img')
          .closest('div[class*="Avatar"]')
          .getAttribute('class'),
      ).toMatch(/Avatar-small/i);
    });

    it('should render a medium size', () => {
      render(<Avatar size="medium" />);

      expect(
        screen
          .getByRole('img')
          .closest('div[class*="Avatar"]')
          .getAttribute('class'),
      ).toMatch(/Avatar-medium/i);
    });

    it('should render a large size', () => {
      render(<Avatar size="large" />);

      expect(
        screen
          .getByRole('img')
          .closest('div[class*="Avatar"]')
          .getAttribute('class'),
      ).toMatch(/Avatar-large/i);
    });
  });

  describe('Avatar handlers', () => {
    it('should call onError handler', () => {
      const handleErr = jest.fn();

      render(<Avatar src="broken.png" onError={handleErr} />);

      const img = screen.getByRole('img');

      fireEvent.error(img);

      expect(handleErr).toHaveBeenCalledTimes(1);
    });

    it('should call onLoad handler', () => {
      const handleLoad = jest.fn();

      render(<Avatar src={src} onLoad={handleLoad} />);

      const img = screen.getByRole('img');

      fireEvent.load(img);

      expect(handleLoad).toHaveBeenCalledTimes(1);
    });
  });
});
