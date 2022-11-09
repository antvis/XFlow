import { useCallback, useEffect } from 'react'
import { Keyboard } from '@antv/x6-plugin-keyboard'
import { useGraph } from '../graph'

type Actions = 'keypress' | 'keydown' | 'keyup'

export interface BindKeyOptions {
  keys: string | string[]
  callback: (e: KeyboardEvent) => void
  action?: Actions
}

export interface UnBndKeyOptions {
  keys: string | string[]
  action?: Actions
}

export const useBindKey = (options: BindKeyOptions) => {
  const graph = useGraph()

  const getKeyboard = useCallback(() => {
    if (graph) {
      const keyboard = graph.getPlugin<Keyboard>(Keyboard.name)

      if (!keyboard) {
        const graphKeyboard = new Keyboard({ enabled: true })

        graphKeyboard.init(graph)

        graph.use(graphKeyboard)

        return graphKeyboard
      }

      return keyboard
    }
  }, [graph])

  useEffect(() => {
    const keyboard = getKeyboard()

    if (keyboard) {
      keyboard.bindKey(options.keys, options.callback, options.action)
    }
  }, [graph, options, getKeyboard])
}

export const useUnbindKey = (options: UnBndKeyOptions) => {
  const graph = useGraph()

  useEffect(() => {
    if (graph) {
      const keyboard = graph.getPlugin<Keyboard>(Keyboard.name)

      keyboard?.unbindKey(options.keys, options.action)
    }
  }, [graph, options])
}
