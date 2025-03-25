// eslint-disable-next-line import/no-unresolved
import tseslint from 'typescript-eslint';
import baseConfig from '@peculiar/eslint-config-base';
import reactConfig from '@peculiar/eslint-config-react';

export default tseslint.config([
  ...baseConfig,
  ...reactConfig,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'react/jsx-props-no-spreading': 'off',
      '@stylistic/object-curly-newline': [
        'error',
        {
          ObjectExpression: {
            multiline: true,
            minProperties: 1,
          },
        },
      ],
    },
  },
  {
    ignores: [
      '**/dist/*',
      '**/public/*',
    ],
  },
]);
