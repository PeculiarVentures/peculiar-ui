import { Component, h } from '@stencil/core';

@Component({
  tag: 'peculiar-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {
  render() {
    return (
      <button
        type="button"
      >
        <slot />
      </button>
    );
  }
}
