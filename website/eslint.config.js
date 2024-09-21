import { defineConfig } from 'eslint';

export default defineConfig({
    languageOptions: {
        globals: {
            describe: true,
            test: true,
            expect: true,
            // Add other globals as needed
        },
    },
    rules: {
        // Example rules
        'no-undef': 'error',
        'import/no-unresolved': 'error',
        // Add more rules as needed
    },
});
