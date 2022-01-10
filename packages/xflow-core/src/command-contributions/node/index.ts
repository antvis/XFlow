import type { Syringe } from 'mana-syringe'
import type { IGraphCommand } from '../../command/interface'
import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
import type { Simplify } from '../../common/types'
/** commands */
import { NsAddNode, AddNodeCommand } from './node-add'
import { NsDelNode, DelNodeCommand } from './node-del'
import { NsSelectNode, SelectNodeCommand } from './node-select'
import { NsMoveNode, MoveNodeCommand } from './node-move'
import { NsUpdateNode, UpdateNodeCommand } from './node-update'
import { NsCenterNode, CenterNodeCommand } from './node-center'
import { NsFrontNode, FrontNodeCommand } from './node-front'
import { NsBackNode, BackNodeCommand } from './node-back'
import { NsHighlightNode, HighlightNodeCommand } from './node-highlight'
import { NsUpdateNodePort, UpdateNodePort } from './node-update-port'

/** 注册Command Handler Class */
export const registerNodeCommand = (register: Syringe.Register) => {
  register(AddNodeCommand)
  register(DelNodeCommand)
  register(SelectNodeCommand)
  register(MoveNodeCommand)
  register(UpdateNodeCommand)
  register(CenterNodeCommand)
  register(FrontNodeCommand)
  register(BackNodeCommand)
  register(HighlightNodeCommand)
  register(UpdateNodePort)
}

/** app onStart 时, 注册 Command Hooks */
export const hookhubList: {
  command: IGraphCommand
  hookKey: string
  createHook?: () => HookHub
}[] = [
  NsAddNode,
  NsDelNode,
  NsSelectNode,
  NsMoveNode,
  NsUpdateNode,
  NsCenterNode,
  NsFrontNode,
  NsBackNode,
  NsHighlightNode,
  NsUpdateNodePort,
]

/** 扩展 Command Hooks 类型*/
export interface ICmdHooks
  extends NsAddNode.ICmdHooks,
    NsDelNode.ICmdHooks,
    NsSelectNode.ICmdHooks,
    NsMoveNode.ICmdHooks,
    NsUpdateNode.ICmdHooks,
    NsCenterNode.ICmdHooks,
    NsFrontNode.ICmdHooks,
    NsBackNode.ICmdHooks,
    NsHighlightNode.ICmdHooks,
    NsUpdateNodePort.ICmdHooks,
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
  export namespace SelectNode {
    export type IArgs = Simplify<NsSelectNode.IArgs>
    export type IResult = Simplify<NsSelectNode.IResult>
  }
  export namespace MoveNode {
    export type IArgs = Simplify<NsMoveNode.IArgs>
    export type IResult = Simplify<NsMoveNode.IResult>
  }

  // eslint-disable-next-line @typescript-eslint/no-shadow
  export namespace UpdateNodePort {
    export type IArgs = Simplify<NsUpdateNodePort.IArgs>
    export type IResult = Simplify<NsUpdateNodePort.IResult>
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
