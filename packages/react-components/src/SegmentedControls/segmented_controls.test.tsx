import { describe, it, expect } from 'vitest';
import { renderWithWrapper as render } from '../test-utils';
import { SegmentedControl, SegmentedControls } from './index';

describe('<SegmentedControls />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(
      <SegmentedControls value="segmented_control_1">
        <SegmentedControl id="segmented_control_1">Tab-1</SegmentedControl>
        <SegmentedControl id="segmented_control_2">Tab-2</SegmentedControl>
      </SegmentedControls>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const { asFragment } = render(
      <SegmentedControls value="segmented_control_1" className="my-class-name">
        <SegmentedControl id="segmented_control_1">Tab-1</SegmentedControl>
        <SegmentedControl id="segmented_control_2">Tab-2</SegmentedControl>
      </SegmentedControls>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
