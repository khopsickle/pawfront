//  @ts-check

// eslint.config.js
import { tanstackConfig } from '@tanstack/eslint-config'
import prettier from 'eslint-config-prettier'

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  ...tanstackConfig,

  // Add any project-specific overrides
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false,
        },
      ],
      'react/jsx-no-leaked-render': ['error', { validStrategies: ['ternary'] }],
    },
  },

  // Ensure Prettier compatibility last
  prettier,
]
