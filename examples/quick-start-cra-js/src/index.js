import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import 'antd/dist/antd.css'
import { Tabs } from 'antd'
import BasicDemo from './xflow/basic'
import DagDemo from './xflow/dag'
import FlowDemo from './xflow/flow'
import reportWebVitals from './reportWebVitals'

const { TabPane } = Tabs

ReactDOM.render(
  <React.StrictMode>
    <Tabs type="card">
      <TabPane tab="Basic" key="1" style={{ minHeight: 600, height: 'calc(100vh - 56px)' }}>
        <BasicDemo />
      </TabPane>
      <TabPane tab="Dag" key="2" style={{ minHeight: 600, height: 'calc(100vh - 56px)' }}>
        <DagDemo />
      </TabPane>
      <TabPane tab="Flow" key="3" style={{ minHeight: 600, height: 'calc(100vh - 56px)' }}>
        <FlowDemo />
      </TabPane>
    </Tabs>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
