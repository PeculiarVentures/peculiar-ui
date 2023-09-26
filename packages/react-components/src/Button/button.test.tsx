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
      const { asFragment } = render(<Button>Text</Button>);

      expect(asFragment()).toMatchSnapshot();

      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('Text');
      expect(button.tagName).toBe('BUTTON');
      expect(button.getAttribute('class')).toMatch(/Button-medium/i);
    });

    it('should render a text button', () => {
      const { asFragment } = render(<Button>Text</Button>);

      expect(asFragment()).toMatchSnapshot();

      const button = screen.getByRole('button');

      expect(button).toHaveStyle({
        borderColor: 'transparent',
        backgroundColor: 'transparent',
      });
    });

    it('should render a contained button', () => {
      const { asFragment } = render(<Button variant="contained">Text</Button>);

      expect(asFragment()).toMatchSnapshot();

      const button = screen.getByRole('button');

      expect(button).not.toHaveStyle({ backgroundColor: 'transparent' });
    });

    it('should be disabled', () => {
      const { asFragment } = render(<Button disabled>Text</Button>);

      expect(asFragment()).toMatchSnapshot();

      const button = screen.getByRole('button');

      expect(button).toHaveAttribute('disabled');
    });

    it('should have start icon', () => {
      const { asFragment } = render(<Button startIcon={<PlusIcon />}>Text</Button>);

      expect(asFragment()).toMatchSnapshot();

      const button = screen.getByRole('button');

      expect(
        button.querySelector('span[class*="Button-startIcon"]'),
      ).toBeInTheDocument();
    });

    it('should have end icon', () => {
      const { asFragment } = render(<Button endIcon={<PlusIcon />}>Text</Button>);

      expect(asFragment()).toMatchSnapshot();

      const button = screen.getByRole('button');

      expect(
        button.querySelector('span[class*="Button-endIcon"]'),
      ).toBeInTheDocument();
    });

    it('should have text variant', () => {
      const { asFragment } = render(<Button textVariant="h1">Text</Button>);

      expect(asFragment()).toMatchSnapshot();

      const heading = screen.getByRole('heading');

      expect(heading).toBeInTheDocument();
      expect(heading.getAttribute('class')).toMatch(/ButtonBase-label/i);
    });

    it('should have class name', () => {
      const { asFragment } = render(<Button className="test-cls">Text</Button>);

      expect(asFragment()).toMatchSnapshot();

      const button = screen.getByRole('button');

      expect(button.getAttribute('class')).toMatch(/test-cls/i);
    });

    it('should have test id', () => {
      const { asFragment } = render(<Button data-testid="test-id">Text</Button>);

      expect(asFragment()).toMatchSnapshot();

      const button = screen.getByRole('button');

      expect(button.getAttribute('data-testid')).toMatch(/test-id/i);
    });

    it('should have title', () => {
      const { asFragment } = render(<Button title="Test title">Text</Button>);

      expect(asFragment()).toMatchSnapshot();

      const button = screen.getByRole('button');

      expect(button.getAttribute('title')).toMatch(/Test title/i);
    });
  });

  describe('Button render sizes', () => {
    it('should render a small size button', () => {
      const { asFragment } = render(<Button size="small">Text</Button>);

      expect(asFragment()).toMatchSnapshot();

      const button = screen.getByRole('button');

      expect(button.getAttribute('class')).toMatch(/Button-small/i);
    });

    it('should render a medium size button', () => {
      const { asFragment } = render(<Button size="medium">Text</Button>);

      expect(asFragment()).toMatchSnapshot();

      const button = screen.getByRole('button');

      expect(button.getAttribute('class')).toMatch(/Button-medium/i);
    });

    it('should render a large size button', () => {
      const { asFragment } = render(<Button size="large">Text</Button>);

      expect(asFragment()).toMatchSnapshot();

      const button = screen.getByRole('button');

      expect(button.getAttribute('class')).toMatch(/Button-large/i);
    });
  });

  describe('Button focus behaviour', () => {
    it('should have focus', async () => {
      const { asFragment } = render(<Button>Click</Button>);

      expect(asFragment()).toMatchSnapshot();

      const button = screen.getByRole('button');

      expect(document.activeElement).not.toEqual(button);
      await userEvent.tab();
      expect(document.activeElement).toEqual(button);
      expect(button).toHaveFocus();
    });

    it("shouldn't have focus when disabled has been passed to the component", async () => {
      const { asFragment } = render(<Button disabled>Click</Button>);

      expect(asFragment()).toMatchSnapshot();

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

      const { asFragment } = render(<Button onClick={handleClick}>Click</Button>);

      expect(asFragment()).toMatchSnapshot();

      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("shouldn't calls onClick when disabled has been passed to the component", () => {
      const handleClick = jest.fn();

      const { asFragment } = render(
        <Button onClick={handleClick} disabled>
          Click
        </Button>,
      );

      expect(asFragment()).toMatchSnapshot();

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

      expect(asFragment()).toMatchSnapshot();

      const anchor = screen.getByRole('link');

      expect(anchor.tagName).toBe('A');
      expect(anchor).toHaveAttribute('href', href);
    });

    it('should have focus when rendered as an anchor', async () => {
      const { asFragment } = render(
        <Button component="a" href="https://test.com">
          Link
        </Button>,
      );

      expect(asFragment()).toMatchSnapshot();

      const anchor = screen.getByRole('link');

      expect(document.activeElement).not.toEqual(anchor);
      await userEvent.tab();
      expect(document.activeElement).toEqual(anchor);
      expect(anchor).toHaveFocus();
    });
  });
});
