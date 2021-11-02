/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  displayName: '@antv/xflow-core',
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
  },
}
