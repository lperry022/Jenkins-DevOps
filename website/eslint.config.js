module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:jsx-a11y/recommended',
        'plugin:node/recommended',
        'plugin:security/recommended',
        // Add other configurations as needed
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        // Define your rules here, for example:
        'no-undef': 'error',
        'import/no-unresolved': 'error',
        // Add other rules as needed
    },
};
