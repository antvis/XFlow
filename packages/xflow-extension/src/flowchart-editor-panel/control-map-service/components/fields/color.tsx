import React, { useState, useRef, memo } from 'react'
import { createPortal } from 'react-dom'
import type { IGraphConfig } from '@antv/xflow-core'
import { useXFlowApp } from '@antv/xflow-core'
import { Button } from 'antd'
import { SketchPicker } from 'react-color'
import { PREFIX } from '../constants'

export interface IProps {
  label?: string
  value?: string
  onChange?: (value: string) => void
  getContainer?: () => HTMLDivElement
}

const ColorPicker: React.FC<IProps> = props => {
  const { label, value = '', onChange, getContainer } = props
  const [show, setShow] = useState(false)
  const colorRef = useRef<string>(value)
  const containerRef = useRef<HTMLDivElement>()
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

  const getParentContainerByClassName = (currentEle: HTMLDivElement, className: string) => {
    const containers = document.getElementsByClassName(className)
    if (containers.length === 1) {
      return containers[0]
    }
    let container = null
    let currentNode = currentEle.parentElement
    while (!container) {
      const current = currentNode.getElementsByClassName(className)
      if (current?.length > 0) {
        container = current[0]
      }
      currentNode = currentNode.parentElement
    }
    return container
  }

  const createPickColorContainer = () => {
    const container =
      getContainer?.() ??
      getParentContainerByClassName(containerRef.current, 'flowchart-editor-panel-body')

    return createPortal(<PickContainer />, container)
  }

  return (
    <div className="group" ref={containerRef}>
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
      {show && createPickColorContainer()}
    </div>
  )
}

export default memo(ColorPicker, (pre, next) => {
  return pre.label === next.label && pre.value === next.value
})
