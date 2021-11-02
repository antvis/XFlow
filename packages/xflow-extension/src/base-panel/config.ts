/** baseConfig */
export class PropsProxy<T> {
  /** 设置组件的props */
  getValue = () => {
    return {} as T
  }
  /** dispose */
  dispose() {
    this.getValue = () => null
  }
}

/** baseConfig */
export class PanelBaseConfig {
  /** instance id */
  public moduleId: string
  /** uuid */
  constructor(moduleId: string) {
    this.moduleId = moduleId
  }
  /** dispose */
  dispose() {}
}
