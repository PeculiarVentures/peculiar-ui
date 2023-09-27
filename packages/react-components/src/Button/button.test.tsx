import React from 'react';
import {
  fireEvent,
  userEvent,
  renderWithWrapper as render,
  screen,
} from '../test-utils';
import { Button } from './index';
import { PlusIcon } from '../icons';

describe('<Button />', () => {
  describe('Button render variants', () => {
    it('should render as default', () => {
      render(<Button>Text</Button>);

      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('Text');
      expect(button.tagName).toBe('BUTTON');
      expect(button.getAttribute('class')).toMatch(/Button-medium/i);
    });

    it('should be disabled', () => {
      const { asFragment } = render(<Button disabled>Text</Button>);

      const button = screen.getByRole('button');

      expect(button).toHaveAttribute('disabled');

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have start icon', () => {
      const { asFragment } = render(<Button startIcon={<PlusIcon />}>Text</Button>);

      const button = screen.getByRole('button');

      expect(
        button.querySelector('span[class*="Button-startIcon"]'),
      ).toBeInTheDocument();

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have end icon', () => {
      const { asFragment } = render(<Button endIcon={<PlusIcon />}>Text</Button>);

      const button = screen.getByRole('button');

      expect(
        button.querySelector('span[class*="Button-endIcon"]'),
      ).toBeInTheDocument();

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have text variant', () => {
      const { asFragment } = render(<Button textVariant="h1">Text</Button>);

      const heading = screen.getByRole('heading');

      expect(heading).toBeInTheDocument();
      expect(heading.getAttribute('class')).toMatch(/ButtonBase-label/i);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have class name', () => {
      const { asFragment } = render(<Button className="test-cls">Text</Button>);

      const button = screen.getByRole('button');

      expect(button.getAttribute('class')).toMatch(/test-cls/i);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have test id', () => {
      const { asFragment } = render(<Button data-testid="test-id">Text</Button>);

      const button = screen.getByRole('button');

      expect(button.getAttribute('data-testid')).toMatch(/test-id/i);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have title', () => {
      const { asFragment } = render(<Button title="Test title">Text</Button>);

      const button = screen.getByRole('button');

      expect(button.getAttribute('title')).toMatch(/Test title/i);

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('Button render (variants & colors)', () => {
    const variants: Array<React.ComponentProps<typeof Button>['variant']> = [
      'contained',
      'outlined',
      'text',
    ];
    const colors: Array<React.ComponentProps<typeof Button>['color']> = [
      'default',
      'primary',
      'secondary',
      'white',
      'wrong',
    ];

    variants.forEach((variant) => {
      colors.forEach((color) => {
        it(`variant: "${variant}" & color: "${color}"`, () => {
          const { asFragment } = render(
            <Button variant={variant} color={color}>Text</Button>,
          );

          expect(asFragment()).toMatchSnapshot();
        });
      });
    });
  });

  describe('Button render sizes', () => {
    const sizes: Array<React.ComponentProps<typeof Button>['size']> = [
      'small',
      'medium',
      'large',
    ];

    sizes.forEach((size) => {
      it(`size "${size}"`, () => {
        const { asFragment } = render(
          <Button size={size}>Text</Button>,
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });

  describe('Button focus behaviour', () => {
    it('should have focus', async () => {
      render(<Button>Click</Button>);

      const button = screen.getByRole('button');

      expect(document.activeElement).not.toEqual(button);
      await userEvent.tab();
      expect(document.activeElement).toEqual(button);
      expect(button).toHaveFocus();
    });

    it("shouldn't have focus when disabled has been passed to the component", async () => {
      render(<Button disabled>Click</Button>);

      const button = screen.getByRole('button');

      expect(document.activeElement).not.toEqual(button);
      await userEvent.tab();
      expect(document.activeElement).not.toEqual(button);
      expect(button).not.toHaveFocus();
    });
  });

  describe('Button click behaviour', () => {
    it('should calls onClick prop when clicked', () => {
      const handleClick = jest.fn();

      render(<Button onClick={handleClick}>Click</Button>);

      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("shouldn't calls onClick when disabled has been passed to the component", () => {
      const handleClick = jest.fn();

      render(
        <Button onClick={handleClick} disabled>
          Click
        </Button>,
      );

      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Button render as an anchor', () => {
    it('should rendered as an anchor', () => {
      const href = 'https://test.com';

      const { asFragment } = render(
        <Button component="a" href={href}>
          Link
        </Button>,
      );

      const anchor = screen.getByRole('link');

      expect(anchor.tagName).toBe('A');
      expect(anchor).toHaveAttribute('href', href);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have focus when rendered as an anchor', async () => {
      render(
        <Button component="a" href="https://test.com">
          Link
        </Button>,
      );

      const anchor = screen.getByRole('link');

      expect(document.activeElement).not.toEqual(anchor);
      await userEvent.tab();
      expect(document.activeElement).toEqual(anchor);
      expect(anchor).toHaveFocus();
    });
  });
});
