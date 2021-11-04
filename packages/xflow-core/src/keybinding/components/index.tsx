import React from 'react'
import { createModule } from '../module'
import { useExtensionRegistry } from '../../xflow-main/components/extension-context'
import { KeybindingConfig } from '../config'

export interface IProps {
  config?: KeybindingConfig
  style?: React.CSSProperties
  className?: string
}

export const KeyBindings: React.FC<IProps> = props => {
  const { config } = props
  /** 获取配置中心 */
  const extensionRegistry = useExtensionRegistry()

  /** 获取ContextService的配置 */
  const keybindingConfig = React.useMemo<KeybindingConfig>(
    () => (config ? config : new KeybindingConfig()),
    [config],
  )

  React.useEffect(() => {
    const disposable = extensionRegistry.addCoreModule({
      config: keybindingConfig,
      createModule,
    })
    /** resolve */
    keybindingConfig.setMountState()
    return () => {
      disposable.dispose()
      keybindingConfig.dispose()
    }
  }, [extensionRegistry, keybindingConfig])

  return null
}

KeyBindings.defaultProps = {}

export const createKeybindingConfig =
  <T extends unknown = any>(addOptions: (config: KeybindingConfig, getValue: () => T) => void) =>
  (value?: T) => {
    /** bridge config and value */
    const valueContainer = React.useMemo(() => ({ getValue: () => ({} as T) }), [])
    valueContainer.getValue = () => value

    const hookConfig = React.useMemo(() => {
      const config = new KeybindingConfig()
      addOptions(config, valueContainer.getValue)
      return config
    }, [])

    return hookConfig
  }
