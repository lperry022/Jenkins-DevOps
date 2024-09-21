import { defineConfig } from 'eslint';

export default defineConfig({
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:jsx-a11y/recommended',
        'plugin:node/recommended',
        'plugin:prettier/recommended', 
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'import',
        'security',
        'jsx-a11y',
        'node', 
    ],
    rules: {
        'no-unused-vars': 'warn', 
        'no-console': 'off',
        'security/detect-object-injection': 'warn', 
        'import/no-duplicates': 'warn', 
        'prettier/prettier': 'error', 
    },
    overrides: [
        {
            files: ['**/__tests__/*.js'], // Test files
            rules: {
                'no-undef': 'off', // Disable no-undef for test files
            },
        },
    ],
});
