import { Container, injectable } from 'mana-syringe'
import { commandRegistryModule } from '../module'
import type { IGraphCommand } from '../interface'
import { IGraphCommandService, ICommandHandler, IGraphCommandFactory } from '../interface'

import { GraphCommandRegistry } from '../graph-command'

describe('GraphCommandRegistry Test', () => {
  let container: Container = null
  let commandService: IGraphCommandService = null
  let commandRegistry: GraphCommandRegistry = null
  let commandFactory: IGraphCommandFactory = null

  beforeEach(() => {
    container = new Container()
    /** ICommandHandler 工厂 */
    container.register<ICommandHandler>(IGraphCommandFactory, {
      useFactory: context => {
        return (commandId: string) => {
          const child = context.container.createChild()
          /** 实例化CommandHandler */
          const commandHandler = child.getNamed<ICommandHandler>(ICommandHandler, commandId)
          return commandHandler
        }
      },
    })
    container.load(commandRegistryModule)
    commandService = container.get<IGraphCommandService>(IGraphCommandService)
    commandRegistry = container.get<GraphCommandRegistry>(GraphCommandRegistry)
    commandFactory = container.get<IGraphCommandFactory>(IGraphCommandFactory)
  })

  it('should register new command', () => {
    // given
    const mockCommnad: IGraphCommand = {
      id: 'test-id',
      label: 'test-node-command-label',
      category: 'node',
    }
    @injectable({
      token: { token: ICommandHandler, named: mockCommnad.id },
    })
    class MockCommand implements ICommandHandler {
      contextProvider = () => {
        return {} as any
      }
      execute = async () => {
        return this
      }
      undo = async () => {
        return this
      }
      redo = async () => {
        return this
      }
      isUndoable = () => {
        return false
      }
    }
    // when
    container.register(MockCommand)
    commandRegistry.registerCommand(mockCommnad, {
      createCommand: commandFactory,
    })
    // then
    expect(commandRegistry.hasCommand(mockCommnad.id)).toBe(true)
  })
  it('should create command after exxcute command', async () => {
    // given
    const mockCommnad: IGraphCommand = {
      id: 'test-id',
      label: 'test-node-command-label',
      category: 'node',
    }
    @injectable({
      token: { token: ICommandHandler, named: mockCommnad.id },
    })
    class MockCommand implements ICommandHandler {
      contextProvider = () => {
        return {} as any
      }
      isUndoable = () => {
        return false
      }
      execute = async () => {
        return this
      }
      undo = async () => {
        return this
      }
      redo = async () => {
        return this
      }
    }
    container.register(MockCommand)
    commandRegistry.registerCommand(mockCommnad, {
      createCommand: commandFactory,
    })
    // when
    const cmdHandler = await commandService.executeCommand(mockCommnad.id, {})
    // then
    expect(cmdHandler instanceof MockCommand).toBe(true)
  })
})
