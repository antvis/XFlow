---
title: JsonForm 配置式表单
order: 9
group:
  path: /tutorial-ext-components
  title: 交互组件
  order: 5
nav:
  title: 教程
  path: /docs
  order: 1
---

# JsonForm 配置式表单

通过配置一个 JSONSchema 协议渲染一个可以交互表单，用于根据画布选中状态的不同，动态的渲染不同的表单， 表单的初始值通过 JSONSchema 传入，在表单值变化时触发保存的回调。

# 何时使用

有以下 3 个场景

1. 用表单来修改画布节点的属性
2. 用表单来修改画布边的属性
3. 用表单来修改画布属性

# 代码演示

## 基础使用

<code src="./demos/basic/index.tsx" classname="json-form-demo"  />

#### 支持的表单项的配置：

```tsx | pure
/** Form控件 */
export interface IControlSchema {
  /** form表单显示的控件名 */
  label: string
  /** form store中的字段名 */
  name: NamePath
  /** controlmap中对应的 control id */
  shape: ControlShape | string
  /** 默认值 */
  defaultValue?: string | number | boolean
  /** 用户保存的值 */
  value?: string | number | boolean
  /** 是否禁用输入，需要控件支持 */
  disabled?: boolean
  /** 是否显示必选 */
  required?: boolean
  /** label中问号的提示内容 */
  tooltip?: string
  /** 控件后显示的文本 */
  extra?: string
  /** 没有输入时控件的提示 */
  placeholder?: string
  /** 隐藏 */
  hidden?: boolean
  /** 下拉控件的选项 */
  options?: IOption[]
  /** 原始数据 */
  originData?: Record<string, any>
  /** 控件联动的规则 */
  dependencies?: IDependency[]
  /** 表单校验规则 */
  rules?: Rule[]
}
```

## 字段联动

<code src="./demos/deps/index.tsx" classname="json-form-demo-deps"  />

## 校验规则

<code src="./demos/rules/index.tsx" classname="json-form-demo-deps"  />

## 自定义 shape

通过 Schema 中的 shape 字段和 controlMapService 配合可以渲染自定义的表单项目

<code src="./demos/custom-shape/index.tsx" classname="json-form-demo" />

## 支持更多选中对象

<code src="./demos/target-type/index.tsx" classname="json-form-demo" />

## 自定义渲染 getCustomRenderComponent

支持使用自定义渲染来支持更复杂的业务场景

<code src="./demos/custom-render/index.tsx" classname="json-form-demo" />

# interface 接口

```jsx | pure
export interface IProps {
  /** Panel Props */
export interface IProps extends Partial<IPanelProps> {
  // 定位的配置
  position: IPosition
  // 最外层元素的样式
  style?: React.CSSProperties
  // 最外层元素的classname
  className?: string
  // 替换 header的渲染组件
  header?: React.FC<ICustomProps>
  // 替换 footer的渲染组件
  footer?: React.FC<ICustomProps>
  // 默认的header文字
  headerText?: string
  // 默认的footer文字
  footerText?: string
  // 监听的画布的选中元素
  targetType?: TargetType[]
  // 默认的shape render
  defaultControlRender?: React.FC<IControlProps>
  // control shape 字段对应的render components
  defaultControls?: IDefaultControls
  // 可以通过controlMapService更新内置的controlMap
  controlMapService?: IControlMapService
  // 画布selection:change事件的回调 return的值是form的schema
  formSchemaService?: IFormSchemaService
  // formitem change时会调用的回调，用于保存form的值到画布/db
  formValueUpdateService?: IFormValueUpdateService
  // 画布selection:change事件的回调函数 如果函数返回结果是react.component 会代替form的渲染
  getCustomRenderComponent?: ICustomRender
  // formValueUpdateService完成后的回调
  afterUpdatingCb?: IAfterUpdatingCallback
}
```
