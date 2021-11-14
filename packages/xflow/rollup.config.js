import postcss from 'rollup-plugin-postcss'
import NpmImport from 'less-plugin-npm-import'
import config from '../../config/rollup-config'

export default config({
  input: './src/index.tsx',
  output: [
    {
      name: 'XFlow',
      format: 'umd',
      file: 'dist/index.umd.js',
      sourcemap: true,
      globals: {
        antd: 'antd',
        react: 'React',
        lodash: 'lodash',
        'react-dom': 'ReactDOM',
        // '@antv/layout': 'layout',
        // '@antv/x6': 'X6',
        // '@antv/x6-react-shape': 'X6ReactShape',
        // '@antv/x6-react-components': 'X6ReactComponents',
      },
    },
  ],
  external: [
    'antd',
    'react',
    'lodash',
    'react-dom',
    // '@antv/layout',
    // '@antv/x6',
    // '@antv/x6-react-shape',
    // '@antv/x6-react-components',
  ],
  plugins: [
    postcss({
      minimize: true,
      sourceMap: false,
      extensions: ['.less', '.css'],
      use: [
        [
          'less',
          {
            plugins: [new NpmImport({ prefix: '~' })],
            javascriptEnabled: true,
          },
        ],
      ],
    }),
  ],
})
