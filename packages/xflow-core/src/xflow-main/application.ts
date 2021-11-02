/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable no-await-in-loop */
/* eslint-disable max-classes-per-file */
import { inject, singleton, contrib, Contribution } from 'mana-syringe'
import type { IGraphPipelineCommand } from '../command/interface'
import type { MaybePromise } from '../common/types'
import type { IRuntimeHook } from '@antv/xflow-hook/es/interface'

import { IGraphProvider } from '../xflow-main/graph/graph-provider'
import { IGraphCommandService } from '../command/interface'
import { IModelService } from '../model-service'
import { IFrontendApplicationContribution } from './interface'

export { IFrontendApplicationContribution } from './interface'

const TIMER_WARNING_THRESHOLD = 100

@singleton()
export class FrontendApplication {
  /** app的扩展 */
  @contrib(IFrontendApplicationContribution)
  protected readonly contributions!: Contribution.Provider<IFrontendApplicationContribution>

  /** graphProvider */
  @inject(IGraphProvider)
  public readonly graphProvider!: IGraphProvider

  /** commandService */
  @inject(IGraphCommandService)
  public readonly commandService!: IGraphCommandService

  /** modelService */
  @inject(IModelService)
  public readonly modelService!: IModelService

  /** 启动app */
  public async start(): Promise<void> {
    await this.startContributions()
    this.registerEventListeners()
  }

  /** 获取画布实例 */
  public getGraphInstance() {
    return this.graphProvider.getGraphInstance()
  }

  /** 获取画布配置项 */
  public getGraphConfig() {
    return this.graphProvider.getGraphOptions()
  }

  /** 暴露命令的执行接口 */
  public executeCommand<Args = any, Result = any>(
    commandId: string,
    cmdArgs: Args,
    hook: IRuntimeHook<Args, Result> = [],
  ) {
    return this.commandService.executeCommand<Args, Result>(commandId, cmdArgs, hook)
  }

  /** 暴露命令的批量执行接口 */
  public executeCommandPipeline(cmdOptions: IGraphPipelineCommand[]) {
    return this.commandService.executeCommandPipeline(cmdOptions)
  }

  /**
   * Register global event listeners.
   */
  protected registerEventListeners(): void {
    /** 触发app的卸载逻辑 */
    window.addEventListener('unload', () => {
      this.stopContributions()
    })
  }

  /**
   * Initialize and start the frontend application contributions.
   */
  protected async startContributions(): Promise<void> {
    console.log(this.contributions.getContributions())
    for (const contribution of this.contributions.getContributions()) {
      if (contribution.onStart) {
        try {
          await this.measure(`${contribution.constructor.name}.onStart`, () =>
            contribution.onStart!(this),
          )
        } catch (error) {
          console.error('Could not start contribution', error)
        }
      }
    }
  }

  /**
   * Stop the frontend application contributions. This is called when the window is unloaded.
   */
  protected stopContributions(): void {
    console.info('>>> Stopping frontend contributions...')
    for (const contribution of this.contributions.getContributions()) {
      if (contribution.onStop) {
        try {
          contribution.onStop(this)
        } catch (error) {
          console.error('Could not stop contribution', error)
        }
      }
    }
    console.info('<<< All frontend contributions have been stopped.')
  }

  protected async measure<T>(name: string, fn: () => MaybePromise<T>): Promise<T> {
    const startMark = `${name}-start`
    const endMark = `${name}-end`
    performance.mark(startMark)
    const result = await fn()
    performance.mark(endMark)
    performance.measure(name, startMark, endMark)
    for (const item of performance.getEntriesByName(name)) {
      const contribution = `Frontend ${item.name}`
      if (item.duration > TIMER_WARNING_THRESHOLD) {
        console.warn(`${contribution} is slow, took: ${item.duration.toFixed(1)} ms`)
      } else {
        console.debug(`${contribution} took: ${item.duration.toFixed(1)} ms`)
      }
    }
    performance.clearMeasures(name)
    return result
  }
}
