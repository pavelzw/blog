module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: '2020',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: [
    'standard',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'next',
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        semi: false,
        overrides: [
          {
            files: '*.json',
            options: {
              parser: 'json',
            },
          },
          {
            files: '*.html',
            options: {
              parser: 'html',
            },
          },
          {
            files: '*.css',
            options: {
              parser: 'css',
            },
          },
          {
            files: '*.md',
            options: {
              parser: 'markdown',
            },
          },
          {
            files: '*.mdx',
            options: {
              parser: 'markdown',
            },
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.md', '*.mdx'],
      parser: 'eslint-plugin-markdownlint/parser',
      extends: ['plugin:markdownlint/recommended'],
      rules: {
        // Line length
        'markdownlint/md013': [
          'error',
          {
            code_blocks: false,
          },
        ],
        // Multiple top-level headings in the same document
        'markdownlint/md025': 'off',
        // Inline HTML
        'markdownlint/md033': [
          'error',
          {
            allowed_elements: ['a'],
          },
        ],
        // First line in a file should be a top-level heading
        'markdownlint/md041': 'off',
      },
    },
  ],
}
