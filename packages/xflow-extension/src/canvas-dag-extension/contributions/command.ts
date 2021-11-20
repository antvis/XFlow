import type { HookHub } from '@antv/xflow-hook'
import type { IArgsBase } from '@antv/xflow-core'
import type { IHooks } from '@antv/xflow-core'
import { ManaSyringe, ICommandHandler, ICommandContextProvider, delay } from '@antv/xflow-core'
import { XFlowDagCommands, GRAPH_STATUS_INFO, EDGE_PROCESSING_CLASSNAME } from '../constants'

import type { Graph as X6Graph, Node as X6Node } from '@antv/x6'

type ICommand = ICommandHandler<
  NsGraphStatusCommand.IArgs,
  NsGraphStatusCommand.IResult,
  NsGraphStatusCommand.ICmdHooks
>

export namespace NsGraphStatusCommand {
  /** Command: 获取执行状态 */
  export const MODEL = GRAPH_STATUS_INFO
  /** Command: 用于注册 named factory */
  export const command = XFlowDagCommands.QUERY_GRAPH_STATUS
  /** hookName */
  export const hookKey = 'queryGraphStatus'
  /** hook 参数类型 */
  export interface IArgs extends IArgsBase {
    loop?: boolean
    loopInterval?: number
    doOnce?: (args: IArgs) => Promise<IArgs>
    graphStatusService: IStatusService
    shouldStop?: (status: IStatusInfo, args: IArgs) => Promise<boolean>
    ctx?: any
  }
  /** hook handler 返回类型 */
  export interface IResult {}
  /**  api service 类型 */
  export interface IStatusService {
    (args: IArgs): Promise<IStatusInfo>
  }
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    queryGraphStatus: HookHub<IArgs, IResult>
  }
  /** 状态 类型 */
  export enum StatusEnum {
    SUCCESS = 'success',
    PROCESSING = 'processing',
    ERROR = 'error',
    DEFAULT = 'default',
    WARNING = 'warning',
  }
  /** 节点状态 类型 */
  export interface INodeStatus {
    status: StatusEnum
    [key: string]: any
  }
  /** 接口返回 类型 */
  export interface IStatusInfo {
    graphStatus: StatusEnum
    statusMap: Record<string, INodeStatus>
  }
  /** 接口返回 类型 */
  export type IStatusMap = Record<NsGraphStatusCommand.StatusEnum, string[]>
  /** 按status 分类  */
  export const initStatusMap = () => ({
    [NsGraphStatusCommand.StatusEnum.DEFAULT]: [],
    [NsGraphStatusCommand.StatusEnum.PROCESSING]: [],
    [NsGraphStatusCommand.StatusEnum.ERROR]: [],
    [NsGraphStatusCommand.StatusEnum.WARNING]: [],
    [NsGraphStatusCommand.StatusEnum.SUCCESS]: [],
  })
  /** 接口返回 类型 */
  export const groupByStatus = (data: Record<string, INodeStatus>) => {
    const seed: IStatusMap = initStatusMap()
    return Object.entries(data).reduce((acc, [nodeId, value]) => {
      acc[value.status].push(nodeId)
      return acc
    }, seed)
  }
  /** diff status */
  export const statusDiff = (cur: any[], next: any[]) => {
    const items = new Set([...cur, ...next])
    const diff = { current: [], add: [], remove: [] }
    items.forEach(item => {
      if (next.includes(item) && !cur.includes(item)) {
        diff.add.push(item)
      }
      if (!next.includes(item) && cur.includes(item)) {
        diff.remove.push(item)
      }
    })
    return diff
  }
  export const shouldStop = async (info: IStatusInfo) => {
    return [StatusEnum.ERROR, StatusEnum.SUCCESS].includes(info.graphStatus)
  }
}
/** 创建节点命令 */
@ManaSyringe.injectable({
  token: { token: ICommandHandler, named: NsGraphStatusCommand.command.id },
})
export class QueryGraphStatusCommand implements ICommand {
  /** api */
  @ManaSyringe.inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']
  /** 状态缓存 */
  statusInfo: NsGraphStatusCommand.IStatusMap = NsGraphStatusCommand.initStatusMap()
  /** 判断是否循环 */
  isLooping: boolean
  /** X6Graph */
  x6Graph: X6Graph
  /** 获取Model */
  getStatusModel = async () => {
    const ctx = this.contextProvider()
    const modelService = ctx.getModelService()
    const statusModel = await GRAPH_STATUS_INFO.getModel(modelService)
    return statusModel
  }
  /** 更新Model数据 */
  updateModelValue = async (callback: (state: GRAPH_STATUS_INFO.IState) => void) => {
    const statusModel = await this.getStatusModel()
    statusModel.setValue(callback)
  }
  /** 停止Looping的flag */
  stopCurrentStatusLooping = async () => {
    const statusModel = await this.getStatusModel()
    const { subscription } = await statusModel.getValidValue()
    subscription.dispose()
  }
  /** 设置停止looping的方法 */
  addStopDispose = async () => {
    const statusModel = await this.getStatusModel()
    const { subscription } = await statusModel.getValidValue()
    subscription.push({
      dispose: () => {
        /** 重制processing的边的状态 */
        this.updateEdges(this.statusInfo, NsGraphStatusCommand.initStatusMap())
        this.isLooping = false
      },
    })
  }
  /** 更新Graph的数据 */
  updateGraph = (
    curStatusInfo: NsGraphStatusCommand.IStatusMap,
    nextStatusMap: NsGraphStatusCommand.IStatusMap,
    statusMap: Record<string, NsGraphStatusCommand.INodeStatus>,
  ) => {
    /** 更新节点 */
    this.updateNodes(curStatusInfo, nextStatusMap, statusMap)
    /** 更新边 */
    this.updateEdges(curStatusInfo, nextStatusMap)
  }
  /** 更新节点数据 */
  updateNodeData = (id, data: NsGraphStatusCommand.INodeStatus) => {
    const cell = this.x6Graph.getCellById(id) as X6Node
    if (!cell) {
      return
    }
    cell.setData({ ...cell.getData(), ...cell.getSize(), ...cell.getPosition(), ...data })
  }
  /** 更新连线数据 */
  updateNodes = (
    curStatusInfo: NsGraphStatusCommand.IStatusMap,
    nextStatusMap: NsGraphStatusCommand.IStatusMap,
    statusMap: Record<string, NsGraphStatusCommand.INodeStatus>,
  ) => {
    Object.keys(curStatusInfo).forEach(status => {
      const nodes = NsGraphStatusCommand.statusDiff(curStatusInfo[status], nextStatusMap[status])
      nodes.add.forEach((id: string) => {
        this.updateNodeData(id, statusMap[id])
      })
      nodes.remove.forEach((id: string) => {
        this.updateNodeData(id, statusMap[id])
      })
    })
  }
  /** 更新节点数据 */
  updateEdges = (
    curStatusInfo: NsGraphStatusCommand.IStatusMap,
    nextStatusMap: NsGraphStatusCommand.IStatusMap,
  ) => {
    const runningNodes = NsGraphStatusCommand.statusDiff(
      curStatusInfo.processing,
      nextStatusMap.processing,
    )
    const edges = this.x6Graph.getEdges()
    edges.forEach(edge => {
      const view = this.x6Graph?.findViewByCell(edge.id)
      const target = edge.getTargetCellId()
      if (!target) {
        return
      }
      const targetNodeId = target.toString()
      if (!view) {
        return
      }
      if (runningNodes.add.includes(targetNodeId)) {
        /** 新增className */
        return view!.addClass(EDGE_PROCESSING_CLASSNAME)
      } else if (runningNodes.remove.includes(targetNodeId)) {
        /** 移除className */
        return view!.removeClass(EDGE_PROCESSING_CLASSNAME)
      }
    })
  }
  /** 执行Cmd */
  execute = async () => {
    const ctx = this.contextProvider()
    const { args, hooks: runtimeHook } = ctx.getArgs()
    const hooks = ctx.getHooks()

    // 引用
    this.x6Graph = await ctx.getX6Graph()
    const result = await hooks.queryGraphStatus.call(
      args,
      async handlerArgs => {
        const {
          graphStatusService,
          shouldStop = NsGraphStatusCommand.shouldStop,
          doOnce,
        } = handlerArgs
        // 取消已有的循环
        await this.stopCurrentStatusLooping()
        // 循环函数
        const loopFunction = async (
          service: NsGraphStatusCommand.IStatusService,
          loopInterval = 10000,
        ) => {
          // 查询服务端状态
          const data = await service(handlerArgs)
          // 更新全局状态
          this.updateModelValue(state => {
            Object.entries(data.statusMap).forEach(([key, value]) => {
              state.statusMap.set(key, value)
            })
            state.graphStatus = data.graphStatus
          })
          // 更新图上状态
          const statusGroupMap = NsGraphStatusCommand.groupByStatus(data.statusMap)
          this.updateGraph(this.statusInfo, statusGroupMap, data.statusMap)
          // 缓存当前状态作为对比数据
          this.statusInfo = statusGroupMap
          // 延迟
          await delay(loopInterval)
          // 判断是否循环
          if (!this.isLooping) {
            return
          }
          // 判断是否循环
          if (shouldStop) {
            const isStop = await shouldStop(data, handlerArgs)
            if (isStop) {
              return
            }
          }
          // 执行下次调用
          await loopFunction(service, loopInterval)
        }
        // 从参数更新循环的FLAG
        this.isLooping = handlerArgs.loop === undefined ? true : handlerArgs.loop
        // 添加可以停止loop的回调
        await this.addStopDispose()
        // 执行
        if (doOnce) {
          await doOnce(handlerArgs)
        }
        loopFunction(graphStatusService, handlerArgs.loopInterval)
        return {}
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

export const execCmd = () => {}
