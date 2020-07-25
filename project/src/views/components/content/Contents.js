import React, { Component } from 'react'
import { Layout, Breadcrumb } from 'antd';
import Cont1 from './Cont1';
const { Content } = Layout;

export default class Contents extends Component {
    render() {
        return (
            <Layout style={{ padding: '0 24px 24px' }}>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                  </Breadcrumb>
                  <Content className="site-layout">
                      <Cont1/>
                 </Content>
            </Layout>
        )
    }
}
