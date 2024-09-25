import { defineConfig } from 'eslint-define-config';
import eslintRecommended from 'eslint:recommended';
import reactRecommended from 'plugin:react/recommended';
import reactHooksRecommended from 'plugin:react-hooks/recommended';
import importErrors from 'plugin:import/errors';
import importWarnings from 'plugin:import/warnings';
import prettier from 'prettier'; // If integrating with Prettier

export default defineConfig([
  eslintRecommended,
  reactRecommended,
  reactHooksRecommended,
  importErrors,
  importWarnings,
  prettier,
  {
    parser: '@babel/eslint-parser',
    parserOptions: {
      requireConfigFile: false,
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      react: {
        version: 'detect', // Automatically pick the version you have installed
      },
    },
    plugins: ['react', 'import'],
    rules: {
      'react/react-in-jsx-scope': 'off', // Disable for React 17+
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Warn on unused vars but allow prefixed ones
      'no-empty': 'warn', // Change empty block to a warning
      // Add more rules as needed
    },
  },
]);
