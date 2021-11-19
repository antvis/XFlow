/* eslint-disable @typescript-eslint/no-redeclare */
import 'reflect-metadata'
/** Application 扩展依赖 */
import {
  ICommandHandler,
  IGraphCommandFactory,
  IGraphCommandContribution,
} from '../command/interface'
import type { GraphCommandRegistry } from '../command/graph-command'
import type { Syringe } from 'mana-syringe'
import { inject, singleton } from 'mana-syringe'

import type { IHookService } from '../hooks/interface'
import { IHookContribution } from '../hooks/interface'
import { Disposable, DisposableCollection } from '../common/disposable'

/** Commands */
import { registerNodeCommand, hookhubList as nodeHooks } from './node'
import { registerGraphCommand, hookhubList as graphHooks } from './graph'
import { registerEdgeCommand, hookhubList as edgeHooks } from './edge'
import { registerGroupCommand, hookhubList as groupHooks } from './group'
import { registerModelServiceCommand, hookhubList as observablesHooks } from './models'

/** Command Hooks*/
import { HookHub } from '@antv/xflow-hook'
import { CommandConfig } from './config'
import type { ICmdHooks } from './interface'
import type { IEvent } from '../hooks/interface'
import type { NsGraph } from '../interface'

/** Commands 配置项目*/
const hookhubList = [...nodeHooks, ...edgeHooks, ...groupHooks, ...graphHooks, ...observablesHooks]

const defaultHookFactory = () => new HookHub()

@singleton({ contrib: [IGraphCommandContribution, IHookContribution] })
export class XFlowCommandContribution
  implements IGraphCommandContribution, IHookContribution<ICmdHooks>
{
  /** 命令工厂 */
  @inject(IGraphCommandFactory)
  commandFactory: IGraphCommandFactory

  /** 命令工厂 */
  @inject(CommandConfig)
  commandConfig: CommandConfig

  /** 注册画布节点命令 */
  registerGraphCommands(registry: GraphCommandRegistry): void {
    /** 注册内置的命令 */
    hookhubList.forEach(({ command }) => {
      registry.registerCommand(command, {
        createCommand: this.commandFactory,
      })
    })
    /** 注册外部传入的命令 */
    this.commandConfig.getConfig().then(({ getContributions }) => {
      const CommandContributions = getContributions()
      CommandContributions.forEach(cmd => {
        registry.registerCommand(cmd.command, {
          createCommand: this.commandFactory,
        })
      })
    })
  }
  /** 注册钩子 */
  registerHook = async (hooks: ICmdHooks) => {
    const d = hooks.x6Events.registerHook({
      name: 'bind group node move event',
      handler: async args => {
        const event: IEvent<'node:moving'> = {
          eventName: 'node:moving',
          callback: async ({ node }) => {
            const isGroup = node.prop('isGroup')
            if (isGroup) {
              node.prop('originPosition', node.getPosition())
              return
            }

            const graph = node.model.graph
            const { group: groupId } = node.getData()
            const group = graph.getNodes().find(cell => cell.id === groupId)
            if (!group) {
              return
            }

            const isCollapsed = group.getProp('isCollapsed')
            let originSize = group.getProp('originSize')
            let hasChange = false

            if (originSize == null) {
              originSize = group.size()
              group.prop('originSize', originSize)
            }
            let originPosition = group.prop('originPosition')
            if (originPosition == null) {
              originPosition = group.getPosition()
              group.prop('originPosition', originPosition)
            }

            let x = originPosition.x
            let y = originPosition.y
            let cornerX = originPosition.x + originSize.width
            let cornerY = originPosition.y + originSize.height
            const childs = group.getChildren()
            if (childs) {
              childs.forEach(child => {
                const bbox = child.getBBox().inflate(12)
                const corner = bbox.getCorner()

                if (bbox.x < x) {
                  x = bbox.x
                  hasChange = true
                }

                if (bbox.y < y) {
                  y = bbox.y
                  hasChange = true
                }

                if (corner.x > cornerX) {
                  cornerX = corner.x
                  hasChange = true
                }

                if (corner.y > cornerY) {
                  cornerY = corner.y
                  hasChange = true
                }
              })
            }

            if (hasChange) {
              group.prop({
                position: { x, y },
                size: { width: cornerX - x, height: cornerY - y },
              })
              const groupData: NsGraph.INodeConfig = {
                ...group.getData(),
                x,
                y,
                width: cornerX - x,
                height: cornerY - y,
              }
              if (isCollapsed !== true) {
                groupData.groupChildrenSize = { width: cornerX - x, height: cornerY - y }
              }
              group.setData(groupData)
            }

            /**
             *  updateNodeData:
             *  1. 折叠时移动更新xy，size需要更新，childrenSize不变
             *  2. 展开时
             *      - 移动Group更新xy，size不需要更新，childrenSize不更新
             *      - 移动children, 更新xy, size childrenSize
             */
          },
        }
        args.push(event)
      },
    })
    return Disposable.create(() => {
      d.dispose()
    })
  }
  /** 注册钩子 */
  registerHookHub = async (registry: IHookService<ICmdHooks>) => {
    const toDispose = new DisposableCollection()
    hookhubList.forEach(({ hookKey, createHook = defaultHookFactory }) => {
      const d = registry.registerHookHub(hookKey, createHook())
      toDispose.push(d)
    })
    this.commandConfig.getConfig().then(({ getContributions }) => {
      const CommandContributions = getContributions()
      CommandContributions.forEach(({ hookKey, createHook = defaultHookFactory }) => {
        const d = registry.registerHookHub(hookKey, createHook())
        toDispose.push(d)
      })
    })
    return toDispose
  }
}

export const registerXFlowCommandContribution = (
  register: Syringe.Register,
  commandConfig: CommandConfig,
) => {
  /** 扩展 用户自定义命令 */
  const configContributions = commandConfig.getCommandContributions()
  configContributions.forEach(execution => {
    const { CommandHandler, command } = execution
    register({
      token: { token: ICommandHandler, named: command.id },
      useClass: CommandHandler,
    })
  })

  /** 扩展 Graph 命令 */
  registerGraphCommand(register)
  /** 扩展 Node 命令 */
  registerNodeCommand(register)
  /** 扩展 Edge 命令 */
  registerEdgeCommand(register)
  /** 扩展 Edge 命令 */
  registerGroupCommand(register)
  /** 扩展 Observable 命令 */
  registerModelServiceCommand(register)
  /** 注册 XFlowCommandContribution */
  register(XFlowCommandContribution)
}
