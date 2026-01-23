import { describe, it, expect } from 'vitest';
import { renderWithWrapper as render } from '../test-utils';
import { Drawer } from './index';

describe('<Drawer />', () => {
  it('should render with default styles', () => {
    const { baseElement } = render(
      <Drawer open={false}>
        Inside
      </Drawer>,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('should render with default open styles', () => {
    const { baseElement } = render(
      <Drawer open>
        Inside
      </Drawer>,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('should pass className', () => {
    const { baseElement } = render(
      <Drawer open={false} className="my-class-name">
        Inside
      </Drawer>,
    );

    expect(baseElement).toMatchSnapshot();
  });
});
