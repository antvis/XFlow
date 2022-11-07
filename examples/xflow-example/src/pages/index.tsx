import React from 'react'
import { Table } from 'antd'
import './index.less'

const dataSource = [
  {
    example: 'graph',
    description: '画布',
  },
].map((item, index) => ({ key: index, ...item }))

const columns = [
  {
    title: 'example',
    dataIndex: 'example',
    render(text: string) {
      return (
        <a href={`./${text}`} target="_blank" rel="noreferrer">
          {text}
        </a>
      )
    },
  },
  {
    title: 'description',
    dataIndex: 'description',
  },
]

export default function () {
  return (
    <div className="home">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        size="small"
      />
    </div>
  )
}
