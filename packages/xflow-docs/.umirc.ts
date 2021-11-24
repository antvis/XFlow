import { defineConfig } from 'dumi'
const isProduction = process.env.NODE_ENV === 'production'

// dumi（用于组件开发、Demo 编写）的配置项，请访问:
// https://d.umijs.org/config
export default defineConfig({
  title: 'XFlow',
  mode: 'site',
  logo: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
  favicon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
  // publicPath: process.env.NODE_ENV === 'production' ? basementPublicPath : '/',
  esbuild: {},
  runtimePublicPath: true,
  resolve: {
    includes: ['docs'],
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
  analytics: isProduction ? { ga: 'G-32VJDHHH69' } : false,
  ssr: {
    devServerRender: false,
  },
  dynamicImport: {},
  exportStatic: {},
  theme: {
    '@s-site-menu-width': '280px',
    '@primary-color': '#873bf4',
  },
  locales: [
    ['zh', 'CN'],
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  navs: {
    zh: [null, { title: 'GitHub', path: 'https://github.com/antvis/XFlow' }],
    'zh-CN': [null, { title: 'GitHub', path: 'https://github.com/antvis/XFlow' }],
    'en-US': [null, { title: 'GitHub', path: 'https://github.com/antvis/XFlow' }],
  },
  styles: ['.__dumi-default-previewer-demo{ min-height: 290px }'],
  /** css */
  links: [],
  /** js */
  scripts: [],
  chunks: isProduction ? ['umi.styles', 'vendors', 'umi'] : undefined,
  chainWebpack: function (config, { webpack }) {
    if (isProduction) {
      config.optimization.splitChunks({
        ...config.optimization.get('splitChunks'),
        cacheGroups: {
          ...(config.optimization.get('splitChunks')?.cacheGroups || {}),
          mergedStyles: {
            name: 'umi.styles',
            test: /\.(less|s?css)$/,
            chunks: 'all',
            reuseExistingChunk: true,
            enforce: true,
            priority: 11,
          },
          vendor: {
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
          },
        },
      })
    }
  },
})
