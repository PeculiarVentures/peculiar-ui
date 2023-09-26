import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Select } from './index';

describe('<Select />', () => {
  it('should render with default styles', () => {
    const options: Partial<React.ComponentProps<typeof Select>>['options'] = [
      { label: 'test-1', value: 'test1' },
      { label: 'test-2', value: 'test3' },
    ];

    const { asFragment } = render(<Select options={options} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
