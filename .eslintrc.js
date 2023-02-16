module.exports = {
    root: true,
    extends: ['@react-native-community', 'airbnb', 'airbnb-typescript', 'airbnb/hooks', 'prettier'],

    parser: '@typescript-eslint/parser',

    ignorePatterns: ['.eslintrc.js', 'metro.config.js'],

    parserOptions: {
        project: ['./tsconfig.json'],
        sourceType: 'module',
    },

    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-shadow': ['error'],
                'no-shadow': 'off',
                'no-undef': 'off',
                'simple-import-sort/imports': 'error',
                'simple-import-sort/exports': 'error',
                'import/first': 'error',
                'import/newline-after-import': 'error',
                'import/no-duplicates': 'error',
            },
        },
    ],

    plugins: ['@typescript-eslint', 'simple-import-sort'],
};
