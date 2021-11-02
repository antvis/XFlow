module.exports = {
  extends: '@umijs/fabric/dist/eslint',
  files: ['*.ts', '*.tsx'],
  parserOptions: {
    tsconfigRootDirs: ['./src', './docs'],
    project: 'tsconfig.json',
  },
  rules: { 'react-hooks/exhaustive-deps': 'warn', 'import/no-extraneous-dependencies': 0 },
}
