import type { Syringe } from 'mana-syringe'
import type { IGraphCommand } from '../../command/interface'
import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'

/** commands */
import { NsAddEdge, AddEdgeCommand } from './edge-add'
import { NsDelEdge, DelEdgeCommand } from './edge-del'
import { NsUpdateEdge, UpdateEdgeCommand } from './edge-update'
import { NsHighlightEdge, HighlightEdgeCommand } from './edge-highlight'
import { NsFrontEdge, FrontEdgeCommand } from './edge-front'
import { NsBackEdge, BackEdgeCommand } from './edge-back'
import type { Simplify } from '../../common/types'
/** 注册Command Handler Class */
export const registerEdgeCommand = (register: Syringe.Register) => {
  register(AddEdgeCommand)
  register(DelEdgeCommand)
  register(UpdateEdgeCommand)
  register(HighlightEdgeCommand)
  register(FrontEdgeCommand)
  register(BackEdgeCommand)
}

/** app onStart 时, 注册 Command Hooks */
export const hookhubList: {
  hookKey: string
  command: IGraphCommand
  createHook?: () => HookHub
}[] = [NsAddEdge, NsDelEdge, NsUpdateEdge, NsHighlightEdge, NsFrontEdge, NsBackEdge]

/** 扩展 Command Hooks 类型*/
export interface ICmdHooks
  extends NsAddEdge.ICmdHooks,
    NsDelEdge.ICmdHooks,
    NsUpdateEdge.ICmdHooks,
    NsHighlightEdge.ICmdHooks,
    NsFrontEdge.ICmdHooks,
    NsBackEdge.ICmdHooks,
    IHooks {}

/** Command 参数类型*/
export namespace NsEdgeCmd {
  export namespace AddEdge {
    export type IArgs = Simplify<NsAddEdge.IArgs>
    export type IResult = Simplify<NsAddEdge.IResult>
  }

  export namespace DelEdge {
    export type IArgs = Simplify<NsDelEdge.IArgs>
    export type IResult = Simplify<NsDelEdge.IResult>
  }

  export namespace UpdateEdge {
    export type IArgs = Simplify<NsUpdateEdge.IArgs>
    export type IResult = Simplify<NsUpdateEdge.IResult>
  }

  export namespace HighlightEdge {
    export type IArgs = Simplify<NsHighlightEdge.IArgs>
    export type IResult = Simplify<NsHighlightEdge.IResult>
  }

  export namespace FrontEdge {
    export type IArgs = Simplify<NsFrontEdge.IArgs>
    export type IResult = Simplify<NsFrontEdge.IResult>
  }

  export namespace BackEdge {
    export type IArgs = Simplify<NsBackEdge.IArgs>
    export type IResult = Simplify<NsBackEdge.IResult>
  }
}
