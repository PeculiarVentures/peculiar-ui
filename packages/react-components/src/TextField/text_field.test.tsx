import React from 'react';
import { renderWithWrapper as render, screen, userEvent } from '../test-utils';
import { TextField } from '../index';

describe('<TextField />', () => {
  describe('TextField render variants', () => {
    it('should render as default', () => {
      const { asFragment } = render(<TextField />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('textbox');

      expect(input).toBeInTheDocument();
      expect(input.tagName).toBe('INPUT');
      expect(input.getAttribute('type')).toBe('text');
      expect(input.getAttribute('class')).toMatch(/TextField-medium/i);
    });

    it('should have label', () => {
      const { asFragment } = render(<TextField label="Test label" />);

      expect(asFragment()).toMatchSnapshot();

      expect(
        screen.getByText('Test label').closest('label').getAttribute('class'),
      ).toMatch(/TextField-label/i);
    });

    it('should have id', () => {
      const { asFragment } = render(<TextField id="test-id" />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('textbox');

      expect(input.getAttribute('id')).toBe('test-id');
    });

    it('should be disabled', () => {
      const { asFragment } = render(<TextField disabled />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('disabled');
    });

    it('should have required', () => {
      const { asFragment } = render(<TextField required />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('textbox');

      expect(input).toHaveAttribute('required');
    });

    it('should have name attr', () => {
      const { asFragment } = render(<TextField name="test-name" />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('textbox');

      expect(input.getAttribute('name')).toEqual('test-name');
    });

    it('should have test id', () => {
      const { asFragment } = render(<TextField data-testid="test-id" />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('textbox');

      expect(input.closest('div').getAttribute('data-testid')).toMatch(
        /test-id/i,
      );
    });

    it('should have className', () => {
      const { asFragment } = render(<TextField className="test-cls" />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('textbox');

      expect(input.closest('div').getAttribute('class')).toMatch(/test-cls/i);
    });

    // TODO: do not passed, should fix in component
    // it('should have input className', () => {
    //   const {asFragment}=render(<TextField inputProps={{ className: 'test-cls' }} />);

    //   const input = screen.getByRole('textbox');

    //   expect(input.getAttribute('class')).toMatch(/test-cls/i);
    // });

    it('should forwards ref to div element', () => {
      const ref = React.createRef<HTMLDivElement>();

      const { asFragment } = render(<TextField ref={ref} />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('textbox');

      expect(input.closest('div')).toEqual(ref.current);
    });

    it('should forwards ref to input element', () => {
      const ref = React.createRef<HTMLInputElement>();

      const { asFragment } = render(<TextField inputRef={ref} />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('textbox');

      expect(input).toEqual(ref.current);
    });

    it('should have placeholder', () => {
      const { asFragment } = render(<TextField placeholder="test-placeholder" />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('textbox');

      expect(input.getAttribute('placeholder')).toBe('test-placeholder');
    });

    it('should have defaultValue', () => {
      const { asFragment } = render(<TextField defaultValue="test-value" />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('textbox');

      expect(input.getAttribute('value')).toBe('test-value');
    });

    it('should have value', () => {
      const onChange = jest.fn();

      const { asFragment } = render(<TextField value="test-value" onChange={onChange} />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('textbox');

      expect(input.getAttribute('value')).toBe('test-value');
    });

    it('should have error alert', () => {
      const { asFragment } = render(<TextField error errorText="Error message" />);

      expect(asFragment()).toMatchSnapshot();

      expect(screen.getByText('Error message')).toBeInTheDocument();
    });
  });

  describe('TextField render sizes', () => {
    it('should render a small size', () => {
      const { asFragment } = render(<TextField size="small" />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('textbox');

      expect(input.getAttribute('class')).toMatch(/TextField-small/i);
    });

    it('should render a medium size', () => {
      const { asFragment } = render(<TextField size="medium" />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('textbox');

      expect(input.getAttribute('class')).toMatch(/TextField-medium/i);
    });

    it('should render a large size', () => {
      const { asFragment } = render(<TextField size="large" />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('textbox');

      expect(input.getAttribute('class')).toMatch(/TextField-large/i);
    });
  });

  describe('TextField focus behaviour', () => {
    it('should have focus', async () => {
      const { asFragment } = render(<TextField />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('textbox');

      expect(document.activeElement).not.toEqual(input);
      await userEvent.tab();
      expect(document.activeElement).toEqual(input);
      expect(input).toHaveFocus();
    });

    it("shouldn't have focus when disabled has been passed to the component", async () => {
      const { asFragment } = render(<TextField disabled />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('textbox');

      expect(document.activeElement).not.toEqual(input);
      await userEvent.tab();
      expect(document.activeElement).not.toEqual(input);
      expect(input).not.toHaveFocus();
    });

    it('should have focus when autoFocus has been passed to the component', () => {
      const { asFragment } = render(<TextField autoFocus />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('textbox');

      expect(input).toHaveFocus();
    });

    it("shouldn't have focus when disabled & autoFocus has been passed to the component", async () => {
      const { asFragment } = render(<TextField disabled autoFocus />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('textbox');

      expect(input).not.toHaveFocus();
    });
  });

  describe('TextField keyboard behaviour', () => {
    it('should have correct value after user input', async () => {
      const { asFragment } = render(<TextField />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('textbox');

      await userEvent.type(input, 'test');
      expect(input).toHaveValue('test');
    });

    it("shouldn't change value after user input when readOnly has been passed to the component", async () => {
      const { asFragment } = render(<TextField readOnly defaultValue="test" />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('textbox');

      await userEvent.type(input, 'best');
      expect(input).toHaveValue('test');
    });
  });

  describe('TextField change behaviour', () => {
    it('should calls onChange after user input', async () => {
      const onChange = jest.fn();
      const { asFragment } = render(<TextField onChange={onChange} />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('textbox');

      expect(onChange).toBeCalledTimes(0);
      await userEvent.type(input, 'test');
      expect(onChange).toBeCalledTimes(4);
    });
  });
});
