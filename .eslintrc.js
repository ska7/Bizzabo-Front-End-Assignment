module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react/require-default-props': 0,
    'no-unused-vars': 0,
    'max-len': 0,
    'no-plusplus': 0,
  },
};
