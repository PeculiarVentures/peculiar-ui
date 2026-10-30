<h1 align="center">
  peculiar-ui
</h1>

<div align="center">

![GitHub License](https://img.shields.io/github/license/PeculiarVentures/peculiar-ui)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/PeculiarVentures/peculiar-ui/publish.yaml?branch=main&label=release)

</div>

React components and color utilities used across PeculiarVentures apps. See the [Storybook](https://peculiarventures.github.io/peculiar-ui/) for the components.

## Packages

| Package                                                             | Version                                                                                                                                 | Description                                 |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`@peculiar/react-components`](packages/react-components/README.md) | [![npm version](https://img.shields.io/npm/v/@peculiar/react-components.svg)](https://www.npmjs.com/package/@peculiar/react-components) | Themeable React components built on emotion |
| [`@peculiar/color`](packages/color/README.md)                       | [![npm version](https://img.shields.io/npm/v/@peculiar/color.svg)](https://www.npmjs.com/package/@peculiar/color)                       | Color conversion, contrast and palettes     |

## Breaking Changes In v2

v2 is ESM-only and requires Node.js `^20.19.0 || >=22.12.0` (was `>=18.x`). Both packages move to v2 together. CommonJS code can still `require()` them on these versions; Node.js 22.0–22.11 can't (`ERR_REQUIRE_ESM`). The public API of both packages is unchanged.

- **One ESM build per package:** `dist/cjs`, `dist/esm` (ES5), `dist/esnext` and `dist/types` are replaced by `build/*.js` (ES2023) with `.d.ts` files next to them. Deep imports (`@peculiar/react-components/dist/...`) are blocked by the new `exports` map; import from the package name.
- **CommonJS toolchains:** TypeScript compiling to CommonJS needs `"module": "node20"` or `"nodenext"` (`node16` fails with TS1479). Jest in CommonJS mode needs ESM mode, Vitest, or a transform for `@peculiar/*`, `nanoid` and `flat` (both ESM-only now). ESM and bundler setups (Vite, Next.js, webpack 5) need no changes.
- **React 18 or 19:** the peer range is `^18.0.0 || ^19.0.0` (was `^17 || ^18`). React 19 apps can drop their `overrides` for this package; npm still prints two `ERESOLVE overriding peer dependency` warnings because `react-popper` only declares React ≤ 18.
- **`'use client'`:** components, hooks and providers are marked as client modules, so Next.js App Router Server Components can import them from `@peculiar/react-components` directly. Theme objects such as `defaultThemeLight` stay plain server values.

The components read emotion's theme (`mode`) and `StyledEngineProvider`'s style cache from the `@emotion/react` copy they import, so your app needs a single copy. v2 depends on `^11.14.0` instead of an exact version, so npm can dedupe it with yours (`npm ls @emotion/react` shows one version). With no separate CommonJS build, CommonJS and ESM code in one app always load the same module instance.

## Development

See [CONTRIBUTING.md](CONTRIBUTING.md) for setup, Storybook, tests and the release flow.

## License

Licensed under the [MIT](LICENSE) license.
