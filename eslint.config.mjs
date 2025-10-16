import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import path from 'path';
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

// Determine directories
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a compatibility instance
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended
});

const eslintConfig = [
    {
        // Global ignores and general settings
        ignores: ['node_modules/**', '.next/**', 'dist/**', 'build/**']
    },
    // Base configurations
    js.configs.recommended,

    // Load prettier config using compatibility layer
    ...compat.extends('prettier'),

    // TypeScript configurations
    ...tseslint.configs.recommended,
    ...tseslint.configs.strict,

    // Next.js configurations
    {
        files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
        plugins: {
            '@next/next': nextPlugin
        },
        rules: {
            ...nextPlugin.configs['core-web-vitals'].rules
        }
    },

    // React configurations
    {
        files: ['**/*.{jsx,tsx,mjsx,mtsx}'],
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin
        },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off'
        },
        settings: {
            react: {
                version: 'detect'
            }
        }
    },

    // Specific TypeScript rules
    {
        files: ['**/*.{ts,tsx,mtsx}'],
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: './tsconfig.eslint.json'
            }
        },
        rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_' }
            ],
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/strict-boolean-expressions': 'off',
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/consistent-type-imports': 'error',
            'react-hooks/rules-of-hooks': 'off',
            'react/no-unescaped-entities': 'off'
        }
    }
];

export default eslintConfig;
