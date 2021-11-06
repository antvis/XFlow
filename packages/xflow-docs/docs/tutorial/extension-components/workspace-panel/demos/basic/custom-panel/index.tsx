import {
  WorkspacePanel,
  usePanelContext,
  useXFlowApp,
  MODELS,
  XFlowNodeCommands,
  useModelAsync,
  randomInt,
  uuidv4,
} from '@antv/xflow'
import type { IPosition, NsNodeCmd } from '@antv/xflow'
import { Card, Form, Button, Input, message } from 'antd'
export interface IPanelProps {
  position: IPosition
}

export const ModelServieCard = () => {
  const app = useXFlowApp()
  const [cells] = useModelAsync<MODELS.SELECTED_NODES.IState>({
    getModel: async () => MODELS.SELECTED_NODES.getModel(app.modelService),
    initialState: [],
  })
  return (
    <Card title="Model Service " size="small">
      <div> 当前选中节点数量: {cells.length} </div>
    </Card>
  )
}

export const CommandServieCard = () => {
  const app = useXFlowApp()
  const onFinish = values => {
    if (!values.label) {
      return message.warn(`请输入节点名`)
    }
    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {
      nodeConfig: {
        id: uuidv4(),
        label: values.label,
        x: randomInt(50, 100),
        y: randomInt(50, 100),
        width: 160,
        height: 30,
      },
    })
  }

  return (
    <Card title="Command Service " size="small">
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item name="label" label="节点名" required requiredMark>
          <Input placeholder="node label" />
        </Form.Item>
        <Form.Item name="label">
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            执行AddNode命令
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export const X6GraphCard = () => {
  const app = useXFlowApp()
  const callX6Api = async () => {
    const x6 = await app.getGraphInstance()
    const cells = x6.getCells()
    console.log('x6 graph', x6)
    message.info(`x6 画布已有cell: ${cells.length} 个`)
    // 请勿绕过command 直接修改画布数据
  }
  return (
    <Card title="use X6 Graph " size="small">
      <Button type="primary" htmlType="submit" onClick={callX6Api} style={{ width: '100%' }}>
        获取X6 Cells 数量
      </Button>
    </Card>
  )
}

export const CustomPanel: React.FC = () => {
  const { propsProxy } = usePanelContext()
  const app = useXFlowApp()
  const props = propsProxy.getValue()
  console.log('can use root component props:', props)
  console.log('can use app', app)

  return (
    <div className="card-wrap">
      <ModelServieCard />
      <CommandServieCard />
      <X6GraphCard />
    </div>
  )
}

export default (props: IPanelProps) => {
  return (
    <WorkspacePanel {...props}>
      <CustomPanel />
    </WorkspacePanel>
  )
}
