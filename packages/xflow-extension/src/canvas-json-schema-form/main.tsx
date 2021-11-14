import React from 'react'
import type { IProps, IInternalProps, IPanelProps, ITriggerUpdate, FieldData } from './interface'
import { useXflowPrefixCls } from '@antv/xflow-core'
import { PanelFooter } from './panel-footer'
import { PanelHeader } from './panel-header'
import { PanelBody } from './panel-body'
import { usePanelLyaoutStyle } from './utils'
import { useJsonSchemaFormModel } from './service'
export { FormItemWrapper } from './schema-form'
export { executeJsonSchemaFormCommand } from './service'
import { WorkspacePanel } from '../base-panel'

/** useFormPanelData获取数据 */
export const JsonSchemaFormMain: React.FC<IInternalProps> = props => {
  const { prefixClz } = props
  const { getCustomRenderComponent, afterUpdatingCb, formValueUpdateService = () => {} } = props
  const { state, commandService, modelService } = useJsonSchemaFormModel(props)

  // 联动更新form items的值
  const triggerUpdate = React.useCallback<ITriggerUpdate>(
    async (form, values = {}) => {
      form.setFieldsValue(values)
      const changedFields = Object.entries(values).map(([key, val]) => {
        return { name: key, value: val } as FieldData
      })
      const allFields = Object.entries(state.targetData).map(([key, val]) => {
        return { name: key, value: val } as FieldData
      })
      const result = await formValueUpdateService({
        allFields: allFields,
        values: changedFields,
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
    async (changedFields: FieldData[], allFields: FieldData[]) => {
      const result = await formValueUpdateService({
        values: changedFields,
        allFields,
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
        state={state}
        style={headerStyle}
        prefixClz={props.prefixClz}
      />
      <PanelBody
        {...props}
        key={state.targetData && state.targetData.id}
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
      <JsonSchemaFormMain {...props} prefixClz={prefixClz} />
    </WorkspacePanel>
  )
}
