/* eslint-disable @typescript-eslint/no-unused-vars */
import { HookHub } from './index'
import type { IHook } from './interface'

interface IArgs {
  count: number
}
interface IResult {
  count: string
}

describe('test HookHub class', () => {
  const spy: { console: jest.SpyInstance } = {
    console: jest.spyOn(console, 'log').mockImplementation(() => {}),
  }

  beforeEach(() => {
    /** 监听console调用， 屏蔽console msg */
    spy.console = jest.spyOn(console, 'log').mockImplementation(() => {})
  })
  afterEach(() => {
    spy.console.mockClear()
  })

  const mockHandler = jest.fn()

  test('HookHub should get empty hooks list after init ', () => {
    const hooks = new HookHub()
    expect(hooks.getHooks()).toHaveLength(0)
  })

  test('HookHub can register hooks and dispose', async () => {
    const hooks = new HookHub()
    const hookMeta = {
      name: 'hook1',
      handler: mockHandler,
    }
    const disposable = hooks.registerHook(hookMeta)
    expect(disposable).toMatchObject({
      dispose: expect.any(Function),
    })
    const innerHooks = await hooks.getHooks([], false)
    expect(innerHooks).toHaveLength(1)
    expect(innerHooks).toMatchObject([hookMeta])
    disposable.dispose()
    expect(await hooks.getHooks([])).toHaveLength(0)
  })

  test('HookHub can sort hooks by using before after ', async () => {
    const hooks = new HookHub<IArgs, IResult>()
    const hookMeta: IHook<IArgs, IResult> = {
      name: 'hook1',
      handler: mockHandler,
    }
    const disposable = hooks.registerHook(hookMeta)
    expect(disposable).toMatchObject({
      dispose: expect.any(Function),
    })

    const innerHooks = await hooks.getHooks([], true)
    expect(innerHooks).toHaveLength(1)
    expect(innerHooks).toMatchObject([hookMeta])
    disposable.dispose()
    expect(await hooks.getHooks([])).toHaveLength(0)
  })

  test('HookHub can call hooks ', async () => {
    const hooks = new HookHub<IArgs, IResult>()
    const hookMeta: IHook<IArgs, IResult> = {
      name: 'count_add_one',
      handler: async args => {
        args.count = args.count + 1
      },
    }
    hooks.registerHook(hookMeta)
    const count10 = await hooks.call({ count: 0 }, async args => {
      const { count } = args
      return {
        ...args,
        count: count * 10 + '',
      }
    })

    expect(count10).toMatchObject({
      count: '10',
    })

    const count1000 = await hooks.call(
      { count: 0 },
      async args => {
        const { count } = args
        return {
          ...args,
          count: count * 10 + '',
        }
      },
      [
        {
          name: 'set count to 100',
          handler: async args => {
            args.count = 100
          },
        },
      ],
    )
    expect(count1000).toMatchObject({
      count: '1000',
    })
  })

  test('HookHub hooks can use return null to skip main handler', async () => {
    const hooks = new HookHub<IArgs, IResult>()
    const hookMeta: IHook<IArgs> = {
      name: 'count_add_one',
      handler: async args => {
        args.count = args.count + 1
      },
    }
    hooks.registerHook(hookMeta)
    const mainHandler = jest.fn(async _x => {
      console.log('it never run since second hook return null')
      return {
        count: '',
      }
    })
    const firstHookHandler = jest.fn(async args => {
      console.log('it will run')
      args.count = 100
    })
    /** return null handler必须是两个参数*/
    const secondHookHandler = jest.fn(async (_args, _handler) => {
      console.log('it will stop here')
      return null
    })
    const thirdHookHandler = jest.fn(async _args => {
      console.log('it cannot run')
    })
    // call hook handler
    await hooks.call({ count: 0 }, mainHandler, [
      {
        name: 'it will run',
        handler: firstHookHandler,
      },
      {
        name: 'it will run and stop here',
        handler: secondHookHandler,
      },
      {
        name: 'it cannot run',
        handler: thirdHookHandler,
      },
    ])
    expect(spy.console).toBeCalledTimes(2)
    expect(firstHookHandler).toBeCalledTimes(1)
    expect(secondHookHandler).toBeCalledTimes(1)
    expect(thirdHookHandler).toBeCalledTimes(0)
    expect(mainHandler.mock.calls.length).toBe(0)
  })

  test('HookHub hooks can wrap main handler', async () => {
    const hooks = new HookHub<IArgs, IResult>()
    const hookMeta: IHook<IArgs> = {
      name: 'count_add_one',
      handler: async args => {
        args.count = args.count + 1
      },
    }
    hooks.registerHook(hookMeta)
    // mock hook runtime handler
    const mainHandler = jest.fn(async _x => {
      console.log('run main handler')
      return {
        count: '100',
      }
    })
    const firstHookHandler = jest.fn(async args => {
      console.log('run first hook handler')
      args.count = 100
    })
    /** return null handler必须是两个参数*/
    const secondHookHandler = jest.fn(async (_args: any, handler: any) => {
      console.log('run second hook handler')
      const newHandler = (args: any) => {
        console.log('run before main handler')
        const result = handler.call(null, args)
        console.log('run after main handler')
        return result
      }
      return newHandler
    })
    // call hook handler
    await hooks.call({ count: 0 }, mainHandler, [
      {
        name: 'first runtime hook',
        handler: firstHookHandler,
      },
      {
        name: 'it will wrap main handler',
        handler: secondHookHandler,
      },
    ])
    expect(mainHandler.mock.calls.length).toBe(1)
    expect(spy.console).toHaveBeenCalledTimes(5)
    expect(spy.console.mock.calls).toEqual([
      ['run first hook handler'],
      ['run second hook handler'],
      ['run before main handler'],
      ['run main handler'],
      ['run after main handler'],
    ])
  })
})
