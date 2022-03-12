import type { IToolbarProps,} from '../canvas-toolbar'
import type {IToolbarCustomRenderProps } from '../canvas-toolbar/interface'
import type {IGraphCommandService, IModelService} from '@antv/xflow-core'
export interface IFlowchartToolbarProps extends Omit<IToolbarProps, 'config'> {
  getCustomRenderComponent: ICustomRender
}

export interface ICustomRender {
  (
    modelService: IModelService,
    commandService: IGraphCommandService,
  ): React.FC<IToolbarCustomRenderProps > | null
}
