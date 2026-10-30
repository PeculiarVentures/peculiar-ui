<h1 align="center">
  @peculiar/react-components
</h1>

<div align="center">

![NPM License](https://img.shields.io/npm/l/@peculiar/react-components)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/PeculiarVentures/peculiar-ui/publish.yaml?branch=main&label=release)
[![npm version](https://img.shields.io/npm/v/@peculiar/react-components.svg)](https://www.npmjs.com/package/@peculiar/react-components)
[![npm downloads](https://img.shields.io/npm/dm/@peculiar/react-components.svg)](https://www.npmjs.com/package/@peculiar/react-components)

</div>

A simple and customizable component library to build faster, beautiful, and more accessible React applications.

## Installation

```bash
npm install @peculiar/react-components
```

React 18 or 19 is a peer dependency.

## Breaking Changes In v2

v2 is ESM-only and requires Node.js `^20.19.0 || >=22.12.0` (was `>=18.x`). CommonJS code can still `require("@peculiar/react-components")` on these versions; Node.js 22.0–22.11 can't. The public API is unchanged. See the [full notes](https://github.com/PeculiarVentures/peculiar-ui#breaking-changes-in-v2).

- **Deep imports** (`@peculiar/react-components/dist/...`) are blocked by `exports`; import from `@peculiar/react-components`. `dist/cjs`, `dist/esm` and `dist/esnext` are gone.
- **CommonJS toolchains:** TypeScript compiling to CommonJS needs `"module": "node20"` or `"nodenext"`; Jest in CommonJS mode needs ESM mode, Vitest, or a transform for `@peculiar/*`, `nanoid` and `flat`.
- **React 18 or 19** (was `^17 || ^18`). React 19 apps no longer need `overrides` for this package.
- **`'use client'`:** Next.js App Router Server Components can import the components directly.

## Usage

```tsx
import { Button, ThemeProvider } from '@peculiar/react-components';

function MyComponent() {
  return (
    <ThemeProvider>
      <Button>Example usage</Button>
    </ThemeProvider>
  );
}
```

`ThemeProvider` sets the CSS variables the components use, so render it once near the root of your app.

## Documentation

- [Storybook](https://peculiarventures.github.io/peculiar-ui/)

## License

Licensed under the [MIT](LICENSE) license.
