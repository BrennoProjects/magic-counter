module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    jsx: true,
    project: 'tsconfig.json'
  },
  plugins: [
    'react'
  ],
  settings: {
    react: {
      version: '18.0.0'
    }
  },
  rules: {
    semi: [2, 'always'],
    '@typescript-eslint/semi': [2, 'always']
  }
};
