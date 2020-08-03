import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Shop from './components/homepage/Shop'
import Login from './components/Login'
import OurStory from './components/OurStory'
import Contact from './components/contact/Contact'
import Carl from './components/carousel/Carl'
import Footer from './components/footer/Footer'
import Products from './components/products/Products'
import {
  createFromIconfontCN,
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Avatar, Divider } from 'antd';
import "./App.css"

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', 
  ],
});

function App() {
  return (
    <>
    <Router >
      <div className="sale">
        Sale 70%
      </div>
      <div className="logo">
        shop
      </div>
      <div className="header">
        <ul>
          <li>
            <Link className="header-item" to= "/"><HomeOutlined /></Link>
          </li>
          <div className="header-center">
            <li>
              <Link className="header-item"  to= "/Shop">Shop</Link>
            </li>
            <li>
              <Link className="header-item"  to= "/OurStory">Our Story</Link>
            </li>
            <li>
              <Link className="header-item"  to= "/Contact">Contact</Link>
            </li>
          </div>
          <li className= "cart">
            <Link to= "/Cart"><IconFont type="icon-shoppingcart" /></Link>
          </li>
          <li className= "avt ">
            <Link to= "/Login"><Avatar icon={<UserOutlined />} /></Link>
          </li>
        </ul>
      </div>
      <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <div className="carl-page">
              <Carl/>
            </div>
            <div className="products">
              <Products/>
            </div>
          </Route>
          <Route path="/Shop">
            <Shop/>
          </Route>
          <Route path="/OurStory">
            <OurStory/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
          <Route path="/Cart">
            Cart
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
      </Switch>
      </div>
      <div className="end-page">
        <Footer/>
      </div>
    </Router>
    </>
  );
}

export default App;
