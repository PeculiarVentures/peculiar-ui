import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import {
  renderWithWrapper as render,
  screen,
  userEvent,
  fireEvent,
} from '../test-utils';
import { PlusIcon } from '../icons';
import { Radio } from './index';

describe('<Radio />', () => {
  describe('Radio render variants', () => {
    it('should render as default', () => {
      const { asFragment } = render(
        <Radio id="test-id" />,
      );

      const input = screen.getByRole('radio');

      expect(input).toBeInTheDocument();
      expect(input.tagName).toBe('INPUT');
      expect(input.getAttribute('type')).toBe('radio');
      expect(input).not.toBeChecked();

      const label = input.closest('label');

      expect(label).toBeInTheDocument();
      expect(label.getAttribute('for')).toEqual(input.id);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have id', () => {
      render(
        <Radio id="test-id" />,
      );

      const input = screen.getByRole('radio');

      expect(input.getAttribute('id')).toBe('test-id');

      const label = input.closest('label');

      expect(label).toBeInTheDocument();
      expect(label.getAttribute('for')).toEqual(input.id);
    });

    it('should be disabled', () => {
      const { asFragment } = render(
        <Radio id="test-id" disabled />,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have required', () => {
      const { asFragment } = render(
        <Radio id="test-id" required />,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have name attr', () => {
      const { asFragment } = render(
        <Radio id="test-id" name="test-name" />,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have test id', () => {
      const { asFragment } = render(
        <Radio id="test-id" data-testid="test-id" />,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have className', () => {
      const { asFragment } = render(
        <Radio id="test-id" className="test-cls" />,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should have custom checked icon', () => {
      const { asFragment } = render(
        <Radio id="test-id" checkedIcon={PlusIcon} />,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should be checked, defaultChecked prop', () => {
      const { asFragment } = render(
        <Radio id="test-id" defaultChecked />,
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('should be unchecked, defaultChecked prop', () => {
      render(
        <Radio id="test-id" defaultChecked={false} />,
      );

      const input = screen.getByRole('radio');

      expect(input).not.toBeChecked();
    });

    it('should be checked', () => {
      const onChange = vi.fn();

      render(
        <Radio checked onChange={onChange} />,
      );

      const input = screen.getByRole('radio');

      expect(input).toBeChecked();
    });

    it('should be unchecked', () => {
      const onChange = vi.fn();

      render(
        <Radio checked={false} onChange={onChange} />,
      );

      const input = screen.getByRole('radio');

      expect(input).not.toBeChecked();
    });

    it('should forwards ref to label element', () => {
      const ref = React.createRef<HTMLLabelElement>();

      render(
        <Radio ref={ref} />,
      );

      const input = screen.getByRole('radio');

      expect(input.closest('label')).toEqual(ref.current);
    });
  });

  describe('Radio render colors', () => {
    const colors: React.ComponentProps<typeof Radio>['color'][] = [
      'primary',
      'secondary',
    ];

    colors.forEach((color) => {
      it(`color "${color}"`, () => {
        const { asFragment } = render(
          <Radio color={color} id="test-id" />,
        );

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });

  describe('Radio focus behaviour', () => {
    it('should have focus', async () => {
      render(
        <Radio />,
      );

      const input = screen.getByRole('radio');

      expect(document.activeElement).not.toEqual(input);
      await userEvent.tab();
      expect(document.activeElement).toEqual(input);
      expect(input).toHaveFocus();
    });

    it('shouldn\'t have focus when disabled has been passed to the component', async () => {
      render(
        <Radio disabled />,
      );

      const input = screen.getByRole('radio');

      expect(document.activeElement).not.toEqual(input);
      await userEvent.tab();
      expect(document.activeElement).not.toEqual(input);
      expect(input).not.toHaveFocus();
    });
  });

  describe('Radio keyboard behaviour', () => {
    it('should be checked after pressed on space', async () => {
      render(
        <Radio />,
      );

      const input = screen.getByRole('radio');

      await userEvent.type(input, '{space}');
      expect(input).toBeChecked();
    });
  });

  describe('Radio click behaviour', () => {
    it('should be checked when clicked', () => {
      render(
        <Radio />,
      );

      const input = screen.getByRole('radio');

      expect(input).not.toBeChecked();
      fireEvent.click(input);
      expect(input).toBeChecked();
    });

    it('should be checked when clicked and defaultChecked has been passed to the component', () => {
      render(
        <Radio defaultChecked />,
      );

      const input = screen.getByRole('radio');

      expect(input).toBeChecked();
      fireEvent.click(input);
      expect(input).toBeChecked();
    });

    it('should calls onClick prop when clicked', () => {
      const handleClick = vi.fn();

      render(
        <Radio onClick={handleClick} />,
      );
      fireEvent.click(screen.getByRole('radio'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should calls onChange prop when clicked', () => {
      const onChange = vi.fn();

      render(
        <Radio onChange={onChange} />,
      );
      const input = screen.getByRole('radio');

      expect(onChange).toBeCalledTimes(0);
      fireEvent.click(input);
      expect(onChange).toBeCalledTimes(1);
    });

    it('should be checked the right radio when clicked them in turn', () => {
      render(
        <>
          <Radio name="test-name" />
          <Radio name="test-name" />
        </>,
      );
      const [input1, input2] = screen.getAllByRole('radio');

      expect(input1).not.toBeChecked();
      expect(input2).not.toBeChecked();
      fireEvent.click(input1);
      expect(input1).toBeChecked();
      expect(input2).not.toBeChecked();
      fireEvent.click(input2);
      expect(input1).not.toBeChecked();
      expect(input2).toBeChecked();
    });
  });
});
