/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PeculiarButton {
    }
}
declare global {
    interface HTMLPeculiarButtonElement extends Components.PeculiarButton, HTMLStencilElement {
    }
    var HTMLPeculiarButtonElement: {
        prototype: HTMLPeculiarButtonElement;
        new (): HTMLPeculiarButtonElement;
    };
    interface HTMLElementTagNameMap {
        "peculiar-button": HTMLPeculiarButtonElement;
    }
}
declare namespace LocalJSX {
    interface PeculiarButton {
    }
    interface IntrinsicElements {
        "peculiar-button": PeculiarButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "peculiar-button": LocalJSX.PeculiarButton & JSXBase.HTMLAttributes<HTMLPeculiarButtonElement>;
        }
    }
}
