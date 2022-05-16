import { QuestionCircleOutlined } from '@ant-design/icons'

export type IconComponent = typeof QuestionCircleOutlined

export interface IReactComponentStore {
  has: (id: string) => boolean
  get: (id: string) => IconComponent
  set: (id: string, component: IconComponent) => void
}

export class IconStoreBase implements IReactComponentStore {
  /** icon map */
  private map = new Map<string, IconComponent>([
    ['default', QuestionCircleOutlined],
    ['QuestionCircleOutlined', QuestionCircleOutlined],
  ])

  constructor() {
    this.map.set('default', QuestionCircleOutlined)
    this.map.set('QuestionCircleOutlined', QuestionCircleOutlined)
  }

  /** 获取全局的icon component */
  //@ts-ignore
  get(id: string): IconComponent {
    const component = this.map.get(id)
    return component
  }

  /** 设置全局的icon component */
  set(id: string, component: IconComponent): void {
    this.map.set(id, component)
  }

  /** 判断是否有值 */
  has(id: string): boolean {
    return this.map.has(id)
  }
}

export const IconStore = new IconStoreBase()

export default IconStore
