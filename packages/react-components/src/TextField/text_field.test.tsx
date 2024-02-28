import React from 'react';
import { renderWithWrapper as render, screen, userEvent } from '../test-utils';
import { TextField } from './index';

describe('<TextField />', () => {
  describe('TextField render variants', () => {
    it('should render as default', () => {
      const { asFragment } = render(<TextField id="test-id" />);

      const input = screen.getByRole('textbox');

      expect(input).toBeInTheDocument();
      expect(input.tagName).toBe('INPUT');
      expect(input.getAttribute('type')).toBe('text');

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have label', () => {
      const { asFragment } = render(
        <TextField
          label="Test label"
          id="test-id"
        />,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should be disabled', () => {
      const { asFragment } = render(<TextField disabled id="test-id" />);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have required', () => {
      const { asFragment } = render(<TextField required id="test-id" />);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have name attr', () => {
      const { asFragment } = render(<TextField name="test-name" id="test-id" />);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have className', () => {
      const { asFragment } = render(
        <TextField
          className="div-cls"
          id="test-id"
          inputProps={{ className: 'input-cls' }}
        />,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should forwards ref to div element', () => {
      const ref = React.createRef<HTMLDivElement>();

      render(<TextField ref={ref} />);

      const input = screen.getByRole('textbox');

      expect(input.closest('div')).toEqual(ref.current);
    });

    it('should forwards ref to input element', () => {
      const ref = React.createRef<HTMLInputElement>();

      render(<TextField inputRef={ref} />);

      const input = screen.getByRole('textbox');

      expect(input).toEqual(ref.current);
    });

    it('should have placeholder', () => {
      const { asFragment } = render(<TextField placeholder="test-placeholder" id="test-id" />);

      const input = screen.getByRole('textbox');

      expect(input.getAttribute('placeholder')).toBe('test-placeholder');

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have defaultValue', () => {
      const { asFragment } = render(<TextField defaultValue="test-value" id="test-id" />);

      const input = screen.getByRole('textbox');

      expect(input.getAttribute('value')).toBe('test-value');

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have value', () => {
      const onChange = jest.fn();

      const { asFragment } = render(
        <TextField
          value="test-value"
          onChange={onChange}
          id="test-id"
        />,
      );

      const input = screen.getByRole('textbox');

      expect(input.getAttribute('value')).toBe('test-value');

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have error alert', () => {
      const { asFragment } = render(
        <TextField
          error
          errorText="Error message"
          id="test-id"
        />,
      );

      expect(screen.getByText('Error message')).toBeInTheDocument();

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('TextField render sizes', () => {
    const sizes: Array<React.ComponentProps<typeof TextField>['size']> = [
      'small',
      'medium',
      'large',
    ];

    sizes.forEach((size) => {
      it(`size "${size}"`, () => {
        const { asFragment } = render(
          <TextField size={size} id="test-id" />,
        );

        expect(asFragment()).toMatchSnapshot();
      });
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

    it('should have focus when autoFocus has been passed to the component', () => {
      render(<TextField autoFocus />);

      const input = screen.getByRole('textbox');

      expect(input).toHaveFocus();
    });

    it("shouldn't have focus when disabled & autoFocus has been passed to the component", async () => {
      render(<TextField disabled autoFocus />);

      const input = screen.getByRole('textbox');

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

  describe('TextField change behaviour', () => {
    it('should calls onChange after user input', async () => {
      const onChange = jest.fn();

      render(<TextField onChange={onChange} />);

      const input = screen.getByRole('textbox');

      expect(onChange).toBeCalledTimes(0);
      await userEvent.type(input, 'test');
      expect(onChange).toBeCalledTimes(4);
    });
  });
});
