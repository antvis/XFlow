import type { Graph } from '@antv/x6'

export interface IMinimapOptions {
  enabled?: boolean
  container?: HTMLElement
  width?: number
  height?: number
  padding?: number
  scalable?: boolean
  minScale?: number
  maxScale?: number
  graphOptions?: Graph.Options
  createGraph?: (options: Graph.Options) => Graph
}

export interface IConfig {
  CONFIG_TYPE: string
  getConfig: () => Promise<IMinimapOptions>
}

export interface IMinimapConfigProvider {
  CONFIG_TYPE: string
  getConfig: () => Promise<IMinimapOptions>
}

export const IMinimapConfigProvider = Symbol('IMinimapConfigProvider')
