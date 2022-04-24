const CracoLessPlugin = require('craco-less-fix')
const WebpackBar = require('webpackbar')

module.exports = {
  webpack: {
    plugins: [new WebpackBar({ profile: true })],
  },
  babel: {
    plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
