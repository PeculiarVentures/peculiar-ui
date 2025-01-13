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
]);
