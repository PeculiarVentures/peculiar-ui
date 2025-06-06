import React from 'react';
import {
  fireEvent,
  userEvent,
  renderWithWrapper as render,
  screen,
} from '../test-utils';
import { PlusIcon } from '../icons';
import { Button } from './index';

describe('<Button />', () => {
  describe('Button render variants', () => {
    it('should render as default', () => {
      render(
        <Button>Text</Button>,
      );

      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('Text');
      expect(button.tagName).toBe('BUTTON');
    });

    it('should be disabled', () => {
      const { asFragment } = render(
        <Button disabled>Text</Button>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have start icon', () => {
      const { asFragment } = render(
        <Button startIcon={<PlusIcon />}>Text</Button>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have end icon', () => {
      const { asFragment } = render(
        <Button endIcon={<PlusIcon />}>Text</Button>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have text variant', () => {
      const { asFragment } = render(
        <Button textVariant="h1">Text</Button>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have class name', () => {
      const { asFragment } = render(
        <Button className="test-cls">Text</Button>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have test id', () => {
      const { asFragment } = render(
        <Button data-testid="test-id">Text</Button>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have title', () => {
      const { asFragment } = render(
        <Button title="Test title">Text</Button>,
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('Button render (variants & colors)', () => {
    const variants: React.ComponentProps<typeof Button>['variant'][] = [
      'contained',
      'outlined',
      'text',
    ];
    const colors: React.ComponentProps<typeof Button>['color'][] = [
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
    const sizes: React.ComponentProps<typeof Button>['size'][] = [
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
      render(
        <Button>Click</Button>,
      );

      const button = screen.getByRole('button');

      expect(document.activeElement).not.toEqual(button);
      await userEvent.tab();
      expect(document.activeElement).toEqual(button);
      expect(button).toHaveFocus();
    });

    it('shouldn\'t have focus when disabled has been passed to the component', async () => {
      render(
        <Button disabled>Click</Button>,
      );

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

      render(
        <Button onClick={handleClick}>Click</Button>,
      );

      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('shouldn\'t calls onClick when disabled has been passed to the component', () => {
      const handleClick = jest.fn();

      render(
        <Button disabled onClick={handleClick}>
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
