module.exports = {
  root: true,
  extends: [require.resolve('@antv/config-eslint')],
  ignorePatterns: ['vendor/**/'],
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
  },
};
