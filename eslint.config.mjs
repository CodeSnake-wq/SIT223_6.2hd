// eslint.config.mjs
import { defineFlatConfig } from 'eslint-define-config';

export default defineFlatConfig([
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    rules: {
      'no-unused-vars': 'error',
      'semi': ['error', 'always'],
    },
  },
]);
