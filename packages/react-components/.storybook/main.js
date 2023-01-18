/**
 * @type {import('@storybook/react/types').StorybookConfig}
 */
module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../docs/**/*.story.mdx',
    '../src/**/*.story.tsx',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-actions',
  ],
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};
