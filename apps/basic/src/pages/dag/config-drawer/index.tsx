import { useGraphStore, useGraphEvent } from '@antv/xflow';
import { Drawer, Space, Button, Form, Input } from 'antd';
import { useState } from 'react';

interface NodeData {
  id: string;
  label?: string;
  status?: 'default' | 'running' | 'success' | 'failed';
}
const ConfigDrawer = () => {
  const [form] = Form.useForm();
  const updateNode = useGraphStore((state) => state.updateNode);
  const [open, setOpen] = useState(false);
  const [nodeData, setNodeData] = useState<NodeData>();

  const onClose = () => {
    setOpen(false);
    form.resetFields();
  };

  const onSave = () => {
    form.validateFields().then(({ label }) => {
      updateNode(nodeData?.id as string, {
        data: {
          ...nodeData,
          label,
        },
      });
      onClose();
    });
  };

  useGraphEvent('node:click', ({ node }) => {
    const { data, id } = node;
    setOpen(true);
    setNodeData({ ...data, id });
    form.setFieldsValue(data);
  });

  useGraphEvent('blank:click', () => {
    onClose();
  });

  return (
    <Drawer
      width={300}
      open={open}
      title="组件信息"
      destroyOnClose
      mask={false}
      onClose={onClose}
      footer={
        <Space>
          <Button onClick={onClose}>取消</Button>
          <Button onClick={onSave} type="primary">
            保存
          </Button>
        </Space>
      }
    >
      <Form form={form} layout="vertical" requiredMark={false} autoComplete="off">
        <Form.Item
          name="label"
          label="组件名"
          rules={[{ required: true, message: '请填写组件名称' }]}
        >
          <Input placeholder="请填写组件名称" />
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export { ConfigDrawer };
