import React, { Component } from 'react';
import { Layout } from 'antd';
import "./style.css"
import DfHeader from '../components/header/DfHeader';
import Carou from '../components/carousel/Carousels'
import Contact from '../components/footer/Contact';
import Subscribe from '../components/footer/Subscribe';
import DfSider from '../components/sider/DfSider';
import Contents from '../components/content/Contents';

class DefaultLayout extends Component {
    render() {
        return (
            <Layout>
              <div className="sale">
                Sale 50%
              </div>
              <div className="option-header">
                <div className="logo">
                    DBN SHOP
                </div>
                <div className="header">
                  <DfHeader/>
                </div>
              </div>
              <div className = "carousel">
                <Carou/>
              </div>
              <Layout className= "content">
                <div className="sider">
                  <DfSider/>
                </div>
                <Contents/>
              </Layout>
              <div className="footer">
                <Contact/>
                <Subscribe/>
              </div>
            </Layout>
        );
    }
}

export default DefaultLayout;