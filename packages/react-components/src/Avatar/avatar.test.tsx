import React from 'react';
import {
  renderWithWrapper as render, screen, fireEvent,
} from '../test-utils';
import { Avatar } from './index';

const src = 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60';

describe('<Avatar />', () => {
  describe('Avatar render variants', () => {
    it('should render as default', () => {
      const {
        asFragment,
      } = render(<Avatar />);

      const img = screen.getByRole('img');

      expect(img).toBeInTheDocument();
      expect(img.tagName).toBe('svg');
      expect(asFragment()).toMatchSnapshot();
    });

    it('should render as image', () => {
      const {
        asFragment,
      } = render(<Avatar src={src} />);

      const img = screen.getByRole('img');

      expect(img).toBeInTheDocument();
      expect(img.tagName).toBe('IMG');
      expect(img.getAttribute('src')).toEqual(src);
      expect(asFragment()).toMatchSnapshot();
    });

    it('should render 1 initial with a 1-word name', () => {
      const {
        asFragment,
      } = render(<Avatar name="First" />);

      expect(screen.getByText('F')).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
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
      const {
        asFragment,
      } = render(<Avatar name="First" getInitials={(str) => str.split('')[0]} />);

      expect(screen.getByText('F')).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    });

    it('should prioritize render as image over initials', () => {
      const {
        asFragment,
      } = render(<Avatar src={src} name="First" />);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have test id', () => {
      const {
        asFragment,
      } = render(<Avatar data-testid="test-id" />);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have class name', () => {
      const {
        asFragment,
      } = render(<Avatar className="test-cls" />);

      expect(asFragment()).toMatchSnapshot();
    });

    it('shoul change initials render element', () => {
      const {
        asFragment,
      } = render(
        <Avatar
          name="First"
          renderInitials={(props) => (
            // eslint-disable-next-line jsx-a11y/heading-has-content
            <h1 {...props} />
          )}
        />,
      );

      expect(screen.getByText('F')).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('Avatar render sizes', () => {
    const sizes: React.ComponentProps<typeof Avatar>['size'][] = [
      'small',
      'medium',
      'large',
    ];

    sizes.forEach((size) => {
      it(`size "${size}"`, () => {
        const {
          asFragment,
        } = render(
          <Avatar size={size} />,
        );

        expect(asFragment()).toMatchSnapshot();
      });
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
