import type { PropsWithChildren } from 'react'
import React from 'react'
import type { IExtensionModule, IModuleConfig } from '../interface'
import { useExtensionRegistry } from './extension-context'

export interface IProps {
  config: IExtensionModule['config']
  createModule: IExtensionModule['createModule']
}

export function XFlowAppExtensionModule<T>(props: PropsWithChildren<IProps>) {
  const { createModule, children } = props
  /** 获取扩展Registry */
  const extensionRegistry = useExtensionRegistry()

  /** Config */
  const config = React.useMemo<IModuleConfig<T>>(
    () => props.config || { CONFIG_TYPE: '', getConfig: async () => ({} as T) },
    /* eslint-disable-next-line  */
    [],
  )

  React.useEffect(() => {
    /** 注册 extension 到 Registry */
    const disposable = extensionRegistry.addExtension({
      config: config,
      createModule,
    })
    return () => {
      disposable.dispose()
    }
    /* eslint-disable-next-line  */
  }, [])

  /** 可以 Wrap Children组件 */
  if (Array.isArray(children) || React.isValidElement(children)) {
    return <> {children} </>
  }

  return null
}
