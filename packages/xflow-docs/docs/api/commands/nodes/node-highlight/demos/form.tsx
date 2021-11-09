import React from 'react'
import { Card, Form, Input, InputNumber, message } from 'antd'
import type { IFormSchema } from '@antv/xflow'
import { usePanelContext, WorkspacePanel, FormBuilder } from '@antv/xflow'
import type { NsNodeCmd } from '@antv/xflow'
import { XFlowNodeCommands } from '@antv/xflow'

export const width = 100
export const height = 40

interface IFormValues {
  nodeId: string
  stroke: string
  strokeWidth: number
}

const formItems: IFormSchema[] = [
  {
    name: 'nodeId',
    label: 'nodeId',
    rules: [{ required: true }],
    render: Input,
  },
  {
    name: 'stroke',
    label: 'stroke',
    rules: [{ required: true }],
    render: Input,
  },
  {
    name: 'strokeWidth',
    label: 'strokeWidth',
    render: InputNumber,
    renderProps: {
      min: 1,
      max: 7,
    },
  },
]

export const CmdForm = () => {
  const { commandService } = usePanelContext()
  const [form] = Form.useForm<IFormValues>()
  const onFinish = async (values: IFormValues) => {
    commandService.executeCommand<NsNodeCmd.HighlightNode.IArgs>(
      XFlowNodeCommands.HIGHLIGHT_NODE.id,
      {
        ...values,
      },
    )
    console.log('XFlowNodeCommands.HIGHLIGHT_NODE.id', values)
    message.success(`${XFlowNodeCommands.HIGHLIGHT_NODE.label}: 命令执行成功`)
  }

  return (
    <FormBuilder<IFormValues>
      form={form}
      formItems={formItems}
      onFinish={onFinish}
      initialValues={{
        nodeId: 'node1',
        stroke: '#873bf4',
        strokeWidth: 3,
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
