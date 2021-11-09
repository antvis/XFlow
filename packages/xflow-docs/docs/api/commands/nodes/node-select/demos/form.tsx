import React from 'react'
import { Card, Form, Input, Switch, message } from 'antd'
import type { IFormSchema } from '@antv/xflow'
import { useXFlowApp, WorkspacePanel, FormBuilder } from '@antv/xflow'
import type { NsNodeCmd } from '@antv/xflow'
import { XFlowNodeCommands } from '@antv/xflow'

interface IFormValues {
  nodeIds: string
  resetSelection: boolean
}

const formItems: IFormSchema[] = [
  {
    name: 'nodeIds',
    label: 'nodeIds',
    rules: [{ required: true }],
    render: Input,
    renderProps: { disabled: true },
  },
  {
    name: 'resetSelection',
    label: 'resetSelection',
    rules: [{ required: true }],
    render: Switch,
    itemProps: {
      valuePropName: 'checked',
    },
  },
]

let nodeIdx = 1
export const CmdForm = () => {
  const app = useXFlowApp()
  const [form] = Form.useForm<IFormValues>()

  const onFinish = async (values: IFormValues) => {
    const args: NsNodeCmd.SelectNode.IArgs = {
      nodeIds: [values.nodeIds],
      resetSelection: values.resetSelection,
    }
    app.commandService.executeCommand<NsNodeCmd.SelectNode.IArgs>(
      XFlowNodeCommands.SELECT_NODE.id,
      args,
    )
    console.log('executeCommand with args :', args)
    message.success(`${XFlowNodeCommands.DEL_NODE.label}: 命令执行成功`)
    // 轮流选中
    if (nodeIdx < 3) {
      nodeIdx += 1
    } else {
      nodeIdx = 1
    }
    form.setFieldsValue({
      nodeIds: `node${nodeIdx}`,
    })
  }

  return (
    <FormBuilder<IFormValues>
      layout="vertical"
      form={form}
      formItems={formItems}
      onFinish={onFinish}
      initialValues={{
        nodeIds: `node${nodeIdx}`,
        resetSelection: true,
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
