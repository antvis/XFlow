import React from 'react'
import { Card, Form, Input, message } from 'antd'
import type { IFormSchema } from '@antv/xflow'
import { usePanelContext, WorkspacePanel, randomInt, FormBuilder } from '@antv/xflow'
import type { NsGraph, NsNodeCmd } from '@antv/xflow'
import { XFlowNodeCommands } from '@antv/xflow'

export const width = 100
export const height = 40

type IFormValues = NsGraph.INodeConfig

const formItems: IFormSchema[] = [
  {
    name: 'id',
    label: 'id',
    rules: [{ required: true }],
    render: Input,
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
    render: Input,
  },
  {
    name: 'y',
    label: 'y',
    render: Input,
  },
  {
    name: 'width',
    label: 'width',
    render: Input,
  },
  {
    name: 'height',
    label: 'height',
    render: Input,
  },
]

let nodeId = 1

export const CmdForm = () => {
  const { commandService } = usePanelContext()
  const [form] = Form.useForm<IFormValues>()

  React.useEffect(() => {
    nodeId = 1
  }, [])

  const onFinish = async (values: IFormValues) => {
    commandService.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {
      nodeConfig: values,
    })
    nodeId += 1
    form.setFieldsValue({
      id: 'node_' + nodeId,
      x: randomInt(20, 600),
      y: randomInt(50, 270),
      width,
      height,
      label: 'Node_' + nodeId,
    })
    message.success(`${XFlowNodeCommands.ADD_NODE.label}: 命令执行成功`)
  }

  return (
    <FormBuilder<IFormValues>
      form={form}
      formItems={formItems}
      onFinish={onFinish}
      initialValues={{
        id: 'node_' + nodeId,
        x: randomInt(20, 100),
        y: randomInt(50, 150),
        width,
        height,
        label: 'Node_' + nodeId,
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
