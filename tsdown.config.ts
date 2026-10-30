import { defineConfig } from 'tsdown';

export default defineConfig({
  // Builds every packages/* package with the options below; paths resolve from each package directory.
  workspace: {
    include: ['packages/*'],
  },
  entry: {
    index: 'src/index.ts',
  },
  // ESM only. CommonJS consumers load it through require(esm) on Node ^20.19 / >=22.12.
  format: ['esm'],
  platform: 'neutral',
  dts: true,
  clean: true,
  // Emit one file per source module. Bundlers then drop the modules an app doesn't
  // import ("sideEffects": false), and per-module 'use client' directives survive.
  // Bundled multi-entry declarations also leave rolldown's `__exportAll` namespace
  // helper in shared declaration chunks (see rolldown/tsdown#1051).
  unbundle: true,
  // Keep .js/.d.ts output names (package.json is "type": "module")
  // instead of fixed .mjs/.d.mts extensions.
  fixedExtension: false,
  deps: {
    neverBundle: true,
  },
  exports: {
    legacy: true,
  },
  outputOptions: {
    // Drop TSDoc from the JS output; docs ship in the .d.ts files. Keep
    // @__PURE__ annotations so bundlers can tree-shake.
    comments: { legal: true, annotation: true, jsdoc: false },
  },
  // The unbundled output keeps each module's 'use client' directive, so rolldown's
  // warning that bundling may drop it doesn't apply.
  checks: {
    moduleLevelDirective: false,
  },
  outDir: 'build',
  // The root tsconfig: its paths resolve @peculiar/color imports to the sibling sources.
  tsconfig: '../../tsconfig.json',
  attw: {
    level: 'error',
    profile: 'esm-only',
  },
});
