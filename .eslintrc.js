module.exports = {
  extends: [
    'airbnb-typescript',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'react/require-default-props': 1
  },
};
