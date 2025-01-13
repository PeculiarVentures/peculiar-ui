import React from 'react';
import { renderWithWrapper as render } from '../test-utils';
import { Modal } from './index';

describe('<Modal />', () => {
  it('should render with default styles', () => {
    const {
      baseElement,
    } = render(
      <Modal open={false}>
        <div>Inside</div>
      </Modal>,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('should render with default open styles', () => {
    const {
      baseElement,
    } = render(
      <Modal open>
        <div>Inside</div>
      </Modal>,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('should pass className', () => {
    const {
      baseElement,
    } = render(
      <Modal open className="my-class-name">
        <div>Inside</div>
      </Modal>,
    );

    expect(baseElement).toMatchSnapshot();
  });
});
