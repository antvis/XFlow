import type { HookHub } from '@antv/xflow-hook'
import type { NsGraph } from '../../interface'
import type { IHooks } from '../../hooks/interface'
import type { IArgsBase } from '../../command/interface'
import { inject, injectable } from 'mana-syringe'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import { XFlowGraphCommands } from '../constant'
import { Disposable } from '../../common/disposable'
import { cellsToJson } from '../../common/graph-utils'
import { LOCAL_STORAGE_KEY } from '../../constants'
import type { Cell } from '@antv/x6'

type ICommand = ICommandHandler<
  NsGraphCopySelection.IArgs,
  NsGraphCopySelection.IResult,
  NsGraphCopySelection.ICmdHooks
>

export namespace NsGraphCopySelection {
  /** Command: 用于注册named factory */
  export const command = XFlowGraphCommands.GRAPH_COPY
  /** hookName */
  export const hookKey = 'graphCopySelection'
  /** hook 参数类型 */
  export type IArgs = IArgsBase
  /** hook handler 返回类型 */
  export interface IResult {
    err: null | string
  }
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    graphCopySelection: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsGraphCopySelection.command.id },
})
/** 创建节点命令 */
export class GraphCopySelectionCommand implements ICommand {
  /** api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  parseCells = (cells: Cell[]) => {
    // if groupNode add its group children
    cells.forEach(cell => {
      const data = cell.getData()
      if (cell.isNode() && data.isGroup) {
        const children = cell.getChildren()
        children.forEach(child => {
          cells.push(child)
        })
      }
    })
    // filter edges target not in selections
    const nodeIds = cells.filter(cell => cell.isNode()).map(cell => cell.id)
    const map = cells.reduce((acc, cell) => {
      if (cell.isEdge()) {
        const source = cell.getSourceCellId()
        const target = cell.getTargetCellId()
        if (source && target) {
          if (nodeIds.includes(source) && nodeIds.includes(target)) {
            acc.set(cell.id, cell)
          }
        }
      } else {
        acc.set(cell.id, cell)
      }
      return acc
    }, new Map<string, Cell>())
    const uniqeList = Array.from(map.values())
    return cellsToJson(uniqeList)
  }
  /** 执行Cmd */
  execute = async () => {
    const ctx = this.contextProvider()
    const { args, hooks: runtimeHook } = ctx.getArgs()
    const hooks = ctx.getHooks()

    const result = await hooks.graphCopySelection.call(
      args,
      async () => {
        const graph = await ctx.getX6Graph()
        const cells = graph.getSelectedCells()
        // 处理 Group cells/过滤无效的edges
        const jsonObject: NsGraph.IGraphData = this.parseCells(cells)
        const oldJsonString = window.localStorage.getItem(LOCAL_STORAGE_KEY)
        // 写cache
        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(jsonObject))
        // undo 写cache
        ctx.addUndo(
          Disposable.create(async () => {
            window.localStorage.setItem(LOCAL_STORAGE_KEY, oldJsonString)
          }),
        )
        return { err: null }
      },
      runtimeHook,
    )
    ctx.setResult(result)
    return this
  }

  /** undo cmd */
  undo = async () => {
    const ctx = this.contextProvider()
    if (this.isUndoable()) {
      ctx.undo()
    }
    return this
  }

  /** redo cmd */
  redo = async () => {
    if (!this.isUndoable()) {
      await this.execute()
    }
    return this
  }

  isUndoable(): boolean {
    const ctx = this.contextProvider()
    return ctx.isUndoable()
  }
}
