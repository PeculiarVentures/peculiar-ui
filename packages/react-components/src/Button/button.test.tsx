import React from 'react';
import {
  fireEvent,
  userEvent,
  renderWithWrapper as render,
  screen,
} from '../test-utils';
import { Button } from '../index';
import { PlusIcon } from '../icons';

describe('Button render variants', () => {
  it('should render as default', () => {
    render(<Button>Text</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Text');
    expect(button.tagName).toBe('BUTTON');
    expect(button.getAttribute('class')).toMatch(/Button-medium/i);
  });
  it('should render a text button', () => {
    render(<Button>Text</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveStyle({
      borderColor: 'transparent',
      backgroundColor: 'transparent',
    });
  });
  it('should render a contained button', () => {
    render(<Button variant="contained">Text</Button>);

    const button = screen.getByRole('button');

    expect(button).not.toHaveStyle({ backgroundColor: 'transparent' });
  });
  it('should be disabled', () => {
    render(<Button disabled>Text</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('disabled');
  });
  it('should have start icon', () => {
    render(<Button startIcon={<PlusIcon />}>Text</Button>);

    const button = screen.getByRole('button');

    expect(
      button.querySelector('span[class*="Button-startIcon"]'),
    ).toBeInTheDocument();
  });
  it('should have end icon', () => {
    render(<Button endIcon={<PlusIcon />}>Text</Button>);

    const button = screen.getByRole('button');

    expect(
      button.querySelector('span[class*="Button-endIcon"]'),
    ).toBeInTheDocument();
  });
  it('should have text variant', () => {
    render(<Button textVariant="h1">Text</Button>);

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
    expect(heading.getAttribute('class')).toMatch(/ButtonBase-label/i);
  });
  it('should have class name', () => {
    render(<Button className="test-cls">Text</Button>);

    const button = screen.getByRole('button');

    expect(button.getAttribute('class')).toMatch(/test-cls/i);
  });
  it('should have test id', () => {
    render(<Button data-testid="test-id">Text</Button>);

    const button = screen.getByRole('button');

    expect(button.getAttribute('data-testid')).toMatch(/test-id/i);
  });
  it('should have title', () => {
    render(<Button title="Test title">Text</Button>);

    const button = screen.getByRole('button');

    expect(button.getAttribute('title')).toMatch(/Test title/i);
  });
});

describe('Button render sizes', () => {
  it('should render a small size button', () => {
    render(<Button size="small">Text</Button>);

    const button = screen.getByRole('button');

    expect(button.getAttribute('class')).toMatch(/Button-small/i);
  });
  it('should render a medium size button', () => {
    render(<Button size="medium">Text</Button>);

    const button = screen.getByRole('button');

    expect(button.getAttribute('class')).toMatch(/Button-medium/i);
  });
  it('should render a large size button', () => {
    render(<Button size="large">Text</Button>);

    const button = screen.getByRole('button');

    expect(button.getAttribute('class')).toMatch(/Button-large/i);
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

    render(
      <Button component="a" href={href}>
        Link
      </Button>,
    );

    const anchor = screen.getByRole('link');

    expect(anchor.tagName).toBe('A');
    expect(anchor).toHaveAttribute('href', href);
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
