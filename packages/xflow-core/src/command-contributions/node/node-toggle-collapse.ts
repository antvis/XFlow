import { inject, injectable, postConstruct } from 'mana-syringe'
import type { Graph, Node as X6Node } from '@antv/x6'
import { Disposable } from '../../common/disposable'
import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
import { XFlowNodeCommands } from '../constant'
import type { IContext, IArgsBase } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import { NsAddGroup } from '../group/group-add'
import type { NsGraph } from '../../interface'

type ICommand = ICommandHandler<
  NsToggleCollapse.IArgs,
  NsToggleCollapse.IResult,
  NsToggleCollapse.ICmdHooks
>

export namespace NsToggleCollapse {
  export const command = XFlowNodeCommands.ToggleCollapse
  export const hookKey = 'toggleCollapse'
  export interface IArgs extends IArgsBase {
    nodeId: string
    collapse: boolean
    size: { width: number; height: number }
  }
  export interface IResult {}
  export interface ICmdHooks extends IHooks {
    toggleCollapse: HookHub<IArgs, IResult>
  }

  export interface IBBox {
    width: number
    height: number
    x: number
    y: number
  }
  export const GROUP_PADDING = 12
  export const GROUP_HEADER_HEIGHT = 40
}

@injectable({
  token: { token: ICommandHandler, named: NsToggleCollapse.command.id },
})
/** 添加子节点命令 */
export class ToggleCollapseCommand implements ICommand {
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  ctx: IContext<NsToggleCollapse.IArgs, NsToggleCollapse.IResult, NsToggleCollapse.ICmdHooks>

  @postConstruct()
  init() {
    this.ctx = this.contextProvider()
  }

  toggleCollapse = (node: X6Node, collapse: boolean, graph: Graph) => {
    const cells = node.getChildren()
    if (cells) {
      cells.forEach(cell => {
        const view = graph.findViewByCell(cell).container as HTMLElement
        if (collapse) {
          view.style.visibility = 'hidden'
        } else {
          view.style.visibility = 'visible'
        }
      })
    }
    node.prop('previousSize', node.size())
    node.prop('isCollapse', collapse)
  }

  execute = async () => {
    const { args, hooks: runtimeHook } = this.ctx.getArgs()
    const hooks = this.ctx.getHooks()

    const result = await hooks.toggleCollapse.call(
      args,
      async handlerArgs => {
        const x6Graph = await this.ctx.getX6Graph()
        const { nodeId, collapse, size } = handlerArgs
        const node = x6Graph?.getCellById(nodeId) as X6Node
        if (node) {
          this.toggleCollapse(node, collapse, x6Graph)

          if (collapse && size) {
            node.size(size)
          } else {
            const positions = node.getChildren().map(nodeCell => nodeCell.getBBox())
            node.size(this.getBBox(positions, node.getData()))
          }
        }

        this.ctx.addUndo(
          Disposable.create(async () => {
            if (node) {
              this.toggleCollapse(node, !collapse, x6Graph)
              node.size(node.prop('previousSize'))
            }
          }),
        )
        return {}
      },
      runtimeHook,
    )
    this.ctx.setResult(result)

    return this
  }

  getBBox = (list: NsToggleCollapse.IBBox[], nodeConfig: NsGraph.INodeConfig) => {
    const {
      groupHeaderHeight = NsAddGroup.GROUP_HEADER_HEIGHT,
      groupPadding = NsAddGroup.GROUP_PADDING,
    } = nodeConfig
    let minX = null
    let minY = null
    let maxX = null
    let maxY = null
    list.forEach(({ x, y, width, height }) => {
      minX = minX === null ? x : Math.min(minX, x)
      minY = minY === null ? y : Math.min(minY, y)
      maxX = maxX === null ? x + width : Math.max(maxX, x + width)
      maxY = maxY === null ? y + height : Math.max(maxY, y + height)
    })
    const bbox = {
      minX: minX - groupPadding,
      minY: minY - groupHeaderHeight - groupPadding,
      maxX: maxX + groupPadding,
      maxY: maxY + groupPadding,
      width: 0,
      height: 0,
    }
    bbox.width = bbox.maxX - bbox.minX
    bbox.height = bbox.maxY - bbox.minY
    return bbox
  }

  undo = async () => {
    this.ctx.undo()
    return this
  }

  redo = async () => {
    if (!this.ctx.isUndoable) {
      await this.execute()
    }
    return this
  }

  isUndoable(): boolean {
    return this.ctx.isUndoable()
  }
}
