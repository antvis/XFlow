import type {
  IModelService,
  IModuleConfig,
  RxModel,
  IMenuOptions,
  DisposableCollection,
} from '@antv/xflow-core'
import { uuidv4 } from '@antv/xflow-core'
import type { MODELS } from '@antv/xflow-core'
import type { IMenuRenderProps } from './interface'

export namespace NsContextMenu {
  export const CONFIG_TYPE = 'ContextMenuConfig'
  export interface IMenuModelService {
    (
      data: MODELS.CONTEXTMENU_TARGET.IState,
      model: RxModel<IMenuOptions>,
      modelService: IModelService,
      toDispose: DisposableCollection,
    ): Promise<void>
  }
  export interface ICustomRender {
    (data: MODELS.CONTEXTMENU_TARGET.IState, modelService: IModelService): Promise<
      React.FC<IMenuRenderProps>
    >
  }

  export interface IContextMenuData extends MODELS.CONTEXTMENU_TARGET.IState {
    targetData: any
  }

  export interface IConfig {
    CONFIG_TYPE: string
    menuModelService?: IMenuModelService
    menuCustomRender?: ICustomRender
  }
}

export class ContextMenuConfig implements IModuleConfig {
  /** config type */
  readonly CONFIG_TYPE = NsContextMenu.CONFIG_TYPE
  /** menu model service */
  private menuModelService!: NsContextMenu.IMenuModelService
  /** menu menuRender */
  private menuCustomRender!: NsContextMenu.ICustomRender
  /** instance id */
  readonly moduleId: string
  /** uuid */
  constructor(moduleId?: string) {
    this.moduleId = moduleId || uuidv4()
  }
  /** 设置组件的props */
  setMenuModelService = (service: NsContextMenu.IMenuModelService) => {
    this.menuModelService = service
  }
  /** 设置组件的props */
  setCustomMenuRender = (service: NsContextMenu.ICustomRender) => {
    this.menuCustomRender = service
  }
  /** 获取Props */
  getConfig = async () => {
    return {
      CONFIG_TYPE: this.CONFIG_TYPE,
      menuCustomRender: this.menuCustomRender,
      menuModelService: this.menuModelService,
    }
  }
  /** dispose */
  dispose() {}
}
