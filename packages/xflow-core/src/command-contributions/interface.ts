import type { IHooks } from '../hooks/interface'
import type { ICmdHooks as IGraphHooks, NsGraphCmd } from './graph'
import type { ICmdHooks as INodeHooks, NsNodeCmd } from './node'
import type { ICmdHooks as IEdgeHooks, NsEdgeCmd } from './edge'
import type { ICmdHooks as IGroupHooks, NsGroupCmd } from './group'
import type { ICmdHooks as IModelHooks, NsModelServiceCmd } from './models'
import type { IGraphCommand, ICommandHandler } from '../command/interface'
import type { HookHub } from '@antv/xflow-hook'
import type { ClassOf, Simplify } from '../common/types'

type ICmdHooks = Simplify<INodeHooks & IEdgeHooks & IGroupHooks & IGraphHooks & IModelHooks>

export { IHooks, ICmdHooks, NsModelServiceCmd, NsGraphCmd, NsNodeCmd, NsEdgeCmd, NsGroupCmd }

export interface ICommandContributionConfig {
  hookKey: string
  command: IGraphCommand
  createHook?: () => HookHub
  CommandHandler: ClassOf<ICommandHandler>
}
