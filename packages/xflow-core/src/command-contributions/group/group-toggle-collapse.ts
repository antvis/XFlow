import { inject, injectable, postConstruct } from 'mana-syringe'
import type { Cell, Graph, Node as X6Node } from '@antv/x6'
import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
import type { IContext, IArgsBase } from '../../command/interface'
import type { NsGraph } from '../../interface'
import { XFlowGroupCommands } from '../constant'
import { Disposable } from '../../common/disposable'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import { XFLOW_GROUP_DEFAULT_COLLAPSED_SIZE } from '../../constants'

type ICommand = ICommandHandler<
  NsCollapseGroup.IArgs,
  NsCollapseGroup.IResult,
  NsCollapseGroup.ICmdHooks
>

export namespace NsCollapseGroup {
  export const command = XFlowGroupCommands.COLLAPSE_GROUP
  export const hookKey = 'collapseGroup'
  export interface IArgs extends IArgsBase {
    /** 折叠的group node id */
    nodeId: string
    /** 是否折叠 */
    isCollapsed: boolean
    /** 折叠后的大小 */
    collapsedSize?: { width: number; height: number }
    /** 间距 */
    gap?: number
    /** 更新群组是否折叠的状态，返回false时不执行 */
    toggleService?: IToggleGroupCollapseService
  }
  /** add group api service 类型 */
  export interface IToggleGroupCollapseService {
    (args: IArgs): Promise<boolean>
  }
  export interface IResult {
    err: null | string
  }
  export interface ICmdHooks extends IHooks {
    collapseGroup: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsCollapseGroup.command.id },
})
/** 添加子节点命令 */
export class CollapseGroupCommand implements ICommand {
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  ctx: IContext<NsCollapseGroup.IArgs, NsCollapseGroup.IResult, NsCollapseGroup.ICmdHooks>

  @postConstruct()
  init() {
    this.ctx = this.contextProvider()
  }

  toggleVisible = (cells: Cell[], visible: boolean, graph: Graph) => {
    cells.forEach(cell => {
      const view = graph.findViewByCell(cell).container as HTMLElement
      view.style.visibility = visible ? 'visible' : 'hidden'
    })
  }

  toggleCollapse = (groupNode: X6Node, graph: Graph, args: NsCollapseGroup.IArgs) => {
    const childrens = groupNode.getChildren().filter(n => n.isNode()) as X6Node[]
    const groupData = groupNode.getData<NsGraph.INodeConfig>()
    const { isCollapsed, gap = 0 } = args
    if (isCollapsed) {
      const collapsedSize =
        args.collapsedSize || groupData.groupCollapsedSize || XFLOW_GROUP_DEFAULT_COLLAPSED_SIZE
      groupNode.prop('previousSize', groupNode.size())
      groupNode.size(collapsedSize)
    } else {
      groupNode.size(groupNode.prop('previousSize'))
    }

    if (childrens) {
      childrens.forEach(item => {
        const position = groupNode.position()
        const innerEdges = graph.getConnectedEdges(item).filter(edge => {
          const sourceNode = edge.getSourceNode()
          const targetNode = edge.getTargetNode()
          return childrens.includes(sourceNode) && childrens.includes(targetNode)
        })
        if (isCollapsed) {
          this.toggleVisible([item, ...innerEdges], false, graph)
          item.prop('previousSize', item.size())
          item.prop('previousRelativePosition', item.position({ relative: true }))
          item.position(position.x + gap, position.y + gap)
          const size = groupNode.size()
          item.size({
            width: size.width - gap * 2,
            height: size.height - gap * 2,
          })
        } else {
          this.toggleVisible([item, ...innerEdges], true, graph)
          const pos = item.prop('previousRelativePosition')
          const size = item.prop('previousSize')
          item.position(pos.x, pos.y, { relative: true })
          item.size(size)
        }
      })
    }

    groupNode.prop('isCollapsed', isCollapsed)
    groupNode.setData({
      ...groupNode.getData(),
      isCollapsed,
    })
  }

  execute = async () => {
    const { args, hooks: runtimeHook } = this.ctx.getArgs()
    const hooks = this.ctx.getHooks()

    const result = await hooks.collapseGroup.call(
      args,
      async handlerArgs => {
        const x6Graph = await this.ctx.getX6Graph()
        const node = x6Graph.getCellById(args.nodeId) as X6Node
        const { toggleService } = handlerArgs

        if (toggleService) {
          const canToggle = await toggleService(handlerArgs)
          if (!canToggle) return { err: 'service rejected' }
        }

        if (node) {
          this.toggleCollapse(node, x6Graph, args)
          this.ctx.addUndo(
            Disposable.create(async () => {
              if (node) {
                this.toggleCollapse(
                  node,
                  x6Graph,
                  Object.assign(args, { isCollapsed: !args.isCollapsed }),
                )
              }
            }),
          )
        }

        return { err: null }
      },
      runtimeHook,
    )
    this.ctx.setResult(result)

    return this
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
