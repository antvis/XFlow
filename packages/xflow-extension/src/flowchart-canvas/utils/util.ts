import type { IApplication } from '@antv/xflow-core'
import type { Graph } from '@antv/x6'
import { debounce } from 'lodash'

// 解决配置共享问题
export const globalProps = {
  config: {},
}

export const setProps = props => {
  globalProps.config = Object.assign({}, globalProps.config, props)
}
export const getProps = (key: string) => {
  return globalProps.config?.[key]
}

const graphInstance = new Map<string, Graph>()
const appInstance = new Map<string, IApplication>()

export const setInstance = async (app?: IApplication) => {
  const x6graph = await app.getGraphInstance()
  graphInstance.set('x6graph', x6graph)
  appInstance.set('app', app)
}

export const getGraphInstance = () => {
  return graphInstance.get('x6graph') as Graph
}

export const getAppInstance = () => {
  return appInstance.get('app')
}

export const getGraphData = async () => {
  const app = getAppInstance()
  return app.getGraphData()
}

/** 更新配置时通知上传执行保存 */
export const onConfigChange = debounce(
  config => {
    const configChange = getProps('onConfigChange')
    if (!configChange || typeof configChange !== 'function') {
      return
    }
    return configChange({
      data: getGraphData(),
      ...config,
    })
  },
  300,
  {
    trailing: true,
  },
)
