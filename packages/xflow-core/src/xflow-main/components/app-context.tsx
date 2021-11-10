import React from 'react'
import type { FrontendApplication } from '../application'

/** AppContext */
export const XFlowAppContext = React.createContext<IAppContainer>(null)
XFlowAppContext.displayName = 'XFlowAppContext'

/** AppContext:获取 app */
export const useXFlowApp = () => {
  const container = React.useContext(XFlowAppContext)
  return container && container.getApp ? container.getApp() : null
}

/** AppContext: 获取 appContainer */
export const useXFlowAppContainer = () => {
  return React.useContext(XFlowAppContext)
}

interface IAppContainer {
  getApp: () => FrontendApplication | null
  setApp: (app: FrontendApplication) => void
  onAppChange: (callback: (app: FrontendApplication) => void) => void
  isUserDefined: () => boolean
  dispose: () => void
}

class AppContainer implements IAppContainer {
  private cache: FrontendApplication | null = null
  private isUserDefinedFlag: boolean
  private onAppChangeCallback: (app: FrontendApplication) => void

  constructor(isUserDefined: boolean = false) {
    this.isUserDefinedFlag = isUserDefined
  }

  setApp = (app: FrontendApplication) => {
    this.cache = app
    if (this.onAppChangeCallback) {
      this.onAppChangeCallback(app)
    }
  }

  isUserDefined = () => this.isUserDefinedFlag

  getApp = () => {
    return this.cache
  }

  onAppChange = cb => {
    this.onAppChangeCallback = cb
  }

  dispose = () => {
    this.cache = null
  }
}

/** XFlow内部使用 */
export const XFlowAppInternalProvider: React.FC<{ app: FrontendApplication }> = props => {
  const userDefinedAppContainer = useXFlowAppContainer()
  const [, setTick] = React.useState<number>(null)
  const appContainer = React.useMemo(() => {
    return userDefinedAppContainer && userDefinedAppContainer.isUserDefined()
      ? userDefinedAppContainer
      : new AppContainer(false)
    // 不要移除：保证config只生成一次
    // eslint-disable-next-line
  }, [])
  // set appChange callback
  if (!appContainer.isUserDefined()) {
    appContainer.onAppChange(() => setTick(0))
  }

  React.useEffect(() => {
    if (props.app) {
      appContainer.setApp(props.app)
    }
    // 不要移除：只关心 props.app
    // eslint-disable-next-line
  }, [props.app])

  if (appContainer.isUserDefined()) {
    return <>{props.children}</>
  }

  return (
    <XFlowAppContext.Provider value={{ ...appContainer }}>
      {props.children}
    </XFlowAppContext.Provider>
  )
}

XFlowAppInternalProvider.displayName = 'XFlowAppInternalProvider'

/** XFlow外部使用 */
export const XFlowAppProvider: React.FC = ({ children }) => {
  const [, setTick] = React.useState<number>(null)
  const appContainer = React.useMemo(() => {
    return new AppContainer(true)
  }, [])
  // add callback
  appContainer.onAppChange(() => setTick(0))

  return <XFlowAppContext.Provider value={{ ...appContainer }}>{children}</XFlowAppContext.Provider>
}

XFlowAppProvider.displayName = 'XFlowAppProvider'
