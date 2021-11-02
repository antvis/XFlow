import type { Syringe } from 'mana-syringe'
import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
import type { IGraphCommand } from '../../command/interface'

/** commands */
import { NsUpdateModelCommand, UpdateModelCommand } from './update-model'

/** 注册Command Handler Class */
export const registerModelServiceCommand = (register: Syringe.Register) => {
  register(UpdateModelCommand)
}

/** app onStart 时, 注册 Command Hooks */
export const hookhubList: {
  command: IGraphCommand
  hookKey: string
  createHook?: () => HookHub
}[] = [NsUpdateModelCommand]

/** 扩展 Command Hooks 类型*/
export interface ICmdHooks extends NsUpdateModelCommand.ICmdHooks, IHooks {}

/** Command 参数类型*/
export namespace NsModelServiceCmd {
  //eslint-disable-next-line @typescript-eslint/no-shadow
  export namespace UpdateModelCommand {
    export type IArgs<T> = NsUpdateModelCommand.IArgs<T>
    export type IResult<T> = NsUpdateModelCommand.IResult<T>
  }
}
