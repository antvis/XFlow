import React from 'react'
import { Card, Form, Input, message, Button } from 'antd'
import type { IFormSchema } from '@antv/xflow'
import { useXFlowApp, WorkspacePanel, FormBuilder, uuidv4, delay } from '@antv/xflow'
import type { NsGroupCmd } from '@antv/xflow'
import { XFlowGroupCommands } from '@antv/xflow'

interface IFormValues {
  nodeId: string
  isCollapsed: boolean
}

const formItems: IFormSchema[] = [
  {
    name: 'nodeId',
    label: 'nodeId',
    rules: [{ required: true }],
    renderProps: { disabled: true },
    render: Input,
  },
  {
    name: 'isCollapsed',
    label: 'isCollapsed',
    rules: [{ required: true }],
    renderProps: { disabled: true },
    render: Input,
  },
]

export const CmdForm = () => {
  const app = useXFlowApp()
  const [form] = Form.useForm<IFormValues>()
  const [isCollpase, setCollapsed] = React.useState(false)
  React.useEffect(() => {
    const setFormValue = async () => {
      await delay(1000)
      const graph = await app.getGraphInstance()
      const nodes = graph.getCells().filter(c => c.getProp('isGroup'))
      if (nodes[0]) {
        form.setFieldsValue({ nodeId: nodes[0].id })
      }
    }
    setFormValue()
  }, [app, form])
  const onFinish = async (values: IFormValues) => {
    console.log(values)
    setCollapsed(values.isCollapsed === true)
    await app.commandService.executeCommand<NsGroupCmd.CollapseGroup.IArgs>(
      XFlowGroupCommands.COLLAPSE_GROUP.id,
      {
        nodeId: values.nodeId,
        isCollapsed: values.isCollapsed,
      },
    )
    form.setFieldsValue({ isCollapsed: !values.isCollapsed })
    message.success(`${XFlowGroupCommands.COLLAPSE_GROUP.label}: 命令执行成功`)
  }

  return (
    <FormBuilder<IFormValues>
      form={form}
      formItems={formItems}
      onFinish={onFinish}
      initialValues={{
        nodeId: null,
        isCollapsed: true,
      }}
      submitButton={
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          执行{isCollpase ? '展开' : '折叠'}命令
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
