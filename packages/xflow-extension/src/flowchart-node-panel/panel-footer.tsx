import React, { useState } from 'react'
import { Modal, Checkbox, Button, Layout, Menu } from 'antd'
import { usePanelContext } from '../base-panel/context'
import type { IProps, ICheckboxOption } from './interface'
import { CHECKBOX_OPTIONS, TYPE_IMG_MAP } from './constants'
import { BUILDIN_NODE_TYPES } from './constants'
//import { storage } from '../../util/stroage'
import './style/index.less'

export interface IFooterProps extends IProps {
  visibleNodeTypes: string[]
  setVisibleNodeTypes: (visibleNodeTypes: string[]) => void
}

export const NodePanelFooter: React.FC<IFooterProps> = props => {
  const { prefixClz, visibleNodeTypes, setVisibleNodeTypes, registerNode = [] } = props
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [checkedValue, setCheckedValue] = useState<string[]>([...visibleNodeTypes])
  //被选中的节点分类菜单项
  const [typeImg, setTypeImg] = useState<string>('common')

  const { propsProxy } = usePanelContext<IProps>()
  const panelProps = propsProxy.getValue()
  const extraCheckBoxOptions: ICheckboxOption[] = registerNode.map(item => ({
    value: item.type,
    label: item.title,
    disabled: false,
  }))
  const checkBoxOptions: ICheckboxOption[] = [...CHECKBOX_OPTIONS, ...extraCheckBoxOptions]

  const handleModalOk = () => {
    setIsModalVisible(false)
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const visibleNodeTypes: string[] = []
    //重新排列 visibleNodeTypes 数组，防止乱序
    checkBoxOptions.forEach(option => {
      checkedValue.includes(option.value) && visibleNodeTypes.push(option.value)
    })
    setVisibleNodeTypes(visibleNodeTypes)
    window.localStorage.setItem('visibleNodeTypes', JSON.stringify(visibleNodeTypes))
  }

  const handleModalCancel = () => {
    setIsModalVisible(false)
    setCheckedValue([...visibleNodeTypes])
  }

  const handleClickMenuItem = ({ key }) => {
    setTypeImg(key)
  }

  return (
    <React.Fragment>
      <div
        className={`${prefixClz}-footer`}
        style={{
          zIndex: 1,
          ...props.style,
        }}
      >
        {panelProps.footer && React.isValidElement(panelProps.footer) && panelProps.footer}
        <Button onClick={() => setIsModalVisible(true)}>更多节点</Button>
        <Modal
          title="更多节点"
          visible={isModalVisible}
          onOk={handleModalOk}
          onCancel={handleModalCancel}
          okText="确定"
          cancelText="取消"
          bodyStyle={{ height: 300, padding: 0 }}
        >
          <Layout style={{ height: '100%' }}>
            <Layout.Sider theme="light" width={140}>
              <Checkbox.Group
                value={checkedValue}
                onChange={values => {
                  setCheckedValue(values as string[])
                }}
                style={{ width: '100%', height: '100%' }}
              >
                <Menu
                  style={{ width: '100%', height: '100%' }}
                  defaultSelectedKeys={['common']}
                  onClick={handleClickMenuItem}
                >
                  {checkBoxOptions.map(option => {
                    return (
                      <Menu.Item key={option.value}>
                        <Checkbox value={option.value} disabled={option.disabled} />
                        &nbsp;{option.label}
                      </Menu.Item>
                    )
                  })}
                </Menu>
              </Checkbox.Group>
            </Layout.Sider>
            <Layout.Content style={{ backgroundColor: '#fff' }}>
              <div className={`content-wrapper`}>
                {BUILDIN_NODE_TYPES.includes(typeImg) ? (
                  <img src={TYPE_IMG_MAP[typeImg]} alt="type" />
                ) : (
                  <span className={`text`}>自定义节点</span>
                )}
              </div>
            </Layout.Content>
          </Layout>
        </Modal>
      </div>
    </React.Fragment>
  )
}
