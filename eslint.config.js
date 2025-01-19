import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: { prettier: pluginPrettier },
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'max-len': ['warn', { code: 110 }],
      'object-curly-spacing': ['warn', 'always'],
      'prettier/prettier': [
        'warn',
        {
          semi: true,
          singleQuote: true,
          printWidth: 110,
          tabWidth: 2,
          useTabs: false,
        },
      ],
      indent: ['warn', 2],
    },
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
];
