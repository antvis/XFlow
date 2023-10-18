import { defineConfig } from 'umi';

import { routes } from './routes';

export default defineConfig({
  routes,
  npmClient: 'pnpm',
  https: {},
  svgr: {},
  title: 'XFlow Basic',
  favicons: ['/favicon.ico'],
  mfsu: false,
});
