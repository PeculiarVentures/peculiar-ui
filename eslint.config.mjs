import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import stylistic from '@stylistic/eslint-plugin';

export default tseslint.config([
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  jsxA11y.flatConfigs.recommended,
  reactPlugin.configs.flat.recommended,
  stylistic.configs.customize({
    semi: true,
    indent: 2,
    quotes: 'single',
    jsx: true,
    arrowParens: true,
    braceStyle: '1tbs',
  }),
  {
    plugins: {
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
    },
  },
  {
    ignores: [
      '**/dist/*',
      '**/public/*',
    ],
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@stylistic/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: [
            'return',
            'throw',
            'break',
            'continue',
            'export',
          ],
        },
        {
          blankLine: 'always',
          prev: [
            'block-like',
            'for',
            'switch',
            'try',
            'while',
            'case',
            'default',
            'const',
            'let',
            'var',
            'import',
          ],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
        {
          blankLine: 'never',
          prev: 'import',
          next: 'import',
        },
        {
          blankLine: 'any',
          prev: 'export',
          next: 'export',
        },
      ],
      '@stylistic/jsx-max-props-per-line': [
        'error',
        {
          maximum: 2,
        },
      ],
      '@stylistic/object-curly-newline': [
        'error',
        {
          ObjectExpression: {
            multiline: true,
            minProperties: 1,
          },
          ObjectPattern: {
            multiline: true,
            minProperties: 1,
          },
          ImportDeclaration: {
            multiline: true,
            minProperties: 3,
          },
          ExportDeclaration: {
            multiline: true,
            minProperties: 3,
          },
        },
      ],
    },
  },
]);
