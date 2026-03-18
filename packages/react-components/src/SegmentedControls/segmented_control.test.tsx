import { describe, it, expect } from 'vitest';
import { renderWithWrapper as render } from '../test-utils';
import { SegmentedControl } from './index';

describe('<SegmentedControl />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(
      <SegmentedControl id="segmented_control_1">Tab-1</SegmentedControl>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const { asFragment } = render(
      <SegmentedControl id="segmented_control_1" className="my-class-name">Tab-1</SegmentedControl>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass disabled', () => {
    const { asFragment } = render(
      <SegmentedControl id="segmented_control_1" disabled>Tab-1</SegmentedControl>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass "component"', () => {
    const { asFragment } = render(
      <SegmentedControl id="segmented_control_1" component="a">Tab-1</SegmentedControl>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
