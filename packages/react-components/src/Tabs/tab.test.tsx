import { describe, it, expect } from 'vitest';
import { renderWithWrapper as render } from '../test-utils';
import { Tab } from './index';

describe('<Tab />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(
      <Tab id="tab1">Tab-1</Tab>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const { asFragment } = render(
      <Tab id="tab1" className="my-class-name">Tab-1</Tab>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass disabled', () => {
    const { asFragment } = render(
      <Tab id="tab1" disabled>Tab-1</Tab>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass "component"', () => {
    const { asFragment } = render(
      <Tab id="tab1" component="a">Tab-1</Tab>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass selected', () => {
    const { asFragment } = render(
      // @ts-expect-error: `selected` is declared here.
      <Tab id="tab1" selected={true}>Tab-1</Tab>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
