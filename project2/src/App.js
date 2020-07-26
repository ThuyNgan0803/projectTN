import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Shop from './components/Shop'
import OurStory from './components/OurStory'
import Contact from './components/Contact'
import Carousels from './components/carousel/Carousels'
import {
  createFromIconfontCN,
  HomeOutlined,
} from '@ant-design/icons';
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
        Logo Shop
      </div>
      <div className="header">
        <ul>
          <li>
            <Link to= "/Slider"><HomeOutlined /></Link>
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
        </ul>
      </div>
      <div className="content">
        <Switch>
          <Route path="/Slider">
            <Carousels/>
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
          {/* <Route path="/Cart">
            
          </Route> */}
      </Switch>
      </div>
      <div className="footer">Footer</div>
    </Router>
    </>
  );
}

export default App;
