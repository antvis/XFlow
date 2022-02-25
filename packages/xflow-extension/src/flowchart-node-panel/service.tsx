import React from 'react'
import { createComponentModel, Disposable, MODELS, useXFlowApp } from '@antv/xflow-core'
import type { IProps, ITreeData, ISearchNodes } from './interface'
import { nodeService } from './utils'

export namespace NsPanelData {
  export const id = 'NODE_PANEL_DATA'
  export interface IState {
    defaultExpandAll: boolean
    keyword: string
    treeData: ITreeData
    searchNodes: ISearchNodes
    expandedKeys: string[]
  }
}

const DefaultsearchService = async (treeData: ITreeData = {}, keyword: string) => {
  const nodeTypes = Object.keys(treeData);
  const searchNodes = {};
  nodeTypes.forEach((type) => {
    searchNodes[type] = treeData[type].nodes.filter((i) => i.label?.includes(keyword) || i.name?.includes(keyword));
  });
  return searchNodes;
};

export const usePanelData = (props: IProps) => {
  const { registerNode, searchService = DefaultsearchService } = props
  //const { nodes } = registerNode ?? {}
  const { modelService } = useXFlowApp()

  /** 使用model */
  const [state, setState, panelModel] = createComponentModel<NsPanelData.IState>({
    treeData: {},
    searchNodes: {},
    expandedKeys: [],
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
        const fetch = async () => {
          const treeData = await nodeService(registerNode)
          const expandedKeys = []
          return { treeData, expandedKeys }
        }

        const graphMetaDisposable = graphMetaModel.watch(async () => {
          const data = await fetch()
          self.setValue({
            treeData: data.treeData,
            expandedKeys: data.expandedKeys,
            defaultExpandAll: false,
            keyword: '',
            searchNodes: {},
          })
        })

        return Disposable.create(() => {
          graphMetaDisposable.dispose()
        })
      },
    })

    /* eslint-disable-next-line  */
  }, [])

  const onKeywordChange = React.useCallback(
    async (keyword: string) => {
      if (!searchService) {
        return
      }
      if (keyword) {
        const searchNodes = await searchService(state.treeData, keyword)
        setState(modelState => {
          modelState.keyword = keyword
          modelState.searchNodes = searchNodes
        })
      } else {
        setState(modelState => {
          modelState.keyword = ''
          modelState.searchNodes = {}
        })
      }
    },
    [searchService, state.treeData, setState],
  )

  return {
    state,
    setState,
    onKeywordChange,
  }
}
