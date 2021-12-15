import React, { useState, useRef, memo } from 'react'
import { render, createPortal } from 'react-dom'
import type { IGraphConfig } from '@antv/xflow-core'
import { useXFlowApp } from '@antv/xflow-core'
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
      <div className={`${PREFIX}-pick-color-container`}>
        <div className={`${PREFIX}-popover`}>
          <SketchPicker
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
      </div>
    )
  }

  const createPickColorContainer = (visible: boolean) => {
    const existElements = document.getElementsByClassName(`${PREFIX}-pick-color-container`)
    if (existElements.length) {
      Array.from(existElements).forEach(ele => {
        ele.parentNode?.removeChild(ele)
      })
    }
    if (!visible) {
      return
    }
    const div = document.createElement('div')
    render(createPortal(<PickContainer />, document.getElementsByTagName('body')[0]), div)
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
      {createPickColorContainer(show)}
    </div>
  )
}

export default memo(ColorPicker, (pre, next) => {
  return pre.label === next.label && pre.value === next.value
})
