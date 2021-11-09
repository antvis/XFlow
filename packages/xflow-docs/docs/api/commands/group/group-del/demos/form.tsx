import React from 'react'
import { Card, Form, Input, message, Button } from 'antd'
import type { IFormSchema } from '@antv/xflow'
import { useXFlowApp, WorkspacePanel, FormBuilder, uuidv4, delay } from '@antv/xflow'
import type { NsGroupCmd } from '@antv/xflow'
import { XFlowGroupCommands } from '@antv/xflow'

interface IFormValues {
  id: string
}

const formItems: IFormSchema[] = [
  {
    name: 'id',
    label: 'id',
    rules: [{ required: true }],
    renderProps: { disabled: true },
    render: Input,
  },
]

export const CmdForm = () => {
  const app = useXFlowApp()
  const [form] = Form.useForm<IFormValues>()
  const [hasGroup, setGroup] = React.useState(false)
  React.useEffect(() => {
    const setFormValue = async () => {
      await delay(1000)
      const graph = await app.getGraphInstance()
      const nodes = graph.getCells().filter(c => c.getProp('isGroup'))
      console.log(nodes, graph.getCells())
      if (nodes[0]) {
        form.setFieldsValue({ id: nodes[0].id })
      }
    }
    setFormValue()
  }, [app, form])
  const onFinish = async (values: IFormValues) => {
    const nodeConfig = {
      ...values,
    }
    setGroup(true)
    console.log(nodeConfig)
    await app.commandService.executeCommand<NsGroupCmd.DelGroup.IArgs>(
      XFlowGroupCommands.DEL_GROUP.id,
      {
        nodeConfig: nodeConfig,
      },
    )

    message.success(`${XFlowGroupCommands.DEL_GROUP.label}: 命令执行成功`)
  }

  return (
    <FormBuilder<IFormValues>
      form={form}
      formItems={formItems}
      onFinish={onFinish}
      initialValues={{
        id: null,
      }}
      submitButton={
        <Button type="primary" htmlType="submit" style={{ width: '100%' }} disabled={hasGroup}>
          执行命令
        </Button>
      }
    />
  )
}

export const FormPanel = () => {
  return (
    <WorkspacePanel position={{ top: 0, left: 0, bottom: 0, width: 230 }} className="panel">
      <Card title="Group Options" size="small" bordered={false}>
        <CmdForm />
      </Card>
    </WorkspacePanel>
  )
}
