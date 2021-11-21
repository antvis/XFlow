---
title: Model
order: 3
group:
  path: /tutorial-advanced
  title: 自定义组件
  order: 6
nav:
  title: 教程
  path: /docs
  order: 1
---

## ModelService

<img src="https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*_74NSZjuTTQAAAAAAAAAAAAAARQnAQ" style="display: block;padding: 12px 0;width: 75%"/>

### 概念说明

在 XFlow 通过 Model 来驱动 React UI 组件更新渲染，我们通过监听事件可以在事件的回调函数中调用 Model 的 setValue 方法 来更新 Model，UI 组件中通过 Model 的 watch 方法来更新组件内部的 State，从而实现组件渲染的更新。 接下来我们需要了解以下几个概念：

1. 如何获取 ModelService
2. 如何消费 XFlow 内置的 ModelService
3. 如何生产 XFlow 的 自定义 Model

### 如何获取 ModelService

CommandService 在 XFlow 内部无处不在，入口分为两种：

1. React 组件内部使用： 通过 useXFlowApp 来获取 CommandService
2. XFlow 组件的配置项中使用：通过函数的参数可以获得 CommandService

### 如何消费 内置的 Model

可以通过以下方式获取内置 Model 的值,查看[所有的 Model](/api/models)

```tsx | pure
// 如何使用？
import { MODELS } from '@antv/xflow'
// 使用models
const getModel = async () => {
  /** value */
  const graphScale = await MODELS.GRAPH_SCALE.useValue(modelService)
  /** model */
  const graphScaleModel = await MODELS.GRAPH_SCALE.getModel(modelService)
  console.log(graphScale, graphScaleModel)
}
```

### 如何生产 Model

```tsx | pure
import type { IModelService } from '@antv/xflow'
import { XFlow, createModelServiceConfig } from '@antv/xflow'

export namespace NS_LOADING_STATE {
  export const id = 'custom-loading'
  export interface IState {
    loading: boolean
  }
  export const getValue = async (contextService: IModelService) => {
    const ctx = await contextService.awaitModel<NS_LOADING_STATE.IState>(NS_LOADING_STATE.id)
    return ctx.getValidValue()
  }
}

export const useModelServiceConfig = createModelServiceConfig(config => {
  config.registerModel(registry => {
    return registry.registerModel({
      id: NS_LOADING_STATE.id,
      getInitialValue: () => {
        loading: true
      },
    })
  })
})
export const Demo = () => {
  const modelServiceConfig = useModelServiceConfig()
  return <XFlow modelServiceConfig={modelServiceConfig}></XFlow>
}
```

## API

通过以下的方式可以使用 Model

```tsx | pure
/** model的类型 */
export interface IModel<T> {
  /** 传入一个回调函数来订阅model的变化 */
  watch: IWatch<T>
  /** 更新model: 支持传值或者传入更新函数 */
  setValue: ISetValue<T>
  /** 获取model的值 */
  getValue: () => T | EmptyType
  /** 是否有非空的值 */
  hasValidValue: () => boolean
  /** 通过Promise获取一个非空值 */
  getValidValue: () => Promise<T>
}
```
