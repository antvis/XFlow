import React from 'react'
import type { NsModelServiceCmd, IGraphCommandService } from '@antv/xflow-core'
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

import type { IPanelNode, IProps } from './interface'
import { NsCollapsePanelModel } from './interface'

/** 方便其他组件执行Command改变Panel内部状态 */
export const executeCollapsePanelCommand = (
  cmds: IGraphCommandService,
  updateModel: (state: NsCollapsePanelModel.IState) => Promise<void>,
) => {
  cmds.executeCommand<NsModelServiceCmd.UpdateModelCommand.IArgs<NsCollapsePanelModel.IState>>(
    XFlowModelCommands.UPDATE_MODEL.id,
    {
      getModel: async modelService => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return NsCollapsePanelModel.useModel(modelService)
      },
      updateModel: updateModel,
    },
  )
}

/** 方便其他组件执行Command改变Panel内部状态 */
export const useCollapsePanelData = (props: IProps) => {
  const { collapsible, nodeDataService, searchService, onCollapseChange } = props
  const { modelService } = useXFlowApp()
  /** 创建model */
  const [state, setState, panelModel] = createComponentModel<NsCollapsePanelModel.IState>({
    /** service: onKeywordChange */
    keyword: '',
    /** 展开的key id */
    collapseData: [],
    /** 搜索结果 */
    searchResult: [],
  })
  /** 注册model成为全局状态，方便其他组件联动 */
  React.useEffect(() => {
    if (modelService.findDeferredModel(NsCollapsePanelModel.id)) {
      return
    }
    modelService.registerModel({
      id: NsCollapsePanelModel.id,
      modelFactory: () => panelModel,
      watchChange: async self => {
        const graphMetaModel = await MODELS.GRAPH_META.getModel(modelService) //useContext(MODELS.GRAPH_META.id)
        const fetch = async meta => {
          const data = await nodeDataService(meta, modelService)

          return { collapseData: data }
        }

        const graphMetaDisposable = graphMetaModel.watch(async meta => {
          const { collapseData } = await fetch(meta)
          self.setValue(m => {
            m.keyword = ''
            m.collapseData = collapseData
            m.searchResult = []
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
  const onActiveKeyChange = React.useCallback(
    (activeKey: string) => {
      setState(modelState => {
        modelState.collapseData.forEach(item => {
          if (item.id === activeKey && item.collapsible !== false) {
            item.isCollapsed = !item.isCollapsed
          }
        })
      })
    },
    [setState],
  )

  /** 搜索 */
  const onKeywordChange = React.useCallback(
    async (keyword: string, panelNodes: IPanelNode[]) => {
      if (!searchService) {
        return console.warn('searchService is not defined')
      }
      if (keyword) {
        const searchResult = await searchService(panelNodes, keyword)
        setState(modelState => {
          modelState.keyword = keyword
          modelState.searchResult = searchResult
        })
      } else {
        setState(modelState => {
          modelState.keyword = ''
          modelState.searchResult = []
        })
      }
    },
    // eslint-disable-next-line
    [searchService],
  )
  return {
    state,
    collapsible,
    setState,
    onKeywordChange,
    onActiveKeyChange,
    onCollapseChange,
  }
}
