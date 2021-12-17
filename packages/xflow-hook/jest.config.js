/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  displayName: 'xflow-hook',
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'node',
  transform: { '\\.[jt]sx?$': 'babel-jest', '\\.ts?$': 'babel-jest' },
}
