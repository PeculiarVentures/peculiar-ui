import React from 'react';
import { fireEvent, renderWithWrapper as render, screen } from '../test-utils';
import { Button } from '../index';
import { PlusIcon } from '../icons';

describe('<Button />', () => {
  it('should render as default', () => {
    render(<Button>Text</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Text');
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
  it('should calls onClick prop when clicked', () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('should have focus', async () => {
    render(<Button>Click</Button>);

    const button = screen.getByRole('button');

    button.focus();
    expect(button).toHaveFocus();
  });
  it('should render with another component', async () => {
    const href = 'https://test.com';

    render(
      <Button component="a" href={href}>
        Link
      </Button>,
    );

    const link = screen.getByText('Link').closest('a');

    expect(link).toHaveAttribute('href', href);
  });
  it('should be disabled', async () => {
    render(<Button disabled>Text</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('disabled');
  });
  it('should have start icon', async () => {
    render(<Button startIcon={<PlusIcon />}>Text</Button>);

    const button = screen.getByRole('button');

    expect(
      button.querySelector('span[class*="Button-startIcon"]'),
    ).toBeInTheDocument();
  });
  it('should have end icon', async () => {
    render(<Button endIcon={<PlusIcon />}>Text</Button>);

    const button = screen.getByRole('button');

    expect(
      button.querySelector('span[class*="Button-endIcon"]'),
    ).toBeInTheDocument();
  });
  it('should have text variant', async () => {
    render(<Button textVariant="h1">Text</Button>);

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
    expect(heading.getAttribute('class')).toMatch(/ButtonBase-label/i);
  });
  it('should have class name', async () => {
    render(<Button className="test-cls">Text</Button>);

    const button = screen.getByRole('button');

    expect(button.getAttribute('class')).toMatch(/test-cls/i);
  });
  it('should have test id', async () => {
    render(<Button data-testid="test-id">Text</Button>);

    const button = screen.getByRole('button');

    expect(button.getAttribute('data-testid')).toMatch(/test-id/i);
  });
  it('should have title', async () => {
    render(<Button title="Test title">Text</Button>);

    const button = screen.getByRole('button');

    expect(button.getAttribute('title')).toMatch(/Test title/i);
  });
});
