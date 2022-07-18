import React from 'react'
import { createComponentModel, Disposable, MODELS, useXFlowApp } from '@antv/xflow-core'
import type { IProps, IFlowchartNode, IRegisterNode } from './interface'
import { nodeService } from './utils'
import { isArray } from 'lodash'

export namespace NsPanelData {
  export const id = 'NODE_PANEL_DATA'
  export interface IState {
    nodeList: IFlowchartNode[]
    defaultExpandAll: boolean
    keyword: string
    searchList: IFlowchartNode[]
  }
}

/** 节点查找 */
const DefaultsearchService = async (nodeList = [], keyword: string) => {
  const list = nodeList.filter(
    i => i.isDirectory || i.label?.includes(keyword) || i.name?.includes(keyword),
  )
  return list
}

export const usePanelData = (props: IProps) => {
  const { searchService = DefaultsearchService } = props

  const registerNode = (
    props.registerNode
      ? isArray(props.registerNode)
        ? props.registerNode
        : [props.registerNode]
      : []
  ) as IRegisterNode[]

  let nodes = []

  registerNode.forEach(item => {
    nodes = nodes.concat(
      item.nodes.map(node => ({
        ...node,
        parentKey: item.key,
      })),
    )
  })

  const { modelService } = useXFlowApp()

  /** 使用model */
  const [state, setState, panelModel] = createComponentModel<NsPanelData.IState>({
    searchList: [],
    nodeList: [],
    defaultExpandAll: false,
    keyword: '',
  })

  /** 注册成为全局状态，方便其他组件联动 */
  React.useEffect(() => {
    if (modelService.findDeferredModel(NsPanelData.id)) {
      return
    }

    modelService.registerModel({
      id: NsPanelData.id,
      modelFactory: () => panelModel,
      watchChange: async self => {
        const graphMetaModel = await MODELS.GRAPH_META.getModel(modelService) //useContext(MODELS.GRAPH_META.id)
        const fetch = async () => {
          const listData = await nodeService(nodes)
          return { listData }
        }

        const graphMetaDisposable = graphMetaModel.watch(async () => {
          const data = await fetch()
          self.setValue({
            nodeList: data.listData,
            defaultExpandAll: false,
            keyword: '',
            searchList: [],
          })
        })

        return Disposable.create(() => {
          graphMetaDisposable.dispose()
        })
      },
    })

    /* eslint-disable-next-line  */
  }, [])

  /** 搜索 */
  const onKeywordChange = React.useCallback(
    async (keyword: string) => {
      if (!searchService) {
        return
      }
      if (keyword) {
        // @ts-ignore
        const list = await searchService(state.nodeList, keyword)
        setState(modelState => {
          modelState.keyword = keyword
          modelState.searchList = list
        })
      } else {
        setState(modelState => {
          modelState.keyword = ''
          modelState.searchList = []
        })
      }
    },
    [searchService, state.nodeList, setState],
  )

  return {
    state,
    setState,
    onKeywordChange,
  }
}
