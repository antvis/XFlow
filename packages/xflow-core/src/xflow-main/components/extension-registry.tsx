import React from 'react'
import { find, get } from 'lodash'
import { Disposable } from '../../common/disposable'
import { uuidv4 } from '../../common/uuid'
import type { IExtensionModule } from '../interface'

/** 保存组件上的配置 */
export class ExtensionRegistry {
  /** 标记xflow app instance */
  private instanceId: string

  readonly extensions: IExtensionModule[] = []

  readonly containerClassNames: Set<string> = new Set()

  constructor() {
    this.instanceId = uuidv4()
  }

  addCoreModule = (extension: IExtensionModule) => {
    // core module 添加在前面
    this.extensions.unshift(extension)
    return Disposable.create(() => {
      this.removeExtension(extension)
    })
  }

  addExtension = (extension: IExtensionModule) => {
    this.extensions.push(extension)
    return Disposable.create(() => {
      this.removeExtension(extension)
    })
  }

  getExtension = (config_type: string) => {
    return find(this.extensions, extension => get(extension, 'config.CONFIG_TYPE') === config_type)
  }

  removeExtension = (extension: IExtensionModule) => {
    const idx = this.extensions.indexOf(extension)
    if (idx > -1) {
      this.extensions.splice(idx, 1)
    }
  }

  getInstanceId = () => {
    return this.instanceId
  }

  addContainerClassNames = (clz: string) => {
    return this.containerClassNames.add(clz)
  }

  getContainerClassNames = () => {
    return Array.from(this.containerClassNames)
  }

  has(name: string) {
    return this.extensions.some(ext => ext.config.CONFIG_TYPE === name)
  }

  getAllExtensions = () => {
    return this.extensions
  }

  getAllExtensionConfigs = () => {
    return this.extensions.map(i => i.config)
  }
}

/** 获取Xflow extension，用于收集React组件的配置 */
export const createExtensionRegistry = () => {
  /* eslint-disable-next-line react-hooks/rules-of-hooks */
  const registry = React.useMemo(() => {
    return new ExtensionRegistry()
  }, [])
  return registry
}
