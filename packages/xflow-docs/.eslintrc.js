module.exports = {
  extends: [require.resolve('../../.eslintrc.js')],
  parserOptions: {
    tsconfigRootDirs: ['./docs'],
    project: 'tsconfig.json',
  },
  rules: { 'react-hooks/exhaustive-deps': 'warn', 'import/no-extraneous-dependencies': 0 },
}
