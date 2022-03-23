import React, { useState, useEffect } from 'react'
import { FlowchartFormWrapper } from '../../form-wrapper'
import { ColorPicker, InputNumberFiled, SelectField } from './fields'
import { LeftArrow, RightArrow, DoubleArrow, DottedLine, SolidLine } from './edit-icon'
import { PREFIX, DefaultEdgeConfig, STROKE_MAP, ARROW_MAP } from './constants'

export type MarkerCfg = {
  width?: number
  height?: number
  name?: string
}
export interface IConfig {
  label?: string
  attrs?: {
    line?: {
      stroke?: string
      strokeWidth?: number
      sourceMarker?: MarkerCfg
      targetMarker?: MarkerCfg
      strokeDasharray?: string
      strokeOpacity?: number
    }
  }
}

const EdgeComponent = props => {
  const { config, plugin = {} } = props
  const { updateEdge } = plugin

  const [edgeConfig, setEdgeConfig] = useState<IConfig>({
    ...DefaultEdgeConfig,
    ...config,
  })

  useEffect(() => {
    setEdgeConfig({
      ...DefaultEdgeConfig,
      ...config,
    })
  }, [config])

  const getAttrs = (key: string, type = 'line') => {
    const { attrs = {} } = edgeConfig
    return attrs[type]?.[key]
  }

  const getArrowValue = () => {
    const { attrs = {} } = edgeConfig
    const { line = {} } = attrs
    if (line.sourceMarker?.name && line.targetMarker?.name) {
      return 'all'
    }
    if (!line.sourceMarker?.name && !line.targetMarker?.name) {
      return 'none'
    }
    if (line.sourceMarker?.name) {
      return 'source'
    }
    return 'target'
  }

  const getSrokeDashValue = () => {
    const { attrs = {} } = edgeConfig
    const { line = {} } = attrs
    return line.strokeDasharray === '5 5' ? 'dash' : 'solid'
  }

  const onEdgeConfigChange = (
    key: string,
    value: number | string | object,
    type: string = 'line',
  ) => {
    /** 全量更新，简化逻辑 */
    if (key === 'arrow') {
      setEdgeConfig({
        ...edgeConfig,
        attrs: {
          ...edgeConfig.attrs,
          [type]: {
            ...edgeConfig.attrs?.[type],
            ...(value as object),
          },
        },
      })
    } else {
      setEdgeConfig({
        ...edgeConfig,
        [key]: value,
        attrs: {
          ...edgeConfig.attrs,
          [type]: {
            ...edgeConfig.attrs?.[type],
            [key]: value,
          },
        },
      })
    }

    updateEdge(
      {
        [key]: value,
      },
      type,
      key === 'arrow' ? 'arrow' : '',
    )
  }

  return (
    <div className={`${PREFIX}-panel-body`}>
      <div className={`${PREFIX}-panel-group`} style={{ marginBottom: 0 }}>
        <SelectField
          label="箭头"
          value={getArrowValue()}
          width={69}
          options={[
            {
              label: <LeftArrow />,
              value: 'target',
            },
            {
              label: <RightArrow />,
              value: 'source',
            },
            {
              label: <DoubleArrow />,
              value: 'all',
            },
            {
              label: '无',
              value: 'none',
            },
          ]}
          onChange={value => {
            onEdgeConfigChange('arrow', ARROW_MAP[value], 'line')
          }}
        />

        <div className={`${PREFIX}-edge-editor-style`}>
          <SelectField
            label="线形"
            width={68}
            value={getSrokeDashValue()}
            options={[
              {
                label: <SolidLine />,
                value: 'solid',
              },
              {
                label: <DottedLine />,
                value: 'dash',
              },
            ]}
            onChange={value => {
              onEdgeConfigChange('strokeDasharray', STROKE_MAP[value], 'line')
            }}
          />
        </div>
        <div className={`${PREFIX}-edge-editor-style`}>
          <InputNumberFiled
            label="线宽"
            value={getAttrs('strokeWidth')}
            min={1}
            width={68}
            onChange={value => {
              onEdgeConfigChange('strokeWidth', value, 'line')
            }}
          />
        </div>
        <ColorPicker
          label="边框"
          value={getAttrs('stroke')}
          onChange={(value: string) => {
            onEdgeConfigChange('stroke', value, 'line')
          }}
        />
        <div className={`${PREFIX}-edge-editor-style`}>
          <InputNumberFiled
            label="透明度"
            value={getAttrs('strokeOpacity')}
            min={0}
            max={1}
            step={0.1}
            width={68}
            onChange={value => {
              onEdgeConfigChange('strokeOpacity', value, 'line')
            }}
          />
        </div>
      </div>
    </div>
  )
}
export const EdgeStyle: React.FC<any> = props => {
  return (
    <FlowchartFormWrapper {...props} type="edge">
      {(config, plugin) => <EdgeComponent {...props} plugin={plugin} config={config} />}
    </FlowchartFormWrapper>
  )
}
