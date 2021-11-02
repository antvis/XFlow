import type { Syringe } from 'mana-syringe'
import type { IGraphCommand } from '../../command/interface'
import type { HookHub } from '@antv/xflow-hook'

import { NsAddGroup, AddGroupCommand } from './group-add'
import { NsDelGroup, DelGroupCommand } from './group-del'
import { NsInitGroup, InitGroupCommand } from './group-init'
import { NsCollapseGroup, CollapseGroupCommand } from './group-toggle-collapse'
import type { IHooks } from '../../hooks/interface'
import type { Simplify } from '../../common/types'
/** 注册Command Handler Class */
export const registerGroupCommand = (register: Syringe.Register) => {
  register(AddGroupCommand)
  register(DelGroupCommand)
  register(InitGroupCommand)
  register(CollapseGroupCommand)
}

/** app onStart 时, 注册 Command Hooks */
export const hookhubList: {
  command: IGraphCommand
  hookKey: string
  createHook?: () => HookHub
}[] = [NsAddGroup, NsDelGroup, NsInitGroup, NsCollapseGroup]

/** Command hook类型*/
export interface ICmdHooks
  extends NsDelGroup.ICmdHooks,
    NsAddGroup.ICmdHooks,
    NsInitGroup.ICmdHooks,
    NsCollapseGroup.ICmdHooks,
    IHooks {}

/** Command 参数类型*/
export namespace NsGroupCmd {
  export namespace AddGroup {
    export type IArgs = Simplify<NsAddGroup.IArgs>
    export type IResult = Simplify<NsAddGroup.IResult>
  }
  export namespace DelGroup {
    export type IArgs = Simplify<NsDelGroup.IArgs>
    export type IResult = Simplify<NsDelGroup.IResult>
  }
  export namespace InitGroup {
    export type IArgs = Simplify<NsInitGroup.IArgs>
    export type IResult = Simplify<NsInitGroup.IResult>
  }
  export namespace CollapseGroup {
    export type IArgs = Simplify<NsCollapseGroup.IArgs>
    export type IResult = Simplify<NsCollapseGroup.IResult>
  }
}
