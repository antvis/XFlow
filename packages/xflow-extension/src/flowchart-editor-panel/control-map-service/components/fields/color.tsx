import React, { useState, useRef, memo } from 'react'
import type { IGraphConfig } from '@antv/xflow-core'
import { useXFlowApp } from '@antv/xflow-core'
import { render } from 'react-dom'
import { Button } from 'antd'
import { SketchPicker } from 'react-color'
import { PREFIX } from '../constants'

interface IProps {
  label?: string
  value?: string
  onChange?: (value: string) => void
}

const ColorPicker: React.FC<IProps> = props => {
  const { label, value = '', onChange } = props
  const [show, setShow] = useState(false)
  const colorRef = useRef<string>(value)
  const { graphProvider } = useXFlowApp()
  const graphConfig = useRef<IGraphConfig>()
  graphProvider.getGraphOptions().then(x6GraphConfig => {
    graphConfig.current = x6GraphConfig
  })

  const PickContainer = () => {
    return (
      <div className={`${PREFIX}-popover`}>
        <SketchPicker
          style={{
            width: '100%',
          }}
          onChange={color => {
            colorRef.current = color.hex
          }}
        />
        <div className="foolter">
          <Button
            onClick={() => {
              setShow(false)
            }}
          >
            取消
          </Button>
          <Button
            type="primary"
            onClick={() => {
              onChange?.(colorRef.current)
              setShow(false)
            }}
          >
            确认
          </Button>
        </div>
      </div>
    )
  }
  /**  react-color mouseOver 和上层事件冲突，不得已为之，非 DI 环境应该不存在，后续改进 */
  const CreatePickColorContainer = (visible: boolean) => {
    const container = graphConfig.current?.graphContainer || document.body
    const exist: HTMLDivElement | null = document.querySelector(`#${PREFIX}-pick-color-container`)
    if (exist) {
      container.removeChild(exist)
    }
    if (!visible) {
      return
    }
    const div = document.createElement('div')
    div.id = `${PREFIX}-pick-color-container`
    div.className = `${PREFIX}-pick-color-container`
    render(<PickContainer />, div)
    container.appendChild(div)
  }

  return (
    <div className="group">
      {label && <label>{label}</label>}
      <div
        className={`${PREFIX}-color-container`}
        onClick={() => {
          setShow(true)
        }}
      >
        <div
          className={`${PREFIX}-color`}
          style={{
            backgroundColor: value,
            height: '100%',
          }}
        />
      </div>
      {CreatePickColorContainer(show)}
    </div>
  )
}

export default memo(ColorPicker, (pre, next) => {
  return pre.label === next.label && pre.value === next.value
})
