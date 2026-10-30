<h1 align="center">
  @peculiar/color
</h1>

<div align="center">

![NPM License](https://img.shields.io/npm/l/@peculiar/color)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/PeculiarVentures/peculiar-ui/publish.yaml?branch=main&label=release)
[![npm version](https://img.shields.io/npm/v/@peculiar/color.svg)](https://www.npmjs.com/package/@peculiar/color)
[![npm downloads](https://img.shields.io/npm/dm/@peculiar/color.svg)](https://www.npmjs.com/package/@peculiar/color)

</div>

Library for color manipulation and conversion in JavaScript.

## Installation

```bash
npm install @peculiar/color
```

## Breaking Changes In v2

v2 is ESM-only and requires Node.js `^20.19.0 || >=22.12.0` (was `>=18.x`). CommonJS code can still `require("@peculiar/color")` on these versions; Node.js 22.0–22.11 can't. The public API is unchanged. See the [full notes](https://github.com/PeculiarVentures/peculiar-ui#breaking-changes-in-v2).

- **TypeScript compiling to CommonJS:** use `"module": "node20"` or `"nodenext"` (`node16` fails with TS1479). ESM and bundler setups need no changes.
- **Jest in CommonJS mode:** switch to ESM mode or Vitest, or transform `@peculiar/color` and make sure `transformIgnorePatterns` doesn't exclude it.
- **Deep imports** (`@peculiar/color/dist/...`) are blocked by `exports`; import from `@peculiar/color`.

## Usage

```js
import { Color } from '@peculiar/color';

const color = new Color('#5EBC54');

color.toHex(); // => '5ebc54'
color.toHsb(); // => [114, 55, 74]
color.toRgb(); // => [94, 188, 84]
```

### `palette`

The palette generator can be used to generate a palette for any color you input.

```js
import { Color } from '@peculiar/color';

const color = new Color('#5EBC54');

color.palette(); // => Record<PaletteTypes, Color>
```

## License

Licensed under the [MIT](LICENSE) license.
