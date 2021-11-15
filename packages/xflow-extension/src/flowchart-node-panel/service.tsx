import React from 'react'
import { createComponentModel, Disposable, MODELS, useXFlowApp, uuidv4 } from '@antv/xflow-core'
import { IProps, ITreeNode } from './interface'
import { nodeService } from './utils'
// import { NsPanelData} from '@antv/xflow-core/es/canvas-node-tree-panel/service'
export namespace NsPanelData {
  export const id = 'NODE_PANEL_DATA'
  export interface IState {
    nodeList: ITreeNode[]
    defaultExpandAll: boolean
    keyword: string
    searchList: ITreeNode[]
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
  const { registerNode, searchService = DefaultsearchService } = props
  const { nodes } = registerNode ?? {}
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

    modelService.registerModel<NsPanelData.IState>({
      id: NsPanelData.id,
      modelFactory: () => panelModel,
      watchChange: async self => {
        const graphMetaModel = await MODELS.GRAPH_META.getModel(modelService) //useContext(MODELS.GRAPH_META.id)
        const fetch = async (meta: MODELS.GRAPH_META.IState) => {
          const listData = await nodeService(nodes)
          console.log('listData', listData)
          return { listData }
        }

        const graphMetaDisposable = graphMetaModel.watch(async meta => {
          const data = await fetch(meta)
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
