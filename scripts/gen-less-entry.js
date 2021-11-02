const fs = require('fs')
const path = require('path')
const cwd = fs.realpathSync(process.cwd())
const resolvePath = relativePath => path.resolve(cwd, relativePath)

function createLessEntry() {
  const LIB_COMPONENTS_PATH = resolvePath('./lib')
  const ES_COMPONENTS_PATH = resolvePath('./es')
  const UNPK_FILE_PATH = resolvePath('./dist')
  const ROOT_STYLE_PATH = path.join(LIB_COMPONENTS_PATH, 'style', 'index.less')
  console.log(LIB_COMPONENTS_PATH, UNPK_FILE_PATH)

  fs.readdir(LIB_COMPONENTS_PATH, (err, files) => {
    const initialContent = fs.existsSync(ROOT_STYLE_PATH)
      ? fs.readFileSync(ROOT_STYLE_PATH, 'utf8')
      : ''
    const componentsLessContent = files.reduce((content, file) => {
      const folderStylePath = path.join(LIB_COMPONENTS_PATH, file, 'style', 'index.less')
      if (fs.existsSync(folderStylePath)) {
        return `${content}@import "../${path.join(file, 'style', 'index.less')}";\n`
      }
      return content
    }, initialContent)
    fs.writeFileSync(path.join(LIB_COMPONENTS_PATH, 'style', 'index.less'), componentsLessContent)
    fs.writeFileSync(path.join(ES_COMPONENTS_PATH, 'style', 'index.less'), componentsLessContent)
  })

  // eslint-disable-next-line no-console
  console.log('Wrote less entry into lib/style/index.less')

  fs.writeFileSync(path.join(UNPK_FILE_PATH, 'index.less'), '@import "../lib/style/index.less";')

  // eslint-disable-next-line no-console
  console.log('Wrote less entry file into dist/index.less')
}

module.exports = { createLessEntry }
