import React from 'react'
import { XFLOW_PREFIX_CLS } from '../../constants'

/** xflow classname prefix context */
class ConfigProvider {
  private xflowPrefixCls: string = XFLOW_PREFIX_CLS

  getXflowPrefixCls = (pkgName: string) => {
    return `${this.xflowPrefixCls}-${pkgName}`
  }

  setXflowPrefixCls = (prefixCls: string) => {
    return (this.xflowPrefixCls = prefixCls)
  }
}

interface IContext {
  configProvider: ConfigProvider
}

export const XFlowConfigProviderContext = React.createContext<IContext>({
  configProvider: null,
})

export const useConfigContext = () => {
  return React.useContext(XFlowConfigProviderContext)
}

export const useXflowPrefixCls = (pkgName: string) => {
  const ctx = useConfigContext()
  return React.useMemo(() => {
    if (ctx.configProvider) {
      return ctx.configProvider.getXflowPrefixCls(pkgName)
    }
    return `${XFLOW_PREFIX_CLS}-${pkgName}`
    /* eslint-disable-next-line  */
  }, [pkgName])
}
