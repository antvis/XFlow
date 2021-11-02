import React from 'react'
import { Card, Form, Input, message } from 'antd'
import { usePanelContext, WorkspacePanel, randomInt, FormBuilder, IFormSchema } from '@antv/xflow'
import { NsGraph, NsNodeCmd, XFlowNodeCommands } from '@antv/xflow'

interface IFormValues extends NsGraph.INodeConfig {}

const formItems: IFormSchema[] = [
  {
    name: 'x',
    label: 'x',
    render: Input,
    rules: [{ required: true }],
  },
  {
    name: 'y',
    label: 'y',
    render: Input,
    rules: [{ required: true }],
  },
  {
    name: 'width',
    label: 'width',
    render: Input,
    rules: [{ required: true }],
  },
  {
    name: 'height',
    label: 'height',
    render: Input,
    rules: [{ required: true }],
  },
  {
    name: 'info',
    label: 'info',
    render: Input,
  },
]

export const CmdForm = () => {
  const { commands } = usePanelContext()
  const [form] = Form.useForm<IFormValues>()

  const onFinish = async (values: IFormValues) => {
    commands.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
      nodeConfig: {
        ...values,
        id: 'node1',
      },
    } as NsNodeCmd.UpdateNode.IArgs)

    form.setFieldsValue({
      id: 'node1',
      x: randomInt(0, 560),
      y: randomInt(0, 200),
      width: 80 + randomInt(0, 100),
      height: 20 + randomInt(0, 50),
      info: 'Hello world ' + randomInt(0, 100),
    })
    message.success(`${XFlowNodeCommands.UPDATE_NODE.label}: 命令执行成功`)
  }

  return (
    <FormBuilder<IFormValues>
      form={form}
      formItems={formItems}
      onFinish={onFinish}
      initialValues={{
        id: 'node1',
        x: randomInt(0, 560),
        y: randomInt(0, 200),
        width: 120 + randomInt(0, 100),
        height: 40 + randomInt(0, 50),
        info: 'Hello world ' + randomInt(0, 100),
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
