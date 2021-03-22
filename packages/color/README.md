# `@peculiar/color`

Library for color manipulation and conversion in JavaScript.

## Getting started

To install `@peculiar/color` in your project, you will need to run the
following command using [npm](https://www.npmjs.com/):

```bash
npm install @peculiar/color
```

If you prefer [Yarn](https://yarnpkg.com/en/), use the following command instead:

```bash
yarn add @peculiar/color
```

## Usage

```js
import { Color } from '@peculiar/color';

const color = new Color('#5EBC54');

color.toHex() // => '5EBC54';
color.toHsb() // => [114, 55, 74];
color.toRgb() // => [94, 188, 84];
```

### `palette`

The palette generator can be used to generate a palette for any color you input.

```js
import { Color } from '@peculiar/color';

const color = new Color('#5EBC54');

color.palette() // => Color[];
```

## 📝 License

Licensed under the [MIT](/LICENSE).
