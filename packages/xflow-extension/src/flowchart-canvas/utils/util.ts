import { IApplication, XFlowGraphCommands, NsGraphCmd } from '@antv/xflow-core'
import { Graph } from '@antv/x6'

// 解决配置共享问题
export const globalProps = {
  config: {},
}

export const setProps = props => {
  globalProps.config = props
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
  let data
  await app.executeCommand(XFlowGraphCommands.SAVE_GRAPH_DATA.id, {
    saveGraphDataService: async (graphMeta, graphData) => {
      data = graphData
    },
  } as NsGraphCmd.SaveGraphData.IArgs)
  return data
}
/**
 * 防抖函数
 * @param func 执行函数
 * @param delay 延迟时间 ms
 * @param immediate 是否立即执行
 */
export const debounce = (func: Function, delay: number, immediate: boolean = false): Function => {
  let timer: number | undefined

  return function (this: unknown, ...args: any[]) {
    let that = this
    if (immediate) {
      func.apply(that, args)
      immediate = false
      return
    }
    clearTimeout(timer)
    timer = window.setTimeout(() => {
      func.apply(that, args)
    }, delay)
  }
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
  true,
)
