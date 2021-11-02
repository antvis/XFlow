import React from 'react'
import { ExtensionRegistry } from './extension-registry'

/** 通过context收集extension的配置 */
export const ExtensionRegistryContext = React.createContext<ExtensionRegistry>(
  {} as ExtensionRegistry,
)

export const useExtensionRegistry = () => {
  return React.useContext(ExtensionRegistryContext)
}

export { ExtensionRegistry }
