import React from 'react'
import { Button, Card, Form, Input, message } from 'antd'
import type { IFormSchema } from '@antv/xflow'
import { useXFlowApp, WorkspacePanel, MODELS, useModelAsync, FormBuilder } from '@antv/xflow'
import type { NsNodeCmd } from '@antv/xflow'
import { XFlowNodeCommands } from '@antv/xflow'

interface IFormValues {
  id: string
  label: string
  x: string
  y: string
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
    name: 'label',
    label: 'label',
    rules: [{ required: true }],
    render: Input,
  },
  {
    name: 'x',
    label: 'x',
    rules: [{ required: true }],
    render: Input,
  },
  {
    name: 'y',
    label: 'y',
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
      const nodeConfig = selectNode.getData()
      console.log(nodeConfig)
      form.setFieldsValue({
        id: nodeConfig.id,
        label: nodeConfig.label,
        x: nodeConfig.x,
        y: nodeConfig.y,
      })
    }
  }, [form, selectNode])

  const onFinish = async (values: IFormValues) => {
    const nodeConfig = selectNode.getData()
    app.commandService.executeCommand<NsNodeCmd.UpdateNode.IArgs>(
      XFlowNodeCommands.UPDATE_NODE.id,
      {
        nodeConfig: { ...nodeConfig, ...values },
      },
    )

    message.success(`${XFlowNodeCommands.DEL_NODE.label}: 命令执行成功`)
  }

  return (
    <FormBuilder<IFormValues>
      form={form}
      formItems={formItems}
      onFinish={onFinish}
      initialValues={{
        id: null,
        label: null,
        x: null,
        y: null,
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
