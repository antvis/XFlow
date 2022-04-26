import React from 'react'
import { Deferred, ManaSyringe } from '@antv/xflow'
import { Modal, Form, Input, ConfigProvider } from 'antd'

import { ICommandContextProvider } from '@antv/xflow'

import { CustomCommands } from './constants'

export const NsRenameNodeCmd = {}
/** Command: 用于注册named factory */
NsRenameNodeCmd.command = CustomCommands.SHOW_RENAME_MODAL
/** hook name */
NsRenameNodeCmd.hookKey = 'renameNode'

@ManaSyringe.injectable()
/** 部署画布数据 */
export class RenameNodeCommand {
  /** api */
  @ManaSyringe.inject(ICommandContextProvider) contextProvider

  /** 执行Cmd */
  execute = async () => {
    const ctx = this.contextProvider()
    const { args /* , hooks */ } = ctx.getArgs()
    const hooks = ctx.getHooks()
    const result = await hooks.renameNode.call(args, async args => {
      const { nodeConfig, graphMeta, commandService, modelService, updateNodeNameService } = args
      const preNodeName = nodeConfig.label

      const getAppContext = () => {
        return {
          graphMeta,
          commandService,
          modelService,
          updateNodeNameService,
        }
      }

      const x6Graph = await ctx.getX6Graph()
      const cell = x6Graph.getCellById(nodeConfig.id)

      if (!cell || !cell.isNode()) {
        throw new Error(`${nodeConfig.id} is not a valid node`)
      }
      /** 通过modal 获取 new name */
      const newName = await showModal(nodeConfig, getAppContext)
      /** 更新 node name  */
      if (newName) {
        const cellData = cell.getData()
        cell.setData({ ...cellData, label: newName })
        return { err: null, preNodeName, currentNodeName: newName }
      }
      return { err: null, preNodeName, currentNodeName: '' }
    })

    ctx.setResult(result)
    return this
  }

  /** undo cmd */
  undo = async () => {
    if (this.isUndoable()) {
      const ctx = this.contextProvider()
      ctx.undo()
    }
    return this
  }

  /** redo cmd */
  redo = async () => {
    if (!this.isUndoable()) {
      await this.execute()
    }
    return this
  }

  isUndoable() {
    const ctx = this.contextProvider()
    return ctx.isUndoable()
  }
}

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
}

function showModal(node, getAppContext) {
  /** showModal 返回一个Promise */
  const defer = new Deferred()

  /** modal确认保存逻辑 */
  class ModalCache {
    static modal
    static form
  }

  /** modal确认保存逻辑 */
  const onOk = async () => {
    const { form, modal } = ModalCache
    const appContext = getAppContext()
    const { updateNodeNameService, graphMeta } = appContext
    try {
      modal.update({ okButtonProps: { loading: true } })
      await form.validateFields()
      const values = await form.getFieldsValue()
      const newName = values.newNodeName
      /** 执行 backend service */
      if (updateNodeNameService) {
        const { err, nodeName } = await updateNodeNameService(newName, node, graphMeta)
        if (err) {
          throw new Error(err)
        }
        defer.resolve(nodeName)
      }
      /** 更新成功后，关闭modal */
      onHide()
    } catch (error) {
      console.error(error)
      /** 如果resolve空字符串则不更新 */
      modal.update({ okButtonProps: { loading: false } })
    }
  }

  /** modal销毁逻辑 */
  const onHide = () => {
    modal.destroy()
    ModalCache.form = null
    ModalCache.modal = null
    container.destroy()
  }

  /** modal内容 */
  const ModalContent = () => {
    const [form] = Form.useForm()
    /** 缓存form实例 */
    ModalCache.form = form

    return (
      <div>
        <ConfigProvider>
          <Form form={form} {...layout} initialValues={{ newNodeName: node.label }}>
            <Form.Item
              name="newNodeName"
              label="节点名"
              rules={[
                { required: true, message: '请输入新节点名' },
                { min: 3, message: '节点名不能少于3个字符' },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </ConfigProvider>
      </div>
    )
  }
  /** 创建modal dom容器 */
  const container = createContainer()
  /** 创建modal */
  const modal = Modal.confirm({
    title: '重命名',
    content: <ModalContent />,
    getContainer: () => {
      return container.element
    },
    okButtonProps: {
      onClick: e => {
        e.stopPropagation()
        onOk()
      },
    },
    onCancel: () => {
      onHide()
    },
    afterClose: () => {
      onHide()
    },
  })

  /** 缓存modal实例 */
  ModalCache.modal = modal

  /** showModal 返回一个Promise，用于await */
  return defer.promise
}

const createContainer = () => {
  const div = document.createElement('div')
  div.classList.add('xflow-modal-container')
  window.document.body.append(div)
  return {
    element: div,
    destroy: () => {
      window.document.body.removeChild(div)
    },
  }
}
