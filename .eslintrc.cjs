// eslint-disable-next-line no-undef
module.exports = {
    extends: [
        // 'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
        // ...
        // 'plugin:@stylistic/disable-legacy'
    ],
    env: {
        browser: true
    },
    plugins: [
        '@stylistic',
        '@stylistic/ts',
        '@typescript-eslint'
    ],
    ignorePatterns: ['/build/*'],
    rules: {
        '@stylistic/array-bracket-newline': ['error', 'consistent'],
        '@stylistic/array-bracket-spacing': ['error', 'never'],

        // Arrow funcs
        '@stylistic/arrow-parens': ['error', 'always'],
        '@stylistic/arrow-spacing': ['error', { 'before': true, 'after': true }],

        // Commas
        '@stylistic/comma-dangle': ['error', 'never'],
        '@stylistic/comma-spacing': ['error', { before: false, after: true }],
        '@stylistic/comma-style': ['error', 'last'],

        '@stylistic/computed-property-spacing': ['error', 'never'],
        '@stylistic/dot-location': ['error', 'property'],
        '@stylistic/eol-last': ['error', 'always'],

        // Functions
        '@stylistic/func-call-spacing': ['error', 'never'],
        '@stylistic/function-call-argument-newline': ['error', 'consistent'],

        '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],

        'indent': ['error', 4, { 'SwitchCase': 1 }],
        '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
        '@stylistic/linebreak-style': ['error', 'unix'],

        '@typescript-eslint/member-delimiter-style': ['error', {
            'multiline': {
                'delimiter': 'comma',
                'requireLast': false
            },
            'singleline': {
                'delimiter': 'comma',
                'requireLast': false
            },
            'overrides': {
                'interface': {
                    'multiline': {
                        'delimiter': 'semi',
                        'requireLast': true
                    }
                }
            }
        }],

        '@stylistic/new-parens': ['error', 'always'],

        // Semicolons
        '@stylistic/semi': ['error', 'always'],
        '@stylistic/no-extra-semi': 'error',
        '@stylistic/semi-spacing': ['error', { before: false, after: true }],
        '@stylistic/semi-style': ['error', 'last'],

        '@stylistic/no-trailing-spaces': ['error', {
            skipBlankLines: false,
            ignoreComments: false
        }],

        '@stylistic/no-whitespace-before-property': 'error',
        '@stylistic/padded-blocks': ['error', 'never'],
        '@stylistic/quote-props': ['error', 'consistent'],
        '@stylistic/quotes': ['error', 'single', {
            avoidEscape: true,
            allowTemplateLiterals: true
        }],
        '@stylistic/rest-spread-spacing': ['error', 'never'],
        '@stylistic/space-before-blocks': ['error', 'always'],
        '@stylistic/space-before-function-paren': ['error', {
            'anonymous': 'never',
            'named': 'never',
            'asyncArrow': 'always'
        }],
        '@stylistic/space-in-parens': ['error', 'never'],
        '@stylistic/spaced-comment': ['error', 'always'],
        '@stylistic/switch-colon-spacing': ['error', { before: false, after: true }],
        '@stylistic/template-curly-spacing': ['error', 'never'],
        '@stylistic/ts/type-annotation-spacing': ['error', { 'before': false, 'after': true, 'overrides': { 'arrow': { 'before': true, 'after': true } } }],
        '@stylistic/type-generic-spacing': 'error',
        '@stylistic/type-named-tuple-spacing': 'error',
        '@stylistic/wrap-regex': 'error',
        '@typescript-eslint/no-unused-vars': ['error', {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: false,
            argsIgnorePattern: '^_'
        }]
    }
};
