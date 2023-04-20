import React from 'react';
import { renderWithWrapper as render, screen, userEvent } from '../test-utils';
import { TextField } from '../index';

describe('<TextField />', () => {
  describe('TextField render variants', () => {
    it('should render as default', () => {
      render(<TextField />);

      const input = screen.getByRole('textbox');

      expect(input).toBeInTheDocument();
      expect(input.tagName).toBe('INPUT');
      expect(input.getAttribute('type')).toBe('text');
      expect(input.getAttribute('class')).toMatch(/TextField-medium/i);
    });

    it('should have id', () => {
      render(<TextField id="test-id" />);

      const input = screen.getByRole('textbox');

      expect(input.getAttribute('id')).toBe('test-id');
    });

    it('should be disabled', () => {
      render(<TextField disabled />);

      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('disabled');
    });

    it('should have required', () => {
      render(<TextField required />);

      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('required');
    });

    it('should have name attr', () => {
      render(<TextField name="test-name" />);

      const input = screen.getByRole('textbox');

      expect(input.getAttribute('name')).toEqual('test-name');
    });

    it('should have test id', () => {
      render(<TextField data-testid="test-id" />);

      const input = screen.getByRole('textbox');

      expect(input.closest('div').getAttribute('data-testid')).toMatch(
        /test-id/i,
      );
    });

    it('should have className', () => {
      render(<TextField className="test-cls" />);

      const input = screen.getByRole('textbox');

      expect(input.closest('div').getAttribute('class')).toMatch(/test-cls/i);
    });

    // TODO: do not passed, should fix in component
    // it('should have input className', () => {
    //   render(<TextField inputProps={{ className: 'test-cls' }} />);

    //   const input = screen.getByRole('textbox');

    //   expect(input.getAttribute('class')).toMatch(/test-cls/i);
    // });

    it('should forwards ref to div element', () => {
      const ref = React.createRef<HTMLDivElement>();

      render(<TextField ref={ref} />);

      const input = screen.getByRole('textbox');

      expect(input.closest('div')).toEqual(ref.current);
    });
  });

  describe('TextField focus behaviour', () => {
    it('should have focus', async () => {
      render(<TextField />);
      const input = screen.getByRole('textbox');

      expect(document.activeElement).not.toEqual(input);
      await userEvent.tab();
      expect(document.activeElement).toEqual(input);
      expect(input).toHaveFocus();
    });

    it("shouldn't have focus when disabled has been passed to the component", async () => {
      render(<TextField disabled />);
      const input = screen.getByRole('textbox');

      expect(document.activeElement).not.toEqual(input);
      await userEvent.tab();
      expect(document.activeElement).not.toEqual(input);
      expect(input).not.toHaveFocus();
    });
  });

  describe('TextField keyboard behaviour', () => {
    it('should have correct value after user input', async () => {
      render(<TextField />);
      const input = screen.getByRole('textbox');

      await userEvent.type(input, 'test');
      expect(input).toHaveValue('test');
    });

    it("shouldn't change value after user input when readOnly has been passed to the component", async () => {
      render(<TextField readOnly defaultValue="test" />);
      const input = screen.getByRole('textbox');

      await userEvent.type(input, 'best');
      expect(input).toHaveValue('test');
    });
  });
});
