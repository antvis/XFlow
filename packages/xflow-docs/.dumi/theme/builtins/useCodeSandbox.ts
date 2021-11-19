import { useState, useEffect } from 'react'
import less from 'less'
import LZString from 'lz-string'
import type { ICbsData, IPreviewerComponentProps } from './type'

const CSB_API_ENDPOINT = 'https://codesandbox.io/api/v1/sandboxes/define'

// ref: https://github.com/codesandbox/codesandbox-importers/blob/master/packages/import-utils/src/api/define.ts
function serialize(data: Record<string, any>) {
  return LZString.compressToBase64(JSON.stringify(data))
    .replace(/\+/g, '-') // Convert '+' to '-'
    .replace(/\//g, '_') // Convert '/' to '_'
    .replace(/=+$/, '') // Remove ending '='
}

function getTextContent(raw: string) {
  const elm = document.createElement('span')

  elm.innerHTML = raw
  const text = elm.textContent
  elm.remove()

  return text
}

async function cbsHook(data: ICbsData, props: IPreviewerComponentProps) {
  const { className = [] } = props
  try {
    const cssList = await Promise.all(
      Object.entries(data)
        .filter(([filename, value]) => {
          return filename.includes('.less')
        })
        .map(async ([filename, content]) => {
          const options = {
            javascriptEnabled: true,
          }
          const { css } = await less.render(content, options)
          const cssFilename = filename.replace('.less', '.css')
          data[cssFilename] = css
          data[
            filename
          ] = `//codesandbox does not support less very well, less is compiled to ${cssFilename} `
          return css
        }),
    )

    const mainCss = cssList.reduce((acc, output) => acc + '\n' + output, '')
    data['index.html'] = `
    <style type="text/css">
    #root .xflow-app-workspace{
      height:100% !important
    }
    
    ${mainCss}
    </style>
    <div style="height:100vh" id="root" class="${className.join(' ')}"></div>
    `
  } catch (error) {
    data['index.html'] = `
    <style type="text/css">
     less compile error
    </style>
    <div style="height:100%" id="root" class="${className.join(' ')}"></div>
    `
  }

  return data
}

function addXFlowDeps(deps) {
  deps['@ant-design/icons-svg'] = '4.2.1'
}

/**
 * get serialized data that use to submit to codesandbox.io
 * @param opts  previewer props
 */
async function getCSBData(opts: IPreviewerComponentProps) {
  const isTSX = Boolean(opts.sources._.tsx)
  const ext = isTSX ? '.tsx' : '.jsx'
  const files: Record<string, { content: string }> = {}
  const deps: Record<string, string> = {}
  const CSSDeps = Object.values(opts.dependencies).filter(dep => dep.css)
  const appFileName = `App${ext}`
  const entryFileName = `index${ext}`

  // generate dependencies
  Object.entries(opts.dependencies).forEach(([dep, { version }]) => {
    deps[dep] = version
  })
  // add extra codesandbox dependencies
  addXFlowDeps(deps)

  // add react-dom dependency
  if (!deps['react-dom']) {
    deps['react-dom'] = deps.react || 'latest'
  }

  // generate dependencies
  Object.entries(opts.dependencies).forEach(([dep, { version }]) => {
    deps[dep] = version
  })

  // add react-dom dependency
  if (!deps['react-dom']) {
    deps['react-dom'] = deps.react || 'latest'
  }
  const cbsRawData: ICbsData = {
    'sandbox.config.json': {
      template: 'parcel', //isTSX ? 'create-react-app-typescript' : 'create-react-app',
    },
    'package.json': {
      name: opts.title,
      description: getTextContent(opts.description) || 'An auto-generated demo by dumi',
      main: entryFileName,
      dependencies: deps,
      // add TypeScript dependency if required, must in devDeps to avoid csb compile error
      devDependencies: isTSX ? { typescript: '^4' } : {},
    },
    // app.tsx
    [entryFileName]: `
    /**
    * This is an auto-generated demo by dumi
    * if you think it is not working as expected,
    * please report the issue at
    * https://github.com/umijs/dumi/issues
    **/
    
import React from 'react';
import ReactDOM from 'react-dom';
${CSSDeps.map(({ css }) => `import '${css}';`).join('\n')}
import App from './App';
    
ReactDOM.render(
 <App />,
document.getElementById('root'),
);`,
    // index.html
    'index.html': `
      <div style="height:100%" id="root"></div>
    `,
  }

  // append other imported local files
  Object.entries(opts.sources).forEach(([filename, { tsx, jsx, content }]) => {
    const key = filename === '_' ? appFileName : filename
    cbsRawData[key] = tsx || jsx || content
  })

  const cbsData = cbsHook ? await cbsHook(cbsRawData, opts) : cbsRawData

  // append other imported local files
  Object.entries(cbsData).forEach(([filename, value]) => {
    // handle primary content
    files[filename] = {
      content: typeof value === 'string' ? value : JSON.stringify(value, null, 2),
    }
  })

  return serialize({ files })
}

/**
 * use CodeSandbox.io
 * @param opts  previewer opts
 * @note  return a open function for open demo on codesandbox.io
 */
export const useCodeSandbox = (
  opts: IPreviewerComponentProps | null,
  api: string = CSB_API_ENDPOINT,
) => {
  const [handler, setHandler] = useState<(...args: any) => void | undefined>()

  useEffect(() => {
    const form = document.createElement('form')
    const input = document.createElement('input')
    form.method = 'POST'
    form.target = '_blank'
    form.style.display = 'none'
    form.action = api
    form.appendChild(input)
    form.setAttribute('data-demo', opts.title || '')
    const compile = async () => {
      const data = await getCSBData(opts)
      input.name = 'parameters'
      input.value = data
      document.body.appendChild(form)
      setHandler(() => () => form.submit())
    }

    if (opts) {
      compile()
    }

    return () => form.remove()
  }, [opts])

  return handler
}
