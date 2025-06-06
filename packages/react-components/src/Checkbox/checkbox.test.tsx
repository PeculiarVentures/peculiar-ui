import React from 'react';
import {
  renderWithWrapper as render,
  screen,
  userEvent,
  fireEvent,
} from '../test-utils';
import { PlusIcon } from '../icons';
import { Checkbox } from './index';

describe('<Checkbox />', () => {
  describe('Checkbox render variants', () => {
    it('should render as default', () => {
      const { asFragment } = render(
        <Checkbox id="test-id" />,
      );
      const input = screen.getByRole('checkbox');

      expect(input).toBeInTheDocument();
      expect(input.tagName).toBe('INPUT');
      expect(input.getAttribute('type')).toBe('checkbox');
      expect(input).not.toBeChecked();

      const label = input.closest('label');

      expect(label).toBeInTheDocument();
      expect(label.getAttribute('for')).toEqual(input.id);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have id', () => {
      render(
        <Checkbox id="test-id" />,
      );

      const input = screen.getByRole('checkbox');

      expect(input.getAttribute('id')).toBe('test-id');

      const label = input.closest('label');

      expect(label).toBeInTheDocument();
      expect(label.getAttribute('for')).toEqual(input.id);
    });

    it('should be disabled', () => {
      const { asFragment } = render(
        <Checkbox id="test-id" disabled />,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have required', () => {
      const { asFragment } = render(
        <Checkbox id="test-id" required />,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have name attr', () => {
      const { asFragment } = render(
        <Checkbox id="test-id" name="test-name" />,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have test id', () => {
      const { asFragment } = render(
        <Checkbox id="test-id" data-testid="test-id" />,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have className', () => {
      const { asFragment } = render(
        <Checkbox id="test-id" className="test-cls" />,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have custom checked icon', () => {
      const { asFragment } = render(
        <Checkbox id="test-id" checkedIcon={PlusIcon} />,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should be checked, defaultChecked prop', () => {
      const { asFragment } = render(
        <Checkbox id="test-id" defaultChecked />,
      );
      const input = screen.getByRole('checkbox');

      expect(input).toBeChecked();

      expect(asFragment()).toMatchSnapshot();
    });

    it('should be unchecked, defaultChecked prop', () => {
      render(
        <Checkbox defaultChecked={false} />,
      );

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

      render(
        <Checkbox
          id="test-id"
          checked={false}
          onChange={onChange}
        />,
      );

      const input = screen.getByRole('checkbox');

      expect(input).not.toBeChecked();
    });

    it('should forwards ref to label element', () => {
      const ref = React.createRef<HTMLLabelElement>();

      render(
        <Checkbox ref={ref} />,
      );

      const input = screen.getByRole('checkbox');

      expect(input.closest('label')).toEqual(ref.current);
    });
  });

  describe('Checkbox render colors', () => {
    const colors: React.ComponentProps<typeof Checkbox>['color'][] = [
      'primary',
      'secondary',
    ];

    colors.forEach((color) => {
      it(`color "${color}"`, () => {
        const { asFragment } = render(
          <Checkbox color={color} id="test-id" />,
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });

  describe('Checkbox focus behaviour', () => {
    it('should have focus', async () => {
      render(
        <Checkbox />,
      );

      const input = screen.getByRole('checkbox');

      expect(document.activeElement).not.toEqual(input);
      await userEvent.tab();
      expect(document.activeElement).toEqual(input);
      expect(input).toHaveFocus();
    });

    it('shouldn\'t have focus when disabled has been passed to the component', async () => {
      render(
        <Checkbox disabled />,
      );

      const input = screen.getByRole('checkbox');

      expect(document.activeElement).not.toEqual(input);
      await userEvent.tab();
      expect(document.activeElement).not.toEqual(input);
      expect(input).not.toHaveFocus();
    });
  });

  describe('Checkbox click behaviour', () => {
    it('should be checked when clicked', () => {
      render(
        <Checkbox id="test-id" />,
      );

      const input = screen.getByRole('checkbox');

      expect(input).not.toBeChecked();
      fireEvent.click(input);
      expect(input).toBeChecked();
    });

    it('should be unchecked when clicked', () => {
      render(
        <Checkbox id="test-id" defaultChecked />,
      );

      const input = screen.getByRole('checkbox');

      expect(input).toBeChecked();
      fireEvent.click(input);
      expect(input).not.toBeChecked();
    });

    it('should calls onClick prop when clicked', () => {
      const handleClick = jest.fn();

      render(
        <Checkbox id="test-id" onClick={handleClick} />,
      );

      fireEvent.click(screen.getByRole('checkbox'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should calls onChange prop when clicked', () => {
      const onChange = jest.fn();

      render(
        <Checkbox id="test-id" onChange={onChange} />,
      );

      const input = screen.getByRole('checkbox');

      expect(onChange).toBeCalledTimes(0);
      fireEvent.click(input);
      expect(onChange).toBeCalledTimes(1);
    });
  });
});
