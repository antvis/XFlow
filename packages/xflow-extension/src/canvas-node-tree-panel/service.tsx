import React from 'react'
import uniqBy from 'lodash/uniqBy'
import cloneDeep from 'lodash/cloneDeep'
import type { IModelService, NsModelServiceCmd, IGraphCommandService } from '@antv/xflow-core'
import {
  // utils
  Disposable,
  // context
  useXFlowApp,
  // models
  MODELS,
  createComponentModel,
  // commands
  XFlowModelCommands,
} from '@antv/xflow-core'

import type { IProps, ITreeNode } from './interface'
import { TREE_ROOT_ID } from './constants'

export namespace NsNodeTreePanelModel {
  export const id = 'TREE_PANEL_MODEL'
  export interface IState {
    treeNodeList: ITreeNode[]
    treeData: ITreeNode[]
    expandedKeys: string[]
    defaultExpandAll: boolean
    keyword: string
    searchList: ITreeNode[]
  }
  export const useModel = async (model: IModelService) => {
    return model.awaitModel<IState>(id)
  }
}

/** 方便其他组件执行Command改变Panel内部状态 */
export const executeNodeDndTreeCommand = (
  cmds: IGraphCommandService,
  updateModel: (state: NsNodeTreePanelModel.IState) => Promise<void>,
) => {
  cmds.executeCommand<NsModelServiceCmd.UpdateModelCommand.IArgs<NsNodeTreePanelModel.IState>>(
    XFlowModelCommands.UPDATE_MODEL.id,
    {
      getModel: async modelService => {
        return NsNodeTreePanelModel.useModel(modelService)
      },
      updateModel: updateModel,
    },
  )
}

export const useTreePanelData = (props: IProps) => {
  const { treeDataService, searchService } = props
  const { modelService } = useXFlowApp()
  /** 使用model */
  const [state, setState, panelModel] = createComponentModel<NsNodeTreePanelModel.IState>({
    treeData: [],
    searchList: [],
    treeNodeList: [],
    expandedKeys: [],
    defaultExpandAll: false,
    keyword: '',
  })
  /** 注册成为全局状态，方便其他组件联动 */
  React.useEffect(() => {
    if (modelService.findDeferredModel(NsNodeTreePanelModel.id)) {
      return
    }
    modelService.registerModel({
      id: NsNodeTreePanelModel.id,
      modelFactory: () => panelModel,
      watchChange: async self => {
        const graphMetaModel = await MODELS.GRAPH_META.getModel(modelService) //useContext(MODELS.GRAPH_META.id)
        const fetch = async meta => {
          const listData = await treeDataService(meta, modelService)
          const { treeData, rootNodes } = NodeList2Tree(listData)
          const currentState = await self.getValidValue()
          // 设置默认展开的keys
          const expandedKeys =
            currentState.expandedKeys.length > 0
              ? currentState.expandedKeys
              : rootNodes.map(i => i.id)

          return { listData, treeData, expandedKeys }
        }

        const graphMetaDisposable = graphMetaModel.watch(async meta => {
          const data = await fetch(meta)
          self.setValue({
            treeNodeList: data.listData,
            treeData: data.treeData,
            expandedKeys: data.expandedKeys,
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

  /** 折叠文件夹 */
  const onFolderExpand = React.useCallback(
    (expandedKeys: string[]) => {
      setState(modelState => {
        modelState.expandedKeys = expandedKeys
      })
    },
    [setState],
  )

  /** 搜索 */
  const onKeywordChange = React.useCallback(
    async (keyword: string) => {
      if (!searchService) {
        return console.warn('searchService is not defined')
      }
      if (keyword) {
        const list = await searchService(state.treeNodeList, keyword)
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
    // eslint-disable-next-line
    [searchService, state.treeNodeList],
  )
  return {
    state,
    setState,
    onKeywordChange,
    onFolderExpand,
  }
}

// 将list数据转换为树
export function NodeList2Tree(treeNodes: ITreeNode[] = []) {
  const getGroupByIdMap = (list: ITreeNode[]) => {
    const uniqList = uniqBy(list, 'id')
    const groups = uniqList.reduce((map, node) => {
      const parentId = node.parentId || TREE_ROOT_ID
      if (!map.has(parentId)) {
        map.set(parentId, [])
      }
      const group = map.get(parentId)
      group.push(node)
      return map
    }, new Map<string, ITreeNode[]>())
    return groups
  }

  const groupMap = getGroupByIdMap(cloneDeep(treeNodes))

  function iterator(nodes: ITreeNode[], groupMapArgs: Map<string, ITreeNode[]>) {
    return nodes.map(node => {
      if (groupMapArgs.has(node.id)) {
        const children = groupMapArgs.get(node.id)
        node.key = node.id
        node.isDirectory = true
        node.children = iterator(children, groupMapArgs) || []
      } else {
        node.isLeaf = true
      }
      return node
    })
  }

  const rootNodes = groupMap.get(TREE_ROOT_ID) || []
  const treeData = iterator(rootNodes, groupMap)
  return { treeData, rootNodes }
}
