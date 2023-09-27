import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Tab } from './index';

describe('<Tab />', () => {
  it('should render with default styles', () => {
    const { asFragment } = render(<Tab id="tab1">Tab-1</Tab>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass className', () => {
    const { asFragment } = render(<Tab id="tab1" className="my-class-name">Tab-1</Tab>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass disabled', () => {
    const { asFragment } = render(<Tab id="tab1" disabled>Tab-1</Tab>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should pass "component"', () => {
    const { asFragment } = render(<Tab id="tab1" component="a">Tab-1</Tab>);

    expect(asFragment()).toMatchSnapshot();
  });

  describe('should render colors', () => {
    const colors: Array<React.ComponentProps<typeof Tab>['color']> = [
      'black',
      'white',
    ];
    const selectVariant: boolean[] = [
      true,
      false,
    ];

    colors.forEach((color) => {
      selectVariant.forEach((selected) => {
        it(`colors: "${color}" & selected: "${selected}"`, () => {
          const { asFragment } = render(
            // @ts-ignore
            <Tab
              id="tab1"
              color={color}
              selected={selected}
            >
              Tab-1
            </Tab>,
          );

          expect(asFragment()).toMatchSnapshot();
        });
      });
    });
  });
});
