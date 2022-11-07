import postcss from 'rollup-plugin-postcss'
import { config } from '../../rollup.config'

export default config({
  output: [
    {
      name: 'XFlow',
      format: 'umd',
      file: 'dist/index.js',
      sourcemap: true,
    },
  ],
  plugins: [
    postcss({
      minimize: true,
      sourceMap: false,
      extensions: ['.less', '.css'],
      use: [['less', { javascriptEnabled: true }]],
    }),
  ],
})
