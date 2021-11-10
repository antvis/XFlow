import { defineConfig } from 'dumi'

// dumi（用于组件开发、Demo 编写）的配置项，请访问:
// https://d.umijs.org/config
export default defineConfig({
  title: 'XFlow',
  mode: 'site',
  logo: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
  favicon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
  // publicPath: process.env.NODE_ENV === 'production' ? basementPublicPath : '/',
  runtimePublicPath: true,
  resolve: {
    includes: ['docs'],
  },
  ssr: {
    devServerRender: false,
  },
  outputPath: 'dist',
  hash: true,
  devtool: 'eval',
  extraBabelIncludes: [
    '@antv/xflow',
    '@antv/xflow-core',
    '@antv/xflow-extension',
    'dumi-theme-graphin',
  ],
  dynamicImport: {},
  exportStatic: {},
  theme: {
    '@s-site-menu-width': '280px',
    '@primary-color': '#873bf4',
  },
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  navs: {
    'zh-CN': [
      null,
      { title: 'GitHub', path: 'https://github.com/alibaba/hooks' },
      { title: '更新日志', path: 'https://github.com/alibaba/hooks/releases' },
    ],
    'en-US': [
      null,
      { title: 'GitHub', path: 'https://github.com/alibaba/hooks' },
      { title: 'Changelog', path: 'https://github.com/alibaba/hooks/releases' },
    ],
  },
  styles: ['.__dumi-default-previewer-demo{ min-height: 290px }'],
  /** css */
  links: [],
  /** js */
  scripts: [],
})
