import React, { Component } from 'react';
import "./style.css"
import { createFromIconfontCN } from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Shop from '../pages/Shop'
  import Contact from '../pages/Contact'
  import Login from '../pages/Login'
  import Home from '../pages/Home'

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', 
  ],
});

class DfHeader extends Component {
    render() {
        return (
            <Router>
            <div className="page">
                <div className = "header">
                    <ul className="menu-header">
                        <li className="home">
                            <Link to="/Home">Home</Link>
                        </li>
                        <li className="shop">
                            <Link to="/shop">Shop Collection</Link>
                        </li>
                        <li className="contact">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="login">
                            <Link to="/contact">Login</Link>
                        </li>
                        <li className="cart">
                            <a><IconFont type="icon-shoppingcart" /></a>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route path="/Home" component={ Home}>
                        <Home />
                    </Route>
                    <Route path="/shop" component={ Shop}>
                        <Shop/>
                    </Route>
                    <Route path="/contact" component={ Contact}>
                        <Contact/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    
                </Switch>
            </div>
        </Router>
        );
    }
}

export default DfHeader;