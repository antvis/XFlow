import React from 'react'
import type { IProps, IPanelProps, ITriggerUpdate } from './interface'
import { useXflowPrefixCls } from '@antv/xflow-core'
import { PanelFooter } from './panel-footer'
import { PanelHeader } from './panel-header'
import { PanelBody } from './panel-body'
import { usePanelLyaoutStyle } from './utils'
import { useJsonSchemaFormModel } from './service'
export { FormItemWrapper } from './schema-form'
export { executeJsonSchemaFormCommand } from './service'
import { WorkspacePanel } from '../base-panel'

import './style/index'

/** useFormPanelData获取数据 */
export const JsonSchemaFormMain: React.FC<IProps> = props => {
  const { prefixClz } = props
  const { getCustomRenderComponent, afterUpdatingCb, formValueUpdateService } = props
  const { state, commandService, modelService } = useJsonSchemaFormModel(props)

  // 联动更新form items的值
  const triggerUpdate = React.useCallback<ITriggerUpdate>(
    async (form, values) => {
      form.setFieldsValue(values)
      const result = await formValueUpdateService({
        values,
        modelService,
        commandService,
        targetData: state.targetData,
        targetType: state.targetType,
      })
      if (afterUpdatingCb) {
        afterUpdatingCb(result)
      }
    },
    [
      afterUpdatingCb,
      commandService,
      formValueUpdateService,
      modelService,
      state.targetData,
      state.targetType,
    ],
  )

  // 在fields change时的回调
  const onFieldsChange = React.useCallback(
    async values => {
      const result = await formValueUpdateService({
        values,
        modelService,
        commandService,
        targetData: state.targetData,
        targetType: state.targetType,
      })
      if (afterUpdatingCb) {
        afterUpdatingCb(result)
      }
    },
    [
      afterUpdatingCb,
      commandService,
      formValueUpdateService,
      modelService,
      state.targetData,
      state.targetType,
    ],
  )

  /** schema为空的情况  */
  const noSchema = React.useMemo(() => {
    try {
      return state.schema.tabs.length === 0 || !state.schema
    } catch (error) {
      return true
    }
  }, [state.schema])

  const { headerStyle, bodyStyle, footerStyle } = usePanelLyaoutStyle(
    props as IPanelProps,
    noSchema,
  )

  /** 支持自定义渲染 */
  if (getCustomRenderComponent) {
    const Component = getCustomRenderComponent(
      state.targetType,
      state.targetData,
      modelService,
      commandService,
    )
    if (Component) {
      return React.createElement(Component, {
        ...props,
        headerStyle,
        bodyStyle,
        footerStyle,
        targetData: state.targetData,
        targetType: state.targetType,
        modelService: modelService,
        commandService: commandService,
      })
    }
  }

  return (
    <div className={prefixClz}>
      <PanelHeader
        hasSchema={!noSchema}
        {...props}
        style={headerStyle}
        prefixClz={props.prefixClz}
      />
      <PanelBody
        {...props}
        style={bodyStyle}
        prefixClz={props.prefixClz}
        loading={state.loading}
        schema={state.schema}
        triggerUpdate={triggerUpdate}
        onFieldsChange={onFieldsChange}
      />
      <PanelFooter {...props} state={state} style={footerStyle} />
    </div>
  )
}

export const JsonSchemaForm: React.FC<IProps> = props => {
  const prefixClz = useXflowPrefixCls('json-schema-form')
  return (
    <WorkspacePanel {...props} className={prefixClz}>
      <JsonSchemaFormMain {...props} />
    </WorkspacePanel>
  )
}
