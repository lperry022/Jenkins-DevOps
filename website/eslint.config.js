import eslint from 'eslint';
const { defineConfig } = eslint;

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
