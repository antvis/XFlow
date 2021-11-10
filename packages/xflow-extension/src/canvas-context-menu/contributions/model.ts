import type { IMenuOptions } from '@antv/xflow-core'
import {
  ManaSyringe,
  DisposableCollection,
  MenuItemType,
  IModelContribution,
  IModelService,
  RxModel,
  Disposable,
} from '@antv/xflow-core'
import { MODELS } from '@antv/xflow-core'
import { CONTEXT_MENU_MODEL } from '../interface'
import { ContextMenuConfig } from '../config'

const { inject, singleton } = ManaSyringe
/**
 * IModelContribution
 */
@singleton({ contrib: [IModelContribution] })
export class CanvasContextMenuContribution implements IModelContribution {
  /** 注册 model */
  toDispose = new DisposableCollection()

  /** 注册 model */
  @inject(ContextMenuConfig)
  menuConfig: ContextMenuConfig

  @inject(IModelService)
  modelService: IModelService

  /** 获取 MenuModel */
  getMenuModelValue = async (contextMenuInfo: MODELS.CONTEXTMENU_TARGET.IState) => {
    const config = await this.menuConfig.getConfig()
    /** 获取坐标 */
    const { anchor, type, cell } = contextMenuInfo
    /** 获取Menu */
    const toDispose = new DisposableCollection()
    this.toDispose.push(toDispose)
    const data = cell ? cell.getData<any>() : null
    const menuModel = new RxModel<IMenuOptions>({
      id: 'menuroot',
      type: MenuItemType.Root,
      submenu: [],
    })
    toDispose.push(
      Disposable.create(() => {
        menuModel.dispose()
      }),
    )
    const renderProps: CONTEXT_MENU_MODEL.IState = {
      toDispose,
      anchor: anchor,
      target: { data, type },
      customRender: null,
      menuModel: menuModel,
    }

    if (config.menuCustomRender) {
      renderProps.customRender = await config.menuCustomRender(contextMenuInfo, this.modelService)
    }

    if (config.menuModelService) {
      await config.menuModelService(
        contextMenuInfo,
        renderProps.menuModel,
        this.modelService,
        toDispose,
      )
    }

    return renderProps
  }

  /** 注册 MenuModel */
  registerModel(registry: IModelService): void {
    const toDispose = [
      registry.registerModel<CONTEXT_MENU_MODEL.IState>({
        id: CONTEXT_MENU_MODEL.id,
        getInitialValue: () => null,
        watchChange: async (self, modelService) => {
          const contextMenuModel = await MODELS.CONTEXTMENU_TARGET.getModel(modelService)
          return contextMenuModel.watch(async contextMenuInfo => {
            const contextMenuValue = await this.getMenuModelValue(contextMenuInfo)
            self.setValue(contextMenuValue)
          })
        },
      }),
    ]
    this.toDispose.pushAll(toDispose)
  }
}
