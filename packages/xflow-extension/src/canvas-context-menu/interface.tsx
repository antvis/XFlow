import { MODELS } from '@antv/xflow-core'
import type { ContextMenuConfig } from './config'
import type {
  IAnchor,
  IMenuModel,
  IMenuTarget,
  IModelService,
  DisposableCollection,
} from '@antv/xflow-core'

export interface IProps {
  config: ContextMenuConfig
}

export namespace CONTEXT_MENU_MODEL {
  export const id = 'CONTEXT_MENU_MODEL'
  export interface IState {
    anchor: IAnchor
    target: IMenuTarget
    customRender: React.FC<IMenuRenderProps>
    menuModel: IMenuModel
    toDispose: DisposableCollection
  }

  export const useValue = MODELS.useModelValueUtil<IState>(id)
  export const getModel = MODELS.getModelUtil<IState>(id)
}

export interface IMenuRenderProps {
  target: IMenuTarget
  modelService: IModelService
  onHide: () => void
}
