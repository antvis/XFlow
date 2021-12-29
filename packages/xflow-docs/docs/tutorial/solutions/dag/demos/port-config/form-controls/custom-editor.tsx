import type { NsJsonSchemaForm, NsGraphCmd } from '@antv/xflow'
import { useXFlowApp, MODELS, XFlowGraphCommands } from '@antv/xflow'
import { FormItemWrapper } from '@antv/xflow'
import { Form, Input } from 'antd'
import React from 'react'

export const EditorShape: React.FC<NsJsonSchemaForm.IControlProps> = props => {
  const { controlSchema } = props
  const { required, tooltip, extra, name, label, placeholder } = controlSchema

  return (
    <FormItemWrapper schema={controlSchema}>
      {({ disabled, hidden, initialValue }) => {
        return (
          <Form.Item
            name={name}
            label={label}
            initialValue={initialValue}
            tooltip={tooltip}
            extra={extra}
            required={required}
            hidden={hidden}
          >
            {/* 这里的组件可以拿到onChange和value */}
            <Editor controlSchema={controlSchema} placeholder={placeholder} disabled={disabled} />
          </Form.Item>
        )
      }}
    </FormItemWrapper>
  )
}

interface IEditorProps extends NsJsonSchemaForm.IFormItemProps {
  controlSchema: NsJsonSchemaForm.IControlSchema
  placeholder?: string
  disabled: boolean
}

const Editor: React.FC<IEditorProps> = props => {
  const { placeholder, disabled, onChange, value } = props
  const { commandService, modelService } = useXFlowApp()
  React.useEffect(() => {
    commandService.executeCommand<NsGraphCmd.SaveGraphData.IArgs>(
      XFlowGraphCommands.SAVE_GRAPH_DATA.id,
      {
        saveGraphDataService: async (meta, graph) => {
          /** 当前选中节点数据 */
          const nodes = await MODELS.SELECTED_NODES.useValue(modelService)
          console.log(graph)
          /** 拿到数据，触发onChange*/
          onChange(JSON.stringify(graph))
          return { err: null, data: graph, meta }
        },
      },
    )
  })

  return <Input.TextArea value={value} placeholder={placeholder} disabled={disabled} rows={10} />
}
