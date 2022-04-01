module.exports = {
  root: true,
  extends: ['react-app'],
  rules: {
    'linebreak-style': [0, 'error', 'windows'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.js'] }], // 解决 index.js 中不能使用 JSX
    'max-len': ['warn', 10000],
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'no-useless-escape': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'import/no-anonymous-default-export': 'off',
    'no-mixed-operators': 'off',
    'array-callback-return': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-restricted-globals': 'off',
    'no-control-regex': 'off',
    quotes: [1, 'single'], // 引号类型 `` "" ''
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      legacyDecorators: true, // 主要是这个选项
    },
  },
}
