import type { Syringe } from 'mana-syringe'
import type { IGraphCommand } from '../../command/interface'
import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
/** commands */
import { NsAddNode, AddNodeCommand } from './node-add'
import { NsDelNode, DelNodeCommand } from './node-del'
import { NsMoveNode, MoveNodeCommand } from './node-move'
import { NsUpdateNode, UpdateNodeCommand } from './node-update'
import { NsCenterNode, CenterNodeCommand } from './node-center'
import { NsFrontNode, FrontNodeCommand } from './node-front'
import { NsBackNode, BackNodeCommand } from './node-back'
import { NsHighlightNode, HighlightNodeCommand } from './node-highlight'
import type { Simplify } from '../../common/types'

/** 注册Command Handler Class */
export const registerNodeCommand = (register: Syringe.Register) => {
  register(AddNodeCommand)
  register(DelNodeCommand)
  register(MoveNodeCommand)
  register(UpdateNodeCommand)
  register(CenterNodeCommand)
  register(FrontNodeCommand)
  register(BackNodeCommand)
  register(HighlightNodeCommand)
}

/** app onStart 时, 注册 Command Hooks */
export const hookhubList: {
  command: IGraphCommand
  hookKey: string
  createHook?: () => HookHub
}[] = [
  NsAddNode,
  NsDelNode,
  NsMoveNode,
  NsUpdateNode,
  NsCenterNode,
  NsFrontNode,
  NsBackNode,
  NsHighlightNode,
]

/** 扩展 Command Hooks 类型*/
export interface ICmdHooks
  extends NsAddNode.ICmdHooks,
    NsMoveNode.ICmdHooks,
    NsDelNode.ICmdHooks,
    NsUpdateNode.ICmdHooks,
    NsCenterNode.ICmdHooks,
    NsFrontNode.ICmdHooks,
    NsBackNode.ICmdHooks,
    NsHighlightNode.ICmdHooks,
    IHooks {}

/** Command 参数类型*/
export namespace NsNodeCmd {
  export namespace AddNode {
    export type IArgs = Simplify<NsAddNode.IArgs>
    export type IResult = Simplify<NsAddNode.IResult>
  }
  export namespace DelNode {
    export type IArgs = Simplify<NsDelNode.IArgs>
    export type IResult = Simplify<NsDelNode.IResult>
  }
  export namespace MoveNode {
    export type IArgs = Simplify<NsMoveNode.IArgs>
    export type IResult = Simplify<NsMoveNode.IResult>
  }

  export namespace UpdateNode {
    export type IArgs = Simplify<NsUpdateNode.IArgs>
    export type IResult = Simplify<NsUpdateNode.IResult>
  }

  export namespace CenterNode {
    export type IArgs = Simplify<NsCenterNode.IArgs>
    export type IResult = Simplify<NsCenterNode.IResult>
  }

  export namespace FrontNode {
    export type IArgs = Simplify<NsFrontNode.IArgs>
    export type IResult = Simplify<NsFrontNode.IResult>
  }

  export namespace BackNode {
    export type IArgs = Simplify<NsBackNode.IArgs>
    export type IResult = Simplify<NsBackNode.IResult>
  }

  export namespace HighlightNode {
    export type IArgs = Simplify<NsHighlightNode.IArgs>
    export type IResult = Simplify<NsHighlightNode.IResult>
  }
}
