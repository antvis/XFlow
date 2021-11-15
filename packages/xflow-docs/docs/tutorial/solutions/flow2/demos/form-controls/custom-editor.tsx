import React from 'react'
import { Form, Input } from 'antd'
import { XFlowGraphCommands, FormItemWrapper, usePanelContext, MODELS } from '@antv/xflow'
import type { NsGraphCmd, NsJsonSchemaForm } from '@antv/xflow'

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
  const { commandService, modelService } = usePanelContext()
  React.useEffect(() => {
    commandService.executeCommand(XFlowGraphCommands.SAVE_GRAPH_DATA.id, {
      saveGraphDataService: async (meta, graph) => {
        /** 当前选中节点数据 */
        const nodes = await MODELS.SELECTED_NODES.useValue(modelService)
        console.log(nodes)
        /** 拿到数据，触发onChange*/
        onChange(JSON.stringify(graph))
        return { err: null, data: graph, meta }
      },
    } as NsGraphCmd.SaveGraphData.IArgs)
  })

  return <Input.TextArea value={value} placeholder={placeholder} disabled={disabled} rows={10} />
}
