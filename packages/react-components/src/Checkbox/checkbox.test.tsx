import React from 'react';
import {
  renderWithWrapper as render,
  screen,
  userEvent,
  fireEvent,
} from '../test-utils';
import { Checkbox } from '../index';
import { PlusIcon } from '../icons';

describe('<Checkbox />', () => {
  describe('Checkbox render variants', () => {
    it('should render as default', () => {
      render(<Checkbox />);

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
      render(<Checkbox id="test-id" />);

      const input = screen.getByRole('checkbox');

      expect(input.getAttribute('id')).toBe('test-id');

      const label = input.closest('label');

      expect(label).toBeInTheDocument();
      expect(label.getAttribute('for')).toEqual(input.id);
    });

    it('should be disabled', () => {
      render(<Checkbox disabled />);

      const input = screen.getByRole('checkbox');

      expect(input).toHaveAttribute('disabled');
    });

    it('should have required', () => {
      render(<Checkbox required />);

      const input = screen.getByRole('checkbox');

      expect(input).toHaveAttribute('required');
    });

    it('should have test id', () => {
      render(<Checkbox data-testid="test-id" />);

      const input = screen.getByRole('checkbox');

      const label = input.closest('label');

      expect(label.getAttribute('data-testid')).toMatch(/test-id/i);
    });

    it('should have className', () => {
      render(<Checkbox className="test-cls" />);

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
      render(<Checkbox checkedIcon={<PlusIcon data-testid="icon" />} />);

      const icon = screen.getByTestId('icon');

      expect(icon).toBeInTheDocument();
      expect(icon.tagName).toBe('svg');
      expect(icon.getAttribute('class')).toMatch(/Checkbox-icon/i);
    });

    it('should be checked, defaultChecked prop', () => {
      render(<Checkbox defaultChecked />);

      const input = screen.getByRole('checkbox');

      expect(input).toBeChecked();
    });

    it('should be unchecked, defaultChecked prop', () => {
      render(<Checkbox defaultChecked={false} />);

      const input = screen.getByRole('checkbox');

      expect(input).not.toBeChecked();
    });

    it('should be checked', () => {
      render(<Checkbox checked />);

      const input = screen.getByRole('checkbox');

      expect(input).toBeChecked();
    });

    it('should be unchecked', () => {
      render(<Checkbox checked={false} />);

      const input = screen.getByRole('checkbox');

      expect(input).not.toBeChecked();
    });

    it('should forwards ref to label element', () => {
      const ref = React.createRef<HTMLLabelElement>();

      render(<Checkbox ref={ref} />);

      const input = screen.getByRole('checkbox');

      expect(input.closest('label')).toEqual(ref.current);
    });
  });

  describe('Checkbox focus behaviour', () => {
    it('should have focus', async () => {
      render(<Checkbox />);

      const input = screen.getByRole('checkbox');

      expect(document.activeElement).not.toEqual(input);
      await userEvent.tab();
      expect(document.activeElement).toEqual(input);
      expect(input).toHaveFocus();
    });

    it("shouldn't have focus when disabled has been passed to the component", async () => {
      render(<Checkbox disabled />);

      const input = screen.getByRole('checkbox');

      expect(document.activeElement).not.toEqual(input);
      await userEvent.tab();
      expect(document.activeElement).not.toEqual(input);
      expect(input).not.toHaveFocus();
    });
  });

  describe('Checkbox click behaviour', () => {
    it('should be checked when clicked', () => {
      render(<Checkbox />);

      const input = screen.getByRole('checkbox');

      expect(input).not.toBeChecked();
      fireEvent.click(input);
      expect(input).toBeChecked();
    });

    it('should be unchecked when clicked', () => {
      render(<Checkbox defaultChecked />);

      const input = screen.getByRole('checkbox');

      expect(input).toBeChecked();
      fireEvent.click(input);
      expect(input).not.toBeChecked();
    });

    it('should calls onClick prop when clicked', () => {
      const handleClick = jest.fn();

      render(<Checkbox onClick={handleClick} />);
      fireEvent.click(screen.getByRole('checkbox'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should calls onChange prop when clicked', () => {
      const onChange = jest.fn();

      const renderedComponent = render(<Checkbox onChange={onChange} />);
      const input = renderedComponent.getByRole('checkbox');

      expect(onChange).toBeCalledTimes(0);
      fireEvent.click(input);
      expect(onChange).toBeCalledTimes(1);
    });
  });
});
