module.exports = {
  extends: ['airbnb-typescript/base', 'airbnb-base'],
  parser: '@typescript-eslint/parser',
  plugins: ['import'],
  root: true,
  env: {
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: '2020',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {},
};
