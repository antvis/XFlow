import React from 'react'
import type { NsGraph } from '@antv/xflow'
import type { EntityCanvasModel, EntityProperty } from '../interface'
import { BarsOutlined, EllipsisOutlined } from '@ant-design/icons'
import { EntityType } from '../const'

import './Entity.less'

const Entity: NsGraph.INodeRender = props => {
  const entity: EntityCanvasModel = props?.data

  const getCls = () => {
    if (entity?.entityType === EntityType.FACT) {
      return 'fact'
    }
    if (entity?.entityType === EntityType.DIM) {
      return 'dim'
    }
    if (entity?.entityType === EntityType.OTHER) {
      return 'other'
    }
    return ''
  }
  return (
    <div className={`entity-container ${getCls()}`}>
      <div className={`content ${getCls()}`}>
        <div className="head">
          <div>
            <BarsOutlined className="type" />
            <span>{entity?.entityName}</span>
          </div>
          <EllipsisOutlined />
        </div>
        <div className="body">
          {entity?.properties?.map((property: EntityProperty) => {
            return (
              <div className="body-item" key={property.propertyId}>
                <div className="name">
                  {property?.isPK && <span className="pk">PK</span>}
                  {property?.isFK && <span className="fk">FK</span>}
                  {property?.propertyName}
                </div>
                <div className="type">{property.propertyType}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Entity
