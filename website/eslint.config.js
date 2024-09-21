import pkg from 'eslint';
const { defineConfig } = pkg;

export default defineConfig({
    languageOptions: {
        globals: {
            describe: true,
            test: true,
            expect: true,
        },
    },
    rules: {
        'no-undef': 'error',
        'import/no-unresolved': 'error',
    },
});
