import React from 'react'
import { Card, Form, Input, message } from 'antd'
import type { IFormSchema } from '@antv/xflow'
import { usePanelContext, WorkspacePanel, FormBuilder } from '@antv/xflow'
import type { NsNodeCmd } from '@antv/xflow'
import { XFlowNodeCommands } from '@antv/xflow'

interface IFormValues {
  nodeId: string
}

const formItems: IFormSchema[] = [
  {
    name: 'nodeId',
    label: 'nodeId',
    rules: [{ required: true }],
    render: Input,
    renderProps: { disabled: true },
  },
]

export const CmdForm = () => {
  const { commandService } = usePanelContext()
  const [form] = Form.useForm<IFormValues>()

  const onFinish = async (values: IFormValues) => {
    commandService.executeCommand<NsNodeCmd.BackNode.IArgs>(XFlowNodeCommands.BACK_NODE.id, values)
    console.log('executeCommand with args', values)
    message.success(`${XFlowNodeCommands.BACK_NODE.label}: 命令执行成功`)
    form.setFieldsValue({
      nodeId: values.nodeId === 'node1' ? 'node2' : 'node1',
    })
  }

  return (
    <FormBuilder<IFormValues>
      form={form}
      formItems={formItems}
      onFinish={onFinish}
      initialValues={{
        nodeId: 'node1',
      }}
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
