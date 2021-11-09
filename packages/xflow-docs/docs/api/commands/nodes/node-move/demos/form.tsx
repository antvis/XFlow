import React from 'react'
import { Button, Card, Form, Input, message } from 'antd'
import type { IFormSchema } from '@antv/xflow'
import { useXFlowApp, WorkspacePanel, MODELS, useModelAsync, FormBuilder } from '@antv/xflow'
import type { NsNodeCmd } from '@antv/xflow'
import { XFlowNodeCommands } from '@antv/xflow'

interface IFormValues {
  id: string
  dx: string
  dy: string
}

const formItems: IFormSchema[] = [
  {
    name: 'id',
    label: 'id',
    rules: [{ required: true }],
    render: Input,
    renderProps: { disabled: true },
  },
  {
    name: 'dx',
    label: 'position.dx',
    rules: [{ required: true }],
    render: Input,
  },
  {
    name: 'dy',
    label: 'position.dy',
    rules: [{ required: true }],
    render: Input,
  },
]

export const CmdForm = () => {
  const app = useXFlowApp()
  const [form] = Form.useForm<IFormValues>()

  const [selectNode] = useModelAsync<MODELS.SELECTED_NODE.IState>({
    getModel: async () => MODELS.SELECTED_NODE.getModel(app.modelService),
    initialState: null,
  })

  React.useEffect(() => {
    if (selectNode) {
      const node = selectNode.getData()
      form.setFieldsValue({
        id: node.id,
        dx: '20',
        dy: '20',
      })
    }
  }, [form, selectNode])

  const onFinish = async (values: IFormValues) => {
    app.commandService.executeCommand<NsNodeCmd.MoveNode.IArgs>(XFlowNodeCommands.MOVE_NODE.id, {
      id: values.id,
      position: {
        dx: parseInt(values.dx, 10),
        dy: parseInt(values.dy, 10),
      },
    })

    message.success(`${XFlowNodeCommands.CENTER_NODE.label}: 命令执行成功`)
  }

  return (
    <FormBuilder<IFormValues>
      form={form}
      formItems={formItems}
      onFinish={onFinish}
      initialValues={{
        id: null,
        dx: '10',
        dy: '10',
      }}
      submitButton={
        <Button type="primary" htmlType="submit" style={{ width: '100%' }} disabled={!selectNode}>
          选中节点执行命令
        </Button>
      }
    />
  )
}

export const FormPanel = () => {
  return (
    <WorkspacePanel position={{ top: 0, left: 0, bottom: 0, width: 230 }} className="panel">
      <Card title="NodeConfig Options" size="small" bordered={false}>
        <CmdForm />
      </Card>
    </WorkspacePanel>
  )
}
