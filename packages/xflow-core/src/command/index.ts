/** Command */
import { GraphCommandRegistry } from './graph-command'
import { commandRegistryModule } from './module'
import type {
  IArgsBase,
  IGraphCommand,
  ICommandConfig,
  ICommandHandler,
  IGraphPipelineCommand,
  IGraphCommandContribution,
} from './interface'
import { IGraphCommandService, ICommandContextProvider } from './interface'

export type {
  IArgsBase,
  IGraphCommand,
  ICommandConfig,
  ICommandHandler,
  IGraphPipelineCommand,
  IGraphCommandContribution,
}

export {
  IGraphCommandService,
  ICommandContextProvider,
  GraphCommandRegistry,
  commandRegistryModule,
}
