import { singleton, inject } from 'mana-syringe'
import { IGraphCommandService } from '../../command/interface'
import { COMMAND_REDOABLE, COMMAND_UNDOABLE } from '../constant'
import type { IModelService } from '../interface'
import { IModelContribution } from '../interface'

@singleton({ contrib: IModelContribution })
export class CommandModelContribution implements IModelContribution {
  /** 获取IGraphCommandService的状态 */
  @inject(IGraphCommandService) commands: IGraphCommandService

  /** 扩展Model */
  registerModel(registry: IModelService): void {
    /** 是否可以redo */
    registry.registerModel<COMMAND_REDOABLE.IState>({
      id: COMMAND_REDOABLE.id,
      getInitialValue: () => this.commands.isRedoable,
      watchChange: async model => {
        const disposable = this.commands.watchChange(() => {
          model.setValue(this.commands.isRedoable)
        })
        return disposable
      },
    })
    /** 是否可以undo */
    registry.registerModel<COMMAND_UNDOABLE.IState>({
      id: COMMAND_UNDOABLE.id,
      getInitialValue: () => this.commands.isUndoable,
      watchChange: async model => {
        const disposable = this.commands.watchChange(() => {
          model.setValue(this.commands.isUndoable)
        })
        return disposable
      },
    })
  }
}
