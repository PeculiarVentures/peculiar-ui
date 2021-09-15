import React from 'react';
import {
  render,
  screen,
  userEvent,
  fireEvent,
} from '../test-utils';
import { SelectPicker } from './index';

const options = [
  {
    label: 'Test-1',
    value: 'test_1',
  },
  {
    label: 'Test-2',
    value: 'test_2',
  },
  {
    label: 'Test-3',
    value: 'test_3',
  },
  {
    label: 'Test-4',
    value: 'test_4',
  },
  {
    label: 'Test-5',
    value: 'test_5',
  },
];

describe('SelectPicker', () => {
  it('render SelectPicker without errors', () => {
    const onChange = jest.fn();

    render(
      <SelectPicker
        onChange={onChange}
        options={options}
      />,
    );

    expect(screen.getByTestId('select-picker')).toBeInTheDocument();

    const selectPickerField = screen.getByTestId('select-picker');
    userEvent.click(selectPickerField);

    expect(screen.getByTestId('select-picker-list')).toBeInTheDocument();
    expect(screen.getByTestId('select-picker-list').childElementCount).toEqual(options.length);
  });

  it('click on a sheet element, it will be selected without errors', () => {
    const onChange = jest.fn();

    render(
      <SelectPicker
        onChange={onChange}
        options={options}
      />,
    );

    const selectPickerField = screen.getByTestId('select-picker');
    userEvent.click(selectPickerField);

    const selectPickerItem = screen.getByTestId('select-picker-list').children[0];
    userEvent.click(selectPickerItem);

    expect(onChange).toBeCalledWith(options[0].value);
  });

  it('select on a sheet element, it will be selected without errors', () => {
    const onChange = jest.fn();

    render(
      <SelectPicker
        onChange={onChange}
        options={options}
      />,
    );

    const selectPickerField = screen.getByTestId('select-picker');
    userEvent.click(selectPickerField);

    fireEvent.keyDown(window, { key: 'ArrowUp' });
    fireEvent.keyDown(window, { key: 'Enter' });

    expect(onChange).toBeCalledWith(options[options.length - 1].value);
  });

  it('search work without errors', () => {
    const onChange = jest.fn();

    render(
      <SelectPicker
        onChange={onChange}
        options={options}
      />,
    );

    const selectPickerField = screen.getByTestId('select-picker');
    userEvent.click(selectPickerField);

    const inputSearch = screen.getByTestId('search-text-field').querySelector('input');
    fireEvent.change(inputSearch, { target: { value: '2' } });
    expect(screen.getByTestId('select-picker-list').childElementCount).toEqual(1);

    fireEvent.keyDown(window, { key: 'ArrowDown' });
    fireEvent.keyDown(window, { key: 'Enter' });
    expect(onChange).toBeCalledWith(options[1].value);

    userEvent.click(selectPickerField);
    expect(screen.getByTestId('select-picker-list').childElementCount).toEqual(options.length);
  });

  it('show loading state without errors', () => {
    render(
      <SelectPicker
        onChange={jest.fn}
        options={options}
        loading
      />,
    );

    const selectPickerField = screen.getByTestId('select-picker');
    userEvent.click(selectPickerField);

    expect(screen.getByTestId('loading-list')).toBeInTheDocument();
  });

  it('show error state without errors', () => {
    render(
      <SelectPicker
        onChange={jest.fn}
        options={options}
        error="Error message"
      />,
    );

    const selectPickerField = screen.getByTestId('select-picker');
    userEvent.click(selectPickerField);

    expect(screen.getByTestId('error-list')).toHaveTextContent('Error message');
  });

  it('show empty list state without errors', () => {
    render(
      <SelectPicker
        onChange={jest.fn}
        options={[]}
      />,
    );

    const selectPickerField = screen.getByTestId('select-picker');
    userEvent.click(selectPickerField);

    expect(screen.getByTestId('empty-list')).toBeInTheDocument();
  });

  it('show empty list state without errors', () => {
    render(
      <SelectPicker
        onChange={jest.fn}
        options={options}
        notMatch="Not match test message"
      />,
    );

    const selectPickerField = screen.getByTestId('select-picker');
    userEvent.click(selectPickerField);

    const inputSearch = screen.getByTestId('search-text-field').querySelector('input');
    fireEvent.change(inputSearch, { target: { value: '0000' } });

    expect(screen.getByTestId('not-match-list')).toHaveTextContent('Not match test message');
  });

  it('closed select-picker on click "tab" without errors', () => {
    const onChange = jest.fn();

    render(
      <SelectPicker
        onChange={onChange}
        options={options}
      />,
    );

    const selectPickerField = screen.getByTestId('select-picker');
    userEvent.click(selectPickerField);

    fireEvent.keyDown(window, { key: 'Tab' });

    expect(screen.queryByTestId('select-picker-list')).not.toBeInTheDocument();
    expect(onChange).toBeCalledTimes(0);
  });
});
