import { inject, injectable, postConstruct } from 'mana-syringe'
import type { Edge as X6Edge } from '@antv/x6'
import isBoolean from 'lodash/isBoolean'
import isObject from 'lodash/isObject'

import type { NsGraph } from '../../interface'
import type { IContext, IArgsBase } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import type { IHooks } from '../../hooks/interface'
import type { HookHub } from '@antv/xflow-hook'
import { XFlowEdgeCommands } from '../constant'

type ICommand = ICommandHandler<NsUpdateEdge.IArgs, NsUpdateEdge.IResult, NsUpdateEdge.ICmdHooks>

export namespace NsUpdateEdge {
  export const command = XFlowEdgeCommands.UPDATE_EDGE
  export const hookKey = 'updateEdge'
  export const XFlowEdgeSetOptions: X6Edge.SetOptions = { overwrite: true }
  export interface IArgs extends IArgsBase {
    /** edgeConfig */
    edgeConfig: NsGraph.IEdgeConfig
    /** options */
    options: X6Edge.SetOptions
    /** 更新的Service */
    updateEdgeService?: IUpdateEdgeService
    /** 更新Label的Service */
    updateEdgeLabelService?: IUpdateEdgeLabelService
  }

  export const XFlowUpdateLabelService = async (
    edge: X6Edge,
    edgeConfig: NsGraph.IEdgeConfig,
    options = NsUpdateEdge.XFlowEdgeSetOptions,
  ) => {
    edge?.setLabelAt(0, edgeConfig?.label || edgeConfig, options)
  }

  export interface IResult {
    edgeConfig: NsGraph.IEdgeConfig
    edgeCell: X6Edge
  }

  export interface IUpdateEdgeService {
    (args: IArgs): Promise<NsGraph.IEdgeConfig>
  }
  export interface IUpdateEdgeLabelService {
    (
      edge: X6Edge,
      edgeConfig: NsGraph.IEdgeConfig,
      options: X6Edge.SetOptions,
    ): Promise<NsGraph.IEdgeConfig>
  }

  export interface ICmdHooks extends IHooks {
    updateEdge: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsUpdateEdge.command.id },
})
/** 连线更新命令 */
export class UpdateEdgeCommand implements ICommand {
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  ctx: IContext<NsUpdateEdge.IArgs, NsUpdateEdge.IResult, NsUpdateEdge.ICmdHooks>

  @postConstruct()
  init() {
    this.ctx = this.contextProvider()
  }

  execute = async () => {
    const { args, hooks: runtimeHook } = this.ctx.getArgs()
    const hooks = this.ctx.getHooks()

    const result = await hooks.updateEdge.call(
      args,
      async handlerArgs => {
        const x6Graph = await this.ctx.getX6Graph()
        const {
          updateEdgeService,
          updateEdgeLabelService = NsUpdateEdge.XFlowUpdateLabelService,
          options = NsUpdateEdge.XFlowEdgeSetOptions,
        } = handlerArgs
        const edgeConfig = updateEdgeService
          ? await updateEdgeService(handlerArgs)
          : handlerArgs?.edgeConfig

        const x6Edge = x6Graph?.getCellById(edgeConfig?.id) as X6Edge
        x6Edge?.setData(edgeConfig, options)

        if (edgeConfig?.hasOwnProperty('label')) {
          // 默认更新edge的第一个label
          await updateEdgeLabelService(x6Edge, edgeConfig, options)
        }

        if (isBoolean(edgeConfig?.visible)) {
          x6Edge.setVisible(edgeConfig?.visible)
        }

        if (edgeConfig.attrs) {
          x6Edge.setAttrs(edgeConfig.attrs)
        }
        if (edgeConfig.vertices) {
          x6Edge.setVertices(edgeConfig.vertices)
        }
        if (edgeConfig.router) {
          x6Edge.setRouter(edgeConfig.router)
        }
        if (edgeConfig.connector) {
          x6Edge.setConnector(edgeConfig.connector)
        }
        if (isObject(edgeConfig.source)) {
          //@ts-ignore
          x6Edge.setSource(edgeConfig.source as any)
        }
        if (isObject(edgeConfig.target)) {
          //@ts-ignore
          x6Edge.setTarget(edgeConfig.target as any)
        }

        return {
          edgeConfig,
          edgeCell: x6Edge,
        }
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
