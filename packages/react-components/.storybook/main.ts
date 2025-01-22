import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  core: { disableTelemetry: true },
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: { backgrounds: false },
    },
    'storybook-dark-mode',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: { reactDocgen: 'react-docgen-typescript' },
  staticDirs: ['./static'],
};

export default config;
