import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { MenuItem } from './index';
import { PlusIcon } from '../icons';

describe('<MenuItem />', () => {
  it('should render with default styles', () => {
    const {
      asFragment,
    } = render(<MenuItem>MenuItem</MenuItem>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const {
      asFragment,
    } = render(<MenuItem className="my-class-name">MenuItem</MenuItem>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass disabled', () => {
    const {
      asFragment,
    } = render(<MenuItem disabled>MenuItem</MenuItem>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should have start & end icons', () => {
    const {
      asFragment,
    } = render(
      <MenuItem startIcon={<PlusIcon />} endIcon={<PlusIcon />}>MenuItem</MenuItem>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
