import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,

        ],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.browser,
            },
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'import': importPlugin,
            'react': reactPlugin,
            'prettier': prettierPlugin,
        },
        rules: {
            // React Hooks rules
            ...reactHooks.configs.recommended.rules,

            // React Refresh
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],

            // Semicolon enforcement
            'semi': ['error', 'always'],

            // Unused variable warning
            '@typescript-eslint/no-unused-vars': ['warn'],

            // Quotes
            'quotes': ['error', 'single', { avoidEscape: true }],
            'jsx-quotes': ['error', 'prefer-single'], // Enforces single quotes in JSX

            // Indentation
            'indent': ['error', 4, { 'SwitchCase': 1 }],

            // Import sorting
            'import/order': ['error', {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                ],
                'newlines-between': 'always',
            }],

            // Ignore useEffect dependencies (use with caution)
            'react-hooks/exhaustive-deps': 'off',

            // Trailing spaces
            'no-trailing-spaces': 'error',

            // Disable base no-use-before-define
            'no-use-before-define': 'off',

            // Disallow use before definition (TS-aware)
            '@typescript-eslint/no-use-before-define': ['error', {
                variables: false,
                functions: false,
            }],

            // Disable prop-types check (not needed with TypeScript)
            'react/prop-types': 'off',

            // Allow default exports without names
            'import/no-anonymous-default-export': 'off',

            // Disable requiring display name on React components
            'react/display-name': 'off',

            // Disable forcing class methods to use `this`
            'class-methods-use-this': 'off',

            // Disable base no-shadow rule
            'no-shadow': 'off',

            // Disallow variable shadowing (TS-aware)
            '@typescript-eslint/no-shadow': ['error'],

            // Disable line length restriction
            'max-len': 'off',

            // Allow omitting parens in arrow functions
            'arrow-parens': 'off',

            // Disable enforcing implicit arrow linebreaks
            'implicit-arrow-linebreak': 'off',

            // Disable specific linebreak style (LF/CRLF)
            'linebreak-style': 0,

            // Enforce consistent JSX indentation
            'react/jsx-indent': [1, 4],

            // Enforce consistent props indentation
            'react/jsx-indent-props': [1, 4],

            // Allow JSX in specific extensions
            'react/jsx-filename-extension': [1, {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            }],

            // Allow props spreading in JSX
            'react/jsx-props-no-spreading': 'off',

            // Enforce consistent line breaks inside curly braces
            'object-curly-newline': [2, { consistent: true }],

            // Allow variables starting with `_`
            'no-underscore-dangle': 'off',

            // Allow concise arrow bodies
            'arrow-body-style': 'off',

            // Warn about unused state in class components
            'react/no-unused-state': 'warn',

            // Allow importing devDependencies in any file
            'import/no-extraneous-dependencies': [1, {
                devDependencies: true,
            }],

            // Disable cycle check in import paths
            'import/no-cycle': 'off',

            // Enforce no extensions in import paths
            // 'import/extensions': ['error', 'ignorePackages', {
            //     js: 'never',
            //     jsx: 'never',
            //     ts: 'never',
            //     tsx: 'never'
            // }],

            // Disable explicit return types on modules
            '@typescript-eslint/explicit-module-boundary-types': 'off',

            // Allow mutating function parameters (e.g., req.body)
            'no-param-reassign': ['error', {
                props: false,
            }],

            // Enforce arrow function style for React components
            'react/function-component-definition': ['error', {
                namedComponents: 'arrow-function',
            }],

            // Enforce end of line must have atleast one line
            'eol-last': ['error', 'always'],

            // Enforce semi must be at end of the line
            'semi-style': ['error', 'last'],

            // Enforce no multiple empty line
            'no-multiple-empty-lines': ['error', { 'max': 1 }],

            // Enforce no multiple spaces between code
            'no-multi-spaces': 'error',

            // Enforce no empty blocks
            'no-empty': 'error',

            // Enforce unintentional assignment of variable
            'no-cond-assign': 'error',

            // Enforce trailing comma for last element in array/object
            'comma-dangle': ['error', 'always-multiline'],

            // Enforce a space after comma and no space before comma
            'comma-spacing': ['error', { 'before': false, 'after': true }],

            // Enforce not space before a semicolon
            'semi-spacing': ['error', { 'before': false, 'after': true }],

            // Enforce spacing inside curly braces
            'object-curly-spacing': ['error', 'always'],

            // Enforce spacing after colon in an object properties
            'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],

            // Enforce space after JavaScript keywords (if, for, while, return, etc)
            'keyword-spacing': ['error', { 'before': true }],

            // Enforce no spaces before or after '=' in JSX props
            'react/jsx-equals-spacing': [2, 'never'],

            // Enforce space around operators
            'space-infix-ops': 'error',

            // Disallow spaces between parentheses
            'space-in-parens': ['error', 'never'],

            // Disallow spaces between array bracket
            'array-bracket-spacing': ['error', 'never'],

            // Warns if there is console.log
            'no-console': ['error', { allow: ['warn', 'error'] }],

            // Warn if using arrow function syntax where it can be confused with a comparison operator
            'no-confusing-arrow': 'error',
        },
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        // rules: {
        //     // Require explicit return types for TS modules
        //     '@typescript-eslint/explicit-module-boundary-types': ['error']
        // }
    },
);
