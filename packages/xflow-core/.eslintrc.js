/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [require.resolve('../../.eslintrc.js')],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  rules: { 'react-hooks/exhaustive-deps': 'error', '@typescript-eslint/no-empty-interface': 'off' },
}
