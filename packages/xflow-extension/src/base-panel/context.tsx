import React from 'react'
import type { IGraphCommandService, IModelService } from '@antv/xflow-core'
import type { PropsProxy } from './config'

interface IContext<T = any> {
  propsProxy: PropsProxy<T>
  commandService: IGraphCommandService
  modelService: IModelService
}

export const PanelContext = React.createContext<IContext>({
  propsProxy: null,
  commandService: null,
  modelService: null,
})

export const usePanelContext = <T extends unknown>() =>
  React.useContext(PanelContext) as IContext<T>
