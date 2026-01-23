import { describe, it, expect } from 'vitest';
import { renderWithWrapper as render } from '../test-utils';
import { TextareaField } from './index';

describe('<TextareaField />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(
      <TextareaField id="test-id" />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should have label', () => {
    const { asFragment } = render(
      <TextareaField
        label="Test label"
        id="test-id"
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should be disabled', () => {
    const { asFragment } = render(
      <TextareaField disabled id="test-id" />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should have required', () => {
    const { asFragment } = render(
      <TextareaField required id="test-id" />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should have name attr', () => {
    const { asFragment } = render(
      <TextareaField name="test-name" id="test-id" />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should have className', () => {
    const { asFragment } = render(
      <TextareaField
        className="div-cls"
        id="test-id"
        inputProps={{
          className: 'input-cls',
        }}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
