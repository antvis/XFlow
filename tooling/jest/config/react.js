/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  ...require('./base'),
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg)$': 'identity-obj-proxy',
  },
};
