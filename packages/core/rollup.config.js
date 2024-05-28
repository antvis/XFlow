import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

export default () => {
  return {
    input: './src/index.ts',
    plugins: [
      typescript({ declaration: false }),
      resolve(),
      commonjs(),
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      terser(),
      filesize(),
      postcss(),
    ],
    output: [
      {
        name: 'XFlow',
        format: 'umd',
        file: 'dist/index.umd.js',
        sourcemap: true,
      },
    ],
  };
};
