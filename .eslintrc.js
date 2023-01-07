module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['*.js'],
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2],
    'no-empty': 'warn',
    'no-console': 'warn',
    'no-unused-vars': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    semi: ['error', 'always'],
  },
};
