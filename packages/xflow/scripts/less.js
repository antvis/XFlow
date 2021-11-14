#!/usr/bin/env node

const fs = require('fs')
const os = require('os')
const path = require('path')
const fse = require('fs-extra')
const cp = require('child_process')

const cwd = process.cwd()
const es = path.join(cwd, 'es')
const lib = path.join(cwd, 'lib')
const src = path.join(cwd, 'src')
const dist = path.join(cwd, 'dist')

function compile(source, target) {
  try {
    let cmd = './node_modules/.bin/lessc'
    if (os.type() === 'Windows_NT') {
      cmd = path.join(cwd, './node_modules/.bin/lessc.cmd')
    }

    cp.execFileSync(cmd, [
      // lessc cli: https://lesscss.org/usage/#plugins
      // https://www.npmjs.com/package/less-plugin-npm-import
      '--npm-import=prefix=~',
      //https://lesscss.org/usage/#command-line-usage-relative-urls
      '--rewrite-urls=all',
      // enable javascriptEnabled
      '--js',
      source,
      target,
    ])
  } catch (error) {
    console.log(error, source, target)
  }
}

// Copy less files
function readdir(dir) {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir)
    files.forEach(file => {
      const sub = path.join(dir, file)

      const stat = fs.statSync(sub)
      if (stat && stat.isDirectory()) {
        readdir(sub)
      } else {
        // console.log('find less file, compiling', sub)
        const ext = path.extname(file)
        if (ext === '.less' || ext === '.css') {
          const less = path.relative(src, sub)
          const name = less.substr(0, less.length - ext.length)
          console.log(name)
          fse.copySync(sub, path.join(es, less))
          fse.copySync(sub, path.join(lib, less))

          compile(sub, path.join(es, `${name}.css`))
          compile(sub, path.join(lib, `${name}.css`))
        }
      }
    })
  }
}

function ensureDistIsCreated() {
  const dirs = [es, lib]
  dirs.forEach(dir => {
    const dirPath = path.join(dir, 'style')
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath)
      console.log('dir is created:', dirPath)
    }
  })
}

function rollup() {
  console.log('Generate "style/components.less"')

  let content = ''
  fs.readdir(src, (err, files) => {
    files.forEach(file => {
      const sub = path.join(file, 'style', 'index.less')
      if (fs.existsSync(path.join(src, sub))) {
        content += `@import "../${sub}";\n`
      }
    })
    const source = path.join(es, 'style', 'components.less')
    fs.writeFileSync(source, content)
    fs.writeFileSync(path.join(lib, 'style', 'components.less'), content)
    compile(source, path.join(es, 'style', 'components.css'))
    compile(source, path.join(lib, 'style', 'components.css'))
    compile(source, path.join(dist, 'index.css'))
  })
}

console.log('Build less files')
fs.readdir(src, (err, files) => {
  // compile less
  files.forEach(file => {
    const dir = file === 'style' ? path.join(src, file) : path.join(src, file, 'style')
    readdir(dir)
  })
  // create dist for styles
  ensureDistIsCreated()
  // Build components in one file: lib/style/components.less
  rollup()
})
