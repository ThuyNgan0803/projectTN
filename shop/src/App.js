import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Shop from './components/Shop'
import OurStory from './components/OurStory'
import Contact from './components/contact/Contact'
import Carl from './components/carousel/Carl'
import Footer from './components/footer/Footer'
import {
  createFromIconfontCN,
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar } from 'antd';
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
        DBN Shop
      </div>
      <div className="header">
        <ul>
          <li>
            <Link to= "/"><HomeOutlined /></Link>
          </li>
          <li>
            <Link to= "/Home">Home</Link>
          </li>
          <li>
            <Link to= "/Shop">Shop</Link>
          </li>
          <li>
            <Link to= "/OurStory">Our Story</Link>
          </li>
          <li>
            <Link to= "/Contact">Contact</Link>
          </li>
          <li className= "cart">
            <Link to= "/Cart"><IconFont type="icon-shoppingcart" /></Link>
          </li>
          <li className= "avt">
            <Link to= "/Login"><Avatar icon={<UserOutlined />} /></Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Carl/>
          </Route>
          <Route path="/Home">
            <Home />
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
