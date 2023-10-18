const { spawn } = require('child_process');

const { yellow } = require('colorette');
const svgr = require('esbuild-plugin-svgr');
const { defineConfig } = require('tsup');

/**
 *
 * @param {string} outDir
 * @returns
 */
const emitDeclarations = (outDir) =>
  new Promise((resolve, reject) => {
    const timer = `${yellow('TSC')} .d.ts generated in`;
    console.time(timer);
    console.log(yellow('TSC'), 'Generating .d.ts');
    const proc = spawn(
      'tsc',
      [
        '--emitDeclarationOnly',
        '--declaration',
        '--declarationMap',
        '--skipLibCheck',
        '--declarationDir',
        outDir,
      ],
      { stdio: ['ignore', 'ignore', 'ignore'] },
    );
    proc.on('exit', () => {
      console.timeEnd(timer);
      resolve();
    });
    proc.on('error', reject);
  });

module.exports = defineConfig((overrides) => ({
  outDir: 'dist',
  format: ['esm', 'cjs'],
  outExtension: ({ format }) => ({ js: `.${format}.js` }),
  sourcemap: true,
  dts: false,
  loader: {
    '.less': 'copy',
  },
  esbuildPlugins: [svgr()],
  onSuccess: () => emitDeclarations('./dist/typing'),
  clean: overrides.clean || !overrides.watch,
}));
