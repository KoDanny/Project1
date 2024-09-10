import globals from 'globals';
import pluginJs from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
  {
    files: ['**/*.js'],
    plugins: {
      stylistic: stylisticJs,
    },
    rules: {
      'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
      'quotes': ['error', 'single'],
    }
  },
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      }
    }
  },
  {
    ignores: ['node_modules'],
  },
  {
    rules: {
      semi: 'error',
      'prefer-const': 'error',
      'arrow-body-style': ['error', 'as-needed'],
    }
  }
];