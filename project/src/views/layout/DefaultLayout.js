import React, { Component } from 'react';
import { Layout } from 'antd';
import "./style.css"
import DfHeader from '../componets/header/DfHeader';
import Carou from '../componets/carousel/Carousels'
import Contact from '../componets/footer/Contact';
import Subscribe from '../componets/footer/Subscribe';
import DfSider from '../componets/sider/DfSider';
import Contents from '../componets/content/Contents';

class DefaultLayout extends Component {
    render() {
        return (
            <Layout>
              <div className="sale">
                Sale 50%
              </div>
              <div className = "carousel">
                <Carou/>
              </div>
              <div className="option-header">
                <div className="logo">
                    DBN SHOP
                </div>
                <div className="header">
                  <DfHeader/>
                </div>
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