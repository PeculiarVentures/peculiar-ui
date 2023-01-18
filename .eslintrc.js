module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'newline-after-var': 2,
    'react/function-component-definition': [2, { 'namedComponents': 'arrow-function' }],
    'react/no-unstable-nested-components': [2, { 'allowAsProps': true }],
    'react/jsx-no-constructed-context-values': 0,
    'react/jsx-max-props-per-line': [2, { 'maximum': { 'single': 2, 'multi': 1 } } ],
    'react/jsx-curly-spacing': [2, {
      'when': 'never',
      'children': {
        'when': 'never'
      }
    }],
    'react/jsx-props-no-spreading': 0
  },
};
