import type { DisposableCollection } from '@antv/xflow-core'
import type { IProps } from '../interface'
import React from 'react'
import { Dropdown } from '@antv/x6-react-components'
import { useXFlowApp, useModelAsync } from '@antv/xflow-core'
import { CONTEXT_MENU_MODEL } from '../interface'
import { XFlowMenu } from './menu'

const DisposeHelper: React.FC<{ toDispose: DisposableCollection }> = ({ toDispose }) => {
  React.useEffect(() => {
    return () => {
      toDispose.dispose()
    }
  }, [toDispose])

  return null
}

export const ContextMenuRender: React.FC<IProps> = () => {
  const domRef = React.useRef<HTMLDivElement>()
  const xflow = useXFlowApp()

  const [state, , renderModel] = useModelAsync<CONTEXT_MENU_MODEL.IState>({
    /** 绑定Model到state */
    getModel: async () => {
      return await CONTEXT_MENU_MODEL.getModel(xflow.modelService)
    },
    /** 设置state的默认值 */
    initialState: {
      anchor: null,
      menuModel: null,
      target: null,
      customRender: null,
      toDispose: null,
    },
  })

  const { target, anchor, menuModel, customRender, toDispose } = state

  if (!target || !anchor || !menuModel) {
    return null
  }

  const onMaskClick = () => {
    renderModel.setValue({
      anchor: null,
      menuModel: null,
      target: null,
      customRender: null,
      toDispose: null,
    })
  }

  const overlay = customRender ? (
    React.createElement(customRender, {
      target,
      modelService: xflow.modelService,
      onHide: onMaskClick,
    })
  ) : (
    <XFlowMenu target={target} menuModel={menuModel} onHide={onMaskClick} />
  )

  return (
    <div
      className="xflow-menu-mask"
      ref={domRef}
      onClick={onMaskClick}
      onContextMenu={e => {
        e.preventDefault()
        e.stopPropagation()
      }}
    >
      <DisposeHelper toDispose={toDispose} />
      <Dropdown visible getPopupContainer={() => domRef.current} overlay={overlay}>
        <div className="xflow-context-menu-anchor" style={{ top: anchor.y, left: anchor.x }} />
      </Dropdown>
    </div>
  )
}
