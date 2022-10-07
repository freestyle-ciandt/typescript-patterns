module.exports = {
  extends: ['airbnb-typescript/base', 'airbnb-base'],
  parser: '@typescript-eslint/parser',
  plugins: ['import'],
  root: true,
  env: {
    es2021: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: '2020',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        paths: './tsconfig.json',
      },
    },
  },
  rules: {
    "no-cond-assign": ["error", "except-parens"],
    "no-plusplus": "off"
  },
};
