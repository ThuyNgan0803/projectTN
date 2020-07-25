import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

export default class DfSider extends Component {
    constructor(props) {
         super(props);
        this.state = {
            collapsed: false,
        }
    }
    onCollapse = collapsed => {
        this.setState({ collapsed });
      };
    render() {
        return (
            <Sider 
            width={200} 
            collapsible 
            collapsed={this.state.collapsed} 
            onCollapse={this.onCollapse}
            >
                  <Menu
                    mode="inline"
                    style={{ borderRight: 0 }}
                  >
                    <Menu.Item >Adidas</Menu.Item>
                    <Menu.Item >Converse</Menu.Item>
                    <Menu.Item >Nike</Menu.Item>
                    <Menu.Item >Puma</Menu.Item>
                    <Menu.Item >Vans</Menu.Item>
                  </Menu>
            </Sider>
        )
    }
}
