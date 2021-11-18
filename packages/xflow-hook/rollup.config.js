import config from '../../config/rollup-config'

export default config({
  input: './src/index.ts',
  output: [
    {
      name: 'XFlowHook',
      format: 'umd',
      file: 'dist/index.umd.js',
      sourcemap: true,
      globals: {},
    },
  ],
  external: [],
  plugins: [],
})
