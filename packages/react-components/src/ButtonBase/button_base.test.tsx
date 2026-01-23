import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import {
  fireEvent,
  userEvent,
  renderWithWrapper as render,
  screen,
} from '../test-utils';
import { ThemeProvider } from '../styles';
import { ButtonBase } from './index';

describe('<ButtonBase />', () => {
  describe('ButtonBase render variants', () => {
    it('should render as default', () => {
      render(
        <ButtonBase>Text</ButtonBase>,
      );

      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('Text');
      expect(button.tagName).toBe('BUTTON');
    });

    it('should be disabled', () => {
      const { asFragment } = render(
        <ButtonBase disabled>Text</ButtonBase>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have text variant', () => {
      const { asFragment } = render(
        <ButtonBase textVariant="h1">Text</ButtonBase>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have class name', () => {
      const { asFragment } = render(
        <ButtonBase className="test-cls">Text</ButtonBase>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have test id', () => {
      const { asFragment } = render(
        <ButtonBase data-testid="test-id">Text</ButtonBase>,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have title', () => {
      const { asFragment } = render(
        <ButtonBase title="Test title">Text</ButtonBase>,
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('ButtonBase render (variants & colors)', () => {
    const themeModes: React.ComponentProps<typeof ThemeProvider>['mode'][] = [
      'light',
      'dark',
    ];
    const variants: React.ComponentProps<typeof ButtonBase>['variant'][] = [
      'contained',
      'outlined',
      'text',
    ];
    const colors: React.ComponentProps<typeof ButtonBase>['color'][] = [
      'default',
      'primary',
      'secondary',
      'white',
      'wrong',
    ];

    themeModes.forEach((themeMode) => {
      describe(themeMode, () => {
        variants.forEach((variant) => {
          colors.forEach((color) => {
            it(`variant: "${variant}" & color: "${color}"`, () => {
              const { asFragment } = render(
                <ButtonBase variant={variant} color={color}>Text</ButtonBase>,
                {
                  mode: themeMode,
                },
              );

              expect(asFragment()).toMatchSnapshot();
            });
          });
        });
      });
    });
  });

  describe('ButtonBase render sizes', () => {
    const sizes: React.ComponentProps<typeof ButtonBase>['size'][] = [
      'small',
      'medium',
      'large',
    ];

    sizes.forEach((size) => {
      it(`size "${size}"`, () => {
        const { asFragment } = render(
          <ButtonBase size={size}>Text</ButtonBase>,
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });

  describe('ButtonBase focus behaviour', () => {
    it('should have focus', async () => {
      render(
        <ButtonBase>Click</ButtonBase>,
      );

      const button = screen.getByRole('button');

      expect(document.activeElement).not.toEqual(button);
      await userEvent.tab();
      expect(document.activeElement).toEqual(button);
      expect(button).toHaveFocus();
    });

    it('shouldn\'t have focus when disabled has been passed to the component', async () => {
      render(
        <ButtonBase disabled>Click</ButtonBase>,
      );

      const button = screen.getByRole('button');

      expect(document.activeElement).not.toEqual(button);
      await userEvent.tab();
      expect(document.activeElement).not.toEqual(button);
      expect(button).not.toHaveFocus();
    });
  });

  describe('ButtonBase click behaviour', () => {
    it('should calls onClick prop when clicked', () => {
      const handleClick = vi.fn();

      render(
        <ButtonBase onClick={handleClick}>Click</ButtonBase>,
      );

      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('shouldn\'t calls onClick when disabled has been passed to the component', () => {
      const handleClick = vi.fn();

      render(
        <ButtonBase disabled onClick={handleClick}>
          Click
        </ButtonBase>,
      );

      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('ButtonBase render as an anchor', () => {
    it('should rendered as an anchor', () => {
      const href = 'https://test.com';

      const { asFragment } = render(
        <ButtonBase component="a" href={href}>
          Link
        </ButtonBase>,
      );

      const anchor = screen.getByRole('link');

      expect(anchor.tagName).toBe('A');
      expect(anchor).toHaveAttribute('href', href);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have focus when rendered as an anchor', async () => {
      render(
        <ButtonBase component="a" href="https://test.com">
          Link
        </ButtonBase>,
      );

      const anchor = screen.getByRole('link');

      expect(document.activeElement).not.toEqual(anchor);
      await userEvent.tab();
      expect(document.activeElement).toEqual(anchor);
      expect(anchor).toHaveFocus();
    });
  });
});
