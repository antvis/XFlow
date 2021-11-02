module.exports = {
  extends: ['../../.eslintrc.js'],
  files: ['*.ts', '*.tsx'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  rules: { 'react-hooks/exhaustive-deps': 'warn' },
}
