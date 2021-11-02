/**
 * 解决father-build不能提取umd的css的问题
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('react-dev-utils/ForkTsCheckerWebpackPlugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const fs = require('fs')
const path = require('path')
const cwd = fs.realpathSync(process.cwd())
const resolvePath = relativePath => path.resolve(cwd, relativePath)

const getWebpackConfig = library => {
  return {
    entry: {
      index: './src/index.tsx',
      'index.min': './src/index.tsx',
    },
    output: {
      filename: '[name].js',
      library: library,
      libraryTarget: 'umd',
      path: resolvePath('./dist'),
      globalObject: 'this',
    },
    mode: 'production',
    resolve: {
      mainFields: ['module', 'main'],
      extensions: ['.ts', '.tsx', '.js', '.json'],
      modules: ['node_modules'],
    },
    optimization: {
      minimize: true,
      minimizer: [
        // minify js https://www.npmjs.com/package/terser-webpack-plugin
        new TerserPlugin({
          include: /\.min\.js$/,
        }),
        new OptimizeCSSAssetsPlugin({
          include: /\.min\.js$/,
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif|svg)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        },
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          include: [path.resolve('src')],
          loader: require.resolve('babel-loader'),
          options: {
            customize: require.resolve('babel-preset-react-app/webpack-overrides'),
            presets: [
              [
                require.resolve('babel-preset-react-app'),
                {
                  runtime: 'classic',
                },
              ],
            ],
            plugins: [
              [
                require.resolve('babel-plugin-named-asset-import'),
                {
                  loaderMap: {
                    svg: {
                      ReactComponent: '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                    },
                  },
                },
              ],
            ].filter(Boolean),
            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
            // See #6846 for context on why cacheCompression is disabled
            cacheCompression: false,
            compact: true,
          },
        },
        {
          test: /\.(js|mjs)$/,
          exclude: /@babel(?:\/|\\{1,2})runtime/,
          loader: require.resolve('babel-loader'),
          options: {
            babelrc: false,
            configFile: false,
            compact: false,
            presets: [[require.resolve('babel-preset-react-app/dependencies'), { helpers: true }]],
            cacheDirectory: true,
            // See #6846 for context on why cacheCompression is disabled
            cacheCompression: false,
            // Babel sourcemaps are needed for debugging into node_modules
            // code.  Without the options below, debuggers like VSCode
            // show incorrect code and set breakpoints on the wrong lines.
            sourceMaps: true,
            inputSourceMap: true,
          },
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader', // creates style nodes from JS strings
            },
            {
              loader: 'css-loader', // translates CSS into CommonJS
            },
          ],
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: (resourcePath, context) =>
                  `${path.relative(path.dirname(resourcePath), context)}/`,
              },
            },
            {
              loader: 'css-loader', // translates CSS into CommonJS
            },
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  javascriptEnabled: true,
                },
              },
            },
          ],
        },
      ],
    },
    externals: [
      {
        react: 'React',
        antd: 'antd',
        'react-dom': 'ReactDOM',
        'antd/es/config-provider': {
          commonjs: ['antd', 'ConfigProvider'],
          commonjs2: ['antd', 'ConfigProvider'],
          amd: ['antd', 'ConfigProvider'],
          root: ['antd', 'ConfigProvider'],
        },
      },
    ],
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      new ForkTsCheckerWebpackPlugin({
        eslint: undefined,
      }),
    ],
    performance: {
      hints: false,
    },
  }
}
module.exports = { getWebpackConfig }
