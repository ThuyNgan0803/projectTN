import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Cascader, Carousel } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import "./style.css"
import DfHeader from '../header/DfHeader';
import Carou from '../carousel/Carousels'

const { Content, Sider } = Layout;

class DefaultLayout extends Component {
    render() {
        return (
            <Layout>
              <div className="header">
                <DfHeader/>
              </div>
              <div className = "carousel">
                <Carou/>
              </div>
              <Layout>
                <Sider width={200} className="site-layout-background">
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                  >
                  <Menu.Item key="1">Adidas</Menu.Item>
                  <Menu.Item key="2">Puma</Menu.Item>
                  <Menu.Item key="3">Nike</Menu.Item>
                  <Menu.Item key="4">Converse</Menu.Item>
                  </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                  </Breadcrumb>
                  <Content className="site-layout-background">
                    Content
                  </Content>
                </Layout>
              </Layout>
            </Layout>
        );
    }
}

export default DefaultLayout;