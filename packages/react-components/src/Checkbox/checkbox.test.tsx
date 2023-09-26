import React from 'react';
import {
  renderWithWrapper as render,
  screen,
  userEvent,
  fireEvent,
} from '../test-utils';
import { Checkbox } from './index';
import { PlusIcon } from '../icons';

describe('<Checkbox />', () => {
  describe('Checkbox render variants', () => {
    it('should render as default', () => {
      const { asFragment } = render(<Checkbox id="test-id" />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('checkbox');

      expect(input).toBeInTheDocument();
      expect(input.tagName).toBe('INPUT');
      expect(input.getAttribute('type')).toBe('checkbox');
      expect(input.getAttribute('class')).toMatch(/Checkbox-input/i);
      expect(input).not.toBeChecked();

      const label = input.closest('label');

      expect(label).toBeInTheDocument();
      expect(label.getAttribute('for')).toEqual(input.id);
    });

    it('should have id', () => {
      const { asFragment } = render(<Checkbox id="test-id" />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('checkbox');

      expect(input.getAttribute('id')).toBe('test-id');

      const label = input.closest('label');

      expect(label).toBeInTheDocument();
      expect(label.getAttribute('for')).toEqual(input.id);
    });

    it('should be disabled', () => {
      const { asFragment } = render(<Checkbox id="test-id" disabled />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('checkbox');

      expect(input).toHaveAttribute('disabled');
    });

    it('should have required', () => {
      const { asFragment } = render(<Checkbox id="test-id" required />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('checkbox');

      expect(input).toHaveAttribute('required');
    });

    it('should have test id', () => {
      const { asFragment } = render(<Checkbox id="test-id" data-testid="test-id" />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('checkbox');

      const label = input.closest('label');

      expect(label.getAttribute('data-testid')).toMatch(/test-id/i);
    });

    it('should have className', () => {
      const { asFragment } = render(<Checkbox id="test-id" className="test-cls" />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('checkbox');

      const label = input.closest('label');

      expect(label.getAttribute('class')).toMatch(/test-cls/i);
    });

    // TODO: do not passed, should fix in component
    // it('should have input className', () => {
    //   render(<Checkbox inputProps={{ className: 'test-cls' }} />);

    //   const input = screen.getByRole('checkbox');

    //   expect(input.getAttribute('class')).toMatch(/test-cls/i);
    // });

    it('should have custom checked icon', () => {
      const { asFragment } = render(<Checkbox id="test-id" checkedIcon={<PlusIcon data-testid="icon" />} />);

      expect(asFragment()).toMatchSnapshot();

      const icon = screen.getByTestId('icon');

      expect(icon).toBeInTheDocument();
      expect(icon.tagName).toBe('svg');
      expect(icon.getAttribute('class')).toMatch(/Checkbox-icon/i);
    });

    it('should be checked, defaultChecked prop', () => {
      const { asFragment } = render(<Checkbox id="test-id" defaultChecked />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('checkbox');

      expect(input).toBeChecked();
    });

    it('should be unchecked, defaultChecked prop', () => {
      const { asFragment } = render(<Checkbox id="test-id" defaultChecked={false} />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('checkbox');

      expect(input).not.toBeChecked();
    });

    it('should be checked', () => {
      const onChange = jest.fn();

      const { asFragment } = render(
        <Checkbox
          id="test-id"
          checked
          onChange={onChange}
        />,
      );

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('checkbox');

      expect(input).toBeChecked();
    });

    it('should be unchecked', () => {
      const onChange = jest.fn();

      const { asFragment } = render(
        <Checkbox
          id="test-id"
          checked={false}
          onChange={onChange}
        />,
      );

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('checkbox');

      expect(input).not.toBeChecked();
    });

    it('should forwards ref to label element', () => {
      const ref = React.createRef<HTMLLabelElement>();

      const { asFragment } = render(<Checkbox id="test-id" ref={ref} />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('checkbox');

      expect(input.closest('label')).toEqual(ref.current);
    });
  });

  describe('Checkbox focus behaviour', () => {
    it('should have focus', async () => {
      const { asFragment } = render(<Checkbox id="test-id" />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('checkbox');

      expect(document.activeElement).not.toEqual(input);
      await userEvent.tab();
      expect(document.activeElement).toEqual(input);
      expect(input).toHaveFocus();
    });

    it("shouldn't have focus when disabled has been passed to the component", async () => {
      const { asFragment } = render(<Checkbox id="test-id" disabled />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('checkbox');

      expect(document.activeElement).not.toEqual(input);
      await userEvent.tab();
      expect(document.activeElement).not.toEqual(input);
      expect(input).not.toHaveFocus();
    });
  });

  describe('Checkbox click behaviour', () => {
    it('should be checked when clicked', () => {
      const { asFragment } = render(<Checkbox id="test-id" />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('checkbox');

      expect(input).not.toBeChecked();
      fireEvent.click(input);
      expect(input).toBeChecked();
    });

    it('should be unchecked when clicked', () => {
      const { asFragment } = render(<Checkbox id="test-id" defaultChecked />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('checkbox');

      expect(input).toBeChecked();
      fireEvent.click(input);
      expect(input).not.toBeChecked();
    });

    it('should calls onClick prop when clicked', () => {
      const handleClick = jest.fn();

      const { asFragment } = render(<Checkbox id="test-id" onClick={handleClick} />);

      expect(asFragment()).toMatchSnapshot();

      fireEvent.click(screen.getByRole('checkbox'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should calls onChange prop when clicked', () => {
      const onChange = jest.fn();

      const { asFragment } = render(<Checkbox id="test-id" onChange={onChange} />);

      expect(asFragment()).toMatchSnapshot();

      const input = screen.getByRole('checkbox');

      expect(onChange).toBeCalledTimes(0);
      fireEvent.click(input);
      expect(onChange).toBeCalledTimes(1);
    });
  });
});
